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
  contests: any;
  constructor(private contestsService: ContestsService) {
    this.contestsService.addContest(new Contest('Contest1', 'Logo', 'John Lohke')); 
    this.contestsService.addContest(new Contest('Contest2', 'Logo2', 'John2Lohke')); 
    this.contests = contestsService.getContests();
  }

  ngOnInit() { }

  onSubmit(message: any) {
    this.contestsService.addContest(new Contest(message, 'Dummy', 'Dummy'))
  }

  deleteContest(contest: any) {
    this.contestsService.deleteContest(contest);
  }

}