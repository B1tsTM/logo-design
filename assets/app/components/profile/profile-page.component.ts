import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  moduleId: module.id,
  selector: 'profile-page',
  templateUrl: 'profile-page.component.html'
})
export class ProfilePageComponent implements OnInit {
  avatarUrl: string = '';
  constructor(private authService: AuthService) { }

  ngOnInit() { 
    var id = localStorage.getItem('userId');
    this.authService.getAvatar(id)
      .subscribe(data => {
        console.log(data);
        this.avatarUrl = data.avatarUrl;
      });
  }


}