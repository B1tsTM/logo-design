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
var angular2_notifications_1 = require('angular2-notifications');
var MailCreateComponent = (function () {
    function MailCreateComponent(route, apiService, notificationsService, router) {
        this.route = route;
        this.apiService = apiService;
        this.notificationsService = notificationsService;
        this.router = router;
        this.isLoading = false;
        this.options = {
            position: ["top", "right"]
        };
    }
    MailCreateComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userId = sessionStorage.getItem('userId');
        this.apiService.getUserInfo(this.userId)
            .subscribe(function (res) {
            _this.sender = res;
            console.log('THIS.SENDER');
            console.log(_this.sender);
        }, function (error) {
            _this.notificationsService.error(error.title, error.error.message, { timeOut: 3000, showProgressBar: false });
        });
    };
    MailCreateComponent.prototype.sendMessage = function () {
        var _this = this;
        this.isLoading = true;
        this.apiService.sendMessage(this.nickname.nickName, this.topic, this.message, this.sender.nickName)
            .subscribe(function (res) {
            console.log(res);
            _this.notificationsService.success('Išsiųsta', 'Žinutė išsiųsta sėkmingai', { timeOut: 3000, showProgressBar: false });
            _this.router.navigate(['/profilis', 'pastas']);
            _this.isLoading = false;
        }, function (error) {
            _this.isLoading = false;
            _this.notificationsService.error(error.title, error.error.message, { timeOut: 3000, showProgressBar: false });
        });
    };
    MailCreateComponent.prototype.search = function (event) {
        var _this = this;
        this.apiService.searchUsers(event.query)
            .subscribe(function (res) {
            _this.results = res;
        }, function (error) {
            _this.notificationsService.error(error.title, error.error.message, { timeOut: 3000, showProgressBar: false });
        });
    };
    MailCreateComponent.prototype.onSelect = function (obj) {
        console.log(event);
        //this.nickname = obj.nickName;
    };
    MailCreateComponent.prototype.goBack = function () {
        this.router.navigate(['/profilis', 'pastas']);
    };
    MailCreateComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'mail-create',
            templateUrl: 'mail-create.component.html',
            styleUrls: ['mail-create.component.css']
        }), 
        __metadata('design:paramtypes', [router_1.ActivatedRoute, api_service_1.ApiService, angular2_notifications_1.NotificationsService, router_1.Router])
    ], MailCreateComponent);
    return MailCreateComponent;
}());
exports.MailCreateComponent = MailCreateComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvcHJvZmlsZS9tYWlsLWNyZWF0ZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUFrQyxlQUFlLENBQUMsQ0FBQTtBQUNsRCx1QkFBK0MsaUJBQWlCLENBQUMsQ0FBQTtBQUNqRSw0QkFBMkIsNEJBQTRCLENBQUMsQ0FBQTtBQUN4RCx1Q0FBcUMsd0JBQXdCLENBQUMsQ0FBQTtBQVE5RDtJQVdFLDZCQUFvQixLQUFxQixFQUNyQixVQUFzQixFQUN0QixvQkFBMEMsRUFDMUMsTUFBYztRQUhkLFVBQUssR0FBTCxLQUFLLENBQWdCO1FBQ3JCLGVBQVUsR0FBVixVQUFVLENBQVk7UUFDdEIseUJBQW9CLEdBQXBCLG9CQUFvQixDQUFzQjtRQUMxQyxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBUGxDLGNBQVMsR0FBWSxLQUFLLENBQUM7UUFDcEIsWUFBTyxHQUFHO1lBQ2IsUUFBUSxFQUFFLENBQUMsS0FBSyxFQUFDLE9BQU8sQ0FBQztTQUMxQixDQUFDO0lBSWtDLENBQUM7SUFFdkMsc0NBQVEsR0FBUjtRQUFBLGlCQVVDO1FBVEMsSUFBSSxDQUFDLE1BQU0sR0FBRyxjQUFjLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQy9DLElBQUksQ0FBQyxVQUFVLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUM7YUFDckMsU0FBUyxDQUFDLFVBQUEsR0FBRztZQUNaLEtBQUksQ0FBQyxNQUFNLEdBQUcsR0FBRyxDQUFDO1lBQ2xCLE9BQU8sQ0FBQyxHQUFHLENBQUMsYUFBYSxDQUFDLENBQUM7WUFDM0IsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDM0IsQ0FBQyxFQUFFLFVBQUEsS0FBSztZQUNOLEtBQUksQ0FBQyxvQkFBb0IsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLEtBQUssRUFBRSxLQUFLLENBQUMsS0FBSyxDQUFDLE9BQU8sRUFBRSxFQUFDLE9BQU8sRUFBRSxJQUFJLEVBQUUsZUFBZSxFQUFFLEtBQUssRUFBQyxDQUFDLENBQUE7UUFDNUcsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBRUQseUNBQVcsR0FBWDtRQUFBLGlCQVlDO1FBWEMsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUM7UUFDdEIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDO2FBQ2hHLFNBQVMsQ0FBQyxVQUFBLEdBQUc7WUFDWixPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQ2pCLEtBQUksQ0FBQyxvQkFBb0IsQ0FBQyxPQUFPLENBQUMsVUFBVSxFQUFFLDJCQUEyQixFQUFFLEVBQUMsT0FBTyxFQUFFLElBQUksRUFBRSxlQUFlLEVBQUUsS0FBSyxFQUFDLENBQUMsQ0FBQTtZQUNuSCxLQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLFdBQVcsRUFBRSxRQUFRLENBQUMsQ0FBQyxDQUFDO1lBQzlDLEtBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDO1FBQ3pCLENBQUMsRUFBRSxVQUFBLEtBQUs7WUFDTixLQUFJLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQztZQUN2QixLQUFJLENBQUMsb0JBQW9CLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxLQUFLLEVBQUUsS0FBSyxDQUFDLEtBQUssQ0FBQyxPQUFPLEVBQUUsRUFBQyxPQUFPLEVBQUUsSUFBSSxFQUFFLGVBQWUsRUFBRSxLQUFLLEVBQUMsQ0FBQyxDQUFBO1FBQzVHLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUVELG9DQUFNLEdBQU4sVUFBTyxLQUFLO1FBQVosaUJBT0M7UUFOQyxJQUFJLENBQUMsVUFBVSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDO2FBQ3JDLFNBQVMsQ0FBQyxVQUFBLEdBQUc7WUFDWixLQUFJLENBQUMsT0FBTyxHQUFHLEdBQUcsQ0FBQztRQUNyQixDQUFDLEVBQUUsVUFBQSxLQUFLO1lBQ04sS0FBSSxDQUFDLG9CQUFvQixDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsS0FBSyxFQUFFLEtBQUssQ0FBQyxLQUFLLENBQUMsT0FBTyxFQUFFLEVBQUMsT0FBTyxFQUFFLElBQUksRUFBRSxlQUFlLEVBQUUsS0FBSyxFQUFDLENBQUMsQ0FBQTtRQUM1RyxDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFDRCxzQ0FBUSxHQUFSLFVBQVMsR0FBRztRQUNWLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDbkIsK0JBQStCO0lBQ2pDLENBQUM7SUFFRCxvQ0FBTSxHQUFOO1FBQ0UsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxXQUFXLEVBQUUsUUFBUSxDQUFDLENBQUMsQ0FBQztJQUNoRCxDQUFDO0lBL0RIO1FBQUMsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixRQUFRLEVBQUUsYUFBYTtZQUN2QixXQUFXLEVBQUUsNEJBQTRCO1lBQ3pDLFNBQVMsRUFBRSxDQUFDLDJCQUEyQixDQUFDO1NBQ3pDLENBQUM7OzJCQUFBO0lBNERGLDBCQUFDO0FBQUQsQ0EzREEsQUEyREMsSUFBQTtBQTNEWSwyQkFBbUIsc0JBMkQvQixDQUFBIiwiZmlsZSI6ImNvbXBvbmVudHMvcHJvZmlsZS9tYWlsLWNyZWF0ZS5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBQYXJhbXMsIEFjdGl2YXRlZFJvdXRlLCBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5pbXBvcnQgeyBBcGlTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvYXBpLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBOb3RpZmljYXRpb25zU2VydmljZSB9IGZyb20gJ2FuZ3VsYXIyLW5vdGlmaWNhdGlvbnMnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcclxuICBzZWxlY3RvcjogJ21haWwtY3JlYXRlJyxcclxuICB0ZW1wbGF0ZVVybDogJ21haWwtY3JlYXRlLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnbWFpbC1jcmVhdGUuY29tcG9uZW50LmNzcyddXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBNYWlsQ3JlYXRlQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuICBuaWNrbmFtZTogYW55O1xyXG4gIG1lc3NhZ2U6IHN0cmluZztcclxuICByZXN1bHRzOmFueTtcclxuICB1c2VySWQ6IHN0cmluZztcclxuICBzZW5kZXI6IGFueTtcclxuICB0b3BpYzogc3RyaW5nO1xyXG4gIGlzTG9hZGluZzogYm9vbGVhbiA9IGZhbHNlO1xyXG4gIHB1YmxpYyBvcHRpb25zID0ge1xyXG4gICAgICBwb3NpdGlvbjogW1widG9wXCIsXCJyaWdodFwiXVxyXG4gICAgfTtcclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSwgXHJcbiAgICAgICAgICAgICAgcHJpdmF0ZSBhcGlTZXJ2aWNlOiBBcGlTZXJ2aWNlLFxyXG4gICAgICAgICAgICAgIHByaXZhdGUgbm90aWZpY2F0aW9uc1NlcnZpY2U6IE5vdGlmaWNhdGlvbnNTZXJ2aWNlLFxyXG4gICAgICAgICAgICAgIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIpIHsgfVxyXG5cclxuICBuZ09uSW5pdCgpIHsgXHJcbiAgICB0aGlzLnVzZXJJZCA9IHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oJ3VzZXJJZCcpO1xyXG4gICAgdGhpcy5hcGlTZXJ2aWNlLmdldFVzZXJJbmZvKHRoaXMudXNlcklkKVxyXG4gICAgICAuc3Vic2NyaWJlKHJlcyA9PiB7XHJcbiAgICAgICAgdGhpcy5zZW5kZXIgPSByZXM7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ1RISVMuU0VOREVSJyk7XHJcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5zZW5kZXIpO1xyXG4gICAgICB9LCBlcnJvciA9PiB7XHJcbiAgICAgICAgdGhpcy5ub3RpZmljYXRpb25zU2VydmljZS5lcnJvcihlcnJvci50aXRsZSwgZXJyb3IuZXJyb3IubWVzc2FnZSwge3RpbWVPdXQ6IDMwMDAsIHNob3dQcm9ncmVzc0JhcjogZmFsc2V9KVxyXG4gICAgICB9KTtcclxuICB9XHJcblxyXG4gIHNlbmRNZXNzYWdlKCkge1xyXG4gICAgdGhpcy5pc0xvYWRpbmcgPSB0cnVlO1xyXG4gICAgdGhpcy5hcGlTZXJ2aWNlLnNlbmRNZXNzYWdlKHRoaXMubmlja25hbWUubmlja05hbWUsIHRoaXMudG9waWMsIHRoaXMubWVzc2FnZSwgdGhpcy5zZW5kZXIubmlja05hbWUpXHJcbiAgICAgIC5zdWJzY3JpYmUocmVzID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhyZXMpO1xyXG4gICAgICAgIHRoaXMubm90aWZpY2F0aW9uc1NlcnZpY2Uuc3VjY2VzcygnScWhc2nFs3N0YScsICfFvWludXTElyBpxaFzacWzc3RhIHPEl2ttaW5nYWknLCB7dGltZU91dDogMzAwMCwgc2hvd1Byb2dyZXNzQmFyOiBmYWxzZX0pXHJcbiAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoWycvcHJvZmlsaXMnLCAncGFzdGFzJ10pO1xyXG4gICAgICAgIHRoaXMuaXNMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgIH0sIGVycm9yID0+IHtcclxuICAgICAgICB0aGlzLmlzTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMubm90aWZpY2F0aW9uc1NlcnZpY2UuZXJyb3IoZXJyb3IudGl0bGUsIGVycm9yLmVycm9yLm1lc3NhZ2UsIHt0aW1lT3V0OiAzMDAwLCBzaG93UHJvZ3Jlc3NCYXI6IGZhbHNlfSlcclxuICAgICAgfSk7XHJcbiAgfVxyXG5cclxuICBzZWFyY2goZXZlbnQpIHtcclxuICAgIHRoaXMuYXBpU2VydmljZS5zZWFyY2hVc2VycyhldmVudC5xdWVyeSlcclxuICAgICAgLnN1YnNjcmliZShyZXMgPT4ge1xyXG4gICAgICAgIHRoaXMucmVzdWx0cyA9IHJlcztcclxuICAgICAgfSwgZXJyb3IgPT4ge1xyXG4gICAgICAgIHRoaXMubm90aWZpY2F0aW9uc1NlcnZpY2UuZXJyb3IoZXJyb3IudGl0bGUsIGVycm9yLmVycm9yLm1lc3NhZ2UsIHt0aW1lT3V0OiAzMDAwLCBzaG93UHJvZ3Jlc3NCYXI6IGZhbHNlfSlcclxuICAgICAgfSk7XHJcbiAgfVxyXG4gIG9uU2VsZWN0KG9iaikge1xyXG4gICAgY29uc29sZS5sb2coZXZlbnQpO1xyXG4gICAgLy90aGlzLm5pY2tuYW1lID0gb2JqLm5pY2tOYW1lO1xyXG4gIH1cclxuXHJcbiAgZ29CYWNrKCkge1xyXG4gICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoWycvcHJvZmlsaXMnLCAncGFzdGFzJ10pO1xyXG4gIH1cclxuXHJcbn0iXX0=
