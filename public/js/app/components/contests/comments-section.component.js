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
var CommentsSectionComponent = (function () {
    function CommentsSectionComponent(contestsService, errorService, authService, apiService, fb, route) {
        this.contestsService = contestsService;
        this.errorService = errorService;
        this.authService = authService;
        this.apiService = apiService;
        this.fb = fb;
        this.route = route;
        this.comments = [];
        this.userId = '';
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
            _this.errorService.handleError(error);
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
        }, function (error) {
            _this.errorService.handleError(error);
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
        __metadata('design:paramtypes', [contests_service_1.ContestsService, index_1.ErrorService, auth_service_1.AuthService, api_service_1.ApiService, forms_1.FormBuilder, router_1.ActivatedRoute])
    ], CommentsSectionComponent);
    return CommentsSectionComponent;
}());
exports.CommentsSectionComponent = CommentsSectionComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvY29udGVzdHMvY29tbWVudHMtc2VjdGlvbi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUFvRCxlQUFlLENBQUMsQ0FBQTtBQUVwRSxpQ0FBZ0MsaUNBQWlDLENBQUMsQ0FBQTtBQUNsRSxzQkFBNkIsb0JBQW9CLENBQUMsQ0FBQTtBQUNsRCw2QkFBNEIsNkJBQTZCLENBQUMsQ0FBQTtBQUMxRCw0QkFBMkIsNEJBQTRCLENBQUMsQ0FBQTtBQUN4RCxzQkFBZ0UsZ0JBQWdCLENBQUMsQ0FBQTtBQUNqRix1QkFBdUMsaUJBQWlCLENBQUMsQ0FBQTtBQU96RDtJQVNHLGtDQUFvQixlQUFnQyxFQUNqQyxZQUEwQixFQUMxQixXQUF3QixFQUN4QixVQUFzQixFQUN0QixFQUFlLEVBQ2YsS0FBcUI7UUFMcEIsb0JBQWUsR0FBZixlQUFlLENBQWlCO1FBQ2pDLGlCQUFZLEdBQVosWUFBWSxDQUFjO1FBQzFCLGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBQ3hCLGVBQVUsR0FBVixVQUFVLENBQVk7UUFDdEIsT0FBRSxHQUFGLEVBQUUsQ0FBYTtRQUNmLFVBQUssR0FBTCxLQUFLLENBQWdCO1FBVnhDLGFBQVEsR0FBVSxFQUFFLENBQUM7UUFFckIsV0FBTSxHQUFXLEVBQUUsQ0FBQztJQVVULENBQUM7SUFHYiwyQ0FBUSxHQUFSO1FBQUEsaUJBNEJFO1FBM0JBLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxVQUFDLE1BQWM7WUFDM0MsS0FBSSxDQUFDLFNBQVMsR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDOUIsQ0FBQyxDQUFDLENBQUM7UUFDSCxJQUFJLENBQUMsTUFBTSxHQUFHLFlBQVksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDN0MsSUFBSSxDQUFDLFVBQVUsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQzthQUNyQyxT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QUFDOztnQ0FBQTtJQXFGRiwrQkFBQztBQUFELENBcEZBLEFBb0ZDLElBQUE7QUFwRlksZ0NBQXdCLDJCQW9GcEMsQ0FBQSIsImZpbGUiOiJjb21wb25lbnRzL2NvbnRlc3RzL2NvbW1lbnRzLXNlY3Rpb24uY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIFZpZXdDaGlsZCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQ29udGVzdCB9IGZyb20gJy4uLy4uL21vZGVscy9jb250ZXN0JztcclxuaW1wb3J0IHsgQ29udGVzdHNTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvY29udGVzdHMuc2VydmljZSc7XHJcbmltcG9ydCB7IEVycm9yU2VydmljZSB9IGZyb20gJy4uLy4uL2Vycm9ycy9pbmRleCc7XHJcbmltcG9ydCB7IEF1dGhTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvYXV0aC5zZXJ2aWNlJztcclxuaW1wb3J0IHsgQXBpU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL2FwaS5zZXJ2aWNlJztcclxuaW1wb3J0IHsgRm9ybUdyb3VwLCBGb3JtQ29udHJvbCwgRm9ybUJ1aWxkZXIsIFZhbGlkYXRvcnMgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcbmltcG9ydCB7IFBhcmFtcywgQWN0aXZhdGVkUm91dGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcclxuICBzZWxlY3RvcjogJ2NvbW1lbnRzLXNlY3Rpb24nLFxyXG4gIHRlbXBsYXRlVXJsOiAnY29tbWVudHMtc2VjdGlvbi5jb21wb25lbnQuaHRtbCdcclxufSlcclxuZXhwb3J0IGNsYXNzIENvbW1lbnRzU2VjdGlvbkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgIC8vcHVibGljIGNvbW1lbnRzRm9ybTogRm9ybUdyb3VwO1xyXG4gICAvL0BWaWV3Q2hpbGQoJ2NvbW1lbnQnKSBjb21tZW50O1xyXG4gICBASW5wdXQoKSBjb250ZXN0O1xyXG4gICBjb21tZW50czogYW55W10gPSBbXTtcclxuICAgY29tbWVudEZpZWxkOiBzdHJpbmc7XHJcbiAgIHVzZXJJZDogc3RyaW5nID0gJyc7XHJcbiAgIHVzZXI6IGFueTtcclxuICAgY29udGVzdElkOiBzdHJpbmc7XHJcbiAgIGNvbnN0cnVjdG9yKHByaXZhdGUgY29udGVzdHNTZXJ2aWNlOiBDb250ZXN0c1NlcnZpY2UsXHJcbiAgICAgICAgICAgICAgcHJpdmF0ZSBlcnJvclNlcnZpY2U6IEVycm9yU2VydmljZSxcclxuICAgICAgICAgICAgICBwcml2YXRlIGF1dGhTZXJ2aWNlOiBBdXRoU2VydmljZSxcclxuICAgICAgICAgICAgICBwcml2YXRlIGFwaVNlcnZpY2U6IEFwaVNlcnZpY2UsXHJcbiAgICAgICAgICAgICAgcHJpdmF0ZSBmYjogRm9ybUJ1aWxkZXIsXHJcbiAgICAgICAgICAgICAgcHJpdmF0ZSByb3V0ZTogQWN0aXZhdGVkUm91dGUpIHsgXHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgXHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG4gICAgdGhpcy5yb3V0ZS5wYXJhbXMuc3Vic2NyaWJlKChwYXJhbXM6IFBhcmFtcykgPT4ge1xyXG4gICAgdGhpcy5jb250ZXN0SWQgPSBwYXJhbXNbJ2lkJ107XHJcbiAgICB9KTtcclxuICAgIHRoaXMudXNlcklkID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3VzZXJJZCcpO1xyXG4gICAgdGhpcy5hcGlTZXJ2aWNlLmdldFVzZXJJbmZvKHRoaXMudXNlcklkKVxyXG4gICAgICAuc3Vic2NyaWJlKHVzZXIgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdjb21tZW50cy1zZWN0aW9uIGNvbXAgdXNlciB2YXInKTtcclxuICAgICAgICBjb25zb2xlLmxvZyh1c2VyKTtcclxuICAgICAgICB0aGlzLnVzZXIgPSB1c2VyO1xyXG4gICAgICB9LFxyXG4gICAgICBlcnJvciA9PiB7XHJcbiAgICAgICAgICB0aGlzLmVycm9yU2VydmljZS5oYW5kbGVFcnJvcihlcnJvcik7XHJcbiAgICAgIH0pO1xyXG4gICAgdGhpcy5hcGlTZXJ2aWNlLmdldENvbW1lbnRzKHRoaXMuY29udGVzdElkKVxyXG4gICAgICAuc3Vic2NyaWJlKGNvbW1lbnRzID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZygnY29tbWVudHMtc2VjdGlvbiBnZXRDb21tZW50cyBjb21tZW50cyB2YXInKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhjb21tZW50cyk7XHJcbiAgICAgICAgdGhpcy5jb21tZW50cyA9IGNvbW1lbnRzO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCd0aGlzLmNvbW1lbnRzJyk7XHJcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5jb21tZW50cyk7XHJcbiAgICAgIH0sXHJcbiAgICAgIGVycm9yID0+IHtcclxuICAgICAgICAgIHRoaXMuZXJyb3JTZXJ2aWNlLmhhbmRsZUVycm9yKGVycm9yKTtcclxuICAgICAgfSk7XHJcbiAgICAgIC8vIHRoaXMuY29tbWVudHNGb3JtID0gdGhpcy5mYi5ncm91cCh7XHJcbiAgICAgIC8vICAgY29tbWVudDogWycnXVxyXG4gICAgICAvLyB9KTtcclxuICAgfVxyXG5cclxuLy8gIGFkZENvbW1lbnQoZm9ybTogYW55KSB7XHJcbi8vICAgICAgICAgLy9jb25zb2xlLmxvZyhjb21tZW50LnZhbHVlKTtcclxuLy8gICAgICAgICBjb25zb2xlLmxvZyhmb3JtKTtcclxuLy8gICAgICAgICBjb25zb2xlLmxvZyhmb3JtLmNvbW1lbnQudmFsdWUpO1xyXG4vLyAgICAgICAgIC8vdGhpcy5jb21tZW50LnZhbHVlID0gJyc7XHJcbi8vICAgICB9XHJcbiAgYWRkQ29tbWVudChjb21tZW50OiBzdHJpbmcpIHtcclxuICAgIGNvbnNvbGUubG9nKGNvbW1lbnQpO1xyXG4gICAgdGhpcy5jb21tZW50cy5wdXNoKHtjb21tZW50OiBjb21tZW50LCBjb21tZW50QXV0aG9yOiB0aGlzLnVzZXJ9KTtcclxuICAgIHRoaXMuYXBpU2VydmljZS5hZGRDb21tZW50KHtjb21tZW50OiBjb21tZW50LCBjb21tZW50QXV0aG9yOiB0aGlzLnVzZXJ9LCB0aGlzLmNvbnRlc3RJZClcclxuICAgICAgLnN1YnNjcmliZShjb21tZW50cyA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ2NvbW1lbnRzLXNlY3Rpb24gYWRkQ29tbWVudCBjb21tZW50cyB2YXInKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhjb21tZW50cyk7XHJcbiAgICAgICAgdGhpcy5jb21tZW50cyA9IGNvbW1lbnRzO1xyXG4gICAgICB9LCBcclxuICAgICAgZXJyb3IgPT4ge1xyXG4gICAgICAgICAgdGhpcy5lcnJvclNlcnZpY2UuaGFuZGxlRXJyb3IoZXJyb3IpO1xyXG4gICAgICB9KTtcclxuICAgIHRoaXMuY29tbWVudEZpZWxkID0gJyc7XHJcbiAgICBjb25zb2xlLmxvZyh0aGlzLmNvbW1lbnRzKTtcclxuICB9XHJcblxyXG4gIGlzRGVzaWduZXIoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5hdXRoU2VydmljZS5pc0Rlc2lnbmVyKCk7XHJcbiAgfVxyXG5cclxuICBpc0NvbnRlc3RQdWJsaXNoZXIoY29udGVzdEF1dGhvcklkOiBzdHJpbmcpIHtcclxuICAgIHZhciB1c2VySWQgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndXNlcklkJyk7XHJcbiAgICByZXR1cm4gY29udGVzdEF1dGhvcklkID09IHVzZXJJZDtcclxuICB9XHJcblxyXG4gIGlzQ2xpZW50KCkge1xyXG4gICAgcmV0dXJuIHRoaXMuYXV0aFNlcnZpY2UuaXNDbGllbnQoKTtcclxuICB9XHJcblxyXG59Il19
