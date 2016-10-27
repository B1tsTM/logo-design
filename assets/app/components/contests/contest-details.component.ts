import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Contest } from '../../models/contest';
import { ContestsService } from '../../services/contests.service';
import { ErrorService } from '../../errors/index';
import { AuthService } from '../../services/auth.service';
import { ApiService } from '../../services/api.service';


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
  constructor(private route: ActivatedRoute,
              private router: Router,
              private contestsService: ContestsService,
              private errorService: ErrorService,
              private authService: AuthService,
              private apiService: ApiService) { }

  ngOnInit() { 
    this.route.params.subscribe((params: Params) => {
      this.contestId = params['id'];
    });
    this.contestsService.getIndividualContest(this.contestId)
      .subscribe(contest => {
        this.contest = contest;
        console.log('contest-details.component.ts this.contest');
        console.log(this.contest);
      }, 
      error => {
          this.errorService.handleError(error);
      });
    this.apiService.getContestSubmitions(this.contestId) //CURRENT FOCUS
        .subscribe(submitions => {
            console.log('submitions from apiservice in contest-details');
            console.log(submitions);
            this.submitions = submitions;
            console.log(this.submitions);
        },
        error => {
          this.errorService.handleError(error);
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

  //FILE UPLOAD STUFF

  upload() {
        this.userId = localStorage.getItem('userId');
        this.makeFileRequest('http://localhost:3000/api/v1/submitions/' + this.contestId + '/' +this.userId, [], this.filesToUpload).then((result) => {
            console.log(result);
            //this.filesToUpload = [];
        }, (error) => {
            console.error(error);
        });
        this.makeFileRequest('http://localhost:3000/api/v1/submitions/gallery/' + this.contestId + '/' +this.userId, [], this.filesToUpload).then((result) => {
            console.log(result);
            this.filesToUpload = [];
            //reload submitions
            this.apiService.getContestSubmitions(this.contestId) //CURRENT FOCUS
        .subscribe(submitions => {
            console.log('submitions from apiservice in contest-details');
            console.log(submitions);
            this.submitions = submitions;
            console.log(this.submitions);
        },
        error => {
          this.errorService.handleError(error);
        });
        //end of reloading submitions
        }, (error) => {
            console.error(error);
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
 
    makeFileRequest(url: string, params: Array<string>, files: Array<File>) {
        return new Promise((resolve, reject) => {
            var formData: any = new FormData();
            var xhr = new XMLHttpRequest();
            for(var i = 0; i < files.length; i++) {
                formData.append("submition", files[i], files[i].name);
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

}