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
var auth_service_1 = require('../../../../services/auth.service');
var AbBannerComponent = (function () {
    function AbBannerComponent(authService) {
        this.authService = authService;
        this.gallery = [];
    }
    AbBannerComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.id = localStorage.getItem('userId');
        this.authService.getGallery(this.id)
            .subscribe(function (data) {
            console.log(data);
            _this.gallery = data;
        }, function (error) {
            console.error(error);
        });
    };
    AbBannerComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            templateUrl: 'ab-banner.component.html',
            styleUrls: ['ab-banner.component.css']
        }), 
        __metadata('design:paramtypes', [auth_service_1.AuthService])
    ], AbBannerComponent);
    return AbBannerComponent;
}());
exports.AbBannerComponent = AbBannerComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvY2F0ZWdvcmllcy93ZWItYW5kLWFwcC1kZXNpZ24vYWItYmFubmVyL2FiLWJhbm5lci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUFrQyxlQUFlLENBQUMsQ0FBQTtBQUNsRCw2QkFBNEIsbUNBQW1DLENBQUMsQ0FBQTtBQU9oRTtJQUdFLDJCQUFvQixXQUF3QjtRQUF4QixnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUQ1QyxZQUFPLEdBQVMsRUFBRSxDQUFDO0lBQzZCLENBQUM7SUFFakQsb0NBQVEsR0FBUjtRQUFBLGlCQVNDO1FBUkMsSUFBSSxDQUFDLEVBQUUsR0FBRyxZQUFZLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ3pDLElBQUksQ0FBQyxXQUFXLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUM7YUFDekIsU0FBUyxDQUFDLFVBQUEsSUFBSTtZQUNmLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDbEIsS0FBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7UUFDdEIsQ0FBQyxFQUFFLFVBQUMsS0FBSztZQUNULE9BQU8sQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDekIsQ0FBQyxDQUFDLENBQUM7SUFDVCxDQUFDO0lBbkJIO1FBQUMsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixXQUFXLEVBQUUsMEJBQTBCO1lBQ3ZDLFNBQVMsRUFBRSxDQUFDLHlCQUF5QixDQUFDO1NBQ3ZDLENBQUM7O3lCQUFBO0lBZ0JGLHdCQUFDO0FBQUQsQ0FmQSxBQWVDLElBQUE7QUFmWSx5QkFBaUIsb0JBZTdCLENBQUEiLCJmaWxlIjoiY29tcG9uZW50cy9jYXRlZ29yaWVzL3dlYi1hbmQtYXBwLWRlc2lnbi9hYi1iYW5uZXIvYWItYmFubmVyLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEF1dGhTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vLi4vc2VydmljZXMvYXV0aC5zZXJ2aWNlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIG1vZHVsZUlkOiBtb2R1bGUuaWQsXHJcbiAgdGVtcGxhdGVVcmw6ICdhYi1iYW5uZXIuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWydhYi1iYW5uZXIuY29tcG9uZW50LmNzcyddXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBBYkJhbm5lckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgaWQ6IGFueTtcclxuICBnYWxsZXJ5OmFueVtdID0gW107XHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBhdXRoU2VydmljZTogQXV0aFNlcnZpY2UpIHsgfVxyXG5cclxuICBuZ09uSW5pdCgpIHsgXHJcbiAgICB0aGlzLmlkID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3VzZXJJZCcpO1xyXG4gICAgdGhpcy5hdXRoU2VydmljZS5nZXRHYWxsZXJ5KHRoaXMuaWQpXHJcbiAgICAgICAgICAgICAgLnN1YnNjcmliZShkYXRhID0+IHtcclxuICAgICAgICAgICAgICBjb25zb2xlLmxvZyhkYXRhKTtcclxuICAgICAgICAgICAgICB0aGlzLmdhbGxlcnkgPSBkYXRhO1xyXG4gICAgICAgICAgICB9LCAoZXJyb3IpID0+IHtcclxuICAgICAgICAgICAgY29uc29sZS5lcnJvcihlcnJvcik7XHJcbiAgICAgICAgfSk7XHJcbiAgfVxyXG59Il19
