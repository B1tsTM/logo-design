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
var MailListComponent = (function () {
    function MailListComponent(apiService, router, route) {
        this.apiService = apiService;
        this.router = router;
        this.route = route;
        this.messages = [];
    }
    MailListComponent.prototype.ngOnInit = function () {
        var _this = this;
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
            console.log('THIS.MESSAGES');
            console.log(_this.messages);
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
        __metadata('design:paramtypes', [api_service_1.ApiService, router_1.Router, router_1.ActivatedRoute])
    ], MailListComponent);
    return MailListComponent;
}());
exports.MailListComponent = MailListComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvcHJvZmlsZS9tYWlsLWxpc3QuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBa0MsZUFBZSxDQUFDLENBQUE7QUFDbEQsNEJBQTJCLDRCQUE0QixDQUFDLENBQUE7QUFDeEQsdUJBQXVDLGlCQUFpQixDQUFDLENBQUE7QUFRekQ7SUFHRSwyQkFBb0IsVUFBc0IsRUFBVSxNQUFjLEVBQVUsS0FBcUI7UUFBN0UsZUFBVSxHQUFWLFVBQVUsQ0FBWTtRQUFVLFdBQU0sR0FBTixNQUFNLENBQVE7UUFBVSxVQUFLLEdBQUwsS0FBSyxDQUFnQjtRQUZqRyxhQUFRLEdBQUcsRUFBRSxDQUFDO0lBRXVGLENBQUM7SUFFdEcsb0NBQVEsR0FBUjtRQUFBLGlCQWVDO1FBZEMsSUFBSSxDQUFDLE1BQU0sR0FBRyxZQUFZLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQzdDLElBQUksQ0FBQyxVQUFVLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUM7YUFDckMsU0FBUyxDQUFDLFVBQUEsUUFBUTtZQUVqQixJQUFJLGdCQUFnQixHQUFHLEVBQUUsQ0FBQztZQUMxQixHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFDLFFBQVEsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQztnQkFDckMsRUFBRSxDQUFBLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sSUFBSSxjQUFjLElBQUksUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sSUFBSSxZQUFZLENBQUMsQ0FBQyxDQUFDO29CQUM5RSxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQ3JDLENBQUM7WUFDSCxDQUFDO1lBQ0QsS0FBSSxDQUFDLFFBQVEsR0FBRyxnQkFBZ0IsQ0FBQztZQUNqQyxPQUFPLENBQUMsR0FBRyxDQUFDLGVBQWUsQ0FBQyxDQUFDO1lBQzdCLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQzdCLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUVELHVDQUFXLEdBQVgsVUFBWSxTQUFpQjtRQUMzQixJQUFJLENBQUMsVUFBVSxDQUFDLG1CQUFtQixDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsU0FBUyxDQUFDO2FBQ3hELFNBQVMsQ0FBQyxVQUFBLEdBQUc7WUFDWixPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ25CLENBQUMsRUFBRSxVQUFBLEtBQUs7WUFDTixPQUFPLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3ZCLENBQUMsQ0FBQyxDQUFDO1FBQ0wsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxTQUFTLEVBQUUsU0FBUyxDQUFDLEVBQUUsRUFBQyxVQUFVLEVBQUUsSUFBSSxDQUFDLEtBQUssRUFBQyxDQUFDLENBQUE7SUFDeEUsQ0FBQztJQXBDSDtRQUFDLGdCQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsUUFBUSxFQUFFLFdBQVc7WUFDckIsV0FBVyxFQUFFLDBCQUEwQjtZQUN2QyxTQUFTLEVBQUUsQ0FBQyx5QkFBeUIsQ0FBQztTQUN2QyxDQUFDOzt5QkFBQTtJQWdDRix3QkFBQztBQUFELENBL0JBLEFBK0JDLElBQUE7QUEvQlkseUJBQWlCLG9CQStCN0IsQ0FBQSIsImZpbGUiOiJjb21wb25lbnRzL3Byb2ZpbGUvbWFpbC1saXN0LmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEFwaVNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9hcGkuc2VydmljZSc7XHJcbmltcG9ydCB7IFJvdXRlciwgQWN0aXZhdGVkUm91dGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcclxuICBzZWxlY3RvcjogJ21haWwtbGlzdCcsXHJcbiAgdGVtcGxhdGVVcmw6ICdtYWlsLWxpc3QuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWydtYWlsLWxpc3QuY29tcG9uZW50LmNzcyddXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBNYWlsTGlzdENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgbWVzc2FnZXMgPSBbXTtcclxuICB1c2VySWQ6IHN0cmluZztcclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGFwaVNlcnZpY2U6IEFwaVNlcnZpY2UsIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsIHByaXZhdGUgcm91dGU6IEFjdGl2YXRlZFJvdXRlKSB7IH1cclxuXHJcbiAgbmdPbkluaXQoKSB7IFxyXG4gICAgdGhpcy51c2VySWQgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndXNlcklkJyk7XHJcbiAgICB0aGlzLmFwaVNlcnZpY2UuZ2V0TWVzc2FnZXModGhpcy51c2VySWQpXHJcbiAgICAgIC5zdWJzY3JpYmUobWVzc2FnZXMgPT4ge1xyXG4gICAgICAgIFxyXG4gICAgICAgIGxldCBmaWx0ZXJlZE1lc3NhZ2VzID0gW107XHJcbiAgICAgICAgZm9yIChsZXQgaT0wOyBpPG1lc3NhZ2VzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICBpZihtZXNzYWdlc1tpXS5zdGF0dXMgPT0gJ05lcGVyxb5pxatyxJd0YScgfHwgbWVzc2FnZXNbaV0uc3RhdHVzID09ICdQZXLFvmnFq3LEl3RhJykge1xyXG4gICAgICAgICAgICBmaWx0ZXJlZE1lc3NhZ2VzLnB1c2gobWVzc2FnZXNbaV0pO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLm1lc3NhZ2VzID0gZmlsdGVyZWRNZXNzYWdlcztcclxuICAgICAgICBjb25zb2xlLmxvZygnVEhJUy5NRVNTQUdFUycpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMubWVzc2FnZXMpO1xyXG4gICAgICB9KTtcclxuICB9XHJcblxyXG4gIHZpZXdNZXNzYWdlKG1lc3NhZ2VJZDogbnVtYmVyKSB7XHJcbiAgICB0aGlzLmFwaVNlcnZpY2UuY2hhbmdlTWVzc2FnZVN0YXR1cyh0aGlzLnVzZXJJZCwgbWVzc2FnZUlkKVxyXG4gICAgICAuc3Vic2NyaWJlKHJlcyA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2cocmVzKTtcclxuICAgICAgfSwgZXJyb3IgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xyXG4gICAgICB9KTtcclxuICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFsnemludXRlcycsIG1lc3NhZ2VJZF0sIHtyZWxhdGl2ZVRvOiB0aGlzLnJvdXRlfSlcclxuICB9XHJcbn0iXX0=
