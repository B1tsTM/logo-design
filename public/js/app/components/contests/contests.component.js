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
var ContestsComponent = (function () {
    function ContestsComponent(contestsService, errorService, apiService, notificationsService, ngzone, cdRef, router) {
        this.contestsService = contestsService;
        this.errorService = errorService;
        this.apiService = apiService;
        this.notificationsService = notificationsService;
        this.ngzone = ngzone;
        this.cdRef = cdRef;
        this.router = router;
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
    ContestsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.isLoading = true;
        this.contestsService.getAllContests()
            .subscribe(function (contests) {
            var unfilteredContests = contests;
            var filteredActiveContests = unfilteredContests.filter(function (item) { return item.status == _this.status1 || item.status == _this.status2; });
            var filteredFinishedContests = unfilteredContests.filter(function (item) { return item.status == "Užbaigtas" || item.status == "Laikas baigėsi"; });
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
    ContestsComponent.prototype.ngAfterViewInit = function () {
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
    ContestsComponent.prototype.selectFirstTab = function () {
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
    ContestsComponent.prototype.selectSecondTab = function () {
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
                var filteredContests = unfilteredContests.filter(function (item) { return item.status == _this.status1 || item.status == _this.status2; }); //TODO next up - resuming contests (admin), also fix admin contest loading with new statuses
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
    ContestsComponent.prototype.goToContestDetails = function (idName) {
        this.router.navigate(['/konkursai', idName]);
    };
    ContestsComponent.prototype.belongsToUser = function (userId) {
        return sessionStorage.getItem('userId') == userId;
    };
    __decorate([
        core_1.ViewChild('search'), 
        __metadata('design:type', core_1.ElementRef)
    ], ContestsComponent.prototype, "searchElRef", void 0);
    ContestsComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'contests',
            templateUrl: 'contests.component.html',
            styleUrls: ['contests.component.css']
        }), 
        __metadata('design:paramtypes', [contests_service_1.ContestsService, index_1.ErrorService, api_service_1.ApiService, angular2_notifications_1.NotificationsService, core_1.NgZone, core_1.ChangeDetectorRef, router_1.Router])
    ], ContestsComponent);
    return ContestsComponent;
}());
exports.ContestsComponent = ContestsComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvY29udGVzdHMvY29udGVzdHMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBb0YsZUFBZSxDQUFDLENBQUE7QUFDcEcsdUJBQXVCLGlCQUFpQixDQUFDLENBQUE7QUFFekMsaUNBQWdDLGlDQUFpQyxDQUFDLENBQUE7QUFDbEUsNEJBQTJCLDRCQUE0QixDQUFDLENBQUE7QUFDeEQsc0JBQTZCLG9CQUFvQixDQUFDLENBQUE7QUFDbEQsdUNBQXFDLHdCQUF3QixDQUFDLENBQUE7QUFDOUQsMkJBQTJCLGlCQUFpQixDQUFDLENBQUE7QUFDN0MsUUFBTyxTQUFTLENBQUMsQ0FBQTtBQVNqQjtJQWNFLDJCQUFvQixlQUFnQyxFQUNoQyxZQUEwQixFQUMxQixVQUFzQixFQUN0QixvQkFBMEMsRUFDMUMsTUFBYyxFQUNkLEtBQXdCLEVBQ3hCLE1BQWM7UUFOZCxvQkFBZSxHQUFmLGVBQWUsQ0FBaUI7UUFDaEMsaUJBQVksR0FBWixZQUFZLENBQWM7UUFDMUIsZUFBVSxHQUFWLFVBQVUsQ0FBWTtRQUN0Qix5QkFBb0IsR0FBcEIsb0JBQW9CLENBQXNCO1FBQzFDLFdBQU0sR0FBTixNQUFNLENBQVE7UUFDZCxVQUFLLEdBQUwsS0FBSyxDQUFtQjtRQUN4QixXQUFNLEdBQU4sTUFBTSxDQUFRO1FBbkJsQyxhQUFRLEdBQVEsRUFBRSxDQUFDO1FBQ25CLGNBQVMsR0FBRyxLQUFLLENBQUM7UUFDbEIsWUFBTyxHQUFHLFNBQVMsQ0FBQztRQUNwQixZQUFPLEdBQUcsV0FBVyxDQUFDO1FBQ3RCLG1CQUFjLEdBQUcsSUFBSSxDQUFDO1FBQ3RCLG9CQUFlLEdBQUcsS0FBSyxDQUFDO1FBQ3hCLHNCQUFpQixHQUFHLEVBQUUsQ0FBQztRQUN2Qix3QkFBbUIsR0FBRyxFQUFFLENBQUM7UUFFbEIsWUFBTyxHQUFHO1lBQ2IsUUFBUSxFQUFFLENBQUMsS0FBSyxFQUFDLE9BQU8sQ0FBQztTQUMxQixDQUFD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QyxLQUFJLENBQUMsUUFBUSxHQUFHLGdCQUFnQixDQUFDO2dCQUNqQyxLQUFJLENBQUMsS0FBSyxDQUFDLGFBQWEsRUFBRSxDQUFDO2dCQUMzQixLQUFJLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQztZQUN6QixDQUFDLEVBQUUsVUFBQSxLQUFLO2dCQUNOLEtBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDO2dCQUN2QixLQUFJLENBQUMsb0JBQW9CLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxLQUFLLEVBQUUsS0FBSyxDQUFDLEtBQUssQ0FBQyxPQUFPLEVBQUUsRUFBQyxPQUFPLEVBQUUsSUFBSSxFQUFFLGVBQWUsRUFBRSxLQUFLLEVBQUMsQ0FBQyxDQUFBO1lBQzVHLENBQUMsQ0FBQyxDQUFDO1FBQ1AsQ0FBQztJQUNILENBQUM7SUFFRCw4Q0FBa0IsR0FBbEIsVUFBbUIsTUFBYztRQUMvQixJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLFlBQVksRUFBRSxNQUFNLENBQUMsQ0FBQyxDQUFDO0lBQy9DLENBQUM7SUFFRCx5Q0FBYSxHQUFiLFVBQWMsTUFBYztRQUMxQixNQUFNLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsSUFBSSxNQUFNLENBQUM7SUFDcEQsQ0FBQztJQXJIRDtRQUFDLGdCQUFTLENBQUMsUUFBUSxDQUFDOzswREFBQTtJQWhCdEI7UUFBQyxnQkFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFFBQVEsRUFBRSxVQUFVO1lBQ3BCLFdBQVcsRUFBRSx5QkFBeUI7WUFDdEMsU0FBUyxFQUFFLENBQUMsd0JBQXdCLENBQUM7U0FFdEMsQ0FBQzs7eUJBQUE7SUFpSUYsd0JBQUM7QUFBRCxDQWhJQSxBQWdJQyxJQUFBO0FBaElZLHlCQUFpQixvQkFnSTdCLENBQUEiLCJmaWxlIjoiY29tcG9uZW50cy9jb250ZXN0cy9jb250ZXN0cy5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgVmlld0NoaWxkLCBFbGVtZW50UmVmLCBOZ1pvbmUsIENoYW5nZURldGVjdG9yUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcbmltcG9ydCB7IENvbnRlc3QgfSBmcm9tICcuLi8uLi9tb2RlbHMvY29udGVzdCc7XHJcbmltcG9ydCB7IENvbnRlc3RzU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL2NvbnRlc3RzLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBBcGlTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvYXBpLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBFcnJvclNlcnZpY2UgfSBmcm9tICcuLi8uLi9lcnJvcnMvaW5kZXgnO1xyXG5pbXBvcnQgeyBOb3RpZmljYXRpb25zU2VydmljZSB9IGZyb20gJ2FuZ3VsYXIyLW5vdGlmaWNhdGlvbnMnO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcy9PYnNlcnZhYmxlJztcclxuaW1wb3J0ICdyeGpzL1J4JztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIG1vZHVsZUlkOiBtb2R1bGUuaWQsXHJcbiAgc2VsZWN0b3I6ICdjb250ZXN0cycsXHJcbiAgdGVtcGxhdGVVcmw6ICdjb250ZXN0cy5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJ2NvbnRlc3RzLmNvbXBvbmVudC5jc3MnXVxyXG4gIC8vLCBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lIC8vZGlzYWJsaW5nIHNoYWRvdyBET01cclxufSlcclxuZXhwb3J0IGNsYXNzIENvbnRlc3RzQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuICBjb250ZXN0czogYW55ID0gW107XHJcbiAgaXNMb2FkaW5nID0gZmFsc2U7XHJcbiAgc3RhdHVzMSA9IFwiQWt0eXZ1c1wiO1xyXG4gIHN0YXR1czIgPSBcIlByYXTEmXN0YXNcIjtcclxuICBmaXJzdFRhYkFjdGl2ZSA9IHRydWU7XHJcbiAgc2Vjb25kVGFiQWN0aXZlID0gZmFsc2U7XHJcbiAgYWxsQWN0aXZlQ29udGVzdHMgPSBbXTtcclxuICBhbGxGaW5pc2hlZENvbnRlc3RzID0gW107XHJcbiAgQFZpZXdDaGlsZCgnc2VhcmNoJykgc2VhcmNoRWxSZWY6IEVsZW1lbnRSZWY7XHJcbiAgcHVibGljIG9wdGlvbnMgPSB7XHJcbiAgICAgIHBvc2l0aW9uOiBbXCJ0b3BcIixcInJpZ2h0XCJdXHJcbiAgICB9O1xyXG4gIFxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgY29udGVzdHNTZXJ2aWNlOiBDb250ZXN0c1NlcnZpY2UsIFxyXG4gICAgICAgICAgICAgIHByaXZhdGUgZXJyb3JTZXJ2aWNlOiBFcnJvclNlcnZpY2UsXHJcbiAgICAgICAgICAgICAgcHJpdmF0ZSBhcGlTZXJ2aWNlOiBBcGlTZXJ2aWNlLFxyXG4gICAgICAgICAgICAgIHByaXZhdGUgbm90aWZpY2F0aW9uc1NlcnZpY2U6IE5vdGlmaWNhdGlvbnNTZXJ2aWNlLFxyXG4gICAgICAgICAgICAgIHByaXZhdGUgbmd6b25lOiBOZ1pvbmUsXHJcbiAgICAgICAgICAgICAgcHJpdmF0ZSBjZFJlZjogQ2hhbmdlRGV0ZWN0b3JSZWYsXHJcbiAgICAgICAgICAgICAgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlcikgeyB9XHJcblxyXG4gIG5nT25Jbml0KCkgeyBcclxuICAgIHRoaXMuaXNMb2FkaW5nID0gdHJ1ZTtcclxuICAgIHRoaXMuY29udGVzdHNTZXJ2aWNlLmdldEFsbENvbnRlc3RzKClcclxuICAgIC5zdWJzY3JpYmUoY29udGVzdHMgPT4ge1xyXG4gICAgICB2YXIgdW5maWx0ZXJlZENvbnRlc3RzID0gY29udGVzdHM7XHJcbiAgICAgIHZhciBmaWx0ZXJlZEFjdGl2ZUNvbnRlc3RzID0gdW5maWx0ZXJlZENvbnRlc3RzLmZpbHRlcigoaXRlbTogYW55KSA9PiBpdGVtLnN0YXR1cyA9PSB0aGlzLnN0YXR1czEgfHwgaXRlbS5zdGF0dXMgPT0gdGhpcy5zdGF0dXMyKTtcclxuICAgICAgdmFyIGZpbHRlcmVkRmluaXNoZWRDb250ZXN0cyA9IHVuZmlsdGVyZWRDb250ZXN0cy5maWx0ZXIoKGl0ZW06IGFueSkgPT4gaXRlbS5zdGF0dXMgPT0gXCJVxb5iYWlndGFzXCIgfHwgaXRlbS5zdGF0dXMgPT0gXCJMYWlrYXMgYmFpZ8SXc2lcIik7XHJcbiAgICAgIHRoaXMuY29udGVzdHMgPSBmaWx0ZXJlZEFjdGl2ZUNvbnRlc3RzO1xyXG4gICAgICB0aGlzLmFsbEFjdGl2ZUNvbnRlc3RzID0gZmlsdGVyZWRBY3RpdmVDb250ZXN0cztcclxuICAgICAgdGhpcy5hbGxGaW5pc2hlZENvbnRlc3RzID0gZmlsdGVyZWRGaW5pc2hlZENvbnRlc3RzO1xyXG4gICAgICAvL3RoaXMuY29udGVzdHNTZXJ2aWNlLmNvbnRlc3RzID0gY29udGVzdHM7XHJcbiAgICAgIHRoaXMuaXNMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgIGNvbnNvbGUubG9nKHRoaXMuY29udGVzdHMpO1xyXG4gICAgfSwgZXJyb3IgPT4ge1xyXG4gICAgICB0aGlzLmlzTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICB0aGlzLm5vdGlmaWNhdGlvbnNTZXJ2aWNlLmVycm9yKGVycm9yLnRpdGxlLCBlcnJvci5lcnJvci5tZXNzYWdlLCB7dGltZU91dDogMzAwMCwgc2hvd1Byb2dyZXNzQmFyOiBmYWxzZX0pXHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcclxuICAgIHRoaXMubmd6b25lLnJ1bk91dHNpZGVBbmd1bGFyKCgpID0+IHtcclxuICAgICAgT2JzZXJ2YWJsZS5mcm9tRXZlbnQodGhpcy5zZWFyY2hFbFJlZi5uYXRpdmVFbGVtZW50LCAna2V5dXAnKVxyXG4gICAgICAuZGVib3VuY2VUaW1lKDEwMDApXHJcbiAgICAgIC5kaXN0aW5jdFVudGlsQ2hhbmdlZCgpIC8vIFRPRE8gVXBkYXRlOiBub3Qgd29ya2luZy4gTmVlZHMgYSBjdXN0b20gY2FsbGJhY2sgdG8gY2hlY2sgZm9yIHdoaXRlc3BhY2UgZGlmZmVyZW5jZXNcclxuICAgICAgLnN1YnNjcmliZShldmVudCA9PiB7XHJcbiAgICAgICAgdGhpcy5jb250ZXN0c1NlcnZpY2UuZ2V0RmlsdGVyZWRDb250ZXN0cyhldmVudC50YXJnZXQudmFsdWUpIC8vc2VhcmNoU3RyaW5nXHJcbiAgICAgICAgLnN1YnNjcmliZShjb250ZXN0cyA9PiB7XHJcbiAgICAgICAgICAvL2NvbnNvbGUubG9nKCdGaWx0ZXIgbGF5ZXIgMSBjb250ZXN0cycpO1xyXG4gICAgICAgICAgLy9jb25zb2xlLmxvZyhjb250ZXN0cyk7XHJcbiAgICAgICAgICB2YXIgdW5maWx0ZXJlZENvbnRlc3RzID0gY29udGVzdHM7XHJcbiAgICAgICAgICB2YXIgZmlsdGVyZWRDb250ZXN0cyA9IHVuZmlsdGVyZWRDb250ZXN0cy5maWx0ZXIoKGl0ZW06IGFueSkgPT4gaXRlbS5zdGF0dXMgPT0gdGhpcy5zdGF0dXMxIHx8IGl0ZW0uc3RhdHVzID09IHRoaXMuc3RhdHVzMik7XHJcbiAgICAgICAgICAvL2NvbnNvbGUubG9nKCdGaWx0ZXIgbGF5ZXIgMiBjb250ZXN0cycpO1xyXG4gICAgICAgICAgLy9jb25zb2xlLmxvZyhmaWx0ZXJlZENvbnRlc3RzKTtcclxuICAgICAgICAgIHRoaXMuY29udGVzdHMgPSBmaWx0ZXJlZENvbnRlc3RzO1xyXG4gICAgICAgICAgdGhpcy5jZFJlZi5kZXRlY3RDaGFuZ2VzKCk7XHJcbiAgICAgICAgfSwgZXJyb3IgPT4ge1xyXG4gICAgICAgICAgdGhpcy5ub3RpZmljYXRpb25zU2VydmljZS5lcnJvcihlcnJvci50aXRsZSwgZXJyb3IuZXJyb3IubWVzc2FnZSwge3RpbWVPdXQ6IDMwMDAsIHNob3dQcm9ncmVzc0JhcjogZmFsc2V9KVxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgc2VsZWN0Rmlyc3RUYWIoKSB7XHJcbiAgICB0aGlzLmZpcnN0VGFiQWN0aXZlID0gdHJ1ZTtcclxuICAgIHRoaXMuc2Vjb25kVGFiQWN0aXZlID0gZmFsc2U7XHJcbiAgICBpZiAodGhpcy5zdGF0dXMxID09IFwiQWt0eXZ1c1wiKSB7XHJcbiAgICAgIC8vZG8gbm90aGluZ1xyXG4gICAgfSBlbHNlIHtcclxuICAgIHRoaXMuc3RhdHVzMSA9IFwiQWt0eXZ1c1wiO1xyXG4gICAgdGhpcy5zdGF0dXMyID0gXCJQcmF0xJlzdGFzXCI7XHJcbiAgICB0aGlzLmlzTG9hZGluZyA9IHRydWU7XHJcbiAgICB0aGlzLnNlYXJjaEVsUmVmLm5hdGl2ZUVsZW1lbnQudmFsdWUgPSAnJztcclxuICAgIHRoaXMuY29udGVzdHNTZXJ2aWNlLmdldEZpbHRlcmVkQ29udGVzdHMoXCJcIikgLy8gPSBnZXQgYWxsXHJcbiAgICAgICAgLnN1YnNjcmliZShjb250ZXN0cyA9PiB7XHJcbiAgICAgICAgICAvL2NvbnNvbGUubG9nKCdGaWx0ZXIgbGF5ZXIgMSBjb250ZXN0cycpO1xyXG4gICAgICAgICAgLy9jb25zb2xlLmxvZyhjb250ZXN0cyk7XHJcbiAgICAgICAgICB2YXIgdW5maWx0ZXJlZENvbnRlc3RzID0gY29udGVzdHM7XHJcbiAgICAgICAgICB2YXIgZmlsdGVyZWRDb250ZXN0cyA9IHVuZmlsdGVyZWRDb250ZXN0cy5maWx0ZXIoKGl0ZW06IGFueSkgPT4gaXRlbS5zdGF0dXMgPT0gdGhpcy5zdGF0dXMxIHx8IGl0ZW0uc3RhdHVzID09IHRoaXMuc3RhdHVzMik7XHJcbiAgICAgICAgICAvL2NvbnNvbGUubG9nKCdGaWx0ZXIgbGF5ZXIgMiBjb250ZXN0cycpO1xyXG4gICAgICAgICAgLy9jb25zb2xlLmxvZyhmaWx0ZXJlZENvbnRlc3RzKTtcclxuICAgICAgICAgIHRoaXMuY29udGVzdHMgPSBmaWx0ZXJlZENvbnRlc3RzO1xyXG4gICAgICAgICAgdGhpcy5jZFJlZi5kZXRlY3RDaGFuZ2VzKCk7XHJcbiAgICAgICAgICB0aGlzLmlzTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgIH0sIGVycm9yID0+IHtcclxuICAgICAgICAgIHRoaXMuaXNMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICB0aGlzLm5vdGlmaWNhdGlvbnNTZXJ2aWNlLmVycm9yKGVycm9yLnRpdGxlLCBlcnJvci5lcnJvci5tZXNzYWdlLCB7dGltZU91dDogMzAwMCwgc2hvd1Byb2dyZXNzQmFyOiBmYWxzZX0pXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBzZWxlY3RTZWNvbmRUYWIoKSB7XHJcbiAgICB0aGlzLmZpcnN0VGFiQWN0aXZlID0gZmFsc2U7XHJcbiAgICB0aGlzLnNlY29uZFRhYkFjdGl2ZSA9IHRydWU7XHJcbiAgICBpZiAodGhpcy5zdGF0dXMxID09IFwiVcW+YmFpZ3Rhc1wiKSB7XHJcbiAgICAgIC8vZG8gbm90aGluZ1xyXG4gICAgfSBlbHNlIHtcclxuICAgIHRoaXMuc3RhdHVzMSA9IFwiVcW+YmFpZ3Rhc1wiO1xyXG4gICAgdGhpcy5zdGF0dXMyID0gXCJMYWlrYXMgYmFpZ8SXc2lcIjtcclxuICAgIHRoaXMuaXNMb2FkaW5nID0gdHJ1ZTtcclxuICAgIHRoaXMuc2VhcmNoRWxSZWYubmF0aXZlRWxlbWVudC52YWx1ZSA9ICcnO1xyXG4gICAgdGhpcy5jb250ZXN0c1NlcnZpY2UuZ2V0RmlsdGVyZWRDb250ZXN0cyhcIlwiKSAvLyA9IGdldCBhbGxcclxuICAgICAgICAuc3Vic2NyaWJlKGNvbnRlc3RzID0+IHtcclxuICAgICAgICAgIC8vY29uc29sZS5sb2coJ0ZpbHRlciBsYXllciAxIGNvbnRlc3RzJyk7XHJcbiAgICAgICAgICAvL2NvbnNvbGUubG9nKGNvbnRlc3RzKTtcclxuICAgICAgICAgIHZhciB1bmZpbHRlcmVkQ29udGVzdHMgPSBjb250ZXN0cztcclxuICAgICAgICAgIHZhciBmaWx0ZXJlZENvbnRlc3RzID0gdW5maWx0ZXJlZENvbnRlc3RzLmZpbHRlcigoaXRlbTogYW55KSA9PiBpdGVtLnN0YXR1cyA9PSB0aGlzLnN0YXR1czEgfHwgaXRlbS5zdGF0dXMgPT0gdGhpcy5zdGF0dXMyKTsgLy9UT0RPIG5leHQgdXAgLSByZXN1bWluZyBjb250ZXN0cyAoYWRtaW4pLCBhbHNvIGZpeCBhZG1pbiBjb250ZXN0IGxvYWRpbmcgd2l0aCBuZXcgc3RhdHVzZXNcclxuICAgICAgICAgIC8vY29uc29sZS5sb2coJ0ZpbHRlciBsYXllciAyIGNvbnRlc3RzJyk7XHJcbiAgICAgICAgICAvL2NvbnNvbGUubG9nKGZpbHRlcmVkQ29udGVzdHMpO1xyXG4gICAgICAgICAgdGhpcy5jb250ZXN0cyA9IGZpbHRlcmVkQ29udGVzdHM7XHJcbiAgICAgICAgICB0aGlzLmNkUmVmLmRldGVjdENoYW5nZXMoKTtcclxuICAgICAgICAgIHRoaXMuaXNMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgfSwgZXJyb3IgPT4ge1xyXG4gICAgICAgICAgdGhpcy5pc0xvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgIHRoaXMubm90aWZpY2F0aW9uc1NlcnZpY2UuZXJyb3IoZXJyb3IudGl0bGUsIGVycm9yLmVycm9yLm1lc3NhZ2UsIHt0aW1lT3V0OiAzMDAwLCBzaG93UHJvZ3Jlc3NCYXI6IGZhbHNlfSlcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGdvVG9Db250ZXN0RGV0YWlscyhpZE5hbWU6IHN0cmluZykge1xyXG4gICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoWycva29ua3Vyc2FpJywgaWROYW1lXSk7XHJcbiAgfVxyXG5cclxuICBiZWxvbmdzVG9Vc2VyKHVzZXJJZDogc3RyaW5nKSB7XHJcbiAgICByZXR1cm4gc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbSgndXNlcklkJykgPT0gdXNlcklkO1xyXG4gIH1cclxuXHJcbn0iXX0=
