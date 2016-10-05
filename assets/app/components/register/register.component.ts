import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { User } from '../../models/user';
import { AuthService } from '../../services/auth.service';
import { ErrorService } from '../../errors/index';


@Component({
  moduleId: module.id,
  selector: 'register',
  templateUrl: 'register.component.html'
})
export class RegisterComponent implements OnInit {
   public myForm: FormGroup;
  public submitted: boolean = false;
  public userTypes = [
    { value: 'client', display: 'Client' },
    { value: 'designer', display: 'Designer' }
];
  constructor(private fb: FormBuilder, private authService: AuthService, private errorService: ErrorService) { }

  ngOnInit() { 
    this.myForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', Validators.compose([Validators.required, this.isValidEmail])],
      password: ['', Validators.required],
      userType: [this.userTypes[0].value, Validators.required]
    });
  }

  register(model) {
        const user = new User(this.myForm.value.email, this.myForm.value.password, this.myForm.value.userType ,this.myForm.value.firstName, this.myForm.value.lastName);
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
