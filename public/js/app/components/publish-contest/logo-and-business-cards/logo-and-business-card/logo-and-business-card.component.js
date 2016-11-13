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
var contest_1 = require('../../../../models/contest');
var contests_service_1 = require('../../../../services/contests.service');
var index_1 = require('../../../../errors/index');
var forms_1 = require('@angular/forms');
var router_1 = require('@angular/router');
var angular2_notifications_1 = require('angular2-notifications');
var LogoAndBusinessCardComponent = (function () {
    function LogoAndBusinessCardComponent(contestsService, errorService, fb, router, notificationsService) {
        this.contestsService = contestsService;
        this.errorService = errorService;
        this.fb = fb;
        this.router = router;
        this.notificationsService = notificationsService;
        this.contest = null;
        this.contests = [];
        this.options = {
            position: ["top", "right"]
        };
    }
    LogoAndBusinessCardComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.contestForm = this.fb.group({
            contestName: ['', forms_1.Validators.required],
            contestCategory: ['Logotipas ir vizitinė kortelė', forms_1.Validators.required],
            contestDescription: ['', forms_1.Validators.required],
            contestAward: ['', forms_1.Validators.required]
        });
        this.contestsService.getAllContests()
            .subscribe(function (contests) {
            _this.contests = contests;
            _this.contestsService.contests = contests;
            console.log(_this.contests);
        }, function (error) {
            //this.errorService.handleError(error);
            _this.notificationsService.error('Įvyko klaida', 'Nepavyko įkelti konkursų informacijos', { timeOut: 3000, showProgressBar: false });
        });
        // this.contestsService.contestEdited
        //   .subscribe(contest => {
        //     this.contest = contest;
        //   });
    };
    LogoAndBusinessCardComponent.prototype.addContest = function (form) {
        var _this = this;
        if (this.contest) {
            //Edit
            console.log(this.contest);
            this.contest.name = form.contestName.value;
            this.contest.category = form.contestCategory.value;
            this.contest.description = form.contestDescription.value;
            this.contest.award = form.contestAward.value;
            this.contestsService.updateContest(this.contest)
                .subscribe(function (data) {
                console.log(data);
            }, function (error) {
                //this.errorService.handleError(error);
                _this.notificationsService.error('Įvyko klaida', 'Nepavyko įkelti konkurso', { timeOut: 3000, showProgressBar: false });
            });
            this.contest = null;
        }
        else {
            console.log(form);
            var contest = new contest_1.Contest(form.contestName.value, null, null, null, form.contestCategory.value, form.contestDescription.value, form.contestAward.value, 'active', 10, 5, Date.now(), Date.now());
            console.log(contest);
            this.contestsService.addContest(contest)
                .subscribe(function (data) {
                console.log(data);
                _this.contestsService.contests.push(data);
                form.contestName.value = '';
                form.contestDescription.value = '';
                form.contestAward.value = '';
            }, function (error) {
                //this.errorService.handleError(error);
                _this.notificationsService.error('Įvyko klaida', 'Nepavyko įkelti konkurso', { timeOut: 3000, showProgressBar: false });
            });
        }
    };
    LogoAndBusinessCardComponent.prototype.editContest = function (contest) {
        this.contestsService.editContest(contest);
    };
    LogoAndBusinessCardComponent.prototype.deleteContest = function (contest) {
        var _this = this;
        this.contestsService.deleteContest(contest)
            .subscribe(function (data) {
            console.log(data);
        }, function (error) {
            _this.errorService.handleError(error);
        });
    };
    LogoAndBusinessCardComponent.prototype.onCancel = function () {
        this.contest = null;
    };
    LogoAndBusinessCardComponent.prototype.belongsToUser = function (userId) {
        return localStorage.getItem('userId') == userId;
    };
    LogoAndBusinessCardComponent.prototype.goBack = function () {
        this.router.navigateByUrl('/paskelbti-konkursa');
    };
    LogoAndBusinessCardComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            templateUrl: 'logo-and-business-card.component.html',
            styleUrls: ['logo-and-business-card.component.css']
        }), 
        __metadata('design:paramtypes', [contests_service_1.ContestsService, index_1.ErrorService, forms_1.FormBuilder, router_1.Router, angular2_notifications_1.NotificationsService])
    ], LogoAndBusinessCardComponent);
    return LogoAndBusinessCardComponent;
}());
exports.LogoAndBusinessCardComponent = LogoAndBusinessCardComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvcHVibGlzaC1jb250ZXN0L2xvZ28tYW5kLWJ1c2luZXNzLWNhcmRzL2xvZ28tYW5kLWJ1c2luZXNzLWNhcmQvbG9nby1hbmQtYnVzaW5lc3MtY2FyZC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUFrQyxlQUFlLENBQUMsQ0FBQTtBQUNsRCx3QkFBd0IsNEJBQTRCLENBQUMsQ0FBQTtBQUNyRCxpQ0FBZ0MsdUNBQXVDLENBQUMsQ0FBQTtBQUN4RSxzQkFBNkIsMEJBQTBCLENBQUMsQ0FBQTtBQUN4RCxzQkFBZ0UsZ0JBQWdCLENBQUMsQ0FBQTtBQUNqRix1QkFBdUIsaUJBQWlCLENBQUMsQ0FBQTtBQUN6Qyx1Q0FBcUMsd0JBQXdCLENBQUMsQ0FBQTtBQVE5RDtJQVFFLHNDQUFvQixlQUFnQyxFQUNoQyxZQUEwQixFQUMxQixFQUFlLEVBQ2YsTUFBYyxFQUNkLG9CQUEwQztRQUoxQyxvQkFBZSxHQUFmLGVBQWUsQ0FBaUI7UUFDaEMsaUJBQVksR0FBWixZQUFZLENBQWM7UUFDMUIsT0FBRSxHQUFGLEVBQUUsQ0FBYTtRQUNmLFdBQU0sR0FBTixNQUFNLENBQVE7UUFDZCx5QkFBb0IsR0FBcEIsb0JBQW9CLENBQXNCO1FBWDlELFlBQU8sR0FBWSxJQUFJLENBQUM7UUFDeEIsYUFBUSxHQUFRLEVBQUUsQ0FBQztRQUVaLFlBQU8sR0FBRztZQUNiLFFBQVEsRUFBRSxDQUFDLEtBQUssRUFBQyxPQUFPLENBQUM7U0FDMUIsQ0FBQztJQVFKLENBQUM7SUFFRCwrQ0FBUSxHQUFSO1FBQUEsaUJBd0JFO1FBdEJBLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7WUFDL0IsV0FBVyxFQUFFLENBQUMsRUFBRSxFQUFFLGtCQUFVLENBQUMsUUFBUSxDQUFDO1lBQ3RDLGVBQWUsRUFBRSxDQUFDLCtCQUErQixFQUFFLGtCQUFVLENBQUMsUUFBUSxDQUFD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RCxDQUFDO0lBRUQsNkNBQU0sR0FBTjtRQUNFLElBQUksQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDLHFCQUFxQixDQUFDLENBQUM7SUFDbkQsQ0FBQztJQTdHSDtRQUFDLGdCQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsV0FBVyxFQUFFLHVDQUF1QztZQUNwRCxTQUFTLEVBQUUsQ0FBQyxzQ0FBc0MsQ0FBQztTQUNwRCxDQUFDOztvQ0FBQTtJQTJHRixtQ0FBQztBQUFELENBMUdBLEFBMEdDLElBQUE7QUExR1ksb0NBQTRCLCtCQTBHeEMsQ0FBQSIsImZpbGUiOiJjb21wb25lbnRzL3B1Ymxpc2gtY29udGVzdC9sb2dvLWFuZC1idXNpbmVzcy1jYXJkcy9sb2dvLWFuZC1idXNpbmVzcy1jYXJkL2xvZ28tYW5kLWJ1c2luZXNzLWNhcmQuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQ29udGVzdCB9IGZyb20gJy4uLy4uLy4uLy4uL21vZGVscy9jb250ZXN0JztcclxuaW1wb3J0IHsgQ29udGVzdHNTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vLi4vc2VydmljZXMvY29udGVzdHMuc2VydmljZSc7XHJcbmltcG9ydCB7IEVycm9yU2VydmljZSB9IGZyb20gJy4uLy4uLy4uLy4uL2Vycm9ycy9pbmRleCc7XHJcbmltcG9ydCB7IEZvcm1Hcm91cCwgRm9ybUNvbnRyb2wsIEZvcm1CdWlsZGVyLCBWYWxpZGF0b3JzIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5pbXBvcnQgeyBOb3RpZmljYXRpb25zU2VydmljZSB9IGZyb20gJ2FuZ3VsYXIyLW5vdGlmaWNhdGlvbnMnO1xyXG5cclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIG1vZHVsZUlkOiBtb2R1bGUuaWQsXHJcbiAgdGVtcGxhdGVVcmw6ICdsb2dvLWFuZC1idXNpbmVzcy1jYXJkLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnbG9nby1hbmQtYnVzaW5lc3MtY2FyZC5jb21wb25lbnQuY3NzJ11cclxufSlcclxuZXhwb3J0IGNsYXNzIExvZ29BbmRCdXNpbmVzc0NhcmRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gIGNvbnRlc3Q6IENvbnRlc3QgPSBudWxsO1xyXG4gIGNvbnRlc3RzOiBhbnkgPSBbXTtcclxuICBwdWJsaWMgY29udGVzdEZvcm06IEZvcm1Hcm91cDtcclxuICBwdWJsaWMgb3B0aW9ucyA9IHtcclxuICAgICAgcG9zaXRpb246IFtcInRvcFwiLFwicmlnaHRcIl1cclxuICAgIH07XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgY29udGVzdHNTZXJ2aWNlOiBDb250ZXN0c1NlcnZpY2UsIFxyXG4gICAgICAgICAgICAgIHByaXZhdGUgZXJyb3JTZXJ2aWNlOiBFcnJvclNlcnZpY2UsIFxyXG4gICAgICAgICAgICAgIHByaXZhdGUgZmI6IEZvcm1CdWlsZGVyLCBcclxuICAgICAgICAgICAgICBwcml2YXRlIHJvdXRlcjogUm91dGVyLFxyXG4gICAgICAgICAgICAgIHByaXZhdGUgbm90aWZpY2F0aW9uc1NlcnZpY2U6IE5vdGlmaWNhdGlvbnNTZXJ2aWNlKSB7XHJcbiAgICBcclxuICB9XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG5cclxuICAgIHRoaXMuY29udGVzdEZvcm0gPSB0aGlzLmZiLmdyb3VwKHtcclxuICAgICAgY29udGVzdE5hbWU6IFsnJywgVmFsaWRhdG9ycy5yZXF1aXJlZF0sXHJcbiAgICAgIGNvbnRlc3RDYXRlZ29yeTogWydMb2dvdGlwYXMgaXIgdml6aXRpbsSXIGtvcnRlbMSXJywgVmFsaWRhdG9ycy5yZXF1aXJlZF0sXHJcbiAgICAgIGNvbnRlc3REZXNjcmlwdGlvbjogWycnLCBWYWxpZGF0b3JzLnJlcXVpcmVkXSxcclxuICAgICAgY29udGVzdEF3YXJkOiBbJycsIFZhbGlkYXRvcnMucmVxdWlyZWRdXHJcbiAgICB9KTtcclxuXHJcbiAgICB0aGlzLmNvbnRlc3RzU2VydmljZS5nZXRBbGxDb250ZXN0cygpXHJcbiAgICAuc3Vic2NyaWJlKGNvbnRlc3RzID0+IHtcclxuICAgICAgdGhpcy5jb250ZXN0cyA9IGNvbnRlc3RzO1xyXG4gICAgICB0aGlzLmNvbnRlc3RzU2VydmljZS5jb250ZXN0cyA9IGNvbnRlc3RzO1xyXG4gICAgICBjb25zb2xlLmxvZyh0aGlzLmNvbnRlc3RzKTtcclxuICAgIH0sXHJcbiAgICBlcnJvciA9PiB7XHJcbiAgICAgICAgICAvL3RoaXMuZXJyb3JTZXJ2aWNlLmhhbmRsZUVycm9yKGVycm9yKTtcclxuICAgICAgICAgIHRoaXMubm90aWZpY2F0aW9uc1NlcnZpY2UuZXJyb3IoJ8SudnlrbyBrbGFpZGEnLCAnTmVwYXZ5a28gxK9rZWx0aSBrb25rdXJzxbMgaW5mb3JtYWNpam9zJywge3RpbWVPdXQ6IDMwMDAsIHNob3dQcm9ncmVzc0JhcjogZmFsc2V9KVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgIC8vIHRoaXMuY29udGVzdHNTZXJ2aWNlLmNvbnRlc3RFZGl0ZWRcclxuICAgIC8vICAgLnN1YnNjcmliZShjb250ZXN0ID0+IHtcclxuICAgIC8vICAgICB0aGlzLmNvbnRlc3QgPSBjb250ZXN0O1xyXG4gICAgLy8gICB9KTtcclxuICAgfVxyXG5cclxuICBhZGRDb250ZXN0KGZvcm06IGFueSkge1xyXG4gICAgaWYgKHRoaXMuY29udGVzdCkge1xyXG4gICAgICAvL0VkaXRcclxuICAgICAgY29uc29sZS5sb2codGhpcy5jb250ZXN0KTtcclxuICAgICAgXHJcbiAgICAgIHRoaXMuY29udGVzdC5uYW1lID0gZm9ybS5jb250ZXN0TmFtZS52YWx1ZTtcclxuICAgICAgdGhpcy5jb250ZXN0LmNhdGVnb3J5ID0gZm9ybS5jb250ZXN0Q2F0ZWdvcnkudmFsdWU7XHJcbiAgICAgIHRoaXMuY29udGVzdC5kZXNjcmlwdGlvbiA9IGZvcm0uY29udGVzdERlc2NyaXB0aW9uLnZhbHVlO1xyXG4gICAgICB0aGlzLmNvbnRlc3QuYXdhcmQgPSBmb3JtLmNvbnRlc3RBd2FyZC52YWx1ZTtcclxuICAgICAgdGhpcy5jb250ZXN0c1NlcnZpY2UudXBkYXRlQ29udGVzdCh0aGlzLmNvbnRlc3QpXHJcbiAgICAgICAgLnN1YnNjcmliZShkYXRhID0+IHtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZXJyb3IgPT4ge1xyXG4gICAgICAgICAgLy90aGlzLmVycm9yU2VydmljZS5oYW5kbGVFcnJvcihlcnJvcik7XHJcbiAgICAgICAgICB0aGlzLm5vdGlmaWNhdGlvbnNTZXJ2aWNlLmVycm9yKCfErnZ5a28ga2xhaWRhJywgJ05lcGF2eWtvIMSva2VsdGkga29ua3Vyc28nLCB7dGltZU91dDogMzAwMCwgc2hvd1Byb2dyZXNzQmFyOiBmYWxzZX0pXHJcbiAgICAgICAgfSlcclxuICAgICAgdGhpcy5jb250ZXN0ID0gbnVsbDtcclxuXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBjb25zb2xlLmxvZyhmb3JtKTtcclxuICAgICAgY29uc3QgY29udGVzdCA9IG5ldyBDb250ZXN0KGZvcm0uY29udGVzdE5hbWUudmFsdWUsIG51bGwsIG51bGwsIG51bGwsIGZvcm0uY29udGVzdENhdGVnb3J5LnZhbHVlLCBmb3JtLmNvbnRlc3REZXNjcmlwdGlvbi52YWx1ZSwgZm9ybS5jb250ZXN0QXdhcmQudmFsdWUsICdhY3RpdmUnLCAxMCwgNSwgRGF0ZS5ub3coKSwgRGF0ZS5ub3coKSk7XHJcbiAgICAgIGNvbnNvbGUubG9nKGNvbnRlc3QpO1xyXG4gICAgICB0aGlzLmNvbnRlc3RzU2VydmljZS5hZGRDb250ZXN0KGNvbnRlc3QpXHJcbiAgICAgICAgLnN1YnNjcmliZShkYXRhID0+IHtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xyXG4gICAgICAgICAgdGhpcy5jb250ZXN0c1NlcnZpY2UuY29udGVzdHMucHVzaChkYXRhKTtcclxuICAgICAgICAgIGZvcm0uY29udGVzdE5hbWUudmFsdWUgPSAnJztcclxuICAgICAgICAgIGZvcm0uY29udGVzdERlc2NyaXB0aW9uLnZhbHVlID0gJyc7XHJcbiAgICAgICAgICBmb3JtLmNvbnRlc3RBd2FyZC52YWx1ZSA9ICcnO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZXJyb3IgPT4ge1xyXG4gICAgICAgICAgLy90aGlzLmVycm9yU2VydmljZS5oYW5kbGVFcnJvcihlcnJvcik7XHJcbiAgICAgICAgICB0aGlzLm5vdGlmaWNhdGlvbnNTZXJ2aWNlLmVycm9yKCfErnZ5a28ga2xhaWRhJywgJ05lcGF2eWtvIMSva2VsdGkga29ua3Vyc28nLCB7dGltZU91dDogMzAwMCwgc2hvd1Byb2dyZXNzQmFyOiBmYWxzZX0pXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBlZGl0Q29udGVzdChjb250ZXN0OiBhbnkpIHtcclxuICAgIHRoaXMuY29udGVzdHNTZXJ2aWNlLmVkaXRDb250ZXN0KGNvbnRlc3QpO1xyXG4gIH1cclxuXHJcbiAgZGVsZXRlQ29udGVzdChjb250ZXN0OiBhbnkpIHtcclxuICAgIHRoaXMuY29udGVzdHNTZXJ2aWNlLmRlbGV0ZUNvbnRlc3QoY29udGVzdClcclxuICAgICAgLnN1YnNjcmliZShkYXRhID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhkYXRhKTtcclxuICAgICAgfSxcclxuICAgICAgZXJyb3IgPT4ge1xyXG4gICAgICAgIHRoaXMuZXJyb3JTZXJ2aWNlLmhhbmRsZUVycm9yKGVycm9yKTtcclxuICAgICAgfSlcclxuICB9XHJcblxyXG4gIG9uQ2FuY2VsKCkge1xyXG4gICAgdGhpcy5jb250ZXN0ID0gbnVsbDtcclxuICB9XHJcblxyXG4gIGJlbG9uZ3NUb1VzZXIodXNlcklkOiBzdHJpbmcpIHtcclxuICAgIHJldHVybiBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndXNlcklkJykgPT0gdXNlcklkO1xyXG4gIH1cclxuXHJcbiAgZ29CYWNrKCkge1xyXG4gICAgdGhpcy5yb3V0ZXIubmF2aWdhdGVCeVVybCgnL3Bhc2tlbGJ0aS1rb25rdXJzYScpO1xyXG4gIH1cclxuXHJcbn0iXX0=
