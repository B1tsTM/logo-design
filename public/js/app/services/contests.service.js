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
        this.designers = [];
        this.contestEdited = new core_1.EventEmitter();
    }
    ContestsService.prototype.getAllContests = function () {
        return this.http.get('http://localhost:3000/api/v1/konkursai')
            .map(function (res) {
            console.log(res.json());
            //        const data = res.json().obj;
            var data = res.json().obj;
            var objs = [];
            for (var i = 0; i < data.length; i++) {
                var contest = new contest_1.Contest(data[i].name, data[i].uniqueId, data[i].idName, data[i]._id, data[i].category, data[i].description, data[i].award, data[i].status, data[i].submitionCount, data[i].daysRemaining, data[i].startDate, data[i].endDate, data[i].submitions, data[i].publisher);
                objs.push(contest);
            }
            ;
            return objs;
        })
            .catch(function (error) { return Observable_1.Observable.throw(error.json()); });
    };
    ContestsService.prototype.getIndividualContests = function (id) {
        return this.http.get('http://localhost:3000/api/v1/konkursai')
            .map(function (res) {
            console.log(res.json());
            //        const data = res.json().obj;
            var data = res.json().obj;
            var objs = [];
            for (var i = 0; i < data.length; i++) {
                if (data[i].publisher._id == id) {
                    var contest = new contest_1.Contest(data[i].name, data[i].uniqueId, data[i].idName, data[i]._id, data[i].category, data[i].description, data[i].award, data[i].status, data[i].submitionCount, data[i].daysRemaining, data[i].startDate, data[i].endDate, data[i].submitions, data[i].publisher);
                    objs.push(contest);
                }
            }
            ;
            console.log('getIndividualContests objs after loop');
            console.log(objs);
            return objs;
        })
            .catch(function (error) { return Observable_1.Observable.throw(error.json()); });
    };
    ContestsService.prototype.getIndividualContest = function (id) {
        return this.http.get('http://localhost:3000/api/v1/konkursai/' + id)
            .map(function (res) {
            console.log(res.json());
            var data = res.json().obj;
            var contest = new contest_1.Contest(data.name, data.uniqueId, data.idName, data._id, data.category, data.description, data.award, data.status, data.submitionCount, data.daysRemaining, data.startDate, data.endDate, data.submitions, data.publisher);
            return contest;
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
            var contest = new contest_1.Contest(data.name, data.uniqueId, data.idName, data._id, data.category, data.description, data.award, data.status, data.submitionCount, data.daysRemaining, data.startDate, data.endDate, data.submitions, data.publisher);
            return contest;
        })
            .catch(function (error) { return Observable_1.Observable.throw(error.json()); });
    };
    ContestsService.prototype.updateContest = function (contest) {
        var body = JSON.stringify(contest);
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var token = localStorage.getItem('token') ? '?token=' + localStorage.getItem('token') : '';
        return this.http.patch("http://localhost:3000/konkursai/" + contest.id + token, body, { headers: headers })
            .map(function (res) { return res.json(); })
            .catch(function (error) { return Observable_1.Observable.throw(error.json()); });
    };
    ContestsService.prototype.editContest = function (contest) {
        this.contestEdited.emit(contest);
    };
    ContestsService.prototype.deleteContest = function (contest) {
        var token = localStorage.getItem('token') ? '?token=' + localStorage.getItem('token') : '';
        this.contests.splice(this.contests.indexOf(contest), 1);
        return this.http.delete("http://localhost:3000/konkursai/" + contest.id + token)
            .map(function (res) { return res.json(); })
            .catch(function (error) { return Observable_1.Observable.throw(error.json()); });
    };
    ContestsService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], ContestsService);
    return ContestsService;
}());
exports.ContestsService = ContestsService;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlcnZpY2VzL2NvbnRlc3RzLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUF5QyxlQUFlLENBQUMsQ0FBQTtBQUN6RCx3QkFBd0IsbUJBQW1CLENBQUMsQ0FBQTtBQUU1QyxxQkFBOEIsZUFBZSxDQUFDLENBQUE7QUFDOUMsMkJBQTJCLGlCQUFpQixDQUFDLENBQUE7QUFDN0MsUUFBTyxTQUFTLENBQUMsQ0FBQTtBQUdqQjtJQUlFLHlCQUFvQixJQUFVO1FBQVYsU0FBSSxHQUFKLElBQUksQ0FBTTtRQUg5QixhQUFRLEdBQUcsRUFBRSxDQUFDO1FBQ2QsY0FBUyxHQUFHLEVBQUUsQ0FBQztRQUNmLGtCQUFhLEdBQUcsSUFBSSxtQkFBWSxFQUFXLENBQUM7SUFDVixDQUFDO0lBRW5DLHdDQUFjLEdBQWQ7UUFDRSxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsd0NBQXdDLENBQUM7YUFDM0QsR0FBRyxDQUFDLFVBQUEsR0FBRztZQUNOLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLElBQUksRUFBRSxDQUFDLENBQUM7WUFDaEMsc0NBQXNDO1lBQzlCLElBQU0sSUFBSSxHQUFHLEdBQUcsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxHQUFHLENBQUM7WUFDNUIsSUFBSSxJQUFJLEdBQVUsRUFBRSxDQUFDO1lBQ3JCLEdBQUcsQ0FBQSxDQUFDLElBQUksQ0FBQyxHQUFDLENBQUMsRUFBRSxDQUFDLEdBQUUsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDO2dCQUNqQyxJQUFJLE9BQU8sR0FBRyxJQUFJLGlCQUFPLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcs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QUFLLENBQUM7YUFDN0UsR0FBRyxDQUFDLFVBQUEsR0FBRyxJQUFJLE9BQUEsR0FBRyxDQUFDLElBQUksRUFBRSxFQUFWLENBQVUsQ0FBQzthQUN0QixLQUFLLENBQUMsVUFBQSxLQUFLLElBQUksT0FBQSx1QkFBVSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLENBQUMsRUFBOUIsQ0FBOEIsQ0FBQyxDQUFDO0lBQ3BELENBQUM7SUF6Rkg7UUFBQyxpQkFBVSxFQUFFOzt1QkFBQTtJQTRGYixzQkFBQztBQUFELENBM0ZBLEFBMkZDLElBQUE7QUEzRlksdUJBQWUsa0JBMkYzQixDQUFBIiwiZmlsZSI6InNlcnZpY2VzL2NvbnRlc3RzLnNlcnZpY2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlLCBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQ29udGVzdCB9IGZyb20gJy4uL21vZGVscy9jb250ZXN0JztcclxuaW1wb3J0IHsgVXNlciB9IGZyb20gJy4uL21vZGVscy91c2VyJztcclxuaW1wb3J0IHsgSHR0cCwgSGVhZGVycyB9IGZyb20gJ0Bhbmd1bGFyL2h0dHAnO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcy9PYnNlcnZhYmxlJztcclxuaW1wb3J0ICdyeGpzL1J4JztcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIENvbnRlc3RzU2VydmljZSB7XHJcbiAgY29udGVzdHMgPSBbXTtcclxuICBkZXNpZ25lcnMgPSBbXTtcclxuICBjb250ZXN0RWRpdGVkID0gbmV3IEV2ZW50RW1pdHRlcjxDb250ZXN0PigpO1xyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgaHR0cDogSHR0cCkgeyB9XHJcblxyXG4gIGdldEFsbENvbnRlc3RzKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQoJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9hcGkvdjEva29ua3Vyc2FpJylcclxuICAgICAgLm1hcChyZXMgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHJlcy5qc29uKCkpO1xyXG4vLyAgICAgICAgY29uc3QgZGF0YSA9IHJlcy5qc29uKCkub2JqO1xyXG4gICAgICAgIGNvbnN0IGRhdGEgPSByZXMuanNvbigpLm9iajtcclxuICAgICAgICBsZXQgb2JqczogYW55W10gPSBbXTtcclxuICAgICAgICBmb3IobGV0IGk9MDsgaTwgZGF0YS5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgbGV0IGNvbnRlc3QgPSBuZXcgQ29udGVzdChkYXRhW2ldLm5hbWUsIGRhdGFbaV0udW5pcXVlSWQsIGRhdGFbaV0uaWROYW1lLCBkYXRhW2ldLl9pZCwgZGF0YVtpXS5jYXRlZ29yeSwgZGF0YVtpXS5kZXNjcmlwdGlvbiwgZGF0YVtpXS5hd2FyZCwgZGF0YVtpXS5zdGF0dXMsIGRhdGFbaV0uc3VibWl0aW9uQ291bnQsIGRhdGFbaV0uZGF5c1JlbWFpbmluZywgZGF0YVtpXS5zdGFydERhdGUsIGRhdGFbaV0uZW5kRGF0ZSwgZGF0YVtpXS5zdWJtaXRpb25zLCBkYXRhW2ldLnB1Ymxpc2hlcik7XHJcbiAgICAgICAgICBvYmpzLnB1c2goY29udGVzdCk7XHJcbiAgICAgICAgfTtcclxuICAgICAgICByZXR1cm4gb2JqcztcclxuICAgICAgfSlcclxuICAgICAgLmNhdGNoKGVycm9yID0+IE9ic2VydmFibGUudGhyb3coZXJyb3IuanNvbigpKSk7XHJcbiAgfVxyXG5cclxuICBnZXRJbmRpdmlkdWFsQ29udGVzdHMoaWQ6IGFueSkge1xyXG4gICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQoJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9hcGkvdjEva29ua3Vyc2FpJylcclxuICAgICAgLm1hcChyZXMgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHJlcy5qc29uKCkpO1xyXG4vLyAgICAgICAgY29uc3QgZGF0YSA9IHJlcy5qc29uKCkub2JqO1xyXG4gICAgICAgIGNvbnN0IGRhdGEgPSByZXMuanNvbigpLm9iajtcclxuICAgICAgICBsZXQgb2JqczogYW55W10gPSBbXTtcclxuICAgICAgICBmb3IobGV0IGk9MDsgaTwgZGF0YS5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgaWYgKGRhdGFbaV0ucHVibGlzaGVyLl9pZCA9PSBpZCkge1xyXG4gICAgICAgICAgbGV0IGNvbnRlc3QgPSBuZXcgQ29udGVzdChkYXRhW2ldLm5hbWUsIGRhdGFbaV0udW5pcXVlSWQsIGRhdGFbaV0uaWROYW1lLCBkYXRhW2ldLl9pZCwgZGF0YVtpXS5jYXRlZ29yeSwgZGF0YVtpXS5kZXNjcmlwdGlvbiwgZGF0YVtpXS5hd2FyZCwgZGF0YVtpXS5zdGF0dXMsIGRhdGFbaV0uc3VibWl0aW9uQ291bnQsIGRhdGFbaV0uZGF5c1JlbWFpbmluZywgZGF0YVtpXS5zdGFydERhdGUsIGRhdGFbaV0uZW5kRGF0ZSwgZGF0YVtpXS5zdWJtaXRpb25zLCBkYXRhW2ldLnB1Ymxpc2hlcik7XHJcbiAgICAgICAgICBvYmpzLnB1c2goY29udGVzdCk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuICAgICAgICBjb25zb2xlLmxvZygnZ2V0SW5kaXZpZHVhbENvbnRlc3RzIG9ianMgYWZ0ZXIgbG9vcCcpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKG9ianMpO1xyXG4gICAgICAgIHJldHVybiBvYmpzO1xyXG4gICAgICB9KVxyXG4gICAgICAuY2F0Y2goZXJyb3IgPT4gT2JzZXJ2YWJsZS50aHJvdyhlcnJvci5qc29uKCkpKTtcclxuICB9XHJcblxyXG4gIGdldEluZGl2aWR1YWxDb250ZXN0KGlkOiBhbnkpIHtcclxuICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0KCdodHRwOi8vbG9jYWxob3N0OjMwMDAvYXBpL3YxL2tvbmt1cnNhaS8nICsgaWQpXHJcbiAgICAgIC5tYXAocmVzID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhyZXMuanNvbigpKTtcclxuICAgICAgICBjb25zdCBkYXRhID0gcmVzLmpzb24oKS5vYmo7XHJcbiAgICAgICAgbGV0IGNvbnRlc3QgPSBuZXcgQ29udGVzdChkYXRhLm5hbWUsIGRhdGEudW5pcXVlSWQsIGRhdGEuaWROYW1lLCBkYXRhLl9pZCwgZGF0YS5jYXRlZ29yeSwgZGF0YS5kZXNjcmlwdGlvbiwgZGF0YS5hd2FyZCwgZGF0YS5zdGF0dXMsIGRhdGEuc3VibWl0aW9uQ291bnQsIGRhdGEuZGF5c1JlbWFpbmluZywgZGF0YS5zdGFydERhdGUsIGRhdGEuZW5kRGF0ZSwgZGF0YS5zdWJtaXRpb25zLCBkYXRhLnB1Ymxpc2hlcik7XHJcbiAgICAgICAgcmV0dXJuIGNvbnRlc3Q7XHJcbiAgICAgIH0pXHJcbiAgICAgIC5jYXRjaChlcnJvciA9PiBPYnNlcnZhYmxlLnRocm93KGVycm9yLmpzb24oKSkpO1xyXG4gIH1cclxuXHJcbiAgYWRkQ29udGVzdChjb250ZXN0OiBDb250ZXN0KSB7XHJcbiAgICBjb25zdCBib2R5ID0gSlNPTi5zdHJpbmdpZnkoY29udGVzdCk7XHJcbiAgICBjb25zdCBoZWFkZXJzID0gbmV3IEhlYWRlcnMoeydDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbid9KTtcclxuICAgIGNvbnN0IHRva2VuID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Rva2VuJykgPyAnP3Rva2VuPScgKyBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndG9rZW4nKSA6ICcnO1xyXG5cclxuICAgIHJldHVybiB0aGlzLmh0dHAucG9zdChcImh0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9rb25rdXJzYWlcIiArIHRva2VuLCBib2R5LCB7aGVhZGVyczogaGVhZGVyc30pXHJcbiAgICAubWFwKHJlcyA9PiB7XHJcbiAgICAgIGNvbnN0IGRhdGEgPSByZXMuanNvbigpLm9iajtcclxuICAgICAgbGV0IGNvbnRlc3QgPSBuZXcgQ29udGVzdChkYXRhLm5hbWUsIGRhdGEudW5pcXVlSWQsIGRhdGEuaWROYW1lLCBkYXRhLl9pZCwgZGF0YS5jYXRlZ29yeSwgZGF0YS5kZXNjcmlwdGlvbiwgZGF0YS5hd2FyZCwgZGF0YS5zdGF0dXMsIGRhdGEuc3VibWl0aW9uQ291bnQsIGRhdGEuZGF5c1JlbWFpbmluZywgZGF0YS5zdGFydERhdGUsIGRhdGEuZW5kRGF0ZSwgZGF0YS5zdWJtaXRpb25zLCBkYXRhLnB1Ymxpc2hlcik7XHJcbiAgICAgIHJldHVybiBjb250ZXN0O1xyXG4gICAgfSlcclxuICAgIC5jYXRjaChlcnJvciA9PiBPYnNlcnZhYmxlLnRocm93KGVycm9yLmpzb24oKSkpO1xyXG4gIH1cclxuXHJcbiAgdXBkYXRlQ29udGVzdChjb250ZXN0OiBDb250ZXN0KSB7XHJcbiAgICBjb25zdCBib2R5ID0gSlNPTi5zdHJpbmdpZnkoY29udGVzdCk7XHJcbiAgICBjb25zdCBoZWFkZXJzID0gbmV3IEhlYWRlcnMoeydDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbid9KTtcclxuICAgIGNvbnN0IHRva2VuID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Rva2VuJykgPyAnP3Rva2VuPScgKyBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndG9rZW4nKSA6ICcnO1xyXG5cclxuICAgIHJldHVybiB0aGlzLmh0dHAucGF0Y2goXCJodHRwOi8vbG9jYWxob3N0OjMwMDAva29ua3Vyc2FpL1wiICsgY29udGVzdC5pZCArIHRva2VuLCBib2R5LCB7aGVhZGVyczogaGVhZGVyc30pXHJcbiAgICAubWFwKHJlcyA9PiByZXMuanNvbigpKVxyXG4gICAgLmNhdGNoKGVycm9yID0+IE9ic2VydmFibGUudGhyb3coZXJyb3IuanNvbigpKSk7XHJcbiAgfVxyXG4gIFxyXG5cclxuICBlZGl0Q29udGVzdChjb250ZXN0OiBhbnkpIHtcclxuICAgIHRoaXMuY29udGVzdEVkaXRlZC5lbWl0KGNvbnRlc3QpO1xyXG4gIH1cclxuXHJcbiAgZGVsZXRlQ29udGVzdChjb250ZXN0OiBhbnkpIHtcclxuICAgIGNvbnN0IHRva2VuID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Rva2VuJykgPyAnP3Rva2VuPScgKyBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndG9rZW4nKSA6ICcnO1xyXG4gICAgdGhpcy5jb250ZXN0cy5zcGxpY2UodGhpcy5jb250ZXN0cy5pbmRleE9mKGNvbnRlc3QpLCAxKTtcclxuICAgIHJldHVybiB0aGlzLmh0dHAuZGVsZXRlKFwiaHR0cDovL2xvY2FsaG9zdDozMDAwL2tvbmt1cnNhaS9cIiArIGNvbnRlc3QuaWQgKyB0b2tlbilcclxuICAgICAgLm1hcChyZXMgPT4gcmVzLmpzb24oKSlcclxuICAgICAgLmNhdGNoKGVycm9yID0+IE9ic2VydmFibGUudGhyb3coZXJyb3IuanNvbigpKSk7XHJcbiAgfVxyXG5cclxuICBcclxufSJdfQ==
