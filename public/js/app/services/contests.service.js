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
                var contest = new contest_1.Contest(data[i].name, data[i].idName, data[i]._id, data[i].category, data[i].description, data[i].award, data[i].status, data[i].submitionCount, data[i].daysRemaining, data[i].startDate, data[i].endDate, data[i].submitions, data[i].publisher);
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
                    var contest = new contest_1.Contest(data[i].name, data[i].idName, data[i]._id, data[i].category, data[i].description, data[i].award, data[i].status, data[i].submitionCount, data[i].daysRemaining, data[i].startDate, data[i].endDate, data[i].submitions, data[i].publisher);
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
            var contest = new contest_1.Contest(data.name, data.idName, data._id, data.category, data.description, data.award, data.status, data.submitionCount, data.daysRemaining, data.startDate, data.endDate, data.submitions, data.publisher);
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
            var contest = new contest_1.Contest(data.name, data.idName, data._id, data.category, data.description, data.award, data.status, data.submitionCount, data.daysRemaining, data.startDate, data.endDate, data.submitions, data.publisher);
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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlcnZpY2VzL2NvbnRlc3RzLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUF5QyxlQUFlLENBQUMsQ0FBQTtBQUN6RCx3QkFBd0IsbUJBQW1CLENBQUMsQ0FBQTtBQUU1QyxxQkFBOEIsZUFBZSxDQUFDLENBQUE7QUFDOUMsMkJBQTJCLGlCQUFpQixDQUFDLENBQUE7QUFDN0MsUUFBTyxTQUFTLENBQUMsQ0FBQTtBQUdqQjtJQUlFLHlCQUFvQixJQUFVO1FBQVYsU0FBSSxHQUFKLElBQUksQ0FBTTtRQUg5QixhQUFRLEdBQUcsRUFBRSxDQUFDO1FBQ2QsY0FBUyxHQUFHLEVBQUUsQ0FBQztRQUNmLGtCQUFhLEdBQUcsSUFBSSxtQkFBWSxFQUFXLENBQUM7SUFDVixDQUFDO0lBRW5DLHdDQUFjLEdBQWQ7UUFDRSxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsd0NBQXdDLENBQUM7YUFDM0QsR0FBRyxDQUFDLFVBQUEsR0FBRztZQUNOLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLElBQUksRUFBRSxDQUFDLENBQUM7WUFDaEMsc0NBQXNDO1lBQzlCLElBQU0sSUFBSSxHQUFHLEdBQUcsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxHQUFHLENBQUM7WUFDNUIsSUFBSSxJQUFJLEdBQVUsRUFBRSxDQUFDO1lBQ3JCLEdBQUcsQ0FBQSxDQUFDLElBQUksQ0FBQyxHQUFDLENBQUMsRUFBRSxDQUFDLEdBQUUsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDO2dCQUNqQyxJQUFJLE9BQU8sR0FBRyxJQUFJLGlCQUFPLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEs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LE9BQUEsdUJBQVUsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxDQUFDLEVBQTlCLENBQThCLENBQUMsQ0FBQztJQUNwRCxDQUFDO0lBekZIO1FBQUMsaUJBQVUsRUFBRTs7dUJBQUE7SUE0RmIsc0JBQUM7QUFBRCxDQTNGQSxBQTJGQyxJQUFBO0FBM0ZZLHVCQUFlLGtCQTJGM0IsQ0FBQSIsImZpbGUiOiJzZXJ2aWNlcy9jb250ZXN0cy5zZXJ2aWNlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSwgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IENvbnRlc3QgfSBmcm9tICcuLi9tb2RlbHMvY29udGVzdCc7XHJcbmltcG9ydCB7IFVzZXIgfSBmcm9tICcuLi9tb2RlbHMvdXNlcic7XHJcbmltcG9ydCB7IEh0dHAsIEhlYWRlcnMgfSBmcm9tICdAYW5ndWxhci9odHRwJztcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMvT2JzZXJ2YWJsZSc7XHJcbmltcG9ydCAncnhqcy9SeCc7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBDb250ZXN0c1NlcnZpY2Uge1xyXG4gIGNvbnRlc3RzID0gW107XHJcbiAgZGVzaWduZXJzID0gW107XHJcbiAgY29udGVzdEVkaXRlZCA9IG5ldyBFdmVudEVtaXR0ZXI8Q29udGVzdD4oKTtcclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGh0dHA6IEh0dHApIHsgfVxyXG5cclxuICBnZXRBbGxDb250ZXN0cygpIHtcclxuICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0KCdodHRwOi8vbG9jYWxob3N0OjMwMDAvYXBpL3YxL2tvbmt1cnNhaScpXHJcbiAgICAgIC5tYXAocmVzID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhyZXMuanNvbigpKTtcclxuLy8gICAgICAgIGNvbnN0IGRhdGEgPSByZXMuanNvbigpLm9iajtcclxuICAgICAgICBjb25zdCBkYXRhID0gcmVzLmpzb24oKS5vYmo7XHJcbiAgICAgICAgbGV0IG9ianM6IGFueVtdID0gW107XHJcbiAgICAgICAgZm9yKGxldCBpPTA7IGk8IGRhdGEubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgIGxldCBjb250ZXN0ID0gbmV3IENvbnRlc3QoZGF0YVtpXS5uYW1lLCBkYXRhW2ldLmlkTmFtZSwgZGF0YVtpXS5faWQsIGRhdGFbaV0uY2F0ZWdvcnksIGRhdGFbaV0uZGVzY3JpcHRpb24sIGRhdGFbaV0uYXdhcmQsIGRhdGFbaV0uc3RhdHVzLCBkYXRhW2ldLnN1Ym1pdGlvbkNvdW50LCBkYXRhW2ldLmRheXNSZW1haW5pbmcsIGRhdGFbaV0uc3RhcnREYXRlLCBkYXRhW2ldLmVuZERhdGUsIGRhdGFbaV0uc3VibWl0aW9ucywgZGF0YVtpXS5wdWJsaXNoZXIpO1xyXG4gICAgICAgICAgb2Jqcy5wdXNoKGNvbnRlc3QpO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgcmV0dXJuIG9ianM7XHJcbiAgICAgIH0pXHJcbiAgICAgIC5jYXRjaChlcnJvciA9PiBPYnNlcnZhYmxlLnRocm93KGVycm9yLmpzb24oKSkpO1xyXG4gIH1cclxuXHJcbiAgZ2V0SW5kaXZpZHVhbENvbnRlc3RzKGlkOiBhbnkpIHtcclxuICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0KCdodHRwOi8vbG9jYWxob3N0OjMwMDAvYXBpL3YxL2tvbmt1cnNhaScpXHJcbiAgICAgIC5tYXAocmVzID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhyZXMuanNvbigpKTtcclxuLy8gICAgICAgIGNvbnN0IGRhdGEgPSByZXMuanNvbigpLm9iajtcclxuICAgICAgICBjb25zdCBkYXRhID0gcmVzLmpzb24oKS5vYmo7XHJcbiAgICAgICAgbGV0IG9ianM6IGFueVtdID0gW107XHJcbiAgICAgICAgZm9yKGxldCBpPTA7IGk8IGRhdGEubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgIGlmIChkYXRhW2ldLnB1Ymxpc2hlci5faWQgPT0gaWQpIHtcclxuICAgICAgICAgIGxldCBjb250ZXN0ID0gbmV3IENvbnRlc3QoZGF0YVtpXS5uYW1lLCBkYXRhW2ldLmlkTmFtZSwgZGF0YVtpXS5faWQsIGRhdGFbaV0uY2F0ZWdvcnksIGRhdGFbaV0uZGVzY3JpcHRpb24sIGRhdGFbaV0uYXdhcmQsIGRhdGFbaV0uc3RhdHVzLCBkYXRhW2ldLnN1Ym1pdGlvbkNvdW50LCBkYXRhW2ldLmRheXNSZW1haW5pbmcsIGRhdGFbaV0uc3RhcnREYXRlLCBkYXRhW2ldLmVuZERhdGUsIGRhdGFbaV0uc3VibWl0aW9ucywgZGF0YVtpXS5wdWJsaXNoZXIpO1xyXG4gICAgICAgICAgb2Jqcy5wdXNoKGNvbnRlc3QpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgY29uc29sZS5sb2coJ2dldEluZGl2aWR1YWxDb250ZXN0cyBvYmpzIGFmdGVyIGxvb3AnKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhvYmpzKTtcclxuICAgICAgICByZXR1cm4gb2JqcztcclxuICAgICAgfSlcclxuICAgICAgLmNhdGNoKGVycm9yID0+IE9ic2VydmFibGUudGhyb3coZXJyb3IuanNvbigpKSk7XHJcbiAgfVxyXG5cclxuICBnZXRJbmRpdmlkdWFsQ29udGVzdChpZDogYW55KSB7XHJcbiAgICByZXR1cm4gdGhpcy5odHRwLmdldCgnaHR0cDovL2xvY2FsaG9zdDozMDAwL2FwaS92MS9rb25rdXJzYWkvJyArIGlkKVxyXG4gICAgICAubWFwKHJlcyA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2cocmVzLmpzb24oKSk7XHJcbiAgICAgICAgY29uc3QgZGF0YSA9IHJlcy5qc29uKCkub2JqO1xyXG4gICAgICAgIGxldCBjb250ZXN0ID0gbmV3IENvbnRlc3QoZGF0YS5uYW1lLCBkYXRhLmlkTmFtZSwgZGF0YS5faWQsIGRhdGEuY2F0ZWdvcnksIGRhdGEuZGVzY3JpcHRpb24sIGRhdGEuYXdhcmQsIGRhdGEuc3RhdHVzLCBkYXRhLnN1Ym1pdGlvbkNvdW50LCBkYXRhLmRheXNSZW1haW5pbmcsIGRhdGEuc3RhcnREYXRlLCBkYXRhLmVuZERhdGUsIGRhdGEuc3VibWl0aW9ucywgZGF0YS5wdWJsaXNoZXIpO1xyXG4gICAgICAgIHJldHVybiBjb250ZXN0O1xyXG4gICAgICB9KVxyXG4gICAgICAuY2F0Y2goZXJyb3IgPT4gT2JzZXJ2YWJsZS50aHJvdyhlcnJvci5qc29uKCkpKTtcclxuICB9XHJcblxyXG4gIGFkZENvbnRlc3QoY29udGVzdDogQ29udGVzdCkge1xyXG4gICAgY29uc3QgYm9keSA9IEpTT04uc3RyaW5naWZ5KGNvbnRlc3QpO1xyXG4gICAgY29uc3QgaGVhZGVycyA9IG5ldyBIZWFkZXJzKHsnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nfSk7XHJcbiAgICBjb25zdCB0b2tlbiA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0b2tlbicpID8gJz90b2tlbj0nICsgbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Rva2VuJykgOiAnJztcclxuXHJcbiAgICByZXR1cm4gdGhpcy5odHRwLnBvc3QoXCJodHRwOi8vbG9jYWxob3N0OjMwMDAva29ua3Vyc2FpXCIgKyB0b2tlbiwgYm9keSwge2hlYWRlcnM6IGhlYWRlcnN9KVxyXG4gICAgLm1hcChyZXMgPT4ge1xyXG4gICAgICBjb25zdCBkYXRhID0gcmVzLmpzb24oKS5vYmo7XHJcbiAgICAgIGxldCBjb250ZXN0ID0gbmV3IENvbnRlc3QoZGF0YS5uYW1lLCBkYXRhLmlkTmFtZSwgZGF0YS5faWQsIGRhdGEuY2F0ZWdvcnksIGRhdGEuZGVzY3JpcHRpb24sIGRhdGEuYXdhcmQsIGRhdGEuc3RhdHVzLCBkYXRhLnN1Ym1pdGlvbkNvdW50LCBkYXRhLmRheXNSZW1haW5pbmcsIGRhdGEuc3RhcnREYXRlLCBkYXRhLmVuZERhdGUsIGRhdGEuc3VibWl0aW9ucywgZGF0YS5wdWJsaXNoZXIpO1xyXG4gICAgICByZXR1cm4gY29udGVzdDtcclxuICAgIH0pXHJcbiAgICAuY2F0Y2goZXJyb3IgPT4gT2JzZXJ2YWJsZS50aHJvdyhlcnJvci5qc29uKCkpKTtcclxuICB9XHJcblxyXG4gIHVwZGF0ZUNvbnRlc3QoY29udGVzdDogQ29udGVzdCkge1xyXG4gICAgY29uc3QgYm9keSA9IEpTT04uc3RyaW5naWZ5KGNvbnRlc3QpO1xyXG4gICAgY29uc3QgaGVhZGVycyA9IG5ldyBIZWFkZXJzKHsnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nfSk7XHJcbiAgICBjb25zdCB0b2tlbiA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0b2tlbicpID8gJz90b2tlbj0nICsgbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Rva2VuJykgOiAnJztcclxuXHJcbiAgICByZXR1cm4gdGhpcy5odHRwLnBhdGNoKFwiaHR0cDovL2xvY2FsaG9zdDozMDAwL2tvbmt1cnNhaS9cIiArIGNvbnRlc3QuaWQgKyB0b2tlbiwgYm9keSwge2hlYWRlcnM6IGhlYWRlcnN9KVxyXG4gICAgLm1hcChyZXMgPT4gcmVzLmpzb24oKSlcclxuICAgIC5jYXRjaChlcnJvciA9PiBPYnNlcnZhYmxlLnRocm93KGVycm9yLmpzb24oKSkpO1xyXG4gIH1cclxuICBcclxuXHJcbiAgZWRpdENvbnRlc3QoY29udGVzdDogYW55KSB7XHJcbiAgICB0aGlzLmNvbnRlc3RFZGl0ZWQuZW1pdChjb250ZXN0KTtcclxuICB9XHJcblxyXG4gIGRlbGV0ZUNvbnRlc3QoY29udGVzdDogYW55KSB7XHJcbiAgICBjb25zdCB0b2tlbiA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0b2tlbicpID8gJz90b2tlbj0nICsgbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Rva2VuJykgOiAnJztcclxuICAgIHRoaXMuY29udGVzdHMuc3BsaWNlKHRoaXMuY29udGVzdHMuaW5kZXhPZihjb250ZXN0KSwgMSk7XHJcbiAgICByZXR1cm4gdGhpcy5odHRwLmRlbGV0ZShcImh0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9rb25rdXJzYWkvXCIgKyBjb250ZXN0LmlkICsgdG9rZW4pXHJcbiAgICAgIC5tYXAocmVzID0+IHJlcy5qc29uKCkpXHJcbiAgICAgIC5jYXRjaChlcnJvciA9PiBPYnNlcnZhYmxlLnRocm93KGVycm9yLmpzb24oKSkpO1xyXG4gIH1cclxuXHJcbiAgXHJcbn0iXX0=
