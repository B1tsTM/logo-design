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
var user_1 = require('../models/user');
var Observable_1 = require('rxjs/Observable');
require('rxjs/Rx');
var AuthService = (function () {
    function AuthService(http) {
        this.http = http;
    }
    AuthService.prototype.signup = function (user) {
        var body = JSON.stringify(user);
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        return this.http.post('http://localhost:3000/registracija', body, { headers: headers })
            .map(function (res) {
            var data = res.json().obj;
            var user = new user_1.User(data.nickName, data.password, data.userType, data.firstName, data.lastName, data.email, 0, 0);
            console.log(user);
            return user;
        })
            .catch(function (error) { return Observable_1.Observable.throw(error.json()); });
    };
    AuthService.prototype.signin = function (user) {
        console.log('auth service incoming user');
        console.log(user);
        var body = JSON.stringify(user);
        console.log('auth service stringified user');
        console.log(body);
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        return this.http.post('http://localhost:3000/prisijungti', body, { headers: headers })
            .map(function (res) {
            var token = res.json().token;
            var userId = res.json().userId;
            var userType = res.json().userType;
            return { token: token, userId: userId, userType: userType };
        })
            .catch(function (error) { return Observable_1.Observable.throw(error.json()); });
    };
    AuthService.prototype.isLoggedIn = function () {
        return localStorage.getItem('token') !== null;
    };
    AuthService.prototype.isClient = function () {
        return localStorage.getItem('userType') == 'uzsakovas';
    };
    AuthService.prototype.isDesigner = function () {
        return localStorage.getItem('userType') == 'dizaineris';
    };
    AuthService.prototype.getAvatar = function (id) {
        return this.http.get('http://localhost:3000/api/v1/avatars/' + id)
            .map(function (res) {
            var avatarUrl = res.json().avatarUrl;
            return { avatarUrl: avatarUrl };
        })
            .catch(function (error) { return Observable_1.Observable.throw(error.json()); });
    };
    AuthService.prototype.getGallery = function (id) {
        return this.http.get('http://localhost:3000/api/v1/gallery/' + id)
            .map(function (res) {
            var galleryUrls = res.json().galleryUrls;
            return { galleryUrls: galleryUrls };
        })
            .catch(function (error) { return Observable_1.Observable.throw(error.json()); });
    };
    AuthService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], AuthService);
    return AuthService;
}());
exports.AuthService = AuthService;

