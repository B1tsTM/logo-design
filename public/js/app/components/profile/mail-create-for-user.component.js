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
var api_service_1 = require('../../services/api.service');
var MailCreateForUserComponent = (function () {
    function MailCreateForUserComponent(route, apiService) {
        this.route = route;
        this.apiService = apiService;
        this.searchedUsers = [];
    }
    MailCreateForUserComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userId = localStorage.getItem('userId');
        this.route.params.subscribe(function (params) {
            _this.nickname = params['nickname'];
        });
        this.apiService.getUserInfo(this.userId)
            .subscribe(function (res) {
            _this.sender = res;
            console.log('THIS.SENDER');
            console.log(_this.sender);
        });
    };
    MailCreateForUserComponent.prototype.sendMessage = function () {
        this.apiService.sendMessage(this.nickname, this.topic, this.message)
            .subscribe(function (res) {
            console.log(res);
        });
    };
    MailCreateForUserComponent.prototype.searchUsers = function () {
        var _this = this;
        this.apiService.searchUsers(this.nickname)
            .subscribe(function (res) {
            _this.searchedUsers = res;
            console.log('SEARCH RESULTS');
            console.log(res);
            console.log('THIS.searchedUsers');
            console.log(_this.searchedUsers);
        });
    };
    MailCreateForUserComponent.prototype.search = function (event) {
        var _this = this;
        this.apiService.searchUsers(event.query)
            .subscribe(function (res) {
            _this.results = res;
        });
    };
    MailCreateForUserComponent.prototype.onSelect = function (obj) {
        console.log(event);
        this.nickname = obj.nickName;
    };
    MailCreateForUserComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'mail-create-for-user',
            templateUrl: 'mail-create-for-user.component.html',
            styleUrls: ['mail-create-for-user.component.css']
        }), 
        __metadata('design:paramtypes', [router_1.ActivatedRoute, api_service_1.ApiService])
    ], MailCreateForUserComponent);
    return MailCreateForUserComponent;
}());
exports.MailCreateForUserComponent = MailCreateForUserComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvcHJvZmlsZS9tYWlsLWNyZWF0ZS1mb3ItdXNlci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUFrQyxlQUFlLENBQUMsQ0FBQTtBQUNsRCx1QkFBdUMsaUJBQWlCLENBQUMsQ0FBQTtBQUN6RCw0QkFBMkIsNEJBQTRCLENBQUMsQ0FBQTtBQVF4RDtJQVFFLG9DQUFvQixLQUFxQixFQUFVLFVBQXNCO1FBQXJELFVBQUssR0FBTCxLQUFLLENBQWdCO1FBQVUsZUFBVSxHQUFWLFVBQVUsQ0FBWTtRQUx6RSxrQkFBYSxHQUFHLEVBQUUsQ0FBQztJQUswRCxDQUFDO0lBRTlFLDZDQUFRLEdBQVI7UUFBQSxpQkFXQztRQVZDLElBQUksQ0FBQyxNQUFNLEdBQUcsWUFBWSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUM3QyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsVUFBQyxNQUFjO1lBQzNDLEtBQUksQ0FBQyxRQUFRLEdBQUcsTUFBTSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQ25DLENBQUMsQ0FBQyxDQUFDO1FBQ0gsSUFBSSxDQUFDLFVBQVUsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQzthQUNyQyxTQUFTLENBQUMsVUFBQSxHQUFHO1lBQ1osS0FBSSxDQUFDLE1BQU0sR0FBRyxHQUFHLENBQUM7WUFDbEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxhQUFhLENBQUMsQ0FBQztZQUMzQixPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUMzQixDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFFRCxnREFBVyxHQUFYO1FBQ0UsSUFBSSxDQUFDLFVBQVUsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUM7YUFDakUsU0FBUyxDQUFDLFVBQUEsR0FBRztZQUNaLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDbkIsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBRUQsZ0RBQVcsR0FBWDtRQUFBLGlCQVNDO1FBUkMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQzthQUN2QyxTQUFTLENBQUMsVUFBQSxHQUFHO1lBQ1osS0FBSSxDQUFDLGFBQWEsR0FBRyxHQUFHLENBQUM7WUFDekIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO1lBQzlCLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDakIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDO1lBQ2xDLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDO1FBQ2xDLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUVELDJDQUFNLEdBQU4sVUFBTyxLQUFLO1FBQVosaUJBS0M7UUFKQyxJQUFJLENBQUMsVUFBVSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDO2FBQ3JDLFNBQVMsQ0FBQyxVQUFBLEdBQUc7WUFDWixLQUFJLENBQUMsT0FBTyxHQUFHLEdBQUcsQ0FBQztRQUNyQixDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFDRCw2Q0FBUSxHQUFSLFVBQVMsR0FBRztRQUNWLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDbkIsSUFBSSxDQUFDLFFBQVEsR0FBRyxHQUFHLENBQUMsUUFBUSxDQUFDO0lBQy9CLENBQUM7SUF4REg7UUFBQyxnQkFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFFBQVEsRUFBRSxzQkFBc0I7WUFDaEMsV0FBVyxFQUFFLHFDQUFxQztZQUNsRCxTQUFTLEVBQUUsQ0FBQyxvQ0FBb0MsQ0FBQztTQUNsRCxDQUFDOztrQ0FBQTtJQW9ERixpQ0FBQztBQUFELENBbkRBLEFBbURDLElBQUE7QUFuRFksa0NBQTBCLDZCQW1EdEMsQ0FBQSIsImZpbGUiOiJjb21wb25lbnRzL3Byb2ZpbGUvbWFpbC1jcmVhdGUtZm9yLXVzZXIuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgUGFyYW1zLCBBY3RpdmF0ZWRSb3V0ZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcbmltcG9ydCB7IEFwaVNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9hcGkuc2VydmljZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBtb2R1bGVJZDogbW9kdWxlLmlkLFxyXG4gIHNlbGVjdG9yOiAnbWFpbC1jcmVhdGUtZm9yLXVzZXInLFxyXG4gIHRlbXBsYXRlVXJsOiAnbWFpbC1jcmVhdGUtZm9yLXVzZXIuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWydtYWlsLWNyZWF0ZS1mb3ItdXNlci5jb21wb25lbnQuY3NzJ11cclxufSlcclxuZXhwb3J0IGNsYXNzIE1haWxDcmVhdGVGb3JVc2VyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuICBuaWNrbmFtZTogc3RyaW5nO1xyXG4gIG1lc3NhZ2U6IHN0cmluZztcclxuICBzZWFyY2hlZFVzZXJzID0gW107XHJcbiAgcmVzdWx0czphbnk7XHJcbiAgdXNlcklkOiBzdHJpbmc7XHJcbiAgc2VuZGVyOiBhbnk7XHJcbiAgdG9waWM6IHN0cmluZztcclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSwgcHJpdmF0ZSBhcGlTZXJ2aWNlOiBBcGlTZXJ2aWNlKSB7IH1cclxuXHJcbiAgbmdPbkluaXQoKSB7IFxyXG4gICAgdGhpcy51c2VySWQgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndXNlcklkJyk7XHJcbiAgICB0aGlzLnJvdXRlLnBhcmFtcy5zdWJzY3JpYmUoKHBhcmFtczogUGFyYW1zKSA9PiB7XHJcbiAgICB0aGlzLm5pY2tuYW1lID0gcGFyYW1zWyduaWNrbmFtZSddO1xyXG4gICAgfSk7XHJcbiAgICB0aGlzLmFwaVNlcnZpY2UuZ2V0VXNlckluZm8odGhpcy51c2VySWQpXHJcbiAgICAgIC5zdWJzY3JpYmUocmVzID0+IHtcclxuICAgICAgICB0aGlzLnNlbmRlciA9IHJlcztcclxuICAgICAgICBjb25zb2xlLmxvZygnVEhJUy5TRU5ERVInKTtcclxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLnNlbmRlcik7XHJcbiAgICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgc2VuZE1lc3NhZ2UoKSB7XHJcbiAgICB0aGlzLmFwaVNlcnZpY2Uuc2VuZE1lc3NhZ2UodGhpcy5uaWNrbmFtZSwgdGhpcy50b3BpYywgdGhpcy5tZXNzYWdlKVxyXG4gICAgICAuc3Vic2NyaWJlKHJlcyA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2cocmVzKTtcclxuICAgICAgfSk7XHJcbiAgfVxyXG5cclxuICBzZWFyY2hVc2VycygpIHtcclxuICAgIHRoaXMuYXBpU2VydmljZS5zZWFyY2hVc2Vycyh0aGlzLm5pY2tuYW1lKVxyXG4gICAgICAuc3Vic2NyaWJlKHJlcyA9PiB7XHJcbiAgICAgICAgdGhpcy5zZWFyY2hlZFVzZXJzID0gcmVzO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdTRUFSQ0ggUkVTVUxUUycpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHJlcyk7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ1RISVMuc2VhcmNoZWRVc2VycycpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMuc2VhcmNoZWRVc2Vycyk7XHJcbiAgICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgc2VhcmNoKGV2ZW50KSB7XHJcbiAgICB0aGlzLmFwaVNlcnZpY2Uuc2VhcmNoVXNlcnMoZXZlbnQucXVlcnkpXHJcbiAgICAgIC5zdWJzY3JpYmUocmVzID0+IHtcclxuICAgICAgICB0aGlzLnJlc3VsdHMgPSByZXM7XHJcbiAgICAgIH0pO1xyXG4gIH1cclxuICBvblNlbGVjdChvYmopIHtcclxuICAgIGNvbnNvbGUubG9nKGV2ZW50KTtcclxuICAgIHRoaXMubmlja25hbWUgPSBvYmoubmlja05hbWU7XHJcbiAgfVxyXG59Il19
