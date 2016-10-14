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
var error_service_1 = require('./error.service');
var ErrorComponent = (function () {
    function ErrorComponent(errorService) {
        this.errorService = errorService;
        this.errorDisplay = 'none';
    }
    ErrorComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.errorService.errorOccurred.subscribe(function (errorData) {
            _this.errorData = errorData;
            _this.errorDisplay = 'block';
        });
    };
    ErrorComponent.prototype.onErrorHandled = function () {
        this.errorDisplay = 'none';
    };
    ErrorComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'my-error',
            templateUrl: 'error.component.html',
            styleUrls: ['error.component.css']
        }), 
        __metadata('design:paramtypes', [error_service_1.ErrorService])
    ], ErrorComponent);
    return ErrorComponent;
}());
exports.ErrorComponent = ErrorComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVycm9ycy9lcnJvci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUFrQyxlQUFlLENBQUMsQ0FBQTtBQUVsRCw4QkFBNkIsaUJBQWlCLENBQUMsQ0FBQTtBQVEvQztJQUlFLHdCQUFvQixZQUEwQjtRQUExQixpQkFBWSxHQUFaLFlBQVksQ0FBYztRQUg5QyxpQkFBWSxHQUFHLE1BQU0sQ0FBQztJQUc0QixDQUFDO0lBRW5ELGlDQUFRLEdBQVI7UUFBQSxpQkFPRTtRQU5BLElBQUksQ0FBQyxZQUFZLENBQUMsYUFBYSxDQUFDLFNBQVMsQ0FDdkMsVUFBQSxTQUFTO1lBQ1AsS0FBSSxDQUFDLFNBQVMsR0FBRyxTQUFTLENBQUM7WUFDM0IsS0FBSSxDQUFDLFlBQVksR0FBRyxPQUFPLENBQUM7UUFDOUIsQ0FBQyxDQUNGLENBQUM7SUFDSCxDQUFDO0lBRUYsdUNBQWMsR0FBZDtRQUNFLElBQUksQ0FBQyxZQUFZLEdBQUcsTUFBTSxDQUFDO0lBQzdCLENBQUM7SUF2Qkg7UUFBQyxnQkFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFFBQVEsRUFBRSxVQUFVO1lBQ3BCLFdBQVcsRUFBRSxzQkFBc0I7WUFDbkMsU0FBUyxFQUFFLENBQUMscUJBQXFCLENBQUM7U0FDbkMsQ0FBQzs7c0JBQUE7SUFtQkYscUJBQUM7QUFBRCxDQWxCQSxBQWtCQyxJQUFBO0FBbEJZLHNCQUFjLGlCQWtCMUIsQ0FBQSIsImZpbGUiOiJlcnJvcnMvZXJyb3IuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgRXJyb3IgfSBmcm9tICcuL2Vycm9yJztcclxuaW1wb3J0IHsgRXJyb3JTZXJ2aWNlIH0gZnJvbSAnLi9lcnJvci5zZXJ2aWNlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIG1vZHVsZUlkOiBtb2R1bGUuaWQsXHJcbiAgc2VsZWN0b3I6ICdteS1lcnJvcicsXHJcbiAgdGVtcGxhdGVVcmw6ICdlcnJvci5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJ2Vycm9yLmNvbXBvbmVudC5jc3MnXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgRXJyb3JDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gIGVycm9yRGlzcGxheSA9ICdub25lJztcclxuICBlcnJvckRhdGE6IEVycm9yO1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGVycm9yU2VydmljZTogRXJyb3JTZXJ2aWNlKSB7IH1cclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgICB0aGlzLmVycm9yU2VydmljZS5lcnJvck9jY3VycmVkLnN1YnNjcmliZShcclxuICAgICAgZXJyb3JEYXRhID0+IHtcclxuICAgICAgICB0aGlzLmVycm9yRGF0YSA9IGVycm9yRGF0YTtcclxuICAgICAgICB0aGlzLmVycm9yRGlzcGxheSA9ICdibG9jayc7XHJcbiAgICAgIH1cclxuICAgICk7XHJcbiAgIH1cclxuXHJcbiAgb25FcnJvckhhbmRsZWQoKSB7XHJcbiAgICB0aGlzLmVycm9yRGlzcGxheSA9ICdub25lJztcclxuICB9XHJcbn0iXX0=
