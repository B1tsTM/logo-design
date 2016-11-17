import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  moduleId: module.id,
  templateUrl: 'other-designs.component.html',
  styleUrls: ['other-designs.component.css']
})
export class OtherDesignsComponent implements OnInit {
  constructor(private router: Router) { }

  ngOnInit() { }

  backToList() {
    this.router.navigate(['/paskelbti-konkursa']);
  }
}