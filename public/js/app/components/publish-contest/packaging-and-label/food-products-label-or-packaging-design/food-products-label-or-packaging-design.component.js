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
var contests_service_1 = require('../../../../services/contests.service');
var auth_service_1 = require('../../../../services/auth.service');
var angular2_notifications_1 = require('angular2-notifications');
var CryptoJS = require('crypto-js');
var FoodProductsLabelOrPackagingDesignComponent = (function () {
    function FoodProductsLabelOrPackagingDesignComponent(router, contestsService, notificationsService, authService) {
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
    FoodProductsLabelOrPackagingDesignComponent.prototype.ngOnInit = function () {
        window.scrollTo(0, 0);
        this.contest.category = "Maisto produktų pakuotės";
    };
    FoodProductsLabelOrPackagingDesignComponent.prototype.backToList = function () {
        this.router.navigate(['/paskelbti-konkursa']);
    };
    FoodProductsLabelOrPackagingDesignComponent.prototype.logErrors = function (errors) {
        console.log(errors);
    };
    FoodProductsLabelOrPackagingDesignComponent.prototype.addContest = function (value) {
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
    FoodProductsLabelOrPackagingDesignComponent.prototype.isClient = function () {
        return this.authService.isClient();
    };
    FoodProductsLabelOrPackagingDesignComponent.prototype.isDesigner = function () {
        return this.authService.isDesigner();
    };
    FoodProductsLabelOrPackagingDesignComponent.prototype.isEmailConfirmed = function () {
        return sessionStorage.getItem('emailConfirmed') == CryptoJS.SHA3('true').toString();
    };
    FoodProductsLabelOrPackagingDesignComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            templateUrl: 'food-products-label-or-packaging-design.component.html',
            styleUrls: ['food-products-label-or-packaging-design.component.css']
        }), 
        __metadata('design:paramtypes', [router_1.Router, contests_service_1.ContestsService, angular2_notifications_1.NotificationsService, auth_service_1.AuthService])
    ], FoodProductsLabelOrPackagingDesignComponent);
    return FoodProductsLabelOrPackagingDesignComponent;
}());
exports.FoodProductsLabelOrPackagingDesignComponent = FoodProductsLabelOrPackagingDesignComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvcHVibGlzaC1jb250ZXN0L3BhY2thZ2luZy1hbmQtbGFiZWwvZm9vZC1wcm9kdWN0cy1sYWJlbC1vci1wYWNrYWdpbmctZGVzaWduL2Zvb2QtcHJvZHVjdHMtbGFiZWwtb3ItcGFja2FnaW5nLWRlc2lnbi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUFrQyxlQUFlLENBQUMsQ0FBQTtBQUNsRCx1QkFBdUIsaUJBQWlCLENBQUMsQ0FBQTtBQUV6QyxpQ0FBZ0MsdUNBQXVDLENBQUMsQ0FBQTtBQUN4RSw2QkFBNEIsbUNBQW1DLENBQUMsQ0FBQTtBQUdoRSx1Q0FBcUMsd0JBQXdCLENBQUMsQ0FBQTtBQUM5RCxJQUFZLFFBQVEsV0FBTSxXQUFXLENBQUMsQ0FBQTtBQU90QztJQU9FLHFEQUFvQixNQUFjLEVBQ2QsZUFBZ0MsRUFDaEMsb0JBQTBDLEVBQzFDLFdBQXdCO1FBSHhCLFdBQU0sR0FBTixNQUFNLENBQVE7UUFDZCxvQkFBZSxHQUFmLGVBQWUsQ0FBaUI7UUFDaEMseUJBQW9CLEdBQXBCLG9CQUFvQixDQUFzQjtRQUMxQyxnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQVQ1QyxZQUFPLEdBQVcsRUFBRSxDQUFDO1FBQ3JCLGNBQVMsR0FBRyxLQUFLLENBQUM7UUFDWCxZQUFPLEdBQUc7WUFDYixRQUFRLEVBQUUsQ0FBQyxLQUFLLEVBQUMsT0FBTyxDQUFDO1NBQzFCLENBQUM7SUFLNEMsQ0FBQztJQUVqRCw4REFBUSxHQUFSO1FBQ0UsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDLENBQUM7UUFDckIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLEdBQUcsMEJBQTBCLENBQUM7SUFDckQsQ0FBQztJQUVELGdFQUFVLEdBQVY7UUFDRSxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLHFCQUFxQixDQUFDLENBQUMsQ0FBQztJQUNoRCxDQUFDO0lBRUQsK0RBQVMsR0FBVCxVQUFVLE1BQU07UUFDZCxPQUFPLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ3RCLENBQUM7SUFFRCxnRUFBVSxHQUFWLFVBQVcsS0FBSztRQUFoQixpQkFjQztRQWJDLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDO1FBQ3RCLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDbkIsSUFBSSxDQUFDLGVBQWUsQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDO2FBQ25DLFNBQVMsQ0FBQyxVQUFBLE9BQU87WUFDaEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxlQUFlLENBQUMsQ0FBQztZQUM3QixPQUFPLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1lBQ3JCLEtBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDO1lBQ3ZCLEtBQUksQ0FBQyxvQkFBb0IsQ0FBQyxPQUFPLENBQUMsV0FBVyxFQUFFLHNCQUFzQixFQUFFLEVBQUMsT0FBTyxFQUFFLElBQUksRUFBRSxlQUFlLEVBQUUsS0FBSyxFQUFDLENBQUMsQ0FBQTtZQUMvRyxLQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDOUIsQ0FBQyxFQUFFLFVBQUEsS0FBSztZQUNOLEtBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDO1lBQ3ZCLEtBQUksQ0FBQyxvQkFBb0IsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLEtBQUssRUFBRSxLQUFLLENBQUMsS0FBSyxDQUFDLE9BQU8sRUFBRSxFQUFDLE9BQU8sRUFBRSxJQUFJLEVBQUUsZUFBZSxFQUFFLEtBQUssRUFBQyxDQUFDLENBQUE7UUFDNUcsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBRUQsOERBQVEsR0FBUjtRQUNFLE1BQU0sQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQ3JDLENBQUM7SUFFRCxnRUFBVSxHQUFWO1FBQ0UsTUFBTSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsVUFBVSxFQUFFLENBQUM7SUFDdkMsQ0FBQztJQUVELHNFQUFnQixHQUFoQjtRQUNFLE1BQU0sQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDLGdCQUFnQixDQUFDLElBQUksUUFBUSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUN0RixDQUFDO0lBeERIO1FBQUMsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixXQUFXLEVBQUUsd0RBQXdEO1lBQ3JFLFNBQVMsRUFBRSxDQUFDLHVEQUF1RCxDQUFDO1NBQ3JFLENBQUM7O21EQUFBO0lBcURGLGtEQUFDO0FBQUQsQ0FwREEsQUFvREMsSUFBQTtBQXBEWSxtREFBMkMsOENBb0R2RCxDQUFBIiwiZmlsZSI6ImNvbXBvbmVudHMvcHVibGlzaC1jb250ZXN0L3BhY2thZ2luZy1hbmQtbGFiZWwvZm9vZC1wcm9kdWN0cy1sYWJlbC1vci1wYWNrYWdpbmctZGVzaWduL2Zvb2QtcHJvZHVjdHMtbGFiZWwtb3ItcGFja2FnaW5nLWRlc2lnbi5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5pbXBvcnQgeyBDb250ZXN0IH0gZnJvbSAnLi4vLi4vLi4vLi4vbW9kZWxzL2NvbnRlc3QnO1xyXG5pbXBvcnQgeyBDb250ZXN0c1NlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi8uLi9zZXJ2aWNlcy9jb250ZXN0cy5zZXJ2aWNlJztcclxuaW1wb3J0IHsgQXV0aFNlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi8uLi9zZXJ2aWNlcy9hdXRoLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBFcnJvclNlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi8uLi9lcnJvcnMvaW5kZXgnO1xyXG5pbXBvcnQgeyBGb3JtR3JvdXAsIEZvcm1Db250cm9sLCBGb3JtQnVpbGRlciwgVmFsaWRhdG9ycyB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuaW1wb3J0IHsgTm90aWZpY2F0aW9uc1NlcnZpY2UgfSBmcm9tICdhbmd1bGFyMi1ub3RpZmljYXRpb25zJztcclxuaW1wb3J0ICogYXMgQ3J5cHRvSlMgZnJvbSAnY3J5cHRvLWpzJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIG1vZHVsZUlkOiBtb2R1bGUuaWQsXHJcbiAgdGVtcGxhdGVVcmw6ICdmb29kLXByb2R1Y3RzLWxhYmVsLW9yLXBhY2thZ2luZy1kZXNpZ24uY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWydmb29kLXByb2R1Y3RzLWxhYmVsLW9yLXBhY2thZ2luZy1kZXNpZ24uY29tcG9uZW50LmNzcyddXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBGb29kUHJvZHVjdHNMYWJlbE9yUGFja2FnaW5nRGVzaWduQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuICBjb250ZXN0OiBPYmplY3QgPSB7fTtcclxuICBpc0xvYWRpbmcgPSBmYWxzZTtcclxuICBwdWJsaWMgb3B0aW9ucyA9IHtcclxuICAgICAgcG9zaXRpb246IFtcInRvcFwiLFwicmlnaHRcIl1cclxuICAgIH07XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsXHJcbiAgICAgICAgICAgICAgcHJpdmF0ZSBjb250ZXN0c1NlcnZpY2U6IENvbnRlc3RzU2VydmljZSxcclxuICAgICAgICAgICAgICBwcml2YXRlIG5vdGlmaWNhdGlvbnNTZXJ2aWNlOiBOb3RpZmljYXRpb25zU2VydmljZSxcclxuICAgICAgICAgICAgICBwcml2YXRlIGF1dGhTZXJ2aWNlOiBBdXRoU2VydmljZSkgeyB9XHJcblxyXG4gIG5nT25Jbml0KCkgeyBcclxuICAgIHdpbmRvdy5zY3JvbGxUbygwLDApO1xyXG4gICAgdGhpcy5jb250ZXN0LmNhdGVnb3J5ID0gXCJNYWlzdG8gcHJvZHVrdMWzIHBha3VvdMSXc1wiO1xyXG4gIH1cclxuXHJcbiAgYmFja1RvTGlzdCgpIHtcclxuICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFsnL3Bhc2tlbGJ0aS1rb25rdXJzYSddKTtcclxuICB9XHJcblxyXG4gIGxvZ0Vycm9ycyhlcnJvcnMpIHtcclxuICAgIGNvbnNvbGUubG9nKGVycm9ycyk7XHJcbiAgfVxyXG5cclxuICBhZGRDb250ZXN0KHZhbHVlKSB7XHJcbiAgICB0aGlzLmlzTG9hZGluZyA9IHRydWU7XHJcbiAgICBjb25zb2xlLmxvZyh2YWx1ZSk7XHJcbiAgICB0aGlzLmNvbnRlc3RzU2VydmljZS5hZGRDb250ZXN0KHZhbHVlKVxyXG4gICAgICAuc3Vic2NyaWJlKGNvbnRlc3QgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdjb250ZXN0IGFkZGVkJyk7XHJcbiAgICAgICAgY29uc29sZS5sb2coY29udGVzdCk7XHJcbiAgICAgICAgdGhpcy5pc0xvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLm5vdGlmaWNhdGlvbnNTZXJ2aWNlLnN1Y2Nlc3MoJ1Bhc2tlbGJ0YScsICdLb25rdXJzYXMgcGFza2VsYnRhcycsIHt0aW1lT3V0OiAzMDAwLCBzaG93UHJvZ3Jlc3NCYXI6IGZhbHNlfSlcclxuICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJy8nXSk7XHJcbiAgICAgIH0sIGVycm9yID0+IHtcclxuICAgICAgICB0aGlzLmlzTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMubm90aWZpY2F0aW9uc1NlcnZpY2UuZXJyb3IoZXJyb3IudGl0bGUsIGVycm9yLmVycm9yLm1lc3NhZ2UsIHt0aW1lT3V0OiAzMDAwLCBzaG93UHJvZ3Jlc3NCYXI6IGZhbHNlfSlcclxuICAgICAgfSk7XHJcbiAgfVxyXG5cclxuICBpc0NsaWVudCgpIHtcclxuICAgIHJldHVybiB0aGlzLmF1dGhTZXJ2aWNlLmlzQ2xpZW50KCk7XHJcbiAgfVxyXG5cclxuICBpc0Rlc2lnbmVyKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuYXV0aFNlcnZpY2UuaXNEZXNpZ25lcigpO1xyXG4gIH1cclxuXHJcbiAgaXNFbWFpbENvbmZpcm1lZCgpIHsgLy8gVE9ETyBhZGQgdGhlc2UgY2hlY2tzIHRvIGV2ZXJ5IGZvcm1cclxuICAgIHJldHVybiBzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKCdlbWFpbENvbmZpcm1lZCcpID09IENyeXB0b0pTLlNIQTMoJ3RydWUnKS50b1N0cmluZygpO1xyXG4gIH1cclxufSJdfQ==
