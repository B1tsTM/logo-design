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
var contests_service_1 = require('../../services/contests.service');
var auth_service_1 = require('../../services/auth.service');
var index_1 = require('../../errors/index');
var angular2_notifications_1 = require('angular2-notifications');
var MyContestsComponent = (function () {
    function MyContestsComponent(contestsService, errorService, authService, notificationsService) {
        this.contestsService = contestsService;
        this.errorService = errorService;
        this.authService = authService;
        this.notificationsService = notificationsService;
        this.contests = [];
        this.contest = null;
        this.id = '';
        this.isLoading = false;
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
            _this.contestsService.contests = contests;
            _this.isLoading = false;
            console.log(_this.contests);
        }, function (error) {
            _this.isLoading = false;
            _this.notificationsService.error(error.title, error.error.message, { timeOut: 3000, showProgressBar: false });
        });
    };
    MyContestsComponent.prototype.editContest = function (contest) {
        this.contestsService.editContest(contest);
    };
    MyContestsComponent.prototype.deleteContest = function (contest) {
        var _this = this;
        this.isLoading = true;
        this.contestsService.deleteContest(contest)
            .subscribe(function (data) {
            console.log(data);
            _this.isLoading = false;
        }, function (error) {
            //this.errorService.handleError(error);
            _this.isLoading = false;
            _this.notificationsService.error(error.title, error.error.message, { timeOut: 3000, showProgressBar: false });
        });
    };
    MyContestsComponent.prototype.onCancel = function () {
        this.contest = null;
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
        __metadata('design:paramtypes', [contests_service_1.ContestsService, index_1.ErrorService, auth_service_1.AuthService, angular2_notifications_1.NotificationsService])
    ], MyContestsComponent);
    return MyContestsComponent;
}());
exports.MyContestsComponent = MyContestsComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvY29udGVzdHMvbXktY29udGVzdHMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBa0MsZUFBZSxDQUFDLENBQUE7QUFDbEQsaUNBQWdDLGlDQUFpQyxDQUFDLENBQUE7QUFDbEUsNkJBQTRCLDZCQUE2QixDQUFDLENBQUE7QUFDMUQsc0JBQTZCLG9CQUFvQixDQUFDLENBQUE7QUFFbEQsdUNBQXFDLHdCQUF3QixDQUFDLENBQUE7QUFTOUQ7SUFRRSw2QkFBb0IsZUFBZ0MsRUFDaEMsWUFBMEIsRUFDMUIsV0FBd0IsRUFDeEIsb0JBQTBDO1FBSDFDLG9CQUFlLEdBQWYsZUFBZSxDQUFpQjtRQUNoQyxpQkFBWSxHQUFaLFlBQVksQ0FBYztRQUMxQixnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUN4Qix5QkFBb0IsR0FBcEIsb0JBQW9CLENBQXNCO1FBVjlELGFBQVEsR0FBUSxFQUFFLENBQUM7UUFDbkIsWUFBTyxHQUFZLElBQUksQ0FBQztRQUN4QixPQUFFLEdBQVcsRUFBRSxDQUFDO1FBQ2hCLGNBQVMsR0FBRyxLQUFLLENBQUM7UUFDWCxZQUFPLEdBQUc7WUFDYixRQUFRLEVBQUUsQ0FBQyxLQUFLLEVBQUMsT0FBTyxDQUFDO1NBQzFCLENBQUM7SUFJOEQsQ0FBQztJQUVuRSxzQ0FBUSxHQUFSO1FBQUEsaUJBYUM7UUFaQyxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQztRQUN0QixJQUFJLENBQUMsRUFBRSxHQUFHLGNBQWMsQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDM0MsSUFBSSxDQUFDLGVBQWUsQ0FBQyxxQkFBcUIsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDO2FBQ2xELFNBQVMsQ0FBQyxVQUFBLFFBQVE7WUFDakIsS0FBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7WUFDekIsS0FBSSxDQUFDLGVBQWUsQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO1lBQ3pDLEtBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDO1lBQ3ZCLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQzdCLENBQUMsRUFBRSxVQUFBLEtBQUs7WUFDTixLQUFJLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQztZQUN2QixLQUFJLENBQUMsb0JBQW9CLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxLQUFLLEVBQUUsS0FBSyxDQUFDLEtBQUssQ0FBQyxPQUFPLEVBQUUsRUFBQyxPQUFPLEVBQUUsSUFBSSxFQUFFLGVBQWUsRUFBRSxLQUFLLEVBQUMsQ0FBQyxDQUFBO1FBQzVHLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVELHlDQUFXLEdBQVgsVUFBWSxPQUFZO1FBQ3RCLElBQUksQ0FBQyxlQUFlLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQzVDLENBQUM7SUFFRCwyQ0FBYSxHQUFiLFVBQWMsT0FBWTtRQUExQixpQkFZQztRQVhDLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDO1FBQ3RCLElBQUksQ0FBQyxlQUFlLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQzthQUN4QyxTQUFTLENBQUMsVUFBQSxJQUFJO1lBQ2IsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUNsQixLQUFJLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQztRQUN6QixDQUFDLEVBQ0QsVUFBQSxLQUFLO1lBQ0gsdUNBQXVDO1lBQ3ZDLEtBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDO1lBQ3ZCLEtBQUksQ0FBQyxvQkFBb0IsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLEtBQUssRUFBRSxLQUFLLENBQUMsS0FBSyxDQUFDLE9BQU8sRUFBRSxFQUFDLE9BQU8sRUFBRSxJQUFJLEVBQUUsZUFBZSxFQUFFLEtBQUssRUFBQyxDQUFDLENBQUE7UUFDNUcsQ0FBQyxDQUFDLENBQUE7SUFDTixDQUFDO0lBRUQsc0NBQVEsR0FBUjtRQUNFLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO0lBQ3RCLENBQUM7SUFFRCwyQ0FBYSxHQUFiLFVBQWMsTUFBYztRQUMxQixNQUFNLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsSUFBSSxNQUFNLENBQUM7SUFDcEQsQ0FBQztJQTFESDtRQUFDLGdCQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsUUFBUSxFQUFFLGFBQWE7WUFDdkIsV0FBVyxFQUFFLDRCQUE0QjtZQUN6QyxTQUFTLEVBQUUsQ0FBQywyQkFBMkIsQ0FBQztTQUN6QyxDQUFDOzsyQkFBQTtJQXVERiwwQkFBQztBQUFELENBdERBLEFBc0RDLElBQUE7QUF0RFksMkJBQW1CLHNCQXNEL0IsQ0FBQSIsImZpbGUiOiJjb21wb25lbnRzL2NvbnRlc3RzL215LWNvbnRlc3RzLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IENvbnRlc3RzU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL2NvbnRlc3RzLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBBdXRoU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL2F1dGguc2VydmljZSc7XHJcbmltcG9ydCB7IEVycm9yU2VydmljZSB9IGZyb20gJy4uLy4uL2Vycm9ycy9pbmRleCc7XHJcbmltcG9ydCB7IENvbnRlc3QgfSBmcm9tICcuLi8uLi9tb2RlbHMvY29udGVzdCc7XHJcbmltcG9ydCB7IE5vdGlmaWNhdGlvbnNTZXJ2aWNlIH0gZnJvbSAnYW5ndWxhcjItbm90aWZpY2F0aW9ucyc7XHJcblxyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcclxuICBzZWxlY3RvcjogJ215LWNvbnRlc3RzJyxcclxuICB0ZW1wbGF0ZVVybDogJ215LWNvbnRlc3RzLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnbXktY29udGVzdHMuY29tcG9uZW50LmNzcyddXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBNeUNvbnRlc3RzQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuICBjb250ZXN0czogYW55ID0gW107XHJcbiAgY29udGVzdDogQ29udGVzdCA9IG51bGw7XHJcbiAgaWQ6IHN0cmluZyA9ICcnO1xyXG4gIGlzTG9hZGluZyA9IGZhbHNlO1xyXG4gIHB1YmxpYyBvcHRpb25zID0ge1xyXG4gICAgICBwb3NpdGlvbjogW1widG9wXCIsXCJyaWdodFwiXVxyXG4gICAgfTtcclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGNvbnRlc3RzU2VydmljZTogQ29udGVzdHNTZXJ2aWNlLCBcclxuICAgICAgICAgICAgICBwcml2YXRlIGVycm9yU2VydmljZTogRXJyb3JTZXJ2aWNlLCBcclxuICAgICAgICAgICAgICBwcml2YXRlIGF1dGhTZXJ2aWNlOiBBdXRoU2VydmljZSxcclxuICAgICAgICAgICAgICBwcml2YXRlIG5vdGlmaWNhdGlvbnNTZXJ2aWNlOiBOb3RpZmljYXRpb25zU2VydmljZSkgeyB9XHJcblxyXG4gIG5nT25Jbml0KCkgeyBcclxuICAgIHRoaXMuaXNMb2FkaW5nID0gdHJ1ZTtcclxuICAgIHRoaXMuaWQgPSBzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKCd1c2VySWQnKTtcclxuICAgIHRoaXMuY29udGVzdHNTZXJ2aWNlLmdldEluZGl2aWR1YWxDb250ZXN0cyh0aGlzLmlkKVxyXG4gICAgLnN1YnNjcmliZShjb250ZXN0cyA9PiB7XHJcbiAgICAgIHRoaXMuY29udGVzdHMgPSBjb250ZXN0cztcclxuICAgICAgdGhpcy5jb250ZXN0c1NlcnZpY2UuY29udGVzdHMgPSBjb250ZXN0cztcclxuICAgICAgdGhpcy5pc0xvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgY29uc29sZS5sb2codGhpcy5jb250ZXN0cyk7XHJcbiAgICB9LCBlcnJvciA9PiB7XHJcbiAgICAgIHRoaXMuaXNMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgIHRoaXMubm90aWZpY2F0aW9uc1NlcnZpY2UuZXJyb3IoZXJyb3IudGl0bGUsIGVycm9yLmVycm9yLm1lc3NhZ2UsIHt0aW1lT3V0OiAzMDAwLCBzaG93UHJvZ3Jlc3NCYXI6IGZhbHNlfSlcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgZWRpdENvbnRlc3QoY29udGVzdDogYW55KSB7XHJcbiAgICB0aGlzLmNvbnRlc3RzU2VydmljZS5lZGl0Q29udGVzdChjb250ZXN0KTtcclxuICB9XHJcblxyXG4gIGRlbGV0ZUNvbnRlc3QoY29udGVzdDogYW55KSB7XHJcbiAgICB0aGlzLmlzTG9hZGluZyA9IHRydWU7XHJcbiAgICB0aGlzLmNvbnRlc3RzU2VydmljZS5kZWxldGVDb250ZXN0KGNvbnRlc3QpXHJcbiAgICAgIC5zdWJzY3JpYmUoZGF0YSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coZGF0YSk7XHJcbiAgICAgICAgdGhpcy5pc0xvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgfSxcclxuICAgICAgZXJyb3IgPT4ge1xyXG4gICAgICAgIC8vdGhpcy5lcnJvclNlcnZpY2UuaGFuZGxlRXJyb3IoZXJyb3IpO1xyXG4gICAgICAgIHRoaXMuaXNMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5ub3RpZmljYXRpb25zU2VydmljZS5lcnJvcihlcnJvci50aXRsZSwgZXJyb3IuZXJyb3IubWVzc2FnZSwge3RpbWVPdXQ6IDMwMDAsIHNob3dQcm9ncmVzc0JhcjogZmFsc2V9KVxyXG4gICAgICB9KVxyXG4gIH1cclxuXHJcbiAgb25DYW5jZWwoKSB7XHJcbiAgICB0aGlzLmNvbnRlc3QgPSBudWxsO1xyXG4gIH1cclxuXHJcbiAgYmVsb25nc1RvVXNlcih1c2VySWQ6IHN0cmluZykge1xyXG4gICAgcmV0dXJuIHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oJ3VzZXJJZCcpID09IHVzZXJJZDtcclxuICB9XHJcblxyXG59Il19
