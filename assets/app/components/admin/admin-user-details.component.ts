import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Contest } from '../../models/contest';
import { ContestsService } from '../../services/contests.service';
import { ErrorService } from '../../errors/index';
import { AuthService } from '../../services/auth.service';
import { ApiService } from '../../services/api.service';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import * as moment from 'moment';
import 'moment/min/locales';
import { NotificationsService } from 'angular2-notifications';

@Component({
  moduleId: module.id,
  selector: 'admin-user-details',
  templateUrl: 'admin-user-details.component.html',
  styleUrls: ['admin-user-details.component.css']
})
export class AdminUserDetailsComponent implements OnInit {
  userId: string = '';
  user: any;
  nickname: any;
  momentDate: any;
  isLoading = false;
  public options = {
      position: ["top","right"]
    };
  constructor(private route: ActivatedRoute,
              private router: Router,
              private contestsService: ContestsService,
              private errorService: ErrorService,
              private authService: AuthService,
              private apiService: ApiService,
              private notificationsService: NotificationsService) { }

  ngOnInit() { 
    this.isLoading = true;
    moment.locale('lt-lt');
      this.momentDate = moment().add(3, 'days').calendar();
    this.route.params.subscribe((params: Params) => {
      this.nickname = params['id'];
    });
    this.apiService.getIndividualUser(this.nickname)
      .subscribe(user => {
        this.user = user;
        this.isLoading = false;
      }, 
      error => {
          //this.errorService.handleError(error);
          this.isLoading = false;
          this.notificationsService.error(error.title, error.error.message, {timeOut: 3000, showProgressBar: false})
      });

  } //End of ngOnInit

  isClient() {
      return this.authService.isClient();
  }

  isDesigner() {
    return this.authService.isDesigner();
  }

  isLoggedIn() {
  return this.authService.isLoggedIn();
  }
  isAdmin() {
    return this.authService.isAdmin();
  }

  validateContest(idName: string) {
    this.isLoading = true;
    this.contestsService.updateContestStatus(idName, "Aktyvus")
    .subscribe(res => {
      this.notificationsService.success('Patvirtinta', 'Konkursas sėkmingai patvirtintas', {timeOut: 3000, showProgressBar: false});
      this.isLoading = false;
      this.router.navigate(['/admin', 'konkursai']);
    }, error => {
      this.isLoading = false;
      this.notificationsService.error(error.title, error.error.message, {timeOut: 3000, showProgressBar: false})
    });
  }

  denyContest(idName: string) {
    this.isLoading = true;
    this.contestsService.updateContestStatus(idName, "Atmestas")
    .subscribe(res => {
      this.notificationsService.success('Atmesta', 'Konkursas sėkmingai atmestas', {timeOut: 3000, showProgressBar: false});
      this.isLoading = false;
      this.router.navigate(['/admin', 'konkursai']);
    }, error => {
      this.isLoading = false;
      this.notificationsService.error(error.title, error.error.message, {timeOut: 3000, showProgressBar: false})
    });
  }

  sendPrivateMessage(nickname) {
    this.router.navigate(['/profilis', 'pastas', 'rasyti-laiska', nickname]);
  }

  goBackToAdminUsers() {
    this.router.navigate(['/admin', 'vartotojai']);
  }

  blockUser(nickname: string) {
    this.isLoading = true;
    this.apiService.updateUserStatus(nickname, true)
    .subscribe(res => {
      this.notificationsService.info('Užblokuota', 'Vartotojas sėkmingai užblokuotas', {timeOut: 3000, showProgressBar: false});
      this.isLoading = false;
      this.router.navigate(['/admin', 'vartotojai']);
    }, error => {
      this.isLoading = false;
      this.notificationsService.error(error.title, error.error.message, {timeOut: 3000, showProgressBar: false})
    });
  }

  unblockUser(nickname: string) {
    this.isLoading = true;
    this.apiService.updateUserStatus(nickname, false)
    .subscribe(res => {
      this.notificationsService.info('Užblokuota', 'Vartotojas sėkmingai atblokuotas', {timeOut: 3000, showProgressBar: false});
      this.isLoading = false;
      this.router.navigate(['/admin', 'vartotojai']);
    }, error => {
      this.isLoading = false;
      this.notificationsService.error(error.title, error.error.message, {timeOut: 3000, showProgressBar: false})
    });
  }


}