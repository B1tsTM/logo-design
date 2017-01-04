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
var index_1 = require('../../errors/index');
var angular2_notifications_1 = require('angular2-notifications');
var Observable_1 = require('rxjs/Observable');
require('rxjs/Rx');
var AdminManageUsersComponent = (function () {
    function AdminManageUsersComponent(contestsService, errorService, apiService, notificationsService, ngzone, cdRef, router) {
        this.contestsService = contestsService;
        this.errorService = errorService;
        this.apiService = apiService;
        this.notificationsService = notificationsService;
        this.ngzone = ngzone;
        this.cdRef = cdRef;
        this.router = router;
        this.contests = [];
        this.isLoading = false;
        //status = "Nepatvirtintas";
        this.firstTabActive = true;
        this.secondTabActive = false;
        this.allActiveUsers = [];
        this.allBannedUsers = [];
        this.users = [];
        this.userBlocked = false;
        this.options = {
            position: ["top", "right"]
        };
    }
    AdminManageUsersComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.isLoading = true;
        this.apiService.getAllUsers()
            .subscribe(function (users) {
            //var unfilteredContests = contests;
            // var filteredActiveContests = unfilteredContests.filter((item: any) => item.status == this.status);
            // var filteredFinishedContests = unfilteredContests.filter((item: any) => item.status == "Užbaigtas");
            _this.allActiveUsers = users.filter(function (item) { return item.userBlocked == _this.userBlocked; });
            _this.allBannedUsers = users.filter(function (item) { return item.userBlocked == !_this.userBlocked; });
            _this.users = _this.allActiveUsers;
            _this.isLoading = false;
            console.log(_this.users);
        }, function (error) {
            _this.isLoading = false;
            _this.notificationsService.error(error.title, error.error.message, { timeOut: 3000, showProgressBar: false });
        });
    };
    AdminManageUsersComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.ngzone.runOutsideAngular(function () {
            Observable_1.Observable.fromEvent(_this.searchElRef.nativeElement, 'keyup')
                .debounceTime(1000)
                .distinctUntilChanged() // TODO Update: not working. Needs a custom callback to check for whitespace differences
                .subscribe(function (event) {
                _this.apiService.getFilteredUsers(event.target.value) //searchString
                    .subscribe(function (users) {
                    _this.users = users;
                    _this.cdRef.detectChanges();
                }, function (error) {
                    _this.notificationsService.error(error.title, error.error.message, { timeOut: 3000, showProgressBar: false });
                });
            });
        });
        this.ngzone.runOutsideAngular(function () {
            Observable_1.Observable.fromEvent(_this.searchFilterRef.nativeElement, 'keyup')
                .debounceTime(1000)
                .distinctUntilChanged() // TODO Update: not working. Needs a custom callback to check for whitespace differences
                .subscribe(function (event) {
                _this.apiService.getFilteredUsers(event.target.value) //searchString
                    .subscribe(function (users) {
                    //console.log('Filter layer 1 contests');
                    //console.log(contests);
                    var unfilteredUsers = users;
                    var filteredUsers = unfilteredUsers.filter(function (item) { return item.userBlocked == _this.userBlocked; });
                    //console.log('Filter layer 2 contests');
                    //console.log(filteredContests);
                    _this.users = filteredUsers;
                    _this.cdRef.detectChanges();
                }, function (error) {
                    _this.notificationsService.error(error.title, error.error.message, { timeOut: 3000, showProgressBar: false });
                });
            });
        });
    };
    AdminManageUsersComponent.prototype.selectFirstTab = function () {
        var _this = this;
        this.firstTabActive = true;
        this.secondTabActive = false;
        if (this.userBlocked == false) {
        }
        else {
            //this.status = "Aktyvus";
            this.userBlocked = false;
            this.isLoading = true;
            this.searchElRef.nativeElement.value = '';
            this.apiService.getFilteredUsers("") // = get all
                .subscribe(function (users) {
                console.log(users);
                var unfilteredUsers = users;
                var filteredUsers = unfilteredUsers.filter(function (item) { return item.userBlocked == _this.userBlocked; });
                console.log('Filter layer 2 contests');
                console.log(filteredUsers);
                _this.users = filteredUsers;
                _this.cdRef.detectChanges();
                _this.isLoading = false;
            }, function (error) {
                _this.isLoading = false;
                _this.notificationsService.error(error.title, error.error.message, { timeOut: 3000, showProgressBar: false });
            });
        }
    };
    AdminManageUsersComponent.prototype.selectSecondTab = function () {
        var _this = this;
        this.firstTabActive = false;
        this.secondTabActive = true;
        if (this.userBlocked) {
        }
        else {
            //this.status = "Užbaigtas";
            this.userBlocked = true;
            this.isLoading = true;
            this.searchElRef.nativeElement.value = '';
            this.apiService.getFilteredUsers("") // = get all
                .subscribe(function (users) {
                //console.log('Filter layer 1 contests');
                //console.log(contests);
                var unfilteredUsers = users;
                var filteredUsers = unfilteredUsers.filter(function (item) { return item.userBlocked == _this.userBlocked; });
                //console.log('Filter layer 2 contests');
                //console.log(filteredContests);
                _this.users = filteredUsers;
                _this.cdRef.detectChanges();
                _this.isLoading = false;
            }, function (error) {
                _this.isLoading = false;
                _this.notificationsService.error(error.title, error.error.message, { timeOut: 3000, showProgressBar: false });
            });
        }
    };
    AdminManageUsersComponent.prototype.goToUserDetails = function (nickname) {
        this.router.navigate(['/admin', 'vartotojai', nickname]);
    };
    AdminManageUsersComponent.prototype.belongsToUser = function (userId) {
        return sessionStorage.getItem('userId') == userId;
    };
    AdminManageUsersComponent.prototype.goBackToAdminPanel = function () {
        this.router.navigate(['/admin']);
    };
    __decorate([
        core_1.ViewChild('search'), 
        __metadata('design:type', core_1.ElementRef)
    ], AdminManageUsersComponent.prototype, "searchElRef", void 0);
    __decorate([
        core_1.ViewChild('searchfilter'), 
        __metadata('design:type', core_1.ElementRef)
    ], AdminManageUsersComponent.prototype, "searchFilterRef", void 0);
    AdminManageUsersComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'selector',
            templateUrl: 'admin-manage-users.component.html',
            styleUrls: ['admin-manage-users.component.css']
        }), 
        __metadata('design:paramtypes', [contests_service_1.ContestsService, index_1.ErrorService, api_service_1.ApiService, angular2_notifications_1.NotificationsService, core_1.NgZone, core_1.ChangeDetectorRef, router_1.Router])
    ], AdminManageUsersComponent);
    return AdminManageUsersComponent;
}());
exports.AdminManageUsersComponent = AdminManageUsersComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvYWRtaW4vYWRtaW4tbWFuYWdlLXVzZXJzLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQW9GLGVBQWUsQ0FBQyxDQUFBO0FBQ3BHLHVCQUF1QixpQkFBaUIsQ0FBQyxDQUFBO0FBRXpDLGlDQUFnQyxpQ0FBaUMsQ0FBQyxDQUFBO0FBQ2xFLDRCQUEyQiw0QkFBNEIsQ0FBQyxDQUFBO0FBQ3hELHNCQUE2QixvQkFBb0IsQ0FBQyxDQUFBO0FBQ2xELHVDQUFxQyx3QkFBd0IsQ0FBQyxDQUFBO0FBQzlELDJCQUEyQixpQkFBaUIsQ0FBQyxDQUFBO0FBQzdDLFFBQU8sU0FBUyxDQUFDLENBQUE7QUFRakI7SUFnQkUsbUNBQW9CLGVBQWdDLEVBQ2hDLFlBQTBCLEVBQzFCLFVBQXNCLEVBQ3RCLG9CQUEwQyxFQUMxQyxNQUFjLEVBQ2QsS0FBd0IsRUFDeEIsTUFBYztRQU5kLG9CQUFlLEdBQWYsZUFBZSxDQUFpQjtRQUNoQyxpQkFBWSxHQUFaLFlBQVksQ0FBYztRQUMxQixlQUFVLEdBQVYsVUFBVSxDQUFZO1FBQ3RCLHlCQUFvQixHQUFwQixvQkFBb0IsQ0FBc0I7UUFDMUMsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUNkLFVBQUssR0FBTCxLQUFLLENBQW1CO1FBQ3hCLFdBQU0sR0FBTixNQUFNLENBQVE7UUFyQmxDLGFBQVEsR0FBUSxFQUFFLENBQUM7UUFDbkIsY0FBUyxHQUFHLEtBQUssQ0FBQztRQUNsQiw0QkFBNEI7UUFDNUIsbUJBQWMsR0FBRyxJQUFJLENBQUM7UUFDdEIsb0JBQWUsR0FBRyxLQUFLLENBQUM7UUFDeEIsbUJBQWMsR0FBRyxFQUFFLENBQUM7UUFDcEIsbUJBQWMsR0FBRyxFQUFFLENBQUM7UUFHcEIsVUFBSyxHQUFHLEVBQUUsQ0FBQztRQUNYLGdCQUFXLEdBQUcsS0FBSyxDQUFDO1FBQ2IsWUFBTyxHQUFHO1lBQ2IsUUFBUSxFQUFFLENBQUMsS0FBSyxFQUFDLE9B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QU0sQ0FBQztJQUNwRCxDQUFDO0lBRUQsc0RBQWtCLEdBQWxCO1FBQ0UsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO0lBQ25DLENBQUM7SUF6SUQ7UUFBQyxnQkFBUyxDQUFDLFFBQVEsQ0FBQzs7a0VBQUE7SUFDcEI7UUFBQyxnQkFBUyxDQUFDLGNBQWMsQ0FBQzs7c0VBQUE7SUFmNUI7UUFBQyxnQkFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFFBQVEsRUFBRSxVQUFVO1lBQ3BCLFdBQVcsRUFBRSxtQ0FBbUM7WUFDaEQsU0FBUyxFQUFFLENBQUMsa0NBQWtDLENBQUM7U0FDaEQsQ0FBQzs7aUNBQUE7SUFtSkYsZ0NBQUM7QUFBRCxDQWxKQSxBQWtKQyxJQUFBO0FBbEpZLGlDQUF5Qiw0QkFrSnJDLENBQUEiLCJmaWxlIjoiY29tcG9uZW50cy9hZG1pbi9hZG1pbi1tYW5hZ2UtdXNlcnMuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIFZpZXdDaGlsZCwgRWxlbWVudFJlZiwgTmdab25lLCBDaGFuZ2VEZXRlY3RvclJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5pbXBvcnQgeyBDb250ZXN0IH0gZnJvbSAnLi4vLi4vbW9kZWxzL2NvbnRlc3QnO1xyXG5pbXBvcnQgeyBDb250ZXN0c1NlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9jb250ZXN0cy5zZXJ2aWNlJztcclxuaW1wb3J0IHsgQXBpU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL2FwaS5zZXJ2aWNlJztcclxuaW1wb3J0IHsgRXJyb3JTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vZXJyb3JzL2luZGV4JztcclxuaW1wb3J0IHsgTm90aWZpY2F0aW9uc1NlcnZpY2UgfSBmcm9tICdhbmd1bGFyMi1ub3RpZmljYXRpb25zJztcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMvT2JzZXJ2YWJsZSc7XHJcbmltcG9ydCAncnhqcy9SeCc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBtb2R1bGVJZDogbW9kdWxlLmlkLFxyXG4gIHNlbGVjdG9yOiAnc2VsZWN0b3InLFxyXG4gIHRlbXBsYXRlVXJsOiAnYWRtaW4tbWFuYWdlLXVzZXJzLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnYWRtaW4tbWFuYWdlLXVzZXJzLmNvbXBvbmVudC5jc3MnXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgQWRtaW5NYW5hZ2VVc2Vyc0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgY29udGVzdHM6IGFueSA9IFtdO1xyXG4gIGlzTG9hZGluZyA9IGZhbHNlO1xyXG4gIC8vc3RhdHVzID0gXCJOZXBhdHZpcnRpbnRhc1wiO1xyXG4gIGZpcnN0VGFiQWN0aXZlID0gdHJ1ZTtcclxuICBzZWNvbmRUYWJBY3RpdmUgPSBmYWxzZTtcclxuICBhbGxBY3RpdmVVc2VycyA9IFtdO1xyXG4gIGFsbEJhbm5lZFVzZXJzID0gW107XHJcbiAgQFZpZXdDaGlsZCgnc2VhcmNoJykgc2VhcmNoRWxSZWY6IEVsZW1lbnRSZWY7XHJcbiAgQFZpZXdDaGlsZCgnc2VhcmNoZmlsdGVyJykgc2VhcmNoRmlsdGVyUmVmOiBFbGVtZW50UmVmO1xyXG4gIHVzZXJzID0gW107XHJcbiAgdXNlckJsb2NrZWQgPSBmYWxzZTtcclxuICBwdWJsaWMgb3B0aW9ucyA9IHtcclxuICAgICAgcG9zaXRpb246IFtcInRvcFwiLFwicmlnaHRcIl1cclxuICAgIH07XHJcbiAgXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBjb250ZXN0c1NlcnZpY2U6IENvbnRlc3RzU2VydmljZSwgXHJcbiAgICAgICAgICAgICAgcHJpdmF0ZSBlcnJvclNlcnZpY2U6IEVycm9yU2VydmljZSxcclxuICAgICAgICAgICAgICBwcml2YXRlIGFwaVNlcnZpY2U6IEFwaVNlcnZpY2UsXHJcbiAgICAgICAgICAgICAgcHJpdmF0ZSBub3RpZmljYXRpb25zU2VydmljZTogTm90aWZpY2F0aW9uc1NlcnZpY2UsXHJcbiAgICAgICAgICAgICAgcHJpdmF0ZSBuZ3pvbmU6IE5nWm9uZSxcclxuICAgICAgICAgICAgICBwcml2YXRlIGNkUmVmOiBDaGFuZ2VEZXRlY3RvclJlZixcclxuICAgICAgICAgICAgICBwcml2YXRlIHJvdXRlcjogUm91dGVyKSB7IH1cclxuXHJcbiAgbmdPbkluaXQoKSB7IFxyXG4gICAgdGhpcy5pc0xvYWRpbmcgPSB0cnVlO1xyXG4gICAgdGhpcy5hcGlTZXJ2aWNlLmdldEFsbFVzZXJzKClcclxuICAgIC5zdWJzY3JpYmUodXNlcnMgPT4ge1xyXG4gICAgICAvL3ZhciB1bmZpbHRlcmVkQ29udGVzdHMgPSBjb250ZXN0cztcclxuICAgICAgLy8gdmFyIGZpbHRlcmVkQWN0aXZlQ29udGVzdHMgPSB1bmZpbHRlcmVkQ29udGVzdHMuZmlsdGVyKChpdGVtOiBhbnkpID0+IGl0ZW0uc3RhdHVzID09IHRoaXMuc3RhdHVzKTtcclxuICAgICAgLy8gdmFyIGZpbHRlcmVkRmluaXNoZWRDb250ZXN0cyA9IHVuZmlsdGVyZWRDb250ZXN0cy5maWx0ZXIoKGl0ZW06IGFueSkgPT4gaXRlbS5zdGF0dXMgPT0gXCJVxb5iYWlndGFzXCIpO1xyXG4gICAgICB0aGlzLmFsbEFjdGl2ZVVzZXJzID0gdXNlcnMuZmlsdGVyKChpdGVtOiBhbnkpID0+IGl0ZW0udXNlckJsb2NrZWQgPT0gdGhpcy51c2VyQmxvY2tlZCk7XHJcbiAgICAgIHRoaXMuYWxsQmFubmVkVXNlcnMgPSB1c2Vycy5maWx0ZXIoKGl0ZW06IGFueSkgPT4gaXRlbS51c2VyQmxvY2tlZCA9PSAhdGhpcy51c2VyQmxvY2tlZCk7XHJcbiAgICAgIHRoaXMudXNlcnMgPSB0aGlzLmFsbEFjdGl2ZVVzZXJzO1xyXG4gICAgICB0aGlzLmlzTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICBjb25zb2xlLmxvZyh0aGlzLnVzZXJzKTtcclxuICAgIH0sIGVycm9yID0+IHtcclxuICAgICAgdGhpcy5pc0xvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgdGhpcy5ub3RpZmljYXRpb25zU2VydmljZS5lcnJvcihlcnJvci50aXRsZSwgZXJyb3IuZXJyb3IubWVzc2FnZSwge3RpbWVPdXQ6IDMwMDAsIHNob3dQcm9ncmVzc0JhcjogZmFsc2V9KVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBuZ0FmdGVyVmlld0luaXQoKSB7XHJcbiAgICB0aGlzLm5nem9uZS5ydW5PdXRzaWRlQW5ndWxhcigoKSA9PiB7XHJcbiAgICAgIE9ic2VydmFibGUuZnJvbUV2ZW50KHRoaXMuc2VhcmNoRWxSZWYubmF0aXZlRWxlbWVudCwgJ2tleXVwJylcclxuICAgICAgLmRlYm91bmNlVGltZSgxMDAwKVxyXG4gICAgICAuZGlzdGluY3RVbnRpbENoYW5nZWQoKSAvLyBUT0RPIFVwZGF0ZTogbm90IHdvcmtpbmcuIE5lZWRzIGEgY3VzdG9tIGNhbGxiYWNrIHRvIGNoZWNrIGZvciB3aGl0ZXNwYWNlIGRpZmZlcmVuY2VzXHJcbiAgICAgIC5zdWJzY3JpYmUoZXZlbnQgPT4ge1xyXG4gICAgICAgIHRoaXMuYXBpU2VydmljZS5nZXRGaWx0ZXJlZFVzZXJzKGV2ZW50LnRhcmdldC52YWx1ZSkgLy9zZWFyY2hTdHJpbmdcclxuICAgICAgICAuc3Vic2NyaWJlKHVzZXJzID0+IHtcclxuICAgICAgICAgIHRoaXMudXNlcnMgPSB1c2VycztcclxuICAgICAgICAgIHRoaXMuY2RSZWYuZGV0ZWN0Q2hhbmdlcygpO1xyXG4gICAgICAgIH0sIGVycm9yID0+IHtcclxuICAgICAgICAgIHRoaXMubm90aWZpY2F0aW9uc1NlcnZpY2UuZXJyb3IoZXJyb3IudGl0bGUsIGVycm9yLmVycm9yLm1lc3NhZ2UsIHt0aW1lT3V0OiAzMDAwLCBzaG93UHJvZ3Jlc3NCYXI6IGZhbHNlfSlcclxuICAgICAgICB9KTtcclxuICAgICAgfSk7XHJcbiAgICB9KTtcclxuXHJcbiAgICB0aGlzLm5nem9uZS5ydW5PdXRzaWRlQW5ndWxhcigoKSA9PiB7XHJcbiAgICAgIE9ic2VydmFibGUuZnJvbUV2ZW50KHRoaXMuc2VhcmNoRmlsdGVyUmVmLm5hdGl2ZUVsZW1lbnQsICdrZXl1cCcpXHJcbiAgICAgIC5kZWJvdW5jZVRpbWUoMTAwMClcclxuICAgICAgLmRpc3RpbmN0VW50aWxDaGFuZ2VkKCkgLy8gVE9ETyBVcGRhdGU6IG5vdCB3b3JraW5nLiBOZWVkcyBhIGN1c3RvbSBjYWxsYmFjayB0byBjaGVjayBmb3Igd2hpdGVzcGFjZSBkaWZmZXJlbmNlc1xyXG4gICAgICAuc3Vic2NyaWJlKGV2ZW50ID0+IHtcclxuICAgICAgICB0aGlzLmFwaVNlcnZpY2UuZ2V0RmlsdGVyZWRVc2VycyhldmVudC50YXJnZXQudmFsdWUpIC8vc2VhcmNoU3RyaW5nXHJcbiAgICAgICAgLnN1YnNjcmliZSh1c2VycyA9PiB7XHJcbiAgICAgICAgICAvL2NvbnNvbGUubG9nKCdGaWx0ZXIgbGF5ZXIgMSBjb250ZXN0cycpO1xyXG4gICAgICAgICAgLy9jb25zb2xlLmxvZyhjb250ZXN0cyk7XHJcbiAgICAgICAgICB2YXIgdW5maWx0ZXJlZFVzZXJzID0gdXNlcnM7XHJcbiAgICAgICAgICB2YXIgZmlsdGVyZWRVc2VycyA9IHVuZmlsdGVyZWRVc2Vycy5maWx0ZXIoKGl0ZW06IGFueSkgPT4gaXRlbS51c2VyQmxvY2tlZCA9PSB0aGlzLnVzZXJCbG9ja2VkKTtcclxuICAgICAgICAgIC8vY29uc29sZS5sb2coJ0ZpbHRlciBsYXllciAyIGNvbnRlc3RzJyk7XHJcbiAgICAgICAgICAvL2NvbnNvbGUubG9nKGZpbHRlcmVkQ29udGVzdHMpO1xyXG4gICAgICAgICAgdGhpcy51c2VycyA9IGZpbHRlcmVkVXNlcnM7XHJcbiAgICAgICAgICB0aGlzLmNkUmVmLmRldGVjdENoYW5nZXMoKTtcclxuICAgICAgICB9LCBlcnJvciA9PiB7XHJcbiAgICAgICAgICB0aGlzLm5vdGlmaWNhdGlvbnNTZXJ2aWNlLmVycm9yKGVycm9yLnRpdGxlLCBlcnJvci5lcnJvci5tZXNzYWdlLCB7dGltZU91dDogMzAwMCwgc2hvd1Byb2dyZXNzQmFyOiBmYWxzZX0pXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBzZWxlY3RGaXJzdFRhYigpIHtcclxuICAgIHRoaXMuZmlyc3RUYWJBY3RpdmUgPSB0cnVlO1xyXG4gICAgdGhpcy5zZWNvbmRUYWJBY3RpdmUgPSBmYWxzZTtcclxuICAgIGlmICh0aGlzLnVzZXJCbG9ja2VkID09IGZhbHNlKSB7XHJcbiAgICAgIC8vZG8gbm90aGluZ1xyXG4gICAgfSBlbHNlIHtcclxuICAgIC8vdGhpcy5zdGF0dXMgPSBcIkFrdHl2dXNcIjtcclxuICAgIHRoaXMudXNlckJsb2NrZWQgPSBmYWxzZTtcclxuICAgIHRoaXMuaXNMb2FkaW5nID0gdHJ1ZTtcclxuICAgIHRoaXMuc2VhcmNoRWxSZWYubmF0aXZlRWxlbWVudC52YWx1ZSA9ICcnO1xyXG4gICAgdGhpcy5hcGlTZXJ2aWNlLmdldEZpbHRlcmVkVXNlcnMoXCJcIikgLy8gPSBnZXQgYWxsXHJcbiAgICAgICAgLnN1YnNjcmliZSh1c2VycyA9PiB7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyh1c2Vycyk7XHJcbiAgICAgICAgICB2YXIgdW5maWx0ZXJlZFVzZXJzID0gdXNlcnM7XHJcbiAgICAgICAgICB2YXIgZmlsdGVyZWRVc2VycyA9IHVuZmlsdGVyZWRVc2Vycy5maWx0ZXIoKGl0ZW06IGFueSkgPT4gaXRlbS51c2VyQmxvY2tlZCA9PSB0aGlzLnVzZXJCbG9ja2VkKTtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKCdGaWx0ZXIgbGF5ZXIgMiBjb250ZXN0cycpO1xyXG4gICAgICAgICAgY29uc29sZS5sb2coZmlsdGVyZWRVc2Vycyk7XHJcbiAgICAgICAgICB0aGlzLnVzZXJzID0gZmlsdGVyZWRVc2VycztcclxuICAgICAgICAgIHRoaXMuY2RSZWYuZGV0ZWN0Q2hhbmdlcygpO1xyXG4gICAgICAgICAgdGhpcy5pc0xvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICB9LCBlcnJvciA9PiB7XHJcbiAgICAgICAgICB0aGlzLmlzTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgdGhpcy5ub3RpZmljYXRpb25zU2VydmljZS5lcnJvcihlcnJvci50aXRsZSwgZXJyb3IuZXJyb3IubWVzc2FnZSwge3RpbWVPdXQ6IDMwMDAsIHNob3dQcm9ncmVzc0JhcjogZmFsc2V9KVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgc2VsZWN0U2Vjb25kVGFiKCkge1xyXG4gICAgdGhpcy5maXJzdFRhYkFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgdGhpcy5zZWNvbmRUYWJBY3RpdmUgPSB0cnVlO1xyXG4gICAgaWYgKHRoaXMudXNlckJsb2NrZWQpIHtcclxuICAgICAgLy9kbyBub3RoaW5nXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgLy90aGlzLnN0YXR1cyA9IFwiVcW+YmFpZ3Rhc1wiO1xyXG4gICAgdGhpcy51c2VyQmxvY2tlZCA9IHRydWU7XHJcbiAgICB0aGlzLmlzTG9hZGluZyA9IHRydWU7XHJcbiAgICB0aGlzLnNlYXJjaEVsUmVmLm5hdGl2ZUVsZW1lbnQudmFsdWUgPSAnJztcclxuICAgIHRoaXMuYXBpU2VydmljZS5nZXRGaWx0ZXJlZFVzZXJzKFwiXCIpIC8vID0gZ2V0IGFsbFxyXG4gICAgICAgIC5zdWJzY3JpYmUodXNlcnMgPT4ge1xyXG4gICAgICAgICAgLy9jb25zb2xlLmxvZygnRmlsdGVyIGxheWVyIDEgY29udGVzdHMnKTtcclxuICAgICAgICAgIC8vY29uc29sZS5sb2coY29udGVzdHMpO1xyXG4gICAgICAgICAgdmFyIHVuZmlsdGVyZWRVc2VycyA9IHVzZXJzO1xyXG4gICAgICAgICAgdmFyIGZpbHRlcmVkVXNlcnMgPSB1bmZpbHRlcmVkVXNlcnMuZmlsdGVyKChpdGVtOiBhbnkpID0+IGl0ZW0udXNlckJsb2NrZWQgPT0gdGhpcy51c2VyQmxvY2tlZCk7XHJcbiAgICAgICAgICAvL2NvbnNvbGUubG9nKCdGaWx0ZXIgbGF5ZXIgMiBjb250ZXN0cycpO1xyXG4gICAgICAgICAgLy9jb25zb2xlLmxvZyhmaWx0ZXJlZENvbnRlc3RzKTtcclxuICAgICAgICAgIHRoaXMudXNlcnMgPSBmaWx0ZXJlZFVzZXJzO1xyXG4gICAgICAgICAgdGhpcy5jZFJlZi5kZXRlY3RDaGFuZ2VzKCk7XHJcbiAgICAgICAgICB0aGlzLmlzTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgIH0sIGVycm9yID0+IHtcclxuICAgICAgICAgIHRoaXMuaXNMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICB0aGlzLm5vdGlmaWNhdGlvbnNTZXJ2aWNlLmVycm9yKGVycm9yLnRpdGxlLCBlcnJvci5lcnJvci5tZXNzYWdlLCB7dGltZU91dDogMzAwMCwgc2hvd1Byb2dyZXNzQmFyOiBmYWxzZX0pXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBnb1RvVXNlckRldGFpbHMobmlja25hbWU6IHN0cmluZykge1xyXG4gICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoWycvYWRtaW4nLCAndmFydG90b2phaScsIG5pY2tuYW1lXSk7XHJcbiAgfVxyXG5cclxuICBiZWxvbmdzVG9Vc2VyKHVzZXJJZDogc3RyaW5nKSB7XHJcbiAgICByZXR1cm4gc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbSgndXNlcklkJykgPT0gdXNlcklkO1xyXG4gIH1cclxuXHJcbiAgZ29CYWNrVG9BZG1pblBhbmVsKCkge1xyXG4gICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoWycvYWRtaW4nXSk7XHJcbiAgfVxyXG59Il19
