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
var MyContestsComponent = (function () {
    function MyContestsComponent(contestsService, errorService, authService) {
        this.contestsService = contestsService;
        this.errorService = errorService;
        this.authService = authService;
        this.contests = [];
        this.contest = null;
        this.id = '';
    }
    MyContestsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.id = localStorage.getItem('userId');
        this.contestsService.getIndividualContests(this.id)
            .subscribe(function (contests) {
            _this.contests = contests;
            _this.contestsService.contests = contests;
            console.log(_this.contests);
        });
    };
    MyContestsComponent.prototype.editContest = function (contest) {
        this.contestsService.editContest(contest);
    };
    MyContestsComponent.prototype.deleteContest = function (contest) {
        var _this = this;
        this.contestsService.deleteContest(contest)
            .subscribe(function (data) {
            console.log(data);
        }, function (error) {
            _this.errorService.handleError(error);
        });
    };
    MyContestsComponent.prototype.onCancel = function () {
        this.contest = null;
    };
    MyContestsComponent.prototype.belongsToUser = function (userId) {
        return localStorage.getItem('userId') == userId;
    };
    MyContestsComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'my-contests',
            templateUrl: 'my-contests.component.html',
            styleUrls: ['my-contests.component.css']
        }), 
        __metadata('design:paramtypes', [contests_service_1.ContestsService, index_1.ErrorService, auth_service_1.AuthService])
    ], MyContestsComponent);
    return MyContestsComponent;
}());
exports.MyContestsComponent = MyContestsComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvY29udGVzdHMvbXktY29udGVzdHMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBa0MsZUFBZSxDQUFDLENBQUE7QUFDbEQsaUNBQWdDLGlDQUFpQyxDQUFDLENBQUE7QUFDbEUsNkJBQTRCLDZCQUE2QixDQUFDLENBQUE7QUFDMUQsc0JBQTZCLG9CQUFvQixDQUFDLENBQUE7QUFVbEQ7SUFJRSw2QkFBb0IsZUFBZ0MsRUFDaEMsWUFBMEIsRUFDMUIsV0FBd0I7UUFGeEIsb0JBQWUsR0FBZixlQUFlLENBQWlCO1FBQ2hDLGlCQUFZLEdBQVosWUFBWSxDQUFjO1FBQzFCLGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBTDVDLGFBQVEsR0FBUSxFQUFFLENBQUM7UUFDbkIsWUFBTyxHQUFZLElBQUksQ0FBQztRQUN4QixPQUFFLEdBQVcsRUFBRSxDQUFDO0lBR2dDLENBQUM7SUFFakQsc0NBQVEsR0FBUjtRQUFBLGlCQVFDO1FBUEMsSUFBSSxDQUFDLEVBQUUsR0FBRyxZQUFZLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ3pDLElBQUksQ0FBQyxlQUFlLENBQUMscUJBQXFCLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQzthQUNsRCxTQUFTLENBQUMsVUFBQSxRQUFRO1lBQ2pCLEtBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO1lBQ3pCLEtBQUksQ0FBQyxlQUFlLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztZQUN6QyxPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUM3QixDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFRCx5Q0FBVyxHQUFYLFVBQVksT0FBWTtRQUN0QixJQUFJLENBQUMsZUFBZSxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUM1QyxDQUFDO0lBRUQsMkNBQWEsR0FBYixVQUFjLE9BQVk7UUFBMUIsaUJBUUM7UUFQQyxJQUFJLENBQUMsZUFBZSxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUM7YUFDeEMsU0FBUyxDQUFDLFVBQUEsSUFBSTtZQUNiLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDcEIsQ0FBQyxFQUNELFVBQUEsS0FBSztZQUNILEtBQUksQ0FBQyxZQUFZLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3ZDLENBQUMsQ0FBQyxDQUFBO0lBQ04sQ0FBQztJQUVELHNDQUFRLEdBQVI7UUFDRSxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQztJQUN0QixDQUFDO0lBRUQsMkNBQWEsR0FBYixVQUFjLE1BQWM7UUFDMUIsTUFBTSxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLElBQUksTUFBTSxDQUFDO0lBQ2xELENBQUM7SUE1Q0g7UUFBQyxnQkFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFFBQVEsRUFBRSxhQUFhO1lBQ3ZCLFdBQVcsRUFBRSw0QkFBNEI7WUFDekMsU0FBUyxFQUFFLENBQUMsMkJBQTJCLENBQUM7U0FDekMsQ0FBQzs7MkJBQUE7SUF5Q0YsMEJBQUM7QUFBRCxDQXhDQSxBQXdDQyxJQUFBO0FBeENZLDJCQUFtQixzQkF3Qy9CLENBQUEiLCJmaWxlIjoiY29tcG9uZW50cy9jb250ZXN0cy9teS1jb250ZXN0cy5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDb250ZXN0c1NlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9jb250ZXN0cy5zZXJ2aWNlJztcclxuaW1wb3J0IHsgQXV0aFNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9hdXRoLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBFcnJvclNlcnZpY2UgfSBmcm9tICcuLi8uLi9lcnJvcnMvaW5kZXgnO1xyXG5pbXBvcnQgeyBDb250ZXN0IH0gZnJvbSAnLi4vLi4vbW9kZWxzL2NvbnRlc3QnO1xyXG5cclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIG1vZHVsZUlkOiBtb2R1bGUuaWQsXHJcbiAgc2VsZWN0b3I6ICdteS1jb250ZXN0cycsXHJcbiAgdGVtcGxhdGVVcmw6ICdteS1jb250ZXN0cy5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJ215LWNvbnRlc3RzLmNvbXBvbmVudC5jc3MnXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgTXlDb250ZXN0c0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgY29udGVzdHM6IGFueSA9IFtdO1xyXG4gIGNvbnRlc3Q6IENvbnRlc3QgPSBudWxsO1xyXG4gIGlkOiBzdHJpbmcgPSAnJztcclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGNvbnRlc3RzU2VydmljZTogQ29udGVzdHNTZXJ2aWNlLCBcclxuICAgICAgICAgICAgICBwcml2YXRlIGVycm9yU2VydmljZTogRXJyb3JTZXJ2aWNlLCBcclxuICAgICAgICAgICAgICBwcml2YXRlIGF1dGhTZXJ2aWNlOiBBdXRoU2VydmljZSkgeyB9XHJcblxyXG4gIG5nT25Jbml0KCkgeyBcclxuICAgIHRoaXMuaWQgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndXNlcklkJyk7XHJcbiAgICB0aGlzLmNvbnRlc3RzU2VydmljZS5nZXRJbmRpdmlkdWFsQ29udGVzdHModGhpcy5pZClcclxuICAgIC5zdWJzY3JpYmUoY29udGVzdHMgPT4ge1xyXG4gICAgICB0aGlzLmNvbnRlc3RzID0gY29udGVzdHM7XHJcbiAgICAgIHRoaXMuY29udGVzdHNTZXJ2aWNlLmNvbnRlc3RzID0gY29udGVzdHM7XHJcbiAgICAgIGNvbnNvbGUubG9nKHRoaXMuY29udGVzdHMpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBlZGl0Q29udGVzdChjb250ZXN0OiBhbnkpIHtcclxuICAgIHRoaXMuY29udGVzdHNTZXJ2aWNlLmVkaXRDb250ZXN0KGNvbnRlc3QpO1xyXG4gIH1cclxuXHJcbiAgZGVsZXRlQ29udGVzdChjb250ZXN0OiBhbnkpIHtcclxuICAgIHRoaXMuY29udGVzdHNTZXJ2aWNlLmRlbGV0ZUNvbnRlc3QoY29udGVzdClcclxuICAgICAgLnN1YnNjcmliZShkYXRhID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhkYXRhKTtcclxuICAgICAgfSxcclxuICAgICAgZXJyb3IgPT4ge1xyXG4gICAgICAgIHRoaXMuZXJyb3JTZXJ2aWNlLmhhbmRsZUVycm9yKGVycm9yKTtcclxuICAgICAgfSlcclxuICB9XHJcblxyXG4gIG9uQ2FuY2VsKCkge1xyXG4gICAgdGhpcy5jb250ZXN0ID0gbnVsbDtcclxuICB9XHJcblxyXG4gIGJlbG9uZ3NUb1VzZXIodXNlcklkOiBzdHJpbmcpIHtcclxuICAgIHJldHVybiBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndXNlcklkJykgPT0gdXNlcklkO1xyXG4gIH1cclxuXHJcbn0iXX0=
