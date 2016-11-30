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
        //if (state.url == '/admin' && !this.authService.isAdmin()) {
        if (!this.authService.isAdmin()) {
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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImd1YXJkcy9jYW4tYWN0aXZhdGUtYWRtaW4tcGFnZS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBMkIsZUFBZSxDQUFDLENBQUE7QUFDM0MsNkJBQTRCLDBCQUEwQixDQUFDLENBQUE7QUFDdkQsdUJBQWlGLGlCQUFpQixDQUFDLENBQUE7QUFHbkc7SUFFRSxxQ0FBb0IsV0FBd0IsRUFDeEIsTUFBYztRQURkLGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBQ3hCLFdBQU0sR0FBTixNQUFNLENBQVE7SUFBSSxDQUFDO0lBRXZDLDhDQUFRLEdBQVIsY0FBYSxDQUFDO0lBRWQsaURBQVcsR0FBWCxVQUFZLEtBQTZCLEVBQUUsS0FBMEI7UUFDbkUsNkRBQTZEO1FBQzdELEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDaEMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1lBQzVCLE1BQU0sQ0FBQyxLQUFLLENBQUM7UUFDZixDQUFDO1FBQUMsSUFBSSxDQUFDLENBQUM7WUFDTixNQUFNLENBQUMsSUFBSSxDQUFDO1FBQ2QsQ0FBQztJQUNMLENBQUM7SUFoQkQ7UUFBQyxpQkFBVSxFQUFFOzttQ0FBQTtJQWtCYixrQ0FBQztBQUFELENBakJBLEFBaUJDLElBQUE7QUFqQlksbUNBQTJCLDhCQWlCdkMsQ0FBQSIsImZpbGUiOiJndWFyZHMvY2FuLWFjdGl2YXRlLWFkbWluLXBhZ2Uuc2VydmljZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQXV0aFNlcnZpY2UgfSBmcm9tICcuLi9zZXJ2aWNlcy9hdXRoLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBDYW5BY3RpdmF0ZSwgQWN0aXZhdGVkUm91dGVTbmFwc2hvdCwgUm91dGVyU3RhdGVTbmFwc2hvdCwgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIENhbkFjdGl2YXRlQWRtaW5QYWdlU2VydmljZSBpbXBsZW1lbnRzIENhbkFjdGl2YXRlIHtcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBhdXRoU2VydmljZTogQXV0aFNlcnZpY2UsXHJcbiAgICAgICAgICAgICAgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlcikgeyB9XHJcblxyXG4gIG5nT25Jbml0KCkgeyB9XHJcblxyXG4gIGNhbkFjdGl2YXRlKHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZVNuYXBzaG90LCBzdGF0ZTogUm91dGVyU3RhdGVTbmFwc2hvdCkge1xyXG4gICAgLy9pZiAoc3RhdGUudXJsID09ICcvYWRtaW4nICYmICF0aGlzLmF1dGhTZXJ2aWNlLmlzQWRtaW4oKSkge1xyXG4gICAgaWYgKCF0aGlzLmF1dGhTZXJ2aWNlLmlzQWRtaW4oKSkge1xyXG4gICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJy8nXSk7XHJcbiAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG59XHJcblxyXG59Il19
