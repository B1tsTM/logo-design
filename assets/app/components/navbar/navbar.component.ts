import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { ModalComponent } from 'ng2-bs3-modal/ng2-bs3-modal';
import { User } from '../../models/user';
import { ErrorService } from '../../errors/index';


@Component({
  moduleId: module.id,
  selector: 'navbar',
  templateUrl: 'navbar.component.html',
  styleUrls: ['navbar.component.css']
  // , encapsulation: ViewEncapsulation.None
})
export class NavbarComponent implements OnInit {

 // @ViewChild('modal')
 //   modal: ModalComponent;   to support modal in modal (to implement: forgot password)
    model: User = new User('', '');

    index: number = 0;
  //  backdropOptions = [true, false, 'static'];
    cssClass: string = '';

    animation: boolean = true;
    keyboard: boolean = true;
    backdrop: string | boolean = true;
 //   css: boolean = false;

  public loginForm: FormGroup;
  public registerForm: FormGroup;
  public submitted: boolean = false;

  constructor(private router: Router, private authService: AuthService, private fb: FormBuilder, private errorService: ErrorService) { }

  ngOnInit() { 
    this.loginForm = this.fb.group({
      email: ['', Validators.compose([Validators.required, this.isValidEmail])],
      password: ['', Validators.required]
    });

    this.registerForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', Validators.compose([Validators.required, this.isValidEmail])],
      password: ['', Validators.required],
      userType: ['', Validators.required]
    });
  }

  logout() {
    localStorage.clear();
    console.log('localStorage cleared, logging out...');
    this.router.navigate(['/']);
  }

  isLoggedIn() {
    return this.authService.isLoggedIn();
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

    login() {
       const user = new User(this.loginForm.value.email, this.loginForm.value.password);
       this.authService.signin(user)
       .subscribe(data => {
         console.log(data);
         console.log('Sekmingai prisijungta');
         localStorage.setItem('token', data.token);
         localStorage.setItem('userId', data.userId);
         this.router.navigateByUrl('/');
       },
       error => this.errorService.handleError(error))
    }

    register() {
      const user = new User(this.registerForm.value.email, this.registerForm.value.password, this.registerForm.value.userType ,this.registerForm.value.firstName, this.registerForm.value.lastName);
        this.authService.signup(user)
          .subscribe(data => {
            console.log(data);
          },
          error => this.errorService.handleError(error))
    }

    private isValidEmail(control: FormControl): {[s: string]: boolean} {
      let emailRegex = new RegExp("[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?"); 
      return emailRegex.test(control.value) ? null : {invalidEmail: true}
      }

}