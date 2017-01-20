import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { ApiService } from '../../services/api.service';
import { ModalComponent } from 'ng2-bs3-modal/ng2-bs3-modal';
import { User } from '../../models/user';
import { ErrorService } from '../../errors/index';
import { NotificationsService } from 'angular2-notifications';
import * as CryptoJS from 'crypto-js';


@Component({
  moduleId: module.id,
  selector: 'user-nav',
  templateUrl: 'user-navigation.component.html',
  styleUrls: ['user-navigation.component.css']
  //, encapsulation: ViewEncapsulation.None
})
export class UserNavigationComponent implements OnInit {
    userId: string = '';
    nickname: string = '';
  //@ViewChild('modal')
    //modal: ModalComponent;   //to support modal in modal (to implement: forgot password)
    model: User = new User('', '');

    @ViewChild('registerModal') registerModal;
    @ViewChild('loginModal') loginModal;

    index: number = 0;
  //  backdropOptions = [true, false, 'static'];
    cssClass: string = '';

    animation: boolean = true;
    keyboard: boolean = true;
    backdrop: string | boolean = true;
    isLoading = false;
 //   css: boolean = false;

  public loginForm: FormGroup;
  public registerForm: FormGroup;
  public submitted: boolean = false;
  public userTypes = [
    { value: 'uzsakovas', display: 'Užsakovas' },
    { value: 'dizaineris', display: 'Dizaineris' }
];
  public options = {
      position: ["top","right"]
    };

  constructor(private router: Router, 
              private authService: AuthService, 
              private fb: FormBuilder, 
              private errorService: ErrorService,
              private notificationsService: NotificationsService,
              private apiService: ApiService) {
              //this.isMatchingPassword = this.isMatchingPassword.bind(this);
               }

  ngOnInit() { 
    this.userId = sessionStorage.getItem('userId');
    this.apiService.getUserInfo(this.userId)
      .subscribe(user => {
        this.nickname = user.nickName;
      },
      error => {
        this.isLoading = false;
      });

    this.loginForm = this.fb.group({
      nickName: ['', Validators.required],
      password: ['', Validators.required]
    });

    this.registerForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      nickNameReg: ['', Validators.compose([Validators.required, Validators.minLength(4)])],
      email: ['', Validators.compose([Validators.required, this.isValidEmail])],
      passwordReg: ['', Validators.compose([Validators.required, Validators.minLength(6)])],
      repeatPassword: ['', Validators.compose([Validators.required, Validators.minLength(6)])],
      userType: [this.userTypes[0].value, Validators.required]
    });

  }

  logout() {
    sessionStorage.clear();
    this.notificationsService.info('Atsijungiama...', 'Sėkmingai atsijungėte', {timeOut: 3000, showProgressBar: false});
    this.router.navigate(['/']);
  }

  isLoggedIn() {
    return this.authService.isLoggedIn();
  }

    closed() {
    }

    dismissed() {
    }

    opened() {
    }

    login(form: any) {
      this.isLoading = true;
       const user = new User(form.nickName.value, form.password.value);
       this.authService.signin(user)
       .subscribe(data => {
         sessionStorage.setItem('token', data.token);
         sessionStorage.setItem('userId', data.userId);
         sessionStorage.setItem('userType', CryptoJS.SHA3(data.userType).toString());
         sessionStorage.setItem('emailConfirmed', CryptoJS.SHA3(data.emailConfirmed.toString()).toString());
         this.nickname = data.nickname;
         this.isLoading = false;
         this.loginModal.close();
         this.notificationsService.success('Prisijungta', 'Sėkmingai prisijungta', {timeOut: 3000, showProgressBar: false});
       },
       error => {
         this.isLoading = false; 
         this.notificationsService.error(error.title, error.error.message, {timeOut: 3000, showProgressBar: false})
      })
    }

    register(form: any) {
      this.isLoading = true;
      const user = new User(form.nickNameReg.value, form.passwordReg.value, form.repeatPassword.value, this.registerForm.value.userType, form.firstName.value, form.lastName.value, form.email.value, 0, 0);
        this.authService.signup(user)
          .subscribe(data => {
            form.firstName.value = null;
            form.lastName.value = null;
            form.nickNameReg.value = null;
            form.email.value = null;
            form.passwordReg.value = null;
            form.repeatPassword.value = null;
            this.isLoading = false;
            this.registerModal.close();
            this.notificationsService.success('Užregistruota', 'Sėkmingai užsiregistravote. Patikrinkite savo el. pašto paskyrą ir ją patvirtinkite', {timeOut: 7000, showProgressBar: false});
          },
          error => { 
            this.isLoading = false;
            this.notificationsService.error(error.title, error.error.message, {timeOut: 3000, showProgressBar: false})
        }) 
    }

    isClient() {
      return this.authService.isClient();
    }

    isDesigner() {
      return this.authService.isDesigner();
    }

    isAdmin() {
      return this.authService.isAdmin();
    }

    private isValidEmail(control: FormControl): {[s: string]: boolean} {
      let emailRegex = new RegExp("[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?"); 
      return emailRegex.test(control.value) ? null : {invalidEmail: true}
      }

    isMatchingPassword(control: FormGroup) {
        // check if control is equal to the password1 control //for some reason not working properly
        return control.value === this.registerForm.value.passwordReg ? null : {isEqual: true};
    }

      created(ev) {
    }

    destroyed(ev) {
    }

    log(firstName) {
      console.log(firstName);
    }

}