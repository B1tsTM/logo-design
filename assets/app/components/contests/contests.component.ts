import { Component, OnInit } from '@angular/core';
import { Contest } from '../../models/contest';
import { ContestsService } from '../../services/contests.service';

@Component({
  moduleId: module.id,
  selector: 'contests',
  templateUrl: 'contests.component.html',
  styleUrls: ['contests.component.css']
})
export class ContestsComponent implements OnInit {
  contest: Contest = null;
  contests: any = [];
  constructor(private contestsService: ContestsService) {
    
  }

  ngOnInit() {
    this.contestsService.getContests()
    .subscribe(contests => {
      this.contests = contests;
      this.contestsService.contests = contests;
    });

    this.contestsService.messageEdited
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
          console.log(error);
        })
      this.contest = null;

    } else {
      console.log(form);
      //const contest: any = {contests: input, type: 'Logo', designer: 'John Lohke'};
      const contest = new Contest(form.name.value, null, form.category.value, form.description.value, form.award.value);
      console.log(contest);
      this.contestsService.addContest(contest)
        .subscribe(data => {
          console.log(data);
          this.contestsService.contests.push(data);
        },
        error => {
          console.error(error);
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
        console.error(error);
      })
  }

  onCancel() {
    this.contest = null;
  }

}