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
            _this.notificationsService.error(error.title, error.error.message, { timeOut: 3000, showProgressBar: false });
        });
        // this.contestsService.contestEdited
        //   .subscribe(contest => {
        //     this.contest = contest;
        //   });
    };
    LogoAndBusinessCardComponent.prototype.addContest = function (form) {
        // if (this.contest) {
        //   //Edit
        //   console.log(this.contest);
        var _this = this;
        //   this.contest.name = form.contestName.value;
        //   this.contest.category = form.contestCategory.value;
        //   this.contest.description = form.contestDescription.value;
        //   this.contest.award = form.contestAward.value;
        //   this.contestsService.updateContest(this.contest)
        //     .subscribe(data => {
        //       console.log(data);
        //     },
        //     error => {
        //       //this.errorService.handleError(error);
        //       this.notificationsService.error('Įvyko klaida', 'Nepavyko įkelti konkurso', {timeOut: 3000, showProgressBar: false})
        //     })
        //   this.contest = null;
        // } else {
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
            _this.notificationsService.success('Įkelta', 'Konkursas įkeltas', { timeOut: 3000, showProgressBar: false });
        }, function (error) {
            //this.errorService.handleError(error);
            _this.notificationsService.error(error.title, error.error.message, { timeOut: 3000, showProgressBar: false });
        });
        //}
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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvcHVibGlzaC1jb250ZXN0L2xvZ28tYW5kLWJ1c2luZXNzLWNhcmRzL2xvZ28tYW5kLWJ1c2luZXNzLWNhcmQvbG9nby1hbmQtYnVzaW5lc3MtY2FyZC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUFrQyxlQUFlLENBQUMsQ0FBQTtBQUNsRCx3QkFBd0IsNEJBQTRCLENBQUMsQ0FBQTtBQUNyRCxpQ0FBZ0MsdUNBQXVDLENBQUMsQ0FBQTtBQUN4RSxzQkFBNkIsMEJBQTBCLENBQUMsQ0FBQTtBQUN4RCxzQkFBZ0UsZ0JBQWdCLENBQUMsQ0FBQTtBQUNqRix1QkFBdUIsaUJBQWlCLENBQUMsQ0FBQTtBQUN6Qyx1Q0FBcUMsd0JBQXdCLENBQUMsQ0FBQTtBQVE5RDtJQVFFLHNDQUFvQixlQUFnQyxFQUNoQyxZQUEwQixFQUMxQixFQUFlLEVBQ2YsTUFBYyxFQUNkLG9CQUEwQztRQUoxQyxvQkFBZSxHQUFmLGVBQWUsQ0FBaUI7UUFDaEMsaUJBQVksR0FBWixZQUFZLENBQWM7UUFDMUIsT0FBRSxHQUFGLEVBQUUsQ0FBYTtRQUNmLFdBQU0sR0FBTixNQUFNLENBQVE7UUFDZCx5QkFBb0IsR0FBcEIsb0JBQW9CLENBQXNCO1FBWDlELFlBQU8sR0FBWSxJQUFJLENBQUM7UUFDeEIsYUFBUSxHQUFRLEVBQUUsQ0FBQztRQUVaLFlBQU8sR0FBRztZQUNiLFFBQVEsRUFBRSxDQUFDLEtBQUssRUFBQyxPQUFPLENBQUM7U0FDMUIsQ0FBQztJQVFKLENBQUM7SUFFRCwrQ0FBUSxHQUFSO1FBQUEsaUJBd0JFO1FBdEJBLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7WUFDL0IsV0FBVyxFQUFFLENBQUMsRUFBRSxFQUFFLGtCQUFVLENBQUMsUUFBUSxDQUFDO1lBQ3RDLGVBQWUsRUFBRSxDQUFDLCtCQUErQixFQUFFLGtCQUFVLENBQUMsUUFBUSxDQUFDO1lBQ3ZFLGtCQUFrQixFQUFFLENBQUMsRUFBRSxFQUFFLGtCQUFVLENBQUMsUUFBUSxDQUFDO1lBQzdDLFlBQVksRUFBRSxDQUFDLEVBQUUsRUFBRSxrQkFBVSxDQUFDLFFBQVEsQ0FBQztTQUN4QyxDQUFDLENBQUM7UUFFSCxJQUFJLENBQUMsZUFBZSxDQUFDLGNBQWMsRUFBRTthQUNwQyxTQUFTLENBQUMsVUFBQSxRQUFRO1lBQ2pCLEtBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO1lBQ3pCLEtBQUksQ0FBQyxlQUFlLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztZQUN6QyxPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUM3QixDQUFDLEVBQ0QsVUFBQSxLQUFLO1lBQ0MsdUNBQXVDO1lBQ3ZDLEtBQUksQ0FBQyxvQkFBb0IsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLEtBQUssRUFBRSxLQUFLLENBQUMsS0FBSyxDQUFDLE9BQU8sRUFBRSxFQUFDLE9BQU8sRUFBRSxJQUFJLEVBQUUsZUFBZSxFQUFFLEtBQUssRUFBQyxDQUFDLENBQUE7UUFDNUcsQ0FBQyxDQUFDLENBQUM7UUFFUCxxQ0FBcUM7UUFDckMsNEJBQTRCO1FBQzVCLDhCQUE4QjtRQUM5QixRQUFRO0lBQ1QsQ0FBQztJQUVGLGlEQUFVLEdBQVYsVUFBVyxJQUFTO1FBQ2xCLHNCQUFzQjtRQUN0QixXQUFXO1FBQ1gsK0JBQStCO1FBSGpDLGlCQXFDQztRQWhDQyxnREFBZ0Q7UUFDaEQsd0RBQXdEO1FBQ3hELDhEQUE4RDtRQUM5RCxrREFBa0Q7UUFDbEQscURBQXFEO1FBQ3JELDJCQUEyQjtRQUMzQiwyQkFBMkI7UUFDM0IsU0FBUztRQUNULGlCQUFpQjtRQUNqQixnREFBZ0Q7UUFDaEQsNkhBQTZIO1FBQzdILFNBQVM7UUFDVCx5QkFBeUI7UUFFekIsV0FBVztRQUNULE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDbEIsSUFBTSxPQUFPLEdBQUcsSUFBSSxpQkFBTyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQyxlQUFlLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLFlBQVksQ0FBQyxLQUFLLEVBQUUsUUFBUSxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsSUFBSSxDQUFDLEdBQUcsRUFBRSxFQUFFLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDO1FBQ25NLE9BQU8sQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDckIsSUFBSSxDQUFDLGVBQWUsQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDO2FBQ3JDLFNBQVMsQ0FBQyxVQUFBLElBQUk7WUFDYixPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ2xCLEtBQUksQ0FBQyxlQUFlLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUN6QyxJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUM7WUFDNUIsSUFBSSxDQUFDLGtCQUFrQixDQUFDLEtBQUssR0FBRyxFQUFFLENBQUM7WUFDbkMsSUFBSSxDQUFDLFlBQVksQ0FBQyxLQUFLLEdBQUcsRUFBRSxDQUFDO1lBQzdCLEtBQUksQ0FBQyxvQkFBb0IsQ0FBQyxPQUFPLENBQUMsUUFBUSxFQUFFLG1CQUFtQixFQUFFLEVBQUMsT0FBTyxFQUFFLElBQUksRUFBRSxlQUFlLEVBQUUsS0FBSyxFQUFDLENBQUMsQ0FBQTtRQUMzRyxDQUFDLEVBQ0QsVUFBQSxLQUFLO1lBQ0gsdUNBQXVDO1lBQ3ZDLEtBQUksQ0FBQyxvQkFBb0IsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLEtBQUssRUFBRSxLQUFLLENBQUMsS0FBSyxDQUFDLE9BQU8sRUFBRSxFQUFDLE9BQU8sRUFBRSxJQUFJLEVBQUUsZUFBZSxFQUFFLEtBQUssRUFBQyxDQUFDLENBQUE7UUFDNUcsQ0FBQyxDQUFDLENBQUM7UUFDUCxHQUFHO0lBQ0wsQ0FBQztJQUVELGtEQUFXLEdBQVgsVUFBWSxPQUFZO1FBQ3RCLElBQUksQ0FBQyxlQUFlLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQzVDLENBQUM7SUFFRCxvREFBYSxHQUFiLFVBQWMsT0FBWTtRQUExQixpQkFRQztRQVBDLElBQUksQ0FBQyxlQUFlLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQzthQUN4QyxTQUFTLENBQUMsVUFBQSxJQUFJO1lBQ2IsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNwQixDQUFDLEVBQ0QsVUFBQSxLQUFLO1lBQ0gsS0FBSSxDQUFDLFlBQVksQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDdkMsQ0FBQyxDQUFDLENBQUE7SUFDTixDQUFDO0lBRUQsK0NBQVEsR0FBUjtRQUNFLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO0lBQ3RCLENBQUM7SUFFRCxvREFBYSxHQUFiLFVBQWMsTUFBYztRQUMxQixNQUFNLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsSUFBSSxNQUFNLENBQUM7SUFDbEQsQ0FBQztJQUVELDZDQUFNLEdBQU47UUFDRSxJQUFJLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDO0lBQ25ELENBQUM7SUE5R0g7UUFBQyxnQkFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFdBQVcsRUFBRSx1Q0FBdUM7WUFDcEQsU0FBUyxFQUFFLENBQUMsc0NBQXNDLENBQUM7U0FDcEQsQ0FBQzs7b0NBQUE7SUE0R0YsbUNBQUM7QUFBRCxDQTNHQSxBQTJHQyxJQUFBO0FBM0dZLG9DQUE0QiwrQkEyR3hDLENBQUEiLCJmaWxlIjoiY29tcG9uZW50cy9wdWJsaXNoLWNvbnRlc3QvbG9nby1hbmQtYnVzaW5lc3MtY2FyZHMvbG9nby1hbmQtYnVzaW5lc3MtY2FyZC9sb2dvLWFuZC1idXNpbmVzcy1jYXJkLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IENvbnRlc3QgfSBmcm9tICcuLi8uLi8uLi8uLi9tb2RlbHMvY29udGVzdCc7XHJcbmltcG9ydCB7IENvbnRlc3RzU2VydmljZSB9IGZyb20gJy4uLy4uLy4uLy4uL3NlcnZpY2VzL2NvbnRlc3RzLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBFcnJvclNlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi8uLi9lcnJvcnMvaW5kZXgnO1xyXG5pbXBvcnQgeyBGb3JtR3JvdXAsIEZvcm1Db250cm9sLCBGb3JtQnVpbGRlciwgVmFsaWRhdG9ycyB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuaW1wb3J0IHsgTm90aWZpY2F0aW9uc1NlcnZpY2UgfSBmcm9tICdhbmd1bGFyMi1ub3RpZmljYXRpb25zJztcclxuXHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBtb2R1bGVJZDogbW9kdWxlLmlkLFxyXG4gIHRlbXBsYXRlVXJsOiAnbG9nby1hbmQtYnVzaW5lc3MtY2FyZC5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJ2xvZ28tYW5kLWJ1c2luZXNzLWNhcmQuY29tcG9uZW50LmNzcyddXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBMb2dvQW5kQnVzaW5lc3NDYXJkQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuICBjb250ZXN0OiBDb250ZXN0ID0gbnVsbDtcclxuICBjb250ZXN0czogYW55ID0gW107XHJcbiAgcHVibGljIGNvbnRlc3RGb3JtOiBGb3JtR3JvdXA7XHJcbiAgcHVibGljIG9wdGlvbnMgPSB7XHJcbiAgICAgIHBvc2l0aW9uOiBbXCJ0b3BcIixcInJpZ2h0XCJdXHJcbiAgICB9O1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGNvbnRlc3RzU2VydmljZTogQ29udGVzdHNTZXJ2aWNlLCBcclxuICAgICAgICAgICAgICBwcml2YXRlIGVycm9yU2VydmljZTogRXJyb3JTZXJ2aWNlLCBcclxuICAgICAgICAgICAgICBwcml2YXRlIGZiOiBGb3JtQnVpbGRlciwgXHJcbiAgICAgICAgICAgICAgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlcixcclxuICAgICAgICAgICAgICBwcml2YXRlIG5vdGlmaWNhdGlvbnNTZXJ2aWNlOiBOb3RpZmljYXRpb25zU2VydmljZSkge1xyXG4gICAgXHJcbiAgfVxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuXHJcbiAgICB0aGlzLmNvbnRlc3RGb3JtID0gdGhpcy5mYi5ncm91cCh7XHJcbiAgICAgIGNvbnRlc3ROYW1lOiBbJycsIFZhbGlkYXRvcnMucmVxdWlyZWRdLFxyXG4gICAgICBjb250ZXN0Q2F0ZWdvcnk6IFsnTG9nb3RpcGFzIGlyIHZpeml0aW7ElyBrb3J0ZWzElycsIFZhbGlkYXRvcnMucmVxdWlyZWRdLFxyXG4gICAgICBjb250ZXN0RGVzY3JpcHRpb246IFsnJywgVmFsaWRhdG9ycy5yZXF1aXJlZF0sXHJcbiAgICAgIGNvbnRlc3RBd2FyZDogWycnLCBWYWxpZGF0b3JzLnJlcXVpcmVkXVxyXG4gICAgfSk7XHJcblxyXG4gICAgdGhpcy5jb250ZXN0c1NlcnZpY2UuZ2V0QWxsQ29udGVzdHMoKVxyXG4gICAgLnN1YnNjcmliZShjb250ZXN0cyA9PiB7XHJcbiAgICAgIHRoaXMuY29udGVzdHMgPSBjb250ZXN0cztcclxuICAgICAgdGhpcy5jb250ZXN0c1NlcnZpY2UuY29udGVzdHMgPSBjb250ZXN0cztcclxuICAgICAgY29uc29sZS5sb2codGhpcy5jb250ZXN0cyk7XHJcbiAgICB9LFxyXG4gICAgZXJyb3IgPT4ge1xyXG4gICAgICAgICAgLy90aGlzLmVycm9yU2VydmljZS5oYW5kbGVFcnJvcihlcnJvcik7XHJcbiAgICAgICAgICB0aGlzLm5vdGlmaWNhdGlvbnNTZXJ2aWNlLmVycm9yKGVycm9yLnRpdGxlLCBlcnJvci5lcnJvci5tZXNzYWdlLCB7dGltZU91dDogMzAwMCwgc2hvd1Byb2dyZXNzQmFyOiBmYWxzZX0pXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgLy8gdGhpcy5jb250ZXN0c1NlcnZpY2UuY29udGVzdEVkaXRlZFxyXG4gICAgLy8gICAuc3Vic2NyaWJlKGNvbnRlc3QgPT4ge1xyXG4gICAgLy8gICAgIHRoaXMuY29udGVzdCA9IGNvbnRlc3Q7XHJcbiAgICAvLyAgIH0pO1xyXG4gICB9XHJcblxyXG4gIGFkZENvbnRlc3QoZm9ybTogYW55KSB7XHJcbiAgICAvLyBpZiAodGhpcy5jb250ZXN0KSB7XHJcbiAgICAvLyAgIC8vRWRpdFxyXG4gICAgLy8gICBjb25zb2xlLmxvZyh0aGlzLmNvbnRlc3QpO1xyXG4gICAgICBcclxuICAgIC8vICAgdGhpcy5jb250ZXN0Lm5hbWUgPSBmb3JtLmNvbnRlc3ROYW1lLnZhbHVlO1xyXG4gICAgLy8gICB0aGlzLmNvbnRlc3QuY2F0ZWdvcnkgPSBmb3JtLmNvbnRlc3RDYXRlZ29yeS52YWx1ZTtcclxuICAgIC8vICAgdGhpcy5jb250ZXN0LmRlc2NyaXB0aW9uID0gZm9ybS5jb250ZXN0RGVzY3JpcHRpb24udmFsdWU7XHJcbiAgICAvLyAgIHRoaXMuY29udGVzdC5hd2FyZCA9IGZvcm0uY29udGVzdEF3YXJkLnZhbHVlO1xyXG4gICAgLy8gICB0aGlzLmNvbnRlc3RzU2VydmljZS51cGRhdGVDb250ZXN0KHRoaXMuY29udGVzdClcclxuICAgIC8vICAgICAuc3Vic2NyaWJlKGRhdGEgPT4ge1xyXG4gICAgLy8gICAgICAgY29uc29sZS5sb2coZGF0YSk7XHJcbiAgICAvLyAgICAgfSxcclxuICAgIC8vICAgICBlcnJvciA9PiB7XHJcbiAgICAvLyAgICAgICAvL3RoaXMuZXJyb3JTZXJ2aWNlLmhhbmRsZUVycm9yKGVycm9yKTtcclxuICAgIC8vICAgICAgIHRoaXMubm90aWZpY2F0aW9uc1NlcnZpY2UuZXJyb3IoJ8SudnlrbyBrbGFpZGEnLCAnTmVwYXZ5a28gxK9rZWx0aSBrb25rdXJzbycsIHt0aW1lT3V0OiAzMDAwLCBzaG93UHJvZ3Jlc3NCYXI6IGZhbHNlfSlcclxuICAgIC8vICAgICB9KVxyXG4gICAgLy8gICB0aGlzLmNvbnRlc3QgPSBudWxsO1xyXG5cclxuICAgIC8vIH0gZWxzZSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGZvcm0pO1xyXG4gICAgICBjb25zdCBjb250ZXN0ID0gbmV3IENvbnRlc3QoZm9ybS5jb250ZXN0TmFtZS52YWx1ZSwgbnVsbCwgbnVsbCwgbnVsbCwgZm9ybS5jb250ZXN0Q2F0ZWdvcnkudmFsdWUsIGZvcm0uY29udGVzdERlc2NyaXB0aW9uLnZhbHVlLCBmb3JtLmNvbnRlc3RBd2FyZC52YWx1ZSwgJ2FjdGl2ZScsIDEwLCA1LCBEYXRlLm5vdygpLCBEYXRlLm5vdygpKTtcclxuICAgICAgY29uc29sZS5sb2coY29udGVzdCk7XHJcbiAgICAgIHRoaXMuY29udGVzdHNTZXJ2aWNlLmFkZENvbnRlc3QoY29udGVzdClcclxuICAgICAgICAuc3Vic2NyaWJlKGRhdGEgPT4ge1xyXG4gICAgICAgICAgY29uc29sZS5sb2coZGF0YSk7XHJcbiAgICAgICAgICB0aGlzLmNvbnRlc3RzU2VydmljZS5jb250ZXN0cy5wdXNoKGRhdGEpO1xyXG4gICAgICAgICAgZm9ybS5jb250ZXN0TmFtZS52YWx1ZSA9ICcnO1xyXG4gICAgICAgICAgZm9ybS5jb250ZXN0RGVzY3JpcHRpb24udmFsdWUgPSAnJztcclxuICAgICAgICAgIGZvcm0uY29udGVzdEF3YXJkLnZhbHVlID0gJyc7XHJcbiAgICAgICAgICB0aGlzLm5vdGlmaWNhdGlvbnNTZXJ2aWNlLnN1Y2Nlc3MoJ8Sua2VsdGEnLCAnS29ua3Vyc2FzIMSva2VsdGFzJywge3RpbWVPdXQ6IDMwMDAsIHNob3dQcm9ncmVzc0JhcjogZmFsc2V9KVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZXJyb3IgPT4ge1xyXG4gICAgICAgICAgLy90aGlzLmVycm9yU2VydmljZS5oYW5kbGVFcnJvcihlcnJvcik7XHJcbiAgICAgICAgICB0aGlzLm5vdGlmaWNhdGlvbnNTZXJ2aWNlLmVycm9yKGVycm9yLnRpdGxlLCBlcnJvci5lcnJvci5tZXNzYWdlLCB7dGltZU91dDogMzAwMCwgc2hvd1Byb2dyZXNzQmFyOiBmYWxzZX0pXHJcbiAgICAgICAgfSk7XHJcbiAgICAvL31cclxuICB9XHJcblxyXG4gIGVkaXRDb250ZXN0KGNvbnRlc3Q6IGFueSkge1xyXG4gICAgdGhpcy5jb250ZXN0c1NlcnZpY2UuZWRpdENvbnRlc3QoY29udGVzdCk7XHJcbiAgfVxyXG5cclxuICBkZWxldGVDb250ZXN0KGNvbnRlc3Q6IGFueSkge1xyXG4gICAgdGhpcy5jb250ZXN0c1NlcnZpY2UuZGVsZXRlQ29udGVzdChjb250ZXN0KVxyXG4gICAgICAuc3Vic2NyaWJlKGRhdGEgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xyXG4gICAgICB9LFxyXG4gICAgICBlcnJvciA9PiB7XHJcbiAgICAgICAgdGhpcy5lcnJvclNlcnZpY2UuaGFuZGxlRXJyb3IoZXJyb3IpO1xyXG4gICAgICB9KVxyXG4gIH1cclxuXHJcbiAgb25DYW5jZWwoKSB7XHJcbiAgICB0aGlzLmNvbnRlc3QgPSBudWxsO1xyXG4gIH1cclxuXHJcbiAgYmVsb25nc1RvVXNlcih1c2VySWQ6IHN0cmluZykge1xyXG4gICAgcmV0dXJuIGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd1c2VySWQnKSA9PSB1c2VySWQ7XHJcbiAgfVxyXG5cclxuICBnb0JhY2soKSB7XHJcbiAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZUJ5VXJsKCcvcGFza2VsYnRpLWtvbmt1cnNhJyk7XHJcbiAgfVxyXG5cclxufSJdfQ==
