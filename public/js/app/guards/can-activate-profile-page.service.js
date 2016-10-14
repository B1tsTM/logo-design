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
var CanActivateProfilePageService = (function () {
    function CanActivateProfilePageService(authService) {
        this.authService = authService;
    }
    CanActivateProfilePageService.prototype.ngOnInit = function () { };
    CanActivateProfilePageService.prototype.canActivate = function () {
        return this.authService.isLoggedIn();
    };
    CanActivateProfilePageService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [auth_service_1.AuthService])
    ], CanActivateProfilePageService);
    return CanActivateProfilePageService;
}());
exports.CanActivateProfilePageService = CanActivateProfilePageService;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImd1YXJkcy9jYW4tYWN0aXZhdGUtcHJvZmlsZS1wYWdlLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUEyQixlQUFlLENBQUMsQ0FBQTtBQUMzQyw2QkFBNEIsMEJBQTBCLENBQUMsQ0FBQTtBQUl2RDtJQUVFLHVDQUFvQixXQUF3QjtRQUF4QixnQkFBVyxHQUFYLFdBQVcsQ0FBYTtJQUFJLENBQUM7SUFFakQsZ0RBQVEsR0FBUixjQUFhLENBQUM7SUFFZCxtREFBVyxHQUFYO1FBQ0UsTUFBTSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsVUFBVSxFQUFFLENBQUM7SUFDdkMsQ0FBQztJQVRIO1FBQUMsaUJBQVUsRUFBRTs7cUNBQUE7SUFVYixvQ0FBQztBQUFELENBVEEsQUFTQyxJQUFBO0FBVFkscUNBQTZCLGdDQVN6QyxDQUFBIiwiZmlsZSI6Imd1YXJkcy9jYW4tYWN0aXZhdGUtcHJvZmlsZS1wYWdlLnNlcnZpY2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEF1dGhTZXJ2aWNlIH0gZnJvbSAnLi4vc2VydmljZXMvYXV0aC5zZXJ2aWNlJztcclxuaW1wb3J0IHsgQ2FuQWN0aXZhdGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgQ2FuQWN0aXZhdGVQcm9maWxlUGFnZVNlcnZpY2Uge1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGF1dGhTZXJ2aWNlOiBBdXRoU2VydmljZSkgeyB9XHJcblxyXG4gIG5nT25Jbml0KCkgeyB9XHJcblxyXG4gIGNhbkFjdGl2YXRlKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuYXV0aFNlcnZpY2UuaXNMb2dnZWRJbigpO1xyXG4gIH1cclxufSJdfQ==
