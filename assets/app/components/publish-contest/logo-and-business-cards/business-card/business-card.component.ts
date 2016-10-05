import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';


@Component({
  moduleId: module.id,
  templateUrl: 'business-card.component.html',
  styleUrls: ['business-card.component.css']
})
export class BusinessCardComponent implements OnInit {
  public myForm: FormGroup;
  public submitted: boolean = false;
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.myForm = this.fb.group({
      logoName: ['', Validators.required],
      description: [''],
      additionalInfo: ['']
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