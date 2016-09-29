import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Designer } from '../../models/designer';
import { AuthService } from '../../services/auth.service';


@Component({
  moduleId: module.id,
  selector: 'register',
  templateUrl: 'register.component.html'
})
export class RegisterComponent implements OnInit {
   public myForm: FormGroup;
  public submitted: boolean = false;
  constructor(private fb: FormBuilder, private authService: AuthService) { }

  ngOnInit() { 
    this.myForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', Validators.compose([Validators.required, this.isValidEmail])],
      password: ['', Validators.required]
    });
  }

  register(model) {
        const designer = new Designer(this.myForm.value.email, this.myForm.value.password, this.myForm.value.firstName, this.myForm.value.lastName);
        this.authService.signup(designer)
          .subscribe(data => {
            console.log(data);
          },
          error => console.error(error))
    }

    private isValidEmail(control: FormControl): {[s: string]: boolean} {
      let emailRegex = new RegExp("[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?"); 
      return emailRegex.test(control.value) ? null : {invalidEmail: true}
      }
    }
