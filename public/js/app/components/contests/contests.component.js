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
var index_1 = require('../../errors/index');
var angular2_notifications_1 = require('angular2-notifications');
var ContestsComponent = (function () {
    function ContestsComponent(contestsService, errorService, notificationsService) {
        this.contestsService = contestsService;
        this.errorService = errorService;
        this.notificationsService = notificationsService;
        this.contest = null;
        this.contests = [];
        this.isLoading = false;
        this.options = {
            position: ["top", "right"]
        };
    }
    ContestsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.isLoading = true;
        this.contestsService.getAllContests()
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
    ContestsComponent.prototype.belongsToUser = function (userId) {
        return localStorage.getItem('userId') == userId;
    };
    ContestsComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'contests',
            templateUrl: 'contests.component.html',
            styleUrls: ['contests.component.css']
        }), 
        __metadata('design:paramtypes', [contests_service_1.ContestsService, index_1.ErrorService, angular2_notifications_1.NotificationsService])
    ], ContestsComponent);
    return ContestsComponent;
}());
exports.ContestsComponent = ContestsComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvY29udGVzdHMvY29udGVzdHMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBcUQsZUFBZSxDQUFDLENBQUE7QUFFckUsaUNBQWdDLGlDQUFpQyxDQUFDLENBQUE7QUFDbEUsc0JBQTZCLG9CQUFvQixDQUFDLENBQUE7QUFDbEQsdUNBQXFDLHdCQUF3QixDQUFDLENBQUE7QUFTOUQ7SUFPRSwyQkFBb0IsZUFBZ0MsRUFDaEMsWUFBMEIsRUFDMUIsb0JBQTBDO1FBRjFDLG9CQUFlLEdBQWYsZUFBZSxDQUFpQjtRQUNoQyxpQkFBWSxHQUFaLFlBQVksQ0FBYztRQUMxQix5QkFBb0IsR0FBcEIsb0JBQW9CLENBQXNCO1FBUjlELFlBQU8sR0FBWSxJQUFJLENBQUM7UUFDeEIsYUFBUSxHQUFRLEVBQUUsQ0FBQztRQUNuQixjQUFTLEdBQUcsS0FBSyxDQUFDO1FBQ1gsWUFBTyxHQUFHO1lBQ2IsUUFBUSxFQUFFLENBQUMsS0FBSyxFQUFDLE9BQU8sQ0FBQztTQUMxQixDQUFDO0lBS0osQ0FBQztJQUVELG9DQUFRLEdBQVI7UUFBQSxpQkFZRTtRQVhBLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDO1FBQ3RCLElBQUksQ0FBQyxlQUFlLENBQUMsY0FBYyxFQUFFO2FBQ3BDLFNBQVMsQ0FBQyxVQUFBLFFBQVE7WUFDakIsS0FBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7WUFDekIsS0FBSSxDQUFDLGVBQWUsQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO1lBQ3pDLEtBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDO1lBQ3ZCLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQzdCLENBQUMsRUFBRSxVQUFBLEtBQUs7WUFDTixLQUFJLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQztZQUN2QixLQUFJLENBQUMsb0JBQW9CLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxLQUFLLEVBQUUsS0FBSyxDQUFDLEtBQUssQ0FBQyxPQUFPLEVBQUUsRUFBQyxPQUFPLEVBQUUsSUFBSSxFQUFFLGVBQWUsRUFBRSxLQUFLLEVBQUMsQ0FBQyxDQUFBO1FBQzVHLENBQUMsQ0FBQyxDQUFDO0lBQ0osQ0FBQztJQUVGLHlDQUFhLEdBQWIsVUFBYyxNQUFjO1FBQzFCLE1BQU0sQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxJQUFJLE1BQU0sQ0FBQztJQUNsRCxDQUFDO0lBcENIO1FBQUMsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixRQUFRLEVBQUUsVUFBVTtZQUNwQixXQUFXLEVBQUUseUJBQXlCO1lBQ3RDLFNBQVMsRUFBRSxDQUFDLHdCQUF3QixDQUFDO1NBRXRDLENBQUM7O3lCQUFBO0lBZ0NGLHdCQUFDO0FBQUQsQ0EvQkEsQUErQkMsSUFBQTtBQS9CWSx5QkFBaUIsb0JBK0I3QixDQUFBIiwiZmlsZSI6ImNvbXBvbmVudHMvY29udGVzdHMvY29udGVzdHMuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIFZpZXdFbmNhcHN1bGF0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IENvbnRlc3QgfSBmcm9tICcuLi8uLi9tb2RlbHMvY29udGVzdCc7XHJcbmltcG9ydCB7IENvbnRlc3RzU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL2NvbnRlc3RzLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBFcnJvclNlcnZpY2UgfSBmcm9tICcuLi8uLi9lcnJvcnMvaW5kZXgnO1xyXG5pbXBvcnQgeyBOb3RpZmljYXRpb25zU2VydmljZSB9IGZyb20gJ2FuZ3VsYXIyLW5vdGlmaWNhdGlvbnMnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcclxuICBzZWxlY3RvcjogJ2NvbnRlc3RzJyxcclxuICB0ZW1wbGF0ZVVybDogJ2NvbnRlc3RzLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnY29udGVzdHMuY29tcG9uZW50LmNzcyddXHJcbiAgLy8sIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUgLy9kaXNhYmxpbmcgc2hhZG93IERPTVxyXG59KVxyXG5leHBvcnQgY2xhc3MgQ29udGVzdHNDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gIGNvbnRlc3Q6IENvbnRlc3QgPSBudWxsO1xyXG4gIGNvbnRlc3RzOiBhbnkgPSBbXTtcclxuICBpc0xvYWRpbmcgPSBmYWxzZTtcclxuICBwdWJsaWMgb3B0aW9ucyA9IHtcclxuICAgICAgcG9zaXRpb246IFtcInRvcFwiLFwicmlnaHRcIl1cclxuICAgIH07XHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBjb250ZXN0c1NlcnZpY2U6IENvbnRlc3RzU2VydmljZSwgXHJcbiAgICAgICAgICAgICAgcHJpdmF0ZSBlcnJvclNlcnZpY2U6IEVycm9yU2VydmljZSxcclxuICAgICAgICAgICAgICBwcml2YXRlIG5vdGlmaWNhdGlvbnNTZXJ2aWNlOiBOb3RpZmljYXRpb25zU2VydmljZSkge1xyXG4gICAgXHJcbiAgfVxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICAgIHRoaXMuaXNMb2FkaW5nID0gdHJ1ZTtcclxuICAgIHRoaXMuY29udGVzdHNTZXJ2aWNlLmdldEFsbENvbnRlc3RzKClcclxuICAgIC5zdWJzY3JpYmUoY29udGVzdHMgPT4ge1xyXG4gICAgICB0aGlzLmNvbnRlc3RzID0gY29udGVzdHM7XHJcbiAgICAgIHRoaXMuY29udGVzdHNTZXJ2aWNlLmNvbnRlc3RzID0gY29udGVzdHM7XHJcbiAgICAgIHRoaXMuaXNMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgIGNvbnNvbGUubG9nKHRoaXMuY29udGVzdHMpO1xyXG4gICAgfSwgZXJyb3IgPT4ge1xyXG4gICAgICB0aGlzLmlzTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICB0aGlzLm5vdGlmaWNhdGlvbnNTZXJ2aWNlLmVycm9yKGVycm9yLnRpdGxlLCBlcnJvci5lcnJvci5tZXNzYWdlLCB7dGltZU91dDogMzAwMCwgc2hvd1Byb2dyZXNzQmFyOiBmYWxzZX0pXHJcbiAgICB9KTtcclxuICAgfVxyXG5cclxuICBiZWxvbmdzVG9Vc2VyKHVzZXJJZDogc3RyaW5nKSB7XHJcbiAgICByZXR1cm4gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3VzZXJJZCcpID09IHVzZXJJZDtcclxuICB9XHJcblxyXG59Il19
