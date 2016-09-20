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
var contest_1 = require('../models/contest');
var ContestsService = (function () {
    function ContestsService() {
        this.contests = [];
    }
    ContestsService.prototype.getContests = function () {
        return this.contests;
    };
    ContestsService.prototype.addContest = function (contest) {
        this.contests.push(contest);
    };
    ContestsService.prototype.editContest = function (contest) {
        this.contests[this.contests.indexOf(contest)] = new contest_1.Contest('Edited', 'edit', 'edit');
    };
    ContestsService.prototype.deleteContest = function (contest) {
        this.contests.splice(this.contests.indexOf(contest), 1);
    };
    ContestsService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], ContestsService);
    return ContestsService;
}());
exports.ContestsService = ContestsService;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlcnZpY2VzL2NvbnRlc3RzLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUEyQixlQUFlLENBQUMsQ0FBQTtBQUMzQyx3QkFBd0IsbUJBQW1CLENBQUMsQ0FBQTtBQUc1QztJQUVFO1FBREEsYUFBUSxHQUFHLEVBQUUsQ0FBQztJQUNFLENBQUM7SUFFakIscUNBQVcsR0FBWDtRQUNFLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDO0lBQ3ZCLENBQUM7SUFFRCxvQ0FBVSxHQUFWLFVBQVcsT0FBWTtRQUNyQixJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUM5QixDQUFDO0lBRUQscUNBQVcsR0FBWCxVQUFZLE9BQVk7UUFDdEIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQyxHQUFHLElBQUksaUJBQU8sQ0FBQyxRQUFRLEVBQUUsTUFBTSxFQUFFLE1BQU0sQ0FBQyxDQUFDO0lBQ3hGLENBQUM7SUFFRCx1Q0FBYSxHQUFiLFVBQWMsT0FBWTtRQUN4QixJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztJQUMxRCxDQUFDO0lBbkJIO1FBQUMsaUJBQVUsRUFBRTs7dUJBQUE7SUFvQmIsc0JBQUM7QUFBRCxDQW5CQSxBQW1CQyxJQUFBO0FBbkJZLHVCQUFlLGtCQW1CM0IsQ0FBQSIsImZpbGUiOiJzZXJ2aWNlcy9jb250ZXN0cy5zZXJ2aWNlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDb250ZXN0IH0gZnJvbSAnLi4vbW9kZWxzL2NvbnRlc3QnO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgQ29udGVzdHNTZXJ2aWNlIHtcclxuICBjb250ZXN0cyA9IFtdO1xyXG4gIGNvbnN0cnVjdG9yKCkgeyB9XHJcblxyXG4gIGdldENvbnRlc3RzKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuY29udGVzdHM7XHJcbiAgfVxyXG5cclxuICBhZGRDb250ZXN0KGNvbnRlc3Q6IGFueSkge1xyXG4gICAgdGhpcy5jb250ZXN0cy5wdXNoKGNvbnRlc3QpO1xyXG4gIH1cclxuXHJcbiAgZWRpdENvbnRlc3QoY29udGVzdDogYW55KSB7XHJcbiAgICB0aGlzLmNvbnRlc3RzW3RoaXMuY29udGVzdHMuaW5kZXhPZihjb250ZXN0KV0gPSBuZXcgQ29udGVzdCgnRWRpdGVkJywgJ2VkaXQnLCAnZWRpdCcpO1xyXG4gIH1cclxuXHJcbiAgZGVsZXRlQ29udGVzdChjb250ZXN0OiBhbnkpIHtcclxuICAgIHRoaXMuY29udGVzdHMuc3BsaWNlKHRoaXMuY29udGVzdHMuaW5kZXhPZihjb250ZXN0KSwgMSk7XHJcbiAgfVxyXG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
