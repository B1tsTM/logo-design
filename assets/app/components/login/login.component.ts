import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { User } from '../../models/user';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';


@Component({
  moduleId: module.id,
  selector: 'login',
  templateUrl: 'login.component.html',
  styleUrls: ['login.component.css']
})
export class LoginComponent implements OnInit {
  public myForm: FormGroup;
  public submitted: boolean = false;
  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router) { }

  ngOnInit() { 
    this.myForm = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  login() {
       const user = new User(this.myForm.value.email, this.myForm.value.password);
       this.authService.signin(user)
       .subscribe(data => {
         console.log(data);
         localStorage.setItem('token', data.token);
         localStorage.setItem('userId', data.userId);
         this.router.navigateByUrl('/');
       },
       error => console.error(error))
    }
}