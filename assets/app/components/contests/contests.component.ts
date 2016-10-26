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

    this.contestsService.getAllContests()
    .subscribe(contests => {
      this.contests = contests;
      this.contestsService.contests = contests;
      console.log(this.contests);
    });
   }

  belongsToUser(userId: string) {
    return localStorage.getItem('userId') == userId;
  }

}