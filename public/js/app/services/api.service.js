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
    ApiService.prototype.addSubmitionComment = function (obj, contestId, submitionId) {
        var body = JSON.stringify(obj);
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        return this.http.patch('http://localhost:3000/api/v1/contest/' + contestId + '/submition/' + submitionId + '/comment', body, { headers: headers })
            .map(function (res) {
            var contest = res.json().obj;
            console.log('api service addComment contest var');
            console.log(contest);
            return contest;
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
    ApiService.prototype.getSubmitionComments = function (contestId, submitionId) {
        return this.http.get('http://localhost:3000/api/v1/contest/' + contestId + '/submition/' + submitionId + '/comments')
            .map(function (res) {
            console.log('RES JSON');
            console.log(res.json());
            var comments = res.json().obj;
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

//# sourceMappingURL=data:application/json;charset=utf8;base64,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QzthQUNqSSxHQUFHLENBQUMsVUFBQSxHQUFHO1lBQ04sTUFBTSxDQUFDLEdBQUcsQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUNwQixDQUFDLENBQUM7YUFDRCxLQUFLLENBQUMsVUFBQSxLQUFLLElBQUksT0FBQSx1QkFBVSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLENBQUMsRUFBOUIsQ0FBOEIsQ0FBQyxDQUFDO0lBQ3BELENBQUM7SUExTEg7UUFBQyxpQkFBVSxFQUFFOztrQkFBQTtJQXlNYixpQkFBQztBQUFELENBeE1BLEFBd01DLElBQUE7QUF4TVksa0JBQVUsYUF3TXRCLENBQUEiLCJmaWxlIjoic2VydmljZXMvYXBpLnNlcnZpY2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlLCBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQ29udGVzdCB9IGZyb20gJy4uL21vZGVscy9jb250ZXN0JztcclxuaW1wb3J0IHsgVXNlciB9IGZyb20gJy4uL21vZGVscy91c2VyJztcclxuaW1wb3J0IHsgSHR0cCwgSGVhZGVycyB9IGZyb20gJ0Bhbmd1bGFyL2h0dHAnO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcy9PYnNlcnZhYmxlJztcclxuaW1wb3J0ICdyeGpzL1J4JztcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIEFwaVNlcnZpY2Uge1xyXG4gIGNvbnRlc3RzID0gW107XHJcbiAgZGVzaWduZXJzID0gW107XHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBodHRwOiBIdHRwKSB7IH1cclxuXHJcbiAgZ2V0Q29udGVzdFN1Ym1pdGlvbnMoaWQ6IHN0cmluZykge1xyXG4gICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQoJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9hcGkvdjEvc3VibWl0aW9ucy9jb250ZXN0LycraWQpXHJcbiAgICAgIC5tYXAocmVzID0+IHtcclxuICAgICAgICAvL2NvbnNvbGUubG9nKCdzdWJtaXRpb25zIGZyb20gYXBpc2VydmljZScpO1xyXG4gICAgICAgIC8vY29uc29sZS5sb2cocmVzLmpzb24oKSk7XHJcbiAgICAgICAgY29uc3QgZGF0YSA9IHJlcy5qc29uKCkuc3VibWl0aW9ucztcclxuICAgICAgICAvL2NvbnNvbGUubG9nKCdhcGlTZXJ2aWNlIGRhdGEgdmFyaWFibGUnKTtcclxuICAgICAgICAvL2NvbnNvbGUubG9nKGRhdGEpO1xyXG4gICAgICAgICAgbGV0IHN1Ym1pdGlvbnM6IGFueVtdID0gW107XHJcbiAgICAgICAgICBmb3IobGV0IGk9MDsgaTwgZGF0YS5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAvL2xldCBkZXNpZ25lciA9IG5ldyBVc2VyKGRhdGFbaV0uZW1haWwsIGRhdGFbaV0ucGFzc3dvcmQsIGRhdGFbaV0udXNlclR5cGUsIGRhdGFbaV0uZmlyc3ROYW1lLCBkYXRhW2ldLmxhc3ROYW1lLCBkYXRhW2ldLmNvbnRlc3RzV29uLCBkYXRhW2ldLmRlc2lnbnNDcmVhdGVkLCBkYXRhW2ldLnB1YmxpY0Rlc2lnbnMpO1xyXG4gICAgICAgICAgICBsZXQgc3VibWl0aW9uID0ge3N1Ym1pdGlvblVybDogZGF0YVtpXS5zdWJtaXRpb25VcmwsIHN1Ym1pdGlvbkF1dGhvcjogZGF0YVtpXS5zdWJtaXRpb25BdXRob3IsIHN1Ym1pdGlvblJhdGluZzogZGF0YVtpXS5zdWJtaXRpb25SYXRpbmcsIHN1Ym1pdGlvbklkOiBkYXRhW2ldLnN1Ym1pdGlvbklkLCBzdGF0dXM6IGRhdGFbaV0uc3RhdHVzfTtcclxuICAgICAgICAgICAgc3VibWl0aW9ucy5wdXNoKHN1Ym1pdGlvbik7XHJcbiAgICAgICAgICB9O1xyXG4gICAgICAgICAgY29uc29sZS5sb2coJ3N1Ym1pdGlvbnMgYWZ0ZXIgbG9vcCcpO1xyXG4gICAgICAgICAgY29uc29sZS5sb2coc3VibWl0aW9ucyk7XHJcbiAgICAgICAgICByZXR1cm4gc3VibWl0aW9ucztcclxuXHJcbiAgICAgICAgLy8gdmFyIHN1Ym1pdGlvbnMgPSByZXMuanNvbigpLnN1Ym1pdGlvbnM7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coc3VibWl0aW9ucyk7XHJcbiAgICAgICAgLy8gcmV0dXJuIHN1Ym1pdGlvbnM7XHJcbiAgICAgIH0pXHJcbiAgICAgIC5jYXRjaChlcnJvciA9PiBPYnNlcnZhYmxlLnRocm93KGVycm9yLmpzb24oKSkpO1xyXG4gIH1cclxuXHJcbiAgZ2V0TXlTdWJtaXRpb25zKGNvbnRlc3RJZDogc3RyaW5nKSB7XHJcbiAgICByZXR1cm4gdGhpcy5odHRwLmdldCgnaHR0cDovL2xvY2FsaG9zdDozMDAwL2FwaS92MS9zdWJtaXRpb25zL2NvbnRlc3QvJytjb250ZXN0SWQpXHJcbiAgICAgIC5tYXAocmVzID0+IHtcclxuICAgICAgICAvL2NvbnNvbGUubG9nKCdNeVN1Ym1pdGlvbnMgZnJvbSBhcGlzZXJ2aWNlJyk7XHJcbiAgICAgICAgLy9jb25zb2xlLmxvZyhyZXMuanNvbigpKTtcclxuICAgICAgICBjb25zdCBkYXRhID0gcmVzLmpzb24oKS5zdWJtaXRpb25zO1xyXG4gICAgICAgIC8vY29uc29sZS5sb2coJ2FwaVNlcnZpY2UgZGF0YSB2YXJpYWJsZSBmb3IgTXlTdWJtaXRpb25zJyk7XHJcbiAgICAgICAgLy9jb25zb2xlLmxvZyhkYXRhKTtcclxuICAgICAgICAgIGxldCB1c2VySWQgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndXNlcklkJykgPyBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndXNlcklkJykgOiAnJztcclxuICAgICAgICAgIGxldCBteVN1Ym1pdGlvbnM6IGFueVtdID0gW107XHJcbiAgICAgICAgICBmb3IobGV0IGk9MDsgaTwgZGF0YS5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAvL2NvbnNvbGUubG9nKCdzdWJtaXRpb24gYXV0aG9yJyk7XHJcbiAgICAgICAgICAgIC8vY29uc29sZS5sb2coZGF0YVtpXS5zdWJtaXRpb25BdXRob3IpO1xyXG4gICAgICAgICAgICBpZiAoZGF0YVtpXS5zdWJtaXRpb25BdXRob3IuX2lkID09IHVzZXJJZCkge1xyXG4gICAgICAgICAgICBsZXQgbXlTdWJtaXRpb24gPSB7c3VibWl0aW9uVXJsOiBkYXRhW2ldLnN1Ym1pdGlvblVybCwgc3VibWl0aW9uQXV0aG9yOiBkYXRhW2ldLnN1Ym1pdGlvbkF1dGhvciwgc3VibWl0aW9uUmF0aW5nOiBkYXRhW2ldLnN1Ym1pdGlvblJhdGluZywgc3VtYml0aW9uSWQ6IGRhdGFbaV0uc3VibWl0aW9uSWQsIHN0YXR1czogZGF0YVtpXS5zdGF0dXN9O1xyXG4gICAgICAgICAgICAvL2NvbnNvbGUubG9nKCdNeVN1Ym1pdGlvbiBpbiBsb29wJyk7XHJcbiAgICAgICAgICAgIC8vY29uc29sZS5sb2cobXlTdWJtaXRpb24pO1xyXG4gICAgICAgICAgICBteVN1Ym1pdGlvbnMucHVzaChteVN1Ym1pdGlvbik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH07XHJcbiAgICAgICAgICBjb25zb2xlLmxvZygnTXlTdWJtaXRpb25zIGFmdGVyIGxvb3AnKTtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKG15U3VibWl0aW9ucyk7XHJcbiAgICAgICAgICByZXR1cm4gbXlTdWJtaXRpb25zO1xyXG5cclxuICAgICAgICAvLyB2YXIgc3VibWl0aW9ucyA9IHJlcy5qc29uKCkuc3VibWl0aW9ucztcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhzdWJtaXRpb25zKTtcclxuICAgICAgICAvLyByZXR1cm4gc3VibWl0aW9ucztcclxuICAgICAgfSlcclxuICAgICAgLmNhdGNoKGVycm9yID0+IE9ic2VydmFibGUudGhyb3coZXJyb3IuanNvbigpKSk7XHJcbiAgfVxyXG5cclxuICBnZXRXaW5uZXJTdWJtaXRpb24oY29udGVzdElkKSB7XHJcbiAgICByZXR1cm4gdGhpcy5odHRwLmdldCgnaHR0cDovL2xvY2FsaG9zdDozMDAwL2FwaS92MS9jb250ZXN0LycgKyBjb250ZXN0SWQgKyAnL3dpbm5lcicpXHJcbiAgICAgIC5tYXAocmVzID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZygnREVCVUcgc2VydmljZSByZXMuanNvbigpJyk7XHJcbiAgICAgICAgY29uc29sZS5sb2cocmVzLmpzb24oKSk7XHJcbiAgICAgICAgcmV0dXJuIHJlcy5qc29uKCkub2JqO1xyXG4gICAgICB9KVxyXG4gICAgICAuY2F0Y2goZXJyb3IgPT4gT2JzZXJ2YWJsZS50aHJvdyhlcnJvci5qc29uKCkpKTsgXHJcbiAgfVxyXG5cclxuICBnZXRVc2VySW5mbyh1c2VySWQ6IHN0cmluZykge1xyXG4gICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQoJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9hcGkvdjEvdXNlcnMvJyt1c2VySWQpXHJcbiAgICAubWFwKHJlcyA9PiB7XHJcbiAgICAgIGNvbnN0IHVzZXIgPSByZXMuanNvbigpLnVzZXI7XHJcbiAgICAgIGNvbnNvbGUubG9nKCdnZXRVc2VySW5mbyB1c2VyIHZhcicpO1xyXG4gICAgICBjb25zb2xlLmxvZyh1c2VyKTtcclxuICAgICAgcmV0dXJuIHVzZXI7XHJcbiAgICB9KVxyXG4gICAgLmNhdGNoKGVycm9yID0+IE9ic2VydmFibGUudGhyb3coZXJyb3IuanNvbigpKSk7XHJcbiAgfVxyXG5cclxuICBhZGRDb21tZW50KG9iajphbnksIGNvbnRlc3RJZDogc3RyaW5nKSB7XHJcbiAgICBjb25zdCBib2R5ID0gSlNPTi5zdHJpbmdpZnkob2JqKTtcclxuICAgIGNvbnN0IGhlYWRlcnMgPSBuZXcgSGVhZGVycyh7J0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ30pO1xyXG4gICAgcmV0dXJuIHRoaXMuaHR0cC5wYXRjaCgnaHR0cDovL2xvY2FsaG9zdDozMDAwL2FwaS92MS9jb250ZXN0LycgKyBjb250ZXN0SWQsIGJvZHksIHtoZWFkZXJzOiBoZWFkZXJzfSlcclxuICAgIC5tYXAocmVzID0+IHtcclxuICAgICAgY29uc3QgY29tbWVudHMgPSByZXMuanNvbigpLm9iai5jb21tZW50cztcclxuICAgICAgY29uc29sZS5sb2coJ2FwaSBzZXJ2aWNlIGFkZENvbW1lbnQgY29tbWVudHMgdmFyJyk7XHJcbiAgICAgIGNvbnNvbGUubG9nKGNvbW1lbnRzKTtcclxuICAgICAgcmV0dXJuIGNvbW1lbnRzO1xyXG4gICAgfSlcclxuICAgIC5jYXRjaChlcnJvciA9PiBPYnNlcnZhYmxlLnRocm93KGVycm9yLmpzb24oKSkpO1xyXG4gIH1cclxuXHJcbiAgYWRkU3VibWl0aW9uQ29tbWVudChvYmo6YW55LCBjb250ZXN0SWQ6IHN0cmluZywgc3VibWl0aW9uSWQ6IG51bWJlcikge1xyXG4gICAgY29uc3QgYm9keSA9IEpTT04uc3RyaW5naWZ5KG9iaik7XHJcbiAgICBjb25zdCBoZWFkZXJzID0gbmV3IEhlYWRlcnMoeydDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbid9KTtcclxuICAgIHJldHVybiB0aGlzLmh0dHAucGF0Y2goJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9hcGkvdjEvY29udGVzdC8nICsgY29udGVzdElkICsgJy9zdWJtaXRpb24vJyArIHN1Ym1pdGlvbklkICsgJy9jb21tZW50JywgYm9keSwge2hlYWRlcnM6IGhlYWRlcnN9KVxyXG4gICAgLm1hcChyZXMgPT4ge1xyXG4gICAgICBjb25zdCBjb250ZXN0ID0gcmVzLmpzb24oKS5vYmo7XHJcbiAgICAgIGNvbnNvbGUubG9nKCdhcGkgc2VydmljZSBhZGRDb21tZW50IGNvbnRlc3QgdmFyJyk7XHJcbiAgICAgIGNvbnNvbGUubG9nKGNvbnRlc3QpO1xyXG4gICAgICByZXR1cm4gY29udGVzdDtcclxuICAgIH0pXHJcbiAgICAuY2F0Y2goZXJyb3IgPT4gT2JzZXJ2YWJsZS50aHJvdyhlcnJvci5qc29uKCkpKTtcclxuICB9XHJcblxyXG4gIGdldENvbW1lbnRzKGNvbnRlc3RJZDogc3RyaW5nKSB7XHJcbiAgICByZXR1cm4gdGhpcy5odHRwLmdldCgnaHR0cDovL2xvY2FsaG9zdDozMDAwL2FwaS92MS9jb250ZXN0LycgKyBjb250ZXN0SWQgKyAnL2NvbW1lbnRzJylcclxuICAgIC5tYXAocmVzID0+IHtcclxuICAgICAgY29uc3QgY29tbWVudHMgPSByZXMuanNvbigpLm9iai5jb21tZW50cztcclxuICAgICAgY29uc29sZS5sb2coJ2FwaSBzZXJ2aWNlIGdldENvbW1lbnRzIGNvbW1lbnRzIHZhcicpO1xyXG4gICAgICBjb25zb2xlLmxvZyhjb21tZW50cyk7XHJcbiAgICAgIHJldHVybiBjb21tZW50cztcclxuICAgIH0pXHJcbiAgICAuY2F0Y2goZXJyb3IgPT4gT2JzZXJ2YWJsZS50aHJvdyhlcnJvci5qc29uKCkpKTtcclxuICB9XHJcblxyXG4gIGdldFN1Ym1pdGlvbkNvbW1lbnRzKGNvbnRlc3RJZDogc3RyaW5nLCBzdWJtaXRpb25JZDogbnVtYmVyKSB7XHJcbiAgICByZXR1cm4gdGhpcy5odHRwLmdldCgnaHR0cDovL2xvY2FsaG9zdDozMDAwL2FwaS92MS9jb250ZXN0LycgKyBjb250ZXN0SWQgKyAnL3N1Ym1pdGlvbi8nKyBzdWJtaXRpb25JZCArICcvY29tbWVudHMnKVxyXG4gICAgLm1hcChyZXMgPT4ge1xyXG4gICAgICBjb25zb2xlLmxvZygnUkVTIEpTT04nKTtcclxuICAgICAgY29uc29sZS5sb2cocmVzLmpzb24oKSk7XHJcbiAgICAgIGNvbnN0IGNvbW1lbnRzID0gcmVzLmpzb24oKS5vYmo7XHJcbiAgICAgIGNvbnNvbGUubG9nKCdhcGkgc2VydmljZSBnZXRDb21tZW50cyBjb21tZW50cyB2YXInKTtcclxuICAgICAgY29uc29sZS5sb2coY29tbWVudHMpO1xyXG4gICAgICByZXR1cm4gY29tbWVudHM7XHJcbiAgICB9KVxyXG4gICAgLmNhdGNoKGVycm9yID0+IE9ic2VydmFibGUudGhyb3coZXJyb3IuanNvbigpKSk7XHJcbiAgfVxyXG5cclxuICBzZWFyY2hVc2VycyhzZWFyY2hTdHIpIHtcclxuICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0KCdodHRwOi8vbG9jYWxob3N0OjMwMDAvYXBpL3YxL3NlYXJjaC8nICsgc2VhcmNoU3RyKVxyXG4gICAgICAubWFwKHJlcyA9PiByZXMuanNvbigpLm9iailcclxuICAgICAgLmNhdGNoKGVycm9yID0+IE9ic2VydmFibGUudGhyb3coZXJyb3IuanNvbigpKSk7XHJcbiAgfVxyXG5cclxuICBzZW5kTWVzc2FnZShyZWNpcGllbnQsIHRvcGljLCBtZXNzYWdlLCBzZW5kZXIpIHtcclxuICAgIC8vdmFyIHNlbmRlciA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd1c2VySWQnKTtcclxuICAgIHZhciBvYmogPSB7bWVzc2FnZTogbWVzc2FnZSwgcmVjaXBpZW50OiByZWNpcGllbnQsIHRvcGljOiB0b3BpYywgc2VuZGVyOiBzZW5kZXJ9O1xyXG4gICAgY29uc3QgYm9keSA9IEpTT04uc3RyaW5naWZ5KG9iaik7XHJcbiAgICBjb25zdCBoZWFkZXJzID0gbmV3IEhlYWRlcnMoeydDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbid9KTtcclxuICAgIHJldHVybiB0aGlzLmh0dHAucGF0Y2goJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9hcGkvdjEvbWVzc2FnZS8nICsgcmVjaXBpZW50LCBib2R5LCB7aGVhZGVyczogaGVhZGVyc30pXHJcbiAgICAgIC5tYXAocmVzID0+IHtcclxuICAgICAgICAgIHJldHVybiByZXMuanNvbigpLm9iajtcclxuICAgICAgfSlcclxuICAgICAgLmNhdGNoKGVycm9yID0+IE9ic2VydmFibGUudGhyb3coZXJyb3IuanNvbigpKSk7XHJcbiAgfVxyXG5cclxuICBnZXRNZXNzYWdlcyh1c2VySWQ6IHN0cmluZykge1xyXG4gICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQoJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9hcGkvdjEvbWVzc2FnZXMvJyArIHVzZXJJZClcclxuICAgICAgLm1hcChyZXMgPT4ge1xyXG4gICAgICAgIHJldHVybiByZXMuanNvbigpLm9iai5tZXNzYWdlczsgLy9ubyBmaWx0ZXJpbmdcclxuICAgICAgfSlcclxuICAgICAgLmNhdGNoKGVycm9yID0+IE9ic2VydmFibGUudGhyb3coZXJyb3IuanNvbigpKSk7XHJcbiAgfVxyXG5cclxuICBkZWxldGVNZXNzYWdlKG1lc3NhZ2VJZDogbnVtYmVyKSB7XHJcbiAgICB2YXIgdXNlcklkID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3VzZXJJZCcpO1xyXG4gICAgcmV0dXJuIHRoaXMuaHR0cC5kZWxldGUoJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9hcGkvdjEvbWVzc2FnZS8nICsgdXNlcklkICsgJy8nICsgbWVzc2FnZUlkKVxyXG4gICAgLm1hcChyZXMgPT4ge1xyXG4gICAgICByZXR1cm4gcmVzLmpzb24oKS5vYmoubWVzc2FnZXM7XHJcbiAgICB9KVxyXG4gICAgLmNhdGNoKGVycm9yID0+IE9ic2VydmFibGUudGhyb3coZXJyb3IuanNvbigpKSk7XHJcbiAgfVxyXG5cclxuICBjaGFuZ2VNZXNzYWdlU3RhdHVzKHVzZXJJZCwgbWVzc2FnZUlkKSB7XHJcbiAgICBjb25zdCBib2R5ID0gSlNPTi5zdHJpbmdpZnkoe3N0YXR1czogJ1BlcsW+acWrcsSXdGEnfSk7XHJcbiAgICBjb25zdCBoZWFkZXJzID0gbmV3IEhlYWRlcnMoeydDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbid9KTtcclxuICAgIHJldHVybiB0aGlzLmh0dHAucGF0Y2goJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9hcGkvdjEvbWVzc2FnZS8nICsgdXNlcklkICsgJy8nICsgbWVzc2FnZUlkLCBib2R5LCB7aGVhZGVyczogaGVhZGVyc30pXHJcbiAgICAgIC5tYXAocmVzID0+IHtcclxuICAgICAgICByZXR1cm4gcmVzLmpzb24oKTtcclxuICAgICAgfSlcclxuICAgICAgLmNhdGNoKGVycm9yID0+IE9ic2VydmFibGUudGhyb3coZXJyb3IuanNvbigpKSk7XHJcbiAgfVxyXG5cclxuICBzZWxlY3RXaW5uZXIoY29udGVzdElkTmFtZSwgc3VibWl0aW9uSWQsIGNvbnRlc3RJZCwgd2lubmVySWQsIHN1Ym1pdGlvbikge1xyXG4gICAgY29uc3QgYm9keSA9IEpTT04uc3RyaW5naWZ5KHtpZE5hbWU6IGNvbnRlc3RJZE5hbWUsIHN1Ym1pdGlvbklkOiBzdWJtaXRpb25JZCwgY29udGVzdElkOiBjb250ZXN0SWQsIHdpbm5lcklkOiB3aW5uZXJJZCwgc3VibWl0aW9uOiBzdWJtaXRpb259KTtcclxuICAgIGNvbnN0IGhlYWRlcnMgPSBuZXcgSGVhZGVycyh7J0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ30pO1xyXG4gICAgcmV0dXJuIHRoaXMuaHR0cC5wYXRjaCgnaHR0cDovL2xvY2FsaG9zdDozMDAwL2FwaS92MS9jb250ZXN0L3dpbm5lci8nICsgY29udGVzdElkTmFtZSArICcvJyArIHN1Ym1pdGlvbklkLCBib2R5LCB7aGVhZGVyczogaGVhZGVyc30pXHJcbiAgICAgIC5tYXAocmVzID0+IHtcclxuICAgICAgICByZXR1cm4gcmVzLmpzb24oKTtcclxuICAgICAgfSlcclxuICAgICAgLmNhdGNoKGVycm9yID0+IE9ic2VydmFibGUudGhyb3coZXJyb3IuanNvbigpKSk7XHJcbiAgfVxyXG5cclxuICAvLyBhZGRXaW5uaW5nQ29udGVzdChjb250ZXN0SWQsIHdpbm5lcklkKSB7XHJcbiAgLy8gICBjb25zb2xlLmxvZygnREVCVUcgYXBpc2VydmljZSBwYXJhbXMnKTtcclxuICAvLyAgIGNvbnNvbGUubG9nKCdjb250ZXN0SWQ6ICcgKyBjb250ZXN0SWQpO1xyXG4gIC8vICAgY29uc29sZS5sb2coJ3dpbm5lcklkOiAnICsgd2lubmVySWQpO1xyXG4gIC8vICAgY29uc3QgYm9keSA9IEpTT04uc3RyaW5naWZ5KHt3aW5uZXJJZDogd2lubmVySWQsIGNvbnRlc3RJZDogY29udGVzdElkfSk7XHJcbiAgLy8gICBjb25zdCBoZWFkZXJzID0gbmV3IEhlYWRlcnMoeydDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbid9KTtcclxuICAvLyAgIHJldHVybiB0aGlzLmh0dHAucGF0Y2goJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9hcGkvdjEvY29udGVzdC93aW5uZXIvYWRkLycgKyBjb250ZXN0SWQgKyBcIi9cIiArIHdpbm5lcklkLCBib2R5LCB7aGVhZGVyczogaGVhZGVyc30pXHJcbiAgLy8gICAgIC5tYXAocmVzID0+IHtcclxuICAvLyAgICAgICByZXR1cm4gcmVzLmpzb24oKTtcclxuICAvLyAgICAgfSlcclxuICAvLyAgICAgLmNhdGNoKGVycm9yID0+IE9ic2VydmFibGUudGhyb3coZXJyb3IuanNvbigpKSk7XHJcbiAgLy8gfVxyXG5cclxufSJdfQ==
