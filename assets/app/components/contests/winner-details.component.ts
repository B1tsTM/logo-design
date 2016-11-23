import { Component, OnInit } from '@angular/core';
import { ContestsService } from '../../services/contests.service';
import { ErrorService } from '../../errors/index';
import { AuthService } from '../../services/auth.service';
import { ApiService } from '../../services/api.service';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { NotificationsService } from 'angular2-notifications';

@Component({
  moduleId: module.id,
  selector: 'winner-details',
  templateUrl: 'winner-details.component.html',
  styleUrls: ['winner-details.component.css']
})
export class WinnerDetailsComponent implements OnInit {
  isLoading: boolean = false;
  contest: any;
  contestId: any;
  submition: any;
  submitionId: any;
  submitions = [];
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
      console.log(this.contestsService.contestWinner);
      this.contestId = this.contestsService.contestWinner.contestId;
      this.contest = this.contestsService.contestWinner.contest;
      this.submition = this.contestsService.contestWinner.submition;
      this.submitionId = this.contestsService.contestWinner.submitionId;
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
          this.isLoading = false;
          this.notificationsService.error(error.title, error.error.message, {timeOut: 3000, showProgressBar: false})
      });
   } // End of ngOnInit

   contactWinner(nickname) {
     const topic = "Konkurso '" + this.contest.name + "' atsiskaitymas";
     this.contestsService.mailTopic = topic;
     this.router.navigate(['/profilis','pastas','rasyti-laiska', nickname]);
   }

   goBack() {
     this.router.navigate(['/konkursai', this.contest.idName]);
   }

   isContestPublisher(contestAuthorId: string) {
        var userId = sessionStorage.getItem('userId');
        return contestAuthorId == userId;
    }


}