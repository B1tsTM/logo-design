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
var router_1 = require('@angular/router');
var contests_service_1 = require('../../services/contests.service');
var designers_service_1 = require('../../services/designers.service');
var index_1 = require('../../errors/index');
var auth_service_1 = require('../../services/auth.service');
var api_service_1 = require('../../services/api.service');
require('moment/min/locales');
var angular2_notifications_1 = require('angular2-notifications');
var DesignerDetailsComponent = (function () {
    function DesignerDetailsComponent(route, router, contestsService, designersService, errorService, authService, apiService, notificationsService) {
        this.route = route;
        this.router = router;
        this.contestsService = contestsService;
        this.designersService = designersService;
        this.errorService = errorService;
        this.authService = authService;
        this.apiService = apiService;
        this.notificationsService = notificationsService;
        this.isLoading = false;
        this.options = {
            position: ["top", "right"]
        };
    }
    DesignerDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.isLoading = true;
        this.route.params.subscribe(function (params) {
            _this.designerId = params['id'];
        });
        this.designersService.getIndividualDesigner(this.designerId)
            .subscribe(function (designer) {
            _this.designer = designer[0];
            console.log(_this.designer);
            _this.isLoading = false;
        }, function (error) {
            //this.errorService.handleError(error);
            _this.isLoading = false;
            _this.notificationsService.error(error.title, error.error.message, { timeOut: 3000, showProgressBar: false });
        });
    };
    DesignerDetailsComponent.prototype.ngAfterViewInit = function () {
        jQuery(document).ready(function () {
            jQuery(".fancybox").fancybox({});
        });
    };
    // TODO fix getting gallery Urls (wrong name published to mongo?)
    DesignerDetailsComponent.prototype.sendPrivateMessage = function (nickname) {
        this.router.navigate(['/profilis', 'pastas', 'rasyti-laiska', nickname]);
    };
    DesignerDetailsComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'designer-details',
            templateUrl: 'designer-details.component.html',
            styleUrls: ['designer-details.component.css']
        }), 
        __metadata('design:paramtypes', [router_1.ActivatedRoute, router_1.Router, contests_service_1.ContestsService, designers_service_1.DesignersService, index_1.ErrorService, auth_service_1.AuthService, api_service_1.ApiService, angular2_notifications_1.NotificationsService])
    ], DesignerDetailsComponent);
    return DesignerDetailsComponent;
}());
exports.DesignerDetailsComponent = DesignerDetailsComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvZGVzaWduZXJzL2Rlc2lnbmVyLWRldGFpbHMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBa0MsZUFBZSxDQUFDLENBQUE7QUFDbEQsdUJBQStDLGlCQUFpQixDQUFDLENBQUE7QUFFakUsaUNBQWdDLGlDQUFpQyxDQUFDLENBQUE7QUFDbEUsa0NBQWlDLGtDQUFrQyxDQUFDLENBQUE7QUFDcEUsc0JBQTZCLG9CQUFvQixDQUFDLENBQUE7QUFDbEQsNkJBQTRCLDZCQUE2QixDQUFDLENBQUE7QUFDMUQsNEJBQTJCLDRCQUE0QixDQUFDLENBQUE7QUFHeEQsUUFBTyxvQkFBb0IsQ0FBQyxDQUFBO0FBQzVCLHVDQUFxQyx3QkFBd0IsQ0FBQyxDQUFBO0FBVTlEO0lBT0Usa0NBQW9CLEtBQXFCLEVBQ3JCLE1BQWMsRUFDZCxlQUFnQyxFQUNoQyxnQkFBa0MsRUFDbEMsWUFBMEIsRUFDMUIsV0FBd0IsRUFDeEIsVUFBc0IsRUFDdEIsb0JBQTBDO1FBUDFDLFVBQUssR0FBTCxLQUFLLENBQWdCO1FBQ3JCLFdBQU0sR0FBTixNQUFNLENBQVE7UUFDZCxvQkFBZSxHQUFmLGVBQWUsQ0FBaUI7UUFDaEMscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtRQUNsQyxpQkFBWSxHQUFaLFlBQVksQ0FBYztRQUMxQixnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUN4QixlQUFVLEdBQVYsVUFBVSxDQUFZO1FBQ3RCLHlCQUFvQixHQUFwQixvQkFBb0IsQ0FBc0I7UUFiOUQsY0FBUyxHQUFHLEtBQUssQ0FBQztRQUdYLFlBQU8sR0FBRztZQUNiLFFBQVEsRUFBRSxDQUFDLEtBQUssRUFBQyxPQUFPLENBQUM7U0FDMUIsQ0FBQztJQVE4RCxDQUFDO0lBRW5FLDJDQUFRLEdBQVI7UUFBQSxpQkFnQkM7UUFmQyxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQztRQUN0QixJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsVUFBQyxNQUFjO1lBQ3pDLEtBQUksQ0FBQyxVQUFVLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ2pDLENBQUMsQ0FBQyxDQUFDO1FBQ0gsSUFBSSxDQUFDLGdCQUFnQixDQUFDLHFCQUFxQixDQUFDLElBQUksQ0FBQyxVQUFVLENBQUM7YUFDekQsU0FBUyxDQUFDLFVBQUEsUUFBUTtZQUNqQixLQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUM1QixPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUMzQixLQUFJLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQztRQUN6QixDQUFDLEVBQ0QsVUFBQSxLQUFLO1lBQ0QsdUNBQXVDO1lBQ3ZDLEtBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDO1lBQ3ZCLEtBQUksQ0FBQyxvQkFBb0IsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLEtBQUssRUFBRSxLQUFLLENBQUMsS0FBSyxDQUFDLE9BQU8sRUFBRSxFQUFDLE9BQU8sRUFBRSxJQUFJLEVBQUUsZUFBZSxFQUFFLEtBQUssRUFBQyxDQUFDLENBQUE7UUFDOUcsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBRUQsa0RBQWUsR0FBZjtRQUNJLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxLQUFLLENBQUM7WUFDckIsTUFBTSxDQUFDLFdBQVcsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxFQUU1QixDQUFDLENBQUM7UUFDUCxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFDRCxpRUFBaUU7SUFFakUscURBQWtCLEdBQWxCLFVBQW1CLFFBQVE7UUFDckIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxXQUFXLEVBQUUsUUFBUSxFQUFFLGVBQWUsRUFBRSxRQUFRLENBQUMsQ0FBQyxDQUFDO0lBQzdFLENBQUM7SUFuREw7UUFBQyxnQkFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFFBQVEsRUFBRSxrQkFBa0I7WUFDNUIsV0FBVyxFQUFFLGlDQUFpQztZQUM5QyxTQUFTLEVBQUUsQ0FBQyxnQ0FBZ0MsQ0FBQztTQUM5QyxDQUFDOztnQ0FBQTtJQWlERiwrQkFBQztBQUFELENBaERBLEFBZ0RDLElBQUE7QUFoRFksZ0NBQXdCLDJCQWdEcEMsQ0FBQSIsImZpbGUiOiJjb21wb25lbnRzL2Rlc2lnbmVycy9kZXNpZ25lci1kZXRhaWxzLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFJvdXRlciwgQWN0aXZhdGVkUm91dGUsIFBhcmFtcyB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcbmltcG9ydCB7IENvbnRlc3QgfSBmcm9tICcuLi8uLi9tb2RlbHMvY29udGVzdCc7XHJcbmltcG9ydCB7IENvbnRlc3RzU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL2NvbnRlc3RzLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBEZXNpZ25lcnNTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvZGVzaWduZXJzLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBFcnJvclNlcnZpY2UgfSBmcm9tICcuLi8uLi9lcnJvcnMvaW5kZXgnO1xyXG5pbXBvcnQgeyBBdXRoU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL2F1dGguc2VydmljZSc7XHJcbmltcG9ydCB7IEFwaVNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9hcGkuc2VydmljZSc7XHJcbmltcG9ydCB7IEZvcm1Hcm91cCwgRm9ybUNvbnRyb2wsIEZvcm1CdWlsZGVyLCBWYWxpZGF0b3JzIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5pbXBvcnQgKiBhcyBtb21lbnQgZnJvbSAnbW9tZW50JztcclxuaW1wb3J0ICdtb21lbnQvbWluL2xvY2FsZXMnO1xyXG5pbXBvcnQgeyBOb3RpZmljYXRpb25zU2VydmljZSB9IGZyb20gJ2FuZ3VsYXIyLW5vdGlmaWNhdGlvbnMnO1xyXG5cclxuZGVjbGFyZSB2YXIgalF1ZXJ5OiBhbnk7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBtb2R1bGVJZDogbW9kdWxlLmlkLFxyXG4gIHNlbGVjdG9yOiAnZGVzaWduZXItZGV0YWlscycsXHJcbiAgdGVtcGxhdGVVcmw6ICdkZXNpZ25lci1kZXRhaWxzLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnZGVzaWduZXItZGV0YWlscy5jb21wb25lbnQuY3NzJ11cclxufSlcclxuZXhwb3J0IGNsYXNzIERlc2lnbmVyRGV0YWlsc0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgaXNMb2FkaW5nID0gZmFsc2U7XHJcbiAgZGVzaWduZXJJZDogc3RyaW5nO1xyXG4gIGRlc2lnbmVyOiBhbnk7XHJcbiAgcHVibGljIG9wdGlvbnMgPSB7XHJcbiAgICAgIHBvc2l0aW9uOiBbXCJ0b3BcIixcInJpZ2h0XCJdXHJcbiAgICB9O1xyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcm91dGU6IEFjdGl2YXRlZFJvdXRlLFxyXG4gICAgICAgICAgICAgIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsXHJcbiAgICAgICAgICAgICAgcHJpdmF0ZSBjb250ZXN0c1NlcnZpY2U6IENvbnRlc3RzU2VydmljZSxcclxuICAgICAgICAgICAgICBwcml2YXRlIGRlc2lnbmVyc1NlcnZpY2U6IERlc2lnbmVyc1NlcnZpY2UsXHJcbiAgICAgICAgICAgICAgcHJpdmF0ZSBlcnJvclNlcnZpY2U6IEVycm9yU2VydmljZSxcclxuICAgICAgICAgICAgICBwcml2YXRlIGF1dGhTZXJ2aWNlOiBBdXRoU2VydmljZSxcclxuICAgICAgICAgICAgICBwcml2YXRlIGFwaVNlcnZpY2U6IEFwaVNlcnZpY2UsXHJcbiAgICAgICAgICAgICAgcHJpdmF0ZSBub3RpZmljYXRpb25zU2VydmljZTogTm90aWZpY2F0aW9uc1NlcnZpY2UpIHsgfVxyXG5cclxuICBuZ09uSW5pdCgpIHsgXHJcbiAgICB0aGlzLmlzTG9hZGluZyA9IHRydWU7XHJcbiAgICB0aGlzLnJvdXRlLnBhcmFtcy5zdWJzY3JpYmUoKHBhcmFtczogUGFyYW1zKSA9PiB7XHJcbiAgICAgIHRoaXMuZGVzaWduZXJJZCA9IHBhcmFtc1snaWQnXTtcclxuICAgIH0pO1xyXG4gICAgdGhpcy5kZXNpZ25lcnNTZXJ2aWNlLmdldEluZGl2aWR1YWxEZXNpZ25lcih0aGlzLmRlc2lnbmVySWQpXHJcbiAgICAgIC5zdWJzY3JpYmUoZGVzaWduZXIgPT4ge1xyXG4gICAgICAgIHRoaXMuZGVzaWduZXIgPSBkZXNpZ25lclswXTtcclxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLmRlc2lnbmVyKTtcclxuICAgICAgICB0aGlzLmlzTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICB9LCBcclxuICAgICAgZXJyb3IgPT4ge1xyXG4gICAgICAgICAgLy90aGlzLmVycm9yU2VydmljZS5oYW5kbGVFcnJvcihlcnJvcik7XHJcbiAgICAgICAgICB0aGlzLmlzTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgdGhpcy5ub3RpZmljYXRpb25zU2VydmljZS5lcnJvcihlcnJvci50aXRsZSwgZXJyb3IuZXJyb3IubWVzc2FnZSwge3RpbWVPdXQ6IDMwMDAsIHNob3dQcm9ncmVzc0JhcjogZmFsc2V9KVxyXG4gICAgICB9KTtcclxuICB9XHJcblxyXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcclxuICAgICAgalF1ZXJ5KGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigpIHtcclxuICAgICAgICBqUXVlcnkoXCIuZmFuY3lib3hcIikuZmFuY3lib3goe1xyXG4gICAgICAgIFxyXG4gICAgICAgIH0pO1xyXG4gICAgfSk7XHJcbiAgfVxyXG4gIC8vIFRPRE8gZml4IGdldHRpbmcgZ2FsbGVyeSBVcmxzICh3cm9uZyBuYW1lIHB1Ymxpc2hlZCB0byBtb25nbz8pXHJcblxyXG4gIHNlbmRQcml2YXRlTWVzc2FnZShuaWNrbmFtZSkge1xyXG4gICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFsnL3Byb2ZpbGlzJywgJ3Bhc3RhcycsICdyYXN5dGktbGFpc2thJywgbmlja25hbWVdKTtcclxuICAgIH1cclxuXHJcblxyXG59Il19
