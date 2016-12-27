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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlcnZpY2VzL2FwaS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBeUMsZUFBZSxDQUFDLENBQUE7QUFHekQscUJBQThCLGVBQWUsQ0FBQyxDQUFBO0FBQzlDLDJCQUEyQixpQkFBaUIsQ0FBQyxDQUFBO0FBQzdDLFFBQU8sU0FBUyxDQUFDLENBQUE7QUFHakI7SUFHRSxvQkFBb0IsSUFBVTtRQUFWLFNBQUksR0FBSixJQUFJLENBQU07UUFGOUIsYUFBUSxHQUFHLEVBQUUsQ0FBQztRQUNkLGNBQVMsR0FBRyxFQUFFLENBQUM7SUFDbUIsQ0FBQztJQUVuQyw4Q0FBeUIsR0FBekIsVUFBMEIsRUFBVTtRQUNsQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsdUNBQXVDLEdBQUcsRUFBRSxDQUFDO2FBQ2pFLEdBQUcsQ0FBQyxVQUFBLEdBQUc7WUFDTixJQUFNLElBQUksR0FBRyxHQUFHLENBQUMsSUFBSSxFQUFFLENBQUMsR0FBRyxDQUFDLGVBQWUsQ0FBQztZQUM1QyxNQUFNLENBQUMsSUFBSSxDQUFDO1FBQ2QsQ0FBQyxDQUFDLENBQUE7SUFDSixDQUFDO0lBRUQseUNBQW9CLEdBQXBCLFVBQXFCLEVBQVU7UUFDN0IsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLGtEQUFrRCxHQUFDLEVBQUUsQ0FBQzthQUN4RSxHQUFHLENBQUMsVUFBQSxHQUFHO1lBQ04sNENBQTRDO1lBQzVDLDBCQUEwQjtZQUMxQixJQUFNLElBQUksR0FBRyxHQUFHLENBQUMsSUFBSSxFQUFFLENBQUMsVUFBVSxDQUFDO1lBQ25DLDBDQUEwQztZQUMxQyxvQkFBb0I7WUFDbEIsSUFBSSxVQUFVLEdBQVUsRUFBRSxDQUFDO1lBQzNCLEdBQUcsQ0FBQSxDQUFDLElBQUksQ0FBQyxHQUFDLENBQUMsRUFBRSxDQUFDLEdBQUUsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFB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QUNwRCxDQUFDO0lBRUQsaUNBQVksR0FBWixVQUFhLGFBQWEsRUFBRSxXQUFXLEVBQUUsU0FBUyxFQUFFLFFBQVEsRUFBRSxTQUFTO1FBQ3JFLElBQU0sSUFBSSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsRUFBQyxNQUFNLEVBQUUsYUFBYSxFQUFFLFdBQVcsRUFBRSxXQUFXLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUMsQ0FBQyxDQUFDO1FBQy9JLElBQU0sT0FBTyxHQUFHLElBQUksY0FBTyxDQUFDLEVBQUMsY0FBYyxFQUFFLGtCQUFrQixFQUFDLENBQUMsQ0FBQztRQUNsRSxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsOENBQThDLEdBQUcsYUFBYSxHQUFHLEdBQUcsR0FBRyxXQUFXLEVBQUUsSUFBSSxFQUFFLEVBQUMsT0FBTyxFQUFFLE9BQU8sRUFBQyxDQUFDO2FBQ2pJLEdBQUcsQ0FBQyxVQUFBLEdBQUc7WUFDTixNQUFNLENBQUMsR0FBRyxDQUFDLElBQUksRUFBRSxDQUFDO1FBQ3BCLENBQUMsQ0FBQzthQUNELEtBQUssQ0FBQyxVQUFBLEtBQUssSUFBSSxPQUFBLHVCQUFVLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsQ0FBQyxFQUE5QixDQUE4QixDQUFDLENBQUM7SUFDcEQsQ0FBQztJQXJNSDtRQUFDLGlCQUFVLEVBQUU7O2tCQUFBO0lBb05iLGlCQUFDO0FBQUQsQ0FuTkEsQUFtTkMsSUFBQTtBQW5OWSxrQkFBVSxhQW1OdEIsQ0FBQSIsImZpbGUiOiJzZXJ2aWNlcy9hcGkuc2VydmljZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUsIEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDb250ZXN0IH0gZnJvbSAnLi4vbW9kZWxzL2NvbnRlc3QnO1xyXG5pbXBvcnQgeyBVc2VyIH0gZnJvbSAnLi4vbW9kZWxzL3VzZXInO1xyXG5pbXBvcnQgeyBIdHRwLCBIZWFkZXJzIH0gZnJvbSAnQGFuZ3VsYXIvaHR0cCc7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzL09ic2VydmFibGUnO1xyXG5pbXBvcnQgJ3J4anMvUngnO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgQXBpU2VydmljZSB7XHJcbiAgY29udGVzdHMgPSBbXTtcclxuICBkZXNpZ25lcnMgPSBbXTtcclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGh0dHA6IEh0dHApIHsgfVxyXG5cclxuICBnZXRDb250ZXN0QWRkaXRpb25hbEZpbGVzKGlkOiBzdHJpbmcpIHtcclxuICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0KCdodHRwOi8vbG9jYWxob3N0OjMwMDAvYXBpL3YxL2NvbnRlc3QvJyArIGlkKVxyXG4gICAgLm1hcChyZXMgPT4ge1xyXG4gICAgICBjb25zdCBkYXRhID0gcmVzLmpzb24oKS5vYmouYWRkaXRpb25hbEZpbGVzO1xyXG4gICAgICByZXR1cm4gZGF0YTtcclxuICAgIH0pXHJcbiAgfVxyXG5cclxuICBnZXRDb250ZXN0U3VibWl0aW9ucyhpZDogc3RyaW5nKSB7XHJcbiAgICByZXR1cm4gdGhpcy5odHRwLmdldCgnaHR0cDovL2xvY2FsaG9zdDozMDAwL2FwaS92MS9zdWJtaXRpb25zL2NvbnRlc3QvJytpZClcclxuICAgICAgLm1hcChyZXMgPT4ge1xyXG4gICAgICAgIC8vY29uc29sZS5sb2coJ3N1Ym1pdGlvbnMgZnJvbSBhcGlzZXJ2aWNlJyk7XHJcbiAgICAgICAgLy9jb25zb2xlLmxvZyhyZXMuanNvbigpKTtcclxuICAgICAgICBjb25zdCBkYXRhID0gcmVzLmpzb24oKS5zdWJtaXRpb25zO1xyXG4gICAgICAgIC8vY29uc29sZS5sb2coJ2FwaVNlcnZpY2UgZGF0YSB2YXJpYWJsZScpO1xyXG4gICAgICAgIC8vY29uc29sZS5sb2coZGF0YSk7XHJcbiAgICAgICAgICBsZXQgc3VibWl0aW9uczogYW55W10gPSBbXTtcclxuICAgICAgICAgIGZvcihsZXQgaT0wOyBpPCBkYXRhLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIC8vbGV0IGRlc2lnbmVyID0gbmV3IFVzZXIoZGF0YVtpXS5lbWFpbCwgZGF0YVtpXS5wYXNzd29yZCwgZGF0YVtpXS51c2VyVHlwZSwgZGF0YVtpXS5maXJzdE5hbWUsIGRhdGFbaV0ubGFzdE5hbWUsIGRhdGFbaV0uY29udGVzdHNXb24sIGRhdGFbaV0uZGVzaWduc0NyZWF0ZWQsIGRhdGFbaV0ucHVibGljRGVzaWducyk7XHJcbiAgICAgICAgICAgIGxldCBzdWJtaXRpb24gPSB7c3VibWl0aW9uVXJsOiBkYXRhW2ldLnN1Ym1pdGlvblVybCwgc3VibWl0aW9uQXV0aG9yOiBkYXRhW2ldLnN1Ym1pdGlvbkF1dGhvciwgc3VibWl0aW9uUmF0aW5nOiBkYXRhW2ldLnN1Ym1pdGlvblJhdGluZywgc3VibWl0aW9uSWQ6IGRhdGFbaV0uc3VibWl0aW9uSWQsIHN0YXR1czogZGF0YVtpXS5zdGF0dXMsIGNvbW1lbnRzOiBkYXRhW2ldLmNvbW1lbnRzfTtcclxuICAgICAgICAgICAgc3VibWl0aW9ucy5wdXNoKHN1Ym1pdGlvbik7XHJcbiAgICAgICAgICB9O1xyXG4gICAgICAgICAgY29uc29sZS5sb2coJ3N1Ym1pdGlvbnMgYWZ0ZXIgbG9vcCcpO1xyXG4gICAgICAgICAgY29uc29sZS5sb2coc3VibWl0aW9ucyk7XHJcbiAgICAgICAgICByZXR1cm4gc3VibWl0aW9ucztcclxuXHJcbiAgICAgICAgLy8gdmFyIHN1Ym1pdGlvbnMgPSByZXMuanNvbigpLnN1Ym1pdGlvbnM7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coc3VibWl0aW9ucyk7XHJcbiAgICAgICAgLy8gcmV0dXJuIHN1Ym1pdGlvbnM7XHJcbiAgICAgIH0pXHJcbiAgICAgIC5jYXRjaChlcnJvciA9PiBPYnNlcnZhYmxlLnRocm93KGVycm9yLmpzb24oKSkpO1xyXG4gIH1cclxuXHJcbiAgZ2V0TXlTdWJtaXRpb25zKGNvbnRlc3RJZDogc3RyaW5nKSB7XHJcbiAgICByZXR1cm4gdGhpcy5odHRwLmdldCgnaHR0cDovL2xvY2FsaG9zdDozMDAwL2FwaS92MS9zdWJtaXRpb25zL2NvbnRlc3QvJytjb250ZXN0SWQpXHJcbiAgICAgIC5tYXAocmVzID0+IHtcclxuICAgICAgICAvL2NvbnNvbGUubG9nKCdNeVN1Ym1pdGlvbnMgZnJvbSBhcGlzZXJ2aWNlJyk7XHJcbiAgICAgICAgLy9jb25zb2xlLmxvZyhyZXMuanNvbigpKTtcclxuICAgICAgICBjb25zdCBkYXRhID0gcmVzLmpzb24oKS5zdWJtaXRpb25zO1xyXG4gICAgICAgIC8vY29uc29sZS5sb2coJ2FwaVNlcnZpY2UgZGF0YSB2YXJpYWJsZSBmb3IgTXlTdWJtaXRpb25zJyk7XHJcbiAgICAgICAgLy9jb25zb2xlLmxvZyhkYXRhKTtcclxuICAgICAgICAgIGxldCB1c2VySWQgPSBzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKCd1c2VySWQnKSA/IHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oJ3VzZXJJZCcpIDogJyc7XHJcbiAgICAgICAgICBsZXQgbXlTdWJtaXRpb25zOiBhbnlbXSA9IFtdO1xyXG4gICAgICAgICAgZm9yKGxldCBpPTA7IGk8IGRhdGEubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgLy9jb25zb2xlLmxvZygnc3VibWl0aW9uIGF1dGhvcicpO1xyXG4gICAgICAgICAgICAvL2NvbnNvbGUubG9nKGRhdGFbaV0uc3VibWl0aW9uQXV0aG9yKTtcclxuICAgICAgICAgICAgaWYgKGRhdGFbaV0uc3VibWl0aW9uQXV0aG9yLl9pZCA9PSB1c2VySWQpIHtcclxuICAgICAgICAgICAgbGV0IG15U3VibWl0aW9uID0ge3N1Ym1pdGlvblVybDogZGF0YVtpXS5zdWJtaXRpb25VcmwsIHN1Ym1pdGlvbkF1dGhvcjogZGF0YVtpXS5zdWJtaXRpb25BdXRob3IsIHN1Ym1pdGlvblJhdGluZzogZGF0YVtpXS5zdWJtaXRpb25SYXRpbmcsIHN1Ym1pdGlvbklkOiBkYXRhW2ldLnN1Ym1pdGlvbklkLCBzdGF0dXM6IGRhdGFbaV0uc3RhdHVzLCBjb21tZW50czogZGF0YVtpXS5jb21tZW50c307XHJcbiAgICAgICAgICAgIC8vY29uc29sZS5sb2coJ015U3VibWl0aW9uIGluIGxvb3AnKTtcclxuICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhteVN1Ym1pdGlvbik7XHJcbiAgICAgICAgICAgIG15U3VibWl0aW9ucy5wdXNoKG15U3VibWl0aW9uKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfTtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKCdNeVN1Ym1pdGlvbnMgYWZ0ZXIgbG9vcCcpO1xyXG4gICAgICAgICAgY29uc29sZS5sb2cobXlTdWJtaXRpb25zKTtcclxuICAgICAgICAgIHJldHVybiBteVN1Ym1pdGlvbnM7XHJcblxyXG4gICAgICAgIC8vIHZhciBzdWJtaXRpb25zID0gcmVzLmpzb24oKS5zdWJtaXRpb25zO1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHN1Ym1pdGlvbnMpO1xyXG4gICAgICAgIC8vIHJldHVybiBzdWJtaXRpb25zO1xyXG4gICAgICB9KVxyXG4gICAgICAuY2F0Y2goZXJyb3IgPT4gT2JzZXJ2YWJsZS50aHJvdyhlcnJvci5qc29uKCkpKTtcclxuICB9XHJcblxyXG4gIGdldFdpbm5lclN1Ym1pdGlvbihjb250ZXN0SWQpIHtcclxuICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0KCdodHRwOi8vbG9jYWxob3N0OjMwMDAvYXBpL3YxL2NvbnRlc3QvJyArIGNvbnRlc3RJZCArICcvd2lubmVyJylcclxuICAgICAgLm1hcChyZXMgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdERUJVRyBzZXJ2aWNlIHJlcy5qc29uKCknKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhyZXMuanNvbigpKTtcclxuICAgICAgICByZXR1cm4gcmVzLmpzb24oKS5vYmo7XHJcbiAgICAgIH0pXHJcbiAgICAgIC5jYXRjaChlcnJvciA9PiBPYnNlcnZhYmxlLnRocm93KGVycm9yLmpzb24oKSkpOyBcclxuICB9XHJcblxyXG4gIGdldFVzZXJJbmZvKHVzZXJJZDogc3RyaW5nKSB7XHJcbiAgICBpZighdXNlcklkKSB7XHJcbiAgICAgIHJldHVybiBPYnNlcnZhYmxlLmVtcHR5KCk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdGhpcy5odHRwLmdldCgnaHR0cDovL2xvY2FsaG9zdDozMDAwL2FwaS92MS91c2Vycy8nK3VzZXJJZClcclxuICAgIC5tYXAocmVzID0+IHtcclxuICAgICAgY29uc3QgdXNlciA9IHJlcy5qc29uKCkudXNlcjtcclxuICAgICAgY29uc29sZS5sb2coJ2dldFVzZXJJbmZvIHVzZXIgdmFyJyk7XHJcbiAgICAgIGNvbnNvbGUubG9nKHVzZXIpO1xyXG4gICAgICByZXR1cm4gdXNlcjtcclxuICAgIH0pXHJcbiAgICAuY2F0Y2goZXJyb3IgPT4gT2JzZXJ2YWJsZS50aHJvdyhlcnJvci5qc29uKCkpKTtcclxuICB9XHJcblxyXG4gIGFkZENvbW1lbnQob2JqOmFueSwgY29udGVzdElkOiBzdHJpbmcpIHtcclxuICAgIGNvbnN0IGJvZHkgPSBKU09OLnN0cmluZ2lmeShvYmopO1xyXG4gICAgY29uc3QgaGVhZGVycyA9IG5ldyBIZWFkZXJzKHsnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nfSk7XHJcbiAgICByZXR1cm4gdGhpcy5odHRwLnBhdGNoKCdodHRwOi8vbG9jYWxob3N0OjMwMDAvYXBpL3YxL2NvbnRlc3QvJyArIGNvbnRlc3RJZCwgYm9keSwge2hlYWRlcnM6IGhlYWRlcnN9KVxyXG4gICAgLm1hcChyZXMgPT4ge1xyXG4gICAgICBjb25zdCBjb21tZW50cyA9IHJlcy5qc29uKCkub2JqLmNvbW1lbnRzO1xyXG4gICAgICBjb25zb2xlLmxvZygnYXBpIHNlcnZpY2UgYWRkQ29tbWVudCBjb21tZW50cyB2YXInKTtcclxuICAgICAgY29uc29sZS5sb2coY29tbWVudHMpO1xyXG4gICAgICByZXR1cm4gY29tbWVudHM7XHJcbiAgICB9KVxyXG4gICAgLmNhdGNoKGVycm9yID0+IE9ic2VydmFibGUudGhyb3coZXJyb3IuanNvbigpKSk7XHJcbiAgfVxyXG5cclxuICBhZGRTdWJtaXRpb25Db21tZW50KG9iajphbnksIGNvbnRlc3RJZDogc3RyaW5nLCBzdWJtaXRpb25JZDogbnVtYmVyKSB7XHJcbiAgICBjb25zdCBib2R5ID0gSlNPTi5zdHJpbmdpZnkob2JqKTtcclxuICAgIGNvbnN0IGhlYWRlcnMgPSBuZXcgSGVhZGVycyh7J0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ30pO1xyXG4gICAgcmV0dXJuIHRoaXMuaHR0cC5wYXRjaCgnaHR0cDovL2xvY2FsaG9zdDozMDAwL2FwaS92MS9jb250ZXN0LycgKyBjb250ZXN0SWQgKyAnL3N1Ym1pdGlvbi8nICsgc3VibWl0aW9uSWQgKyAnL2NvbW1lbnQnLCBib2R5LCB7aGVhZGVyczogaGVhZGVyc30pXHJcbiAgICAubWFwKHJlcyA9PiB7XHJcbiAgICAgIGNvbnN0IGNvbnRlc3QgPSByZXMuanNvbigpLm9iajtcclxuICAgICAgY29uc29sZS5sb2coJ2FwaSBzZXJ2aWNlIGFkZENvbW1lbnQgY29udGVzdCB2YXInKTtcclxuICAgICAgY29uc29sZS5sb2coY29udGVzdCk7XHJcbiAgICAgIHJldHVybiBjb250ZXN0O1xyXG4gICAgfSlcclxuICAgIC5jYXRjaChlcnJvciA9PiBPYnNlcnZhYmxlLnRocm93KGVycm9yLmpzb24oKSkpO1xyXG4gIH1cclxuXHJcbiAgZ2V0Q29tbWVudHMoY29udGVzdElkOiBzdHJpbmcpIHtcclxuICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0KCdodHRwOi8vbG9jYWxob3N0OjMwMDAvYXBpL3YxL2NvbnRlc3QvJyArIGNvbnRlc3RJZCArICcvY29tbWVudHMnKVxyXG4gICAgLm1hcChyZXMgPT4ge1xyXG4gICAgICBjb25zdCBjb21tZW50cyA9IHJlcy5qc29uKCkub2JqLmNvbW1lbnRzO1xyXG4gICAgICBjb25zb2xlLmxvZygnYXBpIHNlcnZpY2UgZ2V0Q29tbWVudHMgY29tbWVudHMgdmFyJyk7XHJcbiAgICAgIGNvbnNvbGUubG9nKGNvbW1lbnRzKTtcclxuICAgICAgcmV0dXJuIGNvbW1lbnRzO1xyXG4gICAgfSlcclxuICAgIC5jYXRjaChlcnJvciA9PiBPYnNlcnZhYmxlLnRocm93KGVycm9yLmpzb24oKSkpO1xyXG4gIH1cclxuXHJcbiAgZ2V0U3VibWl0aW9uQ29tbWVudHMoY29udGVzdElkOiBzdHJpbmcsIHN1Ym1pdGlvbklkOiBudW1iZXIpIHtcclxuICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0KCdodHRwOi8vbG9jYWxob3N0OjMwMDAvYXBpL3YxL2NvbnRlc3QvJyArIGNvbnRlc3RJZCArICcvc3VibWl0aW9uLycrIHN1Ym1pdGlvbklkICsgJy9jb21tZW50cycpXHJcbiAgICAubWFwKHJlcyA9PiB7XHJcbiAgICAgIGNvbnNvbGUubG9nKCdSRVMgSlNPTicpO1xyXG4gICAgICBjb25zb2xlLmxvZyhyZXMuanNvbigpKTtcclxuICAgICAgY29uc3QgY29tbWVudHMgPSByZXMuanNvbigpLm9iajtcclxuICAgICAgY29uc29sZS5sb2coJ2FwaSBzZXJ2aWNlIGdldENvbW1lbnRzIGNvbW1lbnRzIHZhcicpO1xyXG4gICAgICBjb25zb2xlLmxvZyhjb21tZW50cyk7XHJcbiAgICAgIHJldHVybiBjb21tZW50cztcclxuICAgIH0pXHJcbiAgICAuY2F0Y2goZXJyb3IgPT4gT2JzZXJ2YWJsZS50aHJvdyhlcnJvci5qc29uKCkpKTtcclxuICB9XHJcblxyXG4gIHNlYXJjaFVzZXJzKHNlYXJjaFN0cikge1xyXG4gICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQoJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9hcGkvdjEvc2VhcmNoLycgKyBzZWFyY2hTdHIpXHJcbiAgICAgIC5tYXAocmVzID0+IHJlcy5qc29uKCkub2JqKVxyXG4gICAgICAuY2F0Y2goZXJyb3IgPT4gT2JzZXJ2YWJsZS50aHJvdyhlcnJvci5qc29uKCkpKTtcclxuICB9XHJcblxyXG4gIHNlbmRNZXNzYWdlKHJlY2lwaWVudCwgdG9waWMsIG1lc3NhZ2UsIHNlbmRlcikge1xyXG4gICAgLy92YXIgc2VuZGVyID0gc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbSgndXNlcklkJyk7XHJcbiAgICB2YXIgb2JqID0ge21lc3NhZ2U6IG1lc3NhZ2UsIHJlY2lwaWVudDogcmVjaXBpZW50LCB0b3BpYzogdG9waWMsIHNlbmRlcjogc2VuZGVyfTtcclxuICAgIGNvbnN0IGJvZHkgPSBKU09OLnN0cmluZ2lmeShvYmopO1xyXG4gICAgY29uc3QgaGVhZGVycyA9IG5ldyBIZWFkZXJzKHsnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nfSk7XHJcbiAgICByZXR1cm4gdGhpcy5odHRwLnBhdGNoKCdodHRwOi8vbG9jYWxob3N0OjMwMDAvYXBpL3YxL21lc3NhZ2UvJyArIHJlY2lwaWVudCwgYm9keSwge2hlYWRlcnM6IGhlYWRlcnN9KVxyXG4gICAgICAubWFwKHJlcyA9PiB7XHJcbiAgICAgICAgICByZXR1cm4gcmVzLmpzb24oKS5vYmo7XHJcbiAgICAgIH0pXHJcbiAgICAgIC5jYXRjaChlcnJvciA9PiBPYnNlcnZhYmxlLnRocm93KGVycm9yLmpzb24oKSkpO1xyXG4gIH1cclxuXHJcbiAgZ2V0TWVzc2FnZXModXNlcklkOiBzdHJpbmcpIHtcclxuICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0KCdodHRwOi8vbG9jYWxob3N0OjMwMDAvYXBpL3YxL21lc3NhZ2VzLycgKyB1c2VySWQpXHJcbiAgICAgIC5tYXAocmVzID0+IHtcclxuICAgICAgICByZXR1cm4gcmVzLmpzb24oKS5vYmoubWVzc2FnZXM7IC8vbm8gZmlsdGVyaW5nXHJcbiAgICAgIH0pXHJcbiAgICAgIC5jYXRjaChlcnJvciA9PiBPYnNlcnZhYmxlLnRocm93KGVycm9yLmpzb24oKSkpO1xyXG4gIH1cclxuXHJcbiAgZGVsZXRlTWVzc2FnZShtZXNzYWdlSWQ6IG51bWJlcikge1xyXG4gICAgdmFyIHVzZXJJZCA9IHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oJ3VzZXJJZCcpO1xyXG4gICAgcmV0dXJuIHRoaXMuaHR0cC5kZWxldGUoJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9hcGkvdjEvbWVzc2FnZS8nICsgdXNlcklkICsgJy8nICsgbWVzc2FnZUlkKVxyXG4gICAgLm1hcChyZXMgPT4ge1xyXG4gICAgICByZXR1cm4gcmVzLmpzb24oKS5vYmoubWVzc2FnZXM7XHJcbiAgICB9KVxyXG4gICAgLmNhdGNoKGVycm9yID0+IE9ic2VydmFibGUudGhyb3coZXJyb3IuanNvbigpKSk7XHJcbiAgfVxyXG5cclxuICBjaGFuZ2VNZXNzYWdlU3RhdHVzKHVzZXJJZCwgbWVzc2FnZUlkKSB7XHJcbiAgICBjb25zdCBib2R5ID0gSlNPTi5zdHJpbmdpZnkoe3N0YXR1czogJ1BlcsW+acWrcsSXdGEnfSk7XHJcbiAgICBjb25zdCBoZWFkZXJzID0gbmV3IEhlYWRlcnMoeydDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbid9KTtcclxuICAgIHJldHVybiB0aGlzLmh0dHAucGF0Y2goJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9hcGkvdjEvbWVzc2FnZS8nICsgdXNlcklkICsgJy8nICsgbWVzc2FnZUlkLCBib2R5LCB7aGVhZGVyczogaGVhZGVyc30pXHJcbiAgICAgIC5tYXAocmVzID0+IHtcclxuICAgICAgICByZXR1cm4gcmVzLmpzb24oKTtcclxuICAgICAgfSlcclxuICAgICAgLmNhdGNoKGVycm9yID0+IE9ic2VydmFibGUudGhyb3coZXJyb3IuanNvbigpKSk7XHJcbiAgfVxyXG5cclxuICBzZWxlY3RXaW5uZXIoY29udGVzdElkTmFtZSwgc3VibWl0aW9uSWQsIGNvbnRlc3RJZCwgd2lubmVySWQsIHN1Ym1pdGlvbikge1xyXG4gICAgY29uc3QgYm9keSA9IEpTT04uc3RyaW5naWZ5KHtpZE5hbWU6IGNvbnRlc3RJZE5hbWUsIHN1Ym1pdGlvbklkOiBzdWJtaXRpb25JZCwgY29udGVzdElkOiBjb250ZXN0SWQsIHdpbm5lcklkOiB3aW5uZXJJZCwgc3VibWl0aW9uOiBzdWJtaXRpb259KTtcclxuICAgIGNvbnN0IGhlYWRlcnMgPSBuZXcgSGVhZGVycyh7J0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ30pO1xyXG4gICAgcmV0dXJuIHRoaXMuaHR0cC5wYXRjaCgnaHR0cDovL2xvY2FsaG9zdDozMDAwL2FwaS92MS9jb250ZXN0L3dpbm5lci8nICsgY29udGVzdElkTmFtZSArICcvJyArIHN1Ym1pdGlvbklkLCBib2R5LCB7aGVhZGVyczogaGVhZGVyc30pXHJcbiAgICAgIC5tYXAocmVzID0+IHtcclxuICAgICAgICByZXR1cm4gcmVzLmpzb24oKTtcclxuICAgICAgfSlcclxuICAgICAgLmNhdGNoKGVycm9yID0+IE9ic2VydmFibGUudGhyb3coZXJyb3IuanNvbigpKSk7XHJcbiAgfVxyXG5cclxuICAvLyBhZGRXaW5uaW5nQ29udGVzdChjb250ZXN0SWQsIHdpbm5lcklkKSB7XHJcbiAgLy8gICBjb25zb2xlLmxvZygnREVCVUcgYXBpc2VydmljZSBwYXJhbXMnKTtcclxuICAvLyAgIGNvbnNvbGUubG9nKCdjb250ZXN0SWQ6ICcgKyBjb250ZXN0SWQpO1xyXG4gIC8vICAgY29uc29sZS5sb2coJ3dpbm5lcklkOiAnICsgd2lubmVySWQpO1xyXG4gIC8vICAgY29uc3QgYm9keSA9IEpTT04uc3RyaW5naWZ5KHt3aW5uZXJJZDogd2lubmVySWQsIGNvbnRlc3RJZDogY29udGVzdElkfSk7XHJcbiAgLy8gICBjb25zdCBoZWFkZXJzID0gbmV3IEhlYWRlcnMoeydDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbid9KTtcclxuICAvLyAgIHJldHVybiB0aGlzLmh0dHAucGF0Y2goJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9hcGkvdjEvY29udGVzdC93aW5uZXIvYWRkLycgKyBjb250ZXN0SWQgKyBcIi9cIiArIHdpbm5lcklkLCBib2R5LCB7aGVhZGVyczogaGVhZGVyc30pXHJcbiAgLy8gICAgIC5tYXAocmVzID0+IHtcclxuICAvLyAgICAgICByZXR1cm4gcmVzLmpzb24oKTtcclxuICAvLyAgICAgfSlcclxuICAvLyAgICAgLmNhdGNoKGVycm9yID0+IE9ic2VydmFibGUudGhyb3coZXJyb3IuanNvbigpKSk7XHJcbiAgLy8gfVxyXG5cclxufSJdfQ==
