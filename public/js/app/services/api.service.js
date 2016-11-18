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
var http_1 = require('@angular/http');
var Observable_1 = require('rxjs/Observable');
require('rxjs/Rx');
var ApiService = (function () {
    function ApiService(http) {
        this.http = http;
        this.contests = [];
        this.designers = [];
    }
    ApiService.prototype.getContestSubmitions = function (id) {
        return this.http.get('http://localhost:3000/api/v1/submitions/contest/' + id)
            .map(function (res) {
            //console.log('submitions from apiservice');
            //console.log(res.json());
            var data = res.json().submitions;
            //console.log('apiService data variable');
            //console.log(data);
            var submitions = [];
            for (var i = 0; i < data.length; i++) {
                //let designer = new User(data[i].email, data[i].password, data[i].userType, data[i].firstName, data[i].lastName, data[i].contestsWon, data[i].designsCreated, data[i].publicDesigns);
                var submition = { submitionUrl: data[i].submitionUrl, submitionAuthor: data[i].submitionAuthor, submitionRating: data[i].submitionRating, submitionId: data[i].submitionId, status: data[i].status };
                submitions.push(submition);
            }
            ;
            console.log('submitions after loop');
            console.log(submitions);
            return submitions;
            // var submitions = res.json().submitions;
            // console.log(submitions);
            // return submitions;
        })
            .catch(function (error) { return Observable_1.Observable.throw(error.json()); });
    };
    ApiService.prototype.getMySubmitions = function (contestId) {
        return this.http.get('http://localhost:3000/api/v1/submitions/contest/' + contestId)
            .map(function (res) {
            //console.log('MySubmitions from apiservice');
            //console.log(res.json());
            var data = res.json().submitions;
            //console.log('apiService data variable for MySubmitions');
            //console.log(data);
            var userId = localStorage.getItem('userId') ? localStorage.getItem('userId') : '';
            var mySubmitions = [];
            for (var i = 0; i < data.length; i++) {
                //console.log('submition author');
                //console.log(data[i].submitionAuthor);
                if (data[i].submitionAuthor._id == userId) {
                    var mySubmition = { submitionUrl: data[i].submitionUrl, submitionAuthor: data[i].submitionAuthor, submitionRating: data[i].submitionRating, sumbitionId: data[i].submitionId, status: data[i].status };
                    //console.log('MySubmition in loop');
                    //console.log(mySubmition);
                    mySubmitions.push(mySubmition);
                }
            }
            ;
            console.log('MySubmitions after loop');
            console.log(mySubmitions);
            return mySubmitions;
            // var submitions = res.json().submitions;
            // console.log(submitions);
            // return submitions;
        })
            .catch(function (error) { return Observable_1.Observable.throw(error.json()); });
    };
    ApiService.prototype.getWinnerSubmition = function (contestId) {
        return this.http.get('http://localhost:3000/api/v1/contest/' + contestId + '/winner')
            .map(function (res) {
            console.log('DEBUG service res.json()');
            console.log(res.json());
            return res.json().obj;
        })
            .catch(function (error) { return Observable_1.Observable.throw(error.json()); });
    };
    ApiService.prototype.getUserInfo = function (userId) {
        return this.http.get('http://localhost:3000/api/v1/users/' + userId)
            .map(function (res) {
            var user = res.json().user;
            console.log('getUserInfo user var');
            console.log(user);
            return user;
        })
            .catch(function (error) { return Observable_1.Observable.throw(error.json()); });
    };
    ApiService.prototype.addComment = function (obj, contestId) {
        var body = JSON.stringify(obj);
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        return this.http.patch('http://localhost:3000/api/v1/contest/' + contestId, body, { headers: headers })
            .map(function (res) {
            var comments = res.json().obj.comments;
            console.log('api service addComment comments var');
            console.log(comments);
            return comments;
        })
            .catch(function (error) { return Observable_1.Observable.throw(error.json()); });
    };
    ApiService.prototype.getComments = function (contestId) {
        return this.http.get('http://localhost:3000/api/v1/contest/' + contestId + '/comments')
            .map(function (res) {
            var comments = res.json().obj.comments;
            console.log('api service getComments comments var');
            console.log(comments);
            return comments;
        })
            .catch(function (error) { return Observable_1.Observable.throw(error.json()); });
    };
    ApiService.prototype.searchUsers = function (searchStr) {
        return this.http.get('http://localhost:3000/api/v1/search/' + searchStr)
            .map(function (res) { return res.json().obj; })
            .catch(function (error) { return Observable_1.Observable.throw(error.json()); });
    };
    ApiService.prototype.sendMessage = function (recipient, topic, message, sender) {
        //var sender = localStorage.getItem('userId');
        var obj = { message: message, recipient: recipient, topic: topic, sender: sender };
        var body = JSON.stringify(obj);
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        return this.http.patch('http://localhost:3000/api/v1/message/' + recipient, body, { headers: headers })
            .map(function (res) {
            return res.json().obj;
        })
            .catch(function (error) { return Observable_1.Observable.throw(error.json()); });
    };
    ApiService.prototype.getMessages = function (userId) {
        return this.http.get('http://localhost:3000/api/v1/messages/' + userId)
            .map(function (res) {
            return res.json().obj.messages; //no filtering
        })
            .catch(function (error) { return Observable_1.Observable.throw(error.json()); });
    };
    ApiService.prototype.deleteMessage = function (messageId) {
        var userId = localStorage.getItem('userId');
        return this.http.delete('http://localhost:3000/api/v1/message/' + userId + '/' + messageId)
            .map(function (res) {
            return res.json().obj.messages;
        })
            .catch(function (error) { return Observable_1.Observable.throw(error.json()); });
    };
    ApiService.prototype.changeMessageStatus = function (userId, messageId) {
        var body = JSON.stringify({ status: 'Peržiūrėta' });
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        return this.http.patch('http://localhost:3000/api/v1/message/' + userId + '/' + messageId, body, { headers: headers })
            .map(function (res) {
            return res.json();
        })
            .catch(function (error) { return Observable_1.Observable.throw(error.json()); });
    };
    ApiService.prototype.selectWinner = function (contestIdName, submitionId, contestId, winnerId, submition) {
        var body = JSON.stringify({ idName: contestIdName, submitionId: submitionId, contestId: contestId, winnerId: winnerId, submition: submition });
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        return this.http.patch('http://localhost:3000/api/v1/contest/winner/' + contestIdName + '/' + submitionId, body, { headers: headers })
            .map(function (res) {
            return res.json();
        })
            .catch(function (error) { return Observable_1.Observable.throw(error.json()); });
    };
    ApiService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], ApiService);
    return ApiService;
}());
exports.ApiService = ApiService;

