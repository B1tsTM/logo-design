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
var LogoAndBusinessCardComponent = (function () {
    function LogoAndBusinessCardComponent(contestsService, errorService, fb, router) {
        this.contestsService = contestsService;
        this.errorService = errorService;
        this.fb = fb;
        this.router = router;
        this.contest = null;
        this.contests = [];
    }
    LogoAndBusinessCardComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.contestForm = this.fb.group({
            contestName: ['', forms_1.Validators.required],
            contestCategory: ['Logotipas ir vizitinė kortelė', forms_1.Validators.required],
            contestDescription: ['', forms_1.Validators.required],
            contestAward: ['', forms_1.Validators.required]
        });
        this.contestsService.getContests()
            .subscribe(function (contests) {
            _this.contests = contests;
            _this.contestsService.contests = contests;
            console.log(_this.contests);
        });
        this.contestsService.contestEdited
            .subscribe(function (contest) {
            _this.contest = contest;
        });
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
                _this.errorService.handleError(error);
            });
            this.contest = null;
        }
        else {
            console.log(form);
            //const contest: any = {contests: input, type: 'Logo', designer: 'John Lohke'};
            var contest = new contest_1.Contest(form.contestName.value, null, form.contestCategory.value, form.contestDescription.value, form.contestAward.value, 'active', 10, 5, Date.now(), Date.now());
            console.log(contest);
            this.contestsService.addContest(contest)
                .subscribe(function (data) {
                console.log(data);
                _this.contestsService.contests.push(data);
                form.contestName.value = '';
                form.contestDescription.value = '';
                form.contestAward.value = '';
            }, function (error) {
                _this.errorService.handleError(error);
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
        __metadata('design:paramtypes', [contests_service_1.ContestsService, index_1.ErrorService, forms_1.FormBuilder, router_1.Router])
    ], LogoAndBusinessCardComponent);
    return LogoAndBusinessCardComponent;
}());
exports.LogoAndBusinessCardComponent = LogoAndBusinessCardComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvcHVibGlzaC1jb250ZXN0L2xvZ28tYW5kLWJ1c2luZXNzLWNhcmRzL2xvZ28tYW5kLWJ1c2luZXNzLWNhcmQvbG9nby1hbmQtYnVzaW5lc3MtY2FyZC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUFrQyxlQUFlLENBQUMsQ0FBQTtBQUNsRCx3QkFBd0IsNEJBQTRCLENBQUMsQ0FBQTtBQUNyRCxpQ0FBZ0MsdUNBQXVDLENBQUMsQ0FBQTtBQUN4RSxzQkFBNkIsMEJBQTBCLENBQUMsQ0FBQTtBQUN4RCxzQkFBZ0UsZ0JBQWdCLENBQUMsQ0FBQTtBQUNqRix1QkFBdUIsaUJBQWlCLENBQUMsQ0FBQTtBQVF6QztJQUtFLHNDQUFvQixlQUFnQyxFQUFVLFlBQTBCLEVBQVUsRUFBZSxFQUFVLE1BQWM7UUFBckgsb0JBQWUsR0FBZixlQUFlLENBQWlCO1FBQVUsaUJBQVksR0FBWixZQUFZLENBQWM7UUFBVSxPQUFFLEdBQUYsRUFBRSxDQUFhO1FBQVUsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUp6SSxZQUFPLEdBQVksSUFBSSxDQUFDO1FBQ3hCLGFBQVEsR0FBUSxFQUFFLENBQUM7SUFLbkIsQ0FBQztJQUVELCtDQUFRLEdBQVI7UUFBQSxpQkFvQkU7UUFsQkEsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQztZQUMvQixXQUFXLEVBQUUsQ0FBQyxFQUFFLEVBQUUsa0JBQVUsQ0FBQyxRQUFRLENBQUM7WUFDdEMsZUFBZSxFQUFFLENBQUMsK0JBQStCLEVBQUUsa0JBQVUsQ0FBQyxRQUFRLENBQUM7WUFDdkUsa0JBQWtCLEVBQUUsQ0FBQyxFQUFFLEVBQUUsa0JBQVUsQ0FBQyxRQUFRLENBQUM7WUFDN0MsWUFBWSxFQUFFLENBQUMsRUFBRSxFQUFFLGtCQUFVLENBQUMsUUFBUSxDQUFDO1NBQ3hDLENBQUMsQ0FBQztRQUVILElBQUksQ0FBQyxlQUFl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QUNILENBQUM7SUFFRCxrREFBVyxHQUFYLFVBQVksT0FBWTtRQUN0QixJQUFJLENBQUMsZUFBZSxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUM1QyxDQUFDO0lBRUQsb0RBQWEsR0FBYixVQUFjLE9BQVk7UUFBMUIsaUJBUUM7UUFQQyxJQUFJLENBQUMsZUFBZSxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUM7YUFDeEMsU0FBUyxDQUFDLFVBQUEsSUFBSTtZQUNiLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDcEIsQ0FBQyxFQUNELFVBQUEsS0FBSztZQUNILEtBQUksQ0FBQyxZQUFZLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3ZDLENBQUMsQ0FBQyxDQUFBO0lBQ04sQ0FBQztJQUVELCtDQUFRLEdBQVI7UUFDRSxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQztJQUN0QixDQUFDO0lBRUQsb0RBQWEsR0FBYixVQUFjLE1BQWM7UUFDMUIsTUFBTSxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLElBQUksTUFBTSxDQUFDO0lBQ2xELENBQUM7SUFFRCw2Q0FBTSxHQUFOO1FBQ0UsSUFBSSxDQUFDLE1BQU0sQ0FBQyxhQUFhLENBQUMscUJBQXFCLENBQUMsQ0FBQztJQUNuRCxDQUFDO0lBakdIO1FBQUMsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixXQUFXLEVBQUUsdUNBQXVDO1lBQ3BELFNBQVMsRUFBRSxDQUFDLHNDQUFzQyxDQUFDO1NBQ3BELENBQUM7O29DQUFBO0lBK0ZGLG1DQUFDO0FBQUQsQ0E5RkEsQUE4RkMsSUFBQTtBQTlGWSxvQ0FBNEIsK0JBOEZ4QyxDQUFBIiwiZmlsZSI6ImNvbXBvbmVudHMvcHVibGlzaC1jb250ZXN0L2xvZ28tYW5kLWJ1c2luZXNzLWNhcmRzL2xvZ28tYW5kLWJ1c2luZXNzLWNhcmQvbG9nby1hbmQtYnVzaW5lc3MtY2FyZC5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDb250ZXN0IH0gZnJvbSAnLi4vLi4vLi4vLi4vbW9kZWxzL2NvbnRlc3QnO1xyXG5pbXBvcnQgeyBDb250ZXN0c1NlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi8uLi9zZXJ2aWNlcy9jb250ZXN0cy5zZXJ2aWNlJztcclxuaW1wb3J0IHsgRXJyb3JTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vLi4vZXJyb3JzL2luZGV4JztcclxuaW1wb3J0IHsgRm9ybUdyb3VwLCBGb3JtQ29udHJvbCwgRm9ybUJ1aWxkZXIsIFZhbGlkYXRvcnMgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcblxyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcclxuICB0ZW1wbGF0ZVVybDogJ2xvZ28tYW5kLWJ1c2luZXNzLWNhcmQuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWydsb2dvLWFuZC1idXNpbmVzcy1jYXJkLmNvbXBvbmVudC5jc3MnXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgTG9nb0FuZEJ1c2luZXNzQ2FyZENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgY29udGVzdDogQ29udGVzdCA9IG51bGw7XHJcbiAgY29udGVzdHM6IGFueSA9IFtdO1xyXG4gIHB1YmxpYyBjb250ZXN0Rm9ybTogRm9ybUdyb3VwO1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGNvbnRlc3RzU2VydmljZTogQ29udGVzdHNTZXJ2aWNlLCBwcml2YXRlIGVycm9yU2VydmljZTogRXJyb3JTZXJ2aWNlLCBwcml2YXRlIGZiOiBGb3JtQnVpbGRlciwgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlcikge1xyXG4gICAgXHJcbiAgfVxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuXHJcbiAgICB0aGlzLmNvbnRlc3RGb3JtID0gdGhpcy5mYi5ncm91cCh7XHJcbiAgICAgIGNvbnRlc3ROYW1lOiBbJycsIFZhbGlkYXRvcnMucmVxdWlyZWRdLFxyXG4gICAgICBjb250ZXN0Q2F0ZWdvcnk6IFsnTG9nb3RpcGFzIGlyIHZpeml0aW7ElyBrb3J0ZWzElycsIFZhbGlkYXRvcnMucmVxdWlyZWRdLFxyXG4gICAgICBjb250ZXN0RGVzY3JpcHRpb246IFsnJywgVmFsaWRhdG9ycy5yZXF1aXJlZF0sXHJcbiAgICAgIGNvbnRlc3RBd2FyZDogWycnLCBWYWxpZGF0b3JzLnJlcXVpcmVkXVxyXG4gICAgfSk7XHJcblxyXG4gICAgdGhpcy5jb250ZXN0c1NlcnZpY2UuZ2V0Q29udGVzdHMoKVxyXG4gICAgLnN1YnNjcmliZShjb250ZXN0cyA9PiB7XHJcbiAgICAgIHRoaXMuY29udGVzdHMgPSBjb250ZXN0cztcclxuICAgICAgdGhpcy5jb250ZXN0c1NlcnZpY2UuY29udGVzdHMgPSBjb250ZXN0cztcclxuICAgICAgY29uc29sZS5sb2codGhpcy5jb250ZXN0cyk7XHJcbiAgICB9KTtcclxuXHJcbiAgICB0aGlzLmNvbnRlc3RzU2VydmljZS5jb250ZXN0RWRpdGVkXHJcbiAgICAgIC5zdWJzY3JpYmUoY29udGVzdCA9PiB7XHJcbiAgICAgICAgdGhpcy5jb250ZXN0ID0gY29udGVzdDtcclxuICAgICAgfSk7XHJcbiAgIH1cclxuXHJcbiAgYWRkQ29udGVzdChmb3JtOiBhbnkpIHtcclxuICAgIGlmICh0aGlzLmNvbnRlc3QpIHtcclxuICAgICAgLy9FZGl0XHJcbiAgICAgIGNvbnNvbGUubG9nKHRoaXMuY29udGVzdCk7XHJcbiAgICAgIFxyXG4gICAgICB0aGlzLmNvbnRlc3QubmFtZSA9IGZvcm0uY29udGVzdE5hbWUudmFsdWU7XHJcbiAgICAgIHRoaXMuY29udGVzdC5jYXRlZ29yeSA9IGZvcm0uY29udGVzdENhdGVnb3J5LnZhbHVlO1xyXG4gICAgICB0aGlzLmNvbnRlc3QuZGVzY3JpcHRpb24gPSBmb3JtLmNvbnRlc3REZXNjcmlwdGlvbi52YWx1ZTtcclxuICAgICAgdGhpcy5jb250ZXN0LmF3YXJkID0gZm9ybS5jb250ZXN0QXdhcmQudmFsdWU7XHJcbiAgICAgIHRoaXMuY29udGVzdHNTZXJ2aWNlLnVwZGF0ZUNvbnRlc3QodGhpcy5jb250ZXN0KVxyXG4gICAgICAgIC5zdWJzY3JpYmUoZGF0YSA9PiB7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhkYXRhKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGVycm9yID0+IHtcclxuICAgICAgICAgIHRoaXMuZXJyb3JTZXJ2aWNlLmhhbmRsZUVycm9yKGVycm9yKTtcclxuICAgICAgICB9KVxyXG4gICAgICB0aGlzLmNvbnRlc3QgPSBudWxsO1xyXG5cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGZvcm0pO1xyXG4gICAgICAvL2NvbnN0IGNvbnRlc3Q6IGFueSA9IHtjb250ZXN0czogaW5wdXQsIHR5cGU6ICdMb2dvJywgZGVzaWduZXI6ICdKb2huIExvaGtlJ307XHJcbiAgICAgIGNvbnN0IGNvbnRlc3QgPSBuZXcgQ29udGVzdChmb3JtLmNvbnRlc3ROYW1lLnZhbHVlLCBudWxsLCBmb3JtLmNvbnRlc3RDYXRlZ29yeS52YWx1ZSwgZm9ybS5jb250ZXN0RGVzY3JpcHRpb24udmFsdWUsIGZvcm0uY29udGVzdEF3YXJkLnZhbHVlLCAnYWN0aXZlJywgMTAsIDUsIERhdGUubm93KCksIERhdGUubm93KCkpO1xyXG4gICAgICBjb25zb2xlLmxvZyhjb250ZXN0KTtcclxuICAgICAgdGhpcy5jb250ZXN0c1NlcnZpY2UuYWRkQ29udGVzdChjb250ZXN0KVxyXG4gICAgICAgIC5zdWJzY3JpYmUoZGF0YSA9PiB7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhkYXRhKTtcclxuICAgICAgICAgIHRoaXMuY29udGVzdHNTZXJ2aWNlLmNvbnRlc3RzLnB1c2goZGF0YSk7XHJcbiAgICAgICAgICBmb3JtLmNvbnRlc3ROYW1lLnZhbHVlID0gJyc7XHJcbiAgICAgICAgICBmb3JtLmNvbnRlc3REZXNjcmlwdGlvbi52YWx1ZSA9ICcnO1xyXG4gICAgICAgICAgZm9ybS5jb250ZXN0QXdhcmQudmFsdWUgPSAnJztcclxuICAgICAgICB9LFxyXG4gICAgICAgIGVycm9yID0+IHtcclxuICAgICAgICAgIHRoaXMuZXJyb3JTZXJ2aWNlLmhhbmRsZUVycm9yKGVycm9yKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGVkaXRDb250ZXN0KGNvbnRlc3Q6IGFueSkge1xyXG4gICAgdGhpcy5jb250ZXN0c1NlcnZpY2UuZWRpdENvbnRlc3QoY29udGVzdCk7XHJcbiAgfVxyXG5cclxuICBkZWxldGVDb250ZXN0KGNvbnRlc3Q6IGFueSkge1xyXG4gICAgdGhpcy5jb250ZXN0c1NlcnZpY2UuZGVsZXRlQ29udGVzdChjb250ZXN0KVxyXG4gICAgICAuc3Vic2NyaWJlKGRhdGEgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xyXG4gICAgICB9LFxyXG4gICAgICBlcnJvciA9PiB7XHJcbiAgICAgICAgdGhpcy5lcnJvclNlcnZpY2UuaGFuZGxlRXJyb3IoZXJyb3IpO1xyXG4gICAgICB9KVxyXG4gIH1cclxuXHJcbiAgb25DYW5jZWwoKSB7XHJcbiAgICB0aGlzLmNvbnRlc3QgPSBudWxsO1xyXG4gIH1cclxuXHJcbiAgYmVsb25nc1RvVXNlcih1c2VySWQ6IHN0cmluZykge1xyXG4gICAgcmV0dXJuIGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd1c2VySWQnKSA9PSB1c2VySWQ7XHJcbiAgfVxyXG5cclxuICBnb0JhY2soKSB7XHJcbiAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZUJ5VXJsKCcvcGFza2VsYnRpLWtvbmt1cnNhJyk7XHJcbiAgfVxyXG5cclxufSJdfQ==
