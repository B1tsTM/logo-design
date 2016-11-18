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

  ngOnInit() { 
      this.isLoading = true;
      console.log(this.contestsService.submitionDetails);
      this.contestId = this.contestsService.submitionDetails.contestId;
      this.contest = this.contestsService.submitionDetails.contest;
      this.submition = this.contestsService.submitionDetails.submition;
      console.log('DEBUG THis.submition');
                console.log(this.submition.submitionAuthor._id);
    // this.route.params.subscribe((params: Params) => {
    //   this.contestId = params['id'];
    //   console.log('ngOnInit params id (contestId)');
    //   console.log(this.contestId);
    // });
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
    //   console.log('ngOnInit submition details this.submitionS');
    //   console.log(this.submitions);
    //   this.submition = this.submitions.filter((sub) => {
    //     console.log('sub.submitionUrl');
    //     console.log(sub.submitionUrl);
    //     console.log('this.submitionUrl');
    //     console.log(this.submitionUrl);
    //     return sub.submitionUrl == this.submitionUrl
    //   });
    //   console.log('ngOnInit submition details this.submition');
    //   console.log(this.submition);
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
        var userId = localStorage.getItem('userId');
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
        this.router.navigate(['./'], {relativeTo: this.route});
    }

}