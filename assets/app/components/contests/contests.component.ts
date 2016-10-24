import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Contest } from '../../models/contest';
import { ContestsService } from '../../services/contests.service';
import { ErrorService } from '../../errors/index';

@Component({
  moduleId: module.id,
  selector: 'contests',
  templateUrl: 'contests.component.html',
  styleUrls: ['contests.component.css']
  //, encapsulation: ViewEncapsulation.None //disabling shadow DOM
})
export class ContestsComponent implements OnInit {
  contest: Contest = null;
  contests: any = [];
  constructor(private contestsService: ContestsService, private errorService: ErrorService) {
    
  }

  ngOnInit() {

    this.contestsService.getContests()
    .subscribe(contests => {
      this.contests = contests;
      this.contestsService.contests = contests;
      console.log(this.contests);
    });

    this.contestsService.contestEdited
      .subscribe(contest => {
        this.contest = contest;
      });
   }

  onSubmit(form: any) {
    if (this.contest) {
      //Edit
      console.log(this.contest);
      this.contest.name = form.name.value;
      this.contest.category = form.category.value;
      this.contest.description = form.description.value;
      this.contest.award = form.award.value;
      this.contestsService.updateContest(this.contest)
        .subscribe(data => {
          console.log(data);
        },
        error => {
          this.errorService.handleError(error);
        })
      this.contest = null;

    } else {
      console.log(form);
      //const contest: any = {contests: input, type: 'Logo', designer: 'John Lohke'};
      const contest = new Contest(form.name.value, null, form.category.value, form.description.value, form.award.value, 'active', 10, 5, Date.now(), Date.now());
      console.log(contest);
      this.contestsService.addContest(contest)
        .subscribe(data => {
          console.log(data);
          this.contestsService.contests.push(data);
          form.name.value = '';
          form.category.value = '';
          form.description.value = '';
          form.award.value = '';
        },
        error => {
          this.errorService.handleError(error);
        });
    }
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