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
var api_service_1 = require('../../services/api.service');
var auth_service_1 = require('../../services/auth.service');
var index_1 = require('../../errors/index');
var angular2_notifications_1 = require('angular2-notifications');
require('rxjs/Rx');
var MyContestsComponent = (function () {
    function MyContestsComponent(contestsService, errorService, apiService, notificationsService, authService, ngzone, cdRef, router) {
        this.contestsService = contestsService;
        this.errorService = errorService;
        this.apiService = apiService;
        this.notificationsService = notificationsService;
        this.authService = authService;
        this.ngzone = ngzone;
        this.cdRef = cdRef;
        this.router = router;
        this.contests = [];
        this.isLoading = false;
        this.status1 = "Aktyvus";
        this.status2 = "Pratęstas";
        this.firstTabActive = true;
        this.secondTabActive = false;
        this.allActiveContests = [];
        this.allFinishedContests = [];
        this.options = {
            position: ["top", "right"]
        };
    }
    MyContestsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.isLoading = true;
        this.id = sessionStorage.getItem('userId');
        this.contestsService.getIndividualContests(this.id)
            .subscribe(function (contests) {
            _this.contests = contests;
            _this.isLoading = false;
            console.log(_this.contests);
        }, function (error) {
            _this.isLoading = false;
            _this.notificationsService.error(error.title, error.error.message, { timeOut: 3000, showProgressBar: false });
        });
    };
    MyContestsComponent.prototype.goToContestDetails = function (idName) {
        this.router.navigate(['/konkursai', idName]);
    };
    MyContestsComponent.prototype.belongsToUser = function (userId) {
        return sessionStorage.getItem('userId') == userId;
    };
    MyContestsComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'my-contests',
            templateUrl: 'my-contests.component.html',
            styleUrls: ['my-contests.component.css']
        }), 
        __metadata('design:paramtypes', [contests_service_1.ContestsService, index_1.ErrorService, api_service_1.ApiService, angular2_notifications_1.NotificationsService, auth_service_1.AuthService, core_1.NgZone, core_1.ChangeDetectorRef, router_1.Router])
    ], MyContestsComponent);
    return MyContestsComponent;
}());
exports.MyContestsComponent = MyContestsComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvY29udGVzdHMvbXktY29udGVzdHMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBb0YsZUFBZSxDQUFDLENBQUE7QUFDcEcsdUJBQXVCLGlCQUFpQixDQUFDLENBQUE7QUFFekMsaUNBQWdDLGlDQUFpQyxDQUFDLENBQUE7QUFDbEUsNEJBQTJCLDRCQUE0QixDQUFDLENBQUE7QUFDeEQsNkJBQTRCLDZCQUE2QixDQUFDLENBQUE7QUFDMUQsc0JBQTZCLG9CQUFvQixDQUFDLENBQUE7QUFDbEQsdUNBQXFDLHdCQUF3QixDQUFDLENBQUE7QUFHOUQsUUFBTyxTQUFTLENBQUMsQ0FBQTtBQVNqQjtJQWVFLDZCQUFvQixlQUFnQyxFQUNoQyxZQUEwQixFQUMxQixVQUFzQixFQUN0QixvQkFBMEMsRUFDMUMsV0FBd0IsRUFDeEIsTUFBYyxFQUNkLEtBQXdCLEVBQ3hCLE1BQWM7UUFQZCxvQkFBZSxHQUFmLGVBQWUsQ0FBaUI7UUFDaEMsaUJBQVksR0FBWixZQUFZLENBQWM7UUFDMUIsZUFBVSxHQUFWLFVBQVUsQ0FBWTtRQUN0Qix5QkFBb0IsR0FBcEIsb0JBQW9CLENBQXNCO1FBQzFDLGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBQ3hCLFdBQU0sR0FBTixNQUFNLENBQVE7UUFDZCxVQUFLLEdBQUwsS0FBSyxDQUFtQjtRQUN4QixXQUFNLEdBQU4sTUFBTSxDQUFRO1FBckJsQyxhQUFRLEdBQVEsRUFBRSxDQUFDO1FBR25CLGNBQVMsR0FBRyxLQUFLLENBQUM7UUFDbEIsWUFBTyxHQUFHLFNBQVMsQ0FBQztRQUNwQixZQUFPLEdBQUcsV0FBVyxDQUFDO1FBQ3RCLG1CQUFjLEdBQUcsSUFBSSxDQUFDO1FBQ3RCLG9CQUFlLEdBQUcsS0FBSyxDQUFDO1FBQ3hCLHNCQUFpQixHQUFHLEVBQUUsQ0FBQztRQUN2Qix3QkFBbUIsR0FBRyxFQUFFLENBQUM7UUFDbEIsWUFBTyxHQUFHO1lBQ2IsUUFBUSxFQUFFLENBQUMsS0FBSyxFQUFDLE9BQU8sQ0FBQztTQUMxQixDQUFDO0lBU2tDLENBQUM7SUFFdkMsc0NBQVEsR0FBUjtRQUFBLGlCQVlDO1FBWEMsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUM7UUFDdEIsSUFBSSxDQUFDLEVBQUUsR0FBRyxjQUFjLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQzNDLElBQUksQ0FBQyxlQUFlLENBQUMscUJBQXFCLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQzthQUNsRCxTQUFTLENBQUMsVUFBQSxRQUFRO1lBQ2pCLEtBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO1lBQ3pCLEtBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDO1lBQ3ZCLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQzdCLENBQUMsRUFBRSxVQUFBLEtBQUs7WUFDTixLQUFJLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQztZQUN2QixLQUFJLENBQUMsb0JBQW9CLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxLQUFLLEVBQUUsS0FBSyxDQUFDLEtBQUssQ0FBQyxPQUFPLEVBQUUsRUFBQyxPQUFPLEVBQUUsSUFBSSxFQUFFLGVBQWUsRUFBRSxLQUFLLEVBQUMsQ0FBQyxDQUFBO1FBQzVHLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVELGdEQUFrQixHQUFsQixVQUFtQixNQUFjO1FBQy9CLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsWUFBWSxFQUFFLE1BQU0sQ0FBQyxDQUFDLENBQUM7SUFDL0MsQ0FBQztJQUVELDJDQUFhLEdBQWIsVUFBYyxNQUFjO1FBQzFCLE1BQU0sQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxJQUFJLE1BQU0sQ0FBQztJQUNwRCxDQUFDO0lBbERIO1FBQUMsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixRQUFRLEVBQUUsYUFBYTtZQUN2QixXQUFXLEVBQUUsNEJBQTRCO1lBQ3pDLFNBQVMsRUFBRSxDQUFDLDJCQUEyQixDQUFDO1NBQ3pDLENBQUM7OzJCQUFBO0lBK0NGLDBCQUFDO0FBQUQsQ0E5Q0EsQUE4Q0MsSUFBQTtBQTlDWSwyQkFBbUIsc0JBOEMvQixDQUFBIiwiZmlsZSI6ImNvbXBvbmVudHMvY29udGVzdHMvbXktY29udGVzdHMuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIFZpZXdDaGlsZCwgRWxlbWVudFJlZiwgTmdab25lLCBDaGFuZ2VEZXRlY3RvclJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5pbXBvcnQgeyBDb250ZXN0IH0gZnJvbSAnLi4vLi4vbW9kZWxzL2NvbnRlc3QnO1xyXG5pbXBvcnQgeyBDb250ZXN0c1NlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9jb250ZXN0cy5zZXJ2aWNlJztcclxuaW1wb3J0IHsgQXBpU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL2FwaS5zZXJ2aWNlJztcclxuaW1wb3J0IHsgQXV0aFNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9hdXRoLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBFcnJvclNlcnZpY2UgfSBmcm9tICcuLi8uLi9lcnJvcnMvaW5kZXgnO1xyXG5pbXBvcnQgeyBOb3RpZmljYXRpb25zU2VydmljZSB9IGZyb20gJ2FuZ3VsYXIyLW5vdGlmaWNhdGlvbnMnO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcy9PYnNlcnZhYmxlJztcclxuaW1wb3J0ICogYXMgQ3J5cHRvSlMgZnJvbSAnY3J5cHRvLWpzJztcclxuaW1wb3J0ICdyeGpzL1J4JztcclxuXHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBtb2R1bGVJZDogbW9kdWxlLmlkLFxyXG4gIHNlbGVjdG9yOiAnbXktY29udGVzdHMnLFxyXG4gIHRlbXBsYXRlVXJsOiAnbXktY29udGVzdHMuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWydteS1jb250ZXN0cy5jb21wb25lbnQuY3NzJ11cclxufSlcclxuZXhwb3J0IGNsYXNzIE15Q29udGVzdHNDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gIGNvbnRlc3RzOiBhbnkgPSBbXTtcclxuICBjb250ZXN0OiBhbnk7XHJcbiAgaWQ6IHN0cmluZztcclxuICBpc0xvYWRpbmcgPSBmYWxzZTtcclxuICBzdGF0dXMxID0gXCJBa3R5dnVzXCI7XHJcbiAgc3RhdHVzMiA9IFwiUHJhdMSZc3Rhc1wiO1xyXG4gIGZpcnN0VGFiQWN0aXZlID0gdHJ1ZTtcclxuICBzZWNvbmRUYWJBY3RpdmUgPSBmYWxzZTtcclxuICBhbGxBY3RpdmVDb250ZXN0cyA9IFtdO1xyXG4gIGFsbEZpbmlzaGVkQ29udGVzdHMgPSBbXTtcclxuICBwdWJsaWMgb3B0aW9ucyA9IHtcclxuICAgICAgcG9zaXRpb246IFtcInRvcFwiLFwicmlnaHRcIl1cclxuICAgIH07XHJcbiAgXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBjb250ZXN0c1NlcnZpY2U6IENvbnRlc3RzU2VydmljZSwgXHJcbiAgICAgICAgICAgICAgcHJpdmF0ZSBlcnJvclNlcnZpY2U6IEVycm9yU2VydmljZSxcclxuICAgICAgICAgICAgICBwcml2YXRlIGFwaVNlcnZpY2U6IEFwaVNlcnZpY2UsXHJcbiAgICAgICAgICAgICAgcHJpdmF0ZSBub3RpZmljYXRpb25zU2VydmljZTogTm90aWZpY2F0aW9uc1NlcnZpY2UsXHJcbiAgICAgICAgICAgICAgcHJpdmF0ZSBhdXRoU2VydmljZTogQXV0aFNlcnZpY2UsXHJcbiAgICAgICAgICAgICAgcHJpdmF0ZSBuZ3pvbmU6IE5nWm9uZSxcclxuICAgICAgICAgICAgICBwcml2YXRlIGNkUmVmOiBDaGFuZ2VEZXRlY3RvclJlZixcclxuICAgICAgICAgICAgICBwcml2YXRlIHJvdXRlcjogUm91dGVyKSB7IH1cclxuXHJcbiAgbmdPbkluaXQoKSB7IFxyXG4gICAgdGhpcy5pc0xvYWRpbmcgPSB0cnVlO1xyXG4gICAgdGhpcy5pZCA9IHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oJ3VzZXJJZCcpO1xyXG4gICAgdGhpcy5jb250ZXN0c1NlcnZpY2UuZ2V0SW5kaXZpZHVhbENvbnRlc3RzKHRoaXMuaWQpXHJcbiAgICAuc3Vic2NyaWJlKGNvbnRlc3RzID0+IHtcclxuICAgICAgdGhpcy5jb250ZXN0cyA9IGNvbnRlc3RzO1xyXG4gICAgICB0aGlzLmlzTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICBjb25zb2xlLmxvZyh0aGlzLmNvbnRlc3RzKTtcclxuICAgIH0sIGVycm9yID0+IHtcclxuICAgICAgdGhpcy5pc0xvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgdGhpcy5ub3RpZmljYXRpb25zU2VydmljZS5lcnJvcihlcnJvci50aXRsZSwgZXJyb3IuZXJyb3IubWVzc2FnZSwge3RpbWVPdXQ6IDMwMDAsIHNob3dQcm9ncmVzc0JhcjogZmFsc2V9KVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBnb1RvQ29udGVzdERldGFpbHMoaWROYW1lOiBzdHJpbmcpIHtcclxuICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFsnL2tvbmt1cnNhaScsIGlkTmFtZV0pO1xyXG4gIH1cclxuXHJcbiAgYmVsb25nc1RvVXNlcih1c2VySWQ6IHN0cmluZykge1xyXG4gICAgcmV0dXJuIHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oJ3VzZXJJZCcpID09IHVzZXJJZDtcclxuICB9XHJcblxyXG59Il19
