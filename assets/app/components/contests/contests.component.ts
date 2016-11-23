import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Contest } from '../../models/contest';
import { ContestsService } from '../../services/contests.service';
import { ErrorService } from '../../errors/index';
import { NotificationsService } from 'angular2-notifications';

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
  isLoading = false;
  public options = {
      position: ["top","right"]
    };
  constructor(private contestsService: ContestsService, 
              private errorService: ErrorService,
              private notificationsService: NotificationsService) {
    
  }

  ngOnInit() {
    this.isLoading = true;
    this.contestsService.getAllContests()
    .subscribe(contests => {
      this.contests = contests;
      this.contestsService.contests = contests;
      this.isLoading = false;
      console.log(this.contests);
    }, error => {
      this.isLoading = false;
      this.notificationsService.error(error.title, error.error.message, {timeOut: 3000, showProgressBar: false})
    });
   }

  belongsToUser(userId: string) {
    return sessionStorage.getItem('userId') == userId;
  }

}