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
    
  }

  ngOnInit() {
    this.contests = this.contestsService.getContests();
   }

  onSubmit(message: any) {
    this.contestsService.addContest(new Contest(message, 'Dummy', 'Dummy'))
  }

  editContest(contest: any) {
    this.contestsService.editContest(contest);
  }

  deleteContest(contest: any) {
    this.contestsService.deleteContest(contest);
  }

}