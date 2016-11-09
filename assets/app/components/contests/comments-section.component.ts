import { Component, OnInit, ViewChild } from '@angular/core';
import { Contest } from '../../models/contest';
import { ContestsService } from '../../services/contests.service';
import { ErrorService } from '../../errors/index';
import { AuthService } from '../../services/auth.service';
import { ApiService } from '../../services/api.service';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  moduleId: module.id,
  selector: 'comments-section',
  templateUrl: 'comments-section.component.html'
})
export class CommentsSectionComponent implements OnInit {
   //public commentsForm: FormGroup;
   //@ViewChild('comment') comment;
   comments: any[] = [];
   commentField: string;
   userId: string = '';
   user: any;
   constructor(private contestsService: ContestsService,
              private errorService: ErrorService,
              private authService: AuthService,
              private apiService: ApiService,
              private fb: FormBuilder) { 
                
              }

  ngOnInit() {
    this.userId = localStorage.getItem('userId');
    this.apiService.getUserInfo(this.userId)
      .subscribe(user => {
        console.log('comments-section comp user var');
        console.log(user);
        this.user = user;
      })
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
    this.commentField = '';
    console.log(this.comments);
  }

}