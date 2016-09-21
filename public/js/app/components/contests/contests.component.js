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
var contest_1 = require('../../models/contest');
var contests_service_1 = require('../../services/contests.service');
var ContestsComponent = (function () {
    function ContestsComponent(contestsService) {
        this.contestsService = contestsService;
        this.contests = [];
    }
    ContestsComponent.prototype.ngOnInit = function () {
        this.contests = this.contestsService.getContests();
    };
    ContestsComponent.prototype.onSubmit = function (form) {
        console.log(form);
        //const contest: any = {contests: input, type: 'Logo', designer: 'John Lohke'};
        var contest = new contest_1.Contest(form.name.value, form.category.value, form.description.value, form.award.value, 'John Lohke');
        console.log(contest);
        this.contestsService.addContest(contest)
            .subscribe(function (data) {
            console.log(data);
        }, function (error) {
            console.error(error);
        });
    };
    ContestsComponent.prototype.editContest = function (contest) {
        this.contestsService.editContest(contest);
    };
    ContestsComponent.prototype.deleteContest = function (contest) {
        this.contestsService.deleteContest(contest);
    };
    ContestsComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'contests',
            templateUrl: 'contests.component.html',
            styleUrls: ['contests.component.css']
        }), 
        __metadata('design:paramtypes', [contests_service_1.ContestsService])
    ], ContestsComponent);
    return ContestsComponent;
}());
exports.ContestsComponent = ContestsComponent;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvY29udGVzdHMvY29udGVzdHMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBa0MsZUFBZSxDQUFDLENBQUE7QUFDbEQsd0JBQXdCLHNCQUFzQixDQUFDLENBQUE7QUFDL0MsaUNBQWdDLGlDQUFpQyxDQUFDLENBQUE7QUFRbEU7SUFFRSwyQkFBb0IsZUFBZ0M7UUFBaEMsb0JBQWUsR0FBZixlQUFlLENBQWlCO1FBRHBELGFBQVEsR0FBUSxFQUFFLENBQUM7SUFHbkIsQ0FBQztJQUVELG9DQUFRLEdBQVI7UUFDRSxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxlQUFlLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDcEQsQ0FBQztJQUVGLG9DQUFRLEdBQVIsVUFBUyxJQUFTO1FBQ2hCLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDbEIsK0VBQStFO1FBQy9FLElBQU0sT0FBTyxHQUFHLElBQUksaUJBQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssRUFBRSxZQUFZLENBQUMsQ0FBQztRQUMxSCxPQUFPLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ3JCLElBQUksQ0FBQyxlQUFlLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQzthQUNyQyxTQUFTLENBQUMsVUFBQSxJQUFJO1lBQ2IsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQTtRQUNuQixDQUFDLEVBQ0QsVUFBQSxLQUFLO1lBQ0gsT0FBTyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUN2QixDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFFRCx1Q0FBVyxHQUFYLFVBQVksT0FBWTtRQUN0QixJQUFJLENBQUMsZUFBZSxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUM1QyxDQUFDO0lBRUQseUNBQWEsR0FBYixVQUFjLE9BQVk7UUFDeEIsSUFBSSxDQUFDLGVBQWUsQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDOUMsQ0FBQztJQXBDSDtRQUFDLGdCQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsUUFBUSxFQUFFLFVBQVU7WUFDcEIsV0FBVyxFQUFFLHlCQUF5QjtZQUN0QyxTQUFTLEVBQUUsQ0FBQyx3QkFBd0IsQ0FBQztTQUN0QyxDQUFDOzt5QkFBQTtJQWlDRix3QkFBQztBQUFELENBaENBLEFBZ0NDLElBQUE7QUFoQ1kseUJBQWlCLG9CQWdDN0IsQ0FBQSIsImZpbGUiOiJjb21wb25lbnRzL2NvbnRlc3RzL2NvbnRlc3RzLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IENvbnRlc3QgfSBmcm9tICcuLi8uLi9tb2RlbHMvY29udGVzdCc7XHJcbmltcG9ydCB7IENvbnRlc3RzU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL2NvbnRlc3RzLnNlcnZpY2UnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcclxuICBzZWxlY3RvcjogJ2NvbnRlc3RzJyxcclxuICB0ZW1wbGF0ZVVybDogJ2NvbnRlc3RzLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnY29udGVzdHMuY29tcG9uZW50LmNzcyddXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBDb250ZXN0c0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgY29udGVzdHM6IGFueSA9IFtdO1xyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgY29udGVzdHNTZXJ2aWNlOiBDb250ZXN0c1NlcnZpY2UpIHtcclxuICAgIFxyXG4gIH1cclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgICB0aGlzLmNvbnRlc3RzID0gdGhpcy5jb250ZXN0c1NlcnZpY2UuZ2V0Q29udGVzdHMoKTtcclxuICAgfVxyXG5cclxuICBvblN1Ym1pdChmb3JtOiBhbnkpIHtcclxuICAgIGNvbnNvbGUubG9nKGZvcm0pO1xyXG4gICAgLy9jb25zdCBjb250ZXN0OiBhbnkgPSB7Y29udGVzdHM6IGlucHV0LCB0eXBlOiAnTG9nbycsIGRlc2lnbmVyOiAnSm9obiBMb2hrZSd9O1xyXG4gICAgY29uc3QgY29udGVzdCA9IG5ldyBDb250ZXN0KGZvcm0ubmFtZS52YWx1ZSwgZm9ybS5jYXRlZ29yeS52YWx1ZSwgZm9ybS5kZXNjcmlwdGlvbi52YWx1ZSwgZm9ybS5hd2FyZC52YWx1ZSwgJ0pvaG4gTG9oa2UnKTtcclxuICAgIGNvbnNvbGUubG9nKGNvbnRlc3QpO1xyXG4gICAgdGhpcy5jb250ZXN0c1NlcnZpY2UuYWRkQ29udGVzdChjb250ZXN0KVxyXG4gICAgICAuc3Vic2NyaWJlKGRhdGEgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGRhdGEpXHJcbiAgICAgIH0sXHJcbiAgICAgIGVycm9yID0+IHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcclxuICAgICAgfSk7XHJcbiAgfVxyXG5cclxuICBlZGl0Q29udGVzdChjb250ZXN0OiBhbnkpIHtcclxuICAgIHRoaXMuY29udGVzdHNTZXJ2aWNlLmVkaXRDb250ZXN0KGNvbnRlc3QpO1xyXG4gIH1cclxuXHJcbiAgZGVsZXRlQ29udGVzdChjb250ZXN0OiBhbnkpIHtcclxuICAgIHRoaXMuY29udGVzdHNTZXJ2aWNlLmRlbGV0ZUNvbnRlc3QoY29udGVzdCk7XHJcbiAgfVxyXG5cclxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
