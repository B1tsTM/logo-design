import { Injectable } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';

@Injectable()
export class CanActivateAdminPageService implements CanActivate {

  constructor(private authService: AuthService,
              private router: Router) { }

  ngOnInit() { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    //if (state.url == '/admin' && !this.authService.isAdmin()) {
    if (!this.authService.isAdmin()) {
      this.router.navigate(['/']);
      return false;
    } else {
      return true;
    }
}

}