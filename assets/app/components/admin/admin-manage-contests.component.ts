import { Component, OnInit, ViewChild, ElementRef, NgZone, ChangeDetectorRef } from '@angular/core';
import { Router } from '@angular/router';
import { Contest } from '../../models/contest';
import { ContestsService } from '../../services/contests.service';
import { ApiService } from '../../services/api.service';
import { ErrorService } from '../../errors/index';
import { NotificationsService } from 'angular2-notifications';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';

@Component({
  moduleId: module.id,
  selector: 'admin-contests',
  templateUrl: 'admin-manage-contests.component.html',
  styleUrls: ['admin-manage-contests.component.css']
})
export class AdminManageContestsComponent implements OnInit {
  contests: any = [];
  isLoading = false;
  status = "Nepatvirtintas";
  firstTabActive = true;
  secondTabActive = false;
  //allActiveContests = [];
  //allFinishedContests = [];
  allUnconfirmedContests = [];
  allContests = [];
  @ViewChild('search') searchElRef: ElementRef;
  @ViewChild('searchfilter') searchFilterRef: ElementRef;
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
      //var unfilteredContests = contests;
      // var filteredActiveContests = unfilteredContests.filter((item: any) => item.status == this.status);
      // var filteredFinishedContests = unfilteredContests.filter((item: any) => item.status == "Užbaigtas");
      this.allContests = contests;
      this.contests = contests;
      var unconfirmedContets = contests.filter((item: any) => item.status == this.status);
      this.allUnconfirmedContests = unconfirmedContets;
      //this.allActiveContests = filteredActiveContests;
      //this.allFinishedContests = filteredFinishedContests;
      //this.contestsService.contests = contests;
      this.isLoading = false;
      console.log(this.contests);
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
          //console.log('Filter layer 1 contests');
          //console.log(contests);
          //var unfilteredContests = contests;
          //var filteredContests = unfilteredContests.filter((item: any) => item.status == this.status);
          //console.log('Filter layer 2 contests');
          //console.log(filteredContests);
          //this.contests = filteredContests;
          //this.allContests = contests;
          this.contests = contests;
          this.cdRef.detectChanges();
        }, error => {
          this.notificationsService.error(error.title, error.error.message, {timeOut: 3000, showProgressBar: false})
        });
      });
    });

    this.ngzone.runOutsideAngular(() => {
      Observable.fromEvent(this.searchFilterRef.nativeElement, 'keyup')
      .debounceTime(1000)
      .distinctUntilChanged() // TODO Update: not working. Needs a custom callback to check for whitespace differences
      .subscribe(event => {
        this.contestsService.getFilteredContests(event.target.value) //searchString
        .subscribe(contests => {
          //console.log('Filter layer 1 contests');
          //console.log(contests);
          var unfilteredContests = contests;
          var filteredContests = unfilteredContests.filter((item: any) => item.status == this.status);
          //console.log('Filter layer 2 contests');
          //console.log(filteredContests);
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
    if (this.status == "Aktyvus") {
      //do nothing
    } else {
    //this.status = "Aktyvus";
    this.isLoading = true;
    this.searchElRef.nativeElement.value = '';
    this.contestsService.getFilteredContests("") // = get all
        .subscribe(contests => {
          //console.log('Filter layer 1 contests');
          //console.log(contests);
          //var unfilteredContests = contests;
          //var filteredContests = unfilteredContests.filter((item: any) => item.status == this.status);
          //console.log('Filter layer 2 contests');
          //console.log(filteredContests);
          this.contests = contests;
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
    if (this.status == "Užbaigtas") {
      //do nothing
    } else {
    //this.status = "Užbaigtas";
    this.isLoading = true;
    this.searchElRef.nativeElement.value = '';
    this.contestsService.getFilteredContests("") // = get all
        .subscribe(contests => {
          //console.log('Filter layer 1 contests');
          //console.log(contests);
          var unfilteredContests = contests;
          var filteredContests = unfilteredContests.filter((item: any) => item.status == this.status);
          //console.log('Filter layer 2 contests');
          //console.log(filteredContests);
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
    this.router.navigate(['/admin', 'konkursai', idName]);
  }

  belongsToUser(userId: string) {
    return sessionStorage.getItem('userId') == userId;
  }

  goBackToAdminPanel() {
    this.router.navigate(['/admin']);
  }

}