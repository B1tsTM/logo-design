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
        if (!this.topic || !this.message) {
            this.isLoading = false;
            this.notificationsService.error('Klaida !', 'Įveskite temą ir žinutę', { timeOut: 3000, showProgressBar: false });
        }
        else {
            var recipient;
            if (typeof this.nickname === 'string') {
                recipient = this.nickname;
            }
            else {
                recipient = this.nickname.nickName;
            }
            this.apiService.sendMessage(recipient, this.topic, this.message, this.sender.nickName)
                .subscribe(function (res) {
                console.log(res);
                _this.notificationsService.success('Išsiųsta', 'Žinutė išsiųsta sėkmingai', { timeOut: 3000, showProgressBar: false });
                _this.router.navigate(['/profilis', 'pastas']);
                _this.isLoading = false;
            }, function (error) {
                _this.isLoading = false;
                _this.notificationsService.error(error.title, error.error.message, { timeOut: 3000, showProgressBar: false });
            });
        }
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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvcHJvZmlsZS9tYWlsLWNyZWF0ZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUFrQyxlQUFlLENBQUMsQ0FBQTtBQUNsRCx1QkFBK0MsaUJBQWlCLENBQUMsQ0FBQTtBQUNqRSw0QkFBMkIsNEJBQTRCLENBQUMsQ0FBQTtBQUN4RCx1Q0FBcUMsd0JBQXdCLENBQUMsQ0FBQTtBQVE5RDtJQVdFLDZCQUFvQixLQUFxQixFQUNyQixVQUFzQixFQUN0QixvQkFBMEMsRUFDMUMsTUFBYztRQUhkLFVBQUssR0FBTCxLQUFLLENBQWdCO1FBQ3JCLGVBQVUsR0FBVixVQUFVLENBQVk7UUFDdEIseUJBQW9CLEdBQXBCLG9CQUFvQixDQUFzQjtRQUMxQyxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBUGxDLGNBQVMsR0FBWSxLQUFLLENBQUM7UUFDcEIsWUFBTyxHQUFHO1lBQ2IsUUFBUSxFQUFFLENBQUMsS0FBSyxFQUFDLE9BQU8sQ0FBQztTQUMxQixDQUFDO0lBSWtDLENBQUM7SUFFdkMsc0NBQVEsR0FBUjtRQUFBLGlCQVVDO1FBVEMsSUFBSSxDQUFDLE1BQU0sR0FBRyxjQUFjLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQy9DLElBQUksQ0FBQyxVQUFVLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUM7YUFDckMsU0FBUyxDQUFDLFVBQUEsR0FBRztZQUNaLEtBQUksQ0FBQyxNQUFNLEdBQUcsR0FBRyxDQUFDO1lBQ2xCLE9BQU8sQ0FBQyxHQUFHLENBQUMsYUFBYSxDQUFDLENBQUM7WUFDM0IsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDM0IsQ0FBQyxFQUFFLFVBQUEsS0FBSztZQUNOLEtBQUksQ0FBQyxvQkFBb0IsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLEtBQUssRUFBRSxLQUFLLENBQUMsS0FBSyxDQUFDLE9BQU8s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LENBQUMsQ0FBQztJQUNoRCxDQUFDO0lBMUVIO1FBQUMsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixRQUFRLEVBQUUsYUFBYTtZQUN2QixXQUFXLEVBQUUsNEJBQTRCO1lBQ3pDLFNBQVMsRUFBRSxDQUFDLDJCQUEyQixDQUFDO1NBQ3pDLENBQUM7OzJCQUFBO0lBdUVGLDBCQUFDO0FBQUQsQ0F0RUEsQUFzRUMsSUFBQTtBQXRFWSwyQkFBbUIsc0JBc0UvQixDQUFBIiwiZmlsZSI6ImNvbXBvbmVudHMvcHJvZmlsZS9tYWlsLWNyZWF0ZS5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBQYXJhbXMsIEFjdGl2YXRlZFJvdXRlLCBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5pbXBvcnQgeyBBcGlTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvYXBpLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBOb3RpZmljYXRpb25zU2VydmljZSB9IGZyb20gJ2FuZ3VsYXIyLW5vdGlmaWNhdGlvbnMnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcclxuICBzZWxlY3RvcjogJ21haWwtY3JlYXRlJyxcclxuICB0ZW1wbGF0ZVVybDogJ21haWwtY3JlYXRlLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnbWFpbC1jcmVhdGUuY29tcG9uZW50LmNzcyddXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBNYWlsQ3JlYXRlQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuICBuaWNrbmFtZTogYW55O1xyXG4gIG1lc3NhZ2U6IHN0cmluZztcclxuICByZXN1bHRzOmFueTtcclxuICB1c2VySWQ6IHN0cmluZztcclxuICBzZW5kZXI6IGFueTtcclxuICB0b3BpYzogc3RyaW5nO1xyXG4gIGlzTG9hZGluZzogYm9vbGVhbiA9IGZhbHNlO1xyXG4gIHB1YmxpYyBvcHRpb25zID0ge1xyXG4gICAgICBwb3NpdGlvbjogW1widG9wXCIsXCJyaWdodFwiXVxyXG4gICAgfTtcclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSwgXHJcbiAgICAgICAgICAgICAgcHJpdmF0ZSBhcGlTZXJ2aWNlOiBBcGlTZXJ2aWNlLFxyXG4gICAgICAgICAgICAgIHByaXZhdGUgbm90aWZpY2F0aW9uc1NlcnZpY2U6IE5vdGlmaWNhdGlvbnNTZXJ2aWNlLFxyXG4gICAgICAgICAgICAgIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIpIHsgfVxyXG5cclxuICBuZ09uSW5pdCgpIHsgXHJcbiAgICB0aGlzLnVzZXJJZCA9IHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oJ3VzZXJJZCcpO1xyXG4gICAgdGhpcy5hcGlTZXJ2aWNlLmdldFVzZXJJbmZvKHRoaXMudXNlcklkKVxyXG4gICAgICAuc3Vic2NyaWJlKHJlcyA9PiB7XHJcbiAgICAgICAgdGhpcy5zZW5kZXIgPSByZXM7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ1RISVMuU0VOREVSJyk7XHJcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5zZW5kZXIpO1xyXG4gICAgICB9LCBlcnJvciA9PiB7XHJcbiAgICAgICAgdGhpcy5ub3RpZmljYXRpb25zU2VydmljZS5lcnJvcihlcnJvci50aXRsZSwgZXJyb3IuZXJyb3IubWVzc2FnZSwge3RpbWVPdXQ6IDMwMDAsIHNob3dQcm9ncmVzc0JhcjogZmFsc2V9KVxyXG4gICAgICB9KTtcclxuICB9XHJcblxyXG4gIHNlbmRNZXNzYWdlKCkge1xyXG4gICAgdGhpcy5pc0xvYWRpbmcgPSB0cnVlO1xyXG4gICAgaWYgKCF0aGlzLnRvcGljIHx8ICF0aGlzLm1lc3NhZ2UpIHtcclxuICAgICAgdGhpcy5pc0xvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgdGhpcy5ub3RpZmljYXRpb25zU2VydmljZS5lcnJvcignS2xhaWRhICEnLCAnxK52ZXNraXRlIHRlbcSFIGlyIMW+aW51dMSZJywge3RpbWVPdXQ6IDMwMDAsIHNob3dQcm9ncmVzc0JhcjogZmFsc2V9KVxyXG4gICAgfSBlbHNlIHtcclxuICAgIHZhciByZWNpcGllbnQ7XHJcbiAgICBpZiAodHlwZW9mIHRoaXMubmlja25hbWUgPT09ICdzdHJpbmcnKSB7XHJcbiAgICAgIHJlY2lwaWVudCA9IHRoaXMubmlja25hbWU7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICByZWNpcGllbnQgPSB0aGlzLm5pY2tuYW1lLm5pY2tOYW1lO1xyXG4gICAgfVxyXG4gICAgdGhpcy5hcGlTZXJ2aWNlLnNlbmRNZXNzYWdlKHJlY2lwaWVudCwgdGhpcy50b3BpYywgdGhpcy5tZXNzYWdlLCB0aGlzLnNlbmRlci5uaWNrTmFtZSlcclxuICAgICAgLnN1YnNjcmliZShyZXMgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHJlcyk7XHJcbiAgICAgICAgdGhpcy5ub3RpZmljYXRpb25zU2VydmljZS5zdWNjZXNzKCdJxaFzacWzc3RhJywgJ8W9aW51dMSXIGnFoXNpxbNzdGEgc8SXa21pbmdhaScsIHt0aW1lT3V0OiAzMDAwLCBzaG93UHJvZ3Jlc3NCYXI6IGZhbHNlfSlcclxuICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJy9wcm9maWxpcycsICdwYXN0YXMnXSk7XHJcbiAgICAgICAgdGhpcy5pc0xvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgfSwgZXJyb3IgPT4ge1xyXG4gICAgICAgIHRoaXMuaXNMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5ub3RpZmljYXRpb25zU2VydmljZS5lcnJvcihlcnJvci50aXRsZSwgZXJyb3IuZXJyb3IubWVzc2FnZSwge3RpbWVPdXQ6IDMwMDAsIHNob3dQcm9ncmVzc0JhcjogZmFsc2V9KVxyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHNlYXJjaChldmVudCkge1xyXG4gICAgdGhpcy5hcGlTZXJ2aWNlLnNlYXJjaFVzZXJzKGV2ZW50LnF1ZXJ5KVxyXG4gICAgICAuc3Vic2NyaWJlKHJlcyA9PiB7XHJcbiAgICAgICAgdGhpcy5yZXN1bHRzID0gcmVzO1xyXG4gICAgICB9LCBlcnJvciA9PiB7XHJcbiAgICAgICAgdGhpcy5ub3RpZmljYXRpb25zU2VydmljZS5lcnJvcihlcnJvci50aXRsZSwgZXJyb3IuZXJyb3IubWVzc2FnZSwge3RpbWVPdXQ6IDMwMDAsIHNob3dQcm9ncmVzc0JhcjogZmFsc2V9KVxyXG4gICAgICB9KTtcclxuICB9XHJcbiAgb25TZWxlY3Qob2JqKSB7XHJcbiAgICBjb25zb2xlLmxvZyhldmVudCk7XHJcbiAgICAvL3RoaXMubmlja25hbWUgPSBvYmoubmlja05hbWU7XHJcbiAgfVxyXG5cclxuICBnb0JhY2soKSB7XHJcbiAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJy9wcm9maWxpcycsICdwYXN0YXMnXSk7XHJcbiAgfVxyXG5cclxufSJdfQ==
