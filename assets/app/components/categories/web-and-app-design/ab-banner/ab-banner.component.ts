import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../../services/auth.service';

@Component({
  moduleId: module.id,
  templateUrl: 'ab-banner.component.html',
  styleUrls: ['ab-banner.component.css']
})
export class AbBannerComponent implements OnInit {
  id: any;
  gallery:any[] = [];
  constructor(private authService: AuthService) { }

  ngOnInit() { 
    this.id = localStorage.getItem('userId');
    this.authService.getGallery(this.id)
              .subscribe(data => {
              console.log(data);
              this.gallery = data;
            }, (error) => {
            console.error(error);
        });
  }
}