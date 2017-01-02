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
    ApiService.prototype.getContestAdditionalFiles = function (id) {
        return this.http.get('http://localhost:3000/api/v1/contest/' + id)
            .map(function (res) {
            var data = res.json().obj.additionalFiles;
            return data;
        });
    };
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
                var submition = { submitionUrl: data[i].submitionUrl, submitionAuthor: data[i].submitionAuthor, submitionRating: data[i].submitionRating, submitionId: data[i].submitionId, status: data[i].status, comments: data[i].comments };
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
            var userId = sessionStorage.getItem('userId') ? sessionStorage.getItem('userId') : '';
            var mySubmitions = [];
            for (var i = 0; i < data.length; i++) {
                //console.log('submition author');
                //console.log(data[i].submitionAuthor);
                if (data[i].submitionAuthor._id == userId) {
                    var mySubmition = { submitionUrl: data[i].submitionUrl, submitionAuthor: data[i].submitionAuthor, submitionRating: data[i].submitionRating, submitionId: data[i].submitionId, status: data[i].status, comments: data[i].comments };
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
        if (!userId) {
            return Observable_1.Observable.empty();
        }
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
        console.log('OOBBJJ');
        console.log(obj);
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
        console.log('OOBBJJ');
        console.log(obj);
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
        //var sender = sessionStorage.getItem('userId');
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
        var userId = sessionStorage.getItem('userId');
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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlcnZpY2VzL2FwaS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBeUMsZUFBZSxDQUFDLENBQUE7QUFHekQscUJBQThCLGVBQWUsQ0FBQyxDQUFBO0FBQzlDLDJCQUEyQixpQkFBaUIsQ0FBQyxDQUFBO0FBQzdDLFFBQU8sU0FBUyxDQUFDLENBQUE7QUFHakI7SUFHRSxvQkFBb0IsSUFBVTtRQUFWLFNBQUksR0FBSixJQUFJLENBQU07UUFGOUIsYUFBUSxHQUFHLEVBQUUsQ0FBQztRQUNkLGNBQVMsR0FBRyxFQUFFLENBQUM7SUFDbUIsQ0FBQztJQUVuQyw4Q0FBeUIsR0FBekIsVUFBMEIsRUFBVTtRQUNsQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsdUNBQXVDLEdBQUcsRUFBRSxDQUFDO2FBQ2pFLEdBQUcsQ0FBQyxVQUFBLEdBQUc7WUFDTixJQUFNLElBQUksR0FBRyxHQUFHLENBQUMsSUFBSSxFQUFFLENBQUMsR0FBRyxDQUFDLGVBQWUsQ0FBQztZQUM1QyxNQUFNLENBQUMsSUFBSSxDQUFDO1FBQ2QsQ0FBQyxDQUFDLENBQUE7SUFDSixDQUFDO0lBRUQseUNBQW9CLEdBQXBCLFVBQXFCLEVBQVU7UUFDN0IsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLGtEQUFrRCxHQUFDLEVBQUUsQ0FBQzthQUN4RSxHQUFHLENBQUMsVUFBQSxHQUFHO1lBQ04sNENBQTRDO1lBQzVDLDBCQUEwQjtZQUMxQixJQUFNLElBQUksR0FBRyxHQUFHLENBQUMsSUFBSSxFQUFFLENBQUMsVUFBVSxDQUFDO1lBQ25DLDBDQUEwQztZQUMxQyxvQkFBb0I7WUFDbEIsSUFBSSxVQUFVLEdBQVUsRUFBRSxDQUFDO1lBQzNCLEdBQUcsQ0FBQSxDQUFDLElBQUksQ0FBQyxHQUFDLENBQUMsRUFBRSxDQUFDLEdBQUUsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFB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aS5zZXJ2aWNlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSwgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IENvbnRlc3QgfSBmcm9tICcuLi9tb2RlbHMvY29udGVzdCc7XHJcbmltcG9ydCB7IFVzZXIgfSBmcm9tICcuLi9tb2RlbHMvdXNlcic7XHJcbmltcG9ydCB7IEh0dHAsIEhlYWRlcnMgfSBmcm9tICdAYW5ndWxhci9odHRwJztcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMvT2JzZXJ2YWJsZSc7XHJcbmltcG9ydCAncnhqcy9SeCc7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBBcGlTZXJ2aWNlIHtcclxuICBjb250ZXN0cyA9IFtdO1xyXG4gIGRlc2lnbmVycyA9IFtdO1xyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgaHR0cDogSHR0cCkgeyB9XHJcblxyXG4gIGdldENvbnRlc3RBZGRpdGlvbmFsRmlsZXMoaWQ6IHN0cmluZykge1xyXG4gICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQoJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9hcGkvdjEvY29udGVzdC8nICsgaWQpXHJcbiAgICAubWFwKHJlcyA9PiB7XHJcbiAgICAgIGNvbnN0IGRhdGEgPSByZXMuanNvbigpLm9iai5hZGRpdGlvbmFsRmlsZXM7XHJcbiAgICAgIHJldHVybiBkYXRhO1xyXG4gICAgfSlcclxuICB9XHJcblxyXG4gIGdldENvbnRlc3RTdWJtaXRpb25zKGlkOiBzdHJpbmcpIHtcclxuICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0KCdodHRwOi8vbG9jYWxob3N0OjMwMDAvYXBpL3YxL3N1Ym1pdGlvbnMvY29udGVzdC8nK2lkKVxyXG4gICAgICAubWFwKHJlcyA9PiB7XHJcbiAgICAgICAgLy9jb25zb2xlLmxvZygnc3VibWl0aW9ucyBmcm9tIGFwaXNlcnZpY2UnKTtcclxuICAgICAgICAvL2NvbnNvbGUubG9nKHJlcy5qc29uKCkpO1xyXG4gICAgICAgIGNvbnN0IGRhdGEgPSByZXMuanNvbigpLnN1Ym1pdGlvbnM7XHJcbiAgICAgICAgLy9jb25zb2xlLmxvZygnYXBpU2VydmljZSBkYXRhIHZhcmlhYmxlJyk7XHJcbiAgICAgICAgLy9jb25zb2xlLmxvZyhkYXRhKTtcclxuICAgICAgICAgIGxldCBzdWJtaXRpb25zOiBhbnlbXSA9IFtdO1xyXG4gICAgICAgICAgZm9yKGxldCBpPTA7IGk8IGRhdGEubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgLy9sZXQgZGVzaWduZXIgPSBuZXcgVXNlcihkYXRhW2ldLmVtYWlsLCBkYXRhW2ldLnBhc3N3b3JkLCBkYXRhW2ldLnVzZXJUeXBlLCBkYXRhW2ldLmZpcnN0TmFtZSwgZGF0YVtpXS5sYXN0TmFtZSwgZGF0YVtpXS5jb250ZXN0c1dvbiwgZGF0YVtpXS5kZXNpZ25zQ3JlYXRlZCwgZGF0YVtpXS5wdWJsaWNEZXNpZ25zKTtcclxuICAgICAgICAgICAgbGV0IHN1Ym1pdGlvbiA9IHtzdWJtaXRpb25Vcmw6IGRhdGFbaV0uc3VibWl0aW9uVXJsLCBzdWJtaXRpb25BdXRob3I6IGRhdGFbaV0uc3VibWl0aW9uQXV0aG9yLCBzdWJtaXRpb25SYXRpbmc6IGRhdGFbaV0uc3VibWl0aW9uUmF0aW5nLCBzdWJtaXRpb25JZDogZGF0YVtpXS5zdWJtaXRpb25JZCwgc3RhdHVzOiBkYXRhW2ldLnN0YXR1cywgY29tbWVudHM6IGRhdGFbaV0uY29tbWVudHN9O1xyXG4gICAgICAgICAgICBzdWJtaXRpb25zLnB1c2goc3VibWl0aW9uKTtcclxuICAgICAgICAgIH07XHJcbiAgICAgICAgICBjb25zb2xlLmxvZygnc3VibWl0aW9ucyBhZnRlciBsb29wJyk7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhzdWJtaXRpb25zKTtcclxuICAgICAgICAgIHJldHVybiBzdWJtaXRpb25zO1xyXG5cclxuICAgICAgICAvLyB2YXIgc3VibWl0aW9ucyA9IHJlcy5qc29uKCkuc3VibWl0aW9ucztcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhzdWJtaXRpb25zKTtcclxuICAgICAgICAvLyByZXR1cm4gc3VibWl0aW9ucztcclxuICAgICAgfSlcclxuICAgICAgLmNhdGNoKGVycm9yID0+IE9ic2VydmFibGUudGhyb3coZXJyb3IuanNvbigpKSk7XHJcbiAgfVxyXG5cclxuICBnZXRNeVN1Ym1pdGlvbnMoY29udGVzdElkOiBzdHJpbmcpIHtcclxuICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0KCdodHRwOi8vbG9jYWxob3N0OjMwMDAvYXBpL3YxL3N1Ym1pdGlvbnMvY29udGVzdC8nK2NvbnRlc3RJZClcclxuICAgICAgLm1hcChyZXMgPT4ge1xyXG4gICAgICAgIC8vY29uc29sZS5sb2coJ015U3VibWl0aW9ucyBmcm9tIGFwaXNlcnZpY2UnKTtcclxuICAgICAgICAvL2NvbnNvbGUubG9nKHJlcy5qc29uKCkpO1xyXG4gICAgICAgIGNvbnN0IGRhdGEgPSByZXMuanNvbigpLnN1Ym1pdGlvbnM7XHJcbiAgICAgICAgLy9jb25zb2xlLmxvZygnYXBpU2VydmljZSBkYXRhIHZhcmlhYmxlIGZvciBNeVN1Ym1pdGlvbnMnKTtcclxuICAgICAgICAvL2NvbnNvbGUubG9nKGRhdGEpO1xyXG4gICAgICAgICAgbGV0IHVzZXJJZCA9IHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oJ3VzZXJJZCcpID8gc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbSgndXNlcklkJykgOiAnJztcclxuICAgICAgICAgIGxldCBteVN1Ym1pdGlvbnM6IGFueVtdID0gW107XHJcbiAgICAgICAgICBmb3IobGV0IGk9MDsgaTwgZGF0YS5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAvL2NvbnNvbGUubG9nKCdzdWJtaXRpb24gYXV0aG9yJyk7XHJcbiAgICAgICAgICAgIC8vY29uc29sZS5sb2coZGF0YVtpXS5zdWJtaXRpb25BdXRob3IpO1xyXG4gICAgICAgICAgICBpZiAoZGF0YVtpXS5zdWJtaXRpb25BdXRob3IuX2lkID09IHVzZXJJZCkge1xyXG4gICAgICAgICAgICBsZXQgbXlTdWJtaXRpb24gPSB7c3VibWl0aW9uVXJsOiBkYXRhW2ldLnN1Ym1pdGlvblVybCwgc3VibWl0aW9uQXV0aG9yOiBkYXRhW2ldLnN1Ym1pdGlvbkF1dGhvciwgc3VibWl0aW9uUmF0aW5nOiBkYXRhW2ldLnN1Ym1pdGlvblJhdGluZywgc3VibWl0aW9uSWQ6IGRhdGFbaV0uc3VibWl0aW9uSWQsIHN0YXR1czogZGF0YVtpXS5zdGF0dXMsIGNvbW1lbnRzOiBkYXRhW2ldLmNvbW1lbnRzfTtcclxuICAgICAgICAgICAgLy9jb25zb2xlLmxvZygnTXlTdWJtaXRpb24gaW4gbG9vcCcpO1xyXG4gICAgICAgICAgICAvL2NvbnNvbGUubG9nKG15U3VibWl0aW9uKTtcclxuICAgICAgICAgICAgbXlTdWJtaXRpb25zLnB1c2gobXlTdWJtaXRpb24pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9O1xyXG4gICAgICAgICAgY29uc29sZS5sb2coJ015U3VibWl0aW9ucyBhZnRlciBsb29wJyk7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhteVN1Ym1pdGlvbnMpO1xyXG4gICAgICAgICAgcmV0dXJuIG15U3VibWl0aW9ucztcclxuXHJcbiAgICAgICAgLy8gdmFyIHN1Ym1pdGlvbnMgPSByZXMuanNvbigpLnN1Ym1pdGlvbnM7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coc3VibWl0aW9ucyk7XHJcbiAgICAgICAgLy8gcmV0dXJuIHN1Ym1pdGlvbnM7XHJcbiAgICAgIH0pXHJcbiAgICAgIC5jYXRjaChlcnJvciA9PiBPYnNlcnZhYmxlLnRocm93KGVycm9yLmpzb24oKSkpO1xyXG4gIH1cclxuXHJcbiAgZ2V0V2lubmVyU3VibWl0aW9uKGNvbnRlc3RJZCkge1xyXG4gICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQoJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9hcGkvdjEvY29udGVzdC8nICsgY29udGVzdElkICsgJy93aW5uZXInKVxyXG4gICAgICAubWFwKHJlcyA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ0RFQlVHIHNlcnZpY2UgcmVzLmpzb24oKScpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHJlcy5qc29uKCkpO1xyXG4gICAgICAgIHJldHVybiByZXMuanNvbigpLm9iajtcclxuICAgICAgfSlcclxuICAgICAgLmNhdGNoKGVycm9yID0+IE9ic2VydmFibGUudGhyb3coZXJyb3IuanNvbigpKSk7IFxyXG4gIH1cclxuXHJcbiAgZ2V0VXNlckluZm8odXNlcklkOiBzdHJpbmcpIHtcclxuICAgIGlmKCF1c2VySWQpIHtcclxuICAgICAgcmV0dXJuIE9ic2VydmFibGUuZW1wdHkoKTtcclxuICAgIH1cclxuICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0KCdodHRwOi8vbG9jYWxob3N0OjMwMDAvYXBpL3YxL3VzZXJzLycrdXNlcklkKVxyXG4gICAgLm1hcChyZXMgPT4ge1xyXG4gICAgICBjb25zdCB1c2VyID0gcmVzLmpzb24oKS51c2VyO1xyXG4gICAgICBjb25zb2xlLmxvZygnZ2V0VXNlckluZm8gdXNlciB2YXInKTtcclxuICAgICAgY29uc29sZS5sb2codXNlcik7XHJcbiAgICAgIHJldHVybiB1c2VyO1xyXG4gICAgfSlcclxuICAgIC5jYXRjaChlcnJvciA9PiBPYnNlcnZhYmxlLnRocm93KGVycm9yLmpzb24oKSkpO1xyXG4gIH1cclxuXHJcbiAgYWRkQ29tbWVudChvYmo6YW55LCBjb250ZXN0SWQ6IHN0cmluZykge1xyXG4gICAgY29uc3QgYm9keSA9IEpTT04uc3RyaW5naWZ5KG9iaik7XHJcbiAgICBjb25zb2xlLmxvZygnT09CQkpKJyk7XHJcbiAgICBjb25zb2xlLmxvZyhvYmopO1xyXG4gICAgY29uc3QgaGVhZGVycyA9IG5ldyBIZWFkZXJzKHsnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nfSk7XHJcbiAgICByZXR1cm4gdGhpcy5odHRwLnBhdGNoKCdodHRwOi8vbG9jYWxob3N0OjMwMDAvYXBpL3YxL2NvbnRlc3QvJyArIGNvbnRlc3RJZCwgYm9keSwge2hlYWRlcnM6IGhlYWRlcnN9KVxyXG4gICAgLm1hcChyZXMgPT4ge1xyXG4gICAgICBjb25zdCBjb21tZW50cyA9IHJlcy5qc29uKCkub2JqLmNvbW1lbnRzO1xyXG4gICAgICBjb25zb2xlLmxvZygnYXBpIHNlcnZpY2UgYWRkQ29tbWVudCBjb21tZW50cyB2YXInKTtcclxuICAgICAgY29uc29sZS5sb2coY29tbWVudHMpO1xyXG4gICAgICByZXR1cm4gY29tbWVudHM7XHJcbiAgICB9KVxyXG4gICAgLmNhdGNoKGVycm9yID0+IE9ic2VydmFibGUudGhyb3coZXJyb3IuanNvbigpKSk7XHJcbiAgfVxyXG5cclxuICBhZGRTdWJtaXRpb25Db21tZW50KG9iajphbnksIGNvbnRlc3RJZDogc3RyaW5nLCBzdWJtaXRpb25JZDogbnVtYmVyKSB7XHJcbiAgICBjb25zdCBib2R5ID0gSlNPTi5zdHJpbmdpZnkob2JqKTtcclxuICAgIGNvbnNvbGUubG9nKCdPT0JCSkonKTtcclxuICAgIGNvbnNvbGUubG9nKG9iaik7XHJcbiAgICBjb25zdCBoZWFkZXJzID0gbmV3IEhlYWRlcnMoeydDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbid9KTtcclxuICAgIHJldHVybiB0aGlzLmh0dHAucGF0Y2goJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9hcGkvdjEvY29udGVzdC8nICsgY29udGVzdElkICsgJy9zdWJtaXRpb24vJyArIHN1Ym1pdGlvbklkICsgJy9jb21tZW50JywgYm9keSwge2hlYWRlcnM6IGhlYWRlcnN9KVxyXG4gICAgLm1hcChyZXMgPT4ge1xyXG4gICAgICBjb25zdCBjb250ZXN0ID0gcmVzLmpzb24oKS5vYmo7XHJcbiAgICAgIGNvbnNvbGUubG9nKCdhcGkgc2VydmljZSBhZGRDb21tZW50IGNvbnRlc3QgdmFyJyk7XHJcbiAgICAgIGNvbnNvbGUubG9nKGNvbnRlc3QpO1xyXG4gICAgICByZXR1cm4gY29udGVzdDtcclxuICAgIH0pXHJcbiAgICAuY2F0Y2goZXJyb3IgPT4gT2JzZXJ2YWJsZS50aHJvdyhlcnJvci5qc29uKCkpKTtcclxuICB9XHJcblxyXG4gIGdldENvbW1lbnRzKGNvbnRlc3RJZDogc3RyaW5nKSB7XHJcbiAgICByZXR1cm4gdGhpcy5odHRwLmdldCgnaHR0cDovL2xvY2FsaG9zdDozMDAwL2FwaS92MS9jb250ZXN0LycgKyBjb250ZXN0SWQgKyAnL2NvbW1lbnRzJylcclxuICAgIC5tYXAocmVzID0+IHtcclxuICAgICAgY29uc3QgY29tbWVudHMgPSByZXMuanNvbigpLm9iai5jb21tZW50cztcclxuICAgICAgY29uc29sZS5sb2coJ2FwaSBzZXJ2aWNlIGdldENvbW1lbnRzIGNvbW1lbnRzIHZhcicpO1xyXG4gICAgICBjb25zb2xlLmxvZyhjb21tZW50cyk7XHJcbiAgICAgIHJldHVybiBjb21tZW50cztcclxuICAgIH0pXHJcbiAgICAuY2F0Y2goZXJyb3IgPT4gT2JzZXJ2YWJsZS50aHJvdyhlcnJvci5qc29uKCkpKTtcclxuICB9XHJcblxyXG4gIGdldFN1Ym1pdGlvbkNvbW1lbnRzKGNvbnRlc3RJZDogc3RyaW5nLCBzdWJtaXRpb25JZDogbnVtYmVyKSB7XHJcbiAgICByZXR1cm4gdGhpcy5odHRwLmdldCgnaHR0cDovL2xvY2FsaG9zdDozMDAwL2FwaS92MS9jb250ZXN0LycgKyBjb250ZXN0SWQgKyAnL3N1Ym1pdGlvbi8nKyBzdWJtaXRpb25JZCArICcvY29tbWVudHMnKVxyXG4gICAgLm1hcChyZXMgPT4ge1xyXG4gICAgICBjb25zb2xlLmxvZygnUkVTIEpTT04nKTtcclxuICAgICAgY29uc29sZS5sb2cocmVzLmpzb24oKSk7XHJcbiAgICAgIGNvbnN0IGNvbW1lbnRzID0gcmVzLmpzb24oKS5vYmo7XHJcbiAgICAgIGNvbnNvbGUubG9nKCdhcGkgc2VydmljZSBnZXRDb21tZW50cyBjb21tZW50cyB2YXInKTtcclxuICAgICAgY29uc29sZS5sb2coY29tbWVudHMpO1xyXG4gICAgICByZXR1cm4gY29tbWVudHM7XHJcbiAgICB9KVxyXG4gICAgLmNhdGNoKGVycm9yID0+IE9ic2VydmFibGUudGhyb3coZXJyb3IuanNvbigpKSk7XHJcbiAgfVxyXG5cclxuICBzZWFyY2hVc2VycyhzZWFyY2hTdHIpIHtcclxuICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0KCdodHRwOi8vbG9jYWxob3N0OjMwMDAvYXBpL3YxL3NlYXJjaC8nICsgc2VhcmNoU3RyKVxyXG4gICAgICAubWFwKHJlcyA9PiByZXMuanNvbigpLm9iailcclxuICAgICAgLmNhdGNoKGVycm9yID0+IE9ic2VydmFibGUudGhyb3coZXJyb3IuanNvbigpKSk7XHJcbiAgfVxyXG5cclxuICBzZW5kTWVzc2FnZShyZWNpcGllbnQsIHRvcGljLCBtZXNzYWdlLCBzZW5kZXIpIHtcclxuICAgIC8vdmFyIHNlbmRlciA9IHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oJ3VzZXJJZCcpO1xyXG4gICAgdmFyIG9iaiA9IHttZXNzYWdlOiBtZXNzYWdlLCByZWNpcGllbnQ6IHJlY2lwaWVudCwgdG9waWM6IHRvcGljLCBzZW5kZXI6IHNlbmRlcn07XHJcbiAgICBjb25zdCBib2R5ID0gSlNPTi5zdHJpbmdpZnkob2JqKTtcclxuICAgIGNvbnN0IGhlYWRlcnMgPSBuZXcgSGVhZGVycyh7J0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ30pO1xyXG4gICAgcmV0dXJuIHRoaXMuaHR0cC5wYXRjaCgnaHR0cDovL2xvY2FsaG9zdDozMDAwL2FwaS92MS9tZXNzYWdlLycgKyByZWNpcGllbnQsIGJvZHksIHtoZWFkZXJzOiBoZWFkZXJzfSlcclxuICAgICAgLm1hcChyZXMgPT4ge1xyXG4gICAgICAgICAgcmV0dXJuIHJlcy5qc29uKCkub2JqO1xyXG4gICAgICB9KVxyXG4gICAgICAuY2F0Y2goZXJyb3IgPT4gT2JzZXJ2YWJsZS50aHJvdyhlcnJvci5qc29uKCkpKTtcclxuICB9XHJcblxyXG4gIGdldE1lc3NhZ2VzKHVzZXJJZDogc3RyaW5nKSB7XHJcbiAgICByZXR1cm4gdGhpcy5odHRwLmdldCgnaHR0cDovL2xvY2FsaG9zdDozMDAwL2FwaS92MS9tZXNzYWdlcy8nICsgdXNlcklkKVxyXG4gICAgICAubWFwKHJlcyA9PiB7XHJcbiAgICAgICAgcmV0dXJuIHJlcy5qc29uKCkub2JqLm1lc3NhZ2VzOyAvL25vIGZpbHRlcmluZ1xyXG4gICAgICB9KVxyXG4gICAgICAuY2F0Y2goZXJyb3IgPT4gT2JzZXJ2YWJsZS50aHJvdyhlcnJvci5qc29uKCkpKTtcclxuICB9XHJcblxyXG4gIGRlbGV0ZU1lc3NhZ2UobWVzc2FnZUlkOiBudW1iZXIpIHtcclxuICAgIHZhciB1c2VySWQgPSBzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKCd1c2VySWQnKTtcclxuICAgIHJldHVybiB0aGlzLmh0dHAuZGVsZXRlKCdodHRwOi8vbG9jYWxob3N0OjMwMDAvYXBpL3YxL21lc3NhZ2UvJyArIHVzZXJJZCArICcvJyArIG1lc3NhZ2VJZClcclxuICAgIC5tYXAocmVzID0+IHtcclxuICAgICAgcmV0dXJuIHJlcy5qc29uKCkub2JqLm1lc3NhZ2VzO1xyXG4gICAgfSlcclxuICAgIC5jYXRjaChlcnJvciA9PiBPYnNlcnZhYmxlLnRocm93KGVycm9yLmpzb24oKSkpO1xyXG4gIH1cclxuXHJcbiAgY2hhbmdlTWVzc2FnZVN0YXR1cyh1c2VySWQsIG1lc3NhZ2VJZCkge1xyXG4gICAgY29uc3QgYm9keSA9IEpTT04uc3RyaW5naWZ5KHtzdGF0dXM6ICdQZXLFvmnFq3LEl3RhJ30pO1xyXG4gICAgY29uc3QgaGVhZGVycyA9IG5ldyBIZWFkZXJzKHsnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nfSk7XHJcbiAgICByZXR1cm4gdGhpcy5odHRwLnBhdGNoKCdodHRwOi8vbG9jYWxob3N0OjMwMDAvYXBpL3YxL21lc3NhZ2UvJyArIHVzZXJJZCArICcvJyArIG1lc3NhZ2VJZCwgYm9keSwge2hlYWRlcnM6IGhlYWRlcnN9KVxyXG4gICAgICAubWFwKHJlcyA9PiB7XHJcbiAgICAgICAgcmV0dXJuIHJlcy5qc29uKCk7XHJcbiAgICAgIH0pXHJcbiAgICAgIC5jYXRjaChlcnJvciA9PiBPYnNlcnZhYmxlLnRocm93KGVycm9yLmpzb24oKSkpO1xyXG4gIH1cclxuXHJcbiAgc2VsZWN0V2lubmVyKGNvbnRlc3RJZE5hbWUsIHN1Ym1pdGlvbklkLCBjb250ZXN0SWQsIHdpbm5lcklkLCBzdWJtaXRpb24pIHtcclxuICAgIGNvbnN0IGJvZHkgPSBKU09OLnN0cmluZ2lmeSh7aWROYW1lOiBjb250ZXN0SWROYW1lLCBzdWJtaXRpb25JZDogc3VibWl0aW9uSWQsIGNvbnRlc3RJZDogY29udGVzdElkLCB3aW5uZXJJZDogd2lubmVySWQsIHN1Ym1pdGlvbjogc3VibWl0aW9ufSk7XHJcbiAgICBjb25zdCBoZWFkZXJzID0gbmV3IEhlYWRlcnMoeydDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbid9KTtcclxuICAgIHJldHVybiB0aGlzLmh0dHAucGF0Y2goJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9hcGkvdjEvY29udGVzdC93aW5uZXIvJyArIGNvbnRlc3RJZE5hbWUgKyAnLycgKyBzdWJtaXRpb25JZCwgYm9keSwge2hlYWRlcnM6IGhlYWRlcnN9KVxyXG4gICAgICAubWFwKHJlcyA9PiB7XHJcbiAgICAgICAgcmV0dXJuIHJlcy5qc29uKCk7XHJcbiAgICAgIH0pXHJcbiAgICAgIC5jYXRjaChlcnJvciA9PiBPYnNlcnZhYmxlLnRocm93KGVycm9yLmpzb24oKSkpO1xyXG4gIH1cclxuXHJcbiAgLy8gYWRkV2lubmluZ0NvbnRlc3QoY29udGVzdElkLCB3aW5uZXJJZCkge1xyXG4gIC8vICAgY29uc29sZS5sb2coJ0RFQlVHIGFwaXNlcnZpY2UgcGFyYW1zJyk7XHJcbiAgLy8gICBjb25zb2xlLmxvZygnY29udGVzdElkOiAnICsgY29udGVzdElkKTtcclxuICAvLyAgIGNvbnNvbGUubG9nKCd3aW5uZXJJZDogJyArIHdpbm5lcklkKTtcclxuICAvLyAgIGNvbnN0IGJvZHkgPSBKU09OLnN0cmluZ2lmeSh7d2lubmVySWQ6IHdpbm5lcklkLCBjb250ZXN0SWQ6IGNvbnRlc3RJZH0pO1xyXG4gIC8vICAgY29uc3QgaGVhZGVycyA9IG5ldyBIZWFkZXJzKHsnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nfSk7XHJcbiAgLy8gICByZXR1cm4gdGhpcy5odHRwLnBhdGNoKCdodHRwOi8vbG9jYWxob3N0OjMwMDAvYXBpL3YxL2NvbnRlc3Qvd2lubmVyL2FkZC8nICsgY29udGVzdElkICsgXCIvXCIgKyB3aW5uZXJJZCwgYm9keSwge2hlYWRlcnM6IGhlYWRlcnN9KVxyXG4gIC8vICAgICAubWFwKHJlcyA9PiB7XHJcbiAgLy8gICAgICAgcmV0dXJuIHJlcy5qc29uKCk7XHJcbiAgLy8gICAgIH0pXHJcbiAgLy8gICAgIC5jYXRjaChlcnJvciA9PiBPYnNlcnZhYmxlLnRocm93KGVycm9yLmpzb24oKSkpO1xyXG4gIC8vIH1cclxuXHJcbn0iXX0=
