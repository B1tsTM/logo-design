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
var CryptoJS = require('crypto-js');
var CommentsSectionComponent = (function () {
    function CommentsSectionComponent(contestsService, errorService, authService, apiService, fb, route, notificationsService, router) {
        this.contestsService = contestsService;
        this.errorService = errorService;
        this.authService = authService;
        this.apiService = apiService;
        this.fb = fb;
        this.route = route;
        this.notificationsService = notificationsService;
        this.router = router;
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
        if (!comment) {
            this.isLoading = false;
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
        return sessionStorage.getItem('emailConfirmed') == CryptoJS.SHA3('true').toString();
    };
    CommentsSectionComponent.prototype.goBack = function () {
        this.router.navigate(['/konkursai']);
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
        __metadata('design:paramtypes', [contests_service_1.ContestsService, index_1.ErrorService, auth_service_1.AuthService, api_service_1.ApiService, forms_1.FormBuilder, router_1.ActivatedRoute, angular2_notifications_1.NotificationsService, router_1.Router])
    ], CommentsSectionComponent);
    return CommentsSectionComponent;
}());
exports.CommentsSectionComponent = CommentsSectionComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvY29udGVzdHMvY29tbWVudHMtc2VjdGlvbi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUFvRCxlQUFlLENBQUMsQ0FBQTtBQUVwRSxpQ0FBZ0MsaUNBQWlDLENBQUMsQ0FBQTtBQUNsRSxzQkFBNkIsb0JBQW9CLENBQUMsQ0FBQTtBQUNsRCw2QkFBNEIsNkJBQTZCLENBQUMsQ0FBQTtBQUMxRCw0QkFBMkIsNEJBQTRCLENBQUMsQ0FBQTtBQUN4RCxzQkFBZ0UsZ0JBQWdCLENBQUMsQ0FBQTtBQUNqRix1QkFBK0MsaUJBQWlCLENBQUMsQ0FBQTtBQUNqRSx1Q0FBcUMsd0JBQXdCLENBQUMsQ0FBQTtBQUM5RCxJQUFZLFFBQVEsV0FBTSxXQUFXLENBQUMsQ0FBQTtBQVF0QztJQWFHLGtDQUFvQixlQUFnQyxFQUNqQyxZQUEwQixFQUMxQixXQUF3QixFQUN4QixVQUFzQixFQUN0QixFQUFlLEVBQ2YsS0FBcUIsRUFDckIsb0JBQTBDLEVBQzFDLE1BQWM7UUFQYixvQkFBZSxHQUFmLGVBQWUsQ0FBaUI7UUFDakMsaUJBQVksR0FBWixZQUFZLENBQWM7UUFDMUIsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFDeEIsZUFBVSxHQUFWLFVBQVUsQ0FBWTtRQUN0QixPQUFFLEdBQUYsRUFBRSxDQUFhO1FBQ2YsVUFBSyxHQUFMLEtBQUssQ0FBZ0I7UUFDckIseUJBQW9CLEdBQXBCLG9CQUFvQixDQUFzQjtRQUMxQyxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBaEJqQyxhQUFRLEdBQVUsRUFBRSxDQUFDO1FBRXJCLFdBQU0sR0FBVyxFQUFFLENBQUM7UUFHcEIsY0FBUyxHQUFHLEtBQUssQ0FBQztRQUNYLFlBQU8sR0FBRztZQUNkLFFBQVEsRUFBRSxDQUFDLEtBQUssRUFBQyxPQUFPLENBQUM7U0FDMUIsQ0FBQztJQVVRLENBQUM7SUFHYiwyQ0FBUSxHQUFSO1FBQUEsaUJBd0NFO1FBdkNBLElBQUks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QUFDO0lBQ3ZDLENBQUM7SUFFRCwwQ0FBTyxHQUFQO1FBQ0UsTUFBTSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsT0FBTyxFQUFFLENBQUM7SUFDcEMsQ0FBQztJQUVELG1EQUFnQixHQUFoQjtRQUNHLE1BQU0sQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDLGdCQUFnQixDQUFDLElBQUksUUFBUSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUN2RixDQUFDO0lBRUQseUNBQU0sR0FBTjtRQUNFLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQztJQUN2QyxDQUFDO0lBM0hBO1FBQUMsWUFBSyxFQUFFOzs2REFBQTtJQVRYO1FBQUMsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixRQUFRLEVBQUUsa0JBQWtCO1lBQzVCLFdBQVcsRUFBRSxpQ0FBaUM7WUFDOUMsU0FBUyxFQUFFLENBQUMsZ0NBQWdDLENBQUM7U0FDOUMsQ0FBQzs7Z0NBQUE7SUFpSUYsK0JBQUM7QUFBRCxDQWhJQSxBQWdJQyxJQUFBO0FBaElZLGdDQUF3QiwyQkFnSXBDLENBQUEiLCJmaWxlIjoiY29tcG9uZW50cy9jb250ZXN0cy9jb21tZW50cy1zZWN0aW9uLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBWaWV3Q2hpbGQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IENvbnRlc3QgfSBmcm9tICcuLi8uLi9tb2RlbHMvY29udGVzdCc7XHJcbmltcG9ydCB7IENvbnRlc3RzU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL2NvbnRlc3RzLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBFcnJvclNlcnZpY2UgfSBmcm9tICcuLi8uLi9lcnJvcnMvaW5kZXgnO1xyXG5pbXBvcnQgeyBBdXRoU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL2F1dGguc2VydmljZSc7XHJcbmltcG9ydCB7IEFwaVNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9hcGkuc2VydmljZSc7XHJcbmltcG9ydCB7IEZvcm1Hcm91cCwgRm9ybUNvbnRyb2wsIEZvcm1CdWlsZGVyLCBWYWxpZGF0b3JzIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5pbXBvcnQgeyBQYXJhbXMsIEFjdGl2YXRlZFJvdXRlLCBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5pbXBvcnQgeyBOb3RpZmljYXRpb25zU2VydmljZSB9IGZyb20gJ2FuZ3VsYXIyLW5vdGlmaWNhdGlvbnMnO1xyXG5pbXBvcnQgKiBhcyBDcnlwdG9KUyBmcm9tICdjcnlwdG8tanMnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcclxuICBzZWxlY3RvcjogJ2NvbW1lbnRzLXNlY3Rpb24nLFxyXG4gIHRlbXBsYXRlVXJsOiAnY29tbWVudHMtc2VjdGlvbi5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJ2NvbW1lbnRzLXNlY3Rpb24uY29tcG9uZW50LmNzcyddXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBDb21tZW50c1NlY3Rpb25Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gICAvL3B1YmxpYyBjb21tZW50c0Zvcm06IEZvcm1Hcm91cDtcclxuICAgLy9AVmlld0NoaWxkKCdjb21tZW50JykgY29tbWVudDtcclxuICAgQElucHV0KCkgY29udGVzdDtcclxuICAgY29tbWVudHM6IGFueVtdID0gW107XHJcbiAgIGNvbW1lbnRGaWVsZDogc3RyaW5nO1xyXG4gICB1c2VySWQ6IHN0cmluZyA9ICcnO1xyXG4gICB1c2VyOiBhbnk7XHJcbiAgIGNvbnRlc3RJZDogc3RyaW5nO1xyXG4gICBpc0xvYWRpbmcgPSBmYWxzZTtcclxuICAgcHVibGljIG9wdGlvbnMgPSB7XHJcbiAgICAgIHBvc2l0aW9uOiBbXCJ0b3BcIixcInJpZ2h0XCJdXHJcbiAgICB9O1xyXG4gICBjb25zdHJ1Y3Rvcihwcml2YXRlIGNvbnRlc3RzU2VydmljZTogQ29udGVzdHNTZXJ2aWNlLFxyXG4gICAgICAgICAgICAgIHByaXZhdGUgZXJyb3JTZXJ2aWNlOiBFcnJvclNlcnZpY2UsXHJcbiAgICAgICAgICAgICAgcHJpdmF0ZSBhdXRoU2VydmljZTogQXV0aFNlcnZpY2UsXHJcbiAgICAgICAgICAgICAgcHJpdmF0ZSBhcGlTZXJ2aWNlOiBBcGlTZXJ2aWNlLFxyXG4gICAgICAgICAgICAgIHByaXZhdGUgZmI6IEZvcm1CdWlsZGVyLFxyXG4gICAgICAgICAgICAgIHByaXZhdGUgcm91dGU6IEFjdGl2YXRlZFJvdXRlLFxyXG4gICAgICAgICAgICAgIHByaXZhdGUgbm90aWZpY2F0aW9uc1NlcnZpY2U6IE5vdGlmaWNhdGlvbnNTZXJ2aWNlLFxyXG4gICAgICAgICAgICAgIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIpIHsgXHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgXHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG4gICAgdGhpcy5pc0xvYWRpbmcgPSB0cnVlO1xyXG4gICAgdGhpcy5yb3V0ZS5wYXJhbXMuc3Vic2NyaWJlKChwYXJhbXM6IFBhcmFtcykgPT4ge1xyXG4gICAgdGhpcy5jb250ZXN0SWQgPSBwYXJhbXNbJ2lkJ107XHJcbiAgICB9KTtcclxuICAgIHRoaXMudXNlcklkID0gc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbSgndXNlcklkJyk7XHJcbiAgICB0aGlzLmFwaVNlcnZpY2UuZ2V0VXNlckluZm8odGhpcy51c2VySWQpXHJcbiAgICAgIC5zdWJzY3JpYmUodXNlciA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ2NvbW1lbnRzLXNlY3Rpb24gY29tcCB1c2VyIHZhcicpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHVzZXIpO1xyXG4gICAgICAgIHRoaXMudXNlciA9IHVzZXI7XHJcbiAgICAgIH0sXHJcbiAgICAgIGVycm9yID0+IHtcclxuICAgICAgICB0aGlzLmlzTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgIC8vdGhpcy5ub3RpZmljYXRpb25zU2VydmljZS5lcnJvcihlcnJvci50aXRsZSwgZXJyb3IuZXJyb3IubWVzc2FnZSwge3RpbWVPdXQ6IDMwMDAsIHNob3dQcm9ncmVzc0JhcjogZmFsc2V9KVxyXG4gICAgICAgICAgLy90aGlzLmVycm9yU2VydmljZS5oYW5kbGVFcnJvcihlcnJvcik7XHJcbiAgICAgIH0pO1xyXG4gICAgdGhpcy5hcGlTZXJ2aWNlLmdldENvbW1lbnRzKHRoaXMuY29udGVzdElkKVxyXG4gICAgICAuc3Vic2NyaWJlKGNvbW1lbnRzID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZygnY29tbWVudHMtc2VjdGlvbiBnZXRDb21tZW50cyBjb21tZW50cyB2YXInKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhjb21tZW50cyk7XHJcbiAgICAgICAgdGhpcy5jb21tZW50cyA9IGNvbW1lbnRzO1xyXG4gICAgICAgIHRoaXMuaXNMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ3RoaXMuY29tbWVudHMnKTtcclxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLmNvbW1lbnRzKTtcclxuICAgICAgfSxcclxuICAgICAgZXJyb3IgPT4ge1xyXG4gICAgICAgICAgLy90aGlzLmVycm9yU2VydmljZS5oYW5kbGVFcnJvcihlcnJvcik7XHJcbiAgICAgICAgICB0aGlzLmlzTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgLy8gaWYodGhpcy51c2VyKSB7XHJcbiAgICAgICAgICAvLyAgIHRoaXMubm90aWZpY2F0aW9uc1NlcnZpY2UuZXJyb3IoZXJyb3IudGl0bGUsIGVycm9yLmVycm9yLm1lc3NhZ2UsIHt0aW1lT3V0OiAzMDAwLCBzaG93UHJvZ3Jlc3NCYXI6IGZhbHNlfSlcclxuICAgICAgICAgIC8vIH0gZWxzZSB7XHJcbiAgICAgICAgICAvLyAgIHRoaXMudXNlciA9IG51bGw7XHJcbiAgICAgICAgICAvLyB9XHJcbiAgICAgICAgICBcclxuICAgICAgICAgIC8vdGhpcy5jb21tZW50cyA9IFtdO1xyXG4gICAgICB9KTtcclxuICAgICAgLy8gdGhpcy5jb21tZW50c0Zvcm0gPSB0aGlzLmZiLmdyb3VwKHtcclxuICAgICAgLy8gICBjb21tZW50OiBbJyddXHJcbiAgICAgIC8vIH0pO1xyXG4gICB9XHJcblxyXG4vLyAgYWRkQ29tbWVudChmb3JtOiBhbnkpIHtcclxuLy8gICAgICAgICAvL2NvbnNvbGUubG9nKGNvbW1lbnQudmFsdWUpO1xyXG4vLyAgICAgICAgIGNvbnNvbGUubG9nKGZvcm0pO1xyXG4vLyAgICAgICAgIGNvbnNvbGUubG9nKGZvcm0uY29tbWVudC52YWx1ZSk7XHJcbi8vICAgICAgICAgLy90aGlzLmNvbW1lbnQudmFsdWUgPSAnJztcclxuLy8gICAgIH1cclxuICBhZGRDb21tZW50KGNvbW1lbnQ6IHN0cmluZykge1xyXG4gICAgdGhpcy5pc0xvYWRpbmcgPSB0cnVlO1xyXG4gICAgY29uc29sZS5sb2coY29tbWVudCk7XHJcbiAgICBpZiAoIWNvbW1lbnQpIHtcclxuICAgICAgdGhpcy5pc0xvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgdGhpcy5ub3RpZmljYXRpb25zU2VydmljZS5pbmZvKCdUdcWhxI1pYXMga29tZW50YXJhcycsICdLb21lbnRhcm8gbGF1a2FzIG5lZ2FsaSBixat0aSB0dcWhxI1pYXMnLCB7dGltZU91dDogMzAwMCwgc2hvd1Byb2dyZXNzQmFyOiB0cnVlfSlcclxuICAgIH0gZWxzZSB7XHJcbiAgICB0aGlzLmNvbW1lbnRzLnB1c2goe2NvbW1lbnQ6IGNvbW1lbnQsIGNvbW1lbnRBdXRob3I6IHRoaXMudXNlcn0pO1xyXG4gICAgdGhpcy5hcGlTZXJ2aWNlLmFkZENvbW1lbnQoe2NvbW1lbnQ6IGNvbW1lbnQsIGNvbW1lbnRBdXRob3I6IHRoaXMudXNlcn0sIHRoaXMuY29udGVzdElkKVxyXG4gICAgICAuc3Vic2NyaWJlKGNvbW1lbnRzID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZygnY29tbWVudHMtc2VjdGlvbiBhZGRDb21tZW50IGNvbW1lbnRzIHZhcicpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGNvbW1lbnRzKTtcclxuICAgICAgICB0aGlzLmNvbW1lbnRzID0gY29tbWVudHM7XHJcbiAgICAgICAgdGhpcy5pc0xvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLm5vdGlmaWNhdGlvbnNTZXJ2aWNlLnN1Y2Nlc3MoJ8Sua2VsdGEnLCAnS29tZW50YXJhcyDEr2tlbHRhcycsIHt0aW1lT3V0OiAzMDAwLCBzaG93UHJvZ3Jlc3NCYXI6IGZhbHNlfSk7XHJcbiAgICAgIH0sIFxyXG4gICAgICBlcnJvciA9PiB7XHJcbiAgICAgICAgICAvL3RoaXMuZXJyb3JTZXJ2aWNlLmhhbmRsZUVycm9yKGVycm9yKTtcclxuICAgICAgICAgIHRoaXMuaXNMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICB0aGlzLm5vdGlmaWNhdGlvbnNTZXJ2aWNlLmVycm9yKGVycm9yLnRpdGxlLCBlcnJvci5lcnJvci5tZXNzYWdlLCB7dGltZU91dDogMzAwMCwgc2hvd1Byb2dyZXNzQmFyOiBmYWxzZX0pXHJcbiAgICAgIH0pO1xyXG4gICAgdGhpcy5jb21tZW50RmllbGQgPSAnJztcclxuICAgIGNvbnNvbGUubG9nKHRoaXMuY29tbWVudHMpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgaXNEZXNpZ25lcigpIHtcclxuICAgIHJldHVybiB0aGlzLmF1dGhTZXJ2aWNlLmlzRGVzaWduZXIoKTtcclxuICB9XHJcblxyXG4gIGlzQ29udGVzdFB1Ymxpc2hlcihjb250ZXN0QXV0aG9ySWQ6IHN0cmluZykge1xyXG4gICAgdmFyIHVzZXJJZCA9IHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oJ3VzZXJJZCcpO1xyXG4gICAgcmV0dXJuIGNvbnRlc3RBdXRob3JJZCA9PSB1c2VySWQ7XHJcbiAgfVxyXG5cclxuICBpc0NsaWVudCgpIHtcclxuICAgIHJldHVybiB0aGlzLmF1dGhTZXJ2aWNlLmlzQ2xpZW50KCk7XHJcbiAgfVxyXG5cclxuICBpc0xvZ2dlZEluKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuYXV0aFNlcnZpY2UuaXNMb2dnZWRJbigpO1xyXG4gIH1cclxuXHJcbiAgaXNBZG1pbigpIHtcclxuICAgIHJldHVybiB0aGlzLmF1dGhTZXJ2aWNlLmlzQWRtaW4oKTtcclxuICB9XHJcblxyXG4gIGlzRW1haWxDb25maXJtZWQgKCkge1xyXG4gICAgIHJldHVybiBzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKCdlbWFpbENvbmZpcm1lZCcpID09IENyeXB0b0pTLlNIQTMoJ3RydWUnKS50b1N0cmluZygpO1xyXG4gIH1cclxuXHJcbiAgZ29CYWNrKCkge1xyXG4gICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoWycva29ua3Vyc2FpJ10pO1xyXG4gIH1cclxuXHJcbn0iXX0=
