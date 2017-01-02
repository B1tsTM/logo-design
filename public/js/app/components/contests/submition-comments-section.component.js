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
    function SubmitionCommentsSectionComponent(contestsService, errorService, authService, apiService, fb, route, router, notificationsService) {
        this.contestsService = contestsService;
        this.errorService = errorService;
        this.authService = authService;
        this.apiService = apiService;
        this.fb = fb;
        this.route = route;
        this.router = router;
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
            //this.notificationsService.error(error.title, error.error.message, {timeOut: 3000, showProgressBar: false})
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
        if (!comment) {
            this.isLoading = false;
            this.notificationsService.info('Tuščias komentaras', 'Komentaro laukas negali būti tuščias', { timeOut: 3000, showProgressBar: true });
        }
        else {
            this.comments.push({ comment: comment, commentAuthor: this.user, commentDate: Date.now() });
            this.apiService.addSubmitionComment({ comment: comment, commentAuthor: this.user }, this.contestId, this.submition.submitionId)
                .subscribe(function (contest) {
                console.log('comments-section addComment contest var');
                console.log(contest);
                //this.comments = contest.comments;
                console.log(_this.comments);
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
    SubmitionCommentsSectionComponent.prototype.isLoggedIn = function () {
        return this.authService.isLoggedIn();
    };
    SubmitionCommentsSectionComponent.prototype.isAdmin = function () {
        return this.authService.isAdmin();
    };
    SubmitionCommentsSectionComponent.prototype.goBack = function () {
        this.router.navigate(['/konkursai', this.contest.idName]);
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
            templateUrl: 'submition-comments-section.component.html',
            styleUrls: ['submition-comments-section.component.css']
        }), 
        __metadata('design:paramtypes', [contests_service_1.ContestsService, index_1.ErrorService, auth_service_1.AuthService, api_service_1.ApiService, forms_1.FormBuilder, router_1.ActivatedRoute, router_1.Router, angular2_notifications_1.NotificationsService])
    ], SubmitionCommentsSectionComponent);
    return SubmitionCommentsSectionComponent;
}());
exports.SubmitionCommentsSectionComponent = SubmitionCommentsSectionComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvY29udGVzdHMvc3VibWl0aW9uLWNvbW1lbnRzLXNlY3Rpb24uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBb0QsZUFBZSxDQUFDLENBQUE7QUFFcEUsaUNBQWdDLGlDQUFpQyxDQUFDLENBQUE7QUFDbEUsc0JBQTZCLG9CQUFvQixDQUFDLENBQUE7QUFDbEQsNkJBQTRCLDZCQUE2QixDQUFDLENBQUE7QUFDMUQsNEJBQTJCLDRCQUE0QixDQUFDLENBQUE7QUFDeEQsc0JBQWdFLGdCQUFnQixDQUFDLENBQUE7QUFDakYsdUJBQStDLGlCQUFpQixDQUFDLENBQUE7QUFDakUsdUNBQXFDLHdCQUF3QixDQUFDLENBQUE7QUFROUQ7SUFjRywyQ0FBb0IsZUFBZ0MsRUFDakMsWUFBMEIsRUFDMUIsV0FBd0IsRUFDeEIsVUFBc0IsRUFDdEIsRUFBZSxFQUNmLEtBQXFCLEVBQ3JCLE1BQWMsRUFDZCxvQkFBMEM7UUFQekMsb0JBQWUsR0FBZixlQUFlLENBQWlCO1FBQ2pDLGlCQUFZLEdBQVosWUFBWSxDQUFjO1FBQzFCLGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBQ3hCLGVBQVUsR0FBVixVQUFVLENBQVk7UUFDdEIsT0FBRSxHQUFGLEVBQUUsQ0FBYTtRQUNmLFVBQUssR0FBTCxLQUFLLENBQWdCO1FBQ3JCLFdBQU0sR0FBTixNQUFNLENBQVE7UUFDZCx5QkFBb0IsR0FBcEIsb0JBQW9CLENBQXNCO1FBaEI3RCxhQUFRLEdBQVUsRUFBRSxDQUFDO1FBRXJCLFdBQU0sR0FBVyxFQUFFLENBQUM7UUFHcEIsY0FBUyxHQUFHLEtBQUssQ0FBQztRQUNYLFlBQU8sR0FBRztZQUNkLFFBQVEsRUFBRSxDQUFDLEtBQUssRUFBQyxPQUFPLENBQUM7U0FDMUIsQ0FBQztJQVVRLENBQUM7SUFHYixvREFBUSxHQUFSO1FBQUEsaUJBeUNFO1FBeENBLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDO1FBQ3RCLG9EQUFvRDtRQUNwRCxpQ0FBaUM7UUFDakMsS0FBSztRQUNMLHVDQUF1QztRQUN2Qyw4Q0FBOEM7UUFDOUMsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQztRQUNyQyxPQUFPLENBQUMsR0FBRyxDQUFDLHNCQUFzQixDQUFDLENBQUM7UUFDcEMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDNUIsSUFBSSxDQUFDLE1BQU0sR0FBRyxjQUFjLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQy9DLElBQUksQ0FBQyxVQUFVLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUM7YUFDckMsU0FBUyxDQUFDLFVBQUEsSUFBSTtZQUNiLE9BQU8sQ0FBQyxHQUFHLENBQUMsZ0NBQWdDLENBQUMsQ0FBQztZQUM5QyxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ2xCLEtBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBQ25CLENBQUMsRUFDRCxVQUFBLEtBQUs7WUFDSCxLQUFJLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQztZQUN2Qiw0R0FBNEc7WUFDNUcsdUNBQXVDO1FBQ3pDLENBQUMsQ0FBQyxDQUFDO1FBQ0wsSUFBSSxDQUFDLFVBQVUsQ0FBQyxvQkFBb0IsQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsV0FBVyxDQUFDO2FBQzdFLFNBQVMsQ0FBQyxVQUFBLFFBQVE7WUFDakIsT0FBTyxDQUFDLEdBQUcsQ0FBQywyQ0FBMkMsQ0FBQyxDQUFDO1lBQ3pELE9BQU8sQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUM7WUFDdEIsRUFBRSxDQUFDLENBQUMsUUFBUSxJQUFJLFNBQVMsQ0FBQyxDQUFDLENBQUM7Z0JBQzVCLEtBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO1lBQ3pCLENBQUM7WUFDRCxLQUFJLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQztZQUN2QixPQUFPLENBQUMsR0FBRyxDQUFDLGVBQWUsQ0FBQyxDQUFDO1lBQzdCLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQzdCLENBQUMsRUFDRCxVQUFBLEtBQUs7WUFDRCx1Q0FBdUM7WUFDdkMsS0FBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7WUFDdkIsS0FBSSxDQUFDLG9CQUFvQixDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsS0FBSyxFQUFFLEtBQUssQ0FBQyxLQUFLLENBQUMsT0FBTyxFQUFFLEVBQUMsT0FBTyxFQUFFLElBQUksRUFBRSxlQUFlLEVBQUUsS0FBSyxFQUFDLENBQUMsQ0FBQTtRQUM5RyxDQUFDLENBQUMsQ0FBQztRQUNILHNDQUFzQztRQUN0QyxrQkFBa0I7UUFDbEIsTUFBTTtJQUNULENBQUM7SUFFSiwyQkFBMkI7SUFDM0Isd0NBQXdDO0lBQ3hDLDZCQUE2QjtJQUM3QiwyQ0FBMkM7SUFDM0MscUNBQXFDO0lBQ3JDLFFBQVE7SUFDTixzREFBVSxHQUFWLFVBQVcsT0FBZTtRQUExQixpQkF5QkM7UUF4QkMsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUM7UUFDdEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUNyQixFQUFFLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7WUFDYixJQUFJLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQztZQUN2QixJQUFJLENBQUMsb0JBQW9CLENBQUMsSUFBSSxDQUFDLG9CQUFvQixFQUFFLHNDQUFzQyxFQUFFLEVBQUMsT0FBTyxFQUFFLElBQUksRUFBRSxlQUFlLEVBQUUsSUFBSSxFQUFDLENBQUMsQ0FBQTtRQUN0SSxDQUFDO1FBQUMsSUFBSSxDQUFDLENBQUM7WUFDUixJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxFQUFDLE9BQU8sRUFBRSxPQUFPLEVBQUUsYUFBYSxFQUFFLElBQUksQ0FBQyxJQUFJLEVBQUUsV0FBVyxFQUFFLElBQUksQ0FBQyxHQUFHLEVBQUUsRUFBQyxDQUFDLENBQUM7WUFDMUYsSUFBSSxDQUFDLFVBQVUsQ0FBQyxtQkFBbUIsQ0FBQyxFQUFDLE9BQU8sRUFBRSxPQUFPLEVBQUUsYUFBYSxFQUFFLElBQUksQ0FBQyxJQUFJLEVBQUMsRUFBRSxJQUFJLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsV0FBVyxDQUFDO2lCQUMxSCxTQUFTLENBQUMsVUFBQSxPQUFPO2dCQUNoQixPQUFPLENBQUMsR0FBRyxDQUFDLHlDQUF5QyxDQUFDLENBQUM7Z0JBQ3ZELE9BQU8sQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUM7Z0JBQ3JCLG1DQUFtQztnQkFDbkMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7Z0JBQzNCLEtBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDO2dCQUN2QixLQUFJLENBQUMsb0JBQW9CLENBQUMsT0FBTyxDQUFDLFFBQVEsRUFBRSxvQkFBb0IsRUFBRSxFQUFDLE9BQU8sRUFBRSxJQUFJLEVBQUUsZUFBZSxFQUFFLEtBQUssRUFBQyxDQUFDLENBQUM7WUFDN0csQ0FBQyxFQUNELFVBQUEsS0FBSztnQkFDRCx1Q0FBdUM7Z0JBQ3ZDLEtBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDO2dCQUN2QixLQUFJLENBQUMsb0JBQW9CLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxLQUFLLEVBQUUsS0FBSyxDQUFDLEtBQUssQ0FBQyxPQUFPLEVBQUUsRUFBQyxPQUFPLEVBQUUsSUFBSSxFQUFFLGVBQWUsRUFBRSxLQUFLLEVBQUMsQ0FBQyxDQUFBO1lBQzlHLENBQUMsQ0FBQyxDQUFDO1lBQ0wsSUFBSSxDQUFDLFlBQVksR0FBRyxFQUFFLENBQUM7WUFDdkIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDM0IsQ0FBQztJQUNILENBQUM7SUFFRCxzREFBVSxHQUFWO1FBQ0UsTUFBTSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsVUFBVSxFQUFFLENBQUM7SUFDdkMsQ0FBQztJQUVELDhEQUFrQixHQUFsQixVQUFtQixlQUF1QjtRQUN4QyxJQUFJLE1BQU0sR0FBRyxjQUFjLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQzlDLE1BQU0sQ0FBQyxlQUFlLElBQUksTUFBTSxDQUFDO0lBQ25DLENBQUM7SUFFRCxvREFBUSxHQUFSO1FBQ0UsTUFBTSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDckMsQ0FBQztJQUVELDZEQUFpQixHQUFqQjtRQUNFLE1BQU0sQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLGVBQWUsQ0FBQyxHQUFHLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQTtJQUMxRCxDQUFDO0lBRUQsc0RBQVUsR0FBVjtRQUNFLE1BQU0sQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLFVBQVUsRUFBRSxDQUFDO0lBQ3ZDLENBQUM7SUFFRCxtREFBTyxHQUFQO1FBQ0UsTUFBTSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsT0FBTyxFQUFFLENBQUM7SUFDcEMsQ0FBQztJQUVELGtEQUFNLEdBQU47UUFDRSxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLFlBQVksRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7SUFDNUQsQ0FBQztJQTlIQTtRQUFDLFlBQUssRUFBRTs7c0VBQUE7SUFDUjtRQUFDLFlBQUssRUFBRTs7d0VBQUE7SUFWWDtRQUFDLGdCQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsUUFBUSxFQUFFLDRCQUE0QjtZQUN0QyxXQUFXLEVBQUUsMkNBQTJDO1lBQ3hELFNBQVMsRUFBRSxDQUFDLDBDQUEwQyxDQUFDO1NBQ3hELENBQUM7O3lDQUFBO0lBb0lGLHdDQUFDO0FBQUQsQ0FuSUEsQUFtSUMsSUFBQTtBQW5JWSx5Q0FBaUMsb0NBbUk3QyxDQUFBIiwiZmlsZSI6ImNvbXBvbmVudHMvY29udGVzdHMvc3VibWl0aW9uLWNvbW1lbnRzLXNlY3Rpb24uY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIFZpZXdDaGlsZCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQ29udGVzdCB9IGZyb20gJy4uLy4uL21vZGVscy9jb250ZXN0JztcclxuaW1wb3J0IHsgQ29udGVzdHNTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvY29udGVzdHMuc2VydmljZSc7XHJcbmltcG9ydCB7IEVycm9yU2VydmljZSB9IGZyb20gJy4uLy4uL2Vycm9ycy9pbmRleCc7XHJcbmltcG9ydCB7IEF1dGhTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvYXV0aC5zZXJ2aWNlJztcclxuaW1wb3J0IHsgQXBpU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL2FwaS5zZXJ2aWNlJztcclxuaW1wb3J0IHsgRm9ybUdyb3VwLCBGb3JtQ29udHJvbCwgRm9ybUJ1aWxkZXIsIFZhbGlkYXRvcnMgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcbmltcG9ydCB7IFBhcmFtcywgQWN0aXZhdGVkUm91dGUsIFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcbmltcG9ydCB7IE5vdGlmaWNhdGlvbnNTZXJ2aWNlIH0gZnJvbSAnYW5ndWxhcjItbm90aWZpY2F0aW9ucyc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBtb2R1bGVJZDogbW9kdWxlLmlkLFxyXG4gIHNlbGVjdG9yOiAnc3VibWl0aW9uLWNvbW1lbnRzLXNlY3Rpb24nLFxyXG4gIHRlbXBsYXRlVXJsOiAnc3VibWl0aW9uLWNvbW1lbnRzLXNlY3Rpb24uY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWydzdWJtaXRpb24tY29tbWVudHMtc2VjdGlvbi5jb21wb25lbnQuY3NzJ11cclxufSlcclxuZXhwb3J0IGNsYXNzIFN1Ym1pdGlvbkNvbW1lbnRzU2VjdGlvbkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgIC8vcHVibGljIGNvbW1lbnRzRm9ybTogRm9ybUdyb3VwO1xyXG4gICAvL0BWaWV3Q2hpbGQoJ2NvbW1lbnQnKSBjb21tZW50O1xyXG4gICBASW5wdXQoKSBjb250ZXN0O1xyXG4gICBASW5wdXQoKSBzdWJtaXRpb247XHJcbiAgIGNvbW1lbnRzOiBhbnlbXSA9IFtdO1xyXG4gICBjb21tZW50RmllbGQ6IHN0cmluZztcclxuICAgdXNlcklkOiBzdHJpbmcgPSAnJztcclxuICAgdXNlcjogYW55O1xyXG4gICBjb250ZXN0SWQ6IHN0cmluZztcclxuICAgaXNMb2FkaW5nID0gZmFsc2U7XHJcbiAgIHB1YmxpYyBvcHRpb25zID0ge1xyXG4gICAgICBwb3NpdGlvbjogW1widG9wXCIsXCJyaWdodFwiXVxyXG4gICAgfTtcclxuICAgY29uc3RydWN0b3IocHJpdmF0ZSBjb250ZXN0c1NlcnZpY2U6IENvbnRlc3RzU2VydmljZSxcclxuICAgICAgICAgICAgICBwcml2YXRlIGVycm9yU2VydmljZTogRXJyb3JTZXJ2aWNlLFxyXG4gICAgICAgICAgICAgIHByaXZhdGUgYXV0aFNlcnZpY2U6IEF1dGhTZXJ2aWNlLFxyXG4gICAgICAgICAgICAgIHByaXZhdGUgYXBpU2VydmljZTogQXBpU2VydmljZSxcclxuICAgICAgICAgICAgICBwcml2YXRlIGZiOiBGb3JtQnVpbGRlcixcclxuICAgICAgICAgICAgICBwcml2YXRlIHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSxcclxuICAgICAgICAgICAgICBwcml2YXRlIHJvdXRlcjogUm91dGVyLFxyXG4gICAgICAgICAgICAgIHByaXZhdGUgbm90aWZpY2F0aW9uc1NlcnZpY2U6IE5vdGlmaWNhdGlvbnNTZXJ2aWNlKSB7IFxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIFxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICAgIHRoaXMuaXNMb2FkaW5nID0gdHJ1ZTtcclxuICAgIC8vIHRoaXMucm91dGUucGFyYW1zLnN1YnNjcmliZSgocGFyYW1zOiBQYXJhbXMpID0+IHtcclxuICAgIC8vIHRoaXMuY29udGVzdElkID0gcGFyYW1zWydpZCddO1xyXG4gICAgLy99KTtcclxuICAgIC8vY29uc29sZS5sb2coJ0RFQlVHIFNVQk1JVElPTkFVVEhPUicpO1xyXG4gICAgLy9jb25zb2xlLmxvZyh0aGlzLnN1Ym1pdGlvbi5zdWJtaXRpb25BdXRob3IpO1xyXG4gICAgdGhpcy5jb250ZXN0SWQgPSB0aGlzLmNvbnRlc3QuaWROYW1lO1xyXG4gICAgY29uc29sZS5sb2coJ0RFQlVHIGNvbnRlc3QgaWRuYW1lJyk7XHJcbiAgICBjb25zb2xlLmxvZyh0aGlzLmNvbnRlc3RJZCk7XHJcbiAgICB0aGlzLnVzZXJJZCA9IHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oJ3VzZXJJZCcpO1xyXG4gICAgdGhpcy5hcGlTZXJ2aWNlLmdldFVzZXJJbmZvKHRoaXMudXNlcklkKVxyXG4gICAgICAuc3Vic2NyaWJlKHVzZXIgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdjb21tZW50cy1zZWN0aW9uIGNvbXAgdXNlciB2YXInKTtcclxuICAgICAgICBjb25zb2xlLmxvZyh1c2VyKTtcclxuICAgICAgICB0aGlzLnVzZXIgPSB1c2VyO1xyXG4gICAgICB9LFxyXG4gICAgICBlcnJvciA9PiB7XHJcbiAgICAgICAgdGhpcy5pc0xvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAvL3RoaXMubm90aWZpY2F0aW9uc1NlcnZpY2UuZXJyb3IoZXJyb3IudGl0bGUsIGVycm9yLmVycm9yLm1lc3NhZ2UsIHt0aW1lT3V0OiAzMDAwLCBzaG93UHJvZ3Jlc3NCYXI6IGZhbHNlfSlcclxuICAgICAgICAvL3RoaXMuZXJyb3JTZXJ2aWNlLmhhbmRsZUVycm9yKGVycm9yKTtcclxuICAgICAgfSk7XHJcbiAgICB0aGlzLmFwaVNlcnZpY2UuZ2V0U3VibWl0aW9uQ29tbWVudHModGhpcy5jb250ZXN0SWQsIHRoaXMuc3VibWl0aW9uLnN1Ym1pdGlvbklkKVxyXG4gICAgICAuc3Vic2NyaWJlKGNvbW1lbnRzID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZygnY29tbWVudHMtc2VjdGlvbiBnZXRDb21tZW50cyBjb21tZW50cyB2YXInKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhjb21tZW50cyk7XHJcbiAgICAgICAgaWYgKGNvbW1lbnRzICE9IHVuZGVmaW5lZCkge1xyXG4gICAgICAgIHRoaXMuY29tbWVudHMgPSBjb21tZW50cztcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5pc0xvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICBjb25zb2xlLmxvZygndGhpcy5jb21tZW50cycpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMuY29tbWVudHMpO1xyXG4gICAgICB9LFxyXG4gICAgICBlcnJvciA9PiB7XHJcbiAgICAgICAgICAvL3RoaXMuZXJyb3JTZXJ2aWNlLmhhbmRsZUVycm9yKGVycm9yKTtcclxuICAgICAgICAgIHRoaXMuaXNMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICB0aGlzLm5vdGlmaWNhdGlvbnNTZXJ2aWNlLmVycm9yKGVycm9yLnRpdGxlLCBlcnJvci5lcnJvci5tZXNzYWdlLCB7dGltZU91dDogMzAwMCwgc2hvd1Byb2dyZXNzQmFyOiBmYWxzZX0pXHJcbiAgICAgIH0pO1xyXG4gICAgICAvLyB0aGlzLmNvbW1lbnRzRm9ybSA9IHRoaXMuZmIuZ3JvdXAoe1xyXG4gICAgICAvLyAgIGNvbW1lbnQ6IFsnJ11cclxuICAgICAgLy8gfSk7XHJcbiAgIH1cclxuXHJcbi8vICBhZGRDb21tZW50KGZvcm06IGFueSkge1xyXG4vLyAgICAgICAgIC8vY29uc29sZS5sb2coY29tbWVudC52YWx1ZSk7XHJcbi8vICAgICAgICAgY29uc29sZS5sb2coZm9ybSk7XHJcbi8vICAgICAgICAgY29uc29sZS5sb2coZm9ybS5jb21tZW50LnZhbHVlKTtcclxuLy8gICAgICAgICAvL3RoaXMuY29tbWVudC52YWx1ZSA9ICcnO1xyXG4vLyAgICAgfVxyXG4gIGFkZENvbW1lbnQoY29tbWVudDogc3RyaW5nKSB7XHJcbiAgICB0aGlzLmlzTG9hZGluZyA9IHRydWU7XHJcbiAgICBjb25zb2xlLmxvZyhjb21tZW50KTtcclxuICAgIGlmICghY29tbWVudCkge1xyXG4gICAgICB0aGlzLmlzTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICB0aGlzLm5vdGlmaWNhdGlvbnNTZXJ2aWNlLmluZm8oJ1R1xaHEjWlhcyBrb21lbnRhcmFzJywgJ0tvbWVudGFybyBsYXVrYXMgbmVnYWxpIGLFq3RpIHR1xaHEjWlhcycsIHt0aW1lT3V0OiAzMDAwLCBzaG93UHJvZ3Jlc3NCYXI6IHRydWV9KVxyXG4gICAgfSBlbHNlIHtcclxuICAgIHRoaXMuY29tbWVudHMucHVzaCh7Y29tbWVudDogY29tbWVudCwgY29tbWVudEF1dGhvcjogdGhpcy51c2VyLCBjb21tZW50RGF0ZTogRGF0ZS5ub3coKX0pO1xyXG4gICAgdGhpcy5hcGlTZXJ2aWNlLmFkZFN1Ym1pdGlvbkNvbW1lbnQoe2NvbW1lbnQ6IGNvbW1lbnQsIGNvbW1lbnRBdXRob3I6IHRoaXMudXNlcn0sIHRoaXMuY29udGVzdElkLCB0aGlzLnN1Ym1pdGlvbi5zdWJtaXRpb25JZClcclxuICAgICAgLnN1YnNjcmliZShjb250ZXN0ID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZygnY29tbWVudHMtc2VjdGlvbiBhZGRDb21tZW50IGNvbnRlc3QgdmFyJyk7XHJcbiAgICAgICAgY29uc29sZS5sb2coY29udGVzdCk7XHJcbiAgICAgICAgLy90aGlzLmNvbW1lbnRzID0gY29udGVzdC5jb21tZW50cztcclxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLmNvbW1lbnRzKTtcclxuICAgICAgICB0aGlzLmlzTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMubm90aWZpY2F0aW9uc1NlcnZpY2Uuc3VjY2VzcygnxK5rZWx0YScsICdLb21lbnRhcmFzIMSva2VsdGFzJywge3RpbWVPdXQ6IDMwMDAsIHNob3dQcm9ncmVzc0JhcjogZmFsc2V9KTtcclxuICAgICAgfSwgXHJcbiAgICAgIGVycm9yID0+IHtcclxuICAgICAgICAgIC8vdGhpcy5lcnJvclNlcnZpY2UuaGFuZGxlRXJyb3IoZXJyb3IpO1xyXG4gICAgICAgICAgdGhpcy5pc0xvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgIHRoaXMubm90aWZpY2F0aW9uc1NlcnZpY2UuZXJyb3IoZXJyb3IudGl0bGUsIGVycm9yLmVycm9yLm1lc3NhZ2UsIHt0aW1lT3V0OiAzMDAwLCBzaG93UHJvZ3Jlc3NCYXI6IGZhbHNlfSlcclxuICAgICAgfSk7XHJcbiAgICB0aGlzLmNvbW1lbnRGaWVsZCA9ICcnO1xyXG4gICAgY29uc29sZS5sb2codGhpcy5jb21tZW50cyk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBpc0Rlc2lnbmVyKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuYXV0aFNlcnZpY2UuaXNEZXNpZ25lcigpO1xyXG4gIH1cclxuXHJcbiAgaXNDb250ZXN0UHVibGlzaGVyKGNvbnRlc3RBdXRob3JJZDogc3RyaW5nKSB7XHJcbiAgICB2YXIgdXNlcklkID0gc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbSgndXNlcklkJyk7XHJcbiAgICByZXR1cm4gY29udGVzdEF1dGhvcklkID09IHVzZXJJZDtcclxuICB9XHJcblxyXG4gIGlzQ2xpZW50KCkge1xyXG4gICAgcmV0dXJuIHRoaXMuYXV0aFNlcnZpY2UuaXNDbGllbnQoKTtcclxuICB9XHJcblxyXG4gIGlzU3VibWl0aW9uQXV0aG9yKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuc3VibWl0aW9uLnN1Ym1pdGlvbkF1dGhvci5faWQgPT0gdGhpcy51c2VySWRcclxuICB9XHJcblxyXG4gIGlzTG9nZ2VkSW4oKSB7XHJcbiAgICByZXR1cm4gdGhpcy5hdXRoU2VydmljZS5pc0xvZ2dlZEluKCk7XHJcbiAgfVxyXG5cclxuICBpc0FkbWluKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuYXV0aFNlcnZpY2UuaXNBZG1pbigpO1xyXG4gIH1cclxuXHJcbiAgZ29CYWNrKCkge1xyXG4gICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoWycva29ua3Vyc2FpJywgdGhpcy5jb250ZXN0LmlkTmFtZV0pO1xyXG4gIH1cclxuXHJcbn0iXX0=
