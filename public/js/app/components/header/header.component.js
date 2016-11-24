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
var index_1 = require('../../errors/index');
var angular2_notifications_1 = require('angular2-notifications');
var Observable_1 = require('rxjs/Observable');
require('rxjs/Rx');
var HeaderComponent = (function () {
    function HeaderComponent(contestsService, errorService, notificationsService, ngzone, cdRef, router) {
        this.contestsService = contestsService;
        this.errorService = errorService;
        this.notificationsService = notificationsService;
        this.ngzone = ngzone;
        this.cdRef = cdRef;
        this.router = router;
        //contest: Contest = null;
        this.contests = [];
        this.isLoading = false;
        this.status = "Aktyvus";
        this.firstTabActive = true;
        this.secondTabActive = false;
        this.options = {
            position: ["top", "right"]
        };
    }
    HeaderComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.isLoading = true;
        this.contestsService.getAllContests()
            .subscribe(function (contests) {
            _this.contests = contests;
            _this.contestsService.contests = contests;
            _this.isLoading = false;
            console.log(_this.contests);
        }, function (error) {
            _this.isLoading = false;
            _this.notificationsService.error(error.title, error.error.message, { timeOut: 3000, showProgressBar: false });
        });
    };
    HeaderComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.ngzone.runOutsideAngular(function () {
            Observable_1.Observable.fromEvent(_this.searchElRef.nativeElement, 'keyup')
                .debounceTime(1000)
                .distinctUntilChanged() // TODO Update: not working. Needs a custom callback to check for whitespace differences
                .subscribe(function (event) {
                _this.contestsService.getFilteredContests(event.target.value) //searchString
                    .subscribe(function (contests) {
                    //console.log('Filter layer 1 contests');
                    //console.log(contests);
                    var unfilteredContests = contests;
                    var filteredContests = unfilteredContests.filter(function (item) { return item.status == _this.status; });
                    //console.log('Filter layer 2 contests');
                    //console.log(filteredContests);
                    _this.contests = filteredContests;
                    _this.cdRef.detectChanges();
                }, function (error) {
                    _this.notificationsService.error(error.title, error.error.message, { timeOut: 3000, showProgressBar: false });
                });
            });
        });
    };
    HeaderComponent.prototype.selectFirstTab = function () {
        var _this = this;
        this.firstTabActive = true;
        this.secondTabActive = false;
        if (this.status == "Aktyvus") {
        }
        else {
            this.status = "Aktyvus";
            this.isLoading = true;
            this.searchElRef.nativeElement.value = '';
            this.contestsService.getFilteredContests("") // = get all
                .subscribe(function (contests) {
                //console.log('Filter layer 1 contests');
                //console.log(contests);
                var unfilteredContests = contests;
                var filteredContests = unfilteredContests.filter(function (item) { return item.status == _this.status; });
                //console.log('Filter layer 2 contests');
                //console.log(filteredContests);
                _this.contests = filteredContests;
                _this.cdRef.detectChanges();
                _this.isLoading = false;
            }, function (error) {
                _this.isLoading = false;
                _this.notificationsService.error(error.title, error.error.message, { timeOut: 3000, showProgressBar: false });
            });
        }
    };
    HeaderComponent.prototype.selectSecondTab = function () {
        var _this = this;
        this.firstTabActive = false;
        this.secondTabActive = true;
        if (this.status == "Užbaigtas") {
        }
        else {
            this.status = "Užbaigtas";
            this.isLoading = true;
            this.searchElRef.nativeElement.value = '';
            this.contestsService.getFilteredContests("") // = get all
                .subscribe(function (contests) {
                //console.log('Filter layer 1 contests');
                //console.log(contests);
                var unfilteredContests = contests;
                var filteredContests = unfilteredContests.filter(function (item) { return item.status == _this.status; });
                //console.log('Filter layer 2 contests');
                //console.log(filteredContests);
                _this.contests = filteredContests;
                _this.cdRef.detectChanges();
                _this.isLoading = false;
            }, function (error) {
                _this.isLoading = false;
                _this.notificationsService.error(error.title, error.error.message, { timeOut: 3000, showProgressBar: false });
            });
        }
    };
    HeaderComponent.prototype.goToContestDetails = function (idName) {
        this.router.navigate(['/konkursai', idName]);
    };
    __decorate([
        core_1.ViewChild('search'), 
        __metadata('design:type', core_1.ElementRef)
    ], HeaderComponent.prototype, "searchElRef", void 0);
    HeaderComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'app-header',
            templateUrl: 'header.component.html',
            styleUrls: ['header.component.css']
        }), 
        __metadata('design:paramtypes', [contests_service_1.ContestsService, index_1.ErrorService, angular2_notifications_1.NotificationsService, core_1.NgZone, core_1.ChangeDetectorRef, router_1.Router])
    ], HeaderComponent);
    return HeaderComponent;
}());
exports.HeaderComponent = HeaderComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvaGVhZGVyL2hlYWRlci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUFvRixlQUFlLENBQUMsQ0FBQTtBQUNwRyx1QkFBdUIsaUJBQWlCLENBQUMsQ0FBQTtBQUV6QyxpQ0FBZ0MsaUNBQWlDLENBQUMsQ0FBQTtBQUNsRSxzQkFBNkIsb0JBQW9CLENBQUMsQ0FBQTtBQUNsRCx1Q0FBcUMsd0JBQXdCLENBQUMsQ0FBQTtBQUM5RCwyQkFBMkIsaUJBQWlCLENBQUMsQ0FBQTtBQUM3QyxRQUFPLFNBQVMsQ0FBQyxDQUFBO0FBUWpCO0lBWUUseUJBQW9CLGVBQWdDLEVBQ2hDLFlBQTBCLEVBQzFCLG9CQUEwQyxFQUMxQyxNQUFjLEVBQ2QsS0FBd0IsRUFDeEIsTUFBYztRQUxkLG9CQUFlLEdBQWYsZUFBZSxDQUFpQjtRQUNoQyxpQkFBWSxHQUFaLFlBQVksQ0FBYztRQUMxQix5QkFBb0IsR0FBcEIsb0JBQW9CLENBQXNCO1FBQzFDLFdBQU0sR0FBTixNQUFNLENBQVE7UUFDZCxVQUFLLEdBQUwsS0FBSyxDQUFtQjtRQUN4QixXQUFNLEdBQU4sTUFBTSxDQUFRO1FBaEJsQywwQkFBMEI7UUFDMUIsYUFBUSxHQUFRLEVBQUUsQ0FBQztRQUNuQixjQUFTLEdBQUcsS0FBSyxDQUFDO1FBQ2xCLFdBQU0sR0FBRyxTQUFTLENBQUM7UUFDbkIsbUJBQWMsR0FBRyxJQUFJLENBQUM7UUFDdEIsb0JBQWUsR0FBRyxLQUFLLENBQUM7UUFFakIsWUFBTyxHQUFHO1lBQ2IsUUFBUSxFQUFFLENBQUMsS0FBSyxFQUFDLE9BQU8sQ0FBQztTQUMxQixDQUFDO0lBT2tDLENBQUM7SUFFdkMsa0NBQVEsR0FBUjtRQUFBLGlCQVlDO1FBWEMsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUM7UUFDdEIsSUFBSSxDQUFDLGVBQWUsQ0FBQyxjQUFjLEVBQUU7YUFDcEMsU0FBUyxDQUFDLFVBQUEsUUFBUTtZQUNq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ZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBWaWV3Q2hpbGQsIEVsZW1lbnRSZWYsIE5nWm9uZSwgQ2hhbmdlRGV0ZWN0b3JSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuaW1wb3J0IHsgQ29udGVzdCB9IGZyb20gJy4uLy4uL21vZGVscy9jb250ZXN0JztcclxuaW1wb3J0IHsgQ29udGVzdHNTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvY29udGVzdHMuc2VydmljZSc7XHJcbmltcG9ydCB7IEVycm9yU2VydmljZSB9IGZyb20gJy4uLy4uL2Vycm9ycy9pbmRleCc7XHJcbmltcG9ydCB7IE5vdGlmaWNhdGlvbnNTZXJ2aWNlIH0gZnJvbSAnYW5ndWxhcjItbm90aWZpY2F0aW9ucyc7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzL09ic2VydmFibGUnO1xyXG5pbXBvcnQgJ3J4anMvUngnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcclxuICBzZWxlY3RvcjogJ2FwcC1oZWFkZXInLFxyXG4gIHRlbXBsYXRlVXJsOiAnaGVhZGVyLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnaGVhZGVyLmNvbXBvbmVudC5jc3MnXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgSGVhZGVyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuICAvL2NvbnRlc3Q6IENvbnRlc3QgPSBudWxsO1xyXG4gIGNvbnRlc3RzOiBhbnkgPSBbXTtcclxuICBpc0xvYWRpbmcgPSBmYWxzZTtcclxuICBzdGF0dXMgPSBcIkFrdHl2dXNcIjtcclxuICBmaXJzdFRhYkFjdGl2ZSA9IHRydWU7XHJcbiAgc2Vjb25kVGFiQWN0aXZlID0gZmFsc2U7XHJcbiAgQFZpZXdDaGlsZCgnc2VhcmNoJykgc2VhcmNoRWxSZWY6IEVsZW1lbnRSZWY7XHJcbiAgcHVibGljIG9wdGlvbnMgPSB7XHJcbiAgICAgIHBvc2l0aW9uOiBbXCJ0b3BcIixcInJpZ2h0XCJdXHJcbiAgICB9O1xyXG4gIFxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgY29udGVzdHNTZXJ2aWNlOiBDb250ZXN0c1NlcnZpY2UsIFxyXG4gICAgICAgICAgICAgIHByaXZhdGUgZXJyb3JTZXJ2aWNlOiBFcnJvclNlcnZpY2UsXHJcbiAgICAgICAgICAgICAgcHJpdmF0ZSBub3RpZmljYXRpb25zU2VydmljZTogTm90aWZpY2F0aW9uc1NlcnZpY2UsXHJcbiAgICAgICAgICAgICAgcHJpdmF0ZSBuZ3pvbmU6IE5nWm9uZSxcclxuICAgICAgICAgICAgICBwcml2YXRlIGNkUmVmOiBDaGFuZ2VEZXRlY3RvclJlZixcclxuICAgICAgICAgICAgICBwcml2YXRlIHJvdXRlcjogUm91dGVyKSB7IH1cclxuXHJcbiAgbmdPbkluaXQoKSB7IFxyXG4gICAgdGhpcy5pc0xvYWRpbmcgPSB0cnVlO1xyXG4gICAgdGhpcy5jb250ZXN0c1NlcnZpY2UuZ2V0QWxsQ29udGVzdHMoKVxyXG4gICAgLnN1YnNjcmliZShjb250ZXN0cyA9PiB7XHJcbiAgICAgIHRoaXMuY29udGVzdHMgPSBjb250ZXN0cztcclxuICAgICAgdGhpcy5jb250ZXN0c1NlcnZpY2UuY29udGVzdHMgPSBjb250ZXN0cztcclxuICAgICAgdGhpcy5pc0xvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgY29uc29sZS5sb2codGhpcy5jb250ZXN0cyk7XHJcbiAgICB9LCBlcnJvciA9PiB7XHJcbiAgICAgIHRoaXMuaXNMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgIHRoaXMubm90aWZpY2F0aW9uc1NlcnZpY2UuZXJyb3IoZXJyb3IudGl0bGUsIGVycm9yLmVycm9yLm1lc3NhZ2UsIHt0aW1lT3V0OiAzMDAwLCBzaG93UHJvZ3Jlc3NCYXI6IGZhbHNlfSlcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgbmdBZnRlclZpZXdJbml0KCkge1xyXG4gICAgdGhpcy5uZ3pvbmUucnVuT3V0c2lkZUFuZ3VsYXIoKCkgPT4ge1xyXG4gICAgICBPYnNlcnZhYmxlLmZyb21FdmVudCh0aGlzLnNlYXJjaEVsUmVmLm5hdGl2ZUVsZW1lbnQsICdrZXl1cCcpXHJcbiAgICAgIC5kZWJvdW5jZVRpbWUoMTAwMClcclxuICAgICAgLmRpc3RpbmN0VW50aWxDaGFuZ2VkKCkgLy8gVE9ETyBVcGRhdGU6IG5vdCB3b3JraW5nLiBOZWVkcyBhIGN1c3RvbSBjYWxsYmFjayB0byBjaGVjayBmb3Igd2hpdGVzcGFjZSBkaWZmZXJlbmNlc1xyXG4gICAgICAuc3Vic2NyaWJlKGV2ZW50ID0+IHtcclxuICAgICAgICB0aGlzLmNvbnRlc3RzU2VydmljZS5nZXRGaWx0ZXJlZENvbnRlc3RzKGV2ZW50LnRhcmdldC52YWx1ZSkgLy9zZWFyY2hTdHJpbmdcclxuICAgICAgICAuc3Vic2NyaWJlKGNvbnRlc3RzID0+IHtcclxuICAgICAgICAgIC8vY29uc29sZS5sb2coJ0ZpbHRlciBsYXllciAxIGNvbnRlc3RzJyk7XHJcbiAgICAgICAgICAvL2NvbnNvbGUubG9nKGNvbnRlc3RzKTtcclxuICAgICAgICAgIHZhciB1bmZpbHRlcmVkQ29udGVzdHMgPSBjb250ZXN0cztcclxuICAgICAgICAgIHZhciBmaWx0ZXJlZENvbnRlc3RzID0gdW5maWx0ZXJlZENvbnRlc3RzLmZpbHRlcigoaXRlbTogYW55KSA9PiBpdGVtLnN0YXR1cyA9PSB0aGlzLnN0YXR1cyk7XHJcbiAgICAgICAgICAvL2NvbnNvbGUubG9nKCdGaWx0ZXIgbGF5ZXIgMiBjb250ZXN0cycpO1xyXG4gICAgICAgICAgLy9jb25zb2xlLmxvZyhmaWx0ZXJlZENvbnRlc3RzKTtcclxuICAgICAgICAgIHRoaXMuY29udGVzdHMgPSBmaWx0ZXJlZENvbnRlc3RzO1xyXG4gICAgICAgICAgdGhpcy5jZFJlZi5kZXRlY3RDaGFuZ2VzKCk7XHJcbiAgICAgICAgfSwgZXJyb3IgPT4ge1xyXG4gICAgICAgICAgdGhpcy5ub3RpZmljYXRpb25zU2VydmljZS5lcnJvcihlcnJvci50aXRsZSwgZXJyb3IuZXJyb3IubWVzc2FnZSwge3RpbWVPdXQ6IDMwMDAsIHNob3dQcm9ncmVzc0JhcjogZmFsc2V9KVxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgc2VsZWN0Rmlyc3RUYWIoKSB7XHJcbiAgICB0aGlzLmZpcnN0VGFiQWN0aXZlID0gdHJ1ZTtcclxuICAgIHRoaXMuc2Vjb25kVGFiQWN0aXZlID0gZmFsc2U7XHJcbiAgICBpZiAodGhpcy5zdGF0dXMgPT0gXCJBa3R5dnVzXCIpIHtcclxuICAgICAgLy9kbyBub3RoaW5nXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgdGhpcy5zdGF0dXMgPSBcIkFrdHl2dXNcIjtcclxuICAgIHRoaXMuaXNMb2FkaW5nID0gdHJ1ZTtcclxuICAgIHRoaXMuc2VhcmNoRWxSZWYubmF0aXZlRWxlbWVudC52YWx1ZSA9ICcnO1xyXG4gICAgdGhpcy5jb250ZXN0c1NlcnZpY2UuZ2V0RmlsdGVyZWRDb250ZXN0cyhcIlwiKSAvLyA9IGdldCBhbGxcclxuICAgICAgICAuc3Vic2NyaWJlKGNvbnRlc3RzID0+IHtcclxuICAgICAgICAgIC8vY29uc29sZS5sb2coJ0ZpbHRlciBsYXllciAxIGNvbnRlc3RzJyk7XHJcbiAgICAgICAgICAvL2NvbnNvbGUubG9nKGNvbnRlc3RzKTtcclxuICAgICAgICAgIHZhciB1bmZpbHRlcmVkQ29udGVzdHMgPSBjb250ZXN0cztcclxuICAgICAgICAgIHZhciBmaWx0ZXJlZENvbnRlc3RzID0gdW5maWx0ZXJlZENvbnRlc3RzLmZpbHRlcigoaXRlbTogYW55KSA9PiBpdGVtLnN0YXR1cyA9PSB0aGlzLnN0YXR1cyk7XHJcbiAgICAgICAgICAvL2NvbnNvbGUubG9nKCdGaWx0ZXIgbGF5ZXIgMiBjb250ZXN0cycpO1xyXG4gICAgICAgICAgLy9jb25zb2xlLmxvZyhmaWx0ZXJlZENvbnRlc3RzKTtcclxuICAgICAgICAgIHRoaXMuY29udGVzdHMgPSBmaWx0ZXJlZENvbnRlc3RzO1xyXG4gICAgICAgICAgdGhpcy5jZFJlZi5kZXRlY3RDaGFuZ2VzKCk7XHJcbiAgICAgICAgICB0aGlzLmlzTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgIH0sIGVycm9yID0+IHtcclxuICAgICAgICAgIHRoaXMuaXNMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICB0aGlzLm5vdGlmaWNhdGlvbnNTZXJ2aWNlLmVycm9yKGVycm9yLnRpdGxlLCBlcnJvci5lcnJvci5tZXNzYWdlLCB7dGltZU91dDogMzAwMCwgc2hvd1Byb2dyZXNzQmFyOiBmYWxzZX0pXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBzZWxlY3RTZWNvbmRUYWIoKSB7XHJcbiAgICB0aGlzLmZpcnN0VGFiQWN0aXZlID0gZmFsc2U7XHJcbiAgICB0aGlzLnNlY29uZFRhYkFjdGl2ZSA9IHRydWU7XHJcbiAgICBpZiAodGhpcy5zdGF0dXMgPT0gXCJVxb5iYWlndGFzXCIpIHtcclxuICAgICAgLy9kbyBub3RoaW5nXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgdGhpcy5zdGF0dXMgPSBcIlXFvmJhaWd0YXNcIjtcclxuICAgIHRoaXMuaXNMb2FkaW5nID0gdHJ1ZTtcclxuICAgIHRoaXMuc2VhcmNoRWxSZWYubmF0aXZlRWxlbWVudC52YWx1ZSA9ICcnO1xyXG4gICAgdGhpcy5jb250ZXN0c1NlcnZpY2UuZ2V0RmlsdGVyZWRDb250ZXN0cyhcIlwiKSAvLyA9IGdldCBhbGxcclxuICAgICAgICAuc3Vic2NyaWJlKGNvbnRlc3RzID0+IHtcclxuICAgICAgICAgIC8vY29uc29sZS5sb2coJ0ZpbHRlciBsYXllciAxIGNvbnRlc3RzJyk7XHJcbiAgICAgICAgICAvL2NvbnNvbGUubG9nKGNvbnRlc3RzKTtcclxuICAgICAgICAgIHZhciB1bmZpbHRlcmVkQ29udGVzdHMgPSBjb250ZXN0cztcclxuICAgICAgICAgIHZhciBmaWx0ZXJlZENvbnRlc3RzID0gdW5maWx0ZXJlZENvbnRlc3RzLmZpbHRlcigoaXRlbTogYW55KSA9PiBpdGVtLnN0YXR1cyA9PSB0aGlzLnN0YXR1cyk7XHJcbiAgICAgICAgICAvL2NvbnNvbGUubG9nKCdGaWx0ZXIgbGF5ZXIgMiBjb250ZXN0cycpO1xyXG4gICAgICAgICAgLy9jb25zb2xlLmxvZyhmaWx0ZXJlZENvbnRlc3RzKTtcclxuICAgICAgICAgIHRoaXMuY29udGVzdHMgPSBmaWx0ZXJlZENvbnRlc3RzO1xyXG4gICAgICAgICAgdGhpcy5jZFJlZi5kZXRlY3RDaGFuZ2VzKCk7XHJcbiAgICAgICAgICB0aGlzLmlzTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgIH0sIGVycm9yID0+IHtcclxuICAgICAgICAgIHRoaXMuaXNMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICB0aGlzLm5vdGlmaWNhdGlvbnNTZXJ2aWNlLmVycm9yKGVycm9yLnRpdGxlLCBlcnJvci5lcnJvci5tZXNzYWdlLCB7dGltZU91dDogMzAwMCwgc2hvd1Byb2dyZXNzQmFyOiBmYWxzZX0pXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBnb1RvQ29udGVzdERldGFpbHMoaWROYW1lOiBzdHJpbmcpIHtcclxuICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFsnL2tvbmt1cnNhaScsIGlkTmFtZV0pO1xyXG4gIH1cclxuXHJcbn0iXX0=
