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
var contests_service_1 = require('../../services/contests.service');
var angular2_notifications_1 = require('angular2-notifications');
var MailCreateForUserComponent = (function () {
    function MailCreateForUserComponent(route, apiService, notificationsService, router, contestsService) {
        this.route = route;
        this.apiService = apiService;
        this.notificationsService = notificationsService;
        this.router = router;
        this.contestsService = contestsService;
        this.isLoading = false;
        this.options = {
            position: ["top", "right"]
        };
    }
    MailCreateForUserComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.contestsService.mailTopic) {
            this.topic = this.contestsService.mailTopic;
        }
        this.userId = sessionStorage.getItem('userId');
        this.route.params.subscribe(function (params) {
            _this.nickname = params['nickname'];
        });
        this.apiService.getUserInfo(this.userId)
            .subscribe(function (res) {
            _this.sender = res;
            console.log('THIS.SENDER');
            console.log(_this.sender);
        }, function (error) {
            _this.notificationsService.error(error.title, error.error.message, { timeOut: 3000, showProgressBar: false });
        });
    };
    MailCreateForUserComponent.prototype.sendMessage = function () {
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
                _this.isLoading = false;
                _this.router.navigate(['/profilis', 'pastas']);
            }, function (error) {
                _this.isLoading = false;
                _this.notificationsService.error(error.title, error.error.message, { timeOut: 3000, showProgressBar: false });
            });
        }
    };
    // searchUsers() {
    //   this.apiService.searchUsers(this.nickname)
    //     .subscribe(res => {
    //       this.searchedUsers = res;
    //       console.log('SEARCH RESULTS');
    //       console.log(res);
    //       console.log('THIS.searchedUsers');
    //       console.log(this.searchedUsers);
    //     }, error => {
    //       this.notificationsService.error('Įvyko klaida', 'Nepavyko rasti vartotojo', {timeOut: 3000, showProgressBar: false})
    //     });
    // }
    MailCreateForUserComponent.prototype.search = function (event) {
        var _this = this;
        this.apiService.searchUsers(event.query)
            .subscribe(function (res) {
            _this.results = res;
        }, function (error) {
            _this.notificationsService.error(error.title, error.error.message, { timeOut: 3000, showProgressBar: false });
        });
    };
    MailCreateForUserComponent.prototype.onSelect = function (obj) {
        console.log(event);
        //this.nickname = obj.nickName;
    };
    MailCreateForUserComponent.prototype.goBack = function () {
        this.router.navigate(['/profilis', 'pastas']);
    };
    MailCreateForUserComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'mail-create-for-user',
            templateUrl: 'mail-create-for-user.component.html',
            styleUrls: ['mail-create-for-user.component.css']
        }), 
        __metadata('design:paramtypes', [router_1.ActivatedRoute, api_service_1.ApiService, angular2_notifications_1.NotificationsService, router_1.Router, contests_service_1.ContestsService])
    ], MailCreateForUserComponent);
    return MailCreateForUserComponent;
}());
exports.MailCreateForUserComponent = MailCreateForUserComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvcHJvZmlsZS9tYWlsLWNyZWF0ZS1mb3ItdXNlci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUFrQyxlQUFlLENBQUMsQ0FBQTtBQUNsRCx1QkFBK0MsaUJBQWlCLENBQUMsQ0FBQTtBQUNqRSw0QkFBMkIsNEJBQTRCLENBQUMsQ0FBQTtBQUN4RCxpQ0FBZ0MsaUNBQWlDLENBQUMsQ0FBQTtBQUNsRSx1Q0FBcUMsd0JBQXdCLENBQUMsQ0FBQTtBQVE5RDtJQVlFLG9DQUFvQixLQUFxQixFQUNyQixVQUFzQixFQUN0QixvQkFBMEMsRUFDMUMsTUFBYyxFQUNkLGVBQWdDO1FBSmhDLFVBQUssR0FBTCxLQUFLLENBQWdCO1FBQ3JCLGVBQVUsR0FBVixVQUFVLENBQVk7UUFDdEIseUJBQW9CLEdBQXBCLG9CQUFvQixDQUFzQjtRQUMxQyxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQ2Qsb0JBQWUsR0FBZixlQUFlLENBQWlCO1FBUnBELGNBQVMsR0FBWSxLQUFLLENBQUM7UUFDcEIsWUFBTyxHQUFHO1lBQ2IsUUFBUSxFQUFFLENBQUMsS0FBSyxFQUFDLE9BQU8sQ0FBQztTQUMxQixDQUFDO0lBS29ELENBQUM7SUFFekQsNkNBQVEsR0FBUjtRQUFBLGlCQWdCQztRQWZDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQztZQUNuQyxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxlQUFlLENBQUMsU0FBUyxDQUFDO1FBQzlDLENBQUM7UUFDRCxJQUFJLENBQUMsTUFBTSxHQUFHLGNBQWMsQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDL0MsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLFVBQUMsTUFBYztZQUMzQyxLQUFJLENBQUMsUUFBUSxHQUFHLE1BQU0sQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUNu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T0M7UUFOQyxJQUFJLENBQUMsVUFBVSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDO2FBQ3JDLFNBQVMsQ0FBQyxVQUFBLEdBQUc7WUFDWixLQUFJLENBQUMsT0FBTyxHQUFHLEdBQUcsQ0FBQztRQUNyQixDQUFDLEVBQUUsVUFBQSxLQUFLO1lBQ04sS0FBSSxDQUFDLG9CQUFvQixDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsS0FBSyxFQUFFLEtBQUssQ0FBQyxLQUFLLENBQUMsT0FBTyxFQUFFLEVBQUMsT0FBTyxFQUFFLElBQUksRUFBRSxlQUFlLEVBQUUsS0FBSyxFQUFDLENBQUMsQ0FBQTtRQUM1RyxDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFDRCw2Q0FBUSxHQUFSLFVBQVMsR0FBRztRQUNWLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDbkIsK0JBQStCO0lBQ2pDLENBQUM7SUFFRCwyQ0FBTSxHQUFOO1FBQ0UsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxXQUFXLEVBQUUsUUFBUSxDQUFDLENBQUMsQ0FBQztJQUNoRCxDQUFDO0lBL0ZIO1FBQUMsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixRQUFRLEVBQUUsc0JBQXNCO1lBQ2hDLFdBQVcsRUFBRSxxQ0FBcUM7WUFDbEQsU0FBUyxFQUFFLENBQUMsb0NBQW9DLENBQUM7U0FDbEQsQ0FBQzs7a0NBQUE7SUE0RkYsaUNBQUM7QUFBRCxDQTNGQSxBQTJGQyxJQUFBO0FBM0ZZLGtDQUEwQiw2QkEyRnRDLENBQUEiLCJmaWxlIjoiY29tcG9uZW50cy9wcm9maWxlL21haWwtY3JlYXRlLWZvci11c2VyLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFBhcmFtcywgQWN0aXZhdGVkUm91dGUsIFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcbmltcG9ydCB7IEFwaVNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9hcGkuc2VydmljZSc7XHJcbmltcG9ydCB7IENvbnRlc3RzU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL2NvbnRlc3RzLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBOb3RpZmljYXRpb25zU2VydmljZSB9IGZyb20gJ2FuZ3VsYXIyLW5vdGlmaWNhdGlvbnMnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcclxuICBzZWxlY3RvcjogJ21haWwtY3JlYXRlLWZvci11c2VyJyxcclxuICB0ZW1wbGF0ZVVybDogJ21haWwtY3JlYXRlLWZvci11c2VyLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnbWFpbC1jcmVhdGUtZm9yLXVzZXIuY29tcG9uZW50LmNzcyddXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBNYWlsQ3JlYXRlRm9yVXNlckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgbmlja25hbWU6IGFueTtcclxuICBtZXNzYWdlOiBzdHJpbmc7XHJcbiAgLy9zZWFyY2hlZFVzZXJzID0gW107XHJcbiAgcmVzdWx0czphbnk7XHJcbiAgdXNlcklkOiBzdHJpbmc7XHJcbiAgc2VuZGVyOiBhbnk7XHJcbiAgdG9waWM6IHN0cmluZztcclxuICBpc0xvYWRpbmc6IGJvb2xlYW4gPSBmYWxzZTtcclxuICBwdWJsaWMgb3B0aW9ucyA9IHtcclxuICAgICAgcG9zaXRpb246IFtcInRvcFwiLFwicmlnaHRcIl1cclxuICAgIH07XHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSByb3V0ZTogQWN0aXZhdGVkUm91dGUsIFxyXG4gICAgICAgICAgICAgIHByaXZhdGUgYXBpU2VydmljZTogQXBpU2VydmljZSxcclxuICAgICAgICAgICAgICBwcml2YXRlIG5vdGlmaWNhdGlvbnNTZXJ2aWNlOiBOb3RpZmljYXRpb25zU2VydmljZSxcclxuICAgICAgICAgICAgICBwcml2YXRlIHJvdXRlcjogUm91dGVyLFxyXG4gICAgICAgICAgICAgIHByaXZhdGUgY29udGVzdHNTZXJ2aWNlOiBDb250ZXN0c1NlcnZpY2UpIHsgfVxyXG5cclxuICBuZ09uSW5pdCgpIHsgXHJcbiAgICBpZiAodGhpcy5jb250ZXN0c1NlcnZpY2UubWFpbFRvcGljKSB7XHJcbiAgICAgIHRoaXMudG9waWMgPSB0aGlzLmNvbnRlc3RzU2VydmljZS5tYWlsVG9waWM7XHJcbiAgICB9XHJcbiAgICB0aGlzLnVzZXJJZCA9IHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oJ3VzZXJJZCcpO1xyXG4gICAgdGhpcy5yb3V0ZS5wYXJhbXMuc3Vic2NyaWJlKChwYXJhbXM6IFBhcmFtcykgPT4ge1xyXG4gICAgdGhpcy5uaWNrbmFtZSA9IHBhcmFtc1snbmlja25hbWUnXTtcclxuICAgIH0pO1xyXG4gICAgdGhpcy5hcGlTZXJ2aWNlLmdldFVzZXJJbmZvKHRoaXMudXNlcklkKVxyXG4gICAgICAuc3Vic2NyaWJlKHJlcyA9PiB7XHJcbiAgICAgICAgdGhpcy5zZW5kZXIgPSByZXM7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ1RISVMuU0VOREVSJyk7XHJcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5zZW5kZXIpO1xyXG4gICAgICB9LCBlcnJvciA9PiB7XHJcbiAgICAgICAgdGhpcy5ub3RpZmljYXRpb25zU2VydmljZS5lcnJvcihlcnJvci50aXRsZSwgZXJyb3IuZXJyb3IubWVzc2FnZSwge3RpbWVPdXQ6IDMwMDAsIHNob3dQcm9ncmVzc0JhcjogZmFsc2V9KVxyXG4gICAgICB9KTtcclxuICB9XHJcblxyXG4gIHNlbmRNZXNzYWdlKCkge1xyXG4gICAgdGhpcy5pc0xvYWRpbmcgPSB0cnVlO1xyXG4gICAgaWYgKCF0aGlzLnRvcGljIHx8ICF0aGlzLm1lc3NhZ2UpIHtcclxuICAgICAgdGhpcy5pc0xvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgdGhpcy5ub3RpZmljYXRpb25zU2VydmljZS5lcnJvcignS2xhaWRhICEnLCAnxK52ZXNraXRlIHRlbcSFIGlyIMW+aW51dMSZJywge3RpbWVPdXQ6IDMwMDAsIHNob3dQcm9ncmVzc0JhcjogZmFsc2V9KVxyXG4gICAgfSBlbHNlIHtcclxuICAgIHZhciByZWNpcGllbnQ7XHJcbiAgICBpZiAodHlwZW9mIHRoaXMubmlja25hbWUgPT09ICdzdHJpbmcnKSB7XHJcbiAgICAgIHJlY2lwaWVudCA9IHRoaXMubmlja25hbWU7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICByZWNpcGllbnQgPSB0aGlzLm5pY2tuYW1lLm5pY2tOYW1lO1xyXG4gICAgfVxyXG4gICAgdGhpcy5hcGlTZXJ2aWNlLnNlbmRNZXNzYWdlKHJlY2lwaWVudCwgdGhpcy50b3BpYywgdGhpcy5tZXNzYWdlLCB0aGlzLnNlbmRlci5uaWNrTmFtZSlcclxuICAgICAgLnN1YnNjcmliZShyZXMgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHJlcyk7XHJcbiAgICAgICAgdGhpcy5ub3RpZmljYXRpb25zU2VydmljZS5zdWNjZXNzKCdJxaFzacWzc3RhJywgJ8W9aW51dMSXIGnFoXNpxbNzdGEgc8SXa21pbmdhaScsIHt0aW1lT3V0OiAzMDAwLCBzaG93UHJvZ3Jlc3NCYXI6IGZhbHNlfSlcclxuICAgICAgICB0aGlzLmlzTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFsnL3Byb2ZpbGlzJywgJ3Bhc3RhcyddKTtcclxuICAgICAgfSwgZXJyb3IgPT4ge1xyXG4gICAgICAgIHRoaXMuaXNMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5ub3RpZmljYXRpb25zU2VydmljZS5lcnJvcihlcnJvci50aXRsZSwgZXJyb3IuZXJyb3IubWVzc2FnZSwge3RpbWVPdXQ6IDMwMDAsIHNob3dQcm9ncmVzc0JhcjogZmFsc2V9KVxyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8vIHNlYXJjaFVzZXJzKCkge1xyXG4gIC8vICAgdGhpcy5hcGlTZXJ2aWNlLnNlYXJjaFVzZXJzKHRoaXMubmlja25hbWUpXHJcbiAgLy8gICAgIC5zdWJzY3JpYmUocmVzID0+IHtcclxuICAvLyAgICAgICB0aGlzLnNlYXJjaGVkVXNlcnMgPSByZXM7XHJcbiAgLy8gICAgICAgY29uc29sZS5sb2coJ1NFQVJDSCBSRVNVTFRTJyk7XHJcbiAgLy8gICAgICAgY29uc29sZS5sb2cocmVzKTtcclxuICAvLyAgICAgICBjb25zb2xlLmxvZygnVEhJUy5zZWFyY2hlZFVzZXJzJyk7XHJcbiAgLy8gICAgICAgY29uc29sZS5sb2codGhpcy5zZWFyY2hlZFVzZXJzKTtcclxuICAvLyAgICAgfSwgZXJyb3IgPT4ge1xyXG4gIC8vICAgICAgIHRoaXMubm90aWZpY2F0aW9uc1NlcnZpY2UuZXJyb3IoJ8SudnlrbyBrbGFpZGEnLCAnTmVwYXZ5a28gcmFzdGkgdmFydG90b2pvJywge3RpbWVPdXQ6IDMwMDAsIHNob3dQcm9ncmVzc0JhcjogZmFsc2V9KVxyXG4gIC8vICAgICB9KTtcclxuICAvLyB9XHJcblxyXG4gIHNlYXJjaChldmVudCkge1xyXG4gICAgdGhpcy5hcGlTZXJ2aWNlLnNlYXJjaFVzZXJzKGV2ZW50LnF1ZXJ5KVxyXG4gICAgICAuc3Vic2NyaWJlKHJlcyA9PiB7XHJcbiAgICAgICAgdGhpcy5yZXN1bHRzID0gcmVzO1xyXG4gICAgICB9LCBlcnJvciA9PiB7XHJcbiAgICAgICAgdGhpcy5ub3RpZmljYXRpb25zU2VydmljZS5lcnJvcihlcnJvci50aXRsZSwgZXJyb3IuZXJyb3IubWVzc2FnZSwge3RpbWVPdXQ6IDMwMDAsIHNob3dQcm9ncmVzc0JhcjogZmFsc2V9KVxyXG4gICAgICB9KTtcclxuICB9XHJcbiAgb25TZWxlY3Qob2JqKSB7XHJcbiAgICBjb25zb2xlLmxvZyhldmVudCk7XHJcbiAgICAvL3RoaXMubmlja25hbWUgPSBvYmoubmlja05hbWU7XHJcbiAgfVxyXG5cclxuICBnb0JhY2soKSB7XHJcbiAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJy9wcm9maWxpcycsICdwYXN0YXMnXSk7XHJcbiAgfVxyXG4gIFxyXG59Il19
