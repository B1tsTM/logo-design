import { Component, OnInit } from '@angular/core';
import { Contest } from '../../../../models/contest';
import { ContestsService } from '../../../../services/contests.service';
import { ErrorService } from '../../../../errors/index';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  moduleId: module.id,
  templateUrl: 'logo-and-business-card.component.html',
  styleUrls: ['logo-and-business-card.component.css']
})
export class LogoAndBusinessCardComponent implements OnInit {
  contest: Contest = null;
  contests: any = [];
  public contestForm: FormGroup;

  constructor(private contestsService: ContestsService, private errorService: ErrorService, private fb: FormBuilder, private router: Router) {
    
  }

  ngOnInit() {

    this.contestForm = this.fb.group({
      contestName: ['', Validators.required],
      contestCategory: ['Logotipas ir vizitinė kortelė', Validators.required],
      contestDescription: ['', Validators.required],
      contestAward: ['', Validators.required]
    });

    this.contestsService.getAllContests()
    .subscribe(contests => {
      this.contests = contests;
      this.contestsService.contests = contests;
      console.log(this.contests);
    },
    error => {
          this.errorService.handleError(error);
        });

    // this.contestsService.contestEdited
    //   .subscribe(contest => {
    //     this.contest = contest;
    //   });
   }

  addContest(form: any) {
    if (this.contest) {
      //Edit
      console.log(this.contest);
      
      this.contest.name = form.contestName.value;
      this.contest.category = form.contestCategory.value;
      this.contest.description = form.contestDescription.value;
      this.contest.award = form.contestAward.value;
      this.contestsService.updateContest(this.contest)
        .subscribe(data => {
          console.log(data);
        },
        error => {
          this.errorService.handleError(error);
        })
      this.contest = null;

    } else {
      console.log(form);
      //const contest: any = {contests: input, type: 'Logo', designer: 'John Lohke'};
      const contest = new Contest(form.contestName.value, null, null, form.contestCategory.value, form.contestDescription.value, form.contestAward.value, 'active', 10, 5, Date.now(), Date.now());
      console.log(contest);
      this.contestsService.addContest(contest)
        .subscribe(data => {
          console.log(data);
          this.contestsService.contests.push(data);
          form.contestName.value = '';
          form.contestDescription.value = '';
          form.contestAward.value = '';
        },
        error => {
          this.errorService.handleError(error);
        });
    }
  }

  editContest(contest: any) {
    this.contestsService.editContest(contest);
  }

  deleteContest(contest: any) {
    this.contestsService.deleteContest(contest)
      .subscribe(data => {
        console.log(data);
      },
      error => {
        this.errorService.handleError(error);
      })
  }

  onCancel() {
    this.contest = null;
  }

  belongsToUser(userId: string) {
    return localStorage.getItem('userId') == userId;
  }

  goBack() {
    this.router.navigateByUrl('/paskelbti-konkursa');
  }

}