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
var auth_service_1 = require('../services/auth.service');
var router_1 = require('@angular/router');
var CanActivateAdminPageService = (function () {
    function CanActivateAdminPageService(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    CanActivateAdminPageService.prototype.ngOnInit = function () { };
    CanActivateAdminPageService.prototype.canActivate = function (route, state) {
        if (state.url == '/admin' && !this.authService.isAdmin()) {
            console.log('not admin!');
            this.router.navigate(['/']);
            return false;
        }
        else {
            return true;
        }
    };
    CanActivateAdminPageService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [auth_service_1.AuthService, router_1.Router])
    ], CanActivateAdminPageService);
    return CanActivateAdminPageService;
}());
exports.CanActivateAdminPageService = CanActivateAdminPageService;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImd1YXJkcy9jYW4tYWN0aXZhdGUtYWRtaW4tcGFnZS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBMkIsZUFBZSxDQUFDLENBQUE7QUFDM0MsNkJBQTRCLDBCQUEwQixDQUFDLENBQUE7QUFDdkQsdUJBQWlGLGlCQUFpQixDQUFDLENBQUE7QUFHbkc7SUFFRSxxQ0FBb0IsV0FBd0IsRUFDeEIsTUFBYztRQURkLGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBQ3hCLFdBQU0sR0FBTixNQUFNLENBQVE7SUFBSSxDQUFDO0lBRXZDLDhDQUFRLEdBQVIsY0FBYSxDQUFDO0lBRWQsaURBQVcsR0FBWCxVQUFZLEtBQTZCLEVBQUUsS0FBMEI7UUFDbkUsRUFBRSxDQUFDLENBQUMsS0FBSyxDQUFDLEdBQUcsSUFBSSxRQUFRLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUMsQ0FBQztZQUN6RCxPQUFPLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxDQUFDO1lBQzFCLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztZQUM1QixNQUFNLENBQUMsS0FBSyxDQUFDO1FBQ2YsQ0FBQztRQUFDLElBQUksQ0FBQyxDQUFDO1lBQ04sTUFBTSxDQUFDLElBQUksQ0FBQztRQUNkLENBQUM7SUFDTCxDQUFDO0lBaEJEO1FBQUMsaUJBQVUsRUFBRTs7bUNBQUE7SUFrQmIsa0NBQUM7QUFBRCxDQWpCQSxBQWlCQyxJQUFBO0FBakJZLG1DQUEyQiw4QkFpQnZDLENBQUEiLCJmaWxlIjoiZ3VhcmRzL2Nhbi1hY3RpdmF0ZS1hZG1pbi1wYWdlLnNlcnZpY2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEF1dGhTZXJ2aWNlIH0gZnJvbSAnLi4vc2VydmljZXMvYXV0aC5zZXJ2aWNlJztcclxuaW1wb3J0IHsgQ2FuQWN0aXZhdGUsIEFjdGl2YXRlZFJvdXRlU25hcHNob3QsIFJvdXRlclN0YXRlU25hcHNob3QsIFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBDYW5BY3RpdmF0ZUFkbWluUGFnZVNlcnZpY2UgaW1wbGVtZW50cyBDYW5BY3RpdmF0ZSB7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgYXV0aFNlcnZpY2U6IEF1dGhTZXJ2aWNlLFxyXG4gICAgICAgICAgICAgIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIpIHsgfVxyXG5cclxuICBuZ09uSW5pdCgpIHsgfVxyXG5cclxuICBjYW5BY3RpdmF0ZShyb3V0ZTogQWN0aXZhdGVkUm91dGVTbmFwc2hvdCwgc3RhdGU6IFJvdXRlclN0YXRlU25hcHNob3QpIHtcclxuICAgIGlmIChzdGF0ZS51cmwgPT0gJy9hZG1pbicgJiYgIXRoaXMuYXV0aFNlcnZpY2UuaXNBZG1pbigpKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKCdub3QgYWRtaW4hJyk7XHJcbiAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFsnLyddKTtcclxuICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcbn1cclxuXHJcbn0iXX0=
