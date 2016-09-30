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
var http_1 = require('@angular/http');
var Observable_1 = require('rxjs/Observable');
require('rxjs/Rx');
var ContestsService = (function () {
    function ContestsService(http) {
        this.http = http;
        this.contests = [];
        this.messageEdited = new core_1.EventEmitter();
    }
    ContestsService.prototype.getContests = function () {
        return this.http.get('http://localhost:3000/konkursai')
            .map(function (res) {
            var data = res.json().obj;
            var objs = [];
            for (var i = 0; i < data.length; i++) {
                var contest = new contest_1.Contest(data[i].name, data[i]._id, data[i].category, data[i].description, data[i].award, data[i].user);
                objs.push(contest);
            }
            ;
            return objs;
        })
            .catch(function (error) { return Observable_1.Observable.throw(error.json()); });
    };
    ContestsService.prototype.addContest = function (contest) {
        var body = JSON.stringify(contest);
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var token = localStorage.getItem('token') ? '?token=' + localStorage.getItem('token') : '';
        return this.http.post("http://localhost:3000/konkursai" + token, body, { headers: headers })
            .map(function (res) {
            var data = res.json().obj;
            var contest = new contest_1.Contest(data.name, data._id, data.category, data.description, data.award, data.user._id);
            return contest;
        })
            .catch(function (error) { return Observable_1.Observable.throw(error.json()); });
    };
    ContestsService.prototype.updateContest = function (contest) {
        var body = JSON.stringify(contest);
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        return this.http.patch("http://localhost:3000/konkursai/" + contest.id, body, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    ContestsService.prototype.editContest = function (contest) {
        this.messageEdited.emit(contest);
    };
    ContestsService.prototype.deleteContest = function (contest) {
        this.contests.splice(this.contests.indexOf(contest), 1);
        return this.http.delete("http://localhost:3000/konkursai/" + contest.id)
            .map(function (res) { return res.json(); });
    };
    ContestsService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], ContestsService);
    return ContestsService;
}());
exports.ContestsService = ContestsService;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlcnZpY2VzL2NvbnRlc3RzLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUF5QyxlQUFlLENBQUMsQ0FBQTtBQUN6RCx3QkFBd0IsbUJBQW1CLENBQUMsQ0FBQTtBQUM1QyxxQkFBOEIsZUFBZSxDQUFDLENBQUE7QUFDOUMsMkJBQTJCLGlCQUFpQixDQUFDLENBQUE7QUFDN0MsUUFBTyxTQUFTLENBQUMsQ0FBQTtBQUdqQjtJQUdFLHlCQUFvQixJQUFVO1FBQVYsU0FBSSxHQUFKLElBQUksQ0FBTTtRQUY5QixhQUFRLEdBQUcsRUFBRSxDQUFDO1FBQ2Qsa0JBQWEsR0FBRyxJQUFJLG1CQUFZLEVBQVcsQ0FBQztJQUNWLENBQUM7SUFFbkMscUNBQVcsR0FBWDtRQUNFLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxpQ0FBaUMsQ0FBQzthQUNwRCxHQUFHLENBQUMsVUFBQSxHQUFHO1lBQ04sSUFBTSxJQUFJLEdBQUcsR0FBRyxDQUFDLElBQUksRUFBRSxDQUFDLEdBQUcsQ0FBQztZQUM1QixJQUFJLElBQUksR0FBVSxFQUFFLENBQUM7WUFDckIsR0FBRyxDQUFBLENBQUMsSUFBSSxDQUFDLEdBQUMsQ0FBQyxFQUFFLENBQUMsR0FBRSxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUM7Z0JBQ2pDLElBQUksT0FBTyxHQUFHLElBQUksaUJBQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsV0FBVyxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDO2dCQUN6SCxJQUFJLENB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QWtEM0IsQ0FBQSIsImZpbGUiOiJzZXJ2aWNlcy9jb250ZXN0cy5zZXJ2aWNlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSwgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IENvbnRlc3QgfSBmcm9tICcuLi9tb2RlbHMvY29udGVzdCc7XHJcbmltcG9ydCB7IEh0dHAsIEhlYWRlcnMgfSBmcm9tICdAYW5ndWxhci9odHRwJztcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMvT2JzZXJ2YWJsZSc7XHJcbmltcG9ydCAncnhqcy9SeCc7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBDb250ZXN0c1NlcnZpY2Uge1xyXG4gIGNvbnRlc3RzID0gW107XHJcbiAgbWVzc2FnZUVkaXRlZCA9IG5ldyBFdmVudEVtaXR0ZXI8Q29udGVzdD4oKTtcclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGh0dHA6IEh0dHApIHsgfVxyXG5cclxuICBnZXRDb250ZXN0cygpIHtcclxuICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0KCdodHRwOi8vbG9jYWxob3N0OjMwMDAva29ua3Vyc2FpJylcclxuICAgICAgLm1hcChyZXMgPT4ge1xyXG4gICAgICAgIGNvbnN0IGRhdGEgPSByZXMuanNvbigpLm9iajtcclxuICAgICAgICBsZXQgb2JqczogYW55W10gPSBbXTtcclxuICAgICAgICBmb3IobGV0IGk9MDsgaTwgZGF0YS5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgbGV0IGNvbnRlc3QgPSBuZXcgQ29udGVzdChkYXRhW2ldLm5hbWUsIGRhdGFbaV0uX2lkLCBkYXRhW2ldLmNhdGVnb3J5LCBkYXRhW2ldLmRlc2NyaXB0aW9uLCBkYXRhW2ldLmF3YXJkLCBkYXRhW2ldLnVzZXIpO1xyXG4gICAgICAgICAgb2Jqcy5wdXNoKGNvbnRlc3QpO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgcmV0dXJuIG9ianM7XHJcbiAgICAgIH0pXHJcbiAgICAgIC5jYXRjaChlcnJvciA9PiBPYnNlcnZhYmxlLnRocm93KGVycm9yLmpzb24oKSkpO1xyXG4gIH1cclxuXHJcbiAgYWRkQ29udGVzdChjb250ZXN0OiBDb250ZXN0KSB7XHJcbiAgICBjb25zdCBib2R5ID0gSlNPTi5zdHJpbmdpZnkoY29udGVzdCk7XHJcbiAgICBjb25zdCBoZWFkZXJzID0gbmV3IEhlYWRlcnMoeydDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbid9KTtcclxuICAgIGNvbnN0IHRva2VuID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Rva2VuJykgPyAnP3Rva2VuPScgKyBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndG9rZW4nKSA6ICcnO1xyXG5cclxuICAgIHJldHVybiB0aGlzLmh0dHAucG9zdChcImh0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9rb25rdXJzYWlcIiArIHRva2VuLCBib2R5LCB7aGVhZGVyczogaGVhZGVyc30pXHJcbiAgICAubWFwKHJlcyA9PiB7XHJcbiAgICAgIGNvbnN0IGRhdGEgPSByZXMuanNvbigpLm9iajtcclxuICAgICAgbGV0IGNvbnRlc3QgPSBuZXcgQ29udGVzdChkYXRhLm5hbWUsIGRhdGEuX2lkLCBkYXRhLmNhdGVnb3J5LCBkYXRhLmRlc2NyaXB0aW9uLCBkYXRhLmF3YXJkLCBkYXRhLnVzZXIuX2lkKTtcclxuICAgICAgcmV0dXJuIGNvbnRlc3Q7XHJcbiAgICB9KVxyXG4gICAgLmNhdGNoKGVycm9yID0+IE9ic2VydmFibGUudGhyb3coZXJyb3IuanNvbigpKSk7XHJcbiAgfVxyXG5cclxuICB1cGRhdGVDb250ZXN0KGNvbnRlc3Q6IENvbnRlc3QpIHtcclxuICAgIGNvbnN0IGJvZHkgPSBKU09OLnN0cmluZ2lmeShjb250ZXN0KTtcclxuICAgIGNvbnN0IGhlYWRlcnMgPSBuZXcgSGVhZGVycyh7J0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ30pO1xyXG5cclxuICAgIHJldHVybiB0aGlzLmh0dHAucGF0Y2goXCJodHRwOi8vbG9jYWxob3N0OjMwMDAva29ua3Vyc2FpL1wiICsgY29udGVzdC5pZCwgYm9keSwge2hlYWRlcnM6IGhlYWRlcnN9KVxyXG4gICAgLm1hcChyZXMgPT4gcmVzLmpzb24oKSlcclxuICB9XHJcblxyXG4gIGVkaXRDb250ZXN0KGNvbnRlc3Q6IGFueSkge1xyXG4gICAgdGhpcy5tZXNzYWdlRWRpdGVkLmVtaXQoY29udGVzdCk7XHJcbiAgfVxyXG5cclxuICBkZWxldGVDb250ZXN0KGNvbnRlc3Q6IGFueSkge1xyXG4gICAgdGhpcy5jb250ZXN0cy5zcGxpY2UodGhpcy5jb250ZXN0cy5pbmRleE9mKGNvbnRlc3QpLCAxKTtcclxuICAgIHJldHVybiB0aGlzLmh0dHAuZGVsZXRlKFwiaHR0cDovL2xvY2FsaG9zdDozMDAwL2tvbmt1cnNhaS9cIiArIGNvbnRlc3QuaWQpXHJcbiAgICAgIC5tYXAocmVzID0+IHJlcy5qc29uKCkpXHJcbiAgfVxyXG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
