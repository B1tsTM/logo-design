import { Component, OnInit } from '@angular/core';
import { Error } from './error';
import { ErrorService } from './error.service';

@Component({
  moduleId: module.id,
  selector: 'my-error',
  templateUrl: 'error.component.html',
  styleUrls: ['error.component.css']
})
export class ErrorComponent implements OnInit {
  errorDisplay = 'none';
  errorData: Error;

  constructor(private errorService: ErrorService) { }

  ngOnInit() {
    this.errorService.errorOccurred.subscribe(
      errorData => {
        this.errorData = errorData;
        this.errorDisplay = 'block';
      }
    );
   }

  onErrorHandled() {
    this.errorDisplay = 'none';
  }
}