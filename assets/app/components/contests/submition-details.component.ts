import { Component, OnInit, Input } from '@angular/core';
import { ContestsService } from '../../services/contests.service';
import { ErrorService } from '../../errors/index';
import { AuthService } from '../../services/auth.service';
import { ApiService } from '../../services/api.service';
import { ActivatedRoute, Router, Params } from '@angular/router';

@Component({
  moduleId: module.id,
  selector: 'submition-details',
  templateUrl: 'submition-details.component.html',
  styleUrls: ['submition-details.component.css']
})
export class SubmitionDetailsComponent implements OnInit {
    @Input() contestId: string;
    @Input() submitionUrl: string;
    cssClass: string = '';
    submition: any;
    submitions: any[] = [];
    animation: boolean = true;
    keyboard: boolean = true;
    backdrop: string | boolean = true;
    
  constructor(private apiService: ApiService, 
              private errorService: ErrorService, 
              private route: ActivatedRoute,
              private router: Router,) { }

  ngOnInit() { 
    // this.route.params.subscribe((params: Params) => {
    //   this.contestId = params['id'];
    //   console.log('ngOnInit params id (contestId)');
    //   console.log(this.contestId);
    // });
    // this.apiService.getContestSubmitions(this.contestId) //CURRENT FOCUS
    //     .subscribe(submitions => {
    //         console.log('submitions from apiservice in submition-details');
    //         console.log(submitions);
    //         this.submitions = submitions;
    //         console.log(this.submitions);
    //     },
    //     error => {
    //       this.errorService.handleError(error);
    //   });
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
    }

    opened() {
        console.log('Modal opened');
    }

}