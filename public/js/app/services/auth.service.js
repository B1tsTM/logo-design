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
var CryptoJS = require('crypto-js');
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
            var nickname = res.json().nickname;
            var emailConfirmed = res.json().emailConfirmed;
            return { token: token, userId: userId, userType: userType, nickname: nickname, emailConfirmed: emailConfirmed };
        })
            .catch(function (error) { return Observable_1.Observable.throw(error.json()); });
    };
    AuthService.prototype.isLoggedIn = function () {
        return sessionStorage.getItem('token') !== null;
    };
    AuthService.prototype.isClient = function () {
        return sessionStorage.getItem('userType') == CryptoJS.SHA3('uzsakovas').toString();
    };
    AuthService.prototype.isDesigner = function () {
        return sessionStorage.getItem('userType') == CryptoJS.SHA3('dizaineris').toString();
    };
    AuthService.prototype.isAdmin = function () {
        return sessionStorage.getItem('userType') == CryptoJS.SHA3('Admin').toString();
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
    AuthService.prototype.validateUsersEmail = function (confirmationCode) {
        return this.http.get('http://localhost:3000/api/v1/user/' + confirmationCode + '/validate')
            .map(function (res) { return res.json(); })
            .catch(function (error) { return Observable_1.Observable.throw(error.json()); });
    };
    AuthService.prototype.sendConfirmationEmail = function (userId) {
        return this.http.get('http://localhost:3000/api/v1/user/' + userId + '/confirmemail')
            .map(function (res) { return res.json(); })
            .catch(function (error) { return Observable_1.Observable.throw(error.json()); });
    };
    AuthService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], AuthService);
    return AuthService;
}());
exports.AuthService = AuthService;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlcnZpY2VzL2F1dGguc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQTJCLGVBQWUsQ0FBQyxDQUFBO0FBQzNDLHFCQUE4QixlQUFlLENBQUMsQ0FBQTtBQUM5QyxxQkFBcUIsZ0JBQWdCLENBQUMsQ0FBQTtBQUN0QywyQkFBMkIsaUJBQWlCLENBQUMsQ0FBQTtBQUM3QyxRQUFPLFNBQVMsQ0FBQyxDQUFBO0FBQ2pCLElBQVksUUFBUSxXQUFNLFdBQVcsQ0FBQyxDQUFBO0FBR3RDO0lBRUUscUJBQW9CLElBQVU7UUFBVixTQUFJLEdBQUosSUFBSSxDQUFNO0lBQUksQ0FBQztJQUVuQyw0QkFBTSxHQUFOLFVBQU8sSUFBVTtRQUNmLElBQU0sSUFBSSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDbEMsSUFBTSxPQUFPLEdBQUcsSUFBSSxjQUFPLENBQUMsRUFBQyxjQUFjLEVBQUUsa0JBQWtCLEVBQUMsQ0FBQyxDQUFDO1FBQ2xFLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxvQ0FBb0MsRUFBRSxJQUFJLEVBQUUsRUFBQyxPQUFPLEVBQUMsT0FBTyxFQUFDLENBQUM7YUFDakYsR0FBRyxDQUFDLFVBQUEsR0FBRztZQUNOLElBQU0sSUFBSSxHQUFHLEdBQUcsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxHQUFHLENBQUM7WUFDNUIsSUFBSSxJQUFJLEdBQUcsSUFBSSxXQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1lBQ2xILE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDbEIsTUFBTSxDQUFDLElBQUksQ0FBQztRQUNkLENBQUMsQ0FBQzthQUNELEtBQUssQ0FBQyxVQUFBLEtBQUssSUFBSSxPQUFBLHVCQUFVLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsQ0FBQyxFQUE5QixDQUE4QixDQUFDLENBQUM7SUFDcEQsQ0FBQztJQUVELDRCQUFNLEdBQU4sVUFBTyxJQUFVO1FBQ2YsT0FBTyxDQUFDLEdBQUcsQ0FBQyw0QkFBNEIsQ0FBQyxDQUFDO1FBQzFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDbEIsSUFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNsQyxPQUFPLENBQUMsR0FBRyxDQUFDLCtCQUErQixDQUFDLENBQUE7UUFDNUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNsQixJQUFNLE9BQU8sR0FBRyxJQUFJLGNBQU8sQ0FBQyxFQUFDLGNBQWMsRUFBRSxrQkFBa0IsRUFBQyxDQUFDLENBQUM7UUFDbEUsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLG1DQUFtQyxFQUFFLElBQUksRUFBRSxFQUFDLE9BQU8sRUFBQyxPQUFPLEVBQUMsQ0FBQzthQUNoRixHQUFHLENBQUMsVUFBQSxHQUFHO1lBQ04sSUFBSSxLQUFLLEdBQUcsR0FBRyxDQUFDLElBQUksRUFBRSxDQUFDLEtBQUssQ0FBQztZQUM3QixJQUFJLE1BQU0sR0FBRyxHQUFHLENBQUMsSUFBSSxFQUFFLENBQUMsTUFBTSxDQUFDO1lBQy9CLElBQUksUUFBUSxHQUFHLEdBQUcsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxRQUFRLENBQUM7WUFDbkMsSUFBSSxRQUFRLEdBQUcsR0FBRyxDQUFDLElBQUksRUFBRSxDQUFDLFFBQVEsQ0FBQztZQUNuQyxJQUFJLGNBQWMsR0FBRyxHQUFHLENBQUMsSUFBSSxFQUFFLENBQUMsY0FBYyxDQUFDO1lBQy9DLE1BQU0sQ0FBQyxFQUFDLEtBQUssRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUUsY0FBYyxFQUFFLGNBQWMsRUFBQyxDQUFDO1FBRWhILENBQUMsQ0FBQzthQUNELEtBQUssQ0FBQyxVQUFBLEtBQUssSUFBSSxPQUFBLHVCQUFVLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsQ0FBQyxFQUE5QixDQUE4QixDQUFDLENBQUM7SUFDcEQsQ0FBQztJQUVELGdDQUFVLEdBQVY7UUFDRSxNQUFNLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsS0FBSyxJQUFJLENBQUM7SUFDbEQsQ0FBQztJQUVELDhCQUFRLEdBQVI7UUFDRSxNQUFNLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsSUFBSSxRQUFRLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQ3JGLENBQUM7SUFFRCxnQ0FBVSxHQUFWO1FBQ0UsTUFBTSxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLElBQUksUUFBUSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUN0RixDQUFDO0lBRUQsNkJBQU8sR0FBUDtRQUNFLE1BQU0sQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxJQUFJLFFBQVEsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDakYsQ0FBQztJQUVELCtCQUFTLEdBQVQsVUFBVSxFQUFVO1FBQ2xCLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyx1Q0FBdUMsR0FBQyxFQUFFLENBQUM7YUFDN0QsR0FBRyxDQUFDLFVBQUEsR0FBRztZQUNOLElBQUksU0FBUyxHQUFHLEdBQUcsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxTQUFTLENBQUM7WUFDckMsTUFBTSxDQUFDLEVBQUMsU0FBUyxFQUFFLFNBQVMsRUFBQyxDQUFBO1FBQy9CLENBQUMsQ0FBQzthQUNELEtBQUssQ0FBQyxVQUFBLEtBQUssSUFBSSxPQUFBLHVCQUFVLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsQ0FBQyxFQUE5QixDQUE4QixDQUFDLENBQUM7SUFDcEQsQ0FBQztJQUVELGdDQUFVLEdBQVYsVUFBVyxFQUFVO1FBQ25CLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyx1Q0FBdUMsR0FBQyxFQUFFLENBQUM7YUFDN0QsR0FBRyxDQUFDLFVBQUEsR0FBRztZQUNOLElBQUksV0FBVyxHQUFHLEdBQUcsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxXQUFXLENBQUM7WUFDekMsTUFBTSxDQUFDLEVBQUMsV0FBVyxFQUFFLFdBQVcsRUFBQyxDQUFBO1FBQ25DLENBQUMsQ0FBQzthQUNELEtBQUssQ0FBQyxVQUFBLEtBQUssSUFBSSxPQUFBLHVCQUFVLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsQ0FBQyxFQUE5QixDQUE4QixDQUFDLENBQUM7SUFDcEQsQ0FBQztJQUVELHdDQUFrQixHQUFsQixVQUFtQixnQkFBZ0I7UUFDakMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLG9DQUFvQyxHQUFHLGdCQUFnQixHQUFHLFdBQVcsQ0FBQzthQUMxRixHQUFHLENBQUMsVUFBQSxHQUFHLElBQUksT0FBQSxHQUFHLENBQUMsSUFBSSxFQUFFLEVBQVYsQ0FBVSxDQUFDO2FBQ3RCLEtBQUssQ0FBQyxVQUFBLEtBQUssSUFBSSxPQUFBLHVCQUFVLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsQ0FBQyxFQUE5QixDQUE4QixDQUFDLENBQUM7SUFDbEQsQ0FBQztJQUVELDJDQUFxQixHQUFyQixVQUFzQixNQUFNO1FBQzFCLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxvQ0FBb0MsR0FBRyxNQUFNLEdBQUcsZUFBZSxDQUFDO2FBQ3BGLEdBQUcsQ0FBQyxVQUFBLEdBQUcsSUFBSSxPQUFBLEdBQUcsQ0FBQyxJQUFJLEVBQUUsRUFBVixDQUFVLENBQUM7YUFDdEIsS0FBSyxDQUFDLFVBQUEsS0FBSyxJQUFJLE9BQUEsdUJBQVUsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxDQUFDLEVBQTlCLENBQThCLENBQUMsQ0FBQztJQUNsRCxDQUFDO0lBbEZIO1FBQUMsaUJBQVUsRUFBRTs7bUJBQUE7SUFvRmIsa0JBQUM7QUFBRCxDQW5GQSxBQW1GQyxJQUFBO0FBbkZZLG1CQUFXLGNBbUZ2QixDQUFBIiwiZmlsZSI6InNlcnZpY2VzL2F1dGguc2VydmljZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgSHR0cCwgSGVhZGVycyB9IGZyb20gJ0Bhbmd1bGFyL2h0dHAnO1xyXG5pbXBvcnQgeyBVc2VyIH0gZnJvbSAnLi4vbW9kZWxzL3VzZXInO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcy9PYnNlcnZhYmxlJztcclxuaW1wb3J0ICdyeGpzL1J4JztcclxuaW1wb3J0ICogYXMgQ3J5cHRvSlMgZnJvbSAnY3J5cHRvLWpzJztcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIEF1dGhTZXJ2aWNlIHtcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBodHRwOiBIdHRwKSB7IH1cclxuXHJcbiAgc2lnbnVwKHVzZXI6IFVzZXIpIHtcclxuICAgIGNvbnN0IGJvZHkgPSBKU09OLnN0cmluZ2lmeSh1c2VyKTtcclxuICAgIGNvbnN0IGhlYWRlcnMgPSBuZXcgSGVhZGVycyh7J0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ30pO1xyXG4gICAgcmV0dXJuIHRoaXMuaHR0cC5wb3N0KCdodHRwOi8vbG9jYWxob3N0OjMwMDAvcmVnaXN0cmFjaWphJywgYm9keSwge2hlYWRlcnM6aGVhZGVyc30pXHJcbiAgICAgIC5tYXAocmVzID0+IHtcclxuICAgICAgICBjb25zdCBkYXRhID0gcmVzLmpzb24oKS5vYmo7XHJcbiAgICAgICAgbGV0IHVzZXIgPSBuZXcgVXNlcihkYXRhLm5pY2tOYW1lLCBkYXRhLnBhc3N3b3JkLCBkYXRhLnVzZXJUeXBlICxkYXRhLmZpcnN0TmFtZSwgZGF0YS5sYXN0TmFtZSwgZGF0YS5lbWFpbCwgMCwgMCk7XHJcbiAgICAgICAgY29uc29sZS5sb2codXNlcik7XHJcbiAgICAgICAgcmV0dXJuIHVzZXI7XHJcbiAgICAgIH0pXHJcbiAgICAgIC5jYXRjaChlcnJvciA9PiBPYnNlcnZhYmxlLnRocm93KGVycm9yLmpzb24oKSkpO1xyXG4gIH1cclxuXHJcbiAgc2lnbmluKHVzZXI6IFVzZXIpIHtcclxuICAgIGNvbnNvbGUubG9nKCdhdXRoIHNlcnZpY2UgaW5jb21pbmcgdXNlcicpO1xyXG4gICAgY29uc29sZS5sb2codXNlcik7XHJcbiAgICBjb25zdCBib2R5ID0gSlNPTi5zdHJpbmdpZnkodXNlcik7XHJcbiAgICBjb25zb2xlLmxvZygnYXV0aCBzZXJ2aWNlIHN0cmluZ2lmaWVkIHVzZXInKVxyXG4gICAgY29uc29sZS5sb2coYm9keSk7XHJcbiAgICBjb25zdCBoZWFkZXJzID0gbmV3IEhlYWRlcnMoeydDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbid9KTtcclxuICAgIHJldHVybiB0aGlzLmh0dHAucG9zdCgnaHR0cDovL2xvY2FsaG9zdDozMDAwL3ByaXNpanVuZ3RpJywgYm9keSwge2hlYWRlcnM6aGVhZGVyc30pXHJcbiAgICAgIC5tYXAocmVzID0+IHtcclxuICAgICAgICB2YXIgdG9rZW4gPSByZXMuanNvbigpLnRva2VuO1xyXG4gICAgICAgIHZhciB1c2VySWQgPSByZXMuanNvbigpLnVzZXJJZDtcclxuICAgICAgICB2YXIgdXNlclR5cGUgPSByZXMuanNvbigpLnVzZXJUeXBlO1xyXG4gICAgICAgIHZhciBuaWNrbmFtZSA9IHJlcy5qc29uKCkubmlja25hbWU7XHJcbiAgICAgICAgdmFyIGVtYWlsQ29uZmlybWVkID0gcmVzLmpzb24oKS5lbWFpbENvbmZpcm1lZDtcclxuICAgICAgICByZXR1cm4ge3Rva2VuOiB0b2tlbiwgdXNlcklkOiB1c2VySWQsIHVzZXJUeXBlOiB1c2VyVHlwZSwgbmlja25hbWU6IG5pY2tuYW1lLCBlbWFpbENvbmZpcm1lZDogZW1haWxDb25maXJtZWR9O1xyXG4gICAgICAgIFxyXG4gICAgICB9KVxyXG4gICAgICAuY2F0Y2goZXJyb3IgPT4gT2JzZXJ2YWJsZS50aHJvdyhlcnJvci5qc29uKCkpKTtcclxuICB9XHJcblxyXG4gIGlzTG9nZ2VkSW4oKSB7XHJcbiAgICByZXR1cm4gc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbSgndG9rZW4nKSAhPT0gbnVsbDtcclxuICB9XHJcblxyXG4gIGlzQ2xpZW50KCkge1xyXG4gICAgcmV0dXJuIHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oJ3VzZXJUeXBlJykgPT0gQ3J5cHRvSlMuU0hBMygndXpzYWtvdmFzJykudG9TdHJpbmcoKTtcclxuICB9XHJcblxyXG4gIGlzRGVzaWduZXIoKSB7XHJcbiAgICByZXR1cm4gc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbSgndXNlclR5cGUnKSA9PSBDcnlwdG9KUy5TSEEzKCdkaXphaW5lcmlzJykudG9TdHJpbmcoKTtcclxuICB9XHJcblxyXG4gIGlzQWRtaW4oKSB7XHJcbiAgICByZXR1cm4gc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbSgndXNlclR5cGUnKSA9PSBDcnlwdG9KUy5TSEEzKCdBZG1pbicpLnRvU3RyaW5nKCk7XHJcbiAgfVxyXG5cclxuICBnZXRBdmF0YXIoaWQ6IHN0cmluZykge1xyXG4gICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQoJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9hcGkvdjEvYXZhdGFycy8nK2lkKVxyXG4gICAgICAubWFwKHJlcyA9PiB7XHJcbiAgICAgICAgdmFyIGF2YXRhclVybCA9IHJlcy5qc29uKCkuYXZhdGFyVXJsO1xyXG4gICAgICAgIHJldHVybiB7YXZhdGFyVXJsOiBhdmF0YXJVcmx9XHJcbiAgICAgIH0pXHJcbiAgICAgIC5jYXRjaChlcnJvciA9PiBPYnNlcnZhYmxlLnRocm93KGVycm9yLmpzb24oKSkpO1xyXG4gIH1cclxuXHJcbiAgZ2V0R2FsbGVyeShpZDogc3RyaW5nKSB7XHJcbiAgICByZXR1cm4gdGhpcy5odHRwLmdldCgnaHR0cDovL2xvY2FsaG9zdDozMDAwL2FwaS92MS9nYWxsZXJ5LycraWQpXHJcbiAgICAgIC5tYXAocmVzID0+IHtcclxuICAgICAgICB2YXIgZ2FsbGVyeVVybHMgPSByZXMuanNvbigpLmdhbGxlcnlVcmxzO1xyXG4gICAgICAgIHJldHVybiB7Z2FsbGVyeVVybHM6IGdhbGxlcnlVcmxzfVxyXG4gICAgICB9KVxyXG4gICAgICAuY2F0Y2goZXJyb3IgPT4gT2JzZXJ2YWJsZS50aHJvdyhlcnJvci5qc29uKCkpKTtcclxuICB9XHJcblxyXG4gIHZhbGlkYXRlVXNlcnNFbWFpbChjb25maXJtYXRpb25Db2RlKSB7XHJcbiAgICByZXR1cm4gdGhpcy5odHRwLmdldCgnaHR0cDovL2xvY2FsaG9zdDozMDAwL2FwaS92MS91c2VyLycgKyBjb25maXJtYXRpb25Db2RlICsgJy92YWxpZGF0ZScpXHJcbiAgICAubWFwKHJlcyA9PiByZXMuanNvbigpKVxyXG4gICAgLmNhdGNoKGVycm9yID0+IE9ic2VydmFibGUudGhyb3coZXJyb3IuanNvbigpKSk7XHJcbiAgfVxyXG5cclxuICBzZW5kQ29uZmlybWF0aW9uRW1haWwodXNlcklkKSB7XHJcbiAgICByZXR1cm4gdGhpcy5odHRwLmdldCgnaHR0cDovL2xvY2FsaG9zdDozMDAwL2FwaS92MS91c2VyLycgKyB1c2VySWQgKyAnL2NvbmZpcm1lbWFpbCcpXHJcbiAgICAubWFwKHJlcyA9PiByZXMuanNvbigpKVxyXG4gICAgLmNhdGNoKGVycm9yID0+IE9ic2VydmFibGUudGhyb3coZXJyb3IuanNvbigpKSk7XHJcbiAgfVxyXG5cclxufSJdfQ==
