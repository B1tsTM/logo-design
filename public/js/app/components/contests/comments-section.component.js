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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvY29udGVzdHMvY29tbWVudHMtc2VjdGlvbi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUFvRCxlQUFlLENBQUMsQ0FBQTtBQUVwRSxpQ0FBZ0MsaUNBQWlDLENBQUMsQ0FBQTtBQUNsRSxzQkFBNkIsb0JBQW9CLENBQUMsQ0FBQTtBQUNsRCw2QkFBNEIsNkJBQTZCLENBQUMsQ0FBQTtBQUMxRCw0QkFBMkIsNEJBQTRCLENBQUMsQ0FBQTtBQUN4RCxzQkFBZ0UsZ0JBQWdCLENBQUMsQ0FBQTtBQUNqRix1QkFBdUMsaUJBQWlCLENBQUMsQ0FBQTtBQUN6RCx1Q0FBcUMsd0JBQXdCLENBQUMsQ0FBQTtBQU85RDtJQWFHLGtDQUFvQixlQUFnQyxFQUNqQyxZQUEwQixFQUMxQixXQUF3QixFQUN4QixVQUFzQixFQUN0QixFQUFlLEVBQ2YsS0FBcUIsRUFDckIsb0JBQTBDO1FBTnpDLG9CQUFlLEdBQWYsZUFBZSxDQUFpQjtRQUNqQyxpQkFBWSxHQUFaLFlBQVksQ0FBYztRQUMxQixnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUN4QixlQUFVLEdBQVYsVUFBVSxDQUFZO1FBQ3RCLE9BQUUsR0FBRixFQUFFLENBQWE7UUFDZixVQUFLLEdBQUwsS0FBSyxDQUFnQjtRQUNyQix5QkFBb0IsR0FBcEIsb0JBQW9CLENBQXNCO1FBZjdELGFBQVEsR0FBVSxFQUFFLENBQUM7UUFFckIsV0FBTSxHQUFXLEVBQUUsQ0FBQztRQUdwQixjQUFTLEdBQUcsS0FBSyxDQUFDO1FBQ1gsWUFBTyxHQUFHO1lBQ2QsUUFBUSxFQUFFLENBQUMsS0FBSyxFQUFDLE9BQU8sQ0FBQztTQUMxQixDQUFDO0lBU1EsQ0FBQztJQUdiLDJDQUFRLEdBQVI7UUFBQSxpQkF3Q0U7UUF2Q0EsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUM7UUFDdEIsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLFVB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QUssQ0FBQyxLQUFLLENBQUMsS0FBSyxFQUFFLEtBQUssQ0FBQyxLQUFLLENBQUMsT0FBTyxFQUFFLEVBQUMsT0FBTyxFQUFFLElBQUksRUFBRSxlQUFlLEVBQUUsS0FBSyxFQUFDLENBQUMsQ0FBQTtRQUM5RyxDQUFDLENBQUMsQ0FBQztRQUNMLElBQUksQ0FBQyxZQUFZLEdBQUcsRUFBRSxDQUFDO1FBQ3ZCLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQzdCLENBQUM7SUFFRCw2Q0FBVSxHQUFWO1FBQ0UsTUFBTSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsVUFBVSxFQUFFLENBQUM7SUFDdkMsQ0FBQztJQUVELHFEQUFrQixHQUFsQixVQUFtQixlQUF1QjtRQUN4QyxJQUFJLE1BQU0sR0FBRyxjQUFjLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQzlDLE1BQU0sQ0FBQyxlQUFlLElBQUksTUFBTSxDQUFDO0lBQ25DLENBQUM7SUFFRCwyQ0FBUSxHQUFSO1FBQ0UsTUFBTSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDckMsQ0FBQztJQUVELDZDQUFVLEdBQVY7UUFDRSxNQUFNLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxVQUFVLEVBQUUsQ0FBQztJQUN2QyxDQUFDO0lBekdBO1FBQUMsWUFBSyxFQUFFOzs2REFBQTtJQVJYO1FBQUMsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixRQUFRLEVBQUUsa0JBQWtCO1lBQzVCLFdBQVcsRUFBRSxpQ0FBaUM7U0FDL0MsQ0FBQzs7Z0NBQUE7SUErR0YsK0JBQUM7QUFBRCxDQTlHQSxBQThHQyxJQUFBO0FBOUdZLGdDQUF3QiwyQkE4R3BDLENBQUEiLCJmaWxlIjoiY29tcG9uZW50cy9jb250ZXN0cy9jb21tZW50cy1zZWN0aW9uLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBWaWV3Q2hpbGQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IENvbnRlc3QgfSBmcm9tICcuLi8uLi9tb2RlbHMvY29udGVzdCc7XHJcbmltcG9ydCB7IENvbnRlc3RzU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL2NvbnRlc3RzLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBFcnJvclNlcnZpY2UgfSBmcm9tICcuLi8uLi9lcnJvcnMvaW5kZXgnO1xyXG5pbXBvcnQgeyBBdXRoU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL2F1dGguc2VydmljZSc7XHJcbmltcG9ydCB7IEFwaVNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9hcGkuc2VydmljZSc7XHJcbmltcG9ydCB7IEZvcm1Hcm91cCwgRm9ybUNvbnRyb2wsIEZvcm1CdWlsZGVyLCBWYWxpZGF0b3JzIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5pbXBvcnQgeyBQYXJhbXMsIEFjdGl2YXRlZFJvdXRlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuaW1wb3J0IHsgTm90aWZpY2F0aW9uc1NlcnZpY2UgfSBmcm9tICdhbmd1bGFyMi1ub3RpZmljYXRpb25zJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIG1vZHVsZUlkOiBtb2R1bGUuaWQsXHJcbiAgc2VsZWN0b3I6ICdjb21tZW50cy1zZWN0aW9uJyxcclxuICB0ZW1wbGF0ZVVybDogJ2NvbW1lbnRzLXNlY3Rpb24uY29tcG9uZW50Lmh0bWwnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBDb21tZW50c1NlY3Rpb25Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gICAvL3B1YmxpYyBjb21tZW50c0Zvcm06IEZvcm1Hcm91cDtcclxuICAgLy9AVmlld0NoaWxkKCdjb21tZW50JykgY29tbWVudDtcclxuICAgQElucHV0KCkgY29udGVzdDtcclxuICAgY29tbWVudHM6IGFueVtdID0gW107XHJcbiAgIGNvbW1lbnRGaWVsZDogc3RyaW5nO1xyXG4gICB1c2VySWQ6IHN0cmluZyA9ICcnO1xyXG4gICB1c2VyOiBhbnk7XHJcbiAgIGNvbnRlc3RJZDogc3RyaW5nO1xyXG4gICBpc0xvYWRpbmcgPSBmYWxzZTtcclxuICAgcHVibGljIG9wdGlvbnMgPSB7XHJcbiAgICAgIHBvc2l0aW9uOiBbXCJ0b3BcIixcInJpZ2h0XCJdXHJcbiAgICB9O1xyXG4gICBjb25zdHJ1Y3Rvcihwcml2YXRlIGNvbnRlc3RzU2VydmljZTogQ29udGVzdHNTZXJ2aWNlLFxyXG4gICAgICAgICAgICAgIHByaXZhdGUgZXJyb3JTZXJ2aWNlOiBFcnJvclNlcnZpY2UsXHJcbiAgICAgICAgICAgICAgcHJpdmF0ZSBhdXRoU2VydmljZTogQXV0aFNlcnZpY2UsXHJcbiAgICAgICAgICAgICAgcHJpdmF0ZSBhcGlTZXJ2aWNlOiBBcGlTZXJ2aWNlLFxyXG4gICAgICAgICAgICAgIHByaXZhdGUgZmI6IEZvcm1CdWlsZGVyLFxyXG4gICAgICAgICAgICAgIHByaXZhdGUgcm91dGU6IEFjdGl2YXRlZFJvdXRlLFxyXG4gICAgICAgICAgICAgIHByaXZhdGUgbm90aWZpY2F0aW9uc1NlcnZpY2U6IE5vdGlmaWNhdGlvbnNTZXJ2aWNlKSB7IFxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIFxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICAgIHRoaXMuaXNMb2FkaW5nID0gdHJ1ZTtcclxuICAgIHRoaXMucm91dGUucGFyYW1zLnN1YnNjcmliZSgocGFyYW1zOiBQYXJhbXMpID0+IHtcclxuICAgIHRoaXMuY29udGVzdElkID0gcGFyYW1zWydpZCddO1xyXG4gICAgfSk7XHJcbiAgICB0aGlzLnVzZXJJZCA9IHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oJ3VzZXJJZCcpO1xyXG4gICAgdGhpcy5hcGlTZXJ2aWNlLmdldFVzZXJJbmZvKHRoaXMudXNlcklkKVxyXG4gICAgICAuc3Vic2NyaWJlKHVzZXIgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdjb21tZW50cy1zZWN0aW9uIGNvbXAgdXNlciB2YXInKTtcclxuICAgICAgICBjb25zb2xlLmxvZyh1c2VyKTtcclxuICAgICAgICB0aGlzLnVzZXIgPSB1c2VyO1xyXG4gICAgICB9LFxyXG4gICAgICBlcnJvciA9PiB7XHJcbiAgICAgICAgdGhpcy5pc0xvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAvL3RoaXMubm90aWZpY2F0aW9uc1NlcnZpY2UuZXJyb3IoZXJyb3IudGl0bGUsIGVycm9yLmVycm9yLm1lc3NhZ2UsIHt0aW1lT3V0OiAzMDAwLCBzaG93UHJvZ3Jlc3NCYXI6IGZhbHNlfSlcclxuICAgICAgICAgIC8vdGhpcy5lcnJvclNlcnZpY2UuaGFuZGxlRXJyb3IoZXJyb3IpO1xyXG4gICAgICB9KTtcclxuICAgIHRoaXMuYXBpU2VydmljZS5nZXRDb21tZW50cyh0aGlzLmNvbnRlc3RJZClcclxuICAgICAgLnN1YnNjcmliZShjb21tZW50cyA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ2NvbW1lbnRzLXNlY3Rpb24gZ2V0Q29tbWVudHMgY29tbWVudHMgdmFyJyk7XHJcbiAgICAgICAgY29uc29sZS5sb2coY29tbWVudHMpO1xyXG4gICAgICAgIHRoaXMuY29tbWVudHMgPSBjb21tZW50cztcclxuICAgICAgICB0aGlzLmlzTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCd0aGlzLmNvbW1lbnRzJyk7XHJcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5jb21tZW50cyk7XHJcbiAgICAgIH0sXHJcbiAgICAgIGVycm9yID0+IHtcclxuICAgICAgICAgIC8vdGhpcy5lcnJvclNlcnZpY2UuaGFuZGxlRXJyb3IoZXJyb3IpO1xyXG4gICAgICAgICAgdGhpcy5pc0xvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgIC8vIGlmKHRoaXMudXNlcikge1xyXG4gICAgICAgICAgLy8gICB0aGlzLm5vdGlmaWNhdGlvbnNTZXJ2aWNlLmVycm9yKGVycm9yLnRpdGxlLCBlcnJvci5lcnJvci5tZXNzYWdlLCB7dGltZU91dDogMzAwMCwgc2hvd1Byb2dyZXNzQmFyOiBmYWxzZX0pXHJcbiAgICAgICAgICAvLyB9IGVsc2Uge1xyXG4gICAgICAgICAgLy8gICB0aGlzLnVzZXIgPSBudWxsO1xyXG4gICAgICAgICAgLy8gfVxyXG4gICAgICAgICAgXHJcbiAgICAgICAgICAvL3RoaXMuY29tbWVudHMgPSBbXTtcclxuICAgICAgfSk7XHJcbiAgICAgIC8vIHRoaXMuY29tbWVudHNGb3JtID0gdGhpcy5mYi5ncm91cCh7XHJcbiAgICAgIC8vICAgY29tbWVudDogWycnXVxyXG4gICAgICAvLyB9KTtcclxuICAgfVxyXG5cclxuLy8gIGFkZENvbW1lbnQoZm9ybTogYW55KSB7XHJcbi8vICAgICAgICAgLy9jb25zb2xlLmxvZyhjb21tZW50LnZhbHVlKTtcclxuLy8gICAgICAgICBjb25zb2xlLmxvZyhmb3JtKTtcclxuLy8gICAgICAgICBjb25zb2xlLmxvZyhmb3JtLmNvbW1lbnQudmFsdWUpO1xyXG4vLyAgICAgICAgIC8vdGhpcy5jb21tZW50LnZhbHVlID0gJyc7XHJcbi8vICAgICB9XHJcbiAgYWRkQ29tbWVudChjb21tZW50OiBzdHJpbmcpIHtcclxuICAgIHRoaXMuaXNMb2FkaW5nID0gdHJ1ZTtcclxuICAgIGNvbnNvbGUubG9nKGNvbW1lbnQpO1xyXG4gICAgdGhpcy5jb21tZW50cy5wdXNoKHtjb21tZW50OiBjb21tZW50LCBjb21tZW50QXV0aG9yOiB0aGlzLnVzZXJ9KTtcclxuICAgIHRoaXMuYXBpU2VydmljZS5hZGRDb21tZW50KHtjb21tZW50OiBjb21tZW50LCBjb21tZW50QXV0aG9yOiB0aGlzLnVzZXJ9LCB0aGlzLmNvbnRlc3RJZClcclxuICAgICAgLnN1YnNjcmliZShjb21tZW50cyA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ2NvbW1lbnRzLXNlY3Rpb24gYWRkQ29tbWVudCBjb21tZW50cyB2YXInKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhjb21tZW50cyk7XHJcbiAgICAgICAgdGhpcy5jb21tZW50cyA9IGNvbW1lbnRzO1xyXG4gICAgICAgIHRoaXMuaXNMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5ub3RpZmljYXRpb25zU2VydmljZS5zdWNjZXNzKCfErmtlbHRhJywgJ0tvbWVudGFyYXMgxK9rZWx0YXMnLCB7dGltZU91dDogMzAwMCwgc2hvd1Byb2dyZXNzQmFyOiBmYWxzZX0pO1xyXG4gICAgICB9LCBcclxuICAgICAgZXJyb3IgPT4ge1xyXG4gICAgICAgICAgLy90aGlzLmVycm9yU2VydmljZS5oYW5kbGVFcnJvcihlcnJvcik7XHJcbiAgICAgICAgICB0aGlzLmlzTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgdGhpcy5ub3RpZmljYXRpb25zU2VydmljZS5lcnJvcihlcnJvci50aXRsZSwgZXJyb3IuZXJyb3IubWVzc2FnZSwge3RpbWVPdXQ6IDMwMDAsIHNob3dQcm9ncmVzc0JhcjogZmFsc2V9KVxyXG4gICAgICB9KTtcclxuICAgIHRoaXMuY29tbWVudEZpZWxkID0gJyc7XHJcbiAgICBjb25zb2xlLmxvZyh0aGlzLmNvbW1lbnRzKTtcclxuICB9XHJcblxyXG4gIGlzRGVzaWduZXIoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5hdXRoU2VydmljZS5pc0Rlc2lnbmVyKCk7XHJcbiAgfVxyXG5cclxuICBpc0NvbnRlc3RQdWJsaXNoZXIoY29udGVzdEF1dGhvcklkOiBzdHJpbmcpIHtcclxuICAgIHZhciB1c2VySWQgPSBzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKCd1c2VySWQnKTtcclxuICAgIHJldHVybiBjb250ZXN0QXV0aG9ySWQgPT0gdXNlcklkO1xyXG4gIH1cclxuXHJcbiAgaXNDbGllbnQoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5hdXRoU2VydmljZS5pc0NsaWVudCgpO1xyXG4gIH1cclxuXHJcbiAgaXNMb2dnZWRJbigpIHtcclxuICAgIHJldHVybiB0aGlzLmF1dGhTZXJ2aWNlLmlzTG9nZ2VkSW4oKTtcclxuICB9XHJcblxyXG59Il19
