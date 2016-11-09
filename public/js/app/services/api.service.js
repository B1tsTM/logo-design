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
            console.log('submitions from apiservice');
            console.log(res.json());
            var data = res.json().submitions;
            console.log('apiService data variable');
            console.log(data);
            var submitions = [];
            for (var i = 0; i < data.length; i++) {
                //let designer = new User(data[i].email, data[i].password, data[i].userType, data[i].firstName, data[i].lastName, data[i].contestsWon, data[i].designsCreated, data[i].publicDesigns);
                var submition = { submitionUrl: data[i].submitionUrl, submitionAuthor: data[i].submitionAuthor, submitionRating: data[i].submitionRating, submitionId: data[i].submitionId };
                console.log('submition in loop');
                console.log(submition);
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
            console.log('MySubmitions from apiservice');
            console.log(res.json());
            var data = res.json().submitions;
            console.log('apiService data variable for MySubmitions');
            console.log(data);
            var userId = localStorage.getItem('userId') ? localStorage.getItem('userId') : '';
            var mySubmitions = [];
            for (var i = 0; i < data.length; i++) {
                console.log('submition author');
                console.log(data[i].submitionAuthor);
                if (data[i].submitionAuthor._id == userId) {
                    var mySubmition = { submitionUrl: data[i].submitionUrl, submitionAuthor: data[i].submitionAuthor, submitionRating: data[i].submitionRating, sumbitionId: data[i].submitionId };
                    console.log('MySubmition in loop');
                    console.log(mySubmition);
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
    ApiService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], ApiService);
    return ApiService;
}());
exports.ApiService = ApiService;

