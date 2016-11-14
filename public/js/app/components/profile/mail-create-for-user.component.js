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
        this.apiService.sendMessage(this.nickname, this.message)
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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvcHJvZmlsZS9tYWlsLWNyZWF0ZS1mb3ItdXNlci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUFrQyxlQUFlLENBQUMsQ0FBQTtBQUNsRCx1QkFBdUMsaUJBQWlCLENBQUMsQ0FBQTtBQUN6RCw0QkFBMkIsNEJBQTRCLENBQUMsQ0FBQTtBQVF4RDtJQU9FLG9DQUFvQixLQUFxQixFQUFVLFVBQXNCO1FBQXJELFVBQUssR0FBTCxLQUFLLENBQWdCO1FBQVUsZUFBVSxHQUFWLFVBQVUsQ0FBWTtRQUp6RSxrQkFBYSxHQUFHLEVBQUUsQ0FBQztJQUkwRCxDQUFDO0lBRTlFLDZDQUFRLEdBQVI7UUFBQSxpQkFXQztRQVZDLElBQUksQ0FBQyxNQUFNLEdBQUcsWUFBWSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUM3QyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsVUFBQyxNQUFjO1lBQzNDLEtBQUksQ0FBQyxRQUFRLEdBQUcsTUFBTSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQ25DLENBQUMsQ0FBQyxDQUFDO1FBQ0gsSUFBSSxDQUFDLFVBQVUsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQzthQUNyQyxTQUFTLENBQUMsVUFBQSxHQUFHO1lBQ1osS0FBSSxDQUFDLE1BQU0sR0FBRyxHQUFHLENBQUM7WUFDbEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxhQUFhLENBQUMsQ0FBQztZQUMzQixPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUMzQixDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFFRCxnREFBVyxHQUFYO1FBQ0UsSUFBSSxDQUFDLFVBQVUsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDO2FBQ3JELFNBQVMsQ0FBQyxVQUFBLEdBQUc7WUFDWixPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ25CLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUVELGdEQUFXLEdBQVg7UUFBQSxpQkFTQztRQVJDLElBQUksQ0FBQyxVQUFVLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUM7YUFDdkMsU0FBUyxDQUFDLFVBQUEsR0FBRztZQUNaLEtBQUksQ0FBQyxhQUFhLEdBQUcsR0FBRyxDQUFDO1lBQ3pCLE9BQU8sQ0FBQyxHQUFHLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztZQUM5QixPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQ2pCLE9BQU8sQ0FBQyxHQUFHLENBQUMsb0JBQW9CLENBQUMsQ0FBQztZQUNsQyxPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQztRQUNsQyxDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFFRCwyQ0FBTSxHQUFOLFVBQU8sS0FBSztRQUFaLGlCQUtDO1FBSkMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQzthQUNyQyxTQUFTLENBQUMsVUFBQSxHQUFHO1lBQ1osS0FBSSxDQUFDLE9BQU8sR0FBRyxHQUFHLENBQUM7UUFDckIsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBQ0QsNkNBQVEsR0FBUixVQUFTLEdBQUc7UUFDVixPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ25CLElBQUksQ0FBQyxRQUFRLEdBQUcsR0FBRyxDQUFDLFFBQVEsQ0FBQztJQUMvQixDQUFDO0lBdkRIO1FBQUMsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixRQUFRLEVBQUUsc0JBQXNCO1lBQ2hDLFdBQVcsRUFBRSxxQ0FBcUM7WUFDbEQsU0FBUyxFQUFFLENBQUMsb0NBQW9DLENBQUM7U0FDbEQsQ0FBQzs7a0NBQUE7SUFtREYsaUNBQUM7QUFBRCxDQWxEQSxBQWtEQyxJQUFBO0FBbERZLGtDQUEwQiw2QkFrRHRDLENBQUEiLCJmaWxlIjoiY29tcG9uZW50cy9wcm9maWxlL21haWwtY3JlYXRlLWZvci11c2VyLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFBhcmFtcywgQWN0aXZhdGVkUm91dGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5pbXBvcnQgeyBBcGlTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvYXBpLnNlcnZpY2UnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcclxuICBzZWxlY3RvcjogJ21haWwtY3JlYXRlLWZvci11c2VyJyxcclxuICB0ZW1wbGF0ZVVybDogJ21haWwtY3JlYXRlLWZvci11c2VyLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnbWFpbC1jcmVhdGUtZm9yLXVzZXIuY29tcG9uZW50LmNzcyddXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBNYWlsQ3JlYXRlRm9yVXNlckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgbmlja25hbWU6IHN0cmluZztcclxuICBtZXNzYWdlOiBzdHJpbmc7XHJcbiAgc2VhcmNoZWRVc2VycyA9IFtdO1xyXG4gIHJlc3VsdHM6YW55O1xyXG4gIHVzZXJJZDogc3RyaW5nO1xyXG4gIHNlbmRlcjogYW55O1xyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcm91dGU6IEFjdGl2YXRlZFJvdXRlLCBwcml2YXRlIGFwaVNlcnZpY2U6IEFwaVNlcnZpY2UpIHsgfVxyXG5cclxuICBuZ09uSW5pdCgpIHsgXHJcbiAgICB0aGlzLnVzZXJJZCA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd1c2VySWQnKTtcclxuICAgIHRoaXMucm91dGUucGFyYW1zLnN1YnNjcmliZSgocGFyYW1zOiBQYXJhbXMpID0+IHtcclxuICAgIHRoaXMubmlja25hbWUgPSBwYXJhbXNbJ25pY2tuYW1lJ107XHJcbiAgICB9KTtcclxuICAgIHRoaXMuYXBpU2VydmljZS5nZXRVc2VySW5mbyh0aGlzLnVzZXJJZClcclxuICAgICAgLnN1YnNjcmliZShyZXMgPT4ge1xyXG4gICAgICAgIHRoaXMuc2VuZGVyID0gcmVzO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdUSElTLlNFTkRFUicpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMuc2VuZGVyKTtcclxuICAgICAgfSk7XHJcbiAgfVxyXG5cclxuICBzZW5kTWVzc2FnZSgpIHtcclxuICAgIHRoaXMuYXBpU2VydmljZS5zZW5kTWVzc2FnZSh0aGlzLm5pY2tuYW1lLCB0aGlzLm1lc3NhZ2UpXHJcbiAgICAgIC5zdWJzY3JpYmUocmVzID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhyZXMpO1xyXG4gICAgICB9KTtcclxuICB9XHJcblxyXG4gIHNlYXJjaFVzZXJzKCkge1xyXG4gICAgdGhpcy5hcGlTZXJ2aWNlLnNlYXJjaFVzZXJzKHRoaXMubmlja25hbWUpXHJcbiAgICAgIC5zdWJzY3JpYmUocmVzID0+IHtcclxuICAgICAgICB0aGlzLnNlYXJjaGVkVXNlcnMgPSByZXM7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ1NFQVJDSCBSRVNVTFRTJyk7XHJcbiAgICAgICAgY29uc29sZS5sb2cocmVzKTtcclxuICAgICAgICBjb25zb2xlLmxvZygnVEhJUy5zZWFyY2hlZFVzZXJzJyk7XHJcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5zZWFyY2hlZFVzZXJzKTtcclxuICAgICAgfSk7XHJcbiAgfVxyXG5cclxuICBzZWFyY2goZXZlbnQpIHtcclxuICAgIHRoaXMuYXBpU2VydmljZS5zZWFyY2hVc2VycyhldmVudC5xdWVyeSlcclxuICAgICAgLnN1YnNjcmliZShyZXMgPT4ge1xyXG4gICAgICAgIHRoaXMucmVzdWx0cyA9IHJlcztcclxuICAgICAgfSk7XHJcbiAgfVxyXG4gIG9uU2VsZWN0KG9iaikge1xyXG4gICAgY29uc29sZS5sb2coZXZlbnQpO1xyXG4gICAgdGhpcy5uaWNrbmFtZSA9IG9iai5uaWNrTmFtZTtcclxuICB9XHJcbn0iXX0=
