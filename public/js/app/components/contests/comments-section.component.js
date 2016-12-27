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
        this.isLoading = false;
        this.options = {
            position: ["top", "right"]
        };
    }
    CommentsSectionComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.isLoading = true;
        this.route.params.subscribe(function (params) {
            _this.contestId = params['id'];
        });
        this.userId = sessionStorage.getItem('userId');
        this.apiService.getUserInfo(this.userId)
            .subscribe(function (user) {
            console.log('comments-section comp user var');
            console.log(user);
            _this.user = user;
        }, function (error) {
            _this.isLoading = false;
            //this.notificationsService.error(error.title, error.error.message, {timeOut: 3000, showProgressBar: false})
            //this.errorService.handleError(error);
        });
        this.apiService.getComments(this.contestId)
            .subscribe(function (comments) {
            console.log('comments-section getComments comments var');
            console.log(comments);
            _this.comments = comments;
            _this.isLoading = false;
            console.log('this.comments');
            console.log(_this.comments);
        }, function (error) {
            //this.errorService.handleError(error);
            _this.isLoading = false;
            // if(this.user) {
            //   this.notificationsService.error(error.title, error.error.message, {timeOut: 3000, showProgressBar: false})
            // } else {
            //   this.user = null;
            // }
            //this.comments = [];
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
        this.isLoading = true;
        console.log(comment);
        if (comment == ' ' || comment == '') {
            this.notificationsService.info('Tuščias komentaras', 'Komentaro laukas negali būti tuščias', { timeOut: 3000, showProgressBar: true });
        }
        else {
            this.comments.push({ comment: comment, commentAuthor: this.user });
            this.apiService.addComment({ comment: comment, commentAuthor: this.user }, this.contestId)
                .subscribe(function (comments) {
                console.log('comments-section addComment comments var');
                console.log(comments);
                _this.comments = comments;
                _this.isLoading = false;
                _this.notificationsService.success('Įkelta', 'Komentaras įkeltas', { timeOut: 3000, showProgressBar: false });
            }, function (error) {
                //this.errorService.handleError(error);
                _this.isLoading = false;
                _this.notificationsService.error(error.title, error.error.message, { timeOut: 3000, showProgressBar: false });
            });
            this.commentField = '';
            console.log(this.comments);
        }
    };
    CommentsSectionComponent.prototype.isDesigner = function () {
        return this.authService.isDesigner();
    };
    CommentsSectionComponent.prototype.isContestPublisher = function (contestAuthorId) {
        var userId = sessionStorage.getItem('userId');
        return contestAuthorId == userId;
    };
    CommentsSectionComponent.prototype.isClient = function () {
        return this.authService.isClient();
    };
    CommentsSectionComponent.prototype.isLoggedIn = function () {
        return this.authService.isLoggedIn();
    };
    CommentsSectionComponent.prototype.isAdmin = function () {
        return this.authService.isAdmin();
    };
    CommentsSectionComponent.prototype.isEmailConfirmed = function () {
        return sessionStorage.getItem('emailConfirmed') == 'true';
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], CommentsSectionComponent.prototype, "contest", void 0);
    CommentsSectionComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'comments-section',
            templateUrl: 'comments-section.component.html',
            styleUrls: ['comments-section.component.css']
        }), 
        __metadata('design:paramtypes', [contests_service_1.ContestsService, index_1.ErrorService, auth_service_1.AuthService, api_service_1.ApiService, forms_1.FormBuilder, router_1.ActivatedRoute, angular2_notifications_1.NotificationsService])
    ], CommentsSectionComponent);
    return CommentsSectionComponent;
}());
exports.CommentsSectionComponent = CommentsSectionComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvY29udGVzdHMvY29tbWVudHMtc2VjdGlvbi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUFvRCxlQUFlLENBQUMsQ0FBQTtBQUVwRSxpQ0FBZ0MsaUNBQWlDLENBQUMsQ0FBQTtBQUNsRSxzQkFBNkIsb0JBQW9CLENBQUMsQ0FBQTtBQUNsRCw2QkFBNEIsNkJBQTZCLENBQUMsQ0FBQTtBQUMxRCw0QkFBMkIsNEJBQTRCLENBQUMsQ0FBQTtBQUN4RCxzQkFBZ0UsZ0JBQWdCLENBQUMsQ0FBQTtBQUNqRix1QkFBdUMsaUJBQWlCLENBQUMsQ0FBQTtBQUN6RCx1Q0FBcUMsd0JBQXdCLENBQUMsQ0FBQTtBQVE5RDtJQWFHLGtDQUFvQixlQUFnQyxFQUNqQyxZQUEwQixFQUMxQixXQUF3QixFQUN4QixVQUFzQixFQUN0QixFQUFlLEVBQ2YsS0FBcUIsRUFDckIsb0JBQTBDO1FBTnpDLG9CQUFlLEdBQWYsZUFBZSxDQUFpQjtRQUNqQyxpQkFBWSxHQUFaLFlBQVksQ0FBYztRQUMxQixnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUN4QixlQUFVLEdBQVYsVUFBVSxDQUFZO1FBQ3RCLE9BQUUsR0FBRixFQUFFLENBQWE7UUFDZixVQUFLLEdBQUwsS0FBSyxDQUFnQjtRQUNyQix5QkFBb0IsR0FBcEIsb0JBQW9CLENBQXNCO1FBZjdELGFBQVEsR0FBVSxFQUFFLENBQUM7UUFFckIsV0FBTSxHQUFXLEVBQUUsQ0FBQztRQUdwQixjQUFTLEdBQUcsS0FBSyxDQUFDO1FBQ1gsWUFBTyxHQUFHO1lBQ2QsUUFBUSxFQUFFLENBQUMsS0FBSyxFQUFDLE9BQU8sQ0FBQztTQUMxQixDQUFDO0lBU1EsQ0FBQztJQUdiLDJDQUFRLEdBQVI7UUFBQSxpQkF3Q0U7UUF2Q0EsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUM7UUFDdEIsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLFVB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Q3BDLENBQUM7SUFFRCxtREFBZ0IsR0FBaEI7UUFDRyxNQUFNLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLE1BQU0sQ0FBQztJQUM3RCxDQUFDO0lBckhBO1FBQUMsWUFBSyxFQUFFOzs2REFBQTtJQVRYO1FBQUMsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixRQUFRLEVBQUUsa0JBQWtCO1lBQzVCLFdBQVcsRUFBRSxpQ0FBaUM7WUFDOUMsU0FBUyxFQUFFLENBQUMsZ0NBQWdDLENBQUM7U0FDOUMsQ0FBQzs7Z0NBQUE7SUEySEYsK0JBQUM7QUFBRCxDQTFIQSxBQTBIQyxJQUFBO0FBMUhZLGdDQUF3QiwyQkEwSHBDLENBQUEiLCJmaWxlIjoiY29tcG9uZW50cy9jb250ZXN0cy9jb21tZW50cy1zZWN0aW9uLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBWaWV3Q2hpbGQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IENvbnRlc3QgfSBmcm9tICcuLi8uLi9tb2RlbHMvY29udGVzdCc7XHJcbmltcG9ydCB7IENvbnRlc3RzU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL2NvbnRlc3RzLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBFcnJvclNlcnZpY2UgfSBmcm9tICcuLi8uLi9lcnJvcnMvaW5kZXgnO1xyXG5pbXBvcnQgeyBBdXRoU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL2F1dGguc2VydmljZSc7XHJcbmltcG9ydCB7IEFwaVNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9hcGkuc2VydmljZSc7XHJcbmltcG9ydCB7IEZvcm1Hcm91cCwgRm9ybUNvbnRyb2wsIEZvcm1CdWlsZGVyLCBWYWxpZGF0b3JzIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5pbXBvcnQgeyBQYXJhbXMsIEFjdGl2YXRlZFJvdXRlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuaW1wb3J0IHsgTm90aWZpY2F0aW9uc1NlcnZpY2UgfSBmcm9tICdhbmd1bGFyMi1ub3RpZmljYXRpb25zJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIG1vZHVsZUlkOiBtb2R1bGUuaWQsXHJcbiAgc2VsZWN0b3I6ICdjb21tZW50cy1zZWN0aW9uJyxcclxuICB0ZW1wbGF0ZVVybDogJ2NvbW1lbnRzLXNlY3Rpb24uY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWydjb21tZW50cy1zZWN0aW9uLmNvbXBvbmVudC5jc3MnXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgQ29tbWVudHNTZWN0aW9uQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuICAgLy9wdWJsaWMgY29tbWVudHNGb3JtOiBGb3JtR3JvdXA7XHJcbiAgIC8vQFZpZXdDaGlsZCgnY29tbWVudCcpIGNvbW1lbnQ7XHJcbiAgIEBJbnB1dCgpIGNvbnRlc3Q7XHJcbiAgIGNvbW1lbnRzOiBhbnlbXSA9IFtdO1xyXG4gICBjb21tZW50RmllbGQ6IHN0cmluZztcclxuICAgdXNlcklkOiBzdHJpbmcgPSAnJztcclxuICAgdXNlcjogYW55O1xyXG4gICBjb250ZXN0SWQ6IHN0cmluZztcclxuICAgaXNMb2FkaW5nID0gZmFsc2U7XHJcbiAgIHB1YmxpYyBvcHRpb25zID0ge1xyXG4gICAgICBwb3NpdGlvbjogW1widG9wXCIsXCJyaWdodFwiXVxyXG4gICAgfTtcclxuICAgY29uc3RydWN0b3IocHJpdmF0ZSBjb250ZXN0c1NlcnZpY2U6IENvbnRlc3RzU2VydmljZSxcclxuICAgICAgICAgICAgICBwcml2YXRlIGVycm9yU2VydmljZTogRXJyb3JTZXJ2aWNlLFxyXG4gICAgICAgICAgICAgIHByaXZhdGUgYXV0aFNlcnZpY2U6IEF1dGhTZXJ2aWNlLFxyXG4gICAgICAgICAgICAgIHByaXZhdGUgYXBpU2VydmljZTogQXBpU2VydmljZSxcclxuICAgICAgICAgICAgICBwcml2YXRlIGZiOiBGb3JtQnVpbGRlcixcclxuICAgICAgICAgICAgICBwcml2YXRlIHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSxcclxuICAgICAgICAgICAgICBwcml2YXRlIG5vdGlmaWNhdGlvbnNTZXJ2aWNlOiBOb3RpZmljYXRpb25zU2VydmljZSkgeyBcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICBcclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgICB0aGlzLmlzTG9hZGluZyA9IHRydWU7XHJcbiAgICB0aGlzLnJvdXRlLnBhcmFtcy5zdWJzY3JpYmUoKHBhcmFtczogUGFyYW1zKSA9PiB7XHJcbiAgICB0aGlzLmNvbnRlc3RJZCA9IHBhcmFtc1snaWQnXTtcclxuICAgIH0pO1xyXG4gICAgdGhpcy51c2VySWQgPSBzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKCd1c2VySWQnKTtcclxuICAgIHRoaXMuYXBpU2VydmljZS5nZXRVc2VySW5mbyh0aGlzLnVzZXJJZClcclxuICAgICAgLnN1YnNjcmliZSh1c2VyID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZygnY29tbWVudHMtc2VjdGlvbiBjb21wIHVzZXIgdmFyJyk7XHJcbiAgICAgICAgY29uc29sZS5sb2codXNlcik7XHJcbiAgICAgICAgdGhpcy51c2VyID0gdXNlcjtcclxuICAgICAgfSxcclxuICAgICAgZXJyb3IgPT4ge1xyXG4gICAgICAgIHRoaXMuaXNMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgLy90aGlzLm5vdGlmaWNhdGlvbnNTZXJ2aWNlLmVycm9yKGVycm9yLnRpdGxlLCBlcnJvci5lcnJvci5tZXNzYWdlLCB7dGltZU91dDogMzAwMCwgc2hvd1Byb2dyZXNzQmFyOiBmYWxzZX0pXHJcbiAgICAgICAgICAvL3RoaXMuZXJyb3JTZXJ2aWNlLmhhbmRsZUVycm9yKGVycm9yKTtcclxuICAgICAgfSk7XHJcbiAgICB0aGlzLmFwaVNlcnZpY2UuZ2V0Q29tbWVudHModGhpcy5jb250ZXN0SWQpXHJcbiAgICAgIC5zdWJzY3JpYmUoY29tbWVudHMgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdjb21tZW50cy1zZWN0aW9uIGdldENvbW1lbnRzIGNvbW1lbnRzIHZhcicpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGNvbW1lbnRzKTtcclxuICAgICAgICB0aGlzLmNvbW1lbnRzID0gY29tbWVudHM7XHJcbiAgICAgICAgdGhpcy5pc0xvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICBjb25zb2xlLmxvZygndGhpcy5jb21tZW50cycpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMuY29tbWVudHMpO1xyXG4gICAgICB9LFxyXG4gICAgICBlcnJvciA9PiB7XHJcbiAgICAgICAgICAvL3RoaXMuZXJyb3JTZXJ2aWNlLmhhbmRsZUVycm9yKGVycm9yKTtcclxuICAgICAgICAgIHRoaXMuaXNMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAvLyBpZih0aGlzLnVzZXIpIHtcclxuICAgICAgICAgIC8vICAgdGhpcy5ub3RpZmljYXRpb25zU2VydmljZS5lcnJvcihlcnJvci50aXRsZSwgZXJyb3IuZXJyb3IubWVzc2FnZSwge3RpbWVPdXQ6IDMwMDAsIHNob3dQcm9ncmVzc0JhcjogZmFsc2V9KVxyXG4gICAgICAgICAgLy8gfSBlbHNlIHtcclxuICAgICAgICAgIC8vICAgdGhpcy51c2VyID0gbnVsbDtcclxuICAgICAgICAgIC8vIH1cclxuICAgICAgICAgIFxyXG4gICAgICAgICAgLy90aGlzLmNvbW1lbnRzID0gW107XHJcbiAgICAgIH0pO1xyXG4gICAgICAvLyB0aGlzLmNvbW1lbnRzRm9ybSA9IHRoaXMuZmIuZ3JvdXAoe1xyXG4gICAgICAvLyAgIGNvbW1lbnQ6IFsnJ11cclxuICAgICAgLy8gfSk7XHJcbiAgIH1cclxuXHJcbi8vICBhZGRDb21tZW50KGZvcm06IGFueSkge1xyXG4vLyAgICAgICAgIC8vY29uc29sZS5sb2coY29tbWVudC52YWx1ZSk7XHJcbi8vICAgICAgICAgY29uc29sZS5sb2coZm9ybSk7XHJcbi8vICAgICAgICAgY29uc29sZS5sb2coZm9ybS5jb21tZW50LnZhbHVlKTtcclxuLy8gICAgICAgICAvL3RoaXMuY29tbWVudC52YWx1ZSA9ICcnO1xyXG4vLyAgICAgfVxyXG4gIGFkZENvbW1lbnQoY29tbWVudDogc3RyaW5nKSB7XHJcbiAgICB0aGlzLmlzTG9hZGluZyA9IHRydWU7XHJcbiAgICBjb25zb2xlLmxvZyhjb21tZW50KTtcclxuICAgIGlmIChjb21tZW50ID09ICcgJyB8fCBjb21tZW50ID09ICcnKSB7XHJcbiAgICAgIHRoaXMubm90aWZpY2F0aW9uc1NlcnZpY2UuaW5mbygnVHXFocSNaWFzIGtvbWVudGFyYXMnLCAnS29tZW50YXJvIGxhdWthcyBuZWdhbGkgYsWrdGkgdHXFocSNaWFzJywge3RpbWVPdXQ6IDMwMDAsIHNob3dQcm9ncmVzc0JhcjogdHJ1ZX0pXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgdGhpcy5jb21tZW50cy5wdXNoKHtjb21tZW50OiBjb21tZW50LCBjb21tZW50QXV0aG9yOiB0aGlzLnVzZXJ9KTtcclxuICAgIHRoaXMuYXBpU2VydmljZS5hZGRDb21tZW50KHtjb21tZW50OiBjb21tZW50LCBjb21tZW50QXV0aG9yOiB0aGlzLnVzZXJ9LCB0aGlzLmNvbnRlc3RJZClcclxuICAgICAgLnN1YnNjcmliZShjb21tZW50cyA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ2NvbW1lbnRzLXNlY3Rpb24gYWRkQ29tbWVudCBjb21tZW50cyB2YXInKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhjb21tZW50cyk7XHJcbiAgICAgICAgdGhpcy5jb21tZW50cyA9IGNvbW1lbnRzO1xyXG4gICAgICAgIHRoaXMuaXNMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5ub3RpZmljYXRpb25zU2VydmljZS5zdWNjZXNzKCfErmtlbHRhJywgJ0tvbWVudGFyYXMgxK9rZWx0YXMnLCB7dGltZU91dDogMzAwMCwgc2hvd1Byb2dyZXNzQmFyOiBmYWxzZX0pO1xyXG4gICAgICB9LCBcclxuICAgICAgZXJyb3IgPT4ge1xyXG4gICAgICAgICAgLy90aGlzLmVycm9yU2VydmljZS5oYW5kbGVFcnJvcihlcnJvcik7XHJcbiAgICAgICAgICB0aGlzLmlzTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgdGhpcy5ub3RpZmljYXRpb25zU2VydmljZS5lcnJvcihlcnJvci50aXRsZSwgZXJyb3IuZXJyb3IubWVzc2FnZSwge3RpbWVPdXQ6IDMwMDAsIHNob3dQcm9ncmVzc0JhcjogZmFsc2V9KVxyXG4gICAgICB9KTtcclxuICAgIHRoaXMuY29tbWVudEZpZWxkID0gJyc7XHJcbiAgICBjb25zb2xlLmxvZyh0aGlzLmNvbW1lbnRzKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGlzRGVzaWduZXIoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5hdXRoU2VydmljZS5pc0Rlc2lnbmVyKCk7XHJcbiAgfVxyXG5cclxuICBpc0NvbnRlc3RQdWJsaXNoZXIoY29udGVzdEF1dGhvcklkOiBzdHJpbmcpIHtcclxuICAgIHZhciB1c2VySWQgPSBzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKCd1c2VySWQnKTtcclxuICAgIHJldHVybiBjb250ZXN0QXV0aG9ySWQgPT0gdXNlcklkO1xyXG4gIH1cclxuXHJcbiAgaXNDbGllbnQoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5hdXRoU2VydmljZS5pc0NsaWVudCgpO1xyXG4gIH1cclxuXHJcbiAgaXNMb2dnZWRJbigpIHtcclxuICAgIHJldHVybiB0aGlzLmF1dGhTZXJ2aWNlLmlzTG9nZ2VkSW4oKTtcclxuICB9XHJcblxyXG4gIGlzQWRtaW4oKSB7XHJcbiAgICByZXR1cm4gdGhpcy5hdXRoU2VydmljZS5pc0FkbWluKCk7XHJcbiAgfVxyXG5cclxuICBpc0VtYWlsQ29uZmlybWVkICgpIHtcclxuICAgICByZXR1cm4gc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbSgnZW1haWxDb25maXJtZWQnKSA9PSAndHJ1ZSc7XHJcbiAgfVxyXG5cclxufSJdfQ==
