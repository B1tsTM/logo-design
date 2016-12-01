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
  selector: 'contest-details',
  templateUrl: 'contest-details.component.html',
  styleUrls: ['contest-details.component.css']
})
export class ContestDetailsComponent implements OnInit {
  contestId: string = '';
  contest: Contest = null;
  userId: string = '';
  filesToUpload: File[] = [];
  percent: number;
  submitions: any[] = [];
  mySubmitions: any[] = [];
  additionalFiles = [];
  winnerSubmition: any;
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
      if (this.isLoggedIn()) {
        this.apiService.getMySubmitions(this.contestId)
          .subscribe(mySubmitions => {
            console.log('MySubmitions from apiservice in contest-details');
            console.log(mySubmitions);
            this.mySubmitions = mySubmitions;
            console.log('this.mySubmitions');
            console.log(this.mySubmitions);
        },
        error => {
          //this.errorService.handleError(error);
          this.isLoading = false;
          //this.notificationsService.error('Įvyko klaida', 'Nepavyko gauti konkurso dizainų', {timeOut: 3000, showProgressBar: false})
      });
    }
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

  //FILE UPLOAD STUFF

  uploadSubmitions() {
      this.isLoading = true;
        this.userId = sessionStorage.getItem('userId');
        this.makeFileRequest('http://localhost:3000/api/v1/submitions/' + this.contestId + '/' +this.userId,this.filesToUpload, "submition").then((result) => {
            console.log(result);
            //this.filesToUpload = [];
        }, (error) => {
            this.isLoading = false;
            this.notificationsService.error(error.title, error.error.message, {timeOut: 3000, showProgressBar: false})
        });
        this.makeFileRequest('http://localhost:3000/api/v1/submitions/gallery/' + this.contestId + '/' +this.userId, this.filesToUpload, "submition").then((result) => {
            console.log(result);
            this.filesToUpload = [];
            //reload submitions
            this.apiService.getContestSubmitions(this.contestId) //CURRENT FOCUS
        .subscribe(submitions => {
            console.log('submitions from apiservice in contest-details');
            console.log(submitions);
            this.submitions = submitions;
            this.isLoading = false;
            console.log(this.submitions);
            this.notificationsService.success('Dizainai įkelti', 'Dizainai įkelti sėkmingai', {timeOut: 3000, showProgressBar: false})
        },
        error => {
          this.isLoading = false;
          this.notificationsService.error(error.title, error.error.message, {timeOut: 3000, showProgressBar: false})
        });
        //end of reloading submitions
        // --------------------------
        //reloading my submitions
        this.apiService.getMySubmitions(this.contestId)
        .subscribe(mySubmitions => {
            console.log('MySubmitions from apiservice in contest-details');
            console.log(mySubmitions);
            this.mySubmitions = mySubmitions;
            console.log('this.mySubmitions');
            console.log(this.mySubmitions);
        },
        error => {
          //this.errorService.handleError(error);
          this.isLoading = false;
          this.notificationsService.error(error.title, error.error.message, {timeOut: 3000, showProgressBar: false})
      });
        //end of reloading my submitions
        }, (error) => {
            this.isLoading = false;
            window.scrollTo(0, 0);
            //this.notificationsService.error(error.title, error.error.message, {timeOut: 3000, showProgressBar: false})
            this.apiService.getContestSubmitions(this.contestId) //CURRENT FOCUS
        .subscribe(submitions => {
            console.log('submitions from apiservice in contest-details');
            console.log(submitions);
            this.submitions = submitions;
            this.isLoading = false;
            console.log(this.submitions);
            this.notificationsService.success('Dizainai įkelti', 'Dizainai įkelti sėkmingai', {timeOut: 3000, showProgressBar: false})
        },
        error => {
          this.isLoading = false;
          this.notificationsService.error(error.title, error.error.message, {timeOut: 3000, showProgressBar: false})
        });
        this.apiService.getMySubmitions(this.contestId)
        .subscribe(mySubmitions => {
            console.log('MySubmitions from apiservice in contest-details');
            console.log(mySubmitions);
            this.mySubmitions = mySubmitions;
            console.log('this.mySubmitions');
            console.log(this.mySubmitions);
        },
        error => {
          //this.errorService.handleError(error);
          this.isLoading = false;
          this.notificationsService.error(error.title, error.error.message, {timeOut: 3000, showProgressBar: false})
      });

        });
    }

