import { Component, OnInit, Input} from '@angular/core';
import { ContestsService } from '../../services/contests.service';
import { ErrorService } from '../../errors/index';
import { AuthService } from '../../services/auth.service';
import { ApiService } from '../../services/api.service';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { NotificationsService } from 'angular2-notifications';

@Component({
  moduleId: module.id,
  selector: 'submition-details',
  templateUrl: 'submition-details.component.html',
  styleUrls: ['submition-details.component.css']
})
export class SubmitionDetailsComponent implements OnInit {
    contestId: string;
    contest: any;
    submition: any;
    submitions: any[] = [];
    confirmationVisible: boolean = false;
    percent: number = 0;
    filesToUpload = [];
    userId: string;
    isLoading = false;
    public options = {
      position: ["top","right"]
    };
    
  constructor(private apiService: ApiService, 
              private errorService: ErrorService,
              private contestsService: ContestsService, 
              private route: ActivatedRoute,
              private router: Router,
              private notificationsService: NotificationsService) { }

  ngOnInit() {  // TODO add comments to users's comments array
  if (!this.contestsService.submitionDetails) {
      return this.route.params.subscribe(params => {
          this.router.navigate(['/konkursai', params['id']]);
      });
      //return this.router.navigate(['/konkursai']);
  }
      this.isLoading = true;
      console.log(this.contestsService.submitionDetails);
      this.contestId = this.contestsService.submitionDetails.contestId;
      this.contest = this.contestsService.submitionDetails.contest;
      this.submition = this.contestsService.submitionDetails.submition;
      console.log('DEBUG THis.submition');
      console.log(this.submition.submitionAuthor._id);

      this.apiService.getContestSubmitions(this.contestId) //CURRENT FOCUS
        .subscribe(submitions => {
            console.log('submitions from apiservice in submition-details');
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
  }

    closed() {
        console.log('Modal closed');
    }

    dismissed() {
        console.log('Modal dismissed');
        this.confirmationVisible = false;
    }

    opened() {
        console.log('Modal opened');
    }

    isContestPublisher(contestAuthorId: string) {
        var userId = sessionStorage.getItem('userId');
        return contestAuthorId == userId;
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
                    //this.contestsService.submitionDetails.submition = data.obj.submitions[obj.submitionId - 1];
                    console.log(this.contestsService.submitionDetails.submition); 
                    this.isLoading = false;
                    this.notificationsService.success('Pakeista', 'Dizaino reitingas pakeistas', {timeOut: 3000, showProgressBar: false})
                }, error => {
                    this.isLoading = false;
                    this.notificationsService.error(error.title, error.error.message, {timeOut: 3000, showProgressBar: false})
                })
        }
    }

    selectWinner(contestIdName, submitionId, contest, submition) {
        this.isLoading = true;
        const topic = "Pergalė konkurse " + contest.name;
        const message = "Sveikiname laimėjus konkursą '" + contest.name + "'! Su jumis artimiausiu metu susisieks konkurso autorius " + contest.publisher.nickName + ". Kai Jūs išsiųsite atitinkamus dizaino failus ir gausite už tai pinigus, Jums reikės tai patvirtinti atrašant į ši laišką, įtraukiant konkurso pavadinimą (bei paminėti iškilusias problemas, jei tokių buvo) arba susisiekti el. pašto adresu info@dizainokonkursai.lt . Tai padarius konkursas bus laikomas užbaigtu. Sveikiname ir linkime Jums geros dienos!";
        console.log('you win ' + contestIdName +', '+ submitionId);
        const messageForAdmin = "Konkursą " + contest.name + "laimėjo " + this.submition.submitionAuthor.nickName + " laiku " + Date.now(); // TODO proper date format
        this.apiService.selectWinner(contestIdName, submitionId, contest.id, this.submition.submitionAuthor._id, submition)
            .subscribe(data => {
                console.log(data);
                console.log('DEBUG THis.submition');
                console.log(this.submition);
                this.isLoading = false;
                this.contestsService.contestWinner = {contestId: contestIdName, submitionId: submitionId, submition: this.submition, contest: contest};
                this.apiService.sendMessage(this.submition.submitionAuthor.nickName, topic, message, "Admin") //.add sender param, figure out how to change it in api.service
                    .subscribe(res => {
                        console.log('Zinute laimetojui issiusta');
                        this.notificationsService.success('Sveikiname', 'Laimėtoją informavome apie pergalę', {timeOut: 5000, showProgressBar: false})
                    }, error => {
                        this.isLoading = false;
                        this.notificationsService.error(error.title, error.error.message, {timeOut: 3000, showProgressBar: false})
                    });
                this.apiService.sendMessage('Admin', topic, messageForAdmin, 'Admin')
                    .subscribe(res => {
                        console.log('Zinute administatoriui issiusta');
                    }, error => {
                        this.isLoading = false;
                        this.notificationsService.error(error.title, error.error.message, {timeOut: 3000, showProgressBar: false})
                    });
                    // this.apiService.addWinningContest(contest._id, this.submition.submitionAuthor._id)
                    // .subscribe(data => {
                    //     console.log(data);
                    // }, error => {
                    //     this.isLoading = false;
                    //     this.notificationsService.error(error.title, error.error.message, {timeOut: 3000, showProgressBar: false})
                    // });
                window.scrollTo(0,0);
                this.router.navigate(['nugaletojas'], {relativeTo: this.route});
            }, error => {
                this.isLoading = false;
                this.notificationsService.error(error.title, error.error.message, {timeOut: 3000, showProgressBar: false})
            });
    }

    goBack() {
        window.scrollTo(0,0);
        this.router.navigate(['/konkursai', this.contestId]);
    }


    isDesignAuthor(designerId) {
      var userId = sessionStorage.getItem('userId');
        return designerId == userId;
    }


    changeSubmition() {
      this.isLoading = true;
      if (this.filesToUpload.length > 1) {
        this.isLoading = false;
        return this.notificationsService.error('Klaida', 'Pasirinkite tik vieną failą', {timeOut: 3000});
      }
        this.userId = sessionStorage.getItem('userId');
        this.makeFileRequest('http://localhost:3000/api/v1/submitions/change/' + this.contestId + '/' +this.userId + '/' + this.submition.submitionId,this.filesToUpload, "submition").then((result) => {
            console.log(result);
            this.submition.submitionUrl = result.files[0].filename;
            this.isLoading = false;
            this.filesToUpload = [];
            this.notificationsService.success('Pakeista', 'Dizainas sėkmingai pakeistas', {timeOut: 3000, showProgressBar: false});
        }, (error) => {
            //this.submition.submitionUrl = result.files[0].filename;
            this.isLoading = false;
            this.notificationsService.error(error.title, error.error.message, {timeOut: 3000, showProgressBar: false})
        });
    }

    fileChangeEvent(fileInput: any){
        this.filesToUpload = <Array<File>> fileInput.target.files;
        console.log(fileInput.target.files);
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
    }

}