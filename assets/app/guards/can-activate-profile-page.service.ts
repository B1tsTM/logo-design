import { Injectable } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { CanActivate } from '@angular/router';

@Injectable()
export class CanActivateOnLoginService {

  constructor(private authService: AuthService) { }

  ngOnInit() { }

  canActivate() {
    return this.authService.isLoggedIn();
  }
}