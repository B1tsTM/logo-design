import { Component, OnInit, ViewChild, ElementRef, NgZone, ChangeDetectorRef } from '@angular/core';
import { Router } from '@angular/router';
import { Contest } from '../../models/contest';
import { ContestsService } from '../../services/contests.service';
import { ApiService } from '../../services/api.service';
import { AuthService } from '../../services/auth.service';
import { ErrorService } from '../../errors/index';
import { NotificationsService } from 'angular2-notifications';
import { Observable } from 'rxjs/Observable';
import * as CryptoJS from 'crypto-js';
import 'rxjs/Rx';


@Component({
  moduleId: module.id,
  selector: 'my-contests',
  templateUrl: 'my-contests.component.html',
  styleUrls: ['my-contests.component.css']
})
export class MyContestsComponent implements OnInit {
  contests: any = [];
  contest: any;
  id: string;
  isLoading = false;
  status1 = "Aktyvus";
  status2 = "Pratęstas";
  firstTabActive = true;
  secondTabActive = false;
  allActiveContests = [];
  allFinishedContests = [];
  public options = {
      position: ["top","right"]
    };
  
  constructor(private contestsService: ContestsService, 
              private errorService: ErrorService,
              private apiService: ApiService,
              private notificationsService: NotificationsService,
              private authService: AuthService,
              private ngzone: NgZone,
              private cdRef: ChangeDetectorRef,
              private router: Router) { }

  ngOnInit() { 
    this.isLoading = true;
    this.id = sessionStorage.getItem('userId');
    this.contestsService.getIndividualContests(this.id)
    .subscribe(contests => {
      this.contests = contests;
      this.isLoading = false;
      console.log(this.contests);
    }, error => {
      this.isLoading = false;
      this.notificationsService.error(error.title, error.error.message, {timeOut: 3000, showProgressBar: false})
    });
  }

  goToContestDetails(idName: string) {
    this.router.navigate(['/konkursai', idName]);
  }

  belongsToUser(userId: string) {
    return sessionStorage.getItem('userId') == userId;
  }

}