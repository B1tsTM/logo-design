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
var api_service_1 = require('../../services/api.service');
var index_1 = require('../../errors/index');
var angular2_notifications_1 = require('angular2-notifications');
var Observable_1 = require('rxjs/Observable');
require('rxjs/Rx');
var HeaderComponent = (function () {
    function HeaderComponent(contestsService, errorService, apiService, notificationsService, ngzone, cdRef, router) {
        this.contestsService = contestsService;
        this.errorService = errorService;
        this.apiService = apiService;
        this.notificationsService = notificationsService;
        this.ngzone = ngzone;
        this.cdRef = cdRef;
        this.router = router;
        //contest: Contest = null;
        this.contests = [];
        this.isLoading = false;
        this.status1 = "Aktyvus";
        this.status2 = "Pratęstas";
        this.firstTabActive = true;
        this.secondTabActive = false;
        this.allActiveContests = [];
        this.allFinishedContests = [];
        this.options = {
            position: ["top", "right"]
        };
    }
    HeaderComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.isLoading = true;
        this.contestsService.getAllContests()
            .subscribe(function (contests) {
            var unfilteredContests = contests;
            var filteredActiveContests = unfilteredContests.filter(function (item) { return item.status == _this.status1 || item.status == _this.status2; });
            var filteredFinishedContests = unfilteredContests.filter(function (item) { return item.status == "Užbaigtas" || item.status == "Laikas baigėsi"; }); //TODO change some logic now that timed-out contests are there
            _this.contests = filteredActiveContests;
            _this.allActiveContests = filteredActiveContests;
            _this.allFinishedContests = filteredFinishedContests;
            //this.contestsService.contests = contests;
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
                    var filteredContests = unfilteredContests.filter(function (item) { return item.status == _this.status1 || item.status == _this.status2; });
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
        if (this.status1 == "Aktyvus") {
        }
        else {
            this.status1 = "Aktyvus";
            this.status2 = "Pratęstas";
            this.isLoading = true;
            this.searchElRef.nativeElement.value = '';
            this.contestsService.getFilteredContests("") // = get all
                .subscribe(function (contests) {
                //console.log('Filter layer 1 contests');
                //console.log(contests);
                var unfilteredContests = contests;
                var filteredContests = unfilteredContests.filter(function (item) { return item.status == _this.status1 || item.status == _this.status2; });
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
        if (this.status1 == "Užbaigtas") {
        }
        else {
            this.status1 = "Užbaigtas";
            this.status2 = "Laikas baigėsi";
            this.isLoading = true;
            this.searchElRef.nativeElement.value = '';
            this.contestsService.getFilteredContests("") // = get all
                .subscribe(function (contests) {
                //console.log('Filter layer 1 contests');
                //console.log(contests);
                var unfilteredContests = contests;
                var filteredContests = unfilteredContests.filter(function (item) { return item.status == _this.status1 || item.status == _this.status2; });
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
        __metadata('design:paramtypes', [contests_service_1.ContestsService, index_1.ErrorService, api_service_1.ApiService, angular2_notifications_1.NotificationsService, core_1.NgZone, core_1.ChangeDetectorRef, router_1.Router])
    ], HeaderComponent);
    return HeaderComponent;
}());
exports.HeaderComponent = HeaderComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvaGVhZGVyL2hlYWRlci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUFvRixlQUFlLENBQUMsQ0FBQTtBQUNwRyx1QkFBdUIsaUJBQWlCLENBQUMsQ0FBQTtBQUV6QyxpQ0FBZ0MsaUNBQWlDLENBQUMsQ0FBQTtBQUNsRSw0QkFBMkIsNEJBQTRCLENBQUMsQ0FBQTtBQUN4RCxzQkFBNkIsb0JBQW9CLENBQUMsQ0FBQTtBQUNsRCx1Q0FBcUMsd0JBQXdCLENBQUMsQ0FBQTtBQUM5RCwyQkFBMkIsaUJBQWlCLENBQUMsQ0FBQTtBQUM3QyxRQUFPLFNBQVMsQ0FBQyxDQUFBO0FBUWpCO0lBZUUseUJBQW9CLGVBQWdDLEVBQ2hDLFlBQTBCLEVBQzFCLFVBQXNCLEVBQ3RCLG9CQUEwQyxFQUMxQyxNQUFjLEVBQ2QsS0FBd0IsRUFDeEIsTUFBYztRQU5kLG9CQUFlLEdBQWYsZUFBZSxDQUFpQjtRQUNoQyxpQkFBWSxHQUFaLFlBQVksQ0FBYztRQUMxQixlQUFVLEdBQVYsVUFBVSxDQUFZO1FBQ3RCLHlCQUFvQixHQUFwQixvQkFBb0IsQ0FBc0I7UUFDMUMsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUNkLFVBQUssR0FBTCxLQUFLLENBQW1CO1FBQ3hCLFdBQU0sR0FBTixNQUFNLENBQVE7UUFwQmxDLDBCQUEwQjtRQUMxQixhQUFRLEdBQVEsRUFBRSxDQUFDO1FBQ25CLGNBQVMsR0FBRyxLQUFLLENBQUM7UUFDbEIsWUFBTyxHQUFHLFNBQVMsQ0FBQztRQUNwQixZQUFPLEdBQUcsV0FBVyxDQUFDO1FBQ3RCLG1CQUFjLEdBQUcsSUFBSSxDQUFDO1FBQ3RCLG9CQUFlLEdBQUcsS0FBSyxDQUFDO1FBQ3hCLHNCQUFpQixHQUFHLEVBQUUsQ0FBQztRQUN2Qix3QkFBbUIsR0FBRyxFQUFFLENBQUM7UUFFbEIsWUFBTyxHQUFHO1lBQ2IsUUFBUSxFQUFFLENBQUMsS0FBSyxFQUFDLE9BQU8sQ0FBQztT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QWdDO2dCQUNoQyxLQUFJLENBQUMsUUFBUSxHQUFHLGdCQUFnQixDQUFDO2dCQUNqQyxLQUFJLENBQUMsS0FBSyxDQUFDLGFBQWEsRUFBRSxDQUFDO2dCQUMzQixLQUFJLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQztZQUN6QixDQUFDLEVBQUUsVUFBQSxLQUFLO2dCQUNOLEtBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDO2dCQUN2QixLQUFJLENBQUMsb0JBQW9CLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxLQUFLLEVBQUUsS0FBSyxDQUFDLEtBQUssQ0FBQyxPQUFPLEVBQUUsRUFBQyxPQUFPLEVBQUUsSUFBSSxFQUFFLGVBQWUsRUFBRSxLQUFLLEVBQUMsQ0FBQyxDQUFBO1lBQzVHLENBQUMsQ0FBQyxDQUFDO1FBQ1AsQ0FBQztJQUNILENBQUM7SUFFRCw0Q0FBa0IsR0FBbEIsVUFBbUIsTUFBYztRQUMvQixJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLFlBQVksRUFBRSxNQUFNLENBQUMsQ0FBQyxDQUFDO0lBQy9DLENBQUM7SUFqSEQ7UUFBQyxnQkFBUyxDQUFDLFFBQVEsQ0FBQzs7d0RBQUE7SUFoQnRCO1FBQUMsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixRQUFRLEVBQUUsWUFBWTtZQUN0QixXQUFXLEVBQUUsdUJBQXVCO1lBQ3BDLFNBQVMsRUFBRSxDQUFDLHNCQUFzQixDQUFDO1NBQ3BDLENBQUM7O3VCQUFBO0lBOEhGLHNCQUFDO0FBQUQsQ0E3SEEsQUE2SEMsSUFBQTtBQTdIWSx1QkFBZSxrQkE2SDNCLENBQUEiLCJmaWxlIjoiY29tcG9uZW50cy9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBWaWV3Q2hpbGQsIEVsZW1lbnRSZWYsIE5nWm9uZSwgQ2hhbmdlRGV0ZWN0b3JSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuaW1wb3J0IHsgQ29udGVzdCB9IGZyb20gJy4uLy4uL21vZGVscy9jb250ZXN0JztcclxuaW1wb3J0IHsgQ29udGVzdHNTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvY29udGVzdHMuc2VydmljZSc7XHJcbmltcG9ydCB7IEFwaVNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9hcGkuc2VydmljZSc7XHJcbmltcG9ydCB7IEVycm9yU2VydmljZSB9IGZyb20gJy4uLy4uL2Vycm9ycy9pbmRleCc7XHJcbmltcG9ydCB7IE5vdGlmaWNhdGlvbnNTZXJ2aWNlIH0gZnJvbSAnYW5ndWxhcjItbm90aWZpY2F0aW9ucyc7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzL09ic2VydmFibGUnO1xyXG5pbXBvcnQgJ3J4anMvUngnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcclxuICBzZWxlY3RvcjogJ2FwcC1oZWFkZXInLFxyXG4gIHRlbXBsYXRlVXJsOiAnaGVhZGVyLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnaGVhZGVyLmNvbXBvbmVudC5jc3MnXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgSGVhZGVyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuICAvL2NvbnRlc3Q6IENvbnRlc3QgPSBudWxsO1xyXG4gIGNvbnRlc3RzOiBhbnkgPSBbXTtcclxuICBpc0xvYWRpbmcgPSBmYWxzZTtcclxuICBzdGF0dXMxID0gXCJBa3R5dnVzXCI7XHJcbiAgc3RhdHVzMiA9IFwiUHJhdMSZc3Rhc1wiO1xyXG4gIGZpcnN0VGFiQWN0aXZlID0gdHJ1ZTtcclxuICBzZWNvbmRUYWJBY3RpdmUgPSBmYWxzZTtcclxuICBhbGxBY3RpdmVDb250ZXN0cyA9IFtdO1xyXG4gIGFsbEZpbmlzaGVkQ29udGVzdHMgPSBbXTtcclxuICBAVmlld0NoaWxkKCdzZWFyY2gnKSBzZWFyY2hFbFJlZjogRWxlbWVudFJlZjtcclxuICBwdWJsaWMgb3B0aW9ucyA9IHtcclxuICAgICAgcG9zaXRpb246IFtcInRvcFwiLFwicmlnaHRcIl1cclxuICAgIH07XHJcbiAgXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBjb250ZXN0c1NlcnZpY2U6IENvbnRlc3RzU2VydmljZSwgXHJcbiAgICAgICAgICAgICAgcHJpdmF0ZSBlcnJvclNlcnZpY2U6IEVycm9yU2VydmljZSxcclxuICAgICAgICAgICAgICBwcml2YXRlIGFwaVNlcnZpY2U6IEFwaVNlcnZpY2UsXHJcbiAgICAgICAgICAgICAgcHJpdmF0ZSBub3RpZmljYXRpb25zU2VydmljZTogTm90aWZpY2F0aW9uc1NlcnZpY2UsXHJcbiAgICAgICAgICAgICAgcHJpdmF0ZSBuZ3pvbmU6IE5nWm9uZSxcclxuICAgICAgICAgICAgICBwcml2YXRlIGNkUmVmOiBDaGFuZ2VEZXRlY3RvclJlZixcclxuICAgICAgICAgICAgICBwcml2YXRlIHJvdXRlcjogUm91dGVyKSB7IH1cclxuXHJcbiAgbmdPbkluaXQoKSB7IFxyXG4gICAgdGhpcy5pc0xvYWRpbmcgPSB0cnVlO1xyXG4gICAgdGhpcy5jb250ZXN0c1NlcnZpY2UuZ2V0QWxsQ29udGVzdHMoKVxyXG4gICAgLnN1YnNjcmliZShjb250ZXN0cyA9PiB7XHJcbiAgICAgIHZhciB1bmZpbHRlcmVkQ29udGVzdHMgPSBjb250ZXN0cztcclxuICAgICAgdmFyIGZpbHRlcmVkQWN0aXZlQ29udGVzdHMgPSB1bmZpbHRlcmVkQ29udGVzdHMuZmlsdGVyKChpdGVtOiBhbnkpID0+IGl0ZW0uc3RhdHVzID09IHRoaXMuc3RhdHVzMSB8fCBpdGVtLnN0YXR1cyA9PSB0aGlzLnN0YXR1czIpO1xyXG4gICAgICB2YXIgZmlsdGVyZWRGaW5pc2hlZENvbnRlc3RzID0gdW5maWx0ZXJlZENvbnRlc3RzLmZpbHRlcigoaXRlbTogYW55KSA9PiBpdGVtLnN0YXR1cyA9PSBcIlXFvmJhaWd0YXNcIiB8fCBpdGVtLnN0YXR1cyA9PSBcIkxhaWthcyBiYWlnxJdzaVwiKTsgLy9UT0RPIGNoYW5nZSBzb21lIGxvZ2ljIG5vdyB0aGF0IHRpbWVkLW91dCBjb250ZXN0cyBhcmUgdGhlcmVcclxuICAgICAgdGhpcy5jb250ZXN0cyA9IGZpbHRlcmVkQWN0aXZlQ29udGVzdHM7XHJcbiAgICAgIHRoaXMuYWxsQWN0aXZlQ29udGVzdHMgPSBmaWx0ZXJlZEFjdGl2ZUNvbnRlc3RzO1xyXG4gICAgICB0aGlzLmFsbEZpbmlzaGVkQ29udGVzdHMgPSBmaWx0ZXJlZEZpbmlzaGVkQ29udGVzdHM7XHJcbiAgICAgIC8vdGhpcy5jb250ZXN0c1NlcnZpY2UuY29udGVzdHMgPSBjb250ZXN0cztcclxuICAgICAgdGhpcy5pc0xvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgY29uc29sZS5sb2codGhpcy5jb250ZXN0cyk7XHJcbiAgICB9LCBlcnJvciA9PiB7XHJcbiAgICAgIHRoaXMuaXNMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgIHRoaXMubm90aWZpY2F0aW9uc1NlcnZpY2UuZXJyb3IoZXJyb3IudGl0bGUsIGVycm9yLmVycm9yLm1lc3NhZ2UsIHt0aW1lT3V0OiAzMDAwLCBzaG93UHJvZ3Jlc3NCYXI6IGZhbHNlfSlcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgbmdBZnRlclZpZXdJbml0KCkge1xyXG4gICAgdGhpcy5uZ3pvbmUucnVuT3V0c2lkZUFuZ3VsYXIoKCkgPT4ge1xyXG4gICAgICBPYnNlcnZhYmxlLmZyb21FdmVudCh0aGlzLnNlYXJjaEVsUmVmLm5hdGl2ZUVsZW1lbnQsICdrZXl1cCcpXHJcbiAgICAgIC5kZWJvdW5jZVRpbWUoMTAwMClcclxuICAgICAgLmRpc3RpbmN0VW50aWxDaGFuZ2VkKCkgLy8gVE9ETyBVcGRhdGU6IG5vdCB3b3JraW5nLiBOZWVkcyBhIGN1c3RvbSBjYWxsYmFjayB0byBjaGVjayBmb3Igd2hpdGVzcGFjZSBkaWZmZXJlbmNlc1xyXG4gICAgICAuc3Vic2NyaWJlKGV2ZW50ID0+IHtcclxuICAgICAgICB0aGlzLmNvbnRlc3RzU2VydmljZS5nZXRGaWx0ZXJlZENvbnRlc3RzKGV2ZW50LnRhcmdldC52YWx1ZSkgLy9zZWFyY2hTdHJpbmdcclxuICAgICAgICAuc3Vic2NyaWJlKGNvbnRlc3RzID0+IHtcclxuICAgICAgICAgIC8vY29uc29sZS5sb2coJ0ZpbHRlciBsYXllciAxIGNvbnRlc3RzJyk7XHJcbiAgICAgICAgICAvL2NvbnNvbGUubG9nKGNvbnRlc3RzKTtcclxuICAgICAgICAgIHZhciB1bmZpbHRlcmVkQ29udGVzdHMgPSBjb250ZXN0cztcclxuICAgICAgICAgIHZhciBmaWx0ZXJlZENvbnRlc3RzID0gdW5maWx0ZXJlZENvbnRlc3RzLmZpbHRlcigoaXRlbTogYW55KSA9PiBpdGVtLnN0YXR1cyA9PSB0aGlzLnN0YXR1czEgfHwgaXRlbS5zdGF0dXMgPT0gdGhpcy5zdGF0dXMyKTtcclxuICAgICAgICAgIC8vY29uc29sZS5sb2coJ0ZpbHRlciBsYXllciAyIGNvbnRlc3RzJyk7XHJcbiAgICAgICAgICAvL2NvbnNvbGUubG9nKGZpbHRlcmVkQ29udGVzdHMpO1xyXG4gICAgICAgICAgdGhpcy5jb250ZXN0cyA9IGZpbHRlcmVkQ29udGVzdHM7XHJcbiAgICAgICAgICB0aGlzLmNkUmVmLmRldGVjdENoYW5nZXMoKTtcclxuICAgICAgICB9LCBlcnJvciA9PiB7XHJcbiAgICAgICAgICB0aGlzLm5vdGlmaWNhdGlvbnNTZXJ2aWNlLmVycm9yKGVycm9yLnRpdGxlLCBlcnJvci5lcnJvci5tZXNzYWdlLCB7dGltZU91dDogMzAwMCwgc2hvd1Byb2dyZXNzQmFyOiBmYWxzZX0pXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBzZWxlY3RGaXJzdFRhYigpIHtcclxuICAgIHRoaXMuZmlyc3RUYWJBY3RpdmUgPSB0cnVlO1xyXG4gICAgdGhpcy5zZWNvbmRUYWJBY3RpdmUgPSBmYWxzZTtcclxuICAgIGlmICh0aGlzLnN0YXR1czEgPT0gXCJBa3R5dnVzXCIpIHtcclxuICAgICAgLy9kbyBub3RoaW5nXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgdGhpcy5zdGF0dXMxID0gXCJBa3R5dnVzXCI7XHJcbiAgICB0aGlzLnN0YXR1czIgPSBcIlByYXTEmXN0YXNcIjtcclxuICAgIHRoaXMuaXNMb2FkaW5nID0gdHJ1ZTtcclxuICAgIHRoaXMuc2VhcmNoRWxSZWYubmF0aXZlRWxlbWVudC52YWx1ZSA9ICcnO1xyXG4gICAgdGhpcy5jb250ZXN0c1NlcnZpY2UuZ2V0RmlsdGVyZWRDb250ZXN0cyhcIlwiKSAvLyA9IGdldCBhbGxcclxuICAgICAgICAuc3Vic2NyaWJlKGNvbnRlc3RzID0+IHtcclxuICAgICAgICAgIC8vY29uc29sZS5sb2coJ0ZpbHRlciBsYXllciAxIGNvbnRlc3RzJyk7XHJcbiAgICAgICAgICAvL2NvbnNvbGUubG9nKGNvbnRlc3RzKTtcclxuICAgICAgICAgIHZhciB1bmZpbHRlcmVkQ29udGVzdHMgPSBjb250ZXN0cztcclxuICAgICAgICAgIHZhciBmaWx0ZXJlZENvbnRlc3RzID0gdW5maWx0ZXJlZENvbnRlc3RzLmZpbHRlcigoaXRlbTogYW55KSA9PiBpdGVtLnN0YXR1cyA9PSB0aGlzLnN0YXR1czEgfHwgaXRlbS5zdGF0dXMgPT0gdGhpcy5zdGF0dXMyKTtcclxuICAgICAgICAgIC8vY29uc29sZS5sb2coJ0ZpbHRlciBsYXllciAyIGNvbnRlc3RzJyk7XHJcbiAgICAgICAgICAvL2NvbnNvbGUubG9nKGZpbHRlcmVkQ29udGVzdHMpO1xyXG4gICAgICAgICAgdGhpcy5jb250ZXN0cyA9IGZpbHRlcmVkQ29udGVzdHM7XHJcbiAgICAgICAgICB0aGlzLmNkUmVmLmRldGVjdENoYW5nZXMoKTtcclxuICAgICAgICAgIHRoaXMuaXNMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgfSwgZXJyb3IgPT4ge1xyXG4gICAgICAgICAgdGhpcy5pc0xvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgIHRoaXMubm90aWZpY2F0aW9uc1NlcnZpY2UuZXJyb3IoZXJyb3IudGl0bGUsIGVycm9yLmVycm9yLm1lc3NhZ2UsIHt0aW1lT3V0OiAzMDAwLCBzaG93UHJvZ3Jlc3NCYXI6IGZhbHNlfSlcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHNlbGVjdFNlY29uZFRhYigpIHtcclxuICAgIHRoaXMuZmlyc3RUYWJBY3RpdmUgPSBmYWxzZTtcclxuICAgIHRoaXMuc2Vjb25kVGFiQWN0aXZlID0gdHJ1ZTtcclxuICAgIGlmICh0aGlzLnN0YXR1czEgPT0gXCJVxb5iYWlndGFzXCIpIHtcclxuICAgICAgLy9kbyBub3RoaW5nXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgdGhpcy5zdGF0dXMxID0gXCJVxb5iYWlndGFzXCI7XHJcbiAgICB0aGlzLnN0YXR1czIgPSBcIkxhaWthcyBiYWlnxJdzaVwiO1xyXG4gICAgdGhpcy5pc0xvYWRpbmcgPSB0cnVlO1xyXG4gICAgdGhpcy5zZWFyY2hFbFJlZi5uYXRpdmVFbGVtZW50LnZhbHVlID0gJyc7XHJcbiAgICB0aGlzLmNvbnRlc3RzU2VydmljZS5nZXRGaWx0ZXJlZENvbnRlc3RzKFwiXCIpIC8vID0gZ2V0IGFsbFxyXG4gICAgICAgIC5zdWJzY3JpYmUoY29udGVzdHMgPT4ge1xyXG4gICAgICAgICAgLy9jb25zb2xlLmxvZygnRmlsdGVyIGxheWVyIDEgY29udGVzdHMnKTtcclxuICAgICAgICAgIC8vY29uc29sZS5sb2coY29udGVzdHMpO1xyXG4gICAgICAgICAgdmFyIHVuZmlsdGVyZWRDb250ZXN0cyA9IGNvbnRlc3RzO1xyXG4gICAgICAgICAgdmFyIGZpbHRlcmVkQ29udGVzdHMgPSB1bmZpbHRlcmVkQ29udGVzdHMuZmlsdGVyKChpdGVtOiBhbnkpID0+IGl0ZW0uc3RhdHVzID09IHRoaXMuc3RhdHVzMSB8fCBpdGVtLnN0YXR1cyA9PSB0aGlzLnN0YXR1czIpO1xyXG4gICAgICAgICAgLy9jb25zb2xlLmxvZygnRmlsdGVyIGxheWVyIDIgY29udGVzdHMnKTtcclxuICAgICAgICAgIC8vY29uc29sZS5sb2coZmlsdGVyZWRDb250ZXN0cyk7XHJcbiAgICAgICAgICB0aGlzLmNvbnRlc3RzID0gZmlsdGVyZWRDb250ZXN0cztcclxuICAgICAgICAgIHRoaXMuY2RSZWYuZGV0ZWN0Q2hhbmdlcygpO1xyXG4gICAgICAgICAgdGhpcy5pc0xvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICB9LCBlcnJvciA9PiB7XHJcbiAgICAgICAgICB0aGlzLmlzTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgdGhpcy5ub3RpZmljYXRpb25zU2VydmljZS5lcnJvcihlcnJvci50aXRsZSwgZXJyb3IuZXJyb3IubWVzc2FnZSwge3RpbWVPdXQ6IDMwMDAsIHNob3dQcm9ncmVzc0JhcjogZmFsc2V9KVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZ29Ub0NvbnRlc3REZXRhaWxzKGlkTmFtZTogc3RyaW5nKSB7XHJcbiAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJy9rb25rdXJzYWknLCBpZE5hbWVdKTtcclxuICB9XHJcblxyXG59Il19
