import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { ModalComponent } from 'ng2-bs3-modal/ng2-bs3-modal';
import { User } from '../../models/user';
import { ErrorService } from '../../errors/index';


@Component({
  moduleId: module.id,
  selector: 'user-nav',
  templateUrl: 'user-navigation.component.html',
  styleUrls: ['user-navigation.component.css']
  //, encapsulation: ViewEncapsulation.None
})
export class UserNavigationComponent implements OnInit {

  //@ViewChild('modal')
    //modal: ModalComponent;   //to support modal in modal (to implement: forgot password)
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
  public userTypes = [
    { value: 'uzsakovas', display: 'Užsakovas' },
    { value: 'dizaineris', display: 'Dizaineris' }
];

  constructor(private router: Router, private authService: AuthService, private fb: FormBuilder, private errorService: ErrorService) { }

  ngOnInit() { 
    this.loginForm = this.fb.group({
      //email: ['', Validators.compose([Validators.required, this.isValidEmail])],
      nickName: ['', Validators.required],
      password: ['', Validators.required]
    });

    this.registerForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      nickName: ['', Validators.required],
      email: ['', Validators.compose([Validators.required, this.isValidEmail])],
      password: ['', Validators.required],
      userType: [this.userTypes[0].value, Validators.required]
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

    login(form: any) {
       const user = new User(form.nickName.value, form.password.value);
       console.log('user-navigation login user const');
       console.log(user);
       this.authService.signin(user)
       .subscribe(data => {
         console.log(data);
         console.log('Sekmingai prisijungta');
         localStorage.setItem('token', data.token);
         localStorage.setItem('userId', data.userId);
         localStorage.setItem('userType', data.userType);
         this.router.navigateByUrl('/');
       },
       error => this.errorService.handleError(error))
    }

    register(form: any) {
      //const user = new User(this.registerForm.value.email, this.registerForm.value.password, this.registerForm.value.userType ,this.registerForm.value.firstName, this.registerForm.value.lastName, 0, 0, 0);
      //const user = new User(form.nickName.value, form.password.value, this.registerForm.value.userType, form.firstName.value, form.lastName.value, form.email.value, 0, 0, 0);
      const user = new User(form.nickName.value, form.password.value, this.registerForm.value.userType, form.firstName.value, form.lastName.value, form.email.value, 0, 0, 0);
        this.authService.signup(user)
          .subscribe(data => {
            console.log(data);
            form.firstName.value = '';
            form.lastName.value = '';
            form.nickName.value = '';
            form.email.value = '';
            form.password.value = '';
          },
          error => this.errorService.handleError(error))
    }

    isClient() {
      return this.authService.isClient();
    }

    isDesigner() {
      return this.authService.isDesigner();
    }

    private isValidEmail(control: FormControl): {[s: string]: boolean} {
      let emailRegex = new RegExp("[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?"); 
      return emailRegex.test(control.value) ? null : {invalidEmail: true}
      }

}