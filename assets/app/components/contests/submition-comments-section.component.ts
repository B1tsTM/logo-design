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
  selector: 'submition-comments-section',
  templateUrl: 'submition-comments-section.component.html'
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
              private notificationsService: NotificationsService) { 
                
              }
              

  ngOnInit() {
    this.isLoading = true;
    // this.route.params.subscribe((params: Params) => {
    // this.contestId = params['id'];
    //});
    //console.log('DEBUG SUBMITIONAUTHOR');
    //console.log(this.submition.submitionAuthor);
    this.contestId = this.contest.idName;
    console.log('DEBUG contest idname');
    console.log(this.contestId);
    this.userId = sessionStorage.getItem('userId');
    this.apiService.getUserInfo(this.userId)
      .subscribe(user => {
        console.log('comments-section comp user var');
        console.log(user);
        this.user = user;
      },
      error => {
        this.isLoading = false;
        //this.notificationsService.error(error.title, error.error.message, {timeOut: 3000, showProgressBar: false})
        //this.errorService.handleError(error);
      });
    this.apiService.getSubmitionComments(this.contestId, this.submition.submitionId)
      .subscribe(comments => {
        console.log('comments-section getComments comments var');
        console.log(comments);
        if (comments != undefined) {
        this.comments = comments;
        }
        this.isLoading = false;
        console.log('this.comments');
        console.log(this.comments);
      },
      error => {
          //this.errorService.handleError(error);
          this.isLoading = false;
          this.notificationsService.error(error.title, error.error.message, {timeOut: 3000, showProgressBar: false})
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
    this.isLoading = true;
    console.log(comment);
    this.comments.push({comment: comment, commentAuthor: this.user});
    this.apiService.addSubmitionComment({comment: comment, commentAuthor: this.user}, this.contestId, this.submition.submitionId)
      .subscribe(contest => {
        console.log('comments-section addComment contest var');
        console.log(contest);
        //this.comments = comments;
        this.isLoading = false;
        this.notificationsService.success('Įkelta', 'Komentaras įkeltas', {timeOut: 3000, showProgressBar: false});
      }, 
      error => {
          //this.errorService.handleError(error);
          this.isLoading = false;
          this.notificationsService.error(error.title, error.error.message, {timeOut: 3000, showProgressBar: false})
      });
    this.commentField = '';
    console.log(this.comments);
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

}