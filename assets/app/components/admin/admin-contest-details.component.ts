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
  selector: 'admin-contest-details',
  templateUrl: 'admin-contest-details.component.html',
  styleUrls: ['admin-contest-details.component.css']
})
export class AdminContestDetailsComponent implements OnInit {
  contestId: string = '';
  contest: Contest = null;
  userId: string = '';
  filesToUpload: File[] = [];
  percent: number;
  submitions: any[] = [];
  mySubmitions: any[] = [];
  additionalFiles = [];
  winnerSubmition: any;
  extendInputEnabled = false;
  endDate;
  //locale = moment.locale('lt');
  //momentDate: any = moment(Date.now().toString(), 'YYYY MMMM Do', 'lt');
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
    //   console.log('LOCALE');
    //   console.log(locale);
      //this.momentDate = moment().format('YYYY MMMM Do');
      this.momentDate = moment().add(3, 'days').calendar();
    this.route.params.subscribe((params: Params) => {
      this.contestId = params['id'];
    });
    this.contestsService.getIndividualContest(this.contestId)
      .subscribe(contest => {
        this.contest = contest;
        this.additionalFiles = contest.additionalFiles;
        console.log('contest-details.component.ts this.contest');
        console.log(this.contest);
      }, 
      error => {
          //this.errorService.handleError(error);
          this.isLoading = false;
          this.notificationsService.error(error.title, error.error.message, {timeOut: 3000, showProgressBar: false})
      });
    this.apiService.getContestSubmitions(this.contestId) //CURRENT FOCUS
        .subscribe(submitions => {
            console.log('submitions from apiservice in contest-details');
            console.log(submitions);
            this.submitions = submitions;
            this.isLoading = false;
            console.log(this.submitions);
        },
        error => {
          //this.errorService.handleError(error);
          this.isLoading = false;
          this.notificationsService.error(error.title, error.error.message, {timeOut: 3000, showProgressBar: false})
      });

    this.apiService.getWinnerSubmition(this.contestId)
        .subscribe(data => {
            console.log(data);
            if (data.submitionUrl) {
                this.winnerSubmition = data;
            }
              console.log('WINNNNNNNNNNER');
              console.log(this.winnerSubmition);
        }, error => {
           this.isLoading = false;
          this.notificationsService.info(error.title, error.error.message, {timeOut: 3000, showProgressBar: false}) 
        })

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

  isContestPublisher(contestAuthorId: string) {
    var userId = sessionStorage.getItem('userId');
    return contestAuthorId == userId;
  }

   viewSubmitionDetails(contestId, contest, submition) {
       this.contestsService.submitionDetails = {contestId: contestId, contest: contest, submition: submition};
       console.log(this.contestsService.submitionDetails);
       this.router.navigate([submition.submitionId], {relativeTo: this.route});
   }

  validateContest(idName: string) {
    this.isLoading = true;
    this.contestsService.updateContestStatus(idName, "Aktyvus")
    .subscribe(res => {
      console.log('statusas pakeistas į aktyvų');
      console.log(res);
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
      console.log('statusas pakeistas į atmestą');
      console.log(res);
      this.notificationsService.success('Atmesta', 'Konkursas sėkmingai atmestas', {timeOut: 3000, showProgressBar: false});
      this.isLoading = false;
      this.router.navigate(['/admin', 'konkursai']);
    }, error => {
      this.isLoading = false;
      this.notificationsService.error(error.title, error.error.message, {timeOut: 3000, showProgressBar: false})
    });
  }

  extendContest() {
    this.isLoading = true;
    this.contestsService.extendContest(this.contestId, this.endDate)
    .subscribe(res => {
      console.log('Konkursas pratęstas');
      console.log(res);
      this.notificationsService.success('Pratęsta', 'Konkursas sėkmingai pratęstas', {timeOut: 3000, showProgressBar: false});
      this.isLoading = false;
      this.router.navigate(['/admin', 'konkursai']);
    }, error => {
      this.isLoading = false;
      this.notificationsService.error(error.title, error.error.message, {timeOut: 3000, showProgressBar: false})
    });
  }

  goBackToAdminContests() {
    this.router.navigate(['/admin', 'konkursai']);
  }

}