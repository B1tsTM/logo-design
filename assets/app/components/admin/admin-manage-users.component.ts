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
  selector: 'selector',
  templateUrl: 'admin-manage-users.component.html',
  styleUrls: ['admin-manage-users.component.css']
})
export class AdminManageUsersComponent implements OnInit {
  contests: any = [];
  isLoading = false;
  firstTabActive = true;
  secondTabActive = false;
  allActiveUsers = [];
  allBannedUsers = [];
  @ViewChild('search') searchElRef: ElementRef;
  @ViewChild('searchfilter') searchFilterRef: ElementRef;
  users = [];
  userBlocked = false;
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
    this.apiService.getAllUsers()
    .subscribe(users => {
      this.allActiveUsers = users.filter((item: any) => item.userBlocked == this.userBlocked);
      this.allBannedUsers = users.filter((item: any) => item.userBlocked == !this.userBlocked);
      this.users = this.allActiveUsers;
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
        this.apiService.getFilteredUsers(event.target.value) //searchString
        .subscribe(users => {
          this.users = users;
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
        this.apiService.getFilteredUsers(event.target.value) //searchString
        .subscribe(users => {
          var unfilteredUsers = users;
          var filteredUsers = unfilteredUsers.filter((item: any) => item.userBlocked == this.userBlocked);
          this.users = filteredUsers;
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
    if (this.userBlocked == false) {
      //do nothing
    } else {
    this.userBlocked = false;
    this.isLoading = true;
    this.searchElRef.nativeElement.value = '';
    this.apiService.getFilteredUsers("") // = get all
        .subscribe(users => {
          var unfilteredUsers = users;
          var filteredUsers = unfilteredUsers.filter((item: any) => item.userBlocked == this.userBlocked);
          this.users = filteredUsers;
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
    if (this.userBlocked) {
      //do nothing
    } else {
    //this.status = "Užbaigtas";
    this.userBlocked = true;
    this.isLoading = true;
    this.searchElRef.nativeElement.value = '';
    this.apiService.getFilteredUsers("") // = get all
        .subscribe(users => {
          var unfilteredUsers = users;
          var filteredUsers = unfilteredUsers.filter((item: any) => item.userBlocked == this.userBlocked);
          this.users = filteredUsers;
          this.cdRef.detectChanges();
          this.isLoading = false;
        }, error => {
          this.isLoading = false;
          this.notificationsService.error(error.title, error.error.message, {timeOut: 3000, showProgressBar: false})
        });
    }
  }

  goToUserDetails(nickname: string) {
    this.router.navigate(['/admin', 'vartotojai', nickname]);
  }

  belongsToUser(userId: string) {
    return sessionStorage.getItem('userId') == userId;
  }

  goBackToAdminPanel() {
    this.router.navigate(['/admin']);
  }

  blockUser(user: string) {
    this.isLoading = true;
    this.apiService.updateUserStatus(user.nickName, true)
    .subscribe(res => {
      this.allActiveUsers.splice(0, 1);
      this.allBannedUsers.push({'test': 'test'});
      var indexOfUser = this.users.indexOf(user);
      this.users.splice(indexOfUser, 1);
      //console.log(indexOfUser);
      this.notificationsService.info('Užblokuota', 'Vartotojas sėkmingai užblokuotas', {timeOut: 3000, showProgressBar: false});
      this.isLoading = false;
      //this.router.navigate(['/admin', 'vartotojai', nickname]);
    }, error => {
      this.isLoading = false;
      this.notificationsService.error(error.title, error.error.message, {timeOut: 3000, showProgressBar: false})
    });
  }

  unblockUser(user: string) {
    this.isLoading = true;
    this.apiService.updateUserStatus(user.nickName, false)
    .subscribe(res => {
      this.allBannedUsers.splice(0, 1);
      this.allActiveUsers.push({'test': 'test'});
      var indexOfUser = this.users.indexOf(user);
      this.users.splice(indexOfUser, 1);
      this.notificationsService.info('Atblokuota', 'Vartotojas sėkmingai atblokuotas', {timeOut: 3000, showProgressBar: false});
      this.isLoading = false;
      //this.router.navigate(['/admin', 'vartotojai', nickname]);
    }, error => {
      this.isLoading = false;
      this.notificationsService.error(error.title, error.error.message, {timeOut: 3000, showProgressBar: false})
    });
  }


}