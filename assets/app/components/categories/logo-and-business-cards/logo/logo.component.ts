import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  moduleId: module.id,
  templateUrl: 'logo.component.html',
  styleUrls: ['logo.component.css']
})
export class LogoComponent implements OnInit {
  public myForm: FormGroup;
  public submitted: boolean = false;
  constructor(private fb: FormBuilder) { }

  ngOnInit() { 
    // this.myForm = new FormGroup({
    //    firstName: new FormControl()
    // });
    this.myForm = this.fb.group({
      firstName: ['', Validators.required]
    });
  }

  save(model, isValid: boolean) {
        this.submitted = true; // set form submit to true

        // check if model is valid
        // if valid, call API to save customer
        console.log(model);
        console.log(isValid);
    }
}