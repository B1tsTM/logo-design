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
var MailListComponent = (function () {
    function MailListComponent(apiService) {
        this.apiService = apiService;
        this.messages = [];
    }
    MailListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userId = localStorage.getItem('userId');
        this.apiService.getMessages(this.userId)
            .subscribe(function (messages) {
            _this.messages = messages;
            console.log('THIS.MESSAGES');
            console.log(_this.messages);
        });
    };
    MailListComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'mail-list',
            templateUrl: 'mail-list.component.html',
            styleUrls: ['mail-list.component.css']
        }), 
        __metadata('design:paramtypes', [api_service_1.ApiService])
    ], MailListComponent);
    return MailListComponent;
}());
exports.MailListComponent = MailListComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvcHJvZmlsZS9tYWlsLWxpc3QuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBa0MsZUFBZSxDQUFDLENBQUE7QUFDbEQsNEJBQTJCLDRCQUE0QixDQUFDLENBQUE7QUFReEQ7SUFHRSwyQkFBb0IsVUFBc0I7UUFBdEIsZUFBVSxHQUFWLFVBQVUsQ0FBWTtRQUYxQyxhQUFRLEdBQUcsRUFBRSxDQUFDO0lBRWdDLENBQUM7SUFFL0Msb0NBQVEsR0FBUjtRQUFBLGlCQVFDO1FBUEMsSUFBSSxDQUFDLE1BQU0sR0FBRyxZQUFZLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQzdDLElBQUksQ0FBQyxVQUFVLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUM7YUFDckMsU0FBUyxDQUFDLFVBQUEsUUFBUTtZQUNqQixLQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztZQUN6QixPQUFPLENBQUMsR0FBRyxDQUFDLGVBQWUsQ0FBQyxDQUFDO1lBQzdCLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQzdCLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQW5CSDtRQUFDLGdCQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsUUFBUSxFQUFFLFdBQVc7WUFDckIsV0FBVyxFQUFFLDBCQUEwQjtZQUN2QyxTQUFTLEVBQUUsQ0FBQyx5QkFBeUIsQ0FBQztTQUN2QyxDQUFDOzt5QkFBQTtJQWVGLHdCQUFDO0FBQUQsQ0FkQSxBQWNDLElBQUE7QUFkWSx5QkFBaUIsb0JBYzdCLENBQUEiLCJmaWxlIjoiY29tcG9uZW50cy9wcm9maWxlL21haWwtbGlzdC5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBBcGlTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvYXBpLnNlcnZpY2UnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcclxuICBzZWxlY3RvcjogJ21haWwtbGlzdCcsXHJcbiAgdGVtcGxhdGVVcmw6ICdtYWlsLWxpc3QuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWydtYWlsLWxpc3QuY29tcG9uZW50LmNzcyddXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBNYWlsTGlzdENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgbWVzc2FnZXMgPSBbXTtcclxuICB1c2VySWQ6IHN0cmluZztcclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGFwaVNlcnZpY2U6IEFwaVNlcnZpY2UpIHsgfVxyXG5cclxuICBuZ09uSW5pdCgpIHsgXHJcbiAgICB0aGlzLnVzZXJJZCA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd1c2VySWQnKTtcclxuICAgIHRoaXMuYXBpU2VydmljZS5nZXRNZXNzYWdlcyh0aGlzLnVzZXJJZClcclxuICAgICAgLnN1YnNjcmliZShtZXNzYWdlcyA9PiB7XHJcbiAgICAgICAgdGhpcy5tZXNzYWdlcyA9IG1lc3NhZ2VzO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdUSElTLk1FU1NBR0VTJyk7XHJcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5tZXNzYWdlcyk7XHJcbiAgICAgIH0pO1xyXG4gIH1cclxufSJdfQ==
