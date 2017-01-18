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
            _this.allActiveUsers = users.filter(function (item) { return item.userBlocked == _this.userBlocked; });
            _this.allBannedUsers = users.filter(function (item) { return item.userBlocked == !_this.userBlocked; });
            _this.users = _this.allActiveUsers;
            _this.isLoading = false;
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
                    var unfilteredUsers = users;
                    var filteredUsers = unfilteredUsers.filter(function (item) { return item.userBlocked == _this.userBlocked; });
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
            this.userBlocked = false;
            this.isLoading = true;
            this.searchElRef.nativeElement.value = '';
            this.apiService.getFilteredUsers("") // = get all
                .subscribe(function (users) {
                var unfilteredUsers = users;
                var filteredUsers = unfilteredUsers.filter(function (item) { return item.userBlocked == _this.userBlocked; });
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
                var unfilteredUsers = users;
                var filteredUsers = unfilteredUsers.filter(function (item) { return item.userBlocked == _this.userBlocked; });
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
    AdminManageUsersComponent.prototype.blockUser = function (nickname) {
        var _this = this;
        this.isLoading = true;
        this.apiService.updateUserStatus(nickname, true)
            .subscribe(function (res) {
            _this.notificationsService.info('Užblokuota', 'Vartotojas sėkmingai užblokuotas', { timeOut: 3000, showProgressBar: false });
            _this.isLoading = false;
            _this.router.navigate(['/admin', 'vartotojai', nickname]);
        }, function (error) {
            _this.isLoading = false;
            _this.notificationsService.error(error.title, error.error.message, { timeOut: 3000, showProgressBar: false });
        });
    };
    AdminManageUsersComponent.prototype.unblockUser = function (nickname) {
        var _this = this;
        this.isLoading = true;
        this.apiService.updateUserStatus(nickname, false)
            .subscribe(function (res) {
            _this.notificationsService.info('Atblokuota', 'Vartotojas sėkmingai atblokuotas', { timeOut: 3000, showProgressBar: false });
            _this.isLoading = false;
            _this.router.navigate(['/admin', 'vartotojai', nickname]);
        }, function (error) {
            _this.isLoading = false;
            _this.notificationsService.error(error.title, error.error.message, { timeOut: 3000, showProgressBar: false });
        });
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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvYWRtaW4vYWRtaW4tbWFuYWdlLXVzZXJzLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQW9GLGVBQWUsQ0FBQyxDQUFBO0FBQ3BHLHVCQUF1QixpQkFBaUIsQ0FBQyxDQUFBO0FBRXpDLGlDQUFnQyxpQ0FBaUMsQ0FBQyxDQUFBO0FBQ2xFLDRCQUEyQiw0QkFBNEIsQ0FBQyxDQUFBO0FBQ3hELHNCQUE2QixvQkFBb0IsQ0FBQyxDQUFBO0FBQ2xELHVDQUFxQyx3QkFBd0IsQ0FBQyxDQUFBO0FBQzlELDJCQUEyQixpQkFBaUIsQ0FBQyxDQUFBO0FBQzdDLFFBQU8sU0FBUyxDQUFDLENBQUE7QUFRakI7SUFlRSxtQ0FBb0IsZUFBZ0MsRUFDaEMsWUFBMEIsRUFDMUIsVUFBc0IsRUFDdEIsb0JBQTBDLEVBQzFDLE1BQWMsRUFDZCxLQUF3QixFQUN4QixNQUFjO1FBTmQsb0JBQWUsR0FBZixlQUFlLENBQWlCO1FBQ2hDLGlCQUFZLEdBQVosWUFBWSxDQUFjO1FBQzFCLGVBQVUsR0FBVixVQUFVLENBQVk7UUFDdEIseUJBQW9CLEdBQXBCLG9CQUFvQixDQUFzQjtRQUMxQyxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQ2QsVUFBSyxHQUFMLEtBQUssQ0FBbUI7UUFDeEIsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQXBCbEMsYUFBUSxHQUFRLEVBQUUsQ0FBQztRQUNuQixjQUFTLEdBQUcsS0FBSyxDQUFDO1FBQ2xCLG1CQUFjLEdBQUcsSUFBSSxDQUFDO1FBQ3RCLG9CQUFlLEdBQUcsS0FBSyxDQUFDO1FBQ3hCLG1CQUFjLEdBQUcsRUFBRSxDQUFDO1FBQ3BCLG1CQUFjLEdBQUcsRUFBRSxDQUFDO1FBR3BCLFVBQUssR0FBRyxFQUFFLENBQUM7UUFDWCxnQkFBVyxHQUFHLEtBQUssQ0FBQztRQUNiLFlBQU8sR0FBRztZQUNiLFFBQVEsRUFBRSxDQUFDLEtBQUssRUFBQyxPQUFPLENBQUM7U0FDMUIs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QyxPQUFPLEVBQUUsRUFBQyxPQUFPLEVBQUUsSUFBSSxFQUFFLGVBQWUsRUFBRSxLQUFLLEVBQUMsQ0FBQyxDQUFBO1FBQzVHLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQW5KRDtRQUFDLGdCQUFTLENBQUMsUUFBUSxDQUFDOztrRUFBQTtJQUNwQjtRQUFDLGdCQUFTLENBQUMsY0FBYyxDQUFDOztzRUFBQTtJQWQ1QjtRQUFDLGdCQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsUUFBUSxFQUFFLFVBQVU7WUFDcEIsV0FBVyxFQUFFLG1DQUFtQztZQUNoRCxTQUFTLEVBQUUsQ0FBQyxrQ0FBa0MsQ0FBQztTQUNoRCxDQUFDOztpQ0FBQTtJQThKRixnQ0FBQztBQUFELENBN0pBLEFBNkpDLElBQUE7QUE3SlksaUNBQXlCLDRCQTZKckMsQ0FBQSIsImZpbGUiOiJjb21wb25lbnRzL2FkbWluL2FkbWluLW1hbmFnZS11c2Vycy5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgVmlld0NoaWxkLCBFbGVtZW50UmVmLCBOZ1pvbmUsIENoYW5nZURldGVjdG9yUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcbmltcG9ydCB7IENvbnRlc3QgfSBmcm9tICcuLi8uLi9tb2RlbHMvY29udGVzdCc7XHJcbmltcG9ydCB7IENvbnRlc3RzU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL2NvbnRlc3RzLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBBcGlTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvYXBpLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBFcnJvclNlcnZpY2UgfSBmcm9tICcuLi8uLi9lcnJvcnMvaW5kZXgnO1xyXG5pbXBvcnQgeyBOb3RpZmljYXRpb25zU2VydmljZSB9IGZyb20gJ2FuZ3VsYXIyLW5vdGlmaWNhdGlvbnMnO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcy9PYnNlcnZhYmxlJztcclxuaW1wb3J0ICdyeGpzL1J4JztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIG1vZHVsZUlkOiBtb2R1bGUuaWQsXHJcbiAgc2VsZWN0b3I6ICdzZWxlY3RvcicsXHJcbiAgdGVtcGxhdGVVcmw6ICdhZG1pbi1tYW5hZ2UtdXNlcnMuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWydhZG1pbi1tYW5hZ2UtdXNlcnMuY29tcG9uZW50LmNzcyddXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBBZG1pbk1hbmFnZVVzZXJzQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuICBjb250ZXN0czogYW55ID0gW107XHJcbiAgaXNMb2FkaW5nID0gZmFsc2U7XHJcbiAgZmlyc3RUYWJBY3RpdmUgPSB0cnVlO1xyXG4gIHNlY29uZFRhYkFjdGl2ZSA9IGZhbHNlO1xyXG4gIGFsbEFjdGl2ZVVzZXJzID0gW107XHJcbiAgYWxsQmFubmVkVXNlcnMgPSBbXTtcclxuICBAVmlld0NoaWxkKCdzZWFyY2gnKSBzZWFyY2hFbFJlZjogRWxlbWVudFJlZjtcclxuICBAVmlld0NoaWxkKCdzZWFyY2hmaWx0ZXInKSBzZWFyY2hGaWx0ZXJSZWY6IEVsZW1lbnRSZWY7XHJcbiAgdXNlcnMgPSBbXTtcclxuICB1c2VyQmxvY2tlZCA9IGZhbHNlO1xyXG4gIHB1YmxpYyBvcHRpb25zID0ge1xyXG4gICAgICBwb3NpdGlvbjogW1widG9wXCIsXCJyaWdodFwiXVxyXG4gICAgfTtcclxuICBcclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGNvbnRlc3RzU2VydmljZTogQ29udGVzdHNTZXJ2aWNlLCBcclxuICAgICAgICAgICAgICBwcml2YXRlIGVycm9yU2VydmljZTogRXJyb3JTZXJ2aWNlLFxyXG4gICAgICAgICAgICAgIHByaXZhdGUgYXBpU2VydmljZTogQXBpU2VydmljZSxcclxuICAgICAgICAgICAgICBwcml2YXRlIG5vdGlmaWNhdGlvbnNTZXJ2aWNlOiBOb3RpZmljYXRpb25zU2VydmljZSxcclxuICAgICAgICAgICAgICBwcml2YXRlIG5nem9uZTogTmdab25lLFxyXG4gICAgICAgICAgICAgIHByaXZhdGUgY2RSZWY6IENoYW5nZURldGVjdG9yUmVmLFxyXG4gICAgICAgICAgICAgIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIpIHsgfVxyXG5cclxuICBuZ09uSW5pdCgpIHsgXHJcbiAgICB0aGlzLmlzTG9hZGluZyA9IHRydWU7XHJcbiAgICB0aGlzLmFwaVNlcnZpY2UuZ2V0QWxsVXNlcnMoKVxyXG4gICAgLnN1YnNjcmliZSh1c2VycyA9PiB7XHJcbiAgICAgIHRoaXMuYWxsQWN0aXZlVXNlcnMgPSB1c2Vycy5maWx0ZXIoKGl0ZW06IGFueSkgPT4gaXRlbS51c2VyQmxvY2tlZCA9PSB0aGlzLnVzZXJCbG9ja2VkKTtcclxuICAgICAgdGhpcy5hbGxCYW5uZWRVc2VycyA9IHVzZXJzLmZpbHRlcigoaXRlbTogYW55KSA9PiBpdGVtLnVzZXJCbG9ja2VkID09ICF0aGlzLnVzZXJCbG9ja2VkKTtcclxuICAgICAgdGhpcy51c2VycyA9IHRoaXMuYWxsQWN0aXZlVXNlcnM7XHJcbiAgICAgIHRoaXMuaXNMb2FkaW5nID0gZmFsc2U7XHJcbiAgICB9LCBlcnJvciA9PiB7XHJcbiAgICAgIHRoaXMuaXNMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgIHRoaXMubm90aWZpY2F0aW9uc1NlcnZpY2UuZXJyb3IoZXJyb3IudGl0bGUsIGVycm9yLmVycm9yLm1lc3NhZ2UsIHt0aW1lT3V0OiAzMDAwLCBzaG93UHJvZ3Jlc3NCYXI6IGZhbHNlfSlcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgbmdBZnRlclZpZXdJbml0KCkge1xyXG4gICAgdGhpcy5uZ3pvbmUucnVuT3V0c2lkZUFuZ3VsYXIoKCkgPT4ge1xyXG4gICAgICBPYnNlcnZhYmxlLmZyb21FdmVudCh0aGlzLnNlYXJjaEVsUmVmLm5hdGl2ZUVsZW1lbnQsICdrZXl1cCcpXHJcbiAgICAgIC5kZWJvdW5jZVRpbWUoMTAwMClcclxuICAgICAgLmRpc3RpbmN0VW50aWxDaGFuZ2VkKCkgLy8gVE9ETyBVcGRhdGU6IG5vdCB3b3JraW5nLiBOZWVkcyBhIGN1c3RvbSBjYWxsYmFjayB0byBjaGVjayBmb3Igd2hpdGVzcGFjZSBkaWZmZXJlbmNlc1xyXG4gICAgICAuc3Vic2NyaWJlKGV2ZW50ID0+IHtcclxuICAgICAgICB0aGlzLmFwaVNlcnZpY2UuZ2V0RmlsdGVyZWRVc2VycyhldmVudC50YXJnZXQudmFsdWUpIC8vc2VhcmNoU3RyaW5nXHJcbiAgICAgICAgLnN1YnNjcmliZSh1c2VycyA9PiB7XHJcbiAgICAgICAgICB0aGlzLnVzZXJzID0gdXNlcnM7XHJcbiAgICAgICAgICB0aGlzLmNkUmVmLmRldGVjdENoYW5nZXMoKTtcclxuICAgICAgICB9LCBlcnJvciA9PiB7XHJcbiAgICAgICAgICB0aGlzLm5vdGlmaWNhdGlvbnNTZXJ2aWNlLmVycm9yKGVycm9yLnRpdGxlLCBlcnJvci5lcnJvci5tZXNzYWdlLCB7dGltZU91dDogMzAwMCwgc2hvd1Byb2dyZXNzQmFyOiBmYWxzZX0pXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcblxyXG4gICAgdGhpcy5uZ3pvbmUucnVuT3V0c2lkZUFuZ3VsYXIoKCkgPT4ge1xyXG4gICAgICBPYnNlcnZhYmxlLmZyb21FdmVudCh0aGlzLnNlYXJjaEZpbHRlclJlZi5uYXRpdmVFbGVtZW50LCAna2V5dXAnKVxyXG4gICAgICAuZGVib3VuY2VUaW1lKDEwMDApXHJcbiAgICAgIC5kaXN0aW5jdFVudGlsQ2hhbmdlZCgpIC8vIFRPRE8gVXBkYXRlOiBub3Qgd29ya2luZy4gTmVlZHMgYSBjdXN0b20gY2FsbGJhY2sgdG8gY2hlY2sgZm9yIHdoaXRlc3BhY2UgZGlmZmVyZW5jZXNcclxuICAgICAgLnN1YnNjcmliZShldmVudCA9PiB7XHJcbiAgICAgICAgdGhpcy5hcGlTZXJ2aWNlLmdldEZpbHRlcmVkVXNlcnMoZXZlbnQudGFyZ2V0LnZhbHVlKSAvL3NlYXJjaFN0cmluZ1xyXG4gICAgICAgIC5zdWJzY3JpYmUodXNlcnMgPT4ge1xyXG4gICAgICAgICAgdmFyIHVuZmlsdGVyZWRVc2VycyA9IHVzZXJzO1xyXG4gICAgICAgICAgdmFyIGZpbHRlcmVkVXNlcnMgPSB1bmZpbHRlcmVkVXNlcnMuZmlsdGVyKChpdGVtOiBhbnkpID0+IGl0ZW0udXNlckJsb2NrZWQgPT0gdGhpcy51c2VyQmxvY2tlZCk7XHJcbiAgICAgICAgICB0aGlzLnVzZXJzID0gZmlsdGVyZWRVc2VycztcclxuICAgICAgICAgIHRoaXMuY2RSZWYuZGV0ZWN0Q2hhbmdlcygpO1xyXG4gICAgICAgIH0sIGVycm9yID0+IHtcclxuICAgICAgICAgIHRoaXMubm90aWZpY2F0aW9uc1NlcnZpY2UuZXJyb3IoZXJyb3IudGl0bGUsIGVycm9yLmVycm9yLm1lc3NhZ2UsIHt0aW1lT3V0OiAzMDAwLCBzaG93UHJvZ3Jlc3NCYXI6IGZhbHNlfSlcclxuICAgICAgICB9KTtcclxuICAgICAgfSk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHNlbGVjdEZpcnN0VGFiKCkge1xyXG4gICAgdGhpcy5maXJzdFRhYkFjdGl2ZSA9IHRydWU7XHJcbiAgICB0aGlzLnNlY29uZFRhYkFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgaWYgKHRoaXMudXNlckJsb2NrZWQgPT0gZmFsc2UpIHtcclxuICAgICAgLy9kbyBub3RoaW5nXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgdGhpcy51c2VyQmxvY2tlZCA9IGZhbHNlO1xyXG4gICAgdGhpcy5pc0xvYWRpbmcgPSB0cnVlO1xyXG4gICAgdGhpcy5zZWFyY2hFbFJlZi5uYXRpdmVFbGVtZW50LnZhbHVlID0gJyc7XHJcbiAgICB0aGlzLmFwaVNlcnZpY2UuZ2V0RmlsdGVyZWRVc2VycyhcIlwiKSAvLyA9IGdldCBhbGxcclxuICAgICAgICAuc3Vic2NyaWJlKHVzZXJzID0+IHtcclxuICAgICAgICAgIHZhciB1bmZpbHRlcmVkVXNlcnMgPSB1c2VycztcclxuICAgICAgICAgIHZhciBmaWx0ZXJlZFVzZXJzID0gdW5maWx0ZXJlZFVzZXJzLmZpbHRlcigoaXRlbTogYW55KSA9PiBpdGVtLnVzZXJCbG9ja2VkID09IHRoaXMudXNlckJsb2NrZWQpO1xyXG4gICAgICAgICAgdGhpcy51c2VycyA9IGZpbHRlcmVkVXNlcnM7XHJcbiAgICAgICAgICB0aGlzLmNkUmVmLmRldGVjdENoYW5nZXMoKTtcclxuICAgICAgICAgIHRoaXMuaXNMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgfSwgZXJyb3IgPT4ge1xyXG4gICAgICAgICAgdGhpcy5pc0xvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgIHRoaXMubm90aWZpY2F0aW9uc1NlcnZpY2UuZXJyb3IoZXJyb3IudGl0bGUsIGVycm9yLmVycm9yLm1lc3NhZ2UsIHt0aW1lT3V0OiAzMDAwLCBzaG93UHJvZ3Jlc3NCYXI6IGZhbHNlfSlcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHNlbGVjdFNlY29uZFRhYigpIHtcclxuICAgIHRoaXMuZmlyc3RUYWJBY3RpdmUgPSBmYWxzZTtcclxuICAgIHRoaXMuc2Vjb25kVGFiQWN0aXZlID0gdHJ1ZTtcclxuICAgIGlmICh0aGlzLnVzZXJCbG9ja2VkKSB7XHJcbiAgICAgIC8vZG8gbm90aGluZ1xyXG4gICAgfSBlbHNlIHtcclxuICAgIC8vdGhpcy5zdGF0dXMgPSBcIlXFvmJhaWd0YXNcIjtcclxuICAgIHRoaXMudXNlckJsb2NrZWQgPSB0cnVlO1xyXG4gICAgdGhpcy5pc0xvYWRpbmcgPSB0cnVlO1xyXG4gICAgdGhpcy5zZWFyY2hFbFJlZi5uYXRpdmVFbGVtZW50LnZhbHVlID0gJyc7XHJcbiAgICB0aGlzLmFwaVNlcnZpY2UuZ2V0RmlsdGVyZWRVc2VycyhcIlwiKSAvLyA9IGdldCBhbGxcclxuICAgICAgICAuc3Vic2NyaWJlKHVzZXJzID0+IHtcclxuICAgICAgICAgIHZhciB1bmZpbHRlcmVkVXNlcnMgPSB1c2VycztcclxuICAgICAgICAgIHZhciBmaWx0ZXJlZFVzZXJzID0gdW5maWx0ZXJlZFVzZXJzLmZpbHRlcigoaXRlbTogYW55KSA9PiBpdGVtLnVzZXJCbG9ja2VkID09IHRoaXMudXNlckJsb2NrZWQpO1xyXG4gICAgICAgICAgdGhpcy51c2VycyA9IGZpbHRlcmVkVXNlcnM7XHJcbiAgICAgICAgICB0aGlzLmNkUmVmLmRldGVjdENoYW5nZXMoKTtcclxuICAgICAgICAgIHRoaXMuaXNMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgfSwgZXJyb3IgPT4ge1xyXG4gICAgICAgICAgdGhpcy5pc0xvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgIHRoaXMubm90aWZpY2F0aW9uc1NlcnZpY2UuZXJyb3IoZXJyb3IudGl0bGUsIGVycm9yLmVycm9yLm1lc3NhZ2UsIHt0aW1lT3V0OiAzMDAwLCBzaG93UHJvZ3Jlc3NCYXI6IGZhbHNlfSlcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGdvVG9Vc2VyRGV0YWlscyhuaWNrbmFtZTogc3RyaW5nKSB7XHJcbiAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJy9hZG1pbicsICd2YXJ0b3RvamFpJywgbmlja25hbWVdKTtcclxuICB9XHJcblxyXG4gIGJlbG9uZ3NUb1VzZXIodXNlcklkOiBzdHJpbmcpIHtcclxuICAgIHJldHVybiBzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKCd1c2VySWQnKSA9PSB1c2VySWQ7XHJcbiAgfVxyXG5cclxuICBnb0JhY2tUb0FkbWluUGFuZWwoKSB7XHJcbiAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJy9hZG1pbiddKTtcclxuICB9XHJcblxyXG4gIGJsb2NrVXNlcihuaWNrbmFtZTogc3RyaW5nKSB7XHJcbiAgICB0aGlzLmlzTG9hZGluZyA9IHRydWU7XHJcbiAgICB0aGlzLmFwaVNlcnZpY2UudXBkYXRlVXNlclN0YXR1cyhuaWNrbmFtZSwgdHJ1ZSlcclxuICAgIC5zdWJzY3JpYmUocmVzID0+IHtcclxuICAgICAgdGhpcy5ub3RpZmljYXRpb25zU2VydmljZS5pbmZvKCdVxb5ibG9rdW90YScsICdWYXJ0b3RvamFzIHPEl2ttaW5nYWkgdcW+Ymxva3VvdGFzJywge3RpbWVPdXQ6IDMwMDAsIHNob3dQcm9ncmVzc0JhcjogZmFsc2V9KTtcclxuICAgICAgdGhpcy5pc0xvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoWycvYWRtaW4nLCAndmFydG90b2phaScsIG5pY2tuYW1lXSk7XHJcbiAgICB9LCBlcnJvciA9PiB7XHJcbiAgICAgIHRoaXMuaXNMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgIHRoaXMubm90aWZpY2F0aW9uc1NlcnZpY2UuZXJyb3IoZXJyb3IudGl0bGUsIGVycm9yLmVycm9yLm1lc3NhZ2UsIHt0aW1lT3V0OiAzMDAwLCBzaG93UHJvZ3Jlc3NCYXI6IGZhbHNlfSlcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgdW5ibG9ja1VzZXIobmlja25hbWU6IHN0cmluZykge1xyXG4gICAgdGhpcy5pc0xvYWRpbmcgPSB0cnVlO1xyXG4gICAgdGhpcy5hcGlTZXJ2aWNlLnVwZGF0ZVVzZXJTdGF0dXMobmlja25hbWUsIGZhbHNlKVxyXG4gICAgLnN1YnNjcmliZShyZXMgPT4ge1xyXG4gICAgICB0aGlzLm5vdGlmaWNhdGlvbnNTZXJ2aWNlLmluZm8oJ0F0Ymxva3VvdGEnLCAnVmFydG90b2phcyBzxJdrbWluZ2FpIGF0Ymxva3VvdGFzJywge3RpbWVPdXQ6IDMwMDAsIHNob3dQcm9ncmVzc0JhcjogZmFsc2V9KTtcclxuICAgICAgdGhpcy5pc0xvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoWycvYWRtaW4nLCAndmFydG90b2phaScsIG5pY2tuYW1lXSk7XHJcbiAgICB9LCBlcnJvciA9PiB7XHJcbiAgICAgIHRoaXMuaXNMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgIHRoaXMubm90aWZpY2F0aW9uc1NlcnZpY2UuZXJyb3IoZXJyb3IudGl0bGUsIGVycm9yLmVycm9yLm1lc3NhZ2UsIHt0aW1lT3V0OiAzMDAwLCBzaG93UHJvZ3Jlc3NCYXI6IGZhbHNlfSlcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcblxyXG59Il19
