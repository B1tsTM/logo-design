import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { Contest } from '../../models/contest';
import { ContestsService } from '../../services/contests.service';
import { ErrorService } from '../../errors/index';
import { AuthService } from '../../services/auth.service';
import { ApiService } from '../../services/api.service';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Params, ActivatedRoute } from '@angular/router';
import { NotificationsService } from 'angular2-notifications';

@Component({
  moduleId: module.id,
  selector: 'comments-section',
  templateUrl: 'comments-section.component.html'
})
export class CommentsSectionComponent implements OnInit {
   //public commentsForm: FormGroup;
   //@ViewChild('comment') comment;
   @Input() contest;
   comments: any[] = [];
   commentField: string;
   userId: string = '';
   user: any;
   contestId: string;
   public options = {
      position: ["top","right"]
    };
   constructor(private contestsService: ContestsService,
              private errorService: ErrorService,
              private authService: AuthService,
              private apiService: ApiService,
              private fb: FormBuilder,
              private route: ActivatedRoute,
              private notificationsService: NotificationsService) { 
                
              }
              

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
    this.contestId = params['id'];
    });
    this.userId = localStorage.getItem('userId');
    this.apiService.getUserInfo(this.userId)
      .subscribe(user => {
        console.log('comments-section comp user var');
        console.log(user);
        this.user = user;
      },
      error => {
          this.errorService.handleError(error);
      });
    this.apiService.getComments(this.contestId)
      .subscribe(comments => {
        console.log('comments-section getComments comments var');
        console.log(comments);
        this.comments = comments;
        console.log('this.comments');
        console.log(this.comments);
      },
      error => {
          //this.errorService.handleError(error);
          this.notificationsService.error('Įvyko klaida', 'Nepavyko gauti komentarų', {timeOut: 3000, showProgressBar: false})
      });
      // this.commentsForm = this.fb.group({
      //   comment: ['']
      // });
   }

//  addComment(form: any) {
//         //console.log(comment.value);
//         console.log(form);
//         console.log(form.comment.value);
//         //this.comment.value = '';
//     }
  addComment(comment: string) {
    console.log(comment);
    this.comments.push({comment: comment, commentAuthor: this.user});
    this.apiService.addComment({comment: comment, commentAuthor: this.user}, this.contestId)
      .subscribe(comments => {
        console.log('comments-section addComment comments var');
        console.log(comments);
        this.comments = comments;
        this.notificationsService.success('Prisijungta', 'Komentaras įkeltas', {timeOut: 3000, showProgressBar: false});
      }, 
      error => {
          //this.errorService.handleError(error);
          this.notificationsService.error('Įvyko klaida', 'Nepavyko pridėti komentaro', {timeOut: 3000, showProgressBar: false})
      });
    this.commentField = '';
    console.log(this.comments);
  }

  isDesigner() {
    return this.authService.isDesigner();
  }

  isContestPublisher(contestAuthorId: string) {
    var userId = localStorage.getItem('userId');
    return contestAuthorId == userId;
  }

  isClient() {
    return this.authService.isClient();
  }

}