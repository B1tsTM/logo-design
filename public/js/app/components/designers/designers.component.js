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
var designers_service_1 = require('../../services/designers.service');
var angular2_notifications_1 = require('angular2-notifications');
var DesignersComponent = (function () {
    function DesignersComponent(designersService, notificationsService) {
        this.designersService = designersService;
        this.notificationsService = notificationsService;
        this.isLoading = false;
        this.options = {
            position: ["top", "right"]
        };
    }
    DesignersComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.isLoading = true;
        this.designersService.getDesigners()
            .subscribe(function (designers) {
            _this.designers = designers;
            _this.designersService.designers = designers;
            _this.isLoading = false;
            console.log(_this.designers);
        }, function (error) {
            _this.isLoading = false;
            _this.notificationsService.error('Įvyko klaida', 'Nepavyko gauti dizainerių informacijos', { timeOut: 3000, showProgressBar: false });
        });
    };
    DesignersComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'designers',
            templateUrl: 'designers.component.html',
            styleUrls: ['designers.component.css']
        }), 
        __metadata('design:paramtypes', [designers_service_1.DesignersService, angular2_notifications_1.NotificationsService])
    ], DesignersComponent);
    return DesignersComponent;
}());
exports.DesignersComponent = DesignersComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvZGVzaWduZXJzL2Rlc2lnbmVycy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUFrQyxlQUFlLENBQUMsQ0FBQTtBQUNsRCxrQ0FBaUMsa0NBQWtDLENBQUMsQ0FBQTtBQUNwRSx1Q0FBcUMsd0JBQXdCLENBQUMsQ0FBQTtBQVE5RDtJQU1FLDRCQUFvQixnQkFBa0MsRUFBVSxvQkFBMEM7UUFBdEYscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtRQUFVLHlCQUFvQixHQUFwQixvQkFBb0IsQ0FBc0I7UUFKMUcsY0FBUyxHQUFHLEtBQUssQ0FBQztRQUNYLFlBQU8sR0FBRztZQUNiLFFBQVEsRUFBRSxDQUFDLEtBQUssRUFBQyxPQUFPLENBQUM7U0FDMUIsQ0FBQztJQUMwRyxDQUFDO0lBRS9HLHFDQUFRLEdBQVI7UUFBQSxpQkFhQztRQVpDLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDO1FBQ3RCLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxZQUFZLEVBQUU7YUFDbkMsU0FBUyxDQUFDLFVBQUEsU0FBUztZQUNsQixLQUFJLENBQUMsU0FBUyxHQUFHLFNBQVMsQ0FBQztZQUMzQixLQUFJLENBQUMsZ0JBQWdCLENBQUMsU0FBUyxHQUFHLFNBQVMsQ0FBQztZQUM1QyxLQUFJLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQztZQUN2QixPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUM5QixDQUFDLEVBQUUsVUFBQSxLQUFLO1lBQ04sS0FBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7WUFDdkIsS0FBSSxDQUFDLG9CQUFvQixDQUFDLEtBQUssQ0FBQyxjQUFjLEVBQUUsd0NBQXdDLEVBQUUsRUFBQyxPQUFPLEVBQUUsSUFBSSxFQUFFLGVBQWUsRUFBRSxLQUFLLEVBQUMsQ0FBQyxDQUFBO1FBQ3BJLENBQUMsQ0FBQyxDQUFDO0lBRUwsQ0FBQztJQTNCSDtRQUFDLGdCQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsUUFBUSxFQUFFLFdBQVc7WUFDckIsV0FBVyxFQUFFLDBCQUEwQjtZQUN2QyxTQUFTLEVBQUUsQ0FBQyx5QkFBeUIsQ0FBQztTQUN2QyxDQUFDOzswQkFBQTtJQXVCRix5QkFBQztBQUFELENBdEJBLEFBc0JDLElBQUE7QUF0QlksMEJBQWtCLHFCQXNCOUIsQ0FBQSIsImZpbGUiOiJjb21wb25lbnRzL2Rlc2lnbmVycy9kZXNpZ25lcnMuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgRGVzaWduZXJzU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL2Rlc2lnbmVycy5zZXJ2aWNlJztcclxuaW1wb3J0IHsgTm90aWZpY2F0aW9uc1NlcnZpY2UgfSBmcm9tICdhbmd1bGFyMi1ub3RpZmljYXRpb25zJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIG1vZHVsZUlkOiBtb2R1bGUuaWQsXHJcbiAgc2VsZWN0b3I6ICdkZXNpZ25lcnMnLFxyXG4gIHRlbXBsYXRlVXJsOiAnZGVzaWduZXJzLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnZGVzaWduZXJzLmNvbXBvbmVudC5jc3MnXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgRGVzaWduZXJzQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuICBkZXNpZ25lcnM6IGFueTtcclxuICBpc0xvYWRpbmcgPSBmYWxzZTtcclxuICBwdWJsaWMgb3B0aW9ucyA9IHtcclxuICAgICAgcG9zaXRpb246IFtcInRvcFwiLFwicmlnaHRcIl1cclxuICAgIH07XHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBkZXNpZ25lcnNTZXJ2aWNlOiBEZXNpZ25lcnNTZXJ2aWNlLCBwcml2YXRlIG5vdGlmaWNhdGlvbnNTZXJ2aWNlOiBOb3RpZmljYXRpb25zU2VydmljZSkgeyB9XHJcblxyXG4gIG5nT25Jbml0KCkgeyBcclxuICAgIHRoaXMuaXNMb2FkaW5nID0gdHJ1ZTtcclxuICAgIHRoaXMuZGVzaWduZXJzU2VydmljZS5nZXREZXNpZ25lcnMoKVxyXG4gICAgLnN1YnNjcmliZShkZXNpZ25lcnMgPT4ge1xyXG4gICAgICB0aGlzLmRlc2lnbmVycyA9IGRlc2lnbmVycztcclxuICAgICAgdGhpcy5kZXNpZ25lcnNTZXJ2aWNlLmRlc2lnbmVycyA9IGRlc2lnbmVycztcclxuICAgICAgdGhpcy5pc0xvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgY29uc29sZS5sb2codGhpcy5kZXNpZ25lcnMpO1xyXG4gICAgfSwgZXJyb3IgPT4ge1xyXG4gICAgICB0aGlzLmlzTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICB0aGlzLm5vdGlmaWNhdGlvbnNTZXJ2aWNlLmVycm9yKCfErnZ5a28ga2xhaWRhJywgJ05lcGF2eWtvIGdhdXRpIGRpemFpbmVyacWzIGluZm9ybWFjaWpvcycsIHt0aW1lT3V0OiAzMDAwLCBzaG93UHJvZ3Jlc3NCYXI6IGZhbHNlfSlcclxuICAgIH0pO1xyXG5cclxuICB9XHJcbn0iXX0=
