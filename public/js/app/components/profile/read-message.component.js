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
var ReadMessageComponent = (function () {
    function ReadMessageComponent(route, apiService, router, notificationsService) {
        this.route = route;
        this.apiService = apiService;
        this.router = router;
        this.notificationsService = notificationsService;
        this.options = {
            position: ["top", "right"]
        };
    }
    ReadMessageComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userId = localStorage.getItem('userId');
        this.route.params.subscribe(function (params) {
            _this.messageId = params['messageId'];
        });
        this.apiService.getMessages(this.userId)
            .subscribe(function (messages) {
            for (var i = 0; i < messages.length; i++) {
                if (messages[i].messageId == _this.messageId) {
                    _this.message = messages[i];
                }
            }
        }, function (error) {
            _this.notificationsService.error('Įvyko klaida', 'Nepavyko gauti žinučių', { timeOut: 3000, showProgressBar: false });
        });
    };
    ReadMessageComponent.prototype.reply = function () {
        this.router.navigate(['/profilis', 'pastas', 'rasyti-laiska', this.message.sender.nickName]);
    };
    ReadMessageComponent.prototype.deleteMessage = function () {
        var _this = this;
        this.apiService.deleteMessage(this.messageId)
            .subscribe(function (res) {
            console.log(res);
            //this.message = null;
            _this.notificationsService.info('Ištrinta', 'Žinutė ištrinta', { timeOut: 3000, showProgressBar: false });
            _this.router.navigate(['/profilis', 'pastas']);
        }, function (error) {
            _this.notificationsService.error('Įvyko klaida', 'Nepavyko ištrinti žinutės', { timeOut: 3000, showProgressBar: false });
        });
    };
    ReadMessageComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'read-message',
            templateUrl: 'read-message.component.html',
            styleUrls: ['read-message.component.css']
        }), 
        __metadata('design:paramtypes', [router_1.ActivatedRoute, api_service_1.ApiService, router_1.Router, angular2_notifications_1.NotificationsService])
    ], ReadMessageComponent);
    return ReadMessageComponent;
}());
exports.ReadMessageComponent = ReadMessageComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvcHJvZmlsZS9yZWFkLW1lc3NhZ2UuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBa0MsZUFBZSxDQUFDLENBQUE7QUFDbEQsdUJBQStDLGlCQUFpQixDQUFDLENBQUE7QUFDakUsNEJBQTJCLDRCQUE0QixDQUFDLENBQUE7QUFDeEQsdUNBQXFDLHdCQUF3QixDQUFDLENBQUE7QUFROUQ7SUFPRSw4QkFBb0IsS0FBcUIsRUFDckIsVUFBc0IsRUFDdEIsTUFBYyxFQUNkLG9CQUEwQztRQUgxQyxVQUFLLEdBQUwsS0FBSyxDQUFnQjtRQUNyQixlQUFVLEdBQVYsVUFBVSxDQUFZO1FBQ3RCLFdBQU0sR0FBTixNQUFNLENBQVE7UUFDZCx5QkFBb0IsR0FBcEIsb0JBQW9CLENBQXNCO1FBTnZELFlBQU8sR0FBRztZQUNiLFFBQVEsRUFBRSxDQUFDLEtBQUssRUFBQyxPQUFPLENBQUM7U0FDMUIsQ0FBQztJQUk4RCxDQUFDO0lBRW5FLHVDQUFRLEdBQVI7UUFBQSxpQkFlQztRQWRDLElBQUksQ0FBQyxNQUFNLEdBQUcsWUFBWSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUM3QyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsVUFBQyxNQUFjO1lBQzNDLEtBQUksQ0FBQyxTQUFTLEdBQUcsTUFBTSxDQUFDLFdBQVcsQ0FBQyxDQUFBO1FBQ3BDLENBQUMsQ0FBQyxDQUFBO1FBQ0YsSUFBSSxDQUFDLFVBQVUsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQzthQUNyQyxTQUFTLENBQUMsVUFBQSxRQUFRO1lBQ2pCLEdBQUcsQ0FBQSxDQUFDLElBQUksQ0FBQyxHQUFDLENBQUMsRUFBRSxDQUFDLEdBQUMsUUFBUSxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDO2dCQUNwQyxFQUFFLENBQUEsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxJQUFJLEtBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDO29CQUMzQyxLQUFJLENBQUMsT0FBTyxHQUFHLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDN0IsQ0FBQztZQUNILENBQUM7UUFDSCxDQUFDLEVBQUUsVUFBQSxLQUFLO1lBQ04sS0FBSSxDQUFDLG9CQUFvQixDQUFDLEtBQUssQ0FBQyxjQUFjLEVBQUUsd0JBQXdCLEVBQUUsRUFBQyxPQUFPLEVBQUUsSUFBSSxFQUFFLGVBQWUsRUFBRSxLQUFLLEVBQUMsQ0FBQyxDQUFBO1FBQ3BILENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUVELG9DQUFLLEdBQUw7UUFDRSxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLFdBQVcsRUFBRSxRQUFRLEVBQUUsZUFBZSxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7SUFDL0YsQ0FBQztJQUVELDRDQUFhLEdBQWI7UUFBQSxpQkFVQztRQVRDLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUM7YUFDMUMsU0FBUyxDQUFDLFVBQUEsR0FBRztZQUNaLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDakIsc0JBQXNCO1lBQ3RCLEtBQUksQ0FBQyxvQkFBb0IsQ0FBQyxJQUFJLENBQUMsVUFBVSxFQUFFLGlCQUFpQixFQUFFLEVBQUMsT0FBTyxFQUFFLElBQUksRUFBRSxlQUFlLEVBQUUsS0FBSyxFQUFDLENBQUMsQ0FBQTtZQUN0RyxLQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLFdBQVcsRUFBRSxRQUFRLENBQUMsQ0FBQyxDQUFDO1FBQ2hELENBQUMsRUFBRSxVQUFBLEtBQUs7WUFDTixLQUFJLENBQUMsb0JBQW9CLENBQUMsS0FBSyxDQUFDLGNBQWMsRUFBRSwyQkFBMkIsRUFBRSxFQUFDLE9BQU8sRUFBRSxJQUFJLEVBQUUsZUFBZSxFQUFFLEtBQUssRUFBQyxDQUFDLENBQUE7UUFDdkgsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBakRIO1FBQUMsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixRQUFRLEVBQUUsY0FBYztZQUN4QixXQUFXLEVBQUUsNkJBQTZCO1lBQzFDLFNBQVMsRUFBRSxDQUFDLDRCQUE0QixDQUFDO1NBQzFDLENBQUM7OzRCQUFBO0lBOENGLDJCQUFDO0FBQUQsQ0E3Q0EsQUE2Q0MsSUFBQTtBQTdDWSw0QkFBb0IsdUJBNkNoQyxDQUFBIiwiZmlsZSI6ImNvbXBvbmVudHMvcHJvZmlsZS9yZWFkLW1lc3NhZ2UuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQWN0aXZhdGVkUm91dGUsIFBhcmFtcywgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuaW1wb3J0IHsgQXBpU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL2FwaS5zZXJ2aWNlJztcclxuaW1wb3J0IHsgTm90aWZpY2F0aW9uc1NlcnZpY2UgfSBmcm9tICdhbmd1bGFyMi1ub3RpZmljYXRpb25zJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIG1vZHVsZUlkOiBtb2R1bGUuaWQsXHJcbiAgc2VsZWN0b3I6ICdyZWFkLW1lc3NhZ2UnLFxyXG4gIHRlbXBsYXRlVXJsOiAncmVhZC1tZXNzYWdlLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsncmVhZC1tZXNzYWdlLmNvbXBvbmVudC5jc3MnXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgUmVhZE1lc3NhZ2VDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gIG1lc3NhZ2VJZDogbnVtYmVyO1xyXG4gIHVzZXJJZDogc3RyaW5nO1xyXG4gIG1lc3NhZ2U6IGFueTtcclxuICBwdWJsaWMgb3B0aW9ucyA9IHtcclxuICAgICAgcG9zaXRpb246IFtcInRvcFwiLFwicmlnaHRcIl1cclxuICAgIH07XHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSByb3V0ZTogQWN0aXZhdGVkUm91dGUsIFxyXG4gICAgICAgICAgICAgIHByaXZhdGUgYXBpU2VydmljZTogQXBpU2VydmljZSwgXHJcbiAgICAgICAgICAgICAgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlcixcclxuICAgICAgICAgICAgICBwcml2YXRlIG5vdGlmaWNhdGlvbnNTZXJ2aWNlOiBOb3RpZmljYXRpb25zU2VydmljZSkgeyB9XHJcblxyXG4gIG5nT25Jbml0KCkgeyBcclxuICAgIHRoaXMudXNlcklkID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3VzZXJJZCcpO1xyXG4gICAgdGhpcy5yb3V0ZS5wYXJhbXMuc3Vic2NyaWJlKChwYXJhbXM6IFBhcmFtcykgPT4ge1xyXG4gICAgdGhpcy5tZXNzYWdlSWQgPSBwYXJhbXNbJ21lc3NhZ2VJZCddXHJcbiAgICB9KVxyXG4gICAgdGhpcy5hcGlTZXJ2aWNlLmdldE1lc3NhZ2VzKHRoaXMudXNlcklkKVxyXG4gICAgICAuc3Vic2NyaWJlKG1lc3NhZ2VzID0+IHtcclxuICAgICAgICBmb3IobGV0IGk9MDsgaTxtZXNzYWdlcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgaWYobWVzc2FnZXNbaV0ubWVzc2FnZUlkID09IHRoaXMubWVzc2FnZUlkKSB7XHJcbiAgICAgICAgICAgIHRoaXMubWVzc2FnZSA9IG1lc3NhZ2VzW2ldO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfSwgZXJyb3IgPT4ge1xyXG4gICAgICAgIHRoaXMubm90aWZpY2F0aW9uc1NlcnZpY2UuZXJyb3IoJ8SudnlrbyBrbGFpZGEnLCAnTmVwYXZ5a28gZ2F1dGkgxb5pbnXEjWnFsycsIHt0aW1lT3V0OiAzMDAwLCBzaG93UHJvZ3Jlc3NCYXI6IGZhbHNlfSlcclxuICAgICAgfSk7XHJcbiAgfVxyXG5cclxuICByZXBseSgpIHtcclxuICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFsnL3Byb2ZpbGlzJywgJ3Bhc3RhcycsICdyYXN5dGktbGFpc2thJywgdGhpcy5tZXNzYWdlLnNlbmRlci5uaWNrTmFtZV0pO1xyXG4gIH1cclxuXHJcbiAgZGVsZXRlTWVzc2FnZSgpIHtcclxuICAgIHRoaXMuYXBpU2VydmljZS5kZWxldGVNZXNzYWdlKHRoaXMubWVzc2FnZUlkKVxyXG4gICAgICAuc3Vic2NyaWJlKHJlcyA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2cocmVzKTtcclxuICAgICAgICAvL3RoaXMubWVzc2FnZSA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5ub3RpZmljYXRpb25zU2VydmljZS5pbmZvKCdJxaF0cmludGEnLCAnxb1pbnV0xJcgacWhdHJpbnRhJywge3RpbWVPdXQ6IDMwMDAsIHNob3dQcm9ncmVzc0JhcjogZmFsc2V9KVxyXG4gICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFsnL3Byb2ZpbGlzJywgJ3Bhc3RhcyddKTtcclxuICAgICAgfSwgZXJyb3IgPT4ge1xyXG4gICAgICAgIHRoaXMubm90aWZpY2F0aW9uc1NlcnZpY2UuZXJyb3IoJ8SudnlrbyBrbGFpZGEnLCAnTmVwYXZ5a28gacWhdHJpbnRpIMW+aW51dMSXcycsIHt0aW1lT3V0OiAzMDAwLCBzaG93UHJvZ3Jlc3NCYXI6IGZhbHNlfSlcclxuICAgICAgfSk7XHJcbiAgfVxyXG5cclxufSJdfQ==
