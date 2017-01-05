"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var contests_service_1 = require('../../../../services/contests.service');
var auth_service_1 = require('../../../../services/auth.service');
var router_1 = require('@angular/router');
var angular2_notifications_1 = require('angular2-notifications');
var CryptoJS = require('crypto-js');
var CdCoverDesignComponent = (function () {
    function CdCoverDesignComponent(router, contestsService, notificationsService, authService) {
        this.router = router;
        this.contestsService = contestsService;
        this.notificationsService = notificationsService;
        this.authService = authService;
        this.contest = {};
        this.isLoading = false;
        this.options = {
            position: ["top", "right"]
        };
    }
    CdCoverDesignComponent.prototype.ngOnInit = function () {
        window.scrollTo(0, 0);
        this.contest.category = "CD viršelis";
    };
    CdCoverDesignComponent.prototype.backToList = function () {
        this.router.navigate(['/paskelbti-konkursa']);
    };
    CdCoverDesignComponent.prototype.logErrors = function (errors) {
        console.log(errors);
    };
    CdCoverDesignComponent.prototype.addContest = function (value) {
        var _this = this;
        this.isLoading = true;
        console.log(value);
        this.contestsService.addContest(value)
            .subscribe(function (contest) {
            console.log('contest added');
            console.log(contest);
            _this.isLoading = false;
            _this.notificationsService.success('Paskelbta', 'Konkursas paskelbtas', { timeOut: 3000, showProgressBar: false });
            _this.router.navigate(['/']);
        }, function (error) {
            _this.isLoading = false;
            _this.notificationsService.error(error.title, error.error.message, { timeOut: 3000, showProgressBar: false });
        });
    };
    CdCoverDesignComponent.prototype.isClient = function () {
        return this.authService.isClient();
    };
    CdCoverDesignComponent.prototype.isDesigner = function () {
        return this.authService.isDesigner();
    };
    CdCoverDesignComponent.prototype.isEmailConfirmed = function () {
        return sessionStorage.getItem('emailConfirmed') == CryptoJS.SHA3('true').toString();
    };
    CdCoverDesignComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            templateUrl: 'cd-cover-design.component.html',
            styleUrls: ['cd-cover-design.component.css']
        }), 
        __metadata('design:paramtypes', [router_1.Router, contests_service_1.ContestsService, angular2_notifications_1.NotificationsService, auth_service_1.AuthService])
    ], CdCoverDesignComponent);
    return CdCoverDesignComponent;
}());
exports.CdCoverDesignComponent = CdCoverDesignComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvcHVibGlzaC1jb250ZXN0L2FydC1hbmQtaWxsdXN0cmF0aW9uL2NkLWNvdmVyLWRlc2lnbi9jZC1jb3Zlci1kZXNpZ24uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBa0MsZUFBZSxDQUFDLENBQUE7QUFHbEQsaUNBQWdDLHVDQUF1QyxDQUFDLENBQUE7QUFDeEUsNkJBQTRCLG1DQUFtQyxDQUFDLENBQUE7QUFFaEUsdUJBQXVCLGlCQUFpQixDQUFDLENBQUE7QUFDekMsdUNBQXFDLHdCQUF3QixDQUFDLENBQUE7QUFDOUQsSUFBWSxRQUFRLFdBQU0sV0FBVyxDQUFDLENBQUE7QUFRdEM7SUFPRSxnQ0FBb0IsTUFBYyxFQUNkLGVBQWdDLEVBQ2hDLG9CQUEwQyxFQUMxQyxXQUF3QjtRQUh4QixXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQ2Qsb0JBQWUsR0FBZixlQUFlLENBQWlCO1FBQ2hDLHlCQUFvQixHQUFwQixvQkFBb0IsQ0FBc0I7UUFDMUMsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFUNUMsWUFBTyxHQUFXLEVBQUUsQ0FBQztRQUNyQixjQUFTLEdBQUcsS0FBSyxDQUFDO1FBQ1gsWUFBTyxHQUFHO1lBQ2IsUUFBUSxFQUFFLENBQUMsS0FBSyxFQUFDLE9BQU8sQ0FBQztTQUMxQixDQUFDO0lBSzRDLENBQUM7SUFFakQseUNBQVEsR0FBUjtRQUNFLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3JCLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxHQUFHLGFBQWEsQ0FBQztJQUN4QyxDQUFDO0lBRUQsMkNBQVUsR0FBVjtRQUNFLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMscUJBQXFCLENBQUMsQ0FBQyxDQUFDO0lBQ2hELENBQUM7SUFFRCwwQ0FBUyxHQUFULFVBQVUsTUFBTTtRQUNkLE9BQU8sQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDdEIsQ0FBQztJQUVELDJDQUFVLEdBQVYsVUFBVyxLQUFLO1FBQWhCLGlCQWNDO1FBYkMsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUM7UUFDdEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNuQixJQUFJLENBQUMsZUFBZSxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUM7YUFDbkMsU0FBUyxDQUFDLFVBQUEsT0FBTztZQUNoQixPQUFPLENBQUMsR0FBRyxDQUFDLGVBQWUsQ0FBQyxDQUFDO1lBQzdCLE9BQU8sQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUM7WUFDckIsS0FBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7WUFDdkIsS0FBSSxDQUFDLG9CQUFvQixDQUFDLE9BQU8sQ0FBQyxXQUFXLEVBQUUsc0JBQXNCLEVBQUUsRUFBQyxPQUFPLEVBQUUsSUFBSSxFQUFFLGVBQWUsRUFBRSxLQUFLLEVBQUMsQ0FBQyxDQUFBO1lBQy9HLEtBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztRQUM5QixDQUFDLEVBQUUsVUFBQSxLQUFLO1lBQ04sS0FBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7WUFDdkIsS0FBSSxDQUFDLG9CQUFvQixDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsS0FBSyxFQUFFLEtBQUssQ0FBQyxLQUFLLENBQUMsT0FBTyxFQUFFLEVBQUMsT0FBTyxFQUFFLElBQUksRUFBRSxlQUFlLEVBQUUsS0FBSyxFQUFDLENBQUMsQ0FBQTtRQUM1RyxDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFFRCx5Q0FBUSxHQUFSO1FBQ0UsTUFBTSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDckMsQ0FBQztJQUVELDJDQUFVLEdBQVY7UUFDRSxNQUFNLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxVQUFVLEVBQUUsQ0FBQztJQUN2QyxDQUFDO0lBRUQsaURBQWdCLEdBQWhCO1FBQ0UsTUFBTSxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxRQUFRLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQ3RGLENBQUM7SUF4REg7UUFBQyxnQkFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFdBQVcsRUFBRSxnQ0FBZ0M7WUFDN0MsU0FBUyxFQUFFLENBQUMsK0JBQStCLENBQUM7U0FDN0MsQ0FBQzs7OEJBQUE7SUFxREYsNkJBQUM7QUFBRCxDQXBEQSxBQW9EQyxJQUFBO0FBcERZLDhCQUFzQix5QkFvRGxDLENBQUEiLCJmaWxlIjoiY29tcG9uZW50cy9wdWJsaXNoLWNvbnRlc3QvYXJ0LWFuZC1pbGx1c3RyYXRpb24vY2QtY292ZXItZGVzaWduL2NkLWNvdmVyLWRlc2lnbi5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBGb3JtR3JvdXAsIEZvcm1Db250cm9sLCBGb3JtQnVpbGRlciwgVmFsaWRhdG9ycyB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuaW1wb3J0IHsgQ29udGVzdCB9IGZyb20gJy4uLy4uLy4uLy4uL21vZGVscy9jb250ZXN0JztcclxuaW1wb3J0IHsgQ29udGVzdHNTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vLi4vc2VydmljZXMvY29udGVzdHMuc2VydmljZSc7XHJcbmltcG9ydCB7IEF1dGhTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vLi4vc2VydmljZXMvYXV0aC5zZXJ2aWNlJztcclxuaW1wb3J0IHsgRXJyb3JTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vLi4vZXJyb3JzL2luZGV4JztcclxuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuaW1wb3J0IHsgTm90aWZpY2F0aW9uc1NlcnZpY2UgfSBmcm9tICdhbmd1bGFyMi1ub3RpZmljYXRpb25zJztcclxuaW1wb3J0ICogYXMgQ3J5cHRvSlMgZnJvbSAnY3J5cHRvLWpzJztcclxuXHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBtb2R1bGVJZDogbW9kdWxlLmlkLFxyXG4gIHRlbXBsYXRlVXJsOiAnY2QtY292ZXItZGVzaWduLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnY2QtY292ZXItZGVzaWduLmNvbXBvbmVudC5jc3MnXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgQ2RDb3ZlckRlc2lnbkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgY29udGVzdDogT2JqZWN0ID0ge307XHJcbiAgaXNMb2FkaW5nID0gZmFsc2U7XHJcbiAgcHVibGljIG9wdGlvbnMgPSB7XHJcbiAgICAgIHBvc2l0aW9uOiBbXCJ0b3BcIixcInJpZ2h0XCJdXHJcbiAgICB9O1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJvdXRlcjogUm91dGVyLFxyXG4gICAgICAgICAgICAgIHByaXZhdGUgY29udGVzdHNTZXJ2aWNlOiBDb250ZXN0c1NlcnZpY2UsXHJcbiAgICAgICAgICAgICAgcHJpdmF0ZSBub3RpZmljYXRpb25zU2VydmljZTogTm90aWZpY2F0aW9uc1NlcnZpY2UsXHJcbiAgICAgICAgICAgICAgcHJpdmF0ZSBhdXRoU2VydmljZTogQXV0aFNlcnZpY2UpIHsgfVxyXG5cclxuICBuZ09uSW5pdCgpIHsgXHJcbiAgICB3aW5kb3cuc2Nyb2xsVG8oMCwwKTtcclxuICAgIHRoaXMuY29udGVzdC5jYXRlZ29yeSA9IFwiQ0QgdmlyxaFlbGlzXCI7XHJcbiAgfVxyXG5cclxuICBiYWNrVG9MaXN0KCkge1xyXG4gICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoWycvcGFza2VsYnRpLWtvbmt1cnNhJ10pO1xyXG4gIH1cclxuXHJcbiAgbG9nRXJyb3JzKGVycm9ycykge1xyXG4gICAgY29uc29sZS5sb2coZXJyb3JzKTtcclxuICB9XHJcblxyXG4gIGFkZENvbnRlc3QodmFsdWUpIHtcclxuICAgIHRoaXMuaXNMb2FkaW5nID0gdHJ1ZTtcclxuICAgIGNvbnNvbGUubG9nKHZhbHVlKTtcclxuICAgIHRoaXMuY29udGVzdHNTZXJ2aWNlLmFkZENvbnRlc3QodmFsdWUpXHJcbiAgICAgIC5zdWJzY3JpYmUoY29udGVzdCA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ2NvbnRlc3QgYWRkZWQnKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhjb250ZXN0KTtcclxuICAgICAgICB0aGlzLmlzTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMubm90aWZpY2F0aW9uc1NlcnZpY2Uuc3VjY2VzcygnUGFza2VsYnRhJywgJ0tvbmt1cnNhcyBwYXNrZWxidGFzJywge3RpbWVPdXQ6IDMwMDAsIHNob3dQcm9ncmVzc0JhcjogZmFsc2V9KVxyXG4gICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFsnLyddKTtcclxuICAgICAgfSwgZXJyb3IgPT4ge1xyXG4gICAgICAgIHRoaXMuaXNMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5ub3RpZmljYXRpb25zU2VydmljZS5lcnJvcihlcnJvci50aXRsZSwgZXJyb3IuZXJyb3IubWVzc2FnZSwge3RpbWVPdXQ6IDMwMDAsIHNob3dQcm9ncmVzc0JhcjogZmFsc2V9KVxyXG4gICAgICB9KTtcclxuICB9XHJcblxyXG4gIGlzQ2xpZW50KCkge1xyXG4gICAgcmV0dXJuIHRoaXMuYXV0aFNlcnZpY2UuaXNDbGllbnQoKTtcclxuICB9XHJcblxyXG4gIGlzRGVzaWduZXIoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5hdXRoU2VydmljZS5pc0Rlc2lnbmVyKCk7XHJcbiAgfVxyXG5cclxuICBpc0VtYWlsQ29uZmlybWVkKCkgeyAvLyBUT0RPIGFkZCB0aGVzZSBjaGVja3MgdG8gZXZlcnkgZm9ybVxyXG4gICAgcmV0dXJuIHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oJ2VtYWlsQ29uZmlybWVkJykgPT0gQ3J5cHRvSlMuU0hBMygndHJ1ZScpLnRvU3RyaW5nKCk7XHJcbiAgfVxyXG59Il19