    // Upload additional files

    uploadAdditionalFiles() {
      this.isLoading = true;
        this.userId = sessionStorage.getItem('userId');
        this.makeFileRequest('http://localhost:3000/api/v1/contests/' + this.contestId + '/files',this.filesToUpload, "additionalfiles").then((result) => {
            console.log(result);
            this.isLoading = false;
            this.apiService.getContestAdditionalFiles(this.contestId)
            .subscribe(data => {
                console.log(data);
                this.additionalFiles = data;
            }, error => {
                this.isLoading = false;
                this.notificationsService.error(error.title, error.error.message, {timeOut: 3000, showProgressBar: false})
            })
            //this.filesToUpload = [];
        }, (error) => { // TODO find out why it always go into error state
            this.apiService.getContestAdditionalFiles(this.contestId)
            .subscribe(data => {
                this.isLoading = false;
                console.log(data);
                this.additionalFiles = data;
            }, error => {
                this.isLoading = false;
                this.notificationsService.error(error.title, error.error.message, {timeOut: 3000, showProgressBar: false})
            })
            this.notificationsService.success('Įkelta','Failai įkelti', {timeOut: 3000, showProgressBar: false})
        });
    }

    fileChangeEvent(fileInput: any){
        this.filesToUpload = <Array<File>> fileInput.target.files;
        //this.filesToUpload.forEach((file, i) => this.filesToUpload.push(fileInput.target.files[i]));
        console.log(fileInput.target.files);
        //let arr = Array.from(fileInput.target.files); //convert File Object to Array to push it
        //this.filesToUpload.push(arr[0]); //use this if you use multiple single file inputs
        console.log(this.filesToUpload);
    }
 
    makeFileRequest(url: string, files: Array<File>, fileType: string) {
        return new Promise((resolve, reject) => {
            var formData: any = new FormData();
            var xhr = new XMLHttpRequest();
            for(var i = 0; i < files.length; i++) {
                formData.append(fileType, files[i], files[i].name);
            }
            xhr.upload.addEventListener("progress", (evt) => this.calculateUploadProgress(evt), false); 
            xhr.onreadystatechange = function () {
                if (xhr.readyState == 4) {
                    if (xhr.status == 200) {
                        console.log(xhr.response);
                        resolve(JSON.parse(xhr.response));
                    } else {
                        console.log(xhr.response);
                        reject(xhr.response);
                    }
                }
            }
            xhr.onerror = function(e) {
                console.log('Klaida įkeliant failus');
                console.log(e);
            };
            xhr.open("POST", url, true);
            xhr.send(formData);
        });
    }

    calculateUploadProgress(evt) {
    if (evt.lengthComputable) {
        this.percent = Math.round(evt.loaded / evt.total * 100);
        console.log("PERCENT : ", this.percent + "%");
    }
    //END OF FILE UPLOAD STUFF

}

    onRating(obj: any) {
        this.isLoading = true;
        var submition = this.submitions.filter((item: any) => item.submitionId == obj.submitionId);
        console.log('onRating() submition after filter');
        console.log(submition);
        if (!!submition && submition.length == 1) {
            //this.submitions[0].submitionRating = obj.rating;

            submition[0].submitionRating = obj.rating;
            this.contestsService.updateSubmitionRating(this.contest, submition[0])
                .subscribe(data => {
                    console.log('Rating changed');
                    console.log(data);
                    if (submition[0].status == 'Nugalėtojas') { 
                        this.winnerSubmition.submitionRating = data.obj.submitions[obj.submitionId - 1].submitionRating;
                    }
                    this.isLoading = false;
                    this.notificationsService.success('Atnaujinta', 'Reitingas sėkmingai pakeistas', {timeOut: 3000, showProgressBar: false})
                }, error => {
                    this.isLoading = false;
                    this.notificationsService.error(error.title, error.error.message, {timeOut: 3000, showProgressBar: false})
                })
        }
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

}