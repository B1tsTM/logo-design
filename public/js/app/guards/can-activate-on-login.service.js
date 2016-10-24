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
var CanActivateOnLoginService = (function () {
    function CanActivateOnLoginService(authService) {
        this.authService = authService;
    }
    CanActivateOnLoginService.prototype.ngOnInit = function () { };
    CanActivateOnLoginService.prototype.canActivate = function () {
        return this.authService.isLoggedIn();
    };
    CanActivateOnLoginService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [auth_service_1.AuthService])
    ], CanActivateOnLoginService);
    return CanActivateOnLoginService;
}());
exports.CanActivateOnLoginService = CanActivateOnLoginService;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImd1YXJkcy9jYW4tYWN0aXZhdGUtb24tbG9naW4uc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQTJCLGVBQWUsQ0FBQyxDQUFBO0FBQzNDLDZCQUE0QiwwQkFBMEIsQ0FBQyxDQUFBO0FBSXZEO0lBRUUsbUNBQW9CLFdBQXdCO1FBQXhCLGdCQUFXLEdBQVgsV0FBVyxDQUFhO0lBQUksQ0FBQztJQUVqRCw0Q0FBUSxHQUFSLGNBQWEsQ0FBQztJQUVkLCtDQUFXLEdBQVg7UUFDRSxNQUFNLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxVQUFVLEVBQUUsQ0FBQztJQUN2QyxDQUFDO0lBVEg7UUFBQyxpQkFBVSxFQUFFOztpQ0FBQTtJQVViLGdDQUFDO0FBQUQsQ0FUQSxBQVNDLElBQUE7QUFUWSxpQ0FBeUIsNEJBU3JDLENBQUEiLCJmaWxlIjoiZ3VhcmRzL2Nhbi1hY3RpdmF0ZS1vbi1sb2dpbi5zZXJ2aWNlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBBdXRoU2VydmljZSB9IGZyb20gJy4uL3NlcnZpY2VzL2F1dGguc2VydmljZSc7XHJcbmltcG9ydCB7IENhbkFjdGl2YXRlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIENhbkFjdGl2YXRlT25Mb2dpblNlcnZpY2Uge1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGF1dGhTZXJ2aWNlOiBBdXRoU2VydmljZSkgeyB9XHJcblxyXG4gIG5nT25Jbml0KCkgeyB9XHJcblxyXG4gIGNhbkFjdGl2YXRlKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuYXV0aFNlcnZpY2UuaXNMb2dnZWRJbigpO1xyXG4gIH1cclxufSJdfQ==
