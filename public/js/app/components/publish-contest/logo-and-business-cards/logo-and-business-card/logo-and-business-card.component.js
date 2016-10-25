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
            var contest = new contest_1.Contest(form.contestName.value, null, null, form.contestCategory.value, form.contestDescription.value, form.contestAward.value, 'active', 10, 5, Date.now(), Date.now());
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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvcHVibGlzaC1jb250ZXN0L2xvZ28tYW5kLWJ1c2luZXNzLWNhcmRzL2xvZ28tYW5kLWJ1c2luZXNzLWNhcmQvbG9nby1hbmQtYnVzaW5lc3MtY2FyZC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUFrQyxlQUFlLENBQUMsQ0FBQTtBQUNsRCx3QkFBd0IsNEJBQTRCLENBQUMsQ0FBQTtBQUNyRCxpQ0FBZ0MsdUNBQXVDLENBQUMsQ0FBQTtBQUN4RSxzQkFBNkIsMEJBQTBCLENBQUMsQ0FBQTtBQUN4RCxzQkFBZ0UsZ0JBQWdCLENBQUMsQ0FBQTtBQUNqRix1QkFBdUIsaUJBQWlCLENBQUMsQ0FBQTtBQVF6QztJQUtFLHNDQUFvQixlQUFnQyxFQUFVLFlBQTBCLEVBQVUsRUFBZSxFQUFVLE1BQWM7UUFBckgsb0JBQWUsR0FBZixlQUFlLENBQWlCO1FBQVUsaUJBQVksR0FBWixZQUFZLENBQWM7UUFBVSxPQUFFLEdBQUYsRUFBRSxDQUFhO1FBQVUsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUp6SSxZQUFPLEdBQVksSUFBSSxDQUFDO1FBQ3hCLGFBQVEsR0FBUSxFQUFFLENBQUM7SUFLbkIsQ0FBQztJQUVELCtDQUFRLEdBQVI7UUFBQSxpQkFvQkU7UUFsQkEsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQztZQUMvQixXQUFXLEVBQUUsQ0FBQyxFQUFFLEVBQUUsa0JBQVUsQ0FBQyxRQUFRLENBQUM7WUFDdEMsZUFBZSxFQUFFLENBQUMsK0JBQStCLEVBQUUsa0JBQVUsQ0FBQyxRQUFRLENBQUM7WUFDdkUsa0JBQWtCLEVBQUUsQ0FBQyxFQUFFLEVBQUUsa0JBQVUsQ0FBQyxRQUFRLENBQUM7WUFDN0MsWUFBWSxFQUFFLENBQUMsRUFBRSxFQUFFLGtCQUFVLENBQUMsUUFBUSxDQUFDO1NBQ3hDLENBQUMsQ0FBQztRQUVILElBQUksQ0FBQyxlQUFl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QUNQLENBQUM7SUFDSCxDQUFDO0lBRUQsa0RBQVcsR0FBWCxVQUFZLE9BQVk7UUFDdEIsSUFBSSxDQUFDLGVBQWUsQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDNUMsQ0FBQztJQUVELG9EQUFhLEdBQWIsVUFBYyxPQUFZO1FBQTFCLGlCQVFDO1FBUEMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDO2FBQ3hDLFNBQVMsQ0FBQyxVQUFBLElBQUk7WUFDYixPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3BCLENBQUMsRUFDRCxVQUFBLEtBQUs7WUFDSCxLQUFJLENBQUMsWUFBWSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUN2QyxDQUFDLENBQUMsQ0FBQTtJQUNOLENBQUM7SUFFRCwrQ0FBUSxHQUFSO1FBQ0UsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7SUFDdEIsQ0FBQztJQUVELG9EQUFhLEdBQWIsVUFBYyxNQUFjO1FBQzFCLE1BQU0sQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxJQUFJLE1BQU0sQ0FBQztJQUNsRCxDQUFDO0lBRUQsNkNBQU0sR0FBTjtRQUNFLElBQUksQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDLHFCQUFxQixDQUFDLENBQUM7SUFDbkQsQ0FBQztJQWpHSDtRQUFDLGdCQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsV0FBVyxFQUFFLHVDQUF1QztZQUNwRCxTQUFTLEVBQUUsQ0FBQyxzQ0FBc0MsQ0FBQztTQUNwRCxDQUFDOztvQ0FBQTtJQStGRixtQ0FBQztBQUFELENBOUZBLEFBOEZDLElBQUE7QUE5Rlksb0NBQTRCLCtCQThGeEMsQ0FBQSIsImZpbGUiOiJjb21wb25lbnRzL3B1Ymxpc2gtY29udGVzdC9sb2dvLWFuZC1idXNpbmVzcy1jYXJkcy9sb2dvLWFuZC1idXNpbmVzcy1jYXJkL2xvZ28tYW5kLWJ1c2luZXNzLWNhcmQuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQ29udGVzdCB9IGZyb20gJy4uLy4uLy4uLy4uL21vZGVscy9jb250ZXN0JztcclxuaW1wb3J0IHsgQ29udGVzdHNTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vLi4vc2VydmljZXMvY29udGVzdHMuc2VydmljZSc7XHJcbmltcG9ydCB7IEVycm9yU2VydmljZSB9IGZyb20gJy4uLy4uLy4uLy4uL2Vycm9ycy9pbmRleCc7XHJcbmltcG9ydCB7IEZvcm1Hcm91cCwgRm9ybUNvbnRyb2wsIEZvcm1CdWlsZGVyLCBWYWxpZGF0b3JzIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5cclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIG1vZHVsZUlkOiBtb2R1bGUuaWQsXHJcbiAgdGVtcGxhdGVVcmw6ICdsb2dvLWFuZC1idXNpbmVzcy1jYXJkLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnbG9nby1hbmQtYnVzaW5lc3MtY2FyZC5jb21wb25lbnQuY3NzJ11cclxufSlcclxuZXhwb3J0IGNsYXNzIExvZ29BbmRCdXNpbmVzc0NhcmRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gIGNvbnRlc3Q6IENvbnRlc3QgPSBudWxsO1xyXG4gIGNvbnRlc3RzOiBhbnkgPSBbXTtcclxuICBwdWJsaWMgY29udGVzdEZvcm06IEZvcm1Hcm91cDtcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBjb250ZXN0c1NlcnZpY2U6IENvbnRlc3RzU2VydmljZSwgcHJpdmF0ZSBlcnJvclNlcnZpY2U6IEVycm9yU2VydmljZSwgcHJpdmF0ZSBmYjogRm9ybUJ1aWxkZXIsIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIpIHtcclxuICAgIFxyXG4gIH1cclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcblxyXG4gICAgdGhpcy5jb250ZXN0Rm9ybSA9IHRoaXMuZmIuZ3JvdXAoe1xyXG4gICAgICBjb250ZXN0TmFtZTogWycnLCBWYWxpZGF0b3JzLnJlcXVpcmVkXSxcclxuICAgICAgY29udGVzdENhdGVnb3J5OiBbJ0xvZ290aXBhcyBpciB2aXppdGluxJcga29ydGVsxJcnLCBWYWxpZGF0b3JzLnJlcXVpcmVkXSxcclxuICAgICAgY29udGVzdERlc2NyaXB0aW9uOiBbJycsIFZhbGlkYXRvcnMucmVxdWlyZWRdLFxyXG4gICAgICBjb250ZXN0QXdhcmQ6IFsnJywgVmFsaWRhdG9ycy5yZXF1aXJlZF1cclxuICAgIH0pO1xyXG5cclxuICAgIHRoaXMuY29udGVzdHNTZXJ2aWNlLmdldENvbnRlc3RzKClcclxuICAgIC5zdWJzY3JpYmUoY29udGVzdHMgPT4ge1xyXG4gICAgICB0aGlzLmNvbnRlc3RzID0gY29udGVzdHM7XHJcbiAgICAgIHRoaXMuY29udGVzdHNTZXJ2aWNlLmNvbnRlc3RzID0gY29udGVzdHM7XHJcbiAgICAgIGNvbnNvbGUubG9nKHRoaXMuY29udGVzdHMpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgdGhpcy5jb250ZXN0c1NlcnZpY2UuY29udGVzdEVkaXRlZFxyXG4gICAgICAuc3Vic2NyaWJlKGNvbnRlc3QgPT4ge1xyXG4gICAgICAgIHRoaXMuY29udGVzdCA9IGNvbnRlc3Q7XHJcbiAgICAgIH0pO1xyXG4gICB9XHJcblxyXG4gIGFkZENvbnRlc3QoZm9ybTogYW55KSB7XHJcbiAgICBpZiAodGhpcy5jb250ZXN0KSB7XHJcbiAgICAgIC8vRWRpdFxyXG4gICAgICBjb25zb2xlLmxvZyh0aGlzLmNvbnRlc3QpO1xyXG4gICAgICBcclxuICAgICAgdGhpcy5jb250ZXN0Lm5hbWUgPSBmb3JtLmNvbnRlc3ROYW1lLnZhbHVlO1xyXG4gICAgICB0aGlzLmNvbnRlc3QuY2F0ZWdvcnkgPSBmb3JtLmNvbnRlc3RDYXRlZ29yeS52YWx1ZTtcclxuICAgICAgdGhpcy5jb250ZXN0LmRlc2NyaXB0aW9uID0gZm9ybS5jb250ZXN0RGVzY3JpcHRpb24udmFsdWU7XHJcbiAgICAgIHRoaXMuY29udGVzdC5hd2FyZCA9IGZvcm0uY29udGVzdEF3YXJkLnZhbHVlO1xyXG4gICAgICB0aGlzLmNvbnRlc3RzU2VydmljZS51cGRhdGVDb250ZXN0KHRoaXMuY29udGVzdClcclxuICAgICAgICAuc3Vic2NyaWJlKGRhdGEgPT4ge1xyXG4gICAgICAgICAgY29uc29sZS5sb2coZGF0YSk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBlcnJvciA9PiB7XHJcbiAgICAgICAgICB0aGlzLmVycm9yU2VydmljZS5oYW5kbGVFcnJvcihlcnJvcik7XHJcbiAgICAgICAgfSlcclxuICAgICAgdGhpcy5jb250ZXN0ID0gbnVsbDtcclxuXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBjb25zb2xlLmxvZyhmb3JtKTtcclxuICAgICAgLy9jb25zdCBjb250ZXN0OiBhbnkgPSB7Y29udGVzdHM6IGlucHV0LCB0eXBlOiAnTG9nbycsIGRlc2lnbmVyOiAnSm9obiBMb2hrZSd9O1xyXG4gICAgICBjb25zdCBjb250ZXN0ID0gbmV3IENvbnRlc3QoZm9ybS5jb250ZXN0TmFtZS52YWx1ZSwgbnVsbCwgbnVsbCwgZm9ybS5jb250ZXN0Q2F0ZWdvcnkudmFsdWUsIGZvcm0uY29udGVzdERlc2NyaXB0aW9uLnZhbHVlLCBmb3JtLmNvbnRlc3RBd2FyZC52YWx1ZSwgJ2FjdGl2ZScsIDEwLCA1LCBEYXRlLm5vdygpLCBEYXRlLm5vdygpKTtcclxuICAgICAgY29uc29sZS5sb2coY29udGVzdCk7XHJcbiAgICAgIHRoaXMuY29udGVzdHNTZXJ2aWNlLmFkZENvbnRlc3QoY29udGVzdClcclxuICAgICAgICAuc3Vic2NyaWJlKGRhdGEgPT4ge1xyXG4gICAgICAgICAgY29uc29sZS5sb2coZGF0YSk7XHJcbiAgICAgICAgICB0aGlzLmNvbnRlc3RzU2VydmljZS5jb250ZXN0cy5wdXNoKGRhdGEpO1xyXG4gICAgICAgICAgZm9ybS5jb250ZXN0TmFtZS52YWx1ZSA9ICcnO1xyXG4gICAgICAgICAgZm9ybS5jb250ZXN0RGVzY3JpcHRpb24udmFsdWUgPSAnJztcclxuICAgICAgICAgIGZvcm0uY29udGVzdEF3YXJkLnZhbHVlID0gJyc7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBlcnJvciA9PiB7XHJcbiAgICAgICAgICB0aGlzLmVycm9yU2VydmljZS5oYW5kbGVFcnJvcihlcnJvcik7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBlZGl0Q29udGVzdChjb250ZXN0OiBhbnkpIHtcclxuICAgIHRoaXMuY29udGVzdHNTZXJ2aWNlLmVkaXRDb250ZXN0KGNvbnRlc3QpO1xyXG4gIH1cclxuXHJcbiAgZGVsZXRlQ29udGVzdChjb250ZXN0OiBhbnkpIHtcclxuICAgIHRoaXMuY29udGVzdHNTZXJ2aWNlLmRlbGV0ZUNvbnRlc3QoY29udGVzdClcclxuICAgICAgLnN1YnNjcmliZShkYXRhID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhkYXRhKTtcclxuICAgICAgfSxcclxuICAgICAgZXJyb3IgPT4ge1xyXG4gICAgICAgIHRoaXMuZXJyb3JTZXJ2aWNlLmhhbmRsZUVycm9yKGVycm9yKTtcclxuICAgICAgfSlcclxuICB9XHJcblxyXG4gIG9uQ2FuY2VsKCkge1xyXG4gICAgdGhpcy5jb250ZXN0ID0gbnVsbDtcclxuICB9XHJcblxyXG4gIGJlbG9uZ3NUb1VzZXIodXNlcklkOiBzdHJpbmcpIHtcclxuICAgIHJldHVybiBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndXNlcklkJykgPT0gdXNlcklkO1xyXG4gIH1cclxuXHJcbiAgZ29CYWNrKCkge1xyXG4gICAgdGhpcy5yb3V0ZXIubmF2aWdhdGVCeVVybCgnL3Bhc2tlbGJ0aS1rb25rdXJzYScpO1xyXG4gIH1cclxuXHJcbn0iXX0=