//# sourceMappingURL=data:application/json;charset=utf8;base64,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QUksT0FBQSx1QkFBVSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLENBQUMsRUFBOUIsQ0FBOEIsQ0FBQyxDQUFDO0lBQ3BELENBQUM7SUFqRUg7UUFBQyxpQkFBVSxFQUFFOzttQkFBQTtJQW1FYixrQkFBQztBQUFELENBbEVBLEFBa0VDLElBQUE7QUFsRVksbUJBQVcsY0FrRXZCLENBQUEiLCJmaWxlIjoic2VydmljZXMvYXV0aC5zZXJ2aWNlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBIdHRwLCBIZWFkZXJzIH0gZnJvbSAnQGFuZ3VsYXIvaHR0cCc7XHJcbmltcG9ydCB7IFVzZXIgfSBmcm9tICcuLi9tb2RlbHMvdXNlcic7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzL09ic2VydmFibGUnO1xyXG5pbXBvcnQgJ3J4anMvUngnO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgQXV0aFNlcnZpY2Uge1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGh0dHA6IEh0dHApIHsgfVxyXG5cclxuICBzaWdudXAodXNlcjogVXNlcikge1xyXG4gICAgY29uc3QgYm9keSA9IEpTT04uc3RyaW5naWZ5KHVzZXIpO1xyXG4gICAgY29uc3QgaGVhZGVycyA9IG5ldyBIZWFkZXJzKHsnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nfSk7XHJcbiAgICByZXR1cm4gdGhpcy5odHRwLnBvc3QoJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9yZWdpc3RyYWNpamEnLCBib2R5LCB7aGVhZGVyczpoZWFkZXJzfSlcclxuICAgICAgLm1hcChyZXMgPT4ge1xyXG4gICAgICAgIGNvbnN0IGRhdGEgPSByZXMuanNvbigpLm9iajtcclxuICAgICAgICBsZXQgdXNlciA9IG5ldyBVc2VyKGRhdGEubmlja05hbWUsIGRhdGEucGFzc3dvcmQsIGRhdGEudXNlclR5cGUgLGRhdGEuZmlyc3ROYW1lLCBkYXRhLmxhc3ROYW1lLCBkYXRhLmVtYWlsLCAwLCAwKTtcclxuICAgICAgICBjb25zb2xlLmxvZyh1c2VyKTtcclxuICAgICAgICByZXR1cm4gdXNlcjtcclxuXHJcbiAgICAgIH0pXHJcbiAgICAgIC5jYXRjaChlcnJvciA9PiBPYnNlcnZhYmxlLnRocm93KGVycm9yLmpzb24oKSkpO1xyXG4gIH1cclxuXHJcbiAgc2lnbmluKHVzZXI6IFVzZXIpIHtcclxuICAgIGNvbnNvbGUubG9nKCdhdXRoIHNlcnZpY2UgaW5jb21pbmcgdXNlcicpO1xyXG4gICAgY29uc29sZS5sb2codXNlcik7XHJcbiAgICBjb25zdCBib2R5ID0gSlNPTi5zdHJpbmdpZnkodXNlcik7XHJcbiAgICBjb25zb2xlLmxvZygnYXV0aCBzZXJ2aWNlIHN0cmluZ2lmaWVkIHVzZXInKVxyXG4gICAgY29uc29sZS5sb2coYm9keSk7XHJcbiAgICBjb25zdCBoZWFkZXJzID0gbmV3IEhlYWRlcnMoeydDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbid9KTtcclxuICAgIHJldHVybiB0aGlzLmh0dHAucG9zdCgnaHR0cDovL2xvY2FsaG9zdDozMDAwL3ByaXNpanVuZ3RpJywgYm9keSwge2hlYWRlcnM6aGVhZGVyc30pXHJcbiAgICAgIC5tYXAocmVzID0+IHtcclxuICAgICAgICB2YXIgdG9rZW4gPSByZXMuanNvbigpLnRva2VuO1xyXG4gICAgICAgIHZhciB1c2VySWQgPSByZXMuanNvbigpLnVzZXJJZDtcclxuICAgICAgICB2YXIgdXNlclR5cGUgPSByZXMuanNvbigpLnVzZXJUeXBlO1xyXG4gICAgICAgIHJldHVybiB7dG9rZW46IHRva2VuLCB1c2VySWQ6IHVzZXJJZCwgdXNlclR5cGU6IHVzZXJUeXBlfTtcclxuICAgICAgICBcclxuICAgICAgfSlcclxuICAgICAgLmNhdGNoKGVycm9yID0+IE9ic2VydmFibGUudGhyb3coZXJyb3IuanNvbigpKSk7XHJcbiAgfVxyXG5cclxuICBpc0xvZ2dlZEluKCkge1xyXG4gICAgcmV0dXJuIGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0b2tlbicpICE9PSBudWxsO1xyXG4gIH1cclxuXHJcbiAgaXNDbGllbnQoKSB7XHJcbiAgICByZXR1cm4gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3VzZXJUeXBlJykgPT0gJ3V6c2Frb3Zhcyc7XHJcbiAgfVxyXG5cclxuICBpc0Rlc2lnbmVyKCkge1xyXG4gICAgcmV0dXJuIGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd1c2VyVHlwZScpID09ICdkaXphaW5lcmlzJztcclxuICB9XHJcblxyXG4gIGdldEF2YXRhcihpZDogc3RyaW5nKSB7XHJcbiAgICByZXR1cm4gdGhpcy5odHRwLmdldCgnaHR0cDovL2xvY2FsaG9zdDozMDAwL2FwaS92MS9hdmF0YXJzLycraWQpXHJcbiAgICAgIC5tYXAocmVzID0+IHtcclxuICAgICAgICB2YXIgYXZhdGFyVXJsID0gcmVzLmpzb24oKS5hdmF0YXJVcmw7XHJcbiAgICAgICAgcmV0dXJuIHthdmF0YXJVcmw6IGF2YXRhclVybH1cclxuICAgICAgfSlcclxuICAgICAgLmNhdGNoKGVycm9yID0+IE9ic2VydmFibGUudGhyb3coZXJyb3IuanNvbigpKSk7XHJcbiAgfVxyXG5cclxuICBnZXRHYWxsZXJ5KGlkOiBzdHJpbmcpIHtcclxuICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0KCdodHRwOi8vbG9jYWxob3N0OjMwMDAvYXBpL3YxL2dhbGxlcnkvJytpZClcclxuICAgICAgLm1hcChyZXMgPT4ge1xyXG4gICAgICAgIHZhciBnYWxsZXJ5VXJscyA9IHJlcy5qc29uKCkuZ2FsbGVyeVVybHM7XHJcbiAgICAgICAgcmV0dXJuIHtnYWxsZXJ5VXJsczogZ2FsbGVyeVVybHN9XHJcbiAgICAgIH0pXHJcbiAgICAgIC5jYXRjaChlcnJvciA9PiBPYnNlcnZhYmxlLnRocm93KGVycm9yLmpzb24oKSkpO1xyXG4gIH1cclxuXHJcbn0iXX0=
