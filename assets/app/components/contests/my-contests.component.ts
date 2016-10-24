import { Component, OnInit } from '@angular/core';
import { ContestsService } from '../../services/contests.service';
import { AuthService } from '../../services/auth.service';
import { ErrorService } from '../../errors/index';
import { Contest } from '../../models/contest';


@Component({
  moduleId: module.id,
  selector: 'my-contests',
  templateUrl: 'my-contests.component.html',
  styleUrls: ['my-contests.component.css']
})
export class MyContestsComponent implements OnInit {
  contests: any = [];
  contest: Contest = null;
  id: string = '';
  constructor(private contestsService: ContestsService, 
              private errorService: ErrorService, 
              private authService: AuthService) { }

  ngOnInit() { 
    this.id = localStorage.getItem('userId');
    this.contestsService.getIndividualContests(this.id)
    .subscribe(contests => {
      this.contests = contests;
      this.contestsService.contests = contests;
      console.log(this.contests);
    });
  }

  editContest(contest: any) {
    this.contestsService.editContest(contest);
  }

  deleteContest(contest: any) {
    this.contestsService.deleteContest(contest)
      .subscribe(data => {
        console.log(data);
      },
      error => {
        this.errorService.handleError(error);
      })
  }

  onCancel() {
    this.contest = null;
  }

  belongsToUser(userId: string) {
    return localStorage.getItem('userId') == userId;
  }

}