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
            _this.notificationsService.error(error.title, error.error.message, { timeOut: 3000, showProgressBar: false });
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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvZGVzaWduZXJzL2Rlc2lnbmVycy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUFrQyxlQUFlLENBQUMsQ0FBQTtBQUNsRCxrQ0FBaUMsa0NBQWtDLENBQUMsQ0FBQTtBQUNwRSx1Q0FBcUMsd0JBQXdCLENBQUMsQ0FBQTtBQVE5RDtJQU1FLDRCQUFvQixnQkFBa0MsRUFBVSxvQkFBMEM7UUFBdEYscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtRQUFVLHlCQUFvQixHQUFwQixvQkFBb0IsQ0FBc0I7UUFKMUcsY0FBUyxHQUFHLEtBQUssQ0FBQztRQUNYLFlBQU8sR0FBRztZQUNiLFFBQVEsRUFBRSxDQUFDLEtBQUssRUFBQyxPQUFPLENBQUM7U0FDMUIsQ0FBQztJQUMwRyxDQUFDO0lBRS9HLHFDQUFRLEdBQVI7UUFBQSxpQkFhQztRQVpDLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDO1FBQ3RCLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxZQUFZLEVBQUU7YUFDbkMsU0FBUyxDQUFDLFVBQUEsU0FBUztZQUNsQixLQUFJLENBQUMsU0FBUyxHQUFHLFNBQVMsQ0FBQztZQUMzQixLQUFJLENBQUMsZ0JBQWdCLENBQUMsU0FBUyxHQUFHLFNBQVMsQ0FBQztZQUM1QyxLQUFJLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQztZQUN2QixPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUM5QixDQUFDLEVBQUUsVUFBQSxLQUFLO1lBQ04sS0FBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7WUFDdkIsS0FBSSxDQUFDLG9CQUFvQixDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsS0FBSyxFQUFFLEtBQUssQ0FBQyxLQUFLLENBQUMsT0FBTyxFQUFFLEVBQUMsT0FBTyxFQUFFLElBQUksRUFBRSxlQUFlLEVBQUUsS0FBSyxFQUFDLENBQUMsQ0FBQTtRQUM1RyxDQUFDLENBQUMsQ0FBQztJQUVMLENBQUM7SUEzQkg7UUFBQyxnQkFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFFBQVEsRUFBRSxXQUFXO1lBQ3JCLFdBQVcsRUFBRSwwQkFBMEI7WUFDdkMsU0FBUyxFQUFFLENBQUMseUJBQXlCLENBQUM7U0FDdkMsQ0FBQzs7MEJBQUE7SUF1QkYseUJBQUM7QUFBRCxDQXRCQSxBQXNCQyxJQUFBO0FBdEJZLDBCQUFrQixxQkFzQjlCLENBQUEiLCJmaWxlIjoiY29tcG9uZW50cy9kZXNpZ25lcnMvZGVzaWduZXJzLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IERlc2lnbmVyc1NlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9kZXNpZ25lcnMuc2VydmljZSc7XHJcbmltcG9ydCB7IE5vdGlmaWNhdGlvbnNTZXJ2aWNlIH0gZnJvbSAnYW5ndWxhcjItbm90aWZpY2F0aW9ucyc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBtb2R1bGVJZDogbW9kdWxlLmlkLFxyXG4gIHNlbGVjdG9yOiAnZGVzaWduZXJzJyxcclxuICB0ZW1wbGF0ZVVybDogJ2Rlc2lnbmVycy5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJ2Rlc2lnbmVycy5jb21wb25lbnQuY3NzJ11cclxufSlcclxuZXhwb3J0IGNsYXNzIERlc2lnbmVyc0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgZGVzaWduZXJzOiBhbnk7XHJcbiAgaXNMb2FkaW5nID0gZmFsc2U7XHJcbiAgcHVibGljIG9wdGlvbnMgPSB7XHJcbiAgICAgIHBvc2l0aW9uOiBbXCJ0b3BcIixcInJpZ2h0XCJdXHJcbiAgICB9O1xyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZGVzaWduZXJzU2VydmljZTogRGVzaWduZXJzU2VydmljZSwgcHJpdmF0ZSBub3RpZmljYXRpb25zU2VydmljZTogTm90aWZpY2F0aW9uc1NlcnZpY2UpIHsgfVxyXG5cclxuICBuZ09uSW5pdCgpIHsgXHJcbiAgICB0aGlzLmlzTG9hZGluZyA9IHRydWU7XHJcbiAgICB0aGlzLmRlc2lnbmVyc1NlcnZpY2UuZ2V0RGVzaWduZXJzKClcclxuICAgIC5zdWJzY3JpYmUoZGVzaWduZXJzID0+IHtcclxuICAgICAgdGhpcy5kZXNpZ25lcnMgPSBkZXNpZ25lcnM7XHJcbiAgICAgIHRoaXMuZGVzaWduZXJzU2VydmljZS5kZXNpZ25lcnMgPSBkZXNpZ25lcnM7XHJcbiAgICAgIHRoaXMuaXNMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgIGNvbnNvbGUubG9nKHRoaXMuZGVzaWduZXJzKTtcclxuICAgIH0sIGVycm9yID0+IHtcclxuICAgICAgdGhpcy5pc0xvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgdGhpcy5ub3RpZmljYXRpb25zU2VydmljZS5lcnJvcihlcnJvci50aXRsZSwgZXJyb3IuZXJyb3IubWVzc2FnZSwge3RpbWVPdXQ6IDMwMDAsIHNob3dQcm9ncmVzc0JhcjogZmFsc2V9KVxyXG4gICAgfSk7XHJcblxyXG4gIH1cclxufSJdfQ==
