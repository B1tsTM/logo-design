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
var api_service_1 = require('../../services/api.service');
var router_1 = require('@angular/router');
var angular2_notifications_1 = require('angular2-notifications');
var MailListComponent = (function () {
    function MailListComponent(apiService, router, route, notificationsService) {
        this.apiService = apiService;
        this.router = router;
        this.route = route;
        this.notificationsService = notificationsService;
        this.messages = [];
        this.sentMessages = [];
        this.isLoading = false;
        this.options = {
            position: ["top", "right"]
        };
    }
    MailListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.isLoading = true;
        this.userId = sessionStorage.getItem('userId');
        this.apiService.getMessages(this.userId)
            .subscribe(function (messages) {
            var filteredMessages = [];
            var filteredSentMessages = [];
            for (var i = 0; i < messages.length; i++) {
                if (messages[i].status == 'Neperžiūrėta' || messages[i].status == 'Peržiūrėta') {
                    filteredMessages.push(messages[i]);
                }
                if (messages[i].status == 'Išsiųsta') {
                    filteredSentMessages.push(messages[i]);
                }
            }
            _this.messages = filteredMessages;
            _this.sentMessages = filteredSentMessages;
            _this.isLoading = false;
            console.log('THIS.MESSAGES');
            console.log(_this.messages);
        }, function (error) {
            _this.isLoading = false;
            _this.notificationsService.error(error.title, error.error.message, { timeOut: 3000, showProgressBar: false });
        });
    };
    MailListComponent.prototype.viewMessage = function (messageId) {
        this.apiService.changeMessageStatus(this.userId, messageId)
            .subscribe(function (res) {
            console.log(res);
        }, function (error) {
            console.error(error);
        });
        this.router.navigate(['zinutes', messageId], { relativeTo: this.route });
    };
    MailListComponent.prototype.goToSentMessages = function () {
        this.router.navigate(['/profilis', 'pastas', 'issiusta']);
    };
    MailListComponent.prototype.goToNewMessage = function () {
        this.router.navigate(['/profilis', 'pastas', 'rasyti-laiska']);
    };
    MailListComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'mail-list',
            templateUrl: 'mail-list.component.html',
            styleUrls: ['mail-list.component.css']
        }), 
        __metadata('design:paramtypes', [api_service_1.ApiService, router_1.Router, router_1.ActivatedRoute, angular2_notifications_1.NotificationsService])
    ], MailListComponent);
    return MailListComponent;
}());
exports.MailListComponent = MailListComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvcHJvZmlsZS9tYWlsLWxpc3QuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBa0MsZUFBZSxDQUFDLENBQUE7QUFDbEQsNEJBQTJCLDRCQUE0QixDQUFDLENBQUE7QUFDeEQsdUJBQXVDLGlCQUFpQixDQUFDLENBQUE7QUFDekQsdUNBQXFDLHdCQUF3QixDQUFDLENBQUE7QUFROUQ7SUFRRSwyQkFBb0IsVUFBc0IsRUFDdEIsTUFBYyxFQUNkLEtBQXFCLEVBQ3JCLG9CQUEwQztRQUgxQyxlQUFVLEdBQVYsVUFBVSxDQUFZO1FBQ3RCLFdBQU0sR0FBTixNQUFNLENBQVE7UUFDZCxVQUFLLEdBQUwsS0FBSyxDQUFnQjtRQUNyQix5QkFBb0IsR0FBcEIsb0JBQW9CLENBQXNCO1FBVjlELGFBQVEsR0FBRyxFQUFFLENBQUM7UUFDZCxpQkFBWSxHQUFHLEVBQUUsQ0FBQztRQUVsQixjQUFTLEdBQVksS0FBSyxDQUFDO1FBQ3BCLFlBQU8sR0FBRztZQUNiLFFBQVEsRUFBRSxDQUFDLEtBQUssRUFBQyxPQUFPLENBQUM7U0FDMUIsQ0FBQztJQUk4RCxDQUFDO0lBRW5FLG9DQUFRLEdBQVI7UUFBQSxpQkF5QkM7UUF4QkMsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUM7UUFDdEIsSUFBSSxDQUFDLE1BQU0sR0FBRyxjQUFjLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQy9DLElBQUksQ0FBQyxVQUFVLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUM7YUFDckMsU0FBUyxDQUFDLFVBQUEsUUFBUTtZQUVqQixJQUFJLGdCQUFnQixHQUFHLEVBQUUsQ0FBQztZQUMxQixJQUFJLG9CQUFvQixHQUFHLEVBQUUsQ0FBQztZQUM5QixHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFDLFFBQVEsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQztnQkFDckMsRUFBRSxDQUFBLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sSUFBSSxjQUFjLElBQUksUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sSUFBSSxZQUFZLENBQUMsQ0FBQyxDQUFDO29CQUM5RSxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQ3JDLENBQUM7Z0JBQ0QsRUFBRSxDQUFBLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sSUFBSSxVQUFVLENBQUMsQ0FBQyxDQUFDO29CQUNwQyxvQkFBb0IsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQ3pDLENBQUM7WUFDSCxDQUFDO1lBQ0QsS0FBSSxDQUFDLFFBQVEsR0FBRyxnQkFBZ0IsQ0FBQztZQUNqQyxLQUFJLENBQUMsWUFBWSxHQUFHLG9CQUFvQixDQUFDO1lBQ3pDLEtBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDO1lBQ3ZCLE9BQU8sQ0FBQyxHQUFHLENBQUMsZUFBZSxDQUFDLENBQUM7WUFDN0IsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDN0IsQ0FBQyxFQUFFLFVBQUEsS0FBSztZQUNOLEtBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDO1lBQ3ZCLEtBQUksQ0FBQyxvQkFBb0IsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLEtBQUssRUFBRSxLQUFLLENBQUMsS0FBSyxDQUFDLE9BQU8sRUFBRSxFQUFDLE9BQU8sRUFBRSxJQUFJLEVBQUUsZUFBZSxFQUFFLEtBQUssRUFBQyxDQUFDLENBQUE7UUFDNUcsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBRUQsdUNBQVcsR0FBWCxVQUFZLFNBQWlCO1FBQzNCLElBQUksQ0FBQyxVQUFVLENBQUMsbUJBQW1CLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxTQUFTLENBQUM7YUFDeEQsU0FBUyxDQUFDLFVBQUEsR0FBRztZQUNaLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDbkIsQ0FBQyxFQUFFLFVBQUEsS0FBSztZQUNOLE9BQU8sQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDdkIsQ0FBQyxDQUFDLENBQUM7UUFDTCxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLFNBQVMsRUFBRSxTQUFTLENBQUMsRUFBRSxFQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsS0FBSyxFQUFDLENBQUMsQ0FBQTtJQUN4RSxDQUFDO0lBRUQsNENBQWdCLEdBQWhCO1FBQ0UsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxXQUFXLEVBQUUsUUFBUSxFQUFFLFVBQVUsQ0FBQyxDQUFDLENBQUM7SUFDNUQsQ0FBQztJQUVELDBDQUFjLEdBQWQ7UUFDRSxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLFdBQVcsRUFBRSxRQUFRLEVBQUUsZUFBZSxDQUFDLENBQUMsQ0FBQztJQUNqRSxDQUFDO0lBOURIO1FBQUMsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixRQUFRLEVBQUUsV0FBVztZQUNyQixXQUFXLEVBQUUsMEJBQTBCO1lBQ3ZDLFNBQVMsRUFBRSxDQUFDLHlCQUF5QixDQUFDO1NBQ3ZDLENBQUM7O3lCQUFBO0lBMkRGLHdCQUFDO0FBQUQsQ0ExREEsQUEwREMsSUFBQTtBQTFEWSx5QkFBaUIsb0JBMEQ3QixDQUFBIiwiZmlsZSI6ImNvbXBvbmVudHMvcHJvZmlsZS9tYWlsLWxpc3QuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQXBpU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL2FwaS5zZXJ2aWNlJztcclxuaW1wb3J0IHsgUm91dGVyLCBBY3RpdmF0ZWRSb3V0ZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcbmltcG9ydCB7IE5vdGlmaWNhdGlvbnNTZXJ2aWNlIH0gZnJvbSAnYW5ndWxhcjItbm90aWZpY2F0aW9ucyc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBtb2R1bGVJZDogbW9kdWxlLmlkLFxyXG4gIHNlbGVjdG9yOiAnbWFpbC1saXN0JyxcclxuICB0ZW1wbGF0ZVVybDogJ21haWwtbGlzdC5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJ21haWwtbGlzdC5jb21wb25lbnQuY3NzJ11cclxufSlcclxuZXhwb3J0IGNsYXNzIE1haWxMaXN0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuICBtZXNzYWdlcyA9IFtdO1xyXG4gIHNlbnRNZXNzYWdlcyA9IFtdO1xyXG4gIHVzZXJJZDogc3RyaW5nO1xyXG4gIGlzTG9hZGluZzogYm9vbGVhbiA9IGZhbHNlO1xyXG4gIHB1YmxpYyBvcHRpb25zID0ge1xyXG4gICAgICBwb3NpdGlvbjogW1widG9wXCIsXCJyaWdodFwiXVxyXG4gICAgfTtcclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGFwaVNlcnZpY2U6IEFwaVNlcnZpY2UsIFxyXG4gICAgICAgICAgICAgIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsIFxyXG4gICAgICAgICAgICAgIHByaXZhdGUgcm91dGU6IEFjdGl2YXRlZFJvdXRlLFxyXG4gICAgICAgICAgICAgIHByaXZhdGUgbm90aWZpY2F0aW9uc1NlcnZpY2U6IE5vdGlmaWNhdGlvbnNTZXJ2aWNlKSB7IH1cclxuXHJcbiAgbmdPbkluaXQoKSB7IFxyXG4gICAgdGhpcy5pc0xvYWRpbmcgPSB0cnVlO1xyXG4gICAgdGhpcy51c2VySWQgPSBzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKCd1c2VySWQnKTtcclxuICAgIHRoaXMuYXBpU2VydmljZS5nZXRNZXNzYWdlcyh0aGlzLnVzZXJJZClcclxuICAgICAgLnN1YnNjcmliZShtZXNzYWdlcyA9PiB7XHJcbiAgICAgICAgXHJcbiAgICAgICAgbGV0IGZpbHRlcmVkTWVzc2FnZXMgPSBbXTtcclxuICAgICAgICBsZXQgZmlsdGVyZWRTZW50TWVzc2FnZXMgPSBbXTtcclxuICAgICAgICBmb3IgKGxldCBpPTA7IGk8bWVzc2FnZXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgIGlmKG1lc3NhZ2VzW2ldLnN0YXR1cyA9PSAnTmVwZXLFvmnFq3LEl3RhJyB8fCBtZXNzYWdlc1tpXS5zdGF0dXMgPT0gJ1BlcsW+acWrcsSXdGEnKSB7XHJcbiAgICAgICAgICAgIGZpbHRlcmVkTWVzc2FnZXMucHVzaChtZXNzYWdlc1tpXSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBpZihtZXNzYWdlc1tpXS5zdGF0dXMgPT0gJ0nFoXNpxbNzdGEnKSB7XHJcbiAgICAgICAgICAgIGZpbHRlcmVkU2VudE1lc3NhZ2VzLnB1c2gobWVzc2FnZXNbaV0pO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLm1lc3NhZ2VzID0gZmlsdGVyZWRNZXNzYWdlcztcclxuICAgICAgICB0aGlzLnNlbnRNZXNzYWdlcyA9IGZpbHRlcmVkU2VudE1lc3NhZ2VzO1xyXG4gICAgICAgIHRoaXMuaXNMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ1RISVMuTUVTU0FHRVMnKTtcclxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLm1lc3NhZ2VzKTtcclxuICAgICAgfSwgZXJyb3IgPT4ge1xyXG4gICAgICAgIHRoaXMuaXNMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5ub3RpZmljYXRpb25zU2VydmljZS5lcnJvcihlcnJvci50aXRsZSwgZXJyb3IuZXJyb3IubWVzc2FnZSwge3RpbWVPdXQ6IDMwMDAsIHNob3dQcm9ncmVzc0JhcjogZmFsc2V9KVxyXG4gICAgICB9KTtcclxuICB9XHJcblxyXG4gIHZpZXdNZXNzYWdlKG1lc3NhZ2VJZDogbnVtYmVyKSB7XHJcbiAgICB0aGlzLmFwaVNlcnZpY2UuY2hhbmdlTWVzc2FnZVN0YXR1cyh0aGlzLnVzZXJJZCwgbWVzc2FnZUlkKVxyXG4gICAgICAuc3Vic2NyaWJlKHJlcyA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2cocmVzKTtcclxuICAgICAgfSwgZXJyb3IgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xyXG4gICAgICB9KTtcclxuICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFsnemludXRlcycsIG1lc3NhZ2VJZF0sIHtyZWxhdGl2ZVRvOiB0aGlzLnJvdXRlfSlcclxuICB9XHJcblxyXG4gIGdvVG9TZW50TWVzc2FnZXMoKSB7XHJcbiAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJy9wcm9maWxpcycsICdwYXN0YXMnLCAnaXNzaXVzdGEnXSk7XHJcbiAgfVxyXG5cclxuICBnb1RvTmV3TWVzc2FnZSgpIHtcclxuICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFsnL3Byb2ZpbGlzJywgJ3Bhc3RhcycsICdyYXN5dGktbGFpc2thJ10pO1xyXG4gIH1cclxuXHJcbn0iXX0=
