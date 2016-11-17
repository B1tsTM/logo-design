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
var SentMailComponent = (function () {
    function SentMailComponent(apiService, router, route, notificationsService) {
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
    SentMailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.isLoading = true;
        this.userId = localStorage.getItem('userId');
        this.apiService.getMessages(this.userId)
            .subscribe(function (messages) {
            var filteredMessages = [];
            for (var i = 0; i < messages.length; i++) {
                if (messages[i].status == 'Išsiųsta') {
                    filteredMessages.push(messages[i]);
                }
            }
            _this.messages = filteredMessages;
            _this.isLoading = false;
            console.log('THIS.MESSAGES');
            console.log(_this.messages);
        }, function (error) {
            _this.isLoading = false;
            _this.notificationsService.error(error.title, error.error.message, { timeOut: 3000, showProgressBar: false });
        });
    };
    SentMailComponent.prototype.viewMessage = function (messageId) {
        this.router.navigate(['../zinutes', messageId], { relativeTo: this.route });
    };
    SentMailComponent.prototype.goBack = function () {
        this.router.navigate(['/profilis', 'pastas']);
    };
    SentMailComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'sent-mail',
            templateUrl: 'sent-mail.component.html',
            styleUrls: ['sent-mail.component.css']
        }), 
        __metadata('design:paramtypes', [api_service_1.ApiService, router_1.Router, router_1.ActivatedRoute, angular2_notifications_1.NotificationsService])
    ], SentMailComponent);
    return SentMailComponent;
}());
exports.SentMailComponent = SentMailComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvcHJvZmlsZS9zZW50LW1haWwuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBa0MsZUFBZSxDQUFDLENBQUE7QUFDbEQsNEJBQTJCLDRCQUE0QixDQUFDLENBQUE7QUFDeEQsdUJBQXVDLGlCQUFpQixDQUFDLENBQUE7QUFDekQsdUNBQXFDLHdCQUF3QixDQUFDLENBQUE7QUFTOUQ7SUFPRSwyQkFBb0IsVUFBc0IsRUFDdEIsTUFBYyxFQUNkLEtBQXFCLEVBQ3JCLG9CQUEwQztRQUgxQyxlQUFVLEdBQVYsVUFBVSxDQUFZO1FBQ3RCLFdBQU0sR0FBTixNQUFNLENBQVE7UUFDZCxVQUFLLEdBQUwsS0FBSyxDQUFnQjtRQUNyQix5QkFBb0IsR0FBcEIsb0JBQW9CLENBQXNCO1FBVDlELGFBQVEsR0FBRyxFQUFFLENBQUM7UUFFZCxjQUFTLEdBQVksS0FBSyxDQUFDO1FBQ3BCLFlBQU8sR0FBRztZQUNiLFFBQVEsRUFBRSxDQUFDLEtBQUssRUFBQyxPQUFPLENBQUM7U0FDMUIsQ0FBQztJQUk4RCxDQUFDO0lBRW5FLG9DQUFRLEdBQVI7UUFBQSxpQkFtQkM7UUFsQkMsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUM7UUFDdEIsSUFBSSxDQUFDLE1BQU0sR0FBRyxZQUFZLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQzdDLElBQUksQ0FBQyxVQUFVLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUM7YUFDckMsU0FBUyxDQUFDLFVBQUEsUUFBUTtZQUNqQixJQUFJLGdCQUFnQixHQUFHLEVBQUUsQ0FBQztZQUMxQixHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFDLFFBQVEsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQztnQkFDckMsRUFBRSxDQUFBLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sSUFBSSxVQUFVLENBQUMsQ0FBQyxDQUFDO29CQUNwQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQ3JDLENBQUM7WUFDSCxDQUFDO1lBQ0QsS0FBSSxDQUFDLFFBQVEsR0FBRyxnQkFBZ0IsQ0FBQztZQUNqQyxLQUFJLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQztZQUN2QixPQUFPLENBQUMsR0FBRyxDQUFDLGVBQWUsQ0FBQyxDQUFDO1lBQzdCLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQzdCLENBQUMsRUFBRSxVQUFBLEtBQUs7WUFDTixLQUFJLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQztZQUN2QixLQUFJLENBQUMsb0JBQW9CLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxLQUFLLEVBQUUsS0FBSyxDQUFDLEtBQUssQ0FBQyxPQUFPLEVBQUUsRUFBQyxPQUFPLEVBQUUsSUFBSSxFQUFFLGVBQWUsRUFBRSxLQUFLLEVBQUMsQ0FBQyxDQUFBO1FBQzVHLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUVELHVDQUFXLEdBQVgsVUFBWSxTQUFpQjtRQUMzQixJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLFlBQVksRUFBRSxTQUFTLENBQUMsRUFBRSxFQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsS0FBSyxFQUFDLENBQUMsQ0FBQTtJQUMzRSxDQUFDO0lBRUQsa0NBQU0sR0FBTjtRQUNFLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsV0FBVyxFQUFFLFFBQVEsQ0FBQyxDQUFDLENBQUM7SUFDaEQsQ0FBQztJQTdDSDtRQUFDLGdCQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsUUFBUSxFQUFFLFdBQVc7WUFDckIsV0FBVyxFQUFFLDBCQUEwQjtZQUN2QyxTQUFTLEVBQUUsQ0FBQyx5QkFBeUIsQ0FBQztTQUN2QyxDQUFDOzt5QkFBQTtJQXlDRix3QkFBQztBQUFELENBeENBLEFBd0NDLElBQUE7QUF4Q1kseUJBQWlCLG9CQXdDN0IsQ0FBQSIsImZpbGUiOiJjb21wb25lbnRzL3Byb2ZpbGUvc2VudC1tYWlsLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEFwaVNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9hcGkuc2VydmljZSc7XHJcbmltcG9ydCB7IFJvdXRlciwgQWN0aXZhdGVkUm91dGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5pbXBvcnQgeyBOb3RpZmljYXRpb25zU2VydmljZSB9IGZyb20gJ2FuZ3VsYXIyLW5vdGlmaWNhdGlvbnMnO1xyXG5cclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIG1vZHVsZUlkOiBtb2R1bGUuaWQsXHJcbiAgc2VsZWN0b3I6ICdzZW50LW1haWwnLFxyXG4gIHRlbXBsYXRlVXJsOiAnc2VudC1tYWlsLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnc2VudC1tYWlsLmNvbXBvbmVudC5jc3MnXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgU2VudE1haWxDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gIG1lc3NhZ2VzID0gW107XHJcbiAgdXNlcklkOiBzdHJpbmc7XHJcbiAgaXNMb2FkaW5nOiBib29sZWFuID0gZmFsc2U7XHJcbiAgcHVibGljIG9wdGlvbnMgPSB7XHJcbiAgICAgIHBvc2l0aW9uOiBbXCJ0b3BcIixcInJpZ2h0XCJdXHJcbiAgICB9O1xyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgYXBpU2VydmljZTogQXBpU2VydmljZSwgXHJcbiAgICAgICAgICAgICAgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlciwgXHJcbiAgICAgICAgICAgICAgcHJpdmF0ZSByb3V0ZTogQWN0aXZhdGVkUm91dGVcclxuICAgICAgICAgICAgICBwcml2YXRlIG5vdGlmaWNhdGlvbnNTZXJ2aWNlOiBOb3RpZmljYXRpb25zU2VydmljZSkgeyB9XHJcblxyXG4gIG5nT25Jbml0KCkgeyBcclxuICAgIHRoaXMuaXNMb2FkaW5nID0gdHJ1ZTtcclxuICAgIHRoaXMudXNlcklkID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3VzZXJJZCcpO1xyXG4gICAgdGhpcy5hcGlTZXJ2aWNlLmdldE1lc3NhZ2VzKHRoaXMudXNlcklkKVxyXG4gICAgICAuc3Vic2NyaWJlKG1lc3NhZ2VzID0+IHtcclxuICAgICAgICBsZXQgZmlsdGVyZWRNZXNzYWdlcyA9IFtdO1xyXG4gICAgICAgIGZvciAobGV0IGk9MDsgaTxtZXNzYWdlcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgaWYobWVzc2FnZXNbaV0uc3RhdHVzID09ICdJxaFzacWzc3RhJykge1xyXG4gICAgICAgICAgICBmaWx0ZXJlZE1lc3NhZ2VzLnB1c2gobWVzc2FnZXNbaV0pO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLm1lc3NhZ2VzID0gZmlsdGVyZWRNZXNzYWdlcztcclxuICAgICAgICB0aGlzLmlzTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdUSElTLk1FU1NBR0VTJyk7XHJcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5tZXNzYWdlcyk7XHJcbiAgICAgIH0sIGVycm9yID0+IHtcclxuICAgICAgICB0aGlzLmlzTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMubm90aWZpY2F0aW9uc1NlcnZpY2UuZXJyb3IoZXJyb3IudGl0bGUsIGVycm9yLmVycm9yLm1lc3NhZ2UsIHt0aW1lT3V0OiAzMDAwLCBzaG93UHJvZ3Jlc3NCYXI6IGZhbHNlfSlcclxuICAgICAgfSk7XHJcbiAgfVxyXG5cclxuICB2aWV3TWVzc2FnZShtZXNzYWdlSWQ6IG51bWJlcikge1xyXG4gICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoWycuLi96aW51dGVzJywgbWVzc2FnZUlkXSwge3JlbGF0aXZlVG86IHRoaXMucm91dGV9KVxyXG4gIH1cclxuXHJcbiAgZ29CYWNrKCkge1xyXG4gICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoWycvcHJvZmlsaXMnLCAncGFzdGFzJ10pO1xyXG4gIH1cclxufSJdfQ==
