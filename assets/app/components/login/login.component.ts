import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Designer } from '../../models/designer';
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
       const designer = new Designer(this.myForm.value.email, this.myForm.value.password);
       this.authService.signin(designer)
       .subscribe(data => {
         console.log(data);
         localStorage.setItem('token', data.token);
         localStorage.setItem('designerId', data.designerId);
         this.router.navigateByUrl('/');
       },
       error => console.error(error))
    }
}