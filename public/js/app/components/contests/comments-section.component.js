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
var contests_service_1 = require('../../services/contests.service');
var index_1 = require('../../errors/index');
var auth_service_1 = require('../../services/auth.service');
var api_service_1 = require('../../services/api.service');
var forms_1 = require('@angular/forms');
var router_1 = require('@angular/router');
var angular2_notifications_1 = require('angular2-notifications');
var CommentsSectionComponent = (function () {
    function CommentsSectionComponent(contestsService, errorService, authService, apiService, fb, route, notificationsService) {
        this.contestsService = contestsService;
        this.errorService = errorService;
        this.authService = authService;
        this.apiService = apiService;
        this.fb = fb;
        this.route = route;
        this.notificationsService = notificationsService;
        this.comments = [];
        this.userId = '';
        this.options = {
            position: ["top", "right"]
        };
    }
    CommentsSectionComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.contestId = params['id'];
        });
        this.userId = localStorage.getItem('userId');
        this.apiService.getUserInfo(this.userId)
            .subscribe(function (user) {
            console.log('comments-section comp user var');
            console.log(user);
            _this.user = user;
        }, function (error) {
            _this.errorService.handleError(error);
        });
        this.apiService.getComments(this.contestId)
            .subscribe(function (comments) {
            console.log('comments-section getComments comments var');
            console.log(comments);
            _this.comments = comments;
            console.log('this.comments');
            console.log(_this.comments);
        }, function (error) {
            //this.errorService.handleError(error);
            _this.notificationsService.error('Įvyko klaida', 'Nepavyko gauti komentarų', { timeOut: 3000, showProgressBar: false });
        });
        // this.commentsForm = this.fb.group({
        //   comment: ['']
        // });
    };
    //  addComment(form: any) {
    //         //console.log(comment.value);
    //         console.log(form);
    //         console.log(form.comment.value);
    //         //this.comment.value = '';
    //     }
    CommentsSectionComponent.prototype.addComment = function (comment) {
        var _this = this;
        console.log(comment);
        this.comments.push({ comment: comment, commentAuthor: this.user });
        this.apiService.addComment({ comment: comment, commentAuthor: this.user }, this.contestId)
            .subscribe(function (comments) {
            console.log('comments-section addComment comments var');
            console.log(comments);
            _this.comments = comments;
            _this.notificationsService.success('Prisijungta', 'Komentaras įkeltas', { timeOut: 3000, showProgressBar: false });
        }, function (error) {
            //this.errorService.handleError(error);
            _this.notificationsService.error('Įvyko klaida', 'Nepavyko pridėti komentaro', { timeOut: 3000, showProgressBar: false });
        });
        this.commentField = '';
        console.log(this.comments);
    };
    CommentsSectionComponent.prototype.isDesigner = function () {
        return this.authService.isDesigner();
    };
    CommentsSectionComponent.prototype.isContestPublisher = function (contestAuthorId) {
        var userId = localStorage.getItem('userId');
        return contestAuthorId == userId;
    };
    CommentsSectionComponent.prototype.isClient = function () {
        return this.authService.isClient();
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], CommentsSectionComponent.prototype, "contest", void 0);
    CommentsSectionComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'comments-section',
            templateUrl: 'comments-section.component.html'
        }), 
        __metadata('design:paramtypes', [contests_service_1.ContestsService, index_1.ErrorService, auth_service_1.AuthService, api_service_1.ApiService, forms_1.FormBuilder, router_1.ActivatedRoute, angular2_notifications_1.NotificationsService])
    ], CommentsSectionComponent);
    return CommentsSectionComponent;
}());
exports.CommentsSectionComponent = CommentsSectionComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvY29udGVzdHMvY29tbWVudHMtc2VjdGlvbi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUFvRCxlQUFlLENBQUMsQ0FBQTtBQUVwRSxpQ0FBZ0MsaUNBQWlDLENBQUMsQ0FBQTtBQUNsRSxzQkFBNkIsb0JBQW9CLENBQUMsQ0FBQTtBQUNsRCw2QkFBNEIsNkJBQTZCLENBQUMsQ0FBQTtBQUMxRCw0QkFBMkIsNEJBQTRCLENBQUMsQ0FBQTtBQUN4RCxzQkFBZ0UsZ0JBQWdCLENBQUMsQ0FBQTtBQUNqRix1QkFBdUMsaUJBQWlCLENBQUMsQ0FBQTtBQUN6RCx1Q0FBcUMsd0JBQXdCLENBQUMsQ0FBQTtBQU85RDtJQVlHLGtDQUFvQixlQUFnQyxFQUNqQyxZQUEwQixFQUMxQixXQUF3QixFQUN4QixVQUFzQixFQUN0QixFQUFlLEVBQ2YsS0FBcUIsRUFDckIsb0JBQTBDO1FBTnpDLG9CQUFlLEdBQWYsZUFBZSxDQUFpQjtRQUNqQyxpQkFBWSxHQUFaLFlBQVksQ0FBYztRQUMxQixnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUN4QixlQUFVLEdBQVYsVUFBVSxDQUFZO1FBQ3RCLE9BQUUsR0FBRixFQUFFLENBQWE7UUFDZixVQUFLLEdBQUwsS0FBSyxDQUFnQjtRQUNyQix5QkFBb0IsR0FBcEIsb0JBQW9CLENBQXNCO1FBZDdELGFBQVEsR0FBVSxFQUFFLENBQUM7UUFFckIsV0FBTSxHQUFXLEVBQUUsQ0FBQztRQUdiLFlBQU8sR0FBRztZQUNkLFFBQVEsRUFBRSxDQUFDLEtBQUssRUFBQyxPQUFPLENBQUM7U0FDMUIsQ0FBQztJQVNRLENBQUM7SUFHYiwyQ0FBUSxHQUFSO1FBQUEsaUJBNkJFO1FBNUJBLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxVQUFDLE1BQWM7WUFDM0MsS0FBSSxDQUFDLFNBQVMsR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7UUFD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QVUsR0FBVjtRQUNFLE1BQU0sQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLFVBQVUsRUFBRSxDQUFDO0lBQ3ZDLENBQUM7SUFFRCxxREFBa0IsR0FBbEIsVUFBbUIsZUFBdUI7UUFDeEMsSUFBSSxNQUFNLEdBQUcsWUFBWSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUM1QyxNQUFNLENBQUMsZUFBZSxJQUFJLE1BQU0sQ0FBQztJQUNuQyxDQUFDO0lBRUQsMkNBQVEsR0FBUjtRQUNFLE1BQU0sQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQ3JDLENBQUM7SUF0RkE7UUFBQyxZQUFLLEVBQUU7OzZEQUFBO0lBUlg7UUFBQyxnQkFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFFBQVEsRUFBRSxrQkFBa0I7WUFDNUIsV0FBVyxFQUFFLGlDQUFpQztTQUMvQyxDQUFDOztnQ0FBQTtJQTRGRiwrQkFBQztBQUFELENBM0ZBLEFBMkZDLElBQUE7QUEzRlksZ0NBQXdCLDJCQTJGcEMsQ0FBQSIsImZpbGUiOiJjb21wb25lbnRzL2NvbnRlc3RzL2NvbW1lbnRzLXNlY3Rpb24uY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIFZpZXdDaGlsZCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQ29udGVzdCB9IGZyb20gJy4uLy4uL21vZGVscy9jb250ZXN0JztcclxuaW1wb3J0IHsgQ29udGVzdHNTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvY29udGVzdHMuc2VydmljZSc7XHJcbmltcG9ydCB7IEVycm9yU2VydmljZSB9IGZyb20gJy4uLy4uL2Vycm9ycy9pbmRleCc7XHJcbmltcG9ydCB7IEF1dGhTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvYXV0aC5zZXJ2aWNlJztcclxuaW1wb3J0IHsgQXBpU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL2FwaS5zZXJ2aWNlJztcclxuaW1wb3J0IHsgRm9ybUdyb3VwLCBGb3JtQ29udHJvbCwgRm9ybUJ1aWxkZXIsIFZhbGlkYXRvcnMgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcbmltcG9ydCB7IFBhcmFtcywgQWN0aXZhdGVkUm91dGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5pbXBvcnQgeyBOb3RpZmljYXRpb25zU2VydmljZSB9IGZyb20gJ2FuZ3VsYXIyLW5vdGlmaWNhdGlvbnMnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcclxuICBzZWxlY3RvcjogJ2NvbW1lbnRzLXNlY3Rpb24nLFxyXG4gIHRlbXBsYXRlVXJsOiAnY29tbWVudHMtc2VjdGlvbi5jb21wb25lbnQuaHRtbCdcclxufSlcclxuZXhwb3J0IGNsYXNzIENvbW1lbnRzU2VjdGlvbkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgIC8vcHVibGljIGNvbW1lbnRzRm9ybTogRm9ybUdyb3VwO1xyXG4gICAvL0BWaWV3Q2hpbGQoJ2NvbW1lbnQnKSBjb21tZW50O1xyXG4gICBASW5wdXQoKSBjb250ZXN0O1xyXG4gICBjb21tZW50czogYW55W10gPSBbXTtcclxuICAgY29tbWVudEZpZWxkOiBzdHJpbmc7XHJcbiAgIHVzZXJJZDogc3RyaW5nID0gJyc7XHJcbiAgIHVzZXI6IGFueTtcclxuICAgY29udGVzdElkOiBzdHJpbmc7XHJcbiAgIHB1YmxpYyBvcHRpb25zID0ge1xyXG4gICAgICBwb3NpdGlvbjogW1widG9wXCIsXCJyaWdodFwiXVxyXG4gICAgfTtcclxuICAgY29uc3RydWN0b3IocHJpdmF0ZSBjb250ZXN0c1NlcnZpY2U6IENvbnRlc3RzU2VydmljZSxcclxuICAgICAgICAgICAgICBwcml2YXRlIGVycm9yU2VydmljZTogRXJyb3JTZXJ2aWNlLFxyXG4gICAgICAgICAgICAgIHByaXZhdGUgYXV0aFNlcnZpY2U6IEF1dGhTZXJ2aWNlLFxyXG4gICAgICAgICAgICAgIHByaXZhdGUgYXBpU2VydmljZTogQXBpU2VydmljZSxcclxuICAgICAgICAgICAgICBwcml2YXRlIGZiOiBGb3JtQnVpbGRlcixcclxuICAgICAgICAgICAgICBwcml2YXRlIHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSxcclxuICAgICAgICAgICAgICBwcml2YXRlIG5vdGlmaWNhdGlvbnNTZXJ2aWNlOiBOb3RpZmljYXRpb25zU2VydmljZSkgeyBcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICBcclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgICB0aGlzLnJvdXRlLnBhcmFtcy5zdWJzY3JpYmUoKHBhcmFtczogUGFyYW1zKSA9PiB7XHJcbiAgICB0aGlzLmNvbnRlc3RJZCA9IHBhcmFtc1snaWQnXTtcclxuICAgIH0pO1xyXG4gICAgdGhpcy51c2VySWQgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndXNlcklkJyk7XHJcbiAgICB0aGlzLmFwaVNlcnZpY2UuZ2V0VXNlckluZm8odGhpcy51c2VySWQpXHJcbiAgICAgIC5zdWJzY3JpYmUodXNlciA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ2NvbW1lbnRzLXNlY3Rpb24gY29tcCB1c2VyIHZhcicpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHVzZXIpO1xyXG4gICAgICAgIHRoaXMudXNlciA9IHVzZXI7XHJcbiAgICAgIH0sXHJcbiAgICAgIGVycm9yID0+IHtcclxuICAgICAgICAgIHRoaXMuZXJyb3JTZXJ2aWNlLmhhbmRsZUVycm9yKGVycm9yKTtcclxuICAgICAgfSk7XHJcbiAgICB0aGlzLmFwaVNlcnZpY2UuZ2V0Q29tbWVudHModGhpcy5jb250ZXN0SWQpXHJcbiAgICAgIC5zdWJzY3JpYmUoY29tbWVudHMgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdjb21tZW50cy1zZWN0aW9uIGdldENvbW1lbnRzIGNvbW1lbnRzIHZhcicpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGNvbW1lbnRzKTtcclxuICAgICAgICB0aGlzLmNvbW1lbnRzID0gY29tbWVudHM7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ3RoaXMuY29tbWVudHMnKTtcclxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLmNvbW1lbnRzKTtcclxuICAgICAgfSxcclxuICAgICAgZXJyb3IgPT4ge1xyXG4gICAgICAgICAgLy90aGlzLmVycm9yU2VydmljZS5oYW5kbGVFcnJvcihlcnJvcik7XHJcbiAgICAgICAgICB0aGlzLm5vdGlmaWNhdGlvbnNTZXJ2aWNlLmVycm9yKCfErnZ5a28ga2xhaWRhJywgJ05lcGF2eWtvIGdhdXRpIGtvbWVudGFyxbMnLCB7dGltZU91dDogMzAwMCwgc2hvd1Byb2dyZXNzQmFyOiBmYWxzZX0pXHJcbiAgICAgIH0pO1xyXG4gICAgICAvLyB0aGlzLmNvbW1lbnRzRm9ybSA9IHRoaXMuZmIuZ3JvdXAoe1xyXG4gICAgICAvLyAgIGNvbW1lbnQ6IFsnJ11cclxuICAgICAgLy8gfSk7XHJcbiAgIH1cclxuXHJcbi8vICBhZGRDb21tZW50KGZvcm06IGFueSkge1xyXG4vLyAgICAgICAgIC8vY29uc29sZS5sb2coY29tbWVudC52YWx1ZSk7XHJcbi8vICAgICAgICAgY29uc29sZS5sb2coZm9ybSk7XHJcbi8vICAgICAgICAgY29uc29sZS5sb2coZm9ybS5jb21tZW50LnZhbHVlKTtcclxuLy8gICAgICAgICAvL3RoaXMuY29tbWVudC52YWx1ZSA9ICcnO1xyXG4vLyAgICAgfVxyXG4gIGFkZENvbW1lbnQoY29tbWVudDogc3RyaW5nKSB7XHJcbiAgICBjb25zb2xlLmxvZyhjb21tZW50KTtcclxuICAgIHRoaXMuY29tbWVudHMucHVzaCh7Y29tbWVudDogY29tbWVudCwgY29tbWVudEF1dGhvcjogdGhpcy51c2VyfSk7XHJcbiAgICB0aGlzLmFwaVNlcnZpY2UuYWRkQ29tbWVudCh7Y29tbWVudDogY29tbWVudCwgY29tbWVudEF1dGhvcjogdGhpcy51c2VyfSwgdGhpcy5jb250ZXN0SWQpXHJcbiAgICAgIC5zdWJzY3JpYmUoY29tbWVudHMgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdjb21tZW50cy1zZWN0aW9uIGFkZENvbW1lbnQgY29tbWVudHMgdmFyJyk7XHJcbiAgICAgICAgY29uc29sZS5sb2coY29tbWVudHMpO1xyXG4gICAgICAgIHRoaXMuY29tbWVudHMgPSBjb21tZW50cztcclxuICAgICAgICB0aGlzLm5vdGlmaWNhdGlvbnNTZXJ2aWNlLnN1Y2Nlc3MoJ1ByaXNpanVuZ3RhJywgJ0tvbWVudGFyYXMgxK9rZWx0YXMnLCB7dGltZU91dDogMzAwMCwgc2hvd1Byb2dyZXNzQmFyOiBmYWxzZX0pO1xyXG4gICAgICB9LCBcclxuICAgICAgZXJyb3IgPT4ge1xyXG4gICAgICAgICAgLy90aGlzLmVycm9yU2VydmljZS5oYW5kbGVFcnJvcihlcnJvcik7XHJcbiAgICAgICAgICB0aGlzLm5vdGlmaWNhdGlvbnNTZXJ2aWNlLmVycm9yKCfErnZ5a28ga2xhaWRhJywgJ05lcGF2eWtvIHByaWTEl3RpIGtvbWVudGFybycsIHt0aW1lT3V0OiAzMDAwLCBzaG93UHJvZ3Jlc3NCYXI6IGZhbHNlfSlcclxuICAgICAgfSk7XHJcbiAgICB0aGlzLmNvbW1lbnRGaWVsZCA9ICcnO1xyXG4gICAgY29uc29sZS5sb2codGhpcy5jb21tZW50cyk7XHJcbiAgfVxyXG5cclxuICBpc0Rlc2lnbmVyKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuYXV0aFNlcnZpY2UuaXNEZXNpZ25lcigpO1xyXG4gIH1cclxuXHJcbiAgaXNDb250ZXN0UHVibGlzaGVyKGNvbnRlc3RBdXRob3JJZDogc3RyaW5nKSB7XHJcbiAgICB2YXIgdXNlcklkID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3VzZXJJZCcpO1xyXG4gICAgcmV0dXJuIGNvbnRlc3RBdXRob3JJZCA9PSB1c2VySWQ7XHJcbiAgfVxyXG5cclxuICBpc0NsaWVudCgpIHtcclxuICAgIHJldHVybiB0aGlzLmF1dGhTZXJ2aWNlLmlzQ2xpZW50KCk7XHJcbiAgfVxyXG5cclxufSJdfQ==
