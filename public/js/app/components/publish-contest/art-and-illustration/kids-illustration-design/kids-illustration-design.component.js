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
var KidsIllustrationDesignComponent = (function () {
    function KidsIllustrationDesignComponent(router, contestsService, notificationsService, authService) {
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
    KidsIllustrationDesignComponent.prototype.ngOnInit = function () {
        window.scrollTo(0, 0);
        this.contest.category = "Vaikiškos iliustracijos";
    };
    KidsIllustrationDesignComponent.prototype.backToList = function () {
        this.router.navigate(['/paskelbti-konkursa']);
    };
    KidsIllustrationDesignComponent.prototype.logErrors = function (errors) {
        console.log(errors);
    };
    KidsIllustrationDesignComponent.prototype.addContest = function (value) {
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
    KidsIllustrationDesignComponent.prototype.isClient = function () {
        return this.authService.isClient();
    };
    KidsIllustrationDesignComponent.prototype.isDesigner = function () {
        return this.authService.isDesigner();
    };
    KidsIllustrationDesignComponent.prototype.isEmailConfirmed = function () {
        return sessionStorage.getItem('emailConfirmed') == CryptoJS.SHA3('true').toString();
    };
    KidsIllustrationDesignComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            templateUrl: 'kids-illustration-design.component.html',
            styleUrls: ['kids-illustration-design.component.css']
        }), 
        __metadata('design:paramtypes', [router_1.Router, contests_service_1.ContestsService, angular2_notifications_1.NotificationsService, auth_service_1.AuthService])
    ], KidsIllustrationDesignComponent);
    return KidsIllustrationDesignComponent;
}());
exports.KidsIllustrationDesignComponent = KidsIllustrationDesignComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvcHVibGlzaC1jb250ZXN0L2FydC1hbmQtaWxsdXN0cmF0aW9uL2tpZHMtaWxsdXN0cmF0aW9uLWRlc2lnbi9raWRzLWlsbHVzdHJhdGlvbi1kZXNpZ24uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBa0MsZUFBZSxDQUFDLENBQUE7QUFHbEQsaUNBQWdDLHVDQUF1QyxDQUFDLENBQUE7QUFDeEUsNkJBQTRCLG1DQUFtQyxDQUFDLENBQUE7QUFFaEUsdUJBQXVCLGlCQUFpQixDQUFDLENBQUE7QUFDekMsdUNBQXFDLHdCQUF3QixDQUFDLENBQUE7QUFDOUQsSUFBWSxRQUFRLFdBQU0sV0FBVyxDQUFDLENBQUE7QUFPdEM7SUFPRSx5Q0FBb0IsTUFBYyxFQUNkLGVBQWdDLEVBQ2hDLG9CQUEwQyxFQUMxQyxXQUF3QjtRQUh4QixXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQ2Qsb0JBQWUsR0FBZixlQUFlLENBQWlCO1FBQ2hDLHlCQUFvQixHQUFwQixvQkFBb0IsQ0FBc0I7UUFDMUMsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFUNUMsWUFBTyxHQUFXLEVBQUUsQ0FBQztRQUNyQixjQUFTLEdBQUcsS0FBSyxDQUFDO1FBQ1gsWUFBTyxHQUFHO1lBQ2IsUUFBUSxFQUFFLENBQUMsS0FBSyxFQUFDLE9BQU8sQ0FBQztTQUMxQixDQUFDO0lBSzRDLENBQUM7SUFFakQsa0RBQVEsR0FBUjtRQUNFLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3JCLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxHQUFHLHlCQUF5QixDQUFDO0lBQ3BELENBQUM7SUFFRCxvREFBVSxHQUFWO1FBQ0UsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDLENBQUM7SUFDaEQsQ0FBQztJQUVELG1EQUFTLEdBQVQsVUFBVSxNQUFNO1FBQ2QsT0FBTyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUN0QixDQUFDO0lBRUQsb0RBQVUsR0FBVixVQUFXLEtBQUs7UUFBaEIsaUJBY0M7UUFiQyxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQztRQUN0QixPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ25CLElBQUksQ0FBQyxlQUFlLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQzthQUNuQyxTQUFTLENBQUMsVUFBQSxPQUFPO1lBQ2hCLE9BQU8sQ0FBQyxHQUFHLENBQUMsZUFBZSxDQUFDLENBQUM7WUFDN0IsT0FBTyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQztZQUNyQixLQUFJLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQztZQUN2QixLQUFJLENBQUMsb0JBQW9CLENBQUMsT0FBTyxDQUFDLFdBQVcsRUFBRSxzQkFBc0IsRUFBRSxFQUFDLE9BQU8sRUFBRSxJQUFJLEVBQUUsZUFBZSxFQUFFLEtBQUssRUFBQyxDQUFDLENBQUE7WUFDL0csS0FBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQzlCLENBQUMsRUFBRSxVQUFBLEtBQUs7WUFDTixLQUFJLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQztZQUN2QixLQUFJLENBQUMsb0JBQW9CLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxLQUFLLEVBQUUsS0FBSyxDQUFDLEtBQUssQ0FBQyxPQUFPLEVBQUUsRUFBQyxPQUFPLEVBQUUsSUFBSSxFQUFFLGVBQWUsRUFBRSxLQUFLLEVBQUMsQ0FBQyxDQUFBO1FBQzVHLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUVELGtEQUFRLEdBQVI7UUFDRSxNQUFNLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUNyQyxDQUFDO0lBRUQsb0RBQVUsR0FBVjtRQUNFLE1BQU0sQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLFVBQVUsRUFBRSxDQUFDO0lBQ3ZDLENBQUM7SUFFRCwwREFBZ0IsR0FBaEI7UUFDRSxNQUFNLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLFFBQVEsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDdEYsQ0FBQztJQXhESDtRQUFDLGdCQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsV0FBVyxFQUFFLHlDQUF5QztZQUN0RCxTQUFTLEVBQUUsQ0FBQyx3Q0FBd0MsQ0FBQztTQUN0RCxDQUFDOzt1Q0FBQTtJQXFERixzQ0FBQztBQUFELENBcERBLEFBb0RDLElBQUE7QUFwRFksdUNBQStCLGtDQW9EM0MsQ0FBQSIsImZpbGUiOiJjb21wb25lbnRzL3B1Ymxpc2gtY29udGVzdC9hcnQtYW5kLWlsbHVzdHJhdGlvbi9raWRzLWlsbHVzdHJhdGlvbi1kZXNpZ24va2lkcy1pbGx1c3RyYXRpb24tZGVzaWduLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEZvcm1Hcm91cCwgRm9ybUNvbnRyb2wsIEZvcm1CdWlsZGVyLCBWYWxpZGF0b3JzIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5pbXBvcnQgeyBDb250ZXN0IH0gZnJvbSAnLi4vLi4vLi4vLi4vbW9kZWxzL2NvbnRlc3QnO1xyXG5pbXBvcnQgeyBDb250ZXN0c1NlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi8uLi9zZXJ2aWNlcy9jb250ZXN0cy5zZXJ2aWNlJztcclxuaW1wb3J0IHsgQXV0aFNlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi8uLi9zZXJ2aWNlcy9hdXRoLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBFcnJvclNlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi8uLi9lcnJvcnMvaW5kZXgnO1xyXG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5pbXBvcnQgeyBOb3RpZmljYXRpb25zU2VydmljZSB9IGZyb20gJ2FuZ3VsYXIyLW5vdGlmaWNhdGlvbnMnO1xyXG5pbXBvcnQgKiBhcyBDcnlwdG9KUyBmcm9tICdjcnlwdG8tanMnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcclxuICB0ZW1wbGF0ZVVybDogJ2tpZHMtaWxsdXN0cmF0aW9uLWRlc2lnbi5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJ2tpZHMtaWxsdXN0cmF0aW9uLWRlc2lnbi5jb21wb25lbnQuY3NzJ11cclxufSlcclxuZXhwb3J0IGNsYXNzIEtpZHNJbGx1c3RyYXRpb25EZXNpZ25Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gIGNvbnRlc3Q6IE9iamVjdCA9IHt9O1xyXG4gIGlzTG9hZGluZyA9IGZhbHNlO1xyXG4gIHB1YmxpYyBvcHRpb25zID0ge1xyXG4gICAgICBwb3NpdGlvbjogW1widG9wXCIsXCJyaWdodFwiXVxyXG4gICAgfTtcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSByb3V0ZXI6IFJvdXRlcixcclxuICAgICAgICAgICAgICBwcml2YXRlIGNvbnRlc3RzU2VydmljZTogQ29udGVzdHNTZXJ2aWNlLFxyXG4gICAgICAgICAgICAgIHByaXZhdGUgbm90aWZpY2F0aW9uc1NlcnZpY2U6IE5vdGlmaWNhdGlvbnNTZXJ2aWNlLFxyXG4gICAgICAgICAgICAgIHByaXZhdGUgYXV0aFNlcnZpY2U6IEF1dGhTZXJ2aWNlKSB7IH1cclxuXHJcbiAgbmdPbkluaXQoKSB7IFxyXG4gICAgd2luZG93LnNjcm9sbFRvKDAsMCk7XHJcbiAgICB0aGlzLmNvbnRlc3QuY2F0ZWdvcnkgPSBcIlZhaWtpxaFrb3MgaWxpdXN0cmFjaWpvc1wiO1xyXG4gIH1cclxuXHJcbiAgYmFja1RvTGlzdCgpIHtcclxuICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFsnL3Bhc2tlbGJ0aS1rb25rdXJzYSddKTtcclxuICB9XHJcblxyXG4gIGxvZ0Vycm9ycyhlcnJvcnMpIHtcclxuICAgIGNvbnNvbGUubG9nKGVycm9ycyk7XHJcbiAgfVxyXG5cclxuICBhZGRDb250ZXN0KHZhbHVlKSB7XHJcbiAgICB0aGlzLmlzTG9hZGluZyA9IHRydWU7XHJcbiAgICBjb25zb2xlLmxvZyh2YWx1ZSk7XHJcbiAgICB0aGlzLmNvbnRlc3RzU2VydmljZS5hZGRDb250ZXN0KHZhbHVlKVxyXG4gICAgICAuc3Vic2NyaWJlKGNvbnRlc3QgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdjb250ZXN0IGFkZGVkJyk7XHJcbiAgICAgICAgY29uc29sZS5sb2coY29udGVzdCk7XHJcbiAgICAgICAgdGhpcy5pc0xvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLm5vdGlmaWNhdGlvbnNTZXJ2aWNlLnN1Y2Nlc3MoJ1Bhc2tlbGJ0YScsICdLb25rdXJzYXMgcGFza2VsYnRhcycsIHt0aW1lT3V0OiAzMDAwLCBzaG93UHJvZ3Jlc3NCYXI6IGZhbHNlfSlcclxuICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJy8nXSk7XHJcbiAgICAgIH0sIGVycm9yID0+IHtcclxuICAgICAgICB0aGlzLmlzTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMubm90aWZpY2F0aW9uc1NlcnZpY2UuZXJyb3IoZXJyb3IudGl0bGUsIGVycm9yLmVycm9yLm1lc3NhZ2UsIHt0aW1lT3V0OiAzMDAwLCBzaG93UHJvZ3Jlc3NCYXI6IGZhbHNlfSlcclxuICAgICAgfSk7XHJcbiAgfVxyXG5cclxuICBpc0NsaWVudCgpIHtcclxuICAgIHJldHVybiB0aGlzLmF1dGhTZXJ2aWNlLmlzQ2xpZW50KCk7XHJcbiAgfVxyXG5cclxuICBpc0Rlc2lnbmVyKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuYXV0aFNlcnZpY2UuaXNEZXNpZ25lcigpO1xyXG4gIH1cclxuXHJcbiAgaXNFbWFpbENvbmZpcm1lZCgpIHsgLy8gVE9ETyBhZGQgdGhlc2UgY2hlY2tzIHRvIGV2ZXJ5IGZvcm1cclxuICAgIHJldHVybiBzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKCdlbWFpbENvbmZpcm1lZCcpID09IENyeXB0b0pTLlNIQTMoJ3RydWUnKS50b1N0cmluZygpO1xyXG4gIH1cclxufSJdfQ==
