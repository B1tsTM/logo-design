import { Component } from '@angular/core';
import { Router, Event as RouterEvent, NavigationEnd, NavigationError, NavigationStart, NavigationCancel } from '@angular/router';

@Component({
    moduleId: module.id,
    selector: 'my-app',
    templateUrl: 'app.component.html'
})
export class AppComponent { 
    isLoading: boolean = false;
    constructor(private router: Router) {
        router.events.subscribe((event: RouterEvent) => {
            this.navigationInterceptor(event);
        });
    }

    navigationInterceptor(event: RouterEvent): void {
        if (event instanceof NavigationStart) {
            this.isLoading = true;
        }
        if (event instanceof NavigationEnd) {
            this.isLoading = false;
        }

        // Set loading state to false in both of the below events to hide the spinner in case a request fails
        if (event instanceof NavigationCancel) {
            this.isLoading = false;
        }
        if (event instanceof NavigationError) {
            this.isLoading = false;
        }
    }
    
}
