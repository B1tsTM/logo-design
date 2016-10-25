import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Contest } from '../../models/contest';
import { ContestsService } from '../../services/contests.service';
import { ErrorService } from '../../errors/index';

@Component({
  moduleId: module.id,
  selector: 'contest-details',
  templateUrl: 'contest-details.component.html',
  styleUrls: ['contest-details.component.css']
})
export class ContestDetailsComponent implements OnInit {
  contestId: string = '';
  contest: Contest = null;
  constructor(private route: ActivatedRoute,
              private router: Router,
              private contestsService: ContestsService,
              private errorService: ErrorService) { }

  ngOnInit() { 
    this.route.params.subscribe((params: Params) => {
      this.contestId = params['id'];
    });
    this.contestsService.getIndividualContest(this.contestId)
      .subscribe(contest => {
        this.contest = contest;
      }, 
      error => {
          this.errorService.handleError(error);
      });

  }
}