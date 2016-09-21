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
  contests: any = [];
  constructor(private contestsService: ContestsService) {
    
  }

  ngOnInit() {
    this.contests = this.contestsService.getContests();
   }

  onSubmit(form: any) {
    console.log(form);
    //const contest: any = {contests: input, type: 'Logo', designer: 'John Lohke'};
    const contest = new Contest(form.name.value, form.category.value, 'John Lohke');
    console.log(contest);
    this.contestsService.addContest(contest)
      .subscribe(data => {
        console.log(data)
      },
      error => {
        console.error(error);
      });
  }

  editContest(contest: any) {
    this.contestsService.editContest(contest);
  }

  deleteContest(contest: any) {
    this.contestsService.deleteContest(contest);
  }

}