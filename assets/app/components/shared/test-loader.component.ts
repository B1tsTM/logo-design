import { Component, OnInit, Input } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'test-loader',
  template: `<div class="test-loader" *ngIf="isLoading"></div>`,
  styles: [`
  .test-loader {
    border: 16px solid #f3f3f3; /* Light grey */
    border-top: 16px solid #3498db; /* Blue */
    border-radius: 50%;
    width: 80px;
    height: 80px;
    animation: spin 1s linear infinite;
    position: absolute;
    right: 15px;
    top: 15px;
}

@keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
}
  `]
})
export class TestLoaderComponent {
  
}