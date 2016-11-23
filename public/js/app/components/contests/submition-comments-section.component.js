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
var SubmitionCommentsSectionComponent = (function () {
    function SubmitionCommentsSectionComponent(contestsService, errorService, authService, apiService, fb, route, notificationsService) {
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
    SubmitionCommentsSectionComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.isLoading = true;
        // this.route.params.subscribe((params: Params) => {
        // this.contestId = params['id'];
        //});
        //console.log('DEBUG SUBMITIONAUTHOR');
        //console.log(this.submition.submitionAuthor);
        this.contestId = this.contest.idName;
        console.log('DEBUG contest idname');
        console.log(this.contestId);
        this.userId = sessionStorage.getItem('userId');
        this.apiService.getUserInfo(this.userId)
            .subscribe(function (user) {
            console.log('comments-section comp user var');
            console.log(user);
            _this.user = user;
        }, function (error) {
            _this.isLoading = false;
            _this.notificationsService.error(error.title, error.error.message, { timeOut: 3000, showProgressBar: false });
            //this.errorService.handleError(error);
        });
        this.apiService.getSubmitionComments(this.contestId, this.submition.submitionId)
            .subscribe(function (comments) {
            console.log('comments-section getComments comments var');
            console.log(comments);
            if (comments != undefined) {
                _this.comments = comments;
            }
            _this.isLoading = false;
            console.log('this.comments');
            console.log(_this.comments);
        }, function (error) {
            //this.errorService.handleError(error);
            _this.isLoading = false;
            _this.notificationsService.error(error.title, error.error.message, { timeOut: 3000, showProgressBar: false });
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
    SubmitionCommentsSectionComponent.prototype.addComment = function (comment) {
        var _this = this;
        this.isLoading = true;
        console.log(comment);
        this.comments.push({ comment: comment, commentAuthor: this.user });
        this.apiService.addSubmitionComment({ comment: comment, commentAuthor: this.user }, this.contestId, this.submition.submitionId)
            .subscribe(function (contest) {
            console.log('comments-section addComment contest var');
            console.log(contest);
            //this.comments = comments;
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
    SubmitionCommentsSectionComponent.prototype.isDesigner = function () {
        return this.authService.isDesigner();
    };
    SubmitionCommentsSectionComponent.prototype.isContestPublisher = function (contestAuthorId) {
        var userId = sessionStorage.getItem('userId');
        return contestAuthorId == userId;
    };
    SubmitionCommentsSectionComponent.prototype.isClient = function () {
        return this.authService.isClient();
    };
    SubmitionCommentsSectionComponent.prototype.isSubmitionAuthor = function () {
        return this.submition.submitionAuthor._id == this.userId;
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], SubmitionCommentsSectionComponent.prototype, "contest", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], SubmitionCommentsSectionComponent.prototype, "submition", void 0);
    SubmitionCommentsSectionComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'submition-comments-section',
            templateUrl: 'submition-comments-section.component.html'
        }), 
        __metadata('design:paramtypes', [contests_service_1.ContestsService, index_1.ErrorService, auth_service_1.AuthService, api_service_1.ApiService, forms_1.FormBuilder, router_1.ActivatedRoute, angular2_notifications_1.NotificationsService])
    ], SubmitionCommentsSectionComponent);
    return SubmitionCommentsSectionComponent;
}());
exports.SubmitionCommentsSectionComponent = SubmitionCommentsSectionComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvY29udGVzdHMvc3VibWl0aW9uLWNvbW1lbnRzLXNlY3Rpb24uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBb0QsZUFBZSxDQUFDLENBQUE7QUFFcEUsaUNBQWdDLGlDQUFpQyxDQUFDLENBQUE7QUFDbEUsc0JBQTZCLG9CQUFvQixDQUFDLENBQUE7QUFDbEQsNkJBQTRCLDZCQUE2QixDQUFDLENBQUE7QUFDMUQsNEJBQTJCLDRCQUE0QixDQUFDLENBQUE7QUFDeEQsc0JBQWdFLGdCQUFnQixDQUFDLENBQUE7QUFDakYsdUJBQXVDLGlCQUFpQixDQUFDLENBQUE7QUFDekQsdUNBQXFDLHdCQUF3QixDQUFDLENBQUE7QUFPOUQ7SUFjRywyQ0FBb0IsZUFBZ0MsRUFDakMsWUFBMEIsRUFDMUIsV0FBd0IsRUFDeEIsVUFBc0IsRUFDdEIsRUFBZSxFQUNmLEtBQXFCLEVBQ3JCLG9CQUEwQztRQU56QyxvQkFBZSxHQUFmLGVBQWUsQ0FBaUI7UUFDakMsaUJBQVksR0FBWixZQUFZLENBQWM7UUFDMUIsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFDeEIsZUFBVSxHQUFWLFVBQVUsQ0FBWTtRQUN0QixPQUFFLEdBQUYsRUFBRSxDQUFhO1FBQ2YsVUFBSyxHQUFMLEtBQUssQ0FBZ0I7UUFDckIseUJBQW9CLEdBQXBCLG9CQUFvQixDQUFzQjtRQWY3RCxhQUFRLEdBQVUsRUFBRSxDQUFDO1FBRXJCLFdBQU0sR0FBVyxFQUFFLENBQUM7UUFHcEIsY0FBUyxHQUFHLEtBQUssQ0FBQztRQUNYLFlBQU8sR0FBRztZQUNkLFFBQVEsRUFBRSxDQUFDLEtBQUssRUFBQyxPQUFPLENBQUM7U0FDMUIsQ0FBQztJQVNRLENBQUM7SUFHYixvREFBUSxHQUFSO1FBQUEsaUJBeUNFO1FBeENBLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDO1FBQ3RCLG9EQUFvRDtRQUNwRCxpQ0FBaUM7UUFDakMsS0FBSztR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LENBQUM7SUFDckMsQ0FBQztJQUVELDZEQUFpQixHQUFqQjtRQUNFLE1BQU0sQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLGVBQWUsQ0FBQyxHQUFHLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQTtJQUMxRCxDQUFDO0lBM0dBO1FBQUMsWUFBSyxFQUFFOztzRUFBQTtJQUNSO1FBQUMsWUFBSyxFQUFFOzt3RUFBQTtJQVRYO1FBQUMsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixRQUFRLEVBQUUsNEJBQTRCO1lBQ3RDLFdBQVcsRUFBRSwyQ0FBMkM7U0FDekQsQ0FBQzs7eUNBQUE7SUFpSEYsd0NBQUM7QUFBRCxDQWhIQSxBQWdIQyxJQUFBO0FBaEhZLHlDQUFpQyxvQ0FnSDdDLENBQUEiLCJmaWxlIjoiY29tcG9uZW50cy9jb250ZXN0cy9zdWJtaXRpb24tY29tbWVudHMtc2VjdGlvbi5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgVmlld0NoaWxkLCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDb250ZXN0IH0gZnJvbSAnLi4vLi4vbW9kZWxzL2NvbnRlc3QnO1xyXG5pbXBvcnQgeyBDb250ZXN0c1NlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9jb250ZXN0cy5zZXJ2aWNlJztcclxuaW1wb3J0IHsgRXJyb3JTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vZXJyb3JzL2luZGV4JztcclxuaW1wb3J0IHsgQXV0aFNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9hdXRoLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBBcGlTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvYXBpLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBGb3JtR3JvdXAsIEZvcm1Db250cm9sLCBGb3JtQnVpbGRlciwgVmFsaWRhdG9ycyB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuaW1wb3J0IHsgUGFyYW1zLCBBY3RpdmF0ZWRSb3V0ZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcbmltcG9ydCB7IE5vdGlmaWNhdGlvbnNTZXJ2aWNlIH0gZnJvbSAnYW5ndWxhcjItbm90aWZpY2F0aW9ucyc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBtb2R1bGVJZDogbW9kdWxlLmlkLFxyXG4gIHNlbGVjdG9yOiAnc3VibWl0aW9uLWNvbW1lbnRzLXNlY3Rpb24nLFxyXG4gIHRlbXBsYXRlVXJsOiAnc3VibWl0aW9uLWNvbW1lbnRzLXNlY3Rpb24uY29tcG9uZW50Lmh0bWwnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBTdWJtaXRpb25Db21tZW50c1NlY3Rpb25Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gICAvL3B1YmxpYyBjb21tZW50c0Zvcm06IEZvcm1Hcm91cDtcclxuICAgLy9AVmlld0NoaWxkKCdjb21tZW50JykgY29tbWVudDtcclxuICAgQElucHV0KCkgY29udGVzdDtcclxuICAgQElucHV0KCkgc3VibWl0aW9uO1xyXG4gICBjb21tZW50czogYW55W10gPSBbXTtcclxuICAgY29tbWVudEZpZWxkOiBzdHJpbmc7XHJcbiAgIHVzZXJJZDogc3RyaW5nID0gJyc7XHJcbiAgIHVzZXI6IGFueTtcclxuICAgY29udGVzdElkOiBzdHJpbmc7XHJcbiAgIGlzTG9hZGluZyA9IGZhbHNlO1xyXG4gICBwdWJsaWMgb3B0aW9ucyA9IHtcclxuICAgICAgcG9zaXRpb246IFtcInRvcFwiLFwicmlnaHRcIl1cclxuICAgIH07XHJcbiAgIGNvbnN0cnVjdG9yKHByaXZhdGUgY29udGVzdHNTZXJ2aWNlOiBDb250ZXN0c1NlcnZpY2UsXHJcbiAgICAgICAgICAgICAgcHJpdmF0ZSBlcnJvclNlcnZpY2U6IEVycm9yU2VydmljZSxcclxuICAgICAgICAgICAgICBwcml2YXRlIGF1dGhTZXJ2aWNlOiBBdXRoU2VydmljZSxcclxuICAgICAgICAgICAgICBwcml2YXRlIGFwaVNlcnZpY2U6IEFwaVNlcnZpY2UsXHJcbiAgICAgICAgICAgICAgcHJpdmF0ZSBmYjogRm9ybUJ1aWxkZXIsXHJcbiAgICAgICAgICAgICAgcHJpdmF0ZSByb3V0ZTogQWN0aXZhdGVkUm91dGUsXHJcbiAgICAgICAgICAgICAgcHJpdmF0ZSBub3RpZmljYXRpb25zU2VydmljZTogTm90aWZpY2F0aW9uc1NlcnZpY2UpIHsgXHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgXHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG4gICAgdGhpcy5pc0xvYWRpbmcgPSB0cnVlO1xyXG4gICAgLy8gdGhpcy5yb3V0ZS5wYXJhbXMuc3Vic2NyaWJlKChwYXJhbXM6IFBhcmFtcykgPT4ge1xyXG4gICAgLy8gdGhpcy5jb250ZXN0SWQgPSBwYXJhbXNbJ2lkJ107XHJcbiAgICAvL30pO1xyXG4gICAgLy9jb25zb2xlLmxvZygnREVCVUcgU1VCTUlUSU9OQVVUSE9SJyk7XHJcbiAgICAvL2NvbnNvbGUubG9nKHRoaXMuc3VibWl0aW9uLnN1Ym1pdGlvbkF1dGhvcik7XHJcbiAgICB0aGlzLmNvbnRlc3RJZCA9IHRoaXMuY29udGVzdC5pZE5hbWU7XHJcbiAgICBjb25zb2xlLmxvZygnREVCVUcgY29udGVzdCBpZG5hbWUnKTtcclxuICAgIGNvbnNvbGUubG9nKHRoaXMuY29udGVzdElkKTtcclxuICAgIHRoaXMudXNlcklkID0gc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbSgndXNlcklkJyk7XHJcbiAgICB0aGlzLmFwaVNlcnZpY2UuZ2V0VXNlckluZm8odGhpcy51c2VySWQpXHJcbiAgICAgIC5zdWJzY3JpYmUodXNlciA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ2NvbW1lbnRzLXNlY3Rpb24gY29tcCB1c2VyIHZhcicpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHVzZXIpO1xyXG4gICAgICAgIHRoaXMudXNlciA9IHVzZXI7XHJcbiAgICAgIH0sXHJcbiAgICAgIGVycm9yID0+IHtcclxuICAgICAgICB0aGlzLmlzTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMubm90aWZpY2F0aW9uc1NlcnZpY2UuZXJyb3IoZXJyb3IudGl0bGUsIGVycm9yLmVycm9yLm1lc3NhZ2UsIHt0aW1lT3V0OiAzMDAwLCBzaG93UHJvZ3Jlc3NCYXI6IGZhbHNlfSlcclxuICAgICAgICAgIC8vdGhpcy5lcnJvclNlcnZpY2UuaGFuZGxlRXJyb3IoZXJyb3IpO1xyXG4gICAgICB9KTtcclxuICAgIHRoaXMuYXBpU2VydmljZS5nZXRTdWJtaXRpb25Db21tZW50cyh0aGlzLmNvbnRlc3RJZCwgdGhpcy5zdWJtaXRpb24uc3VibWl0aW9uSWQpXHJcbiAgICAgIC5zdWJzY3JpYmUoY29tbWVudHMgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdjb21tZW50cy1zZWN0aW9uIGdldENvbW1lbnRzIGNvbW1lbnRzIHZhcicpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGNvbW1lbnRzKTtcclxuICAgICAgICBpZiAoY29tbWVudHMgIT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgdGhpcy5jb21tZW50cyA9IGNvbW1lbnRzO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmlzTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCd0aGlzLmNvbW1lbnRzJyk7XHJcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5jb21tZW50cyk7XHJcbiAgICAgIH0sXHJcbiAgICAgIGVycm9yID0+IHtcclxuICAgICAgICAgIC8vdGhpcy5lcnJvclNlcnZpY2UuaGFuZGxlRXJyb3IoZXJyb3IpO1xyXG4gICAgICAgICAgdGhpcy5pc0xvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgIHRoaXMubm90aWZpY2F0aW9uc1NlcnZpY2UuZXJyb3IoZXJyb3IudGl0bGUsIGVycm9yLmVycm9yLm1lc3NhZ2UsIHt0aW1lT3V0OiAzMDAwLCBzaG93UHJvZ3Jlc3NCYXI6IGZhbHNlfSlcclxuICAgICAgfSk7XHJcbiAgICAgIC8vIHRoaXMuY29tbWVudHNGb3JtID0gdGhpcy5mYi5ncm91cCh7XHJcbiAgICAgIC8vICAgY29tbWVudDogWycnXVxyXG4gICAgICAvLyB9KTtcclxuICAgfVxyXG5cclxuLy8gIGFkZENvbW1lbnQoZm9ybTogYW55KSB7XHJcbi8vICAgICAgICAgLy9jb25zb2xlLmxvZyhjb21tZW50LnZhbHVlKTtcclxuLy8gICAgICAgICBjb25zb2xlLmxvZyhmb3JtKTtcclxuLy8gICAgICAgICBjb25zb2xlLmxvZyhmb3JtLmNvbW1lbnQudmFsdWUpO1xyXG4vLyAgICAgICAgIC8vdGhpcy5jb21tZW50LnZhbHVlID0gJyc7XHJcbi8vICAgICB9XHJcbiAgYWRkQ29tbWVudChjb21tZW50OiBzdHJpbmcpIHtcclxuICAgIHRoaXMuaXNMb2FkaW5nID0gdHJ1ZTtcclxuICAgIGNvbnNvbGUubG9nKGNvbW1lbnQpO1xyXG4gICAgdGhpcy5jb21tZW50cy5wdXNoKHtjb21tZW50OiBjb21tZW50LCBjb21tZW50QXV0aG9yOiB0aGlzLnVzZXJ9KTtcclxuICAgIHRoaXMuYXBpU2VydmljZS5hZGRTdWJtaXRpb25Db21tZW50KHtjb21tZW50OiBjb21tZW50LCBjb21tZW50QXV0aG9yOiB0aGlzLnVzZXJ9LCB0aGlzLmNvbnRlc3RJZCwgdGhpcy5zdWJtaXRpb24uc3VibWl0aW9uSWQpXHJcbiAgICAgIC5zdWJzY3JpYmUoY29udGVzdCA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ2NvbW1lbnRzLXNlY3Rpb24gYWRkQ29tbWVudCBjb250ZXN0IHZhcicpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGNvbnRlc3QpO1xyXG4gICAgICAgIC8vdGhpcy5jb21tZW50cyA9IGNvbW1lbnRzO1xyXG4gICAgICAgIHRoaXMuaXNMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5ub3RpZmljYXRpb25zU2VydmljZS5zdWNjZXNzKCfErmtlbHRhJywgJ0tvbWVudGFyYXMgxK9rZWx0YXMnLCB7dGltZU91dDogMzAwMCwgc2hvd1Byb2dyZXNzQmFyOiBmYWxzZX0pO1xyXG4gICAgICB9LCBcclxuICAgICAgZXJyb3IgPT4ge1xyXG4gICAgICAgICAgLy90aGlzLmVycm9yU2VydmljZS5oYW5kbGVFcnJvcihlcnJvcik7XHJcbiAgICAgICAgICB0aGlzLmlzTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgdGhpcy5ub3RpZmljYXRpb25zU2VydmljZS5lcnJvcihlcnJvci50aXRsZSwgZXJyb3IuZXJyb3IubWVzc2FnZSwge3RpbWVPdXQ6IDMwMDAsIHNob3dQcm9ncmVzc0JhcjogZmFsc2V9KVxyXG4gICAgICB9KTtcclxuICAgIHRoaXMuY29tbWVudEZpZWxkID0gJyc7XHJcbiAgICBjb25zb2xlLmxvZyh0aGlzLmNvbW1lbnRzKTtcclxuICB9XHJcblxyXG4gIGlzRGVzaWduZXIoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5hdXRoU2VydmljZS5pc0Rlc2lnbmVyKCk7XHJcbiAgfVxyXG5cclxuICBpc0NvbnRlc3RQdWJsaXNoZXIoY29udGVzdEF1dGhvcklkOiBzdHJpbmcpIHtcclxuICAgIHZhciB1c2VySWQgPSBzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKCd1c2VySWQnKTtcclxuICAgIHJldHVybiBjb250ZXN0QXV0aG9ySWQgPT0gdXNlcklkO1xyXG4gIH1cclxuXHJcbiAgaXNDbGllbnQoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5hdXRoU2VydmljZS5pc0NsaWVudCgpO1xyXG4gIH1cclxuXHJcbiAgaXNTdWJtaXRpb25BdXRob3IoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5zdWJtaXRpb24uc3VibWl0aW9uQXV0aG9yLl9pZCA9PSB0aGlzLnVzZXJJZFxyXG4gIH1cclxuXHJcbn0iXX0=
