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
import * as CryptoJS from 'crypto-js';

declare var jQuery: any;

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
      this.momentDate = moment().add(3, 'days').calendar();
    this.route.params.subscribe((params: Params) => {
      this.contestId = params['id'];
    });
    this.contestsService.getIndividualContest(this.contestId)
      .subscribe(contest => {
        this.contest = contest;
        this.additionalFiles = contest.additionalFiles;
        //START
        this.apiService.getContestSubmitions(this.contestId) //CURRENT FOCUS
        .subscribe(submitions => {
            this.submitions = submitions;
            this.isLoading = false;
        },
        error => {
          this.isLoading = false;
          this.notificationsService.error(error.title, error.error.message, {timeOut: 3000, showProgressBar: false})
      });
      if (this.isLoggedIn()) {
        this.apiService.getMySubmitions(this.contestId)
          .subscribe(mySubmitions => {
            this.mySubmitions = mySubmitions;
        },
        error => {
          this.isLoading = false;
      });
    }
    this.apiService.getWinnerSubmition(this.contestId)
        .subscribe(data => {
            if (data.submitionUrl) {
                this.winnerSubmition = data;
            }
        }, error => {
           this.isLoading = false;
          this.notificationsService.info(error.title, error.error.message, {timeOut: 3000, showProgressBar: false}) 
        })
        //END
      }, 
      error => {
          this.isLoading = false;
          this.notificationsService.error(error.title, error.error.message, {timeOut: 3000, showProgressBar: false})
          this.router.navigate(['/konkursai']);
      });
    

  } //End of ngOnInit

  ngAfterViewInit() {
      jQuery(document).ready(function() {
        jQuery(".fancybox").fancybox({
        
        });
    });
  }

  isClient() {
      return this.authService.isClient();
  }

  isDesigner() {
    return this.authService.isDesigner();
  }

  isLoggedIn() {
  return this.authService.isLoggedIn();
  }

  isEmailConfirmed() {
      return sessionStorage.getItem('emailConfirmed') == CryptoJS.SHA3('true').toString();;
  }
  isAdmin() {
    return this.authService.isAdmin();
  }

  isDesignAuthor(designerId) {
      var userId = sessionStorage.getItem('userId');
        return designerId == userId;
  }

  //FILE UPLOAD STUFF

  uploadSubmitions() {
      this.isLoading = true;
        this.userId = sessionStorage.getItem('userId');
        this.makeFileRequest('http://localhost:3000/api/v1/submitions/' + this.contestId + '/' +this.userId,this.filesToUpload, "submition").then((result) => {
            this.isLoading = false;
            this.notificationsService.success('Dizainai įkelti', 'Dizainai įkelti sėkmingai', {timeOut: 3000, showProgressBar: false})
        }, (error) => {
            this.isLoading = false;
            //this.notificationsService.error(error.title, error.error.message, {timeOut: 3000, showProgressBar: false})
            this.notificationsService.error('Klaida !', 'Netinkamas įkeliamų dizainų formatas. Tinkami formatai: .jpg, .jpeg, .png, .gif', {timeOut: 3000, showProgressBar: false})
        });
        this.makeFileRequest('http://localhost:3000/api/v1/submitions/gallery/' + this.contestId + '/' +this.userId, this.filesToUpload, "submition").then((result) => {
            this.filesToUpload = [];
        }, (error) => {
            this.isLoading = false;
            window.scrollTo(0, 0);

            this.apiService.getContestSubmitions(this.contestId) 
            .subscribe(submitions => {
                this.submitions = submitions;
                this.isLoading = false;
                //this.notificationsService.success('Dizainai įkelti', 'Dizainai įkelti sėkmingai', {timeOut: 3000, showProgressBar: false})
            },
            error => {
            this.isLoading = false;
            this.notificationsService.error(error.title, error.error.message, {timeOut: 3000, showProgressBar: false})
            });

            this.apiService.getMySubmitions(this.contestId)
            .subscribe(mySubmitions => {
                this.mySubmitions = mySubmitions;
            },
            error => {
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
            this.isLoading = false;
            this.apiService.getContestAdditionalFiles(this.contestId)
            .subscribe(data => {
                this.isLoading = false;
                this.additionalFiles = data;
            }, error => {
                this.isLoading = false;
                this.notificationsService.error(error.title, error.error.message, {timeOut: 3000, showProgressBar: false})
            })
        }, (error) => { // TODO find out why it always go into error state
            this.apiService.getContestAdditionalFiles(this.contestId)
            .subscribe(data => {
                this.isLoading = false;
                var lengthBefore = this.additionalFiles.length;
                this.additionalFiles = data;
                if (lengthBefore == this.additionalFiles.length) {
                    this.notificationsService.error('Klaida !','Netinkamas dizainų formatas. Tinkami formatai: .jpg, .jpeg, .png, .gif', {timeOut: 3000, showProgressBar: false})
                } else {
                    this.notificationsService.success('Įkelta','Failai įkelti', {timeOut: 3000, showProgressBar: false})
                }
            }, error => {
                this.isLoading = false;
                //this.notificationsService.error(error.title, error.error.message, {timeOut: 3000, showProgressBar: false})
            })
            //this.notificationsService.success('Įkelta','Failai įkelti', {timeOut: 3000, showProgressBar: false})
        });
    }

    fileChangeEvent(fileInput: any){
        this.filesToUpload = <Array<File>> fileInput.target.files;
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
                        resolve(JSON.parse(xhr.response));
                    } else {
                        reject(xhr.response);
                    }
                }
            }
            xhr.onerror = function(e) {
            };
            xhr.open("POST", url, true);
            xhr.send(formData);
        });
    }

    calculateUploadProgress(evt) {
    if (evt.lengthComputable) {
        this.percent = Math.round(evt.loaded / evt.total * 100);
    }
    //END OF FILE UPLOAD STUFF

}

    onRating(obj: any) {
        this.isLoading = true;
        var submition = this.submitions.filter((item: any) => item.submitionId == obj.submitionId);
        if (!!submition && submition.length == 1) {
            submition[0].submitionRating = obj.rating;
            this.contestsService.updateSubmitionRating(this.contest, submition[0])
                .subscribe(data => {
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
       this.router.navigate([submition.submitionId], {relativeTo: this.route});
   }
   goToLink() {
       if (!/^https?:\/\//i.test(this.contest.website)) {
       this.contest.website = 'http://' + this.contest.website;
       } 
       window.location.href = this.contest.website;
   }

}