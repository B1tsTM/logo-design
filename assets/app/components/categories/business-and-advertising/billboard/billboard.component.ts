import { Component, OnInit, ElementRef } from '@angular/core';
import { Http } from '@angular/http';

@Component({
  moduleId: module.id,
  templateUrl: 'billboard.component.html'
})
export class BillboardComponent implements OnInit {
  constructor(private http: Http, private el:ElementRef) { }

  ngOnInit() { }

  

}