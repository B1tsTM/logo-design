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
var contests_service_1 = require('../../services/contests.service');
var designers_service_1 = require('../../services/designers.service');
var api_service_1 = require('../../services/api.service');
var index_1 = require('../../errors/index');
var angular2_notifications_1 = require('angular2-notifications');
var Observable_1 = require('rxjs/Observable');
require('rxjs/Rx');
var DesignersComponent = (function () {
    function DesignersComponent(contestsService, errorService, apiService, designersService, notificationsService, ngzone, cdRef, router) {
        this.contestsService = contestsService;
        this.errorService = errorService;
        this.apiService = apiService;
        this.designersService = designersService;
        this.notificationsService = notificationsService;
        this.ngzone = ngzone;
        this.cdRef = cdRef;
        this.router = router;
        // designers: any;
        // isLoading = false;
        // public options = {
        //     position: ["top","right"]
        //   };
        // constructor(private designersService: DesignersService, private notificationsService: NotificationsService) { }
        // ngOnInit() { 
        //   this.isLoading = true;
        //   this.designersService.getDesigners()
        //   .subscribe(designers => {
        //     this.designers = designers;
        //     this.designersService.designers = designers;
        //     this.isLoading = false;
        //     console.log(this.designers);
        //   }, error => {
        //     this.isLoading = false;
        //     this.notificationsService.error(error.title, error.error.message, {timeOut: 3000, showProgressBar: false})
        //   });
        // }
        this.designers = [];
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
            _this.isLoading = false;
        }, function (error) {
            _this.isLoading = false;
            _this.notificationsService.error(error.title, error.error.message, { timeOut: 3000, showProgressBar: false });
        });
    };
    DesignersComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.ngzone.runOutsideAngular(function () {
            Observable_1.Observable.fromEvent(_this.searchElRef.nativeElement, 'keyup')
                .debounceTime(1000)
                .distinctUntilChanged() // TODO Update: not working. Needs a custom callback to check for whitespace differences
                .subscribe(function (event) {
                _this.designersService.getFilteredDesigners(event.target.value) //searchString
                    .subscribe(function (designers) {
                    console.log(designers);
                    _this.designers = designers;
                    console.log(_this.designers);
                    _this.cdRef.detectChanges();
                }, function (error) {
                    _this.notificationsService.error(error.title, error.error.message, { timeOut: 3000, showProgressBar: false });
                });
            });
        });
    };
    DesignersComponent.prototype.goToDesignerDetails = function (nickname) {
        this.router.navigate(['/dizaineriai', nickname]);
    };
    __decorate([
        core_1.ViewChild('search'), 
        __metadata('design:type', core_1.ElementRef)
    ], DesignersComponent.prototype, "searchElRef", void 0);
    DesignersComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'designers',
            templateUrl: 'designers.component.html',
            styleUrls: ['designers.component.css']
        }), 
        __metadata('design:paramtypes', [contests_service_1.ContestsService, index_1.ErrorService, api_service_1.ApiService, designers_service_1.DesignersService, angular2_notifications_1.NotificationsService, core_1.NgZone, core_1.ChangeDetectorRef, router_1.Router])
    ], DesignersComponent);
    return DesignersComponent;
}());
exports.DesignersComponent = DesignersComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvZGVzaWduZXJzL2Rlc2lnbmVycy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUFvRixlQUFlLENBQUMsQ0FBQTtBQUNwRyx1QkFBdUIsaUJBQWlCLENBQUMsQ0FBQTtBQUV6QyxpQ0FBZ0MsaUNBQWlDLENBQUMsQ0FBQTtBQUNsRSxrQ0FBaUMsa0NBQWtDLENBQUMsQ0FBQTtBQUNwRSw0QkFBMkIsNEJBQTRCLENBQUMsQ0FBQTtBQUN4RCxzQkFBNkIsb0JBQW9CLENBQUMsQ0FBQTtBQUNsRCx1Q0FBcUMsd0JBQXdCLENBQUMsQ0FBQTtBQUM5RCwyQkFBMkIsaUJBQWlCLENBQUMsQ0FBQTtBQUM3QyxRQUFPLFNBQVMsQ0FBQyxDQUFBO0FBUWpCO0lBOEJFLDRCQUFvQixlQUFnQyxFQUNoQyxZQUEwQixFQUMxQixVQUFzQixFQUN0QixnQkFBa0MsRUFDbEMsb0JBQTBDLEVBQzFDLE1BQWMsRUFDZCxLQUF3QixFQUN4QixNQUFjO1FBUGQsb0JBQWUsR0FBZixlQUFlLENBQWlCO1FBQ2hDLGlCQUFZLEdBQVosWUFBWSxDQUFjO1FBQzFCLGVBQVUsR0FBVixVQUFVLENBQVk7UUFDdEIscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtRQUNsQyx5QkFBb0IsR0FBcEIsb0JBQW9CLENBQXNCO1FBQzFDLFdBQU0sR0FBTixNQUFNLENBQVE7UUFDZCxVQUFLLEdBQUwsS0FBSyxDQUFtQjtRQUN4QixXQUFNLEdBQU4sTUFBTSxDQUFRO1FBcENsQyxrQkFBa0I7UUFDbEIscUJBQXFCO1FBQ3JCLHFCQUFxQjtRQUNyQixnQ0FBZ0M7UUFDaEMsT0FBTztRQUNQLGtIQUFrSDtRQUVsSCxnQkFBZ0I7UUFDaEIsMkJBQTJCO1FBQzNCLHlDQUF5QztRQUN6Qyw4QkFBOEI7UUFDOUIsa0NBQWtDO1FBQ2xDLG1EQUFtRDtRQUNuRCw4QkFBOEI7UUFDOUIsbUNBQW1DO1FBQ25DLGtCQUFrQjtRQUNsQiw4QkFBOEI7UUFDOUIsaUhBQWlIO1FBQ2pILFFBQVE7UUFFUixJQUFJO1FBRUosY0FBUyxHQUFHLEVBQUUsQ0FBQztRQUNmLGNBQVMsR0FBRyxLQUFLLENBQUM7UUFFWCxZQUFPLEdBQUc7WUFDYixRQUFRLEVBQUUsQ0FBQyxLQUFLLEVBQUMsT0FBTyxDQUFDO1NBQzFCLENBQUM7SUFTa0MsQ0FBQztJQUV2QyxxQ0FBUSxHQUFSO1FBQUEsaUJBV0M7UUFWQyxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQztRQUN0QixJQUFJLENBQUMsZ0JBQWdCLENBQUMsWUFBWSxFQUFFO2FBQ25DLFNBQVMsQ0FBQyxVQUFBLFNBQVM7WUFDbEIsS0FBSSxDQUFDLFNBQVMsR0FBRyxTQUFTLENBQUM7WUFDM0IsS0FBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7UUFDekIsQ0FBQyxFQUFFLFVBQUEsS0FBSztZQUNOLEtBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDO1lBQ3ZCLEtBQUksQ0FBQyxvQkFBb0IsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLEtBQUssRUFBRSxLQUFLLENBQUMsS0FBSyxDQUFDLE9BQU8sRUFBRSxFQUFDLE9BQU8sRUFBRSxJQUFJLEVBQUUsZUFBZSxFQUFFLEtBQUssRUFBQyxDQUFDLENBQUE7UUFDNUcsQ0FBQyxDQUFDLENBQUE7SUFFSixDQUFDO0lBRUQsNENBQWUsR0FBZjtRQUFBLGlCQWlCQztRQWhCQyxJQUFJLENBQUMsTUFBTSxDQUFDLGlCQUFpQixDQUFDO1lBQzVCLHVCQUFVLENBQUMsU0FBUyxDQUFDLEtBQUksQ0FBQyxXQUFXLENBQUMsYUFBYSxFQUFFLE9BQU8sQ0FBQztpQkFDNUQsWUFBWSxDQUFDLElBQUksQ0FBQztpQkFDbEIsb0JBQW9CLEVBQUUsQ0FBQyx3RkFBd0Y7aUJBQy9HLFNBQVMsQ0FBQyxVQUFBLEtBQUs7Z0JBQ2QsS0FBSSxDQUFDLGdCQUFnQixDQUFDLG9CQUFvQixDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsY0FBYztxQkFDNUUsU0FBUyxDQUFDLFVBQUEsU0FBUztvQkFDbEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsQ0FBQztvQkFDdkIsS0FBSSxDQUFDLFNBQVMsR0FBRyxTQUFTLENBQUM7b0JBQzNCLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO29CQUM1QixLQUFJLENBQUMsS0FBSyxDQUFDLGFBQWEsRUFBRSxDQUFDO2dCQUM3QixDQUFDLEVBQUUsVUFBQSxLQUFLO29CQUNOLEtBQUksQ0FBQyxvQkFBb0IsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLEtBQUssRUFBRSxLQUFLLENBQUMsS0FBSyxDQUFDLE9BQU8sRUFBRSxFQUFDLE9BQU8sRUFBRSxJQUFJLEVBQUUsZUFBZSxFQUFFLEtBQUssRUFBQyxDQUFDLENBQUE7Z0JBQzVHLENBQUMsQ0FBQyxDQUFDO1lBQ0wsQ0FBQyxDQUFDLENBQUM7UUFDTCxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFRCxnREFBbUIsR0FBbkIsVUFBb0IsUUFBUTtRQUMxQixJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLGNBQWMsRUFBRSxRQUFRLENBQUMsQ0FBQyxDQUFDO0lBQ25ELENBQUM7SUFoREQ7UUFBQyxnQkFBUyxDQUFDLFFBQVEsQ0FBQzs7MkRBQUE7SUEvQnRCO1FBQUMsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixRQUFRLEVBQUUsV0FBVztZQUNyQixXQUFXLEVBQUUsMEJBQTBCO1lBQ3ZDLFNBQVMsRUFBRSxDQUFDLHlCQUF5QixDQUFDO1NBQ3ZDLENBQUM7OzBCQUFBO0lBNkVGLHlCQUFDO0FBQUQsQ0E1RUEsQUE0RUMsSUFBQTtBQTVFWSwwQkFBa0IscUJBNEU5QixDQUFBIiwiZmlsZSI6ImNvbXBvbmVudHMvZGVzaWduZXJzL2Rlc2lnbmVycy5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgVmlld0NoaWxkLCBFbGVtZW50UmVmLCBOZ1pvbmUsIENoYW5nZURldGVjdG9yUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcbmltcG9ydCB7IENvbnRlc3QgfSBmcm9tICcuLi8uLi9tb2RlbHMvY29udGVzdCc7XHJcbmltcG9ydCB7IENvbnRlc3RzU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL2NvbnRlc3RzLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBEZXNpZ25lcnNTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvZGVzaWduZXJzLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBBcGlTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvYXBpLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBFcnJvclNlcnZpY2UgfSBmcm9tICcuLi8uLi9lcnJvcnMvaW5kZXgnO1xyXG5pbXBvcnQgeyBOb3RpZmljYXRpb25zU2VydmljZSB9IGZyb20gJ2FuZ3VsYXIyLW5vdGlmaWNhdGlvbnMnO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcy9PYnNlcnZhYmxlJztcclxuaW1wb3J0ICdyeGpzL1J4JztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIG1vZHVsZUlkOiBtb2R1bGUuaWQsXHJcbiAgc2VsZWN0b3I6ICdkZXNpZ25lcnMnLFxyXG4gIHRlbXBsYXRlVXJsOiAnZGVzaWduZXJzLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnZGVzaWduZXJzLmNvbXBvbmVudC5jc3MnXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgRGVzaWduZXJzQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuICAvLyBkZXNpZ25lcnM6IGFueTtcclxuICAvLyBpc0xvYWRpbmcgPSBmYWxzZTtcclxuICAvLyBwdWJsaWMgb3B0aW9ucyA9IHtcclxuICAvLyAgICAgcG9zaXRpb246IFtcInRvcFwiLFwicmlnaHRcIl1cclxuICAvLyAgIH07XHJcbiAgLy8gY29uc3RydWN0b3IocHJpdmF0ZSBkZXNpZ25lcnNTZXJ2aWNlOiBEZXNpZ25lcnNTZXJ2aWNlLCBwcml2YXRlIG5vdGlmaWNhdGlvbnNTZXJ2aWNlOiBOb3RpZmljYXRpb25zU2VydmljZSkgeyB9XHJcblxyXG4gIC8vIG5nT25Jbml0KCkgeyBcclxuICAvLyAgIHRoaXMuaXNMb2FkaW5nID0gdHJ1ZTtcclxuICAvLyAgIHRoaXMuZGVzaWduZXJzU2VydmljZS5nZXREZXNpZ25lcnMoKVxyXG4gIC8vICAgLnN1YnNjcmliZShkZXNpZ25lcnMgPT4ge1xyXG4gIC8vICAgICB0aGlzLmRlc2lnbmVycyA9IGRlc2lnbmVycztcclxuICAvLyAgICAgdGhpcy5kZXNpZ25lcnNTZXJ2aWNlLmRlc2lnbmVycyA9IGRlc2lnbmVycztcclxuICAvLyAgICAgdGhpcy5pc0xvYWRpbmcgPSBmYWxzZTtcclxuICAvLyAgICAgY29uc29sZS5sb2codGhpcy5kZXNpZ25lcnMpO1xyXG4gIC8vICAgfSwgZXJyb3IgPT4ge1xyXG4gIC8vICAgICB0aGlzLmlzTG9hZGluZyA9IGZhbHNlO1xyXG4gIC8vICAgICB0aGlzLm5vdGlmaWNhdGlvbnNTZXJ2aWNlLmVycm9yKGVycm9yLnRpdGxlLCBlcnJvci5lcnJvci5tZXNzYWdlLCB7dGltZU91dDogMzAwMCwgc2hvd1Byb2dyZXNzQmFyOiBmYWxzZX0pXHJcbiAgLy8gICB9KTtcclxuXHJcbiAgLy8gfVxyXG5cclxuICBkZXNpZ25lcnMgPSBbXTtcclxuICBpc0xvYWRpbmcgPSBmYWxzZTtcclxuICBAVmlld0NoaWxkKCdzZWFyY2gnKSBzZWFyY2hFbFJlZjogRWxlbWVudFJlZjtcclxuICBwdWJsaWMgb3B0aW9ucyA9IHtcclxuICAgICAgcG9zaXRpb246IFtcInRvcFwiLFwicmlnaHRcIl1cclxuICAgIH07XHJcbiAgXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBjb250ZXN0c1NlcnZpY2U6IENvbnRlc3RzU2VydmljZSwgXHJcbiAgICAgICAgICAgICAgcHJpdmF0ZSBlcnJvclNlcnZpY2U6IEVycm9yU2VydmljZSxcclxuICAgICAgICAgICAgICBwcml2YXRlIGFwaVNlcnZpY2U6IEFwaVNlcnZpY2UsXHJcbiAgICAgICAgICAgICAgcHJpdmF0ZSBkZXNpZ25lcnNTZXJ2aWNlOiBEZXNpZ25lcnNTZXJ2aWNlLFxyXG4gICAgICAgICAgICAgIHByaXZhdGUgbm90aWZpY2F0aW9uc1NlcnZpY2U6IE5vdGlmaWNhdGlvbnNTZXJ2aWNlLFxyXG4gICAgICAgICAgICAgIHByaXZhdGUgbmd6b25lOiBOZ1pvbmUsXHJcbiAgICAgICAgICAgICAgcHJpdmF0ZSBjZFJlZjogQ2hhbmdlRGV0ZWN0b3JSZWYsXHJcbiAgICAgICAgICAgICAgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlcikgeyB9XHJcblxyXG4gIG5nT25Jbml0KCkgeyBcclxuICAgIHRoaXMuaXNMb2FkaW5nID0gdHJ1ZTtcclxuICAgIHRoaXMuZGVzaWduZXJzU2VydmljZS5nZXREZXNpZ25lcnMoKVxyXG4gICAgLnN1YnNjcmliZShkZXNpZ25lcnMgPT4ge1xyXG4gICAgICB0aGlzLmRlc2lnbmVycyA9IGRlc2lnbmVycztcclxuICAgICAgdGhpcy5pc0xvYWRpbmcgPSBmYWxzZTtcclxuICAgIH0sIGVycm9yID0+IHtcclxuICAgICAgdGhpcy5pc0xvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgdGhpcy5ub3RpZmljYXRpb25zU2VydmljZS5lcnJvcihlcnJvci50aXRsZSwgZXJyb3IuZXJyb3IubWVzc2FnZSwge3RpbWVPdXQ6IDMwMDAsIHNob3dQcm9ncmVzc0JhcjogZmFsc2V9KVxyXG4gICAgfSlcclxuICAgIFxyXG4gIH1cclxuXHJcbiAgbmdBZnRlclZpZXdJbml0KCkge1xyXG4gICAgdGhpcy5uZ3pvbmUucnVuT3V0c2lkZUFuZ3VsYXIoKCkgPT4ge1xyXG4gICAgICBPYnNlcnZhYmxlLmZyb21FdmVudCh0aGlzLnNlYXJjaEVsUmVmLm5hdGl2ZUVsZW1lbnQsICdrZXl1cCcpXHJcbiAgICAgIC5kZWJvdW5jZVRpbWUoMTAwMClcclxuICAgICAgLmRpc3RpbmN0VW50aWxDaGFuZ2VkKCkgLy8gVE9ETyBVcGRhdGU6IG5vdCB3b3JraW5nLiBOZWVkcyBhIGN1c3RvbSBjYWxsYmFjayB0byBjaGVjayBmb3Igd2hpdGVzcGFjZSBkaWZmZXJlbmNlc1xyXG4gICAgICAuc3Vic2NyaWJlKGV2ZW50ID0+IHtcclxuICAgICAgICB0aGlzLmRlc2lnbmVyc1NlcnZpY2UuZ2V0RmlsdGVyZWREZXNpZ25lcnMoZXZlbnQudGFyZ2V0LnZhbHVlKSAvL3NlYXJjaFN0cmluZ1xyXG4gICAgICAgIC5zdWJzY3JpYmUoZGVzaWduZXJzID0+IHtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKGRlc2lnbmVycyk7XHJcbiAgICAgICAgICB0aGlzLmRlc2lnbmVycyA9IGRlc2lnbmVycztcclxuICAgICAgICAgIGNvbnNvbGUubG9nKHRoaXMuZGVzaWduZXJzKTtcclxuICAgICAgICAgIHRoaXMuY2RSZWYuZGV0ZWN0Q2hhbmdlcygpO1xyXG4gICAgICAgIH0sIGVycm9yID0+IHtcclxuICAgICAgICAgIHRoaXMubm90aWZpY2F0aW9uc1NlcnZpY2UuZXJyb3IoZXJyb3IudGl0bGUsIGVycm9yLmVycm9yLm1lc3NhZ2UsIHt0aW1lT3V0OiAzMDAwLCBzaG93UHJvZ3Jlc3NCYXI6IGZhbHNlfSlcclxuICAgICAgICB9KTtcclxuICAgICAgfSk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGdvVG9EZXNpZ25lckRldGFpbHMobmlja25hbWUpIHtcclxuICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFsnL2RpemFpbmVyaWFpJywgbmlja25hbWVdKTtcclxuICB9XHJcblxyXG5cclxufSJdfQ==
