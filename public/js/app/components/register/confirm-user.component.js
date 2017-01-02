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
var router_1 = require('@angular/router');
var auth_service_1 = require('../../services/auth.service');
var CryptoJS = require('crypto-js');
var ConfirmUserComponent = (function () {
    function ConfirmUserComponent(route, authService, router) {
        this.route = route;
        this.authService = authService;
        this.router = router;
        this.confirmedBlock = false;
        this.errorBlock = false;
    }
    ConfirmUserComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.confirmationCode = params['id'];
        });
        this.authService.validateUsersEmail(this.confirmationCode)
            .subscribe(function (data) {
            if (data.message) {
                console.log(data);
                _this.confirmedBlock = true;
                sessionStorage.setItem('emailConfirmed', CryptoJS.SHA3('true').toString());
                setTimeout(function () {
                    _this.router.navigate(['/']);
                }, 4000);
            }
        }, function (error) {
            _this.errorBlock = true;
            setTimeout(function () {
                _this.router.navigate(['/']);
            }, 5000);
        });
    };
    ConfirmUserComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'confirm-user',
            templateUrl: 'confirm-user.component.html',
            styleUrls: ['confirm-user.component.css']
        }), 
        __metadata('design:paramtypes', [router_1.ActivatedRoute, auth_service_1.AuthService, router_1.Router])
    ], ConfirmUserComponent);
    return ConfirmUserComponent;
}());
exports.ConfirmUserComponent = ConfirmUserComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvcmVnaXN0ZXIvY29uZmlybS11c2VyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQWtDLGVBQWUsQ0FBQyxDQUFBO0FBQ2xELHVCQUErQyxpQkFBaUIsQ0FBQyxDQUFBO0FBQ2pFLDZCQUE0Qiw2QkFBNkIsQ0FBQyxDQUFBO0FBQzFELElBQVksUUFBUSxXQUFNLFdBQVcsQ0FBQyxDQUFBO0FBUXRDO0lBSUUsOEJBQW9CLEtBQXFCLEVBQ3JCLFdBQXdCLEVBQ3hCLE1BQWM7UUFGZCxVQUFLLEdBQUwsS0FBSyxDQUFnQjtRQUNyQixnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUN4QixXQUFNLEdBQU4sTUFBTSxDQUFRO1FBTGxDLG1CQUFjLEdBQUcsS0FBSyxDQUFDO1FBQ3ZCLGVBQVUsR0FBRyxLQUFLLENBQUM7SUFJbUIsQ0FBQztJQUV2Qyx1Q0FBUSxHQUFSO1FBQUEsaUJBb0JDO1FBbkJDLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxVQUFDLE1BQWM7WUFDekMsS0FBSSxDQUFDLGdCQUFnQixHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN2QyxDQUFDLENBQUMsQ0FBQztRQUNILElBQUksQ0FBQyxXQUFXLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDO2FBQ3pELFNBQVMsQ0FBQyxVQUFBLElBQUk7WUFDYixFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztnQkFDakIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztnQkFDbEIsS0FBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUM7Z0JBQzNCLGNBQWMsQ0FBQyxPQUFPLENBQUMsZ0JBQWdCLEVBQUUsUUFBUSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDO2dCQUMzRSxVQUFVLENBQUM7b0JBQ1QsS0FBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO2dCQUM5QixDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUE7WUFDVixDQUFDO1FBQ0gsQ0FBQyxFQUFFLFVBQUEsS0FBSztZQUNOLEtBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDO1lBQ3ZCLFVBQVUsQ0FBQztnQkFDUCxLQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7WUFDOUIsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFBO1FBQ1YsQ0FBQyxDQUFDLENBQUE7SUFDTixDQUFDO0lBbENIO1FBQUMsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixRQUFRLEVBQUUsY0FBYztZQUN4QixXQUFXLEVBQUUsNkJBQTZCO1lBQzFDLFNBQVMsRUFBRSxDQUFDLDRCQUE0QixDQUFDO1NBQzFDLENBQUM7OzRCQUFBO0lBZ0NGLDJCQUFDO0FBQUQsQ0EvQkEsQUErQkMsSUFBQTtBQS9CWSw0QkFBb0IsdUJBK0JoQyxDQUFBIiwiZmlsZSI6ImNvbXBvbmVudHMvcmVnaXN0ZXIvY29uZmlybS11c2VyLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFJvdXRlciwgQWN0aXZhdGVkUm91dGUsIFBhcmFtcyB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcbmltcG9ydCB7IEF1dGhTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvYXV0aC5zZXJ2aWNlJztcclxuaW1wb3J0ICogYXMgQ3J5cHRvSlMgZnJvbSAnY3J5cHRvLWpzJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIG1vZHVsZUlkOiBtb2R1bGUuaWQsXHJcbiAgc2VsZWN0b3I6ICdjb25maXJtLXVzZXInLFxyXG4gIHRlbXBsYXRlVXJsOiAnY29uZmlybS11c2VyLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnY29uZmlybS11c2VyLmNvbXBvbmVudC5jc3MnXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgQ29uZmlybVVzZXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gIGNvbmZpcm1lZEJsb2NrID0gZmFsc2U7XHJcbiAgZXJyb3JCbG9jayA9IGZhbHNlO1xyXG4gIGNvbmZpcm1hdGlvbkNvZGU6IHN0cmluZztcclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSxcclxuICAgICAgICAgICAgICBwcml2YXRlIGF1dGhTZXJ2aWNlOiBBdXRoU2VydmljZSxcclxuICAgICAgICAgICAgICBwcml2YXRlIHJvdXRlcjogUm91dGVyKSB7IH1cclxuXHJcbiAgbmdPbkluaXQoKSB7IFxyXG4gICAgdGhpcy5yb3V0ZS5wYXJhbXMuc3Vic2NyaWJlKChwYXJhbXM6IFBhcmFtcykgPT4ge1xyXG4gICAgICB0aGlzLmNvbmZpcm1hdGlvbkNvZGUgPSBwYXJhbXNbJ2lkJ107XHJcbiAgICB9KTtcclxuICAgIHRoaXMuYXV0aFNlcnZpY2UudmFsaWRhdGVVc2Vyc0VtYWlsKHRoaXMuY29uZmlybWF0aW9uQ29kZSlcclxuICAgIC5zdWJzY3JpYmUoZGF0YSA9PiB7XHJcbiAgICAgIGlmIChkYXRhLm1lc3NhZ2UpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhkYXRhKTtcclxuICAgICAgICB0aGlzLmNvbmZpcm1lZEJsb2NrID0gdHJ1ZTtcclxuICAgICAgICBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKCdlbWFpbENvbmZpcm1lZCcsIENyeXB0b0pTLlNIQTMoJ3RydWUnKS50b1N0cmluZygpKTtcclxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFsnLyddKTtcclxuICAgICAgICB9LCA0MDAwKVxyXG4gICAgICB9XHJcbiAgICB9LCBlcnJvciA9PiB7XHJcbiAgICAgIHRoaXMuZXJyb3JCbG9jayA9IHRydWU7XHJcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoWycvJ10pO1xyXG4gICAgICAgIH0sIDUwMDApXHJcbiAgICAgIH0pXHJcbiAgfVxyXG5cclxuICBcclxufSJdfQ==
