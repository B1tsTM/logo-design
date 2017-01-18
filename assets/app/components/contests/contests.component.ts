import { Component, OnInit, ViewChild, ElementRef, NgZone, ChangeDetectorRef } from '@angular/core';
import { Router } from '@angular/router';
import { Contest } from '../../models/contest';
import { ContestsService } from '../../services/contests.service';
import { ApiService } from '../../services/api.service';
import { ErrorService } from '../../errors/index';
import { NotificationsService } from 'angular2-notifications';
import { Observable } from 'rxjs/Observable';
import * as CryptoJS from 'crypto-js';
import 'rxjs/Rx';

@Component({
  moduleId: module.id,
  selector: 'contests',
  templateUrl: 'contests.component.html',
  styleUrls: ['contests.component.css']
  //, encapsulation: ViewEncapsulation.None //disabling shadow DOM
})
export class ContestsComponent implements OnInit {
  contests: any = [];
  isLoading = false;
  status1 = "Aktyvus";
  status2 = "Pratęstas";
  firstTabActive = true;
  secondTabActive = false;
  allActiveContests = [];
  allFinishedContests = [];
  @ViewChild('search') searchElRef: ElementRef;
  public options = {
      position: ["top","right"]
    };
  
  constructor(private contestsService: ContestsService, 
              private errorService: ErrorService,
              private apiService: ApiService,
              private notificationsService: NotificationsService,
              private ngzone: NgZone,
              private cdRef: ChangeDetectorRef,
              private router: Router) { }

  ngOnInit() { 
    this.isLoading = true;
    this.contestsService.getAllContests()
    .subscribe(contests => {
      var unfilteredContests = contests;
      var filteredActiveContests = unfilteredContests.filter((item: any) => item.status == this.status1 || item.status == this.status2);
      var filteredFinishedContests = unfilteredContests.filter((item: any) => item.status == "Užbaigtas" || item.status == "Laikas baigėsi");
      this.contests = filteredActiveContests;
      this.allActiveContests = filteredActiveContests;
      this.allFinishedContests = filteredFinishedContests;
      this.isLoading = false;
    }, error => {
      this.isLoading = false;
      this.notificationsService.error(error.title, error.error.message, {timeOut: 3000, showProgressBar: false})
    });
  }

  ngAfterViewInit() {
    this.ngzone.runOutsideAngular(() => {
      Observable.fromEvent(this.searchElRef.nativeElement, 'keyup')
      .debounceTime(1000)
      .distinctUntilChanged() // TODO Update: not working. Needs a custom callback to check for whitespace differences
      .subscribe(event => {
        this.contestsService.getFilteredContests(event.target.value) //searchString
        .subscribe(contests => {
          var unfilteredContests = contests;
          var filteredContests = unfilteredContests.filter((item: any) => item.status == this.status1 || item.status == this.status2);
          this.contests = filteredContests;
          this.cdRef.detectChanges();
        }, error => {
          this.notificationsService.error(error.title, error.error.message, {timeOut: 3000, showProgressBar: false})
        });
      });
    });
  }

  selectFirstTab() {
    this.firstTabActive = true;
    this.secondTabActive = false;
    if (this.status1 == "Aktyvus") {
      //do nothing
    } else {
    this.status1 = "Aktyvus";
    this.status2 = "Pratęstas";
    this.isLoading = true;
    this.searchElRef.nativeElement.value = '';
    this.contestsService.getFilteredContests("") // = get all
        .subscribe(contests => {
          var unfilteredContests = contests;
          var filteredContests = unfilteredContests.filter((item: any) => item.status == this.status1 || item.status == this.status2);
          this.contests = filteredContests;
          this.cdRef.detectChanges();
          this.isLoading = false;
        }, error => {
          this.isLoading = false;
          this.notificationsService.error(error.title, error.error.message, {timeOut: 3000, showProgressBar: false})
        });
    }
  }

  selectSecondTab() {
    this.firstTabActive = false;
    this.secondTabActive = true;
    if (this.status1 == "Užbaigtas") {
      //do nothing
    } else {
    this.status1 = "Užbaigtas";
    this.status2 = "Laikas baigėsi";
    this.isLoading = true;
    this.searchElRef.nativeElement.value = '';
    this.contestsService.getFilteredContests("") // = get all
        .subscribe(contests => {
          var unfilteredContests = contests;
          var filteredContests = unfilteredContests.filter((item: any) => item.status == this.status1 || item.status == this.status2);
          this.contests = filteredContests;
          this.cdRef.detectChanges();
          this.isLoading = false;
        }, error => {
          this.isLoading = false;
          this.notificationsService.error(error.title, error.error.message, {timeOut: 3000, showProgressBar: false})
        });
    }
  }

  goToContestDetails(idName: string) {
    this.router.navigate(['/konkursai', idName]);
  }

  belongsToUser(userId: string) {
    return sessionStorage.getItem('userId') == userId;
  }

}