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
        this.contest = null;
        this.contests = [];
    }
    ContestsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.contestsService.getContests()
            .subscribe(function (contests) {
            _this.contests = contests;
            _this.contestsService.contests = contests;
        });
        this.contestsService.messageEdited
            .subscribe(function (contest) {
            _this.contest = contest;
        });
    };
    ContestsComponent.prototype.onSubmit = function (form) {
        var _this = this;
        if (this.contest) {
            //Edit
            console.log(this.contest);
            this.contest.name = form.name.value;
            this.contest.category = form.category.value;
            this.contest.description = form.description.value;
            this.contest.award = form.award.value;
            this.contestsService.updateContest(this.contest)
                .subscribe(function (data) {
                console.log(data);
            }, function (error) {
                console.log(error);
            });
            this.contest = null;
        }
        else {
            console.log(form);
            //const contest: any = {contests: input, type: 'Logo', designer: 'John Lohke'};
            var contest = new contest_1.Contest(form.name.value, null, form.category.value, form.description.value, form.award.value);
            console.log(contest);
            this.contestsService.addContest(contest)
                .subscribe(function (data) {
                console.log(data);
                _this.contestsService.contests.push(data);
            }, function (error) {
                console.error(error);
            });
        }
    };
    ContestsComponent.prototype.editContest = function (contest) {
        this.contestsService.editContest(contest);
    };
    ContestsComponent.prototype.deleteContest = function (contest) {
        this.contestsService.deleteContest(contest)
            .subscribe(function (data) {
            console.log(data);
        }, function (error) {
            console.error(error);
        });
    };
    ContestsComponent.prototype.onCancel = function () {
        this.contest = null;
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvY29udGVzdHMvY29udGVzdHMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBa0MsZUFBZSxDQUFDLENBQUE7QUFDbEQsd0JBQXdCLHNCQUFzQixDQUFDLENBQUE7QUFDL0MsaUNBQWdDLGlDQUFpQyxDQUFDLENBQUE7QUFRbEU7SUFHRSwyQkFBb0IsZUFBZ0M7UUFBaEMsb0JBQWUsR0FBZixlQUFlLENBQWlCO1FBRnBELFlBQU8sR0FBWSxJQUFJLENBQUM7UUFDeEIsYUFBUSxHQUFRLEVBQUUsQ0FBQztJQUduQixDQUFDO0lBRUQsb0NBQVEsR0FBUjtRQUFBLGlCQVdFO1FBVkEsSUFBSSxDQUFDLGVBQWUsQ0FBQyxXQUFXLEVBQUU7YUFDakMsU0FBUyxDQUFDLFVBQUEsUUFBUTtZQUNqQixLQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztZQUN6QixLQUFJLENBQUMsZUFBZSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7UUFDM0MsQ0FBQyxDQUFDLENBQUM7UUFFSCxJQUFJLENBQUMsZUFBZSxDQUFDLGFBQWE7YUFDL0IsU0FBUyxDQUFDLFVBQUEsT0FBTztZQUNoQixLQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztRQUN6QixDQUFDLENBQUMsQ0FBQztJQUNOLENBQUM7SUFFRixvQ0FBUSxHQUFSLFVBQVMsSUFBUztRQUFsQixpQkErQkM7UUE5QkMsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7WUFDakIsTUFBTTtZQUNOLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1lBQzFCLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDO1lBQ3BDLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDO1lBQzVDLElBQUksQ0FBQyxPQUFPLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDO1lBQ2xELElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDO1lBQ3RDLElBQUksQ0FBQyxlQUFlLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUM7aUJBQzdDLFNBQVMsQ0FBQyxVQUFBLElBQUk7Z0JBQ2IsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUNwQixDQUFDLEVBQ0QsVUFBQSxLQUFLO2dCQUNILE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDckIsQ0FBQyxDQUFDLENBQUE7WUFDSixJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQztRQUV0QixDQUFDO1FBQUMsSUFBSSxDQUFDLENBQUM7WUFDTixPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ2xCLCtFQUErRTtZQUMvRSxJQUFNLE9BQU8sR0FBRyxJQUFJLGlCQUFPLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDbEgsT0FBTyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQztZQUNyQixJQUFJLENBQUMsZUFBZSxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUM7aUJBQ3JDLFNBQVMsQ0FBQyxVQUFBLElBQUk7Z0JBQ2IsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztnQkFDbEIsS0FBSSxDQUFDLGVBQWUsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQzNDLENBQUMsRUFDRCxVQUFBLEtBQUs7Z0JBQ0gsT0FBTyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUN2QixDQUFDLENBQUMsQ0FBQztRQUNQLENBQUM7SUFDSCxDQUFDO0lBRUQsdUNBQVcsR0FBWCxVQUFZLE9BQVk7UUFDdEIsSUFBSSxDQUFDLGVBQWUsQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDNUMsQ0FBQztJQUVELHlDQUFhLEdBQWIsVUFBYyxPQUFZO1FBQ3hCLElBQUksQ0FBQyxlQUFlLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQzthQUN4QyxTQUFTLENBQUMsVUFBQSxJQUFJO1lBQ2IsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNwQixDQUFDLEVBQ0QsVUFBQSxLQUFLO1lBQ0gsT0FBTyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUN2QixDQUFDLENBQUMsQ0FBQTtJQUNOLENBQUM7SUFFRCxvQ0FBUSxHQUFSO1FBQ0UsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7SUFDdEIsQ0FBQztJQTNFSDtRQUFDLGdCQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsUUFBUSxFQUFFLFVBQVU7WUFDcEIsV0FBVyxFQUFFLHlCQUF5QjtZQUN0QyxTQUFTLEVBQUUsQ0FBQyx3QkFBd0IsQ0FBQztTQUN0QyxDQUFDOzt5QkFBQTtJQXdFRix3QkFBQztBQUFELENBdkVBLEFBdUVDLElBQUE7QUF2RVkseUJBQWlCLG9CQXVFN0IsQ0FBQSIsImZpbGUiOiJjb21wb25lbnRzL2NvbnRlc3RzL2NvbnRlc3RzLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IENvbnRlc3QgfSBmcm9tICcuLi8uLi9tb2RlbHMvY29udGVzdCc7XHJcbmltcG9ydCB7IENvbnRlc3RzU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL2NvbnRlc3RzLnNlcnZpY2UnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcclxuICBzZWxlY3RvcjogJ2NvbnRlc3RzJyxcclxuICB0ZW1wbGF0ZVVybDogJ2NvbnRlc3RzLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnY29udGVzdHMuY29tcG9uZW50LmNzcyddXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBDb250ZXN0c0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgY29udGVzdDogQ29udGVzdCA9IG51bGw7XHJcbiAgY29udGVzdHM6IGFueSA9IFtdO1xyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgY29udGVzdHNTZXJ2aWNlOiBDb250ZXN0c1NlcnZpY2UpIHtcclxuICAgIFxyXG4gIH1cclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgICB0aGlzLmNvbnRlc3RzU2VydmljZS5nZXRDb250ZXN0cygpXHJcbiAgICAuc3Vic2NyaWJlKGNvbnRlc3RzID0+IHtcclxuICAgICAgdGhpcy5jb250ZXN0cyA9IGNvbnRlc3RzO1xyXG4gICAgICB0aGlzLmNvbnRlc3RzU2VydmljZS5jb250ZXN0cyA9IGNvbnRlc3RzO1xyXG4gICAgfSk7XHJcblxyXG4gICAgdGhpcy5jb250ZXN0c1NlcnZpY2UubWVzc2FnZUVkaXRlZFxyXG4gICAgICAuc3Vic2NyaWJlKGNvbnRlc3QgPT4ge1xyXG4gICAgICAgIHRoaXMuY29udGVzdCA9IGNvbnRlc3Q7XHJcbiAgICAgIH0pO1xyXG4gICB9XHJcblxyXG4gIG9uU3VibWl0KGZvcm06IGFueSkge1xyXG4gICAgaWYgKHRoaXMuY29udGVzdCkge1xyXG4gICAgICAvL0VkaXRcclxuICAgICAgY29uc29sZS5sb2codGhpcy5jb250ZXN0KTtcclxuICAgICAgdGhpcy5jb250ZXN0Lm5hbWUgPSBmb3JtLm5hbWUudmFsdWU7XHJcbiAgICAgIHRoaXMuY29udGVzdC5jYXRlZ29yeSA9IGZvcm0uY2F0ZWdvcnkudmFsdWU7XHJcbiAgICAgIHRoaXMuY29udGVzdC5kZXNjcmlwdGlvbiA9IGZvcm0uZGVzY3JpcHRpb24udmFsdWU7XHJcbiAgICAgIHRoaXMuY29udGVzdC5hd2FyZCA9IGZvcm0uYXdhcmQudmFsdWU7XHJcbiAgICAgIHRoaXMuY29udGVzdHNTZXJ2aWNlLnVwZGF0ZUNvbnRlc3QodGhpcy5jb250ZXN0KVxyXG4gICAgICAgIC5zdWJzY3JpYmUoZGF0YSA9PiB7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhkYXRhKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGVycm9yID0+IHtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICAgICAgICB9KVxyXG4gICAgICB0aGlzLmNvbnRlc3QgPSBudWxsO1xyXG5cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGZvcm0pO1xyXG4gICAgICAvL2NvbnN0IGNvbnRlc3Q6IGFueSA9IHtjb250ZXN0czogaW5wdXQsIHR5cGU6ICdMb2dvJywgZGVzaWduZXI6ICdKb2huIExvaGtlJ307XHJcbiAgICAgIGNvbnN0IGNvbnRlc3QgPSBuZXcgQ29udGVzdChmb3JtLm5hbWUudmFsdWUsIG51bGwsIGZvcm0uY2F0ZWdvcnkudmFsdWUsIGZvcm0uZGVzY3JpcHRpb24udmFsdWUsIGZvcm0uYXdhcmQudmFsdWUpO1xyXG4gICAgICBjb25zb2xlLmxvZyhjb250ZXN0KTtcclxuICAgICAgdGhpcy5jb250ZXN0c1NlcnZpY2UuYWRkQ29udGVzdChjb250ZXN0KVxyXG4gICAgICAgIC5zdWJzY3JpYmUoZGF0YSA9PiB7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhkYXRhKTtcclxuICAgICAgICAgIHRoaXMuY29udGVzdHNTZXJ2aWNlLmNvbnRlc3RzLnB1c2goZGF0YSk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBlcnJvciA9PiB7XHJcbiAgICAgICAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGVkaXRDb250ZXN0KGNvbnRlc3Q6IGFueSkge1xyXG4gICAgdGhpcy5jb250ZXN0c1NlcnZpY2UuZWRpdENvbnRlc3QoY29udGVzdCk7XHJcbiAgfVxyXG5cclxuICBkZWxldGVDb250ZXN0KGNvbnRlc3Q6IGFueSkge1xyXG4gICAgdGhpcy5jb250ZXN0c1NlcnZpY2UuZGVsZXRlQ29udGVzdChjb250ZXN0KVxyXG4gICAgICAuc3Vic2NyaWJlKGRhdGEgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xyXG4gICAgICB9LFxyXG4gICAgICBlcnJvciA9PiB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcihlcnJvcik7XHJcbiAgICAgIH0pXHJcbiAgfVxyXG5cclxuICBvbkNhbmNlbCgpIHtcclxuICAgIHRoaXMuY29udGVzdCA9IG51bGw7XHJcbiAgfVxyXG5cclxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
