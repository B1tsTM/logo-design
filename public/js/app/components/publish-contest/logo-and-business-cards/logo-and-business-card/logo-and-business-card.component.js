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
            _this.router.navigate(['/']);
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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvcHVibGlzaC1jb250ZXN0L2xvZ28tYW5kLWJ1c2luZXNzLWNhcmRzL2xvZ28tYW5kLWJ1c2luZXNzLWNhcmQvbG9nby1hbmQtYnVzaW5lc3MtY2FyZC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUFrQyxlQUFlLENBQUMsQ0FBQTtBQUNsRCx3QkFBd0IsNEJBQTRCLENBQUMsQ0FBQTtBQUNyRCxpQ0FBZ0MsdUNBQXVDLENBQUMsQ0FBQTtBQUN4RSxzQkFBNkIsMEJBQTBCLENBQUMsQ0FBQTtBQUN4RCxzQkFBZ0UsZ0JBQWdCLENBQUMsQ0FBQTtBQUNqRix1QkFBdUIsaUJBQWlCLENBQUMsQ0FBQTtBQUN6Qyx1Q0FBcUMsd0JBQXdCLENBQUMsQ0FBQTtBQVE5RDtJQVFFLHNDQUFvQixlQUFnQyxFQUNoQyxZQUEwQixFQUMxQixFQUFlLEVBQ2YsTUFBYyxFQUNkLG9CQUEwQztRQUoxQyxvQkFBZSxHQUFmLGVBQWUsQ0FBaUI7UUFDaEMsaUJBQVksR0FBWixZQUFZLENBQWM7UUFDMUIsT0FBRSxHQUFGLEVBQUUsQ0FBYTtRQUNmLFdBQU0sR0FBTixNQUFNLENBQVE7UUFDZCx5QkFBb0IsR0FBcEIsb0JBQW9CLENBQXNCO1FBWDlELFlBQU8sR0FBWSxJQUFJLENBQUM7UUFDeEIsYUFBUSxHQUFRLEVBQUUsQ0FBQztRQUVaLFlBQU8sR0FBRztZQUNiLFFBQVEsRUFBRSxDQUFDLEtBQUssRUFBQyxPQUFPLENBQUM7U0FDMUIsQ0FBQztJQVFKLENBQUM7SUFFRCwrQ0FBUSxHQUFSO1FBQUEsaUJBd0JFO1FBdEJBLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7WUFDL0IsV0FBVyxFQUFFLENBQUMsRUFBRSxFQUFFLGtCQUFVLENBQUMsUUFBUSxDQUFDO1lBQ3RDLGVBQWUsRUFBRSxDQUFDLCtCQUErQixFQUFFLGtCQUFVLENBQUMsUUFBUSxDQUFD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Z28tYW5kLWJ1c2luZXNzLWNhcmRzL2xvZ28tYW5kLWJ1c2luZXNzLWNhcmQvbG9nby1hbmQtYnVzaW5lc3MtY2FyZC5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDb250ZXN0IH0gZnJvbSAnLi4vLi4vLi4vLi4vbW9kZWxzL2NvbnRlc3QnO1xyXG5pbXBvcnQgeyBDb250ZXN0c1NlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi8uLi9zZXJ2aWNlcy9jb250ZXN0cy5zZXJ2aWNlJztcclxuaW1wb3J0IHsgRXJyb3JTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vLi4vZXJyb3JzL2luZGV4JztcclxuaW1wb3J0IHsgRm9ybUdyb3VwLCBGb3JtQ29udHJvbCwgRm9ybUJ1aWxkZXIsIFZhbGlkYXRvcnMgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcbmltcG9ydCB7IE5vdGlmaWNhdGlvbnNTZXJ2aWNlIH0gZnJvbSAnYW5ndWxhcjItbm90aWZpY2F0aW9ucyc7XHJcblxyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcclxuICB0ZW1wbGF0ZVVybDogJ2xvZ28tYW5kLWJ1c2luZXNzLWNhcmQuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWydsb2dvLWFuZC1idXNpbmVzcy1jYXJkLmNvbXBvbmVudC5jc3MnXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgTG9nb0FuZEJ1c2luZXNzQ2FyZENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgY29udGVzdDogQ29udGVzdCA9IG51bGw7XHJcbiAgY29udGVzdHM6IGFueSA9IFtdO1xyXG4gIHB1YmxpYyBjb250ZXN0Rm9ybTogRm9ybUdyb3VwO1xyXG4gIHB1YmxpYyBvcHRpb25zID0ge1xyXG4gICAgICBwb3NpdGlvbjogW1widG9wXCIsXCJyaWdodFwiXVxyXG4gICAgfTtcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBjb250ZXN0c1NlcnZpY2U6IENvbnRlc3RzU2VydmljZSwgXHJcbiAgICAgICAgICAgICAgcHJpdmF0ZSBlcnJvclNlcnZpY2U6IEVycm9yU2VydmljZSwgXHJcbiAgICAgICAgICAgICAgcHJpdmF0ZSBmYjogRm9ybUJ1aWxkZXIsIFxyXG4gICAgICAgICAgICAgIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsXHJcbiAgICAgICAgICAgICAgcHJpdmF0ZSBub3RpZmljYXRpb25zU2VydmljZTogTm90aWZpY2F0aW9uc1NlcnZpY2UpIHtcclxuICAgIFxyXG4gIH1cclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcblxyXG4gICAgdGhpcy5jb250ZXN0Rm9ybSA9IHRoaXMuZmIuZ3JvdXAoe1xyXG4gICAgICBjb250ZXN0TmFtZTogWycnLCBWYWxpZGF0b3JzLnJlcXVpcmVkXSxcclxuICAgICAgY29udGVzdENhdGVnb3J5OiBbJ0xvZ290aXBhcyBpciB2aXppdGluxJcga29ydGVsxJcnLCBWYWxpZGF0b3JzLnJlcXVpcmVkXSxcclxuICAgICAgY29udGVzdERlc2NyaXB0aW9uOiBbJycsIFZhbGlkYXRvcnMucmVxdWlyZWRdLFxyXG4gICAgICBjb250ZXN0QXdhcmQ6IFsnJywgVmFsaWRhdG9ycy5yZXF1aXJlZF1cclxuICAgIH0pO1xyXG5cclxuICAgIHRoaXMuY29udGVzdHNTZXJ2aWNlLmdldEFsbENvbnRlc3RzKClcclxuICAgIC5zdWJzY3JpYmUoY29udGVzdHMgPT4ge1xyXG4gICAgICB0aGlzLmNvbnRlc3RzID0gY29udGVzdHM7XHJcbiAgICAgIHRoaXMuY29udGVzdHNTZXJ2aWNlLmNvbnRlc3RzID0gY29udGVzdHM7XHJcbiAgICAgIGNvbnNvbGUubG9nKHRoaXMuY29udGVzdHMpO1xyXG4gICAgfSxcclxuICAgIGVycm9yID0+IHtcclxuICAgICAgICAgIC8vdGhpcy5lcnJvclNlcnZpY2UuaGFuZGxlRXJyb3IoZXJyb3IpO1xyXG4gICAgICAgICAgdGhpcy5ub3RpZmljYXRpb25zU2VydmljZS5lcnJvcihlcnJvci50aXRsZSwgZXJyb3IuZXJyb3IubWVzc2FnZSwge3RpbWVPdXQ6IDMwMDAsIHNob3dQcm9ncmVzc0JhcjogZmFsc2V9KVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgIC8vIHRoaXMuY29udGVzdHNTZXJ2aWNlLmNvbnRlc3RFZGl0ZWRcclxuICAgIC8vICAgLnN1YnNjcmliZShjb250ZXN0ID0+IHtcclxuICAgIC8vICAgICB0aGlzLmNvbnRlc3QgPSBjb250ZXN0O1xyXG4gICAgLy8gICB9KTtcclxuICAgfVxyXG5cclxuICBhZGRDb250ZXN0KGZvcm06IGFueSkge1xyXG4gICAgLy8gaWYgKHRoaXMuY29udGVzdCkge1xyXG4gICAgLy8gICAvL0VkaXRcclxuICAgIC8vICAgY29uc29sZS5sb2codGhpcy5jb250ZXN0KTtcclxuICAgICAgXHJcbiAgICAvLyAgIHRoaXMuY29udGVzdC5uYW1lID0gZm9ybS5jb250ZXN0TmFtZS52YWx1ZTtcclxuICAgIC8vICAgdGhpcy5jb250ZXN0LmNhdGVnb3J5ID0gZm9ybS5jb250ZXN0Q2F0ZWdvcnkudmFsdWU7XHJcbiAgICAvLyAgIHRoaXMuY29udGVzdC5kZXNjcmlwdGlvbiA9IGZvcm0uY29udGVzdERlc2NyaXB0aW9uLnZhbHVlO1xyXG4gICAgLy8gICB0aGlzLmNvbnRlc3QuYXdhcmQgPSBmb3JtLmNvbnRlc3RBd2FyZC52YWx1ZTtcclxuICAgIC8vICAgdGhpcy5jb250ZXN0c1NlcnZpY2UudXBkYXRlQ29udGVzdCh0aGlzLmNvbnRlc3QpXHJcbiAgICAvLyAgICAgLnN1YnNjcmliZShkYXRhID0+IHtcclxuICAgIC8vICAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xyXG4gICAgLy8gICAgIH0sXHJcbiAgICAvLyAgICAgZXJyb3IgPT4ge1xyXG4gICAgLy8gICAgICAgLy90aGlzLmVycm9yU2VydmljZS5oYW5kbGVFcnJvcihlcnJvcik7XHJcbiAgICAvLyAgICAgICB0aGlzLm5vdGlmaWNhdGlvbnNTZXJ2aWNlLmVycm9yKCfErnZ5a28ga2xhaWRhJywgJ05lcGF2eWtvIMSva2VsdGkga29ua3Vyc28nLCB7dGltZU91dDogMzAwMCwgc2hvd1Byb2dyZXNzQmFyOiBmYWxzZX0pXHJcbiAgICAvLyAgICAgfSlcclxuICAgIC8vICAgdGhpcy5jb250ZXN0ID0gbnVsbDtcclxuXHJcbiAgICAvLyB9IGVsc2Uge1xyXG4gICAgICBjb25zb2xlLmxvZyhmb3JtKTtcclxuICAgICAgY29uc3QgY29udGVzdCA9IG5ldyBDb250ZXN0KGZvcm0uY29udGVzdE5hbWUudmFsdWUsIG51bGwsIG51bGwsIG51bGwsIGZvcm0uY29udGVzdENhdGVnb3J5LnZhbHVlLCBmb3JtLmNvbnRlc3REZXNjcmlwdGlvbi52YWx1ZSwgZm9ybS5jb250ZXN0QXdhcmQudmFsdWUsICdhY3RpdmUnLCAxMCwgNSwgRGF0ZS5ub3coKSwgRGF0ZS5ub3coKSk7XHJcbiAgICAgIGNvbnNvbGUubG9nKGNvbnRlc3QpO1xyXG4gICAgICB0aGlzLmNvbnRlc3RzU2VydmljZS5hZGRDb250ZXN0KGNvbnRlc3QpXHJcbiAgICAgICAgLnN1YnNjcmliZShkYXRhID0+IHtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xyXG4gICAgICAgICAgdGhpcy5jb250ZXN0c1NlcnZpY2UuY29udGVzdHMucHVzaChkYXRhKTtcclxuICAgICAgICAgIGZvcm0uY29udGVzdE5hbWUudmFsdWUgPSAnJztcclxuICAgICAgICAgIGZvcm0uY29udGVzdERlc2NyaXB0aW9uLnZhbHVlID0gJyc7XHJcbiAgICAgICAgICBmb3JtLmNvbnRlc3RBd2FyZC52YWx1ZSA9ICcnO1xyXG4gICAgICAgICAgdGhpcy5ub3RpZmljYXRpb25zU2VydmljZS5zdWNjZXNzKCfErmtlbHRhJywgJ0tvbmt1cnNhcyDEr2tlbHRhcycsIHt0aW1lT3V0OiAzMDAwLCBzaG93UHJvZ3Jlc3NCYXI6IGZhbHNlfSk7XHJcbiAgICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJy8nXSk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBlcnJvciA9PiB7XHJcbiAgICAgICAgICAvL3RoaXMuZXJyb3JTZXJ2aWNlLmhhbmRsZUVycm9yKGVycm9yKTtcclxuICAgICAgICAgIHRoaXMubm90aWZpY2F0aW9uc1NlcnZpY2UuZXJyb3IoZXJyb3IudGl0bGUsIGVycm9yLmVycm9yLm1lc3NhZ2UsIHt0aW1lT3V0OiAzMDAwLCBzaG93UHJvZ3Jlc3NCYXI6IGZhbHNlfSlcclxuICAgICAgICB9KTtcclxuICAgIC8vfVxyXG4gIH1cclxuXHJcbiAgZWRpdENvbnRlc3QoY29udGVzdDogYW55KSB7XHJcbiAgICB0aGlzLmNvbnRlc3RzU2VydmljZS5lZGl0Q29udGVzdChjb250ZXN0KTtcclxuICB9XHJcblxyXG4gIGRlbGV0ZUNvbnRlc3QoY29udGVzdDogYW55KSB7XHJcbiAgICB0aGlzLmNvbnRlc3RzU2VydmljZS5kZWxldGVDb250ZXN0KGNvbnRlc3QpXHJcbiAgICAgIC5zdWJzY3JpYmUoZGF0YSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coZGF0YSk7XHJcbiAgICAgIH0sXHJcbiAgICAgIGVycm9yID0+IHtcclxuICAgICAgICB0aGlzLmVycm9yU2VydmljZS5oYW5kbGVFcnJvcihlcnJvcik7XHJcbiAgICAgIH0pXHJcbiAgfVxyXG5cclxuICBvbkNhbmNlbCgpIHtcclxuICAgIHRoaXMuY29udGVzdCA9IG51bGw7XHJcbiAgfVxyXG5cclxuICBiZWxvbmdzVG9Vc2VyKHVzZXJJZDogc3RyaW5nKSB7XHJcbiAgICByZXR1cm4gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3VzZXJJZCcpID09IHVzZXJJZDtcclxuICB9XHJcblxyXG4gIGdvQmFjaygpIHtcclxuICAgIHRoaXMucm91dGVyLm5hdmlnYXRlQnlVcmwoJy9wYXNrZWxidGkta29ua3Vyc2EnKTtcclxuICB9XHJcblxyXG59Il19