//# sourceMappingURL=data:application/json;charset=utf8;base64,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cnZpY2VzL2FwaS5zZXJ2aWNlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSwgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IENvbnRlc3QgfSBmcm9tICcuLi9tb2RlbHMvY29udGVzdCc7XHJcbmltcG9ydCB7IFVzZXIgfSBmcm9tICcuLi9tb2RlbHMvdXNlcic7XHJcbmltcG9ydCB7IEh0dHAsIEhlYWRlcnMgfSBmcm9tICdAYW5ndWxhci9odHRwJztcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMvT2JzZXJ2YWJsZSc7XHJcbmltcG9ydCAncnhqcy9SeCc7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBBcGlTZXJ2aWNlIHtcclxuICBjb250ZXN0cyA9IFtdO1xyXG4gIGRlc2lnbmVycyA9IFtdO1xyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgaHR0cDogSHR0cCkgeyB9XHJcblxyXG4gIGdldENvbnRlc3RTdWJtaXRpb25zKGlkOiBzdHJpbmcpIHtcclxuICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0KCdodHRwOi8vbG9jYWxob3N0OjMwMDAvYXBpL3YxL3N1Ym1pdGlvbnMvY29udGVzdC8nK2lkKVxyXG4gICAgICAubWFwKHJlcyA9PiB7XHJcbiAgICAgICAgLy9jb25zb2xlLmxvZygnc3VibWl0aW9ucyBmcm9tIGFwaXNlcnZpY2UnKTtcclxuICAgICAgICAvL2NvbnNvbGUubG9nKHJlcy5qc29uKCkpO1xyXG4gICAgICAgIGNvbnN0IGRhdGEgPSByZXMuanNvbigpLnN1Ym1pdGlvbnM7XHJcbiAgICAgICAgLy9jb25zb2xlLmxvZygnYXBpU2VydmljZSBkYXRhIHZhcmlhYmxlJyk7XHJcbiAgICAgICAgLy9jb25zb2xlLmxvZyhkYXRhKTtcclxuICAgICAgICAgIGxldCBzdWJtaXRpb25zOiBhbnlbXSA9IFtdO1xyXG4gICAgICAgICAgZm9yKGxldCBpPTA7IGk8IGRhdGEubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgLy9sZXQgZGVzaWduZXIgPSBuZXcgVXNlcihkYXRhW2ldLmVtYWlsLCBkYXRhW2ldLnBhc3N3b3JkLCBkYXRhW2ldLnVzZXJUeXBlLCBkYXRhW2ldLmZpcnN0TmFtZSwgZGF0YVtpXS5sYXN0TmFtZSwgZGF0YVtpXS5jb250ZXN0c1dvbiwgZGF0YVtpXS5kZXNpZ25zQ3JlYXRlZCwgZGF0YVtpXS5wdWJsaWNEZXNpZ25zKTtcclxuICAgICAgICAgICAgbGV0IHN1Ym1pdGlvbiA9IHtzdWJtaXRpb25Vcmw6IGRhdGFbaV0uc3VibWl0aW9uVXJsLCBzdWJtaXRpb25BdXRob3I6IGRhdGFbaV0uc3VibWl0aW9uQXV0aG9yLCBzdWJtaXRpb25SYXRpbmc6IGRhdGFbaV0uc3VibWl0aW9uUmF0aW5nLCBzdWJtaXRpb25JZDogZGF0YVtpXS5zdWJtaXRpb25JZCwgc3RhdHVzOiBkYXRhW2ldLnN0YXR1c307XHJcbiAgICAgICAgICAgIHN1Ym1pdGlvbnMucHVzaChzdWJtaXRpb24pO1xyXG4gICAgICAgICAgfTtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKCdzdWJtaXRpb25zIGFmdGVyIGxvb3AnKTtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKHN1Ym1pdGlvbnMpO1xyXG4gICAgICAgICAgcmV0dXJuIHN1Ym1pdGlvbnM7XHJcblxyXG4gICAgICAgIC8vIHZhciBzdWJtaXRpb25zID0gcmVzLmpzb24oKS5zdWJtaXRpb25zO1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHN1Ym1pdGlvbnMpO1xyXG4gICAgICAgIC8vIHJldHVybiBzdWJtaXRpb25zO1xyXG4gICAgICB9KVxyXG4gICAgICAuY2F0Y2goZXJyb3IgPT4gT2JzZXJ2YWJsZS50aHJvdyhlcnJvci5qc29uKCkpKTtcclxuICB9XHJcblxyXG4gIGdldE15U3VibWl0aW9ucyhjb250ZXN0SWQ6IHN0cmluZykge1xyXG4gICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQoJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9hcGkvdjEvc3VibWl0aW9ucy9jb250ZXN0LycrY29udGVzdElkKVxyXG4gICAgICAubWFwKHJlcyA9PiB7XHJcbiAgICAgICAgLy9jb25zb2xlLmxvZygnTXlTdWJtaXRpb25zIGZyb20gYXBpc2VydmljZScpO1xyXG4gICAgICAgIC8vY29uc29sZS5sb2cocmVzLmpzb24oKSk7XHJcbiAgICAgICAgY29uc3QgZGF0YSA9IHJlcy5qc29uKCkuc3VibWl0aW9ucztcclxuICAgICAgICAvL2NvbnNvbGUubG9nKCdhcGlTZXJ2aWNlIGRhdGEgdmFyaWFibGUgZm9yIE15U3VibWl0aW9ucycpO1xyXG4gICAgICAgIC8vY29uc29sZS5sb2coZGF0YSk7XHJcbiAgICAgICAgICBsZXQgdXNlcklkID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3VzZXJJZCcpID8gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3VzZXJJZCcpIDogJyc7XHJcbiAgICAgICAgICBsZXQgbXlTdWJtaXRpb25zOiBhbnlbXSA9IFtdO1xyXG4gICAgICAgICAgZm9yKGxldCBpPTA7IGk8IGRhdGEubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgLy9jb25zb2xlLmxvZygnc3VibWl0aW9uIGF1dGhvcicpO1xyXG4gICAgICAgICAgICAvL2NvbnNvbGUubG9nKGRhdGFbaV0uc3VibWl0aW9uQXV0aG9yKTtcclxuICAgICAgICAgICAgaWYgKGRhdGFbaV0uc3VibWl0aW9uQXV0aG9yLl9pZCA9PSB1c2VySWQpIHtcclxuICAgICAgICAgICAgbGV0IG15U3VibWl0aW9uID0ge3N1Ym1pdGlvblVybDogZGF0YVtpXS5zdWJtaXRpb25VcmwsIHN1Ym1pdGlvbkF1dGhvcjogZGF0YVtpXS5zdWJtaXRpb25BdXRob3IsIHN1Ym1pdGlvblJhdGluZzogZGF0YVtpXS5zdWJtaXRpb25SYXRpbmcsIHN1bWJpdGlvbklkOiBkYXRhW2ldLnN1Ym1pdGlvbklkLCBzdGF0dXM6IGRhdGFbaV0uc3RhdHVzfTtcclxuICAgICAgICAgICAgLy9jb25zb2xlLmxvZygnTXlTdWJtaXRpb24gaW4gbG9vcCcpO1xyXG4gICAgICAgICAgICAvL2NvbnNvbGUubG9nKG15U3VibWl0aW9uKTtcclxuICAgICAgICAgICAgbXlTdWJtaXRpb25zLnB1c2gobXlTdWJtaXRpb24pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9O1xyXG4gICAgICAgICAgY29uc29sZS5sb2coJ015U3VibWl0aW9ucyBhZnRlciBsb29wJyk7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhteVN1Ym1pdGlvbnMpO1xyXG4gICAgICAgICAgcmV0dXJuIG15U3VibWl0aW9ucztcclxuXHJcbiAgICAgICAgLy8gdmFyIHN1Ym1pdGlvbnMgPSByZXMuanNvbigpLnN1Ym1pdGlvbnM7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coc3VibWl0aW9ucyk7XHJcbiAgICAgICAgLy8gcmV0dXJuIHN1Ym1pdGlvbnM7XHJcbiAgICAgIH0pXHJcbiAgICAgIC5jYXRjaChlcnJvciA9PiBPYnNlcnZhYmxlLnRocm93KGVycm9yLmpzb24oKSkpO1xyXG4gIH1cclxuXHJcbiAgZ2V0V2lubmVyU3VibWl0aW9uKGNvbnRlc3RJZCkge1xyXG4gICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQoJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9hcGkvdjEvY29udGVzdC8nICsgY29udGVzdElkICsgJy93aW5uZXInKVxyXG4gICAgICAubWFwKHJlcyA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ0RFQlVHIHNlcnZpY2UgcmVzLmpzb24oKScpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHJlcy5qc29uKCkpO1xyXG4gICAgICAgIHJldHVybiByZXMuanNvbigpLm9iajtcclxuICAgICAgfSlcclxuICAgICAgLmNhdGNoKGVycm9yID0+IE9ic2VydmFibGUudGhyb3coZXJyb3IuanNvbigpKSk7IFxyXG4gIH1cclxuXHJcbiAgZ2V0VXNlckluZm8odXNlcklkOiBzdHJpbmcpIHtcclxuICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0KCdodHRwOi8vbG9jYWxob3N0OjMwMDAvYXBpL3YxL3VzZXJzLycrdXNlcklkKVxyXG4gICAgLm1hcChyZXMgPT4ge1xyXG4gICAgICBjb25zdCB1c2VyID0gcmVzLmpzb24oKS51c2VyO1xyXG4gICAgICBjb25zb2xlLmxvZygnZ2V0VXNlckluZm8gdXNlciB2YXInKTtcclxuICAgICAgY29uc29sZS5sb2codXNlcik7XHJcbiAgICAgIHJldHVybiB1c2VyO1xyXG4gICAgfSlcclxuICAgIC5jYXRjaChlcnJvciA9PiBPYnNlcnZhYmxlLnRocm93KGVycm9yLmpzb24oKSkpO1xyXG4gIH1cclxuXHJcbiAgYWRkQ29tbWVudChvYmo6YW55LCBjb250ZXN0SWQ6IHN0cmluZykge1xyXG4gICAgY29uc3QgYm9keSA9IEpTT04uc3RyaW5naWZ5KG9iaik7XHJcbiAgICBjb25zdCBoZWFkZXJzID0gbmV3IEhlYWRlcnMoeydDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbid9KTtcclxuICAgIHJldHVybiB0aGlzLmh0dHAucGF0Y2goJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9hcGkvdjEvY29udGVzdC8nICsgY29udGVzdElkLCBib2R5LCB7aGVhZGVyczogaGVhZGVyc30pXHJcbiAgICAubWFwKHJlcyA9PiB7XHJcbiAgICAgIGNvbnN0IGNvbW1lbnRzID0gcmVzLmpzb24oKS5vYmouY29tbWVudHM7XHJcbiAgICAgIGNvbnNvbGUubG9nKCdhcGkgc2VydmljZSBhZGRDb21tZW50IGNvbW1lbnRzIHZhcicpO1xyXG4gICAgICBjb25zb2xlLmxvZyhjb21tZW50cyk7XHJcbiAgICAgIHJldHVybiBjb21tZW50cztcclxuICAgIH0pXHJcbiAgICAuY2F0Y2goZXJyb3IgPT4gT2JzZXJ2YWJsZS50aHJvdyhlcnJvci5qc29uKCkpKTtcclxuICB9XHJcblxyXG4gIGdldENvbW1lbnRzKGNvbnRlc3RJZDogc3RyaW5nKSB7XHJcbiAgICByZXR1cm4gdGhpcy5odHRwLmdldCgnaHR0cDovL2xvY2FsaG9zdDozMDAwL2FwaS92MS9jb250ZXN0LycgKyBjb250ZXN0SWQgKyAnL2NvbW1lbnRzJylcclxuICAgIC5tYXAocmVzID0+IHtcclxuICAgICAgY29uc3QgY29tbWVudHMgPSByZXMuanNvbigpLm9iai5jb21tZW50cztcclxuICAgICAgY29uc29sZS5sb2coJ2FwaSBzZXJ2aWNlIGdldENvbW1lbnRzIGNvbW1lbnRzIHZhcicpO1xyXG4gICAgICBjb25zb2xlLmxvZyhjb21tZW50cyk7XHJcbiAgICAgIHJldHVybiBjb21tZW50cztcclxuICAgIH0pXHJcbiAgICAuY2F0Y2goZXJyb3IgPT4gT2JzZXJ2YWJsZS50aHJvdyhlcnJvci5qc29uKCkpKTtcclxuICB9XHJcblxyXG4gIHNlYXJjaFVzZXJzKHNlYXJjaFN0cikge1xyXG4gICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQoJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9hcGkvdjEvc2VhcmNoLycgKyBzZWFyY2hTdHIpXHJcbiAgICAgIC5tYXAocmVzID0+IHJlcy5qc29uKCkub2JqKVxyXG4gICAgICAuY2F0Y2goZXJyb3IgPT4gT2JzZXJ2YWJsZS50aHJvdyhlcnJvci5qc29uKCkpKTtcclxuICB9XHJcblxyXG4gIHNlbmRNZXNzYWdlKHJlY2lwaWVudCwgdG9waWMsIG1lc3NhZ2UsIHNlbmRlcikge1xyXG4gICAgLy92YXIgc2VuZGVyID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3VzZXJJZCcpO1xyXG4gICAgdmFyIG9iaiA9IHttZXNzYWdlOiBtZXNzYWdlLCByZWNpcGllbnQ6IHJlY2lwaWVudCwgdG9waWM6IHRvcGljLCBzZW5kZXI6IHNlbmRlcn07XHJcbiAgICBjb25zdCBib2R5ID0gSlNPTi5zdHJpbmdpZnkob2JqKTtcclxuICAgIGNvbnN0IGhlYWRlcnMgPSBuZXcgSGVhZGVycyh7J0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ30pO1xyXG4gICAgcmV0dXJuIHRoaXMuaHR0cC5wYXRjaCgnaHR0cDovL2xvY2FsaG9zdDozMDAwL2FwaS92MS9tZXNzYWdlLycgKyByZWNpcGllbnQsIGJvZHksIHtoZWFkZXJzOiBoZWFkZXJzfSlcclxuICAgICAgLm1hcChyZXMgPT4ge1xyXG4gICAgICAgICAgcmV0dXJuIHJlcy5qc29uKCkub2JqO1xyXG4gICAgICB9KVxyXG4gICAgICAuY2F0Y2goZXJyb3IgPT4gT2JzZXJ2YWJsZS50aHJvdyhlcnJvci5qc29uKCkpKTtcclxuICB9XHJcblxyXG4gIGdldE1lc3NhZ2VzKHVzZXJJZDogc3RyaW5nKSB7XHJcbiAgICByZXR1cm4gdGhpcy5odHRwLmdldCgnaHR0cDovL2xvY2FsaG9zdDozMDAwL2FwaS92MS9tZXNzYWdlcy8nICsgdXNlcklkKVxyXG4gICAgICAubWFwKHJlcyA9PiB7XHJcbiAgICAgICAgcmV0dXJuIHJlcy5qc29uKCkub2JqLm1lc3NhZ2VzOyAvL25vIGZpbHRlcmluZ1xyXG4gICAgICB9KVxyXG4gICAgICAuY2F0Y2goZXJyb3IgPT4gT2JzZXJ2YWJsZS50aHJvdyhlcnJvci5qc29uKCkpKTtcclxuICB9XHJcblxyXG4gIGRlbGV0ZU1lc3NhZ2UobWVzc2FnZUlkOiBudW1iZXIpIHtcclxuICAgIHZhciB1c2VySWQgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndXNlcklkJyk7XHJcbiAgICByZXR1cm4gdGhpcy5odHRwLmRlbGV0ZSgnaHR0cDovL2xvY2FsaG9zdDozMDAwL2FwaS92MS9tZXNzYWdlLycgKyB1c2VySWQgKyAnLycgKyBtZXNzYWdlSWQpXHJcbiAgICAubWFwKHJlcyA9PiB7XHJcbiAgICAgIHJldHVybiByZXMuanNvbigpLm9iai5tZXNzYWdlcztcclxuICAgIH0pXHJcbiAgICAuY2F0Y2goZXJyb3IgPT4gT2JzZXJ2YWJsZS50aHJvdyhlcnJvci5qc29uKCkpKTtcclxuICB9XHJcblxyXG4gIGNoYW5nZU1lc3NhZ2VTdGF0dXModXNlcklkLCBtZXNzYWdlSWQpIHtcclxuICAgIGNvbnN0IGJvZHkgPSBKU09OLnN0cmluZ2lmeSh7c3RhdHVzOiAnUGVyxb5pxatyxJd0YSd9KTtcclxuICAgIGNvbnN0IGhlYWRlcnMgPSBuZXcgSGVhZGVycyh7J0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ30pO1xyXG4gICAgcmV0dXJuIHRoaXMuaHR0cC5wYXRjaCgnaHR0cDovL2xvY2FsaG9zdDozMDAwL2FwaS92MS9tZXNzYWdlLycgKyB1c2VySWQgKyAnLycgKyBtZXNzYWdlSWQsIGJvZHksIHtoZWFkZXJzOiBoZWFkZXJzfSlcclxuICAgICAgLm1hcChyZXMgPT4ge1xyXG4gICAgICAgIHJldHVybiByZXMuanNvbigpO1xyXG4gICAgICB9KVxyXG4gICAgICAuY2F0Y2goZXJyb3IgPT4gT2JzZXJ2YWJsZS50aHJvdyhlcnJvci5qc29uKCkpKTtcclxuICB9XHJcblxyXG4gIHNlbGVjdFdpbm5lcihjb250ZXN0SWROYW1lLCBzdWJtaXRpb25JZCwgY29udGVzdElkLCB3aW5uZXJJZCwgc3VibWl0aW9uKSB7XHJcbiAgICBjb25zdCBib2R5ID0gSlNPTi5zdHJpbmdpZnkoe2lkTmFtZTogY29udGVzdElkTmFtZSwgc3VibWl0aW9uSWQ6IHN1Ym1pdGlvbklkLCBjb250ZXN0SWQ6IGNvbnRlc3RJZCwgd2lubmVySWQ6IHdpbm5lcklkLCBzdWJtaXRpb246IHN1Ym1pdGlvbn0pO1xyXG4gICAgY29uc3QgaGVhZGVycyA9IG5ldyBIZWFkZXJzKHsnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nfSk7XHJcbiAgICByZXR1cm4gdGhpcy5odHRwLnBhdGNoKCdodHRwOi8vbG9jYWxob3N0OjMwMDAvYXBpL3YxL2NvbnRlc3Qvd2lubmVyLycgKyBjb250ZXN0SWROYW1lICsgJy8nICsgc3VibWl0aW9uSWQsIGJvZHksIHtoZWFkZXJzOiBoZWFkZXJzfSlcclxuICAgICAgLm1hcChyZXMgPT4ge1xyXG4gICAgICAgIHJldHVybiByZXMuanNvbigpO1xyXG4gICAgICB9KVxyXG4gICAgICAuY2F0Y2goZXJyb3IgPT4gT2JzZXJ2YWJsZS50aHJvdyhlcnJvci5qc29uKCkpKTtcclxuICB9XHJcblxyXG4gIC8vIGFkZFdpbm5pbmdDb250ZXN0KGNvbnRlc3RJZCwgd2lubmVySWQpIHtcclxuICAvLyAgIGNvbnNvbGUubG9nKCdERUJVRyBhcGlzZXJ2aWNlIHBhcmFtcycpO1xyXG4gIC8vICAgY29uc29sZS5sb2coJ2NvbnRlc3RJZDogJyArIGNvbnRlc3RJZCk7XHJcbiAgLy8gICBjb25zb2xlLmxvZygnd2lubmVySWQ6ICcgKyB3aW5uZXJJZCk7XHJcbiAgLy8gICBjb25zdCBib2R5ID0gSlNPTi5zdHJpbmdpZnkoe3dpbm5lcklkOiB3aW5uZXJJZCwgY29udGVzdElkOiBjb250ZXN0SWR9KTtcclxuICAvLyAgIGNvbnN0IGhlYWRlcnMgPSBuZXcgSGVhZGVycyh7J0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ30pO1xyXG4gIC8vICAgcmV0dXJuIHRoaXMuaHR0cC5wYXRjaCgnaHR0cDovL2xvY2FsaG9zdDozMDAwL2FwaS92MS9jb250ZXN0L3dpbm5lci9hZGQvJyArIGNvbnRlc3RJZCArIFwiL1wiICsgd2lubmVySWQsIGJvZHksIHtoZWFkZXJzOiBoZWFkZXJzfSlcclxuICAvLyAgICAgLm1hcChyZXMgPT4ge1xyXG4gIC8vICAgICAgIHJldHVybiByZXMuanNvbigpO1xyXG4gIC8vICAgICB9KVxyXG4gIC8vICAgICAuY2F0Y2goZXJyb3IgPT4gT2JzZXJ2YWJsZS50aHJvdyhlcnJvci5qc29uKCkpKTtcclxuICAvLyB9XHJcblxyXG59Il19
