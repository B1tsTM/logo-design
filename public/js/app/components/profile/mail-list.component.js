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
        this.isLoading = false;
        this.options = {
            position: ["top", "right"]
        };
    }
    MailListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.isLoading = true;
        this.userId = localStorage.getItem('userId');
        this.apiService.getMessages(this.userId)
            .subscribe(function (messages) {
            var filteredMessages = [];
            for (var i = 0; i < messages.length; i++) {
                if (messages[i].status == 'Neperžiūrėta' || messages[i].status == 'Peržiūrėta') {
                    filteredMessages.push(messages[i]);
                }
            }
            _this.messages = filteredMessages;
            _this.isLoading = false;
            console.log('THIS.MESSAGES');
            console.log(_this.messages);
        }, function (error) {
            _this.isLoading = false;
            _this.notificationsService.error('Įvyko klaida', 'Nepavyko gauti žinučių', { timeOut: 3000, showProgressBar: false });
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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvcHJvZmlsZS9tYWlsLWxpc3QuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBa0MsZUFBZSxDQUFDLENBQUE7QUFDbEQsNEJBQTJCLDRCQUE0QixDQUFDLENBQUE7QUFDeEQsdUJBQXVDLGlCQUFpQixDQUFDLENBQUE7QUFDekQsdUNBQXFDLHdCQUF3QixDQUFDLENBQUE7QUFROUQ7SUFPRSwyQkFBb0IsVUFBc0IsRUFDdEIsTUFBYyxFQUNkLEtBQXFCLEVBQ3JCLG9CQUEwQztRQUgxQyxlQUFVLEdBQVYsVUFBVSxDQUFZO1FBQ3RCLFdBQU0sR0FBTixNQUFNLENBQVE7UUFDZCxVQUFLLEdBQUwsS0FBSyxDQUFnQjtRQUNyQix5QkFBb0IsR0FBcEIsb0JBQW9CLENBQXNCO1FBVDlELGFBQVEsR0FBRyxFQUFFLENBQUM7UUFFZCxjQUFTLEdBQVksS0FBSyxDQUFDO1FBQ3BCLFlBQU8sR0FBRztZQUNiLFFBQVEsRUFBRSxDQUFDLEtBQUssRUFBQyxPQUFPLENBQUM7U0FDMUIsQ0FBQztJQUk4RCxDQUFDO0lBRW5FLG9DQUFRLEdBQVI7UUFBQSxpQkFvQkM7UUFuQkMsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUM7UUFDdEIsSUFBSSxDQUFDLE1BQU0sR0FBRyxZQUFZLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQzdDLElBQUksQ0FBQyxVQUFVLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUM7YUFDckMsU0FBUyxDQUFDLFVBQUEsUUFBUTtZQUVqQixJQUFJLGdCQUFnQixHQUFHLEVBQUUsQ0FBQztZQUMxQixHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFDLFFBQVEsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQztnQkFDckMsRUFBRSxDQUFBLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sSUFBSSxjQUFjLElBQUksUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sSUFBSSxZQUFZLENBQUMsQ0FBQyxDQUFDO29CQUM5RSxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQ3JDLENBQUM7WUFDSCxDQUFDO1lBQ0QsS0FBSSxDQUFDLFFBQVEsR0FBRyxnQkFBZ0IsQ0FBQztZQUNqQyxLQUFJLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQztZQUN2QixPQUFPLENBQUMsR0FBRyxDQUFDLGVBQWUsQ0FBQyxDQUFDO1lBQzdCLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQzdCLENBQUMsRUFBRSxVQUFBLEtBQUs7WUFDTixLQUFJLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQztZQUN2QixLQUFJLENBQUMsb0JBQW9CLENBQUMsS0FBSyxDQUFDLGNBQWMsRUFBRSx3QkFBd0IsRUFBRSxFQUFDLE9BQU8sRUFBRSxJQUFJLEVBQUUsZUFBZSxFQUFFLEtBQUssRUFBQyxDQUFDLENBQUE7UUFDcEgsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBRUQsdUNBQVcsR0FBWCxVQUFZLFNBQWlCO1FBQzNCLElBQUksQ0FBQyxVQUFVLENBQUMsbUJBQW1CLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxTQUFTLENBQUM7YUFDeEQsU0FBUyxDQUFDLFVBQUEsR0FBRztZQUNaLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDbkIsQ0FBQyxFQUFFLFVBQUEsS0FBSztZQUNOLE9BQU8sQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDdkIsQ0FBQyxDQUFDLENBQUM7UUFDTCxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLFNBQVMsRUFBRSxTQUFTLENBQUMsRUFBRSxFQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsS0FBSyxFQUFDLENBQUMsQ0FBQTtJQUN4RSxDQUFDO0lBaERIO1FBQUMsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixRQUFRLEVBQUUsV0FBVztZQUNyQixXQUFXLEVBQUUsMEJBQTBCO1lBQ3ZDLFNBQVMsRUFBRSxDQUFDLHlCQUF5QixDQUFDO1NBQ3ZDLENBQUM7O3lCQUFBO0lBNENGLHdCQUFDO0FBQUQsQ0EzQ0EsQUEyQ0MsSUFBQTtBQTNDWSx5QkFBaUIsb0JBMkM3QixDQUFBIiwiZmlsZSI6ImNvbXBvbmVudHMvcHJvZmlsZS9tYWlsLWxpc3QuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQXBpU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL2FwaS5zZXJ2aWNlJztcclxuaW1wb3J0IHsgUm91dGVyLCBBY3RpdmF0ZWRSb3V0ZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcbmltcG9ydCB7IE5vdGlmaWNhdGlvbnNTZXJ2aWNlIH0gZnJvbSAnYW5ndWxhcjItbm90aWZpY2F0aW9ucyc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBtb2R1bGVJZDogbW9kdWxlLmlkLFxyXG4gIHNlbGVjdG9yOiAnbWFpbC1saXN0JyxcclxuICB0ZW1wbGF0ZVVybDogJ21haWwtbGlzdC5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJ21haWwtbGlzdC5jb21wb25lbnQuY3NzJ11cclxufSlcclxuZXhwb3J0IGNsYXNzIE1haWxMaXN0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuICBtZXNzYWdlcyA9IFtdO1xyXG4gIHVzZXJJZDogc3RyaW5nO1xyXG4gIGlzTG9hZGluZzogYm9vbGVhbiA9IGZhbHNlO1xyXG4gIHB1YmxpYyBvcHRpb25zID0ge1xyXG4gICAgICBwb3NpdGlvbjogW1widG9wXCIsXCJyaWdodFwiXVxyXG4gICAgfTtcclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGFwaVNlcnZpY2U6IEFwaVNlcnZpY2UsIFxyXG4gICAgICAgICAgICAgIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsIFxyXG4gICAgICAgICAgICAgIHByaXZhdGUgcm91dGU6IEFjdGl2YXRlZFJvdXRlLFxyXG4gICAgICAgICAgICAgIHByaXZhdGUgbm90aWZpY2F0aW9uc1NlcnZpY2U6IE5vdGlmaWNhdGlvbnNTZXJ2aWNlKSB7IH1cclxuXHJcbiAgbmdPbkluaXQoKSB7IFxyXG4gICAgdGhpcy5pc0xvYWRpbmcgPSB0cnVlO1xyXG4gICAgdGhpcy51c2VySWQgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndXNlcklkJyk7XHJcbiAgICB0aGlzLmFwaVNlcnZpY2UuZ2V0TWVzc2FnZXModGhpcy51c2VySWQpXHJcbiAgICAgIC5zdWJzY3JpYmUobWVzc2FnZXMgPT4ge1xyXG4gICAgICAgIFxyXG4gICAgICAgIGxldCBmaWx0ZXJlZE1lc3NhZ2VzID0gW107XHJcbiAgICAgICAgZm9yIChsZXQgaT0wOyBpPG1lc3NhZ2VzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICBpZihtZXNzYWdlc1tpXS5zdGF0dXMgPT0gJ05lcGVyxb5pxatyxJd0YScgfHwgbWVzc2FnZXNbaV0uc3RhdHVzID09ICdQZXLFvmnFq3LEl3RhJykge1xyXG4gICAgICAgICAgICBmaWx0ZXJlZE1lc3NhZ2VzLnB1c2gobWVzc2FnZXNbaV0pO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLm1lc3NhZ2VzID0gZmlsdGVyZWRNZXNzYWdlcztcclxuICAgICAgICB0aGlzLmlzTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdUSElTLk1FU1NBR0VTJyk7XHJcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5tZXNzYWdlcyk7XHJcbiAgICAgIH0sIGVycm9yID0+IHtcclxuICAgICAgICB0aGlzLmlzTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMubm90aWZpY2F0aW9uc1NlcnZpY2UuZXJyb3IoJ8SudnlrbyBrbGFpZGEnLCAnTmVwYXZ5a28gZ2F1dGkgxb5pbnXEjWnFsycsIHt0aW1lT3V0OiAzMDAwLCBzaG93UHJvZ3Jlc3NCYXI6IGZhbHNlfSlcclxuICAgICAgfSk7XHJcbiAgfVxyXG5cclxuICB2aWV3TWVzc2FnZShtZXNzYWdlSWQ6IG51bWJlcikge1xyXG4gICAgdGhpcy5hcGlTZXJ2aWNlLmNoYW5nZU1lc3NhZ2VTdGF0dXModGhpcy51c2VySWQsIG1lc3NhZ2VJZClcclxuICAgICAgLnN1YnNjcmliZShyZXMgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHJlcyk7XHJcbiAgICAgIH0sIGVycm9yID0+IHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcclxuICAgICAgfSk7XHJcbiAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJ3ppbnV0ZXMnLCBtZXNzYWdlSWRdLCB7cmVsYXRpdmVUbzogdGhpcy5yb3V0ZX0pXHJcbiAgfVxyXG59Il19
