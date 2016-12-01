import { Component, OnInit, ViewChild, ElementRef, NgZone, ChangeDetectorRef } from '@angular/core';
import { Router } from '@angular/router';
import { Contest } from '../../models/contest';
import { ContestsService } from '../../services/contests.service';
import { DesignersService } from '../../services/designers.service';
import { ApiService } from '../../services/api.service';
import { ErrorService } from '../../errors/index';
import { NotificationsService } from 'angular2-notifications';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';

@Component({
  moduleId: module.id,
  selector: 'designers',
  templateUrl: 'designers.component.html',
  styleUrls: ['designers.component.css']
})
export class DesignersComponent implements OnInit {
  // designers: any;
  // isLoading = false;
  // public options = {
  //     position: ["top","right"]
  //   };
  // constructor(private designersService: DesignersService, private notificationsService: NotificationsService) { }

  // ngOnInit() { 
  //   this.isLoading = true;
  //   this.designersService.getDesigners()
  //   .subscribe(designers => {
  //     this.designers = designers;
  //     this.designersService.designers = designers;
  //     this.isLoading = false;
  //     console.log(this.designers);
  //   }, error => {
  //     this.isLoading = false;
  //     this.notificationsService.error(error.title, error.error.message, {timeOut: 3000, showProgressBar: false})
  //   });

  // }

  designers = [];
  isLoading = false;
  @ViewChild('search') searchElRef: ElementRef;
  public options = {
      position: ["top","right"]
    };
  
  constructor(private contestsService: ContestsService, 
              private errorService: ErrorService,
              private apiService: ApiService,
              private designersService: DesignersService,
              private notificationsService: NotificationsService,
              private ngzone: NgZone,
              private cdRef: ChangeDetectorRef,
              private router: Router) { }

  ngOnInit() { 
    this.isLoading = true;
    this.designersService.getDesigners()
    .subscribe(designers => {
      this.designers = designers;
      this.isLoading = false;
    }, error => {
      this.isLoading = false;
      this.notificationsService.error(error.title, error.error.message, {timeOut: 3000, showProgressBar: false})
    })
    
  }

  ngAfterViewInit() {
    this.ngzone.runOutsideAngular(() => {
      Observable.fromEvent(this.searchElRef.nativeElement, 'keyup')
      .debounceTime(1000)
      .distinctUntilChanged() // TODO Update: not working. Needs a custom callback to check for whitespace differences
      .subscribe(event => {
        this.designersService.getFilteredDesigners(event.target.value) //searchString
        .subscribe(designers => {
          //console.log('Filter layer 1 contests');
          //console.log(contests);
          //var unfilteredContests = contests;
          //var filteredContests = unfilteredContests.filter((item: any) => item.status == this.status);
          //console.log('Filter layer 2 contests');
          //console.log(filteredContests);
          console.log(designers);
          this.designers = designers;
          console.log(this.designers);
          this.cdRef.detectChanges();
        }, error => {
          this.notificationsService.error(error.title, error.error.message, {timeOut: 3000, showProgressBar: false})
        });
      });
    });
  }

  goToDesignerDetails(nickname) {
    this.router.navigate(['/dizaineriai', nickname]);
  }


}