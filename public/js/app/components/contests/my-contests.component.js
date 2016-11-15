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
        this.options = {
            position: ["top", "right"]
        };
    }
    MyContestsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.id = localStorage.getItem('userId');
        this.contestsService.getIndividualContests(this.id)
            .subscribe(function (contests) {
            _this.contests = contests;
            _this.contestsService.contests = contests;
            console.log(_this.contests);
        }, function (error) {
            _this.notificationsService.error('Įvyko klaida', 'Nepavyko gauti konkursų informacijos', { timeOut: 3000, showProgressBar: false });
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
        __metadata('design:paramtypes', [contests_service_1.ContestsService, index_1.ErrorService, auth_service_1.AuthService, angular2_notifications_1.NotificationsService])
    ], MyContestsComponent);
    return MyContestsComponent;
}());
exports.MyContestsComponent = MyContestsComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvY29udGVzdHMvbXktY29udGVzdHMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBa0MsZUFBZSxDQUFDLENBQUE7QUFDbEQsaUNBQWdDLGlDQUFpQyxDQUFDLENBQUE7QUFDbEUsNkJBQTRCLDZCQUE2QixDQUFDLENBQUE7QUFDMUQsc0JBQTZCLG9CQUFvQixDQUFDLENBQUE7QUFFbEQsdUNBQXFDLHdCQUF3QixDQUFDLENBQUE7QUFTOUQ7SUFPRSw2QkFBb0IsZUFBZ0MsRUFDaEMsWUFBMEIsRUFDMUIsV0FBd0IsRUFDeEIsb0JBQTBDO1FBSDFDLG9CQUFlLEdBQWYsZUFBZSxDQUFpQjtRQUNoQyxpQkFBWSxHQUFaLFlBQVksQ0FBYztRQUMxQixnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUN4Qix5QkFBb0IsR0FBcEIsb0JBQW9CLENBQXNCO1FBVDlELGFBQVEsR0FBUSxFQUFFLENBQUM7UUFDbkIsWUFBTyxHQUFZLElBQUksQ0FBQztRQUN4QixPQUFFLEdBQVcsRUFBRSxDQUFDO1FBQ1QsWUFBTyxHQUFHO1lBQ2IsUUFBUSxFQUFFLENBQUMsS0FBSyxFQUFDLE9BQU8sQ0FBQztTQUMxQixDQUFDO0lBSThELENBQUM7SUFFbkUsc0NBQVEsR0FBUjtRQUFBLGlCQVVDO1FBVEMsSUFBSSxDQUFDLEVBQUUsR0FBRyxZQUFZLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ3pDLElBQUksQ0FBQyxlQUFlLENBQUMscUJBQXFCLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQzthQUNsRCxTQUFTLENBQUMsVUFBQSxRQUFRO1lBQ2pCLEtBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO1lBQ3pCLEtBQUksQ0FBQyxlQUFlLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztZQUN6QyxPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUM3QixDQUFDLEVBQUUsVUFBQSxLQUFLO1lBQ04sS0FBSSxDQUFDLG9CQUFvQixDQUFDLEtBQUssQ0FBQyxjQUFjLEVBQUUsc0NBQXNDLEVBQUUsRUFBQyxPQUFPLEVBQUUsSUFBSSxFQUFFLGVBQWUsRUFBRSxLQUFLLEVBQUMsQ0FBQyxDQUFBO1FBQ2xJLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVELHlDQUFXLEdBQVgsVUFBWSxPQUFZO1FBQ3RCLElBQUksQ0FBQyxlQUFlLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQzVDLENBQUM7SUFFRCwyQ0FBYSxHQUFiLFVBQWMsT0FBWTtRQUExQixpQkFRQztRQVBDLElBQUksQ0FBQyxlQUFlLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQzthQUN4QyxTQUFTLENBQUMsVUFBQSxJQUFJO1lBQ2IsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNwQixDQUFDLEVBQ0QsVUFBQSxLQUFLO1lBQ0gsS0FBSSxDQUFDLFlBQVksQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDdkMsQ0FBQyxDQUFDLENBQUE7SUFDTixDQUFDO0lBRUQsc0NBQVEsR0FBUjtRQUNFLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO0lBQ3RCLENBQUM7SUFFRCwyQ0FBYSxHQUFiLFVBQWMsTUFBYztRQUMxQixNQUFNLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsSUFBSSxNQUFNLENBQUM7SUFDbEQsQ0FBQztJQWxESDtRQUFDLGdCQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsUUFBUSxFQUFFLGFBQWE7WUFDdkIsV0FBVyxFQUFFLDRCQUE0QjtZQUN6QyxTQUFTLEVBQUUsQ0FBQywyQkFBMkIsQ0FBQztTQUN6QyxDQUFDOzsyQkFBQTtJQStDRiwwQkFBQztBQUFELENBOUNBLEFBOENDLElBQUE7QUE5Q1ksMkJBQW1CLHNCQThDL0IsQ0FBQSIsImZpbGUiOiJjb21wb25lbnRzL2NvbnRlc3RzL215LWNvbnRlc3RzLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IENvbnRlc3RzU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL2NvbnRlc3RzLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBBdXRoU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL2F1dGguc2VydmljZSc7XHJcbmltcG9ydCB7IEVycm9yU2VydmljZSB9IGZyb20gJy4uLy4uL2Vycm9ycy9pbmRleCc7XHJcbmltcG9ydCB7IENvbnRlc3QgfSBmcm9tICcuLi8uLi9tb2RlbHMvY29udGVzdCc7XHJcbmltcG9ydCB7IE5vdGlmaWNhdGlvbnNTZXJ2aWNlIH0gZnJvbSAnYW5ndWxhcjItbm90aWZpY2F0aW9ucyc7XHJcblxyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcclxuICBzZWxlY3RvcjogJ215LWNvbnRlc3RzJyxcclxuICB0ZW1wbGF0ZVVybDogJ215LWNvbnRlc3RzLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnbXktY29udGVzdHMuY29tcG9uZW50LmNzcyddXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBNeUNvbnRlc3RzQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuICBjb250ZXN0czogYW55ID0gW107XHJcbiAgY29udGVzdDogQ29udGVzdCA9IG51bGw7XHJcbiAgaWQ6IHN0cmluZyA9ICcnO1xyXG4gIHB1YmxpYyBvcHRpb25zID0ge1xyXG4gICAgICBwb3NpdGlvbjogW1widG9wXCIsXCJyaWdodFwiXVxyXG4gICAgfTtcclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGNvbnRlc3RzU2VydmljZTogQ29udGVzdHNTZXJ2aWNlLCBcclxuICAgICAgICAgICAgICBwcml2YXRlIGVycm9yU2VydmljZTogRXJyb3JTZXJ2aWNlLCBcclxuICAgICAgICAgICAgICBwcml2YXRlIGF1dGhTZXJ2aWNlOiBBdXRoU2VydmljZSxcclxuICAgICAgICAgICAgICBwcml2YXRlIG5vdGlmaWNhdGlvbnNTZXJ2aWNlOiBOb3RpZmljYXRpb25zU2VydmljZSkgeyB9XHJcblxyXG4gIG5nT25Jbml0KCkgeyBcclxuICAgIHRoaXMuaWQgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndXNlcklkJyk7XHJcbiAgICB0aGlzLmNvbnRlc3RzU2VydmljZS5nZXRJbmRpdmlkdWFsQ29udGVzdHModGhpcy5pZClcclxuICAgIC5zdWJzY3JpYmUoY29udGVzdHMgPT4ge1xyXG4gICAgICB0aGlzLmNvbnRlc3RzID0gY29udGVzdHM7XHJcbiAgICAgIHRoaXMuY29udGVzdHNTZXJ2aWNlLmNvbnRlc3RzID0gY29udGVzdHM7XHJcbiAgICAgIGNvbnNvbGUubG9nKHRoaXMuY29udGVzdHMpO1xyXG4gICAgfSwgZXJyb3IgPT4ge1xyXG4gICAgICB0aGlzLm5vdGlmaWNhdGlvbnNTZXJ2aWNlLmVycm9yKCfErnZ5a28ga2xhaWRhJywgJ05lcGF2eWtvIGdhdXRpIGtvbmt1cnPFsyBpbmZvcm1hY2lqb3MnLCB7dGltZU91dDogMzAwMCwgc2hvd1Byb2dyZXNzQmFyOiBmYWxzZX0pXHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGVkaXRDb250ZXN0KGNvbnRlc3Q6IGFueSkge1xyXG4gICAgdGhpcy5jb250ZXN0c1NlcnZpY2UuZWRpdENvbnRlc3QoY29udGVzdCk7XHJcbiAgfVxyXG5cclxuICBkZWxldGVDb250ZXN0KGNvbnRlc3Q6IGFueSkge1xyXG4gICAgdGhpcy5jb250ZXN0c1NlcnZpY2UuZGVsZXRlQ29udGVzdChjb250ZXN0KVxyXG4gICAgICAuc3Vic2NyaWJlKGRhdGEgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xyXG4gICAgICB9LFxyXG4gICAgICBlcnJvciA9PiB7XHJcbiAgICAgICAgdGhpcy5lcnJvclNlcnZpY2UuaGFuZGxlRXJyb3IoZXJyb3IpO1xyXG4gICAgICB9KVxyXG4gIH1cclxuXHJcbiAgb25DYW5jZWwoKSB7XHJcbiAgICB0aGlzLmNvbnRlc3QgPSBudWxsO1xyXG4gIH1cclxuXHJcbiAgYmVsb25nc1RvVXNlcih1c2VySWQ6IHN0cmluZykge1xyXG4gICAgcmV0dXJuIGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd1c2VySWQnKSA9PSB1c2VySWQ7XHJcbiAgfVxyXG5cclxufSJdfQ==
