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
  public options = {
      position: ["top","right"]
    };
  constructor(private contestsService: ContestsService, 
              private errorService: ErrorService,
              private notificationsService: NotificationsService) {
    
  }

  ngOnInit() {

    this.contestsService.getAllContests()
    .subscribe(contests => {
      this.contests = contests;
      this.contestsService.contests = contests;
      console.log(this.contests);
    }, error => {
      this.notificationsService.error('Įvyko klaida', 'Nepavyko gauti konkursų informacijos', {timeOut: 3000, showProgressBar: false})
    });
   }

  belongsToUser(userId: string) {
    return localStorage.getItem('userId') == userId;
  }

}