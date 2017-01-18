import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { Contest } from '../../models/contest';
import { ContestsService } from '../../services/contests.service';
import { ErrorService } from '../../errors/index';
import { AuthService } from '../../services/auth.service';
import { ApiService } from '../../services/api.service';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Params, ActivatedRoute, Router } from '@angular/router';
import { NotificationsService } from 'angular2-notifications';

@Component({
  moduleId: module.id,
  selector: 'submition-comments-section',
  templateUrl: 'submition-comments-section.component.html',
  styleUrls: ['submition-comments-section.component.css']
})
export class SubmitionCommentsSectionComponent implements OnInit {
   //public commentsForm: FormGroup;
   //@ViewChild('comment') comment;
   @Input() contest;
   @Input() submition;
   comments: any[] = [];
   commentField: string;
   userId: string = '';
   user: any;
   contestId: string;
   isLoading = false;
   public options = {
      position: ["top","right"]
    };
   constructor(private contestsService: ContestsService,
              private errorService: ErrorService,
              private authService: AuthService,
              private apiService: ApiService,
              private fb: FormBuilder,
              private route: ActivatedRoute,
              private router: Router,
              private notificationsService: NotificationsService) { 
                
              }
              

  ngOnInit() {
    this.isLoading = true;
    this.contestId = this.contest.idName;
    this.userId = sessionStorage.getItem('userId');
    this.apiService.getUserInfo(this.userId)
      .subscribe(user => {
        this.user = user;
      },
      error => {
        this.isLoading = false;
      });
    this.apiService.getSubmitionComments(this.contestId, this.submition.submitionId)
      .subscribe(comments => {
        if (comments != undefined) {
        this.comments = comments;
        }
        this.isLoading = false;
      },
      error => {
          this.isLoading = false;
          this.notificationsService.error(error.title, error.error.message, {timeOut: 3000, showProgressBar: false})
      });
   }

  addComment(comment: string) {
    this.isLoading = true;
    if (!comment) {
      this.isLoading = false;
      this.notificationsService.info('Tuščias komentaras', 'Komentaro laukas negali būti tuščias', {timeOut: 3000, showProgressBar: true})
    } else {
    this.comments.push({comment: comment, commentAuthor: this.user, commentDate: Date.now()});
    this.apiService.addSubmitionComment({comment: comment, commentAuthor: this.user}, this.contestId, this.submition.submitionId)
      .subscribe(contest => {
        this.isLoading = false;
        this.notificationsService.success('Įkelta', 'Komentaras įkeltas', {timeOut: 3000, showProgressBar: false});
      }, 
      error => {
          this.isLoading = false;
          this.notificationsService.error(error.title, error.error.message, {timeOut: 3000, showProgressBar: false})
      });
    this.commentField = '';
    }
  }

  isDesigner() {
    return this.authService.isDesigner();
  }

  isContestPublisher(contestAuthorId: string) {
    var userId = sessionStorage.getItem('userId');
    return contestAuthorId == userId;
  }

  isClient() {
    return this.authService.isClient();
  }

  isSubmitionAuthor() {
    return this.submition.submitionAuthor._id == this.userId
  }

  isLoggedIn() {
    return this.authService.isLoggedIn();
  }

  isAdmin() {
    return this.authService.isAdmin();
  }

  goBack() {
    this.router.navigate(['/konkursai', this.contest.idName]);
  }

}