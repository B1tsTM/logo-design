import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import * as CryptoJS from 'crypto-js';

@Component({
  moduleId: module.id,
  selector: 'confirm-user',
  templateUrl: 'confirm-user.component.html',
  styleUrls: ['confirm-user.component.css']
})
export class ConfirmUserComponent implements OnInit {
  confirmedBlock = false;
  errorBlock = false;
  confirmationCode: string;
  constructor(private route: ActivatedRoute,
              private authService: AuthService,
              private router: Router) { }

  ngOnInit() { 
    this.route.params.subscribe((params: Params) => {
      this.confirmationCode = params['id'];
    });
    this.authService.validateUsersEmail(this.confirmationCode)
    .subscribe(data => {
      if (data.message) {
        console.log(data);
        this.confirmedBlock = true;
        sessionStorage.setItem('emailConfirmed', CryptoJS.SHA3('true').toString());
        setTimeout(() => {
          this.router.navigate(['/']);
        }, 4000)
      }
    }, error => {
      this.errorBlock = true;
      setTimeout(() => {
          this.router.navigate(['/']);
        }, 5000)
      })
  }

  
}