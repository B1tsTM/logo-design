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
var contests_service_1 = require('../../services/contests.service');
var index_1 = require('../../errors/index');
var angular2_notifications_1 = require('angular2-notifications');
var Observable_1 = require('rxjs/Observable');
require('rxjs/Rx');
var HeaderComponent = (function () {
    function HeaderComponent(contestsService, errorService, notificationsService, ngzone, cdRef) {
        this.contestsService = contestsService;
        this.errorService = errorService;
        this.notificationsService = notificationsService;
        this.ngzone = ngzone;
        this.cdRef = cdRef;
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
                .distinctUntilChanged() // TODO test if this works
                .subscribe(function (event) {
                _this.contestsService.getFilteredContests(event.target.value) //searchString
                    .subscribe(function (contests) {
                    console.log('Filter layer 1 contests');
                    console.log(contests);
                    var unfilteredContests = contests;
                    var filteredContests = unfilteredContests.filter(function (item) { return item.status == _this.status; });
                    console.log('Filter layer 2 contests');
                    console.log(filteredContests);
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
            this.contestsService.getFilteredContests("") // = get all
                .subscribe(function (contests) {
                console.log('Filter layer 1 contests');
                console.log(contests);
                var unfilteredContests = contests;
                var filteredContests = unfilteredContests.filter(function (item) { return item.status == _this.status; });
                console.log('Filter layer 2 contests');
                console.log(filteredContests);
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
            this.contestsService.getFilteredContests("") // = get all
                .subscribe(function (contests) {
                console.log('Filter layer 1 contests');
                console.log(contests);
                var unfilteredContests = contests;
                var filteredContests = unfilteredContests.filter(function (item) { return item.status == _this.status; });
                console.log('Filter layer 2 contests');
                console.log(filteredContests);
                _this.contests = filteredContests;
                _this.cdRef.detectChanges();
                _this.isLoading = false;
            }, function (error) {
                _this.isLoading = false;
                _this.notificationsService.error(error.title, error.error.message, { timeOut: 3000, showProgressBar: false });
            });
        }
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
        __metadata('design:paramtypes', [contests_service_1.ContestsService, index_1.ErrorService, angular2_notifications_1.NotificationsService, core_1.NgZone, core_1.ChangeDetectorRef])
    ], HeaderComponent);
    return HeaderComponent;
}());
exports.HeaderComponent = HeaderComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvaGVhZGVyL2hlYWRlci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUFvRixlQUFlLENBQUMsQ0FBQTtBQUVwRyxpQ0FBZ0MsaUNBQWlDLENBQUMsQ0FBQTtBQUNsRSxzQkFBNkIsb0JBQW9CLENBQUMsQ0FBQTtBQUNsRCx1Q0FBcUMsd0JBQXdCLENBQUMsQ0FBQTtBQUM5RCwyQkFBMkIsaUJBQWlCLENBQUMsQ0FBQTtBQUM3QyxRQUFPLFNBQVMsQ0FBQyxDQUFBO0FBUWpCO0lBWUUseUJBQW9CLGVBQWdDLEVBQ2hDLFlBQTBCLEVBQzFCLG9CQUEwQyxFQUMxQyxNQUFjLEVBQ2QsS0FBd0I7UUFKeEIsb0JBQWUsR0FBZixlQUFlLENBQWlCO1FBQ2hDLGlCQUFZLEdBQVosWUFBWSxDQUFjO1FBQzFCLHlCQUFvQixHQUFwQixvQkFBb0IsQ0FBc0I7UUFDMUMsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUNkLFVBQUssR0FBTCxLQUFLLENBQW1CO1FBZjVDLDBCQUEwQjtRQUMxQixhQUFRLEdBQVEsRUFBRSxDQUFDO1FBQ25CLGNBQVMsR0FBRyxLQUFLLENBQUM7UUFDbEIsV0FBTSxHQUFHLFNBQVMsQ0FBQztRQUNuQixtQkFBYyxHQUFHLElBQUksQ0FBQztRQUN0QixvQkFBZSxHQUFHLEtBQUssQ0FBQztRQUVqQixZQUFPLEdBQUc7WUFDYixRQUFRLEVBQUUsQ0FBQyxLQUFLLEVBQUMsT0FBTyxDQUFDO1NBQzFCLENBQUM7SUFNNEMsQ0FBQztJQUVqRCxrQ0FBUSxHQUFSO1FBQUEsaUJBWUM7UUFYQyxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQztRQUN0QixJQUFJLENBQUMsZUFBZSxDQUFDLGNBQWMsRUFBRTthQUNwQyxTQUFTLENBQUMsVUFBQSxRQUFRO1lBQ2pCLEtBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO1lBQ3pCLEtBQUksQ0FBQyxlQUFlLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztZQUN6QyxLQUFJLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQztZQUN2QixPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUM3QixDQUFDLEVBQUUsVUFBQSxLQUFLO1lBQ04sS0FBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7WUFDdkIsS0FBSSxDQUFDLG9CQUFvQixDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsS0FBSyxFQUFFLEtBQUssQ0FBQyxLQUFLLENBQUMsT0FBTyxFQUFFLEVBQUMsT0FBTyxFQUFFLElBQUksRUFBRSxlQUFlLEVBQUUsS0FBSyxFQUFDLENBQUMsQ0FBQTtRQUM1RyxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFRCx5Q0FBZSxHQUFmO1FBQUEsaUJBcUJDO1FBcEJDLElBQUksQ0FBQyxNQUFNLENBQUMsaUJBQWlCLENBQUM7WUFDNUIsdUJBQVUsQ0FBQyxTQUFTLENBQUMsS0FBSSxDQUFDLFdBQVcsQ0FBQyxhQUFhLEVBQUUsT0FBTyxDQUFDO2lCQUM1RCxZQUFZLENBQUMsSUFBSSxDQUFDO2lCQUNsQixvQkFBb0IsRUFBRSxDQUFDLDBCQUEwQjtpQkFDakQsU0FBUyxDQUFDLFVBQUEsS0FBSztnQkFDZCxLQUFJLENBQUMsZUFBZSxDQUFDLG1CQUFtQixDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsY0FBYztxQkFDMUUsU0FBUyxDQUFDLFVBQUEsUUFBUTtvQkFDakIsT0FBTyxDQUFDLEdBQUcsQ0FBQyx5QkFBeUIsQ0FBQyxDQUFDO29CQUN2QyxPQUFPLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDO29CQUN0QixJQUFJLGtCQUFrQixHQUFHLFFBQVEsQ0FBQztvQkFDbEMsSUFBSSxnQkFBZ0IsR0FBRyxrQkFBa0IsQ0FBQyxNQUFNLENBQUMsVUFBQyxJQUFTLElBQUssT0FBQSxJQUFJLENBQUMsTUFBTSxJQUFJLEtBQUksQ0FBQyxNQUFNLEVBQTFCLENBQTBCLENBQUMsQ0FBQztvQkFDNUYsT0FBTyxDQUFDLEdBQUcsQ0FBQyx5QkFBeUIsQ0FBQyxDQUFDO29CQUN2QyxPQUFPLENBQUMsR0FBRyxDQUFDLGdCQUFnQixDQUFDLENBQUM7b0JBQzlCLEtBQUksQ0FBQyxRQUFRLEdBQUcsZ0JBQWdCLENBQUM7b0JBQ2pDLEtBQUksQ0FBQyxLQUFLLENBQUMsYUFBYSxFQUFFLENBQUM7Z0JBQzdCLENBQUMsRUFBRSxVQUFBLEtBQUs7b0JBQ04sS0FBSSxDQUFDLG9CQUFvQixDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsS0FBSyxFQUFFLEtBQUssQ0FBQyxLQUFLLENBQUMsT0FBTyxFQUFFLEVBQUMsT0FBTyxFQUFFLElBQUksRUFBRSxlQUFlLEVBQUUsS0FBSyxFQUFDLENBQUMsQ0FBQTtnQkFDNUcsQ0FBQyxDQUFDLENBQUM7WUFDTCxDQUFDLENBQUMsQ0FBQztRQUNMLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVELHdDQUFjLEdBQWQ7UUFBQSxpQkF3QkM7UUF2QkMsSUFBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUM7UUFDM0IsSUFBSSxDQUFDLGVBQWUsR0FBRyxLQUFLLENBQUM7UUFDN0IsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sSUFBSSxTQUFTLENBQUMsQ0FBQyxDQUFDO1FBRS9CLENBQUM7UUFBQyxJQUFJLENBQUMsQ0FBQztZQUNSLElBQUksQ0FBQyxNQUFNLEdBQUcsU0FBUyxDQUFDO1lBQ3hCLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDO1lBQ3RCLElBQUksQ0FBQyxlQUFlLENBQUMsbUJBQW1CLENBQUMsRUFBRSxDQUFDLENBQUMsWUFBWTtpQkFDcEQsU0FBUyxDQUFDLFVBQUEsUUFBUTtnQkFDakIsT0FBTyxDQUFDLEdBQUcsQ0FBQyx5QkFBeUIsQ0FBQyxDQUFDO2dCQUN2QyxPQUFPLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDO2dCQUN0QixJQUFJLGtCQUFrQixHQUFHLFFBQVEsQ0FBQztnQkFDbEMsSUFBSSxnQkFBZ0IsR0FBRyxrQkFBa0IsQ0FBQyxNQUFNLENBQUMsVUFBQyxJQUFTLElBQUssT0FBQSxJQUFJLENBQUMsTUFBTSxJQUFJLEtBQUksQ0FBQyxNQUFNLEVBQTFCLENBQTBCLENBQUMsQ0FBQztnQkFDNUYsT0FBTyxDQUFDLEdBQUcsQ0FBQyx5QkFBeUIsQ0FBQyxDQUFDO2dCQUN2QyxPQUFPLENBQUMsR0FBRyxDQUFDLGdCQUFnQixDQUFDLENBQUM7Z0JBQzlCLEtBQUksQ0FBQyxRQUFRLEdBQUcsZ0JBQWdCLENBQUM7Z0JBQ2pDLEtBQUksQ0FBQyxLQUFLLENBQUMsYUFBYSxFQUFFLENBQUM7Z0JBQzNCLEtBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDO1lBQ3pCLENBQUMsRUFBRSxVQUFBLEtBQUs7Z0JBQ04sS0FBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7Z0JBQ3ZCLEtBQUksQ0FBQyxvQkFBb0IsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLEtBQUssRUFBRSxLQUFLLENBQUMsS0FBSyxDQUFDLE9BQU8sRUFBRSxFQUFDLE9BQU8sRUFBRSxJQUFJLEVBQUUsZUFBZSxFQUFFLEtBQUssRUFBQyxDQUFDLENBQUE7WUFDNUcsQ0FBQyxDQUFDLENBQUM7UUFDUCxDQUFDO0lBQ0gsQ0FBQztJQUVELHlDQUFlLEdBQWY7UUFBQSxpQkF3QkM7UUF2QkMsSUFBSSxDQUFDLGNBQWMsR0FBRyxLQUFLLENBQUM7UUFDNUIsSUFBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUM7UUFDNUIsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sSUFBSSxXQUFXLENBQUMsQ0FBQyxDQUFDO1FBRWpDLENBQUM7UUFBQyxJQUFJLENBQUMsQ0FBQztZQUNSLElBQUksQ0FBQyxNQUFNLEdBQUcsV0FBVyxDQUFDO1lBQzFCLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDO1lBQ3RCLElBQUksQ0FBQyxlQUFlLENBQUMsbUJBQW1CLENBQUMsRUFBRSxDQUFDLENBQUMsWUFBWTtpQkFDcEQsU0FBUyxDQUFDLFVBQUEsUUFBUTtnQkFDakIsT0FBTyxDQUFDLEdBQUcsQ0FBQyx5QkFBeUIsQ0FBQyxDQUFDO2dCQUN2QyxPQUFPLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDO2dCQUN0QixJQUFJLGtCQUFrQixHQUFHLFFBQVEsQ0FBQztnQkFDbEMsSUFBSSxnQkFBZ0IsR0FBRyxrQkFBa0IsQ0FBQyxNQUFNLENBQUMsVUFBQyxJQUFTLElBQUssT0FBQSxJQUFJLENBQUMsTUFBTSxJQUFJLEtBQUksQ0FBQyxNQUFNLEVBQTFCLENBQTBCLENBQUMsQ0FBQztnQkFDNUYsT0FBTyxDQUFDLEdBQUcsQ0FBQyx5QkFBeUIsQ0FBQyxDQUFDO2dCQUN2QyxPQUFPLENBQUMsR0FBRyxDQUFDLGdCQUFnQixDQUFDLENBQUM7Z0JBQzlCLEtBQUksQ0FBQyxRQUFRLEdBQUcsZ0JBQWdCLENBQUM7Z0JBQ2pDLEtBQUksQ0FBQyxLQUFLLENBQUMsYUFBYSxFQUFFLENBQUM7Z0JBQzNCLEtBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDO1lBQ3pCLENBQUMsRUFBRSxVQUFBLEtBQUs7Z0JBQ04sS0FBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7Z0JBQ3ZCLEtBQUksQ0FBQyxvQkFBb0IsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLEtBQUssRUFBRSxLQUFLLENBQUMsS0FBSyxDQUFDLE9BQU8sRUFBRSxFQUFDLE9BQU8sRUFBRSxJQUFJLEVBQUUsZUFBZSxFQUFFLEtBQUssRUFBQyxDQUFDLENBQUE7WUFDNUcsQ0FBQyxDQUFDLENBQUM7UUFDUCxDQUFDO0lBQ0gsQ0FBQztJQWxHRDtRQUFDLGdCQUFTLENBQUMsUUFBUSxDQUFDOzt3REFBQTtJQWJ0QjtRQUFDLGdCQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsUUFBUSxFQUFFLFlBQVk7WUFDdEIsV0FBVyxFQUFFLHVCQUF1QjtZQUNwQyxTQUFTLEVBQUUsQ0FBQyxzQkFBc0IsQ0FBQztTQUNwQyxDQUFDOzt1QkFBQTtJQTRHRixzQkFBQztBQUFELENBM0dBLEFBMkdDLElBQUE7QUEzR1ksdUJBQWUsa0JBMkczQixDQUFBIiwiZmlsZSI6ImNvbXBvbmVudHMvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgVmlld0NoaWxkLCBFbGVtZW50UmVmLCBOZ1pvbmUsIENoYW5nZURldGVjdG9yUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IENvbnRlc3QgfSBmcm9tICcuLi8uLi9tb2RlbHMvY29udGVzdCc7XHJcbmltcG9ydCB7IENvbnRlc3RzU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL2NvbnRlc3RzLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBFcnJvclNlcnZpY2UgfSBmcm9tICcuLi8uLi9lcnJvcnMvaW5kZXgnO1xyXG5pbXBvcnQgeyBOb3RpZmljYXRpb25zU2VydmljZSB9IGZyb20gJ2FuZ3VsYXIyLW5vdGlmaWNhdGlvbnMnO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcy9PYnNlcnZhYmxlJztcclxuaW1wb3J0ICdyeGpzL1J4JztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIG1vZHVsZUlkOiBtb2R1bGUuaWQsXHJcbiAgc2VsZWN0b3I6ICdhcHAtaGVhZGVyJyxcclxuICB0ZW1wbGF0ZVVybDogJ2hlYWRlci5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJ2hlYWRlci5jb21wb25lbnQuY3NzJ11cclxufSlcclxuZXhwb3J0IGNsYXNzIEhlYWRlckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgLy9jb250ZXN0OiBDb250ZXN0ID0gbnVsbDtcclxuICBjb250ZXN0czogYW55ID0gW107XHJcbiAgaXNMb2FkaW5nID0gZmFsc2U7XHJcbiAgc3RhdHVzID0gXCJBa3R5dnVzXCI7XHJcbiAgZmlyc3RUYWJBY3RpdmUgPSB0cnVlO1xyXG4gIHNlY29uZFRhYkFjdGl2ZSA9IGZhbHNlO1xyXG4gIEBWaWV3Q2hpbGQoJ3NlYXJjaCcpIHNlYXJjaEVsUmVmOiBFbGVtZW50UmVmO1xyXG4gIHB1YmxpYyBvcHRpb25zID0ge1xyXG4gICAgICBwb3NpdGlvbjogW1widG9wXCIsXCJyaWdodFwiXVxyXG4gICAgfTtcclxuICBcclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGNvbnRlc3RzU2VydmljZTogQ29udGVzdHNTZXJ2aWNlLCBcclxuICAgICAgICAgICAgICBwcml2YXRlIGVycm9yU2VydmljZTogRXJyb3JTZXJ2aWNlLFxyXG4gICAgICAgICAgICAgIHByaXZhdGUgbm90aWZpY2F0aW9uc1NlcnZpY2U6IE5vdGlmaWNhdGlvbnNTZXJ2aWNlLFxyXG4gICAgICAgICAgICAgIHByaXZhdGUgbmd6b25lOiBOZ1pvbmUsXHJcbiAgICAgICAgICAgICAgcHJpdmF0ZSBjZFJlZjogQ2hhbmdlRGV0ZWN0b3JSZWYpIHsgfVxyXG5cclxuICBuZ09uSW5pdCgpIHsgXHJcbiAgICB0aGlzLmlzTG9hZGluZyA9IHRydWU7XHJcbiAgICB0aGlzLmNvbnRlc3RzU2VydmljZS5nZXRBbGxDb250ZXN0cygpXHJcbiAgICAuc3Vic2NyaWJlKGNvbnRlc3RzID0+IHtcclxuICAgICAgdGhpcy5jb250ZXN0cyA9IGNvbnRlc3RzO1xyXG4gICAgICB0aGlzLmNvbnRlc3RzU2VydmljZS5jb250ZXN0cyA9IGNvbnRlc3RzO1xyXG4gICAgICB0aGlzLmlzTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICBjb25zb2xlLmxvZyh0aGlzLmNvbnRlc3RzKTtcclxuICAgIH0sIGVycm9yID0+IHtcclxuICAgICAgdGhpcy5pc0xvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgdGhpcy5ub3RpZmljYXRpb25zU2VydmljZS5lcnJvcihlcnJvci50aXRsZSwgZXJyb3IuZXJyb3IubWVzc2FnZSwge3RpbWVPdXQ6IDMwMDAsIHNob3dQcm9ncmVzc0JhcjogZmFsc2V9KVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBuZ0FmdGVyVmlld0luaXQoKSB7XHJcbiAgICB0aGlzLm5nem9uZS5ydW5PdXRzaWRlQW5ndWxhcigoKSA9PiB7XHJcbiAgICAgIE9ic2VydmFibGUuZnJvbUV2ZW50KHRoaXMuc2VhcmNoRWxSZWYubmF0aXZlRWxlbWVudCwgJ2tleXVwJylcclxuICAgICAgLmRlYm91bmNlVGltZSgxMDAwKVxyXG4gICAgICAuZGlzdGluY3RVbnRpbENoYW5nZWQoKSAvLyBUT0RPIHRlc3QgaWYgdGhpcyB3b3Jrc1xyXG4gICAgICAuc3Vic2NyaWJlKGV2ZW50ID0+IHtcclxuICAgICAgICB0aGlzLmNvbnRlc3RzU2VydmljZS5nZXRGaWx0ZXJlZENvbnRlc3RzKGV2ZW50LnRhcmdldC52YWx1ZSkgLy9zZWFyY2hTdHJpbmdcclxuICAgICAgICAuc3Vic2NyaWJlKGNvbnRlc3RzID0+IHtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKCdGaWx0ZXIgbGF5ZXIgMSBjb250ZXN0cycpO1xyXG4gICAgICAgICAgY29uc29sZS5sb2coY29udGVzdHMpO1xyXG4gICAgICAgICAgdmFyIHVuZmlsdGVyZWRDb250ZXN0cyA9IGNvbnRlc3RzO1xyXG4gICAgICAgICAgdmFyIGZpbHRlcmVkQ29udGVzdHMgPSB1bmZpbHRlcmVkQ29udGVzdHMuZmlsdGVyKChpdGVtOiBhbnkpID0+IGl0ZW0uc3RhdHVzID09IHRoaXMuc3RhdHVzKTtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKCdGaWx0ZXIgbGF5ZXIgMiBjb250ZXN0cycpO1xyXG4gICAgICAgICAgY29uc29sZS5sb2coZmlsdGVyZWRDb250ZXN0cyk7XHJcbiAgICAgICAgICB0aGlzLmNvbnRlc3RzID0gZmlsdGVyZWRDb250ZXN0cztcclxuICAgICAgICAgIHRoaXMuY2RSZWYuZGV0ZWN0Q2hhbmdlcygpO1xyXG4gICAgICAgIH0sIGVycm9yID0+IHtcclxuICAgICAgICAgIHRoaXMubm90aWZpY2F0aW9uc1NlcnZpY2UuZXJyb3IoZXJyb3IudGl0bGUsIGVycm9yLmVycm9yLm1lc3NhZ2UsIHt0aW1lT3V0OiAzMDAwLCBzaG93UHJvZ3Jlc3NCYXI6IGZhbHNlfSlcclxuICAgICAgICB9KTtcclxuICAgICAgfSk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHNlbGVjdEZpcnN0VGFiKCkge1xyXG4gICAgdGhpcy5maXJzdFRhYkFjdGl2ZSA9IHRydWU7XHJcbiAgICB0aGlzLnNlY29uZFRhYkFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgaWYgKHRoaXMuc3RhdHVzID09IFwiQWt0eXZ1c1wiKSB7XHJcbiAgICAgIC8vZG8gbm90aGluZ1xyXG4gICAgfSBlbHNlIHtcclxuICAgIHRoaXMuc3RhdHVzID0gXCJBa3R5dnVzXCI7XHJcbiAgICB0aGlzLmlzTG9hZGluZyA9IHRydWU7XHJcbiAgICB0aGlzLmNvbnRlc3RzU2VydmljZS5nZXRGaWx0ZXJlZENvbnRlc3RzKFwiXCIpIC8vID0gZ2V0IGFsbFxyXG4gICAgICAgIC5zdWJzY3JpYmUoY29udGVzdHMgPT4ge1xyXG4gICAgICAgICAgY29uc29sZS5sb2coJ0ZpbHRlciBsYXllciAxIGNvbnRlc3RzJyk7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhjb250ZXN0cyk7XHJcbiAgICAgICAgICB2YXIgdW5maWx0ZXJlZENvbnRlc3RzID0gY29udGVzdHM7XHJcbiAgICAgICAgICB2YXIgZmlsdGVyZWRDb250ZXN0cyA9IHVuZmlsdGVyZWRDb250ZXN0cy5maWx0ZXIoKGl0ZW06IGFueSkgPT4gaXRlbS5zdGF0dXMgPT0gdGhpcy5zdGF0dXMpO1xyXG4gICAgICAgICAgY29uc29sZS5sb2coJ0ZpbHRlciBsYXllciAyIGNvbnRlc3RzJyk7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhmaWx0ZXJlZENvbnRlc3RzKTtcclxuICAgICAgICAgIHRoaXMuY29udGVzdHMgPSBmaWx0ZXJlZENvbnRlc3RzO1xyXG4gICAgICAgICAgdGhpcy5jZFJlZi5kZXRlY3RDaGFuZ2VzKCk7XHJcbiAgICAgICAgICB0aGlzLmlzTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgIH0sIGVycm9yID0+IHtcclxuICAgICAgICAgIHRoaXMuaXNMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICB0aGlzLm5vdGlmaWNhdGlvbnNTZXJ2aWNlLmVycm9yKGVycm9yLnRpdGxlLCBlcnJvci5lcnJvci5tZXNzYWdlLCB7dGltZU91dDogMzAwMCwgc2hvd1Byb2dyZXNzQmFyOiBmYWxzZX0pXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBzZWxlY3RTZWNvbmRUYWIoKSB7XHJcbiAgICB0aGlzLmZpcnN0VGFiQWN0aXZlID0gZmFsc2U7XHJcbiAgICB0aGlzLnNlY29uZFRhYkFjdGl2ZSA9IHRydWU7XHJcbiAgICBpZiAodGhpcy5zdGF0dXMgPT0gXCJVxb5iYWlndGFzXCIpIHtcclxuICAgICAgLy9kbyBub3RoaW5nXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgdGhpcy5zdGF0dXMgPSBcIlXFvmJhaWd0YXNcIjtcclxuICAgIHRoaXMuaXNMb2FkaW5nID0gdHJ1ZTtcclxuICAgIHRoaXMuY29udGVzdHNTZXJ2aWNlLmdldEZpbHRlcmVkQ29udGVzdHMoXCJcIikgLy8gPSBnZXQgYWxsXHJcbiAgICAgICAgLnN1YnNjcmliZShjb250ZXN0cyA9PiB7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZygnRmlsdGVyIGxheWVyIDEgY29udGVzdHMnKTtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKGNvbnRlc3RzKTtcclxuICAgICAgICAgIHZhciB1bmZpbHRlcmVkQ29udGVzdHMgPSBjb250ZXN0cztcclxuICAgICAgICAgIHZhciBmaWx0ZXJlZENvbnRlc3RzID0gdW5maWx0ZXJlZENvbnRlc3RzLmZpbHRlcigoaXRlbTogYW55KSA9PiBpdGVtLnN0YXR1cyA9PSB0aGlzLnN0YXR1cyk7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZygnRmlsdGVyIGxheWVyIDIgY29udGVzdHMnKTtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKGZpbHRlcmVkQ29udGVzdHMpO1xyXG4gICAgICAgICAgdGhpcy5jb250ZXN0cyA9IGZpbHRlcmVkQ29udGVzdHM7XHJcbiAgICAgICAgICB0aGlzLmNkUmVmLmRldGVjdENoYW5nZXMoKTtcclxuICAgICAgICAgIHRoaXMuaXNMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgfSwgZXJyb3IgPT4ge1xyXG4gICAgICAgICAgdGhpcy5pc0xvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgIHRoaXMubm90aWZpY2F0aW9uc1NlcnZpY2UuZXJyb3IoZXJyb3IudGl0bGUsIGVycm9yLmVycm9yLm1lc3NhZ2UsIHt0aW1lT3V0OiAzMDAwLCBzaG93UHJvZ3Jlc3NCYXI6IGZhbHNlfSlcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICB9XHJcblxyXG59Il19
