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
var DesignersService = (function () {
    function DesignersService(http) {
        this.http = http;
        this.contests = [];
        this.designers = [];
    }
    DesignersService.prototype.getDesigners = function () {
        return this.http.get('http://localhost:3000/api/v1/dizaineriai')
            .map(function (res) {
            console.log(res.json());
            var data = res.json().obj;
            // let objs: any[] = [];
            // for(let i=0; i< data.length; i++) {
            //   let designer = new User(data[i].nickName, data[i].password, data[i].userType, data[i].firstName, data[i].lastName, data[i].email, data[i].designsCreated, data[i].publicDesigns);
            //   objs.push(designer);
            // };
            // return objs;
            return data;
        })
            .catch(function (error) { return Observable_1.Observable.throw(error.json()); });
    };
    DesignersService.prototype.getFilteredDesigners = function (searchString) {
        if (searchString.match(/^\s+$/) || !searchString) {
            return this.http.get('http://localhost:3000/api/v1/dizaineriai')
                .map(function (res) {
                var data = res.json().obj;
                return data;
            })
                .catch(function (error) { return Observable_1.Observable.throw(error.json()); });
        }
        else {
            return this.http.get('http://localhost:3000/api/v1/dizaineriai/filter/' + searchString)
                .map(function (res) {
                console.log(res.json());
                return res.json().obj;
            })
                .catch(function (error) { return Observable_1.Observable.throw(error.json()); });
        }
    };
    DesignersService.prototype.getIndividualDesigner = function (nickname) {
        return this.http.get('http://localhost:3000/api/v1/dizaineriai/' + nickname)
            .map(function (res) {
            console.log(res.json());
            var data = res.json().obj;
            //let contest = new Contest(data.name, data.uniqueId, data.idName, data._id, data.category, data.description, data.award, data.status, data.submitionCount, data.daysRemaining, data.startDate, data.endDate, data.submitions, data.publisher);
            //return contest;
            return data;
        })
            .catch(function (error) { return Observable_1.Observable.throw(error.json()); });
    };
    DesignersService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], DesignersService);
    return DesignersService;
}());
exports.DesignersService = DesignersService;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlcnZpY2VzL2Rlc2lnbmVycy5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBMkIsZUFBZSxDQUFDLENBQUE7QUFHM0MscUJBQThCLGVBQWUsQ0FBQyxDQUFBO0FBQzlDLDJCQUEyQixpQkFBaUIsQ0FBQyxDQUFBO0FBQzdDLFFBQU8sU0FBUyxDQUFDLENBQUE7QUFHakI7SUFHRSwwQkFBb0IsSUFBVTtRQUFWLFNBQUksR0FBSixJQUFJLENBQU07UUFGOUIsYUFBUSxHQUFHLEVBQUUsQ0FBQztRQUNkLGNBQVMsR0FBRyxFQUFFLENBQUM7SUFDbUIsQ0FBQztJQUVuQyx1Q0FBWSxHQUFaO1FBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLDBDQUEwQyxDQUFDO2FBQzdELEdBQUcsQ0FBQyxVQUFBLEdBQUc7WUFDTixPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDO1lBQ3hCLElBQU0sSUFBSSxHQUFHLEdBQUcsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxHQUFHLENBQUM7WUFDNUIsd0JBQXdCO1lBQ3hCLHNDQUFzQztZQUN0QyxzTEFBc0w7WUFDdEwseUJBQXlCO1lBQ3pCLEtBQUs7WUFDTCxlQUFlO1lBQ2YsTUFBTSxDQUFDLElBQUksQ0FBQztRQUNkLENBQUMsQ0FBQzthQUNELEtBQUssQ0FBQyxVQUFBLEtBQUssSUFBSSxPQUFBLHVCQUFVLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsQ0FBQyxFQUE5QixDQUE4QixDQUFDLENBQUM7SUFDcEQsQ0FBQztJQUVELCtDQUFvQixHQUFwQixVQUFxQixZQUFvQjtRQUN6QyxFQUFFLENBQUEsQ0FBQyxZQUFZLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQztZQUNoRCxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsMENBQTBDLENBQUM7aUJBQy9ELEdBQUcsQ0FBQyxVQUFBLEdBQUc7Z0JBQ04sSUFBTSxJQUFJLEdBQUcsR0FBRyxDQUFDLElBQUksRUFBRSxDQUFDLEdBQUcsQ0FBQztnQkFDNUIsTUFBTSxDQUFDLElBQUksQ0FBQztZQUNkLENBQUMsQ0FBQztpQkFDRCxLQUFLLENBQUMsVUFBQSxLQUFLLElBQUksT0FBQSx1QkFBVSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLENBQUMsRUFBOUIsQ0FBOEIsQ0FBQyxDQUFDO1FBQ2xELENBQUM7UUFBQyxJQUFJLENBQUMsQ0FBQztZQUNSLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxrREFBa0QsR0FBRyxZQUFZLENBQUM7aUJBQ3BGLEdBQUcsQ0FBQyxVQUFBLEdBQUc7Z0JBQ04sT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQztnQkFDeEIsTUFBTSxDQUFDLEdBQUcsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxHQUFHLENBQUM7WUFDeEIsQ0FBQyxDQUFDO2lCQUNELEtBQUssQ0FBQyxVQUFBLEtBQUssSUFBSSxPQUFBLHVCQUFVLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsQ0FBQyxFQUE5QixDQUE4QixDQUFDLENBQUM7UUFDaEQsQ0FBQztJQUNMLENBQUM7SUFFQSxnREFBcUIsR0FBckIsVUFBc0IsUUFBYTtRQUNsQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsMkNBQTJDLEdBQUcsUUFBUSxDQUFDO2FBQ3pFLEdBQUcsQ0FBQyxVQUFBLEdBQUc7WUFDTixPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDO1lBQ3hCLElBQU0sSUFBSSxHQUFHLEdBQUcsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxHQUFHLENBQUM7WUFDNUIsK09BQStPO1lBQy9PLGlCQUFpQjtZQUNqQixNQUFNLENBQUMsSUFBSSxDQUFDO1FBQ2QsQ0FBQyxDQUFDO2FBQ0QsS0FBSyxDQUFDLFVBQUEsS0FBSyxJQUFJLE9BQUEsdUJBQVUsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxDQUFDLEVBQTlCLENBQThCLENBQUMsQ0FBQztJQUNwRCxDQUFDO0lBbERIO1FBQUMsaUJBQVUsRUFBRTs7d0JBQUE7SUFvRGIsdUJBQUM7QUFBRCxDQW5EQSxBQW1EQyxJQUFBO0FBbkRZLHdCQUFnQixtQkFtRDVCLENBQUEiLCJmaWxlIjoic2VydmljZXMvZGVzaWduZXJzLnNlcnZpY2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IENvbnRlc3QgfSBmcm9tICcuLi9tb2RlbHMvY29udGVzdCc7XHJcbmltcG9ydCB7IFVzZXIgfSBmcm9tICcuLi9tb2RlbHMvdXNlcic7XHJcbmltcG9ydCB7IEh0dHAsIEhlYWRlcnMgfSBmcm9tICdAYW5ndWxhci9odHRwJztcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMvT2JzZXJ2YWJsZSc7XHJcbmltcG9ydCAncnhqcy9SeCc7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBEZXNpZ25lcnNTZXJ2aWNlIHtcclxuICBjb250ZXN0cyA9IFtdO1xyXG4gIGRlc2lnbmVycyA9IFtdO1xyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgaHR0cDogSHR0cCkgeyB9XHJcblxyXG4gIGdldERlc2lnbmVycygpIHtcclxuICAgICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQoJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9hcGkvdjEvZGl6YWluZXJpYWknKVxyXG4gICAgICAgIC5tYXAocmVzID0+IHtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKHJlcy5qc29uKCkpO1xyXG4gICAgICAgICAgY29uc3QgZGF0YSA9IHJlcy5qc29uKCkub2JqO1xyXG4gICAgICAgICAgLy8gbGV0IG9ianM6IGFueVtdID0gW107XHJcbiAgICAgICAgICAvLyBmb3IobGV0IGk9MDsgaTwgZGF0YS5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgLy8gICBsZXQgZGVzaWduZXIgPSBuZXcgVXNlcihkYXRhW2ldLm5pY2tOYW1lLCBkYXRhW2ldLnBhc3N3b3JkLCBkYXRhW2ldLnVzZXJUeXBlLCBkYXRhW2ldLmZpcnN0TmFtZSwgZGF0YVtpXS5sYXN0TmFtZSwgZGF0YVtpXS5lbWFpbCwgZGF0YVtpXS5kZXNpZ25zQ3JlYXRlZCwgZGF0YVtpXS5wdWJsaWNEZXNpZ25zKTtcclxuICAgICAgICAgIC8vICAgb2Jqcy5wdXNoKGRlc2lnbmVyKTtcclxuICAgICAgICAgIC8vIH07XHJcbiAgICAgICAgICAvLyByZXR1cm4gb2JqcztcclxuICAgICAgICAgIHJldHVybiBkYXRhO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLmNhdGNoKGVycm9yID0+IE9ic2VydmFibGUudGhyb3coZXJyb3IuanNvbigpKSk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0RmlsdGVyZWREZXNpZ25lcnMoc2VhcmNoU3RyaW5nOiBzdHJpbmcpIHtcclxuICAgIGlmKHNlYXJjaFN0cmluZy5tYXRjaCgvXlxccyskLykgfHwgIXNlYXJjaFN0cmluZykgeyAvLyBJZiBhbGwgd2hpdGVzcGFjZSBvciBlbXB0eSBzdHJpbmdcclxuICAgICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQoJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9hcGkvdjEvZGl6YWluZXJpYWknKVxyXG4gICAgICAubWFwKHJlcyA9PiB7XHJcbiAgICAgICAgY29uc3QgZGF0YSA9IHJlcy5qc29uKCkub2JqO1xyXG4gICAgICAgIHJldHVybiBkYXRhO1xyXG4gICAgICB9KVxyXG4gICAgICAuY2F0Y2goZXJyb3IgPT4gT2JzZXJ2YWJsZS50aHJvdyhlcnJvci5qc29uKCkpKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICByZXR1cm4gdGhpcy5odHRwLmdldCgnaHR0cDovL2xvY2FsaG9zdDozMDAwL2FwaS92MS9kaXphaW5lcmlhaS9maWx0ZXIvJyArIHNlYXJjaFN0cmluZylcclxuICAgICAgLm1hcChyZXMgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHJlcy5qc29uKCkpO1xyXG4gICAgICAgIHJldHVybiByZXMuanNvbigpLm9iajtcclxuICAgICAgfSlcclxuICAgICAgLmNhdGNoKGVycm9yID0+IE9ic2VydmFibGUudGhyb3coZXJyb3IuanNvbigpKSk7XHJcbiAgICAgIH1cclxuICB9XHJcblxyXG4gICBnZXRJbmRpdmlkdWFsRGVzaWduZXIobmlja25hbWU6IGFueSkge1xyXG4gICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQoJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9hcGkvdjEvZGl6YWluZXJpYWkvJyArIG5pY2tuYW1lKVxyXG4gICAgICAubWFwKHJlcyA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2cocmVzLmpzb24oKSk7XHJcbiAgICAgICAgY29uc3QgZGF0YSA9IHJlcy5qc29uKCkub2JqO1xyXG4gICAgICAgIC8vbGV0IGNvbnRlc3QgPSBuZXcgQ29udGVzdChkYXRhLm5hbWUsIGRhdGEudW5pcXVlSWQsIGRhdGEuaWROYW1lLCBkYXRhLl9pZCwgZGF0YS5jYXRlZ29yeSwgZGF0YS5kZXNjcmlwdGlvbiwgZGF0YS5hd2FyZCwgZGF0YS5zdGF0dXMsIGRhdGEuc3VibWl0aW9uQ291bnQsIGRhdGEuZGF5c1JlbWFpbmluZywgZGF0YS5zdGFydERhdGUsIGRhdGEuZW5kRGF0ZSwgZGF0YS5zdWJtaXRpb25zLCBkYXRhLnB1Ymxpc2hlcik7XHJcbiAgICAgICAgLy9yZXR1cm4gY29udGVzdDtcclxuICAgICAgICByZXR1cm4gZGF0YTtcclxuICAgICAgfSlcclxuICAgICAgLmNhdGNoKGVycm9yID0+IE9ic2VydmFibGUudGhyb3coZXJyb3IuanNvbigpKSk7XHJcbiAgfVxyXG5cclxufSJdfQ==
