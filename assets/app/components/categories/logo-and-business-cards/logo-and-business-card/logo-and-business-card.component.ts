import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { FileSelectDirective, FileDropDirective, FileUploader } from 'ng2-file-upload/ng2-file-upload';



@Component({
  moduleId: module.id,
  templateUrl: 'logo-and-business-card.component.html'
})
export class LogoAndBusinessCardComponent implements OnInit {
  URL = 'http://localhost:3000/api/v1/upload';
  public uploader:FileUploader = new FileUploader('http://localhost:3000/api/v1/upload');
  public hasBaseDropZoneOver:boolean = false;
  public hasAnotherDropZoneOver:boolean = false;

  public fileOverBase(e:any):void {
    this.hasBaseDropZoneOver = e;
  }

  public fileOverAnother(e:any):void {
    this.hasAnotherDropZoneOver = e;
  }

 // public myForm: FormGroup;
  constructor(private fb: FormBuilder) { }

  ngOnInit() { 
  //  this.myForm = this.fb.group({});
  }
}