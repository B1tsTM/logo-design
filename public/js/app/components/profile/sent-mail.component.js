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
var SentMailComponent = (function () {
    function SentMailComponent(apiService, router, route) {
        this.apiService = apiService;
        this.router = router;
        this.route = route;
        this.messages = [];
    }
    SentMailComponent.prototype.ngOnInit = function () {
        var _this = this;
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
            console.log('THIS.MESSAGES');
            console.log(_this.messages);
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
        __metadata('design:paramtypes', [api_service_1.ApiService, router_1.Router, router_1.ActivatedRoute])
    ], SentMailComponent);
    return SentMailComponent;
}());
exports.SentMailComponent = SentMailComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvcHJvZmlsZS9zZW50LW1haWwuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBa0MsZUFBZSxDQUFDLENBQUE7QUFDbEQsNEJBQTJCLDRCQUE0QixDQUFDLENBQUE7QUFDeEQsdUJBQXVDLGlCQUFpQixDQUFDLENBQUE7QUFTekQ7SUFHRSwyQkFBb0IsVUFBc0IsRUFBVSxNQUFjLEVBQVUsS0FBcUI7UUFBN0UsZUFBVSxHQUFWLFVBQVUsQ0FBWTtRQUFVLFdBQU0sR0FBTixNQUFNLENBQVE7UUFBVSxVQUFLLEdBQUwsS0FBSyxDQUFnQjtRQUZqRyxhQUFRLEdBQUcsRUFBRSxDQUFDO0lBRXVGLENBQUM7SUFFdEcsb0NBQVEsR0FBUjtRQUFBLGlCQWNDO1FBYkMsSUFBSSxDQUFDLE1BQU0sR0FBRyxZQUFZLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQzdDLElBQUksQ0FBQyxVQUFVLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUM7YUFDckMsU0FBUyxDQUFDLFVBQUEsUUFBUTtZQUNqQixJQUFJLGdCQUFnQixHQUFHLEVBQUUsQ0FBQztZQUMxQixHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFDLFFBQVEsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQztnQkFDckMsRUFBRSxDQUFBLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sSUFBSSxVQUFVLENBQUMsQ0FBQyxDQUFDO29CQUNwQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQ3JDLENBQUM7WUFDSCxDQUFDO1lBQ0QsS0FBSSxDQUFDLFFBQVEsR0FBRyxnQkFBZ0IsQ0FBQztZQUNqQyxPQUFPLENBQUMsR0FBRyxDQUFDLGVBQWUsQ0FBQyxDQUFDO1lBQzdCLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQzdCLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUVELHVDQUFXLEdBQVgsVUFBWSxTQUFpQjtRQUMzQixJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLFlBQVksRUFBRSxTQUFTLENBQUMsRUFBRSxFQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsS0FBSyxFQUFDLENBQUMsQ0FBQTtJQUMzRSxDQUFDO0lBRUQsa0NBQU0sR0FBTjtRQUNFLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsV0FBVyxFQUFFLFFBQVEsQ0FBQyxDQUFDLENBQUM7SUFDaEQsQ0FBQztJQWpDSDtRQUFDLGdCQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsUUFBUSxFQUFFLFdBQVc7WUFDckIsV0FBVyxFQUFFLDBCQUEwQjtZQUN2QyxTQUFTLEVBQUUsQ0FBQyx5QkFBeUIsQ0FBQztTQUN2QyxDQUFDOzt5QkFBQTtJQTZCRix3QkFBQztBQUFELENBNUJBLEFBNEJDLElBQUE7QUE1QlkseUJBQWlCLG9CQTRCN0IsQ0FBQSIsImZpbGUiOiJjb21wb25lbnRzL3Byb2ZpbGUvc2VudC1tYWlsLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEFwaVNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9hcGkuc2VydmljZSc7XHJcbmltcG9ydCB7IFJvdXRlciwgQWN0aXZhdGVkUm91dGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5cclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIG1vZHVsZUlkOiBtb2R1bGUuaWQsXHJcbiAgc2VsZWN0b3I6ICdzZW50LW1haWwnLFxyXG4gIHRlbXBsYXRlVXJsOiAnc2VudC1tYWlsLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnc2VudC1tYWlsLmNvbXBvbmVudC5jc3MnXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgU2VudE1haWxDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gIG1lc3NhZ2VzID0gW107XHJcbiAgdXNlcklkOiBzdHJpbmc7XHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBhcGlTZXJ2aWNlOiBBcGlTZXJ2aWNlLCBwcml2YXRlIHJvdXRlcjogUm91dGVyLCBwcml2YXRlIHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSkgeyB9XHJcblxyXG4gIG5nT25Jbml0KCkgeyBcclxuICAgIHRoaXMudXNlcklkID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3VzZXJJZCcpO1xyXG4gICAgdGhpcy5hcGlTZXJ2aWNlLmdldE1lc3NhZ2VzKHRoaXMudXNlcklkKVxyXG4gICAgICAuc3Vic2NyaWJlKG1lc3NhZ2VzID0+IHtcclxuICAgICAgICBsZXQgZmlsdGVyZWRNZXNzYWdlcyA9IFtdO1xyXG4gICAgICAgIGZvciAobGV0IGk9MDsgaTxtZXNzYWdlcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgaWYobWVzc2FnZXNbaV0uc3RhdHVzID09ICdJxaFzacWzc3RhJykge1xyXG4gICAgICAgICAgICBmaWx0ZXJlZE1lc3NhZ2VzLnB1c2gobWVzc2FnZXNbaV0pO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLm1lc3NhZ2VzID0gZmlsdGVyZWRNZXNzYWdlcztcclxuICAgICAgICBjb25zb2xlLmxvZygnVEhJUy5NRVNTQUdFUycpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMubWVzc2FnZXMpO1xyXG4gICAgICB9KTtcclxuICB9XHJcblxyXG4gIHZpZXdNZXNzYWdlKG1lc3NhZ2VJZDogbnVtYmVyKSB7XHJcbiAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJy4uL3ppbnV0ZXMnLCBtZXNzYWdlSWRdLCB7cmVsYXRpdmVUbzogdGhpcy5yb3V0ZX0pXHJcbiAgfVxyXG5cclxuICBnb0JhY2soKSB7XHJcbiAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJy9wcm9maWxpcycsICdwYXN0YXMnXSk7XHJcbiAgfVxyXG59Il19