//# sourceMappingURL=data:application/json;charset=utf8;base64,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QUFDLFlBQVksQ0FBQztZQUV0QiwwQ0FBMEM7WUFDMUMsMkJBQTJCO1lBQzNCLHFCQUFxQjtRQUN2QixDQUFDLENBQUM7YUFDRCxLQUFLLENBQUMsVUFBQSxLQUFLLElBQUksT0FBQSx1QkFBVSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLENBQUMsRUFBOUIsQ0FBOEIsQ0FBQyxDQUFDO0lBQ3BELENBQUM7SUFFRCxnQ0FBVyxHQUFYLFVBQVksTUFBYztRQUN4QixNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMscUNBQXFDLEdBQUMsTUFBTSxDQUFDO2FBQ2pFLEdBQUcsQ0FBQyxVQUFBLEdBQUc7WUFDTixJQUFNLElBQUksR0FBRyxHQUFHLENBQUMsSUFBSSxFQUFFLENBQUMsSUFBSSxDQUFDO1lBQzdCLE9BQU8sQ0FBQyxHQUFHLENBQUMsc0JBQXNCLENBQUMsQ0FBQztZQUNwQyxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ2xCLE1BQU0sQ0FBQyxJQUFJLENBQUM7UUFDZCxDQUFDLENBQUM7YUFDRCxLQUFLLENBQUMsVUFBQSxLQUFLLElBQUksT0FBQSx1QkFBVSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLENBQUMsRUFBOUIsQ0FBOEIsQ0FBQyxDQUFDO0lBQ2xELENBQUM7SUF6RUg7UUFBQyxpQkFBVSxFQUFFOztrQkFBQTtJQTJFYixpQkFBQztBQUFELENBMUVBLEFBMEVDLElBQUE7QUExRVksa0JBQVUsYUEwRXRCLENBQUEiLCJmaWxlIjoic2VydmljZXMvYXBpLnNlcnZpY2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlLCBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQ29udGVzdCB9IGZyb20gJy4uL21vZGVscy9jb250ZXN0JztcclxuaW1wb3J0IHsgVXNlciB9IGZyb20gJy4uL21vZGVscy91c2VyJztcclxuaW1wb3J0IHsgSHR0cCwgSGVhZGVycyB9IGZyb20gJ0Bhbmd1bGFyL2h0dHAnO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcy9PYnNlcnZhYmxlJztcclxuaW1wb3J0ICdyeGpzL1J4JztcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIEFwaVNlcnZpY2Uge1xyXG4gIGNvbnRlc3RzID0gW107XHJcbiAgZGVzaWduZXJzID0gW107XHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBodHRwOiBIdHRwKSB7IH1cclxuXHJcbiAgZ2V0Q29udGVzdFN1Ym1pdGlvbnMoaWQ6IHN0cmluZykge1xyXG4gICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQoJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9hcGkvdjEvc3VibWl0aW9ucy9jb250ZXN0LycraWQpXHJcbiAgICAgIC5tYXAocmVzID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZygnc3VibWl0aW9ucyBmcm9tIGFwaXNlcnZpY2UnKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhyZXMuanNvbigpKTtcclxuICAgICAgICBjb25zdCBkYXRhID0gcmVzLmpzb24oKS5zdWJtaXRpb25zO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdhcGlTZXJ2aWNlIGRhdGEgdmFyaWFibGUnKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhkYXRhKTtcclxuICAgICAgICAgIGxldCBzdWJtaXRpb25zOiBhbnlbXSA9IFtdO1xyXG4gICAgICAgICAgZm9yKGxldCBpPTA7IGk8IGRhdGEubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgLy9sZXQgZGVzaWduZXIgPSBuZXcgVXNlcihkYXRhW2ldLmVtYWlsLCBkYXRhW2ldLnBhc3N3b3JkLCBkYXRhW2ldLnVzZXJUeXBlLCBkYXRhW2ldLmZpcnN0TmFtZSwgZGF0YVtpXS5sYXN0TmFtZSwgZGF0YVtpXS5jb250ZXN0c1dvbiwgZGF0YVtpXS5kZXNpZ25zQ3JlYXRlZCwgZGF0YVtpXS5wdWJsaWNEZXNpZ25zKTtcclxuICAgICAgICAgICAgbGV0IHN1Ym1pdGlvbiA9IHtzdWJtaXRpb25Vcmw6IGRhdGFbaV0uc3VibWl0aW9uVXJsLCBzdWJtaXRpb25BdXRob3I6IGRhdGFbaV0uc3VibWl0aW9uQXV0aG9yLCBzdWJtaXRpb25SYXRpbmc6IGRhdGFbaV0uc3VibWl0aW9uUmF0aW5nLCBzdWJtaXRpb25JZDogZGF0YVtpXS5zdWJtaXRpb25JZH07XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdzdWJtaXRpb24gaW4gbG9vcCcpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhzdWJtaXRpb24pO1xyXG4gICAgICAgICAgICBzdWJtaXRpb25zLnB1c2goc3VibWl0aW9uKTtcclxuICAgICAgICAgIH07XHJcbiAgICAgICAgICBjb25zb2xlLmxvZygnc3VibWl0aW9ucyBhZnRlciBsb29wJyk7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhzdWJtaXRpb25zKTtcclxuICAgICAgICAgIHJldHVybiBzdWJtaXRpb25zO1xyXG5cclxuICAgICAgICAvLyB2YXIgc3VibWl0aW9ucyA9IHJlcy5qc29uKCkuc3VibWl0aW9ucztcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhzdWJtaXRpb25zKTtcclxuICAgICAgICAvLyByZXR1cm4gc3VibWl0aW9ucztcclxuICAgICAgfSlcclxuICAgICAgLmNhdGNoKGVycm9yID0+IE9ic2VydmFibGUudGhyb3coZXJyb3IuanNvbigpKSk7XHJcbiAgfVxyXG5cclxuICBnZXRNeVN1Ym1pdGlvbnMoY29udGVzdElkOiBzdHJpbmcpIHtcclxuICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0KCdodHRwOi8vbG9jYWxob3N0OjMwMDAvYXBpL3YxL3N1Ym1pdGlvbnMvY29udGVzdC8nK2NvbnRlc3RJZClcclxuICAgICAgLm1hcChyZXMgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdNeVN1Ym1pdGlvbnMgZnJvbSBhcGlzZXJ2aWNlJyk7XHJcbiAgICAgICAgY29uc29sZS5sb2cocmVzLmpzb24oKSk7XHJcbiAgICAgICAgY29uc3QgZGF0YSA9IHJlcy5qc29uKCkuc3VibWl0aW9ucztcclxuICAgICAgICBjb25zb2xlLmxvZygnYXBpU2VydmljZSBkYXRhIHZhcmlhYmxlIGZvciBNeVN1Ym1pdGlvbnMnKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhkYXRhKTtcclxuICAgICAgICAgIGxldCB1c2VySWQgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndXNlcklkJykgPyBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndXNlcklkJykgOiAnJztcclxuICAgICAgICAgIGxldCBteVN1Ym1pdGlvbnM6IGFueVtdID0gW107XHJcbiAgICAgICAgICBmb3IobGV0IGk9MDsgaTwgZGF0YS5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnc3VibWl0aW9uIGF1dGhvcicpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhkYXRhW2ldLnN1Ym1pdGlvbkF1dGhvcik7XHJcbiAgICAgICAgICAgIGlmIChkYXRhW2ldLnN1Ym1pdGlvbkF1dGhvci5faWQgPT0gdXNlcklkKSB7XHJcbiAgICAgICAgICAgIGxldCBteVN1Ym1pdGlvbiA9IHtzdWJtaXRpb25Vcmw6IGRhdGFbaV0uc3VibWl0aW9uVXJsLCBzdWJtaXRpb25BdXRob3I6IGRhdGFbaV0uc3VibWl0aW9uQXV0aG9yLCBzdWJtaXRpb25SYXRpbmc6IGRhdGFbaV0uc3VibWl0aW9uUmF0aW5nLCBzdW1iaXRpb25JZDogZGF0YVtpXS5zdWJtaXRpb25JZH07XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdNeVN1Ym1pdGlvbiBpbiBsb29wJyk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKG15U3VibWl0aW9uKTtcclxuICAgICAgICAgICAgbXlTdWJtaXRpb25zLnB1c2gobXlTdWJtaXRpb24pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9O1xyXG4gICAgICAgICAgY29uc29sZS5sb2coJ015U3VibWl0aW9ucyBhZnRlciBsb29wJyk7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhteVN1Ym1pdGlvbnMpO1xyXG4gICAgICAgICAgcmV0dXJuIG15U3VibWl0aW9ucztcclxuXHJcbiAgICAgICAgLy8gdmFyIHN1Ym1pdGlvbnMgPSByZXMuanNvbigpLnN1Ym1pdGlvbnM7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coc3VibWl0aW9ucyk7XHJcbiAgICAgICAgLy8gcmV0dXJuIHN1Ym1pdGlvbnM7XHJcbiAgICAgIH0pXHJcbiAgICAgIC5jYXRjaChlcnJvciA9PiBPYnNlcnZhYmxlLnRocm93KGVycm9yLmpzb24oKSkpO1xyXG4gIH1cclxuXHJcbiAgZ2V0VXNlckluZm8odXNlcklkOiBzdHJpbmcpIHtcclxuICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0KCdodHRwOi8vbG9jYWxob3N0OjMwMDAvYXBpL3YxL3VzZXJzLycrdXNlcklkKVxyXG4gICAgLm1hcChyZXMgPT4ge1xyXG4gICAgICBjb25zdCB1c2VyID0gcmVzLmpzb24oKS51c2VyO1xyXG4gICAgICBjb25zb2xlLmxvZygnZ2V0VXNlckluZm8gdXNlciB2YXInKTtcclxuICAgICAgY29uc29sZS5sb2codXNlcik7XHJcbiAgICAgIHJldHVybiB1c2VyO1xyXG4gICAgfSlcclxuICAgIC5jYXRjaChlcnJvciA9PiBPYnNlcnZhYmxlLnRocm93KGVycm9yLmpzb24oKSkpO1xyXG4gIH1cclxuXHJcbn0iXX0=
