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
var AdminManageContestsComponent = (function () {
    function AdminManageContestsComponent(contestsService, errorService, apiService, notificationsService, ngzone, cdRef, router) {
        this.contestsService = contestsService;
        this.errorService = errorService;
        this.apiService = apiService;
        this.notificationsService = notificationsService;
        this.ngzone = ngzone;
        this.cdRef = cdRef;
        this.router = router;
        this.contests = [];
        this.isLoading = false;
        this.status = "Nepatvirtintas";
        this.firstTabActive = true;
        this.secondTabActive = false;
        //allActiveContests = [];
        //allFinishedContests = [];
        this.allUnconfirmedContests = [];
        this.allContests = [];
        this.options = {
            position: ["top", "right"]
        };
    }
    AdminManageContestsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.isLoading = true;
        this.contestsService.getAllContests()
            .subscribe(function (contests) {
            //var unfilteredContests = contests;
            // var filteredActiveContests = unfilteredContests.filter((item: any) => item.status == this.status);
            // var filteredFinishedContests = unfilteredContests.filter((item: any) => item.status == "Užbaigtas");
            _this.allContests = contests;
            _this.contests = contests;
            var unconfirmedContets = contests.filter(function (item) { return item.status == _this.status; });
            _this.allUnconfirmedContests = unconfirmedContets;
            //this.allActiveContests = filteredActiveContests;
            //this.allFinishedContests = filteredFinishedContests;
            //this.contestsService.contests = contests;
            _this.isLoading = false;
            console.log(_this.contests);
        }, function (error) {
            _this.isLoading = false;
            _this.notificationsService.error(error.title, error.error.message, { timeOut: 3000, showProgressBar: false });
        });
    };
    AdminManageContestsComponent.prototype.ngAfterViewInit = function () {
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
                    //var unfilteredContests = contests;
                    //var filteredContests = unfilteredContests.filter((item: any) => item.status == this.status);
                    //console.log('Filter layer 2 contests');
                    //console.log(filteredContests);
                    //this.contests = filteredContests;
                    //this.allContests = contests;
                    _this.contests = contests;
                    _this.cdRef.detectChanges();
                }, function (error) {
                    _this.notificationsService.error(error.title, error.error.message, { timeOut: 3000, showProgressBar: false });
                });
            });
        });
        this.ngzone.runOutsideAngular(function () {
            Observable_1.Observable.fromEvent(_this.searchFilterRef.nativeElement, 'keyup')
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
    AdminManageContestsComponent.prototype.selectFirstTab = function () {
        var _this = this;
        this.firstTabActive = true;
        this.secondTabActive = false;
        if (this.status == "Aktyvus") {
        }
        else {
            //this.status = "Aktyvus";
            this.isLoading = true;
            this.searchElRef.nativeElement.value = '';
            this.contestsService.getFilteredContests("") // = get all
                .subscribe(function (contests) {
                //console.log('Filter layer 1 contests');
                //console.log(contests);
                //var unfilteredContests = contests;
                //var filteredContests = unfilteredContests.filter((item: any) => item.status == this.status);
                //console.log('Filter layer 2 contests');
                //console.log(filteredContests);
                _this.contests = contests;
                _this.cdRef.detectChanges();
                _this.isLoading = false;
            }, function (error) {
                _this.isLoading = false;
                _this.notificationsService.error(error.title, error.error.message, { timeOut: 3000, showProgressBar: false });
            });
        }
    };
    AdminManageContestsComponent.prototype.selectSecondTab = function () {
        var _this = this;
        this.firstTabActive = false;
        this.secondTabActive = true;
        if (this.status == "Užbaigtas") {
        }
        else {
            //this.status = "Užbaigtas";
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
    AdminManageContestsComponent.prototype.goToContestDetails = function (idName) {
        this.router.navigate(['/admin', 'konkursai', idName]);
    };
    AdminManageContestsComponent.prototype.belongsToUser = function (userId) {
        return sessionStorage.getItem('userId') == userId;
    };
    __decorate([
        core_1.ViewChild('search'), 
        __metadata('design:type', core_1.ElementRef)
    ], AdminManageContestsComponent.prototype, "searchElRef", void 0);
    __decorate([
        core_1.ViewChild('searchfilter'), 
        __metadata('design:type', core_1.ElementRef)
    ], AdminManageContestsComponent.prototype, "searchFilterRef", void 0);
    AdminManageContestsComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'admin-contests',
            templateUrl: 'admin-manage-contests.component.html'
        }), 
        __metadata('design:paramtypes', [contests_service_1.ContestsService, index_1.ErrorService, api_service_1.ApiService, angular2_notifications_1.NotificationsService, core_1.NgZone, core_1.ChangeDetectorRef, router_1.Router])
    ], AdminManageContestsComponent);
    return AdminManageContestsComponent;
}());
exports.AdminManageContestsComponent = AdminManageContestsComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvYWRtaW4vYWRtaW4tbWFuYWdlLWNvbnRlc3RzLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQW9GLGVBQWUsQ0FBQyxDQUFBO0FBQ3BHLHVCQUF1QixpQkFBaUIsQ0FBQyxDQUFBO0FBRXpDLGlDQUFnQyxpQ0FBaUMsQ0FBQyxDQUFBO0FBQ2xFLDRCQUEyQiw0QkFBNEIsQ0FBQyxDQUFBO0FBQ3hELHNCQUE2QixvQkFBb0IsQ0FBQyxDQUFBO0FBQ2xELHVDQUFxQyx3QkFBd0IsQ0FBQyxDQUFBO0FBQzlELDJCQUEyQixpQkFBaUIsQ0FBQyxDQUFBO0FBQzdDLFFBQU8sU0FBUyxDQUFDLENBQUE7QUFPakI7SUFnQkUsc0NBQW9CLGVBQWdDLEVBQ2hDLFlBQTBCLEVBQzFCLFVBQXNCLEVBQ3RCLG9CQUEwQyxFQUMxQyxNQUFjLEVBQ2QsS0FBd0IsRUFDeEIsTUFBYztRQU5kLG9CQUFlLEdBQWYsZUFBZSxDQUFpQjtRQUNoQyxpQkFBWSxHQUFaLFlBQVksQ0FBYztRQUMxQixlQUFVLEdBQVYsVUFBVSxDQUFZO1FBQ3RCLHlCQUFvQixHQUFwQixvQkFBb0IsQ0FBc0I7UUFDMUMsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUNkLFVBQUssR0FBTCxLQUFLLENBQW1CO1FBQ3hCLFdBQU0sR0FBTixNQUFNLENBQVE7UUFyQmxDLGFBQVEsR0FBUSxFQUFFLENBQUM7UUFDbkIsY0FBUyxHQUFHLEtBQUssQ0FBQztRQUNsQixXQUFNLEdBQUcsZ0JBQWdCLENBQUM7UUFDMUIsbUJBQWMsR0FBRyxJQUFJLENBQUM7UUFDdEIsb0JBQWUsR0FBRyxLQUFLLENBQUM7UUFDeEIseUJBQXlCO1FBQ3pCLDJCQUEyQjtRQUMzQiwyQkFBc0IsR0FBRyxFQUFFLENBQUM7UUFDNUIsZ0JBQVcsR0FBRyxFQUFFLENBQUM7UUFHVixZQUFPLEdBQUc7WUFDYixRQUFRLEVBQUUsQ0FBQyxLQUFLLEVBQUMsT0FBTyxDQUFD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LFFBQVEsRUFBRSxnQkFBZ0I7WUFDMUIsV0FBVyxFQUFFLHNDQUFzQztTQUNwRCxDQUFDOztvQ0FBQTtJQTBKRixtQ0FBQztBQUFELENBekpBLEFBeUpDLElBQUE7QUF6Slksb0NBQTRCLCtCQXlKeEMsQ0FBQSIsImZpbGUiOiJjb21wb25lbnRzL2FkbWluL2FkbWluLW1hbmFnZS1jb250ZXN0cy5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgVmlld0NoaWxkLCBFbGVtZW50UmVmLCBOZ1pvbmUsIENoYW5nZURldGVjdG9yUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcbmltcG9ydCB7IENvbnRlc3QgfSBmcm9tICcuLi8uLi9tb2RlbHMvY29udGVzdCc7XHJcbmltcG9ydCB7IENvbnRlc3RzU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL2NvbnRlc3RzLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBBcGlTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvYXBpLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBFcnJvclNlcnZpY2UgfSBmcm9tICcuLi8uLi9lcnJvcnMvaW5kZXgnO1xyXG5pbXBvcnQgeyBOb3RpZmljYXRpb25zU2VydmljZSB9IGZyb20gJ2FuZ3VsYXIyLW5vdGlmaWNhdGlvbnMnO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcy9PYnNlcnZhYmxlJztcclxuaW1wb3J0ICdyeGpzL1J4JztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIG1vZHVsZUlkOiBtb2R1bGUuaWQsXHJcbiAgc2VsZWN0b3I6ICdhZG1pbi1jb250ZXN0cycsXHJcbiAgdGVtcGxhdGVVcmw6ICdhZG1pbi1tYW5hZ2UtY29udGVzdHMuY29tcG9uZW50Lmh0bWwnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBBZG1pbk1hbmFnZUNvbnRlc3RzQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuICBjb250ZXN0czogYW55ID0gW107XHJcbiAgaXNMb2FkaW5nID0gZmFsc2U7XHJcbiAgc3RhdHVzID0gXCJOZXBhdHZpcnRpbnRhc1wiO1xyXG4gIGZpcnN0VGFiQWN0aXZlID0gdHJ1ZTtcclxuICBzZWNvbmRUYWJBY3RpdmUgPSBmYWxzZTtcclxuICAvL2FsbEFjdGl2ZUNvbnRlc3RzID0gW107XHJcbiAgLy9hbGxGaW5pc2hlZENvbnRlc3RzID0gW107XHJcbiAgYWxsVW5jb25maXJtZWRDb250ZXN0cyA9IFtdO1xyXG4gIGFsbENvbnRlc3RzID0gW107XHJcbiAgQFZpZXdDaGlsZCgnc2VhcmNoJykgc2VhcmNoRWxSZWY6IEVsZW1lbnRSZWY7XHJcbiAgQFZpZXdDaGlsZCgnc2VhcmNoZmlsdGVyJykgc2VhcmNoRmlsdGVyUmVmOiBFbGVtZW50UmVmO1xyXG4gIHB1YmxpYyBvcHRpb25zID0ge1xyXG4gICAgICBwb3NpdGlvbjogW1widG9wXCIsXCJyaWdodFwiXVxyXG4gICAgfTtcclxuICBcclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGNvbnRlc3RzU2VydmljZTogQ29udGVzdHNTZXJ2aWNlLCBcclxuICAgICAgICAgICAgICBwcml2YXRlIGVycm9yU2VydmljZTogRXJyb3JTZXJ2aWNlLFxyXG4gICAgICAgICAgICAgIHByaXZhdGUgYXBpU2VydmljZTogQXBpU2VydmljZSxcclxuICAgICAgICAgICAgICBwcml2YXRlIG5vdGlmaWNhdGlvbnNTZXJ2aWNlOiBOb3RpZmljYXRpb25zU2VydmljZSxcclxuICAgICAgICAgICAgICBwcml2YXRlIG5nem9uZTogTmdab25lLFxyXG4gICAgICAgICAgICAgIHByaXZhdGUgY2RSZWY6IENoYW5nZURldGVjdG9yUmVmLFxyXG4gICAgICAgICAgICAgIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIpIHsgfVxyXG5cclxuICBuZ09uSW5pdCgpIHsgXHJcbiAgICB0aGlzLmlzTG9hZGluZyA9IHRydWU7XHJcbiAgICB0aGlzLmNvbnRlc3RzU2VydmljZS5nZXRBbGxDb250ZXN0cygpXHJcbiAgICAuc3Vic2NyaWJlKGNvbnRlc3RzID0+IHtcclxuICAgICAgLy92YXIgdW5maWx0ZXJlZENvbnRlc3RzID0gY29udGVzdHM7XHJcbiAgICAgIC8vIHZhciBmaWx0ZXJlZEFjdGl2ZUNvbnRlc3RzID0gdW5maWx0ZXJlZENvbnRlc3RzLmZpbHRlcigoaXRlbTogYW55KSA9PiBpdGVtLnN0YXR1cyA9PSB0aGlzLnN0YXR1cyk7XHJcbiAgICAgIC8vIHZhciBmaWx0ZXJlZEZpbmlzaGVkQ29udGVzdHMgPSB1bmZpbHRlcmVkQ29udGVzdHMuZmlsdGVyKChpdGVtOiBhbnkpID0+IGl0ZW0uc3RhdHVzID09IFwiVcW+YmFpZ3Rhc1wiKTtcclxuICAgICAgdGhpcy5hbGxDb250ZXN0cyA9IGNvbnRlc3RzO1xyXG4gICAgICB0aGlzLmNvbnRlc3RzID0gY29udGVzdHM7XHJcbiAgICAgIHZhciB1bmNvbmZpcm1lZENvbnRldHMgPSBjb250ZXN0cy5maWx0ZXIoKGl0ZW06IGFueSkgPT4gaXRlbS5zdGF0dXMgPT0gdGhpcy5zdGF0dXMpO1xyXG4gICAgICB0aGlzLmFsbFVuY29uZmlybWVkQ29udGVzdHMgPSB1bmNvbmZpcm1lZENvbnRldHM7XHJcbiAgICAgIC8vdGhpcy5hbGxBY3RpdmVDb250ZXN0cyA9IGZpbHRlcmVkQWN0aXZlQ29udGVzdHM7XHJcbiAgICAgIC8vdGhpcy5hbGxGaW5pc2hlZENvbnRlc3RzID0gZmlsdGVyZWRGaW5pc2hlZENvbnRlc3RzO1xyXG4gICAgICAvL3RoaXMuY29udGVzdHNTZXJ2aWNlLmNvbnRlc3RzID0gY29udGVzdHM7XHJcbiAgICAgIHRoaXMuaXNMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgIGNvbnNvbGUubG9nKHRoaXMuY29udGVzdHMpO1xyXG4gICAgfSwgZXJyb3IgPT4ge1xyXG4gICAgICB0aGlzLmlzTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICB0aGlzLm5vdGlmaWNhdGlvbnNTZXJ2aWNlLmVycm9yKGVycm9yLnRpdGxlLCBlcnJvci5lcnJvci5tZXNzYWdlLCB7dGltZU91dDogMzAwMCwgc2hvd1Byb2dyZXNzQmFyOiBmYWxzZX0pXHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcclxuICAgIHRoaXMubmd6b25lLnJ1bk91dHNpZGVBbmd1bGFyKCgpID0+IHtcclxuICAgICAgT2JzZXJ2YWJsZS5mcm9tRXZlbnQodGhpcy5zZWFyY2hFbFJlZi5uYXRpdmVFbGVtZW50LCAna2V5dXAnKVxyXG4gICAgICAuZGVib3VuY2VUaW1lKDEwMDApXHJcbiAgICAgIC5kaXN0aW5jdFVudGlsQ2hhbmdlZCgpIC8vIFRPRE8gVXBkYXRlOiBub3Qgd29ya2luZy4gTmVlZHMgYSBjdXN0b20gY2FsbGJhY2sgdG8gY2hlY2sgZm9yIHdoaXRlc3BhY2UgZGlmZmVyZW5jZXNcclxuICAgICAgLnN1YnNjcmliZShldmVudCA9PiB7XHJcbiAgICAgICAgdGhpcy5jb250ZXN0c1NlcnZpY2UuZ2V0RmlsdGVyZWRDb250ZXN0cyhldmVudC50YXJnZXQudmFsdWUpIC8vc2VhcmNoU3RyaW5nXHJcbiAgICAgICAgLnN1YnNjcmliZShjb250ZXN0cyA9PiB7XHJcbiAgICAgICAgICAvL2NvbnNvbGUubG9nKCdGaWx0ZXIgbGF5ZXIgMSBjb250ZXN0cycpO1xyXG4gICAgICAgICAgLy9jb25zb2xlLmxvZyhjb250ZXN0cyk7XHJcbiAgICAgICAgICAvL3ZhciB1bmZpbHRlcmVkQ29udGVzdHMgPSBjb250ZXN0cztcclxuICAgICAgICAgIC8vdmFyIGZpbHRlcmVkQ29udGVzdHMgPSB1bmZpbHRlcmVkQ29udGVzdHMuZmlsdGVyKChpdGVtOiBhbnkpID0+IGl0ZW0uc3RhdHVzID09IHRoaXMuc3RhdHVzKTtcclxuICAgICAgICAgIC8vY29uc29sZS5sb2coJ0ZpbHRlciBsYXllciAyIGNvbnRlc3RzJyk7XHJcbiAgICAgICAgICAvL2NvbnNvbGUubG9nKGZpbHRlcmVkQ29udGVzdHMpO1xyXG4gICAgICAgICAgLy90aGlzLmNvbnRlc3RzID0gZmlsdGVyZWRDb250ZXN0cztcclxuICAgICAgICAgIC8vdGhpcy5hbGxDb250ZXN0cyA9IGNvbnRlc3RzO1xyXG4gICAgICAgICAgdGhpcy5jb250ZXN0cyA9IGNvbnRlc3RzO1xyXG4gICAgICAgICAgdGhpcy5jZFJlZi5kZXRlY3RDaGFuZ2VzKCk7XHJcbiAgICAgICAgfSwgZXJyb3IgPT4ge1xyXG4gICAgICAgICAgdGhpcy5ub3RpZmljYXRpb25zU2VydmljZS5lcnJvcihlcnJvci50aXRsZSwgZXJyb3IuZXJyb3IubWVzc2FnZSwge3RpbWVPdXQ6IDMwMDAsIHNob3dQcm9ncmVzc0JhcjogZmFsc2V9KVxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG5cclxuICAgIHRoaXMubmd6b25lLnJ1bk91dHNpZGVBbmd1bGFyKCgpID0+IHtcclxuICAgICAgT2JzZXJ2YWJsZS5mcm9tRXZlbnQodGhpcy5zZWFyY2hGaWx0ZXJSZWYubmF0aXZlRWxlbWVudCwgJ2tleXVwJylcclxuICAgICAgLmRlYm91bmNlVGltZSgxMDAwKVxyXG4gICAgICAuZGlzdGluY3RVbnRpbENoYW5nZWQoKSAvLyBUT0RPIFVwZGF0ZTogbm90IHdvcmtpbmcuIE5lZWRzIGEgY3VzdG9tIGNhbGxiYWNrIHRvIGNoZWNrIGZvciB3aGl0ZXNwYWNlIGRpZmZlcmVuY2VzXHJcbiAgICAgIC5zdWJzY3JpYmUoZXZlbnQgPT4ge1xyXG4gICAgICAgIHRoaXMuY29udGVzdHNTZXJ2aWNlLmdldEZpbHRlcmVkQ29udGVzdHMoZXZlbnQudGFyZ2V0LnZhbHVlKSAvL3NlYXJjaFN0cmluZ1xyXG4gICAgICAgIC5zdWJzY3JpYmUoY29udGVzdHMgPT4ge1xyXG4gICAgICAgICAgLy9jb25zb2xlLmxvZygnRmlsdGVyIGxheWVyIDEgY29udGVzdHMnKTtcclxuICAgICAgICAgIC8vY29uc29sZS5sb2coY29udGVzdHMpO1xyXG4gICAgICAgICAgdmFyIHVuZmlsdGVyZWRDb250ZXN0cyA9IGNvbnRlc3RzO1xyXG4gICAgICAgICAgdmFyIGZpbHRlcmVkQ29udGVzdHMgPSB1bmZpbHRlcmVkQ29udGVzdHMuZmlsdGVyKChpdGVtOiBhbnkpID0+IGl0ZW0uc3RhdHVzID09IHRoaXMuc3RhdHVzKTtcclxuICAgICAgICAgIC8vY29uc29sZS5sb2coJ0ZpbHRlciBsYXllciAyIGNvbnRlc3RzJyk7XHJcbiAgICAgICAgICAvL2NvbnNvbGUubG9nKGZpbHRlcmVkQ29udGVzdHMpO1xyXG4gICAgICAgICAgdGhpcy5jb250ZXN0cyA9IGZpbHRlcmVkQ29udGVzdHM7XHJcbiAgICAgICAgICB0aGlzLmNkUmVmLmRldGVjdENoYW5nZXMoKTtcclxuICAgICAgICB9LCBlcnJvciA9PiB7XHJcbiAgICAgICAgICB0aGlzLm5vdGlmaWNhdGlvbnNTZXJ2aWNlLmVycm9yKGVycm9yLnRpdGxlLCBlcnJvci5lcnJvci5tZXNzYWdlLCB7dGltZU91dDogMzAwMCwgc2hvd1Byb2dyZXNzQmFyOiBmYWxzZX0pXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBzZWxlY3RGaXJzdFRhYigpIHtcclxuICAgIHRoaXMuZmlyc3RUYWJBY3RpdmUgPSB0cnVlO1xyXG4gICAgdGhpcy5zZWNvbmRUYWJBY3RpdmUgPSBmYWxzZTtcclxuICAgIGlmICh0aGlzLnN0YXR1cyA9PSBcIkFrdHl2dXNcIikge1xyXG4gICAgICAvL2RvIG5vdGhpbmdcclxuICAgIH0gZWxzZSB7XHJcbiAgICAvL3RoaXMuc3RhdHVzID0gXCJBa3R5dnVzXCI7XHJcbiAgICB0aGlzLmlzTG9hZGluZyA9IHRydWU7XHJcbiAgICB0aGlzLnNlYXJjaEVsUmVmLm5hdGl2ZUVsZW1lbnQudmFsdWUgPSAnJztcclxuICAgIHRoaXMuY29udGVzdHNTZXJ2aWNlLmdldEZpbHRlcmVkQ29udGVzdHMoXCJcIikgLy8gPSBnZXQgYWxsXHJcbiAgICAgICAgLnN1YnNjcmliZShjb250ZXN0cyA9PiB7XHJcbiAgICAgICAgICAvL2NvbnNvbGUubG9nKCdGaWx0ZXIgbGF5ZXIgMSBjb250ZXN0cycpO1xyXG4gICAgICAgICAgLy9jb25zb2xlLmxvZyhjb250ZXN0cyk7XHJcbiAgICAgICAgICAvL3ZhciB1bmZpbHRlcmVkQ29udGVzdHMgPSBjb250ZXN0cztcclxuICAgICAgICAgIC8vdmFyIGZpbHRlcmVkQ29udGVzdHMgPSB1bmZpbHRlcmVkQ29udGVzdHMuZmlsdGVyKChpdGVtOiBhbnkpID0+IGl0ZW0uc3RhdHVzID09IHRoaXMuc3RhdHVzKTtcclxuICAgICAgICAgIC8vY29uc29sZS5sb2coJ0ZpbHRlciBsYXllciAyIGNvbnRlc3RzJyk7XHJcbiAgICAgICAgICAvL2NvbnNvbGUubG9nKGZpbHRlcmVkQ29udGVzdHMpO1xyXG4gICAgICAgICAgdGhpcy5jb250ZXN0cyA9IGNvbnRlc3RzO1xyXG4gICAgICAgICAgdGhpcy5jZFJlZi5kZXRlY3RDaGFuZ2VzKCk7XHJcbiAgICAgICAgICB0aGlzLmlzTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgIH0sIGVycm9yID0+IHtcclxuICAgICAgICAgIHRoaXMuaXNMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICB0aGlzLm5vdGlmaWNhdGlvbnNTZXJ2aWNlLmVycm9yKGVycm9yLnRpdGxlLCBlcnJvci5lcnJvci5tZXNzYWdlLCB7dGltZU91dDogMzAwMCwgc2hvd1Byb2dyZXNzQmFyOiBmYWxzZX0pXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBzZWxlY3RTZWNvbmRUYWIoKSB7XHJcbiAgICB0aGlzLmZpcnN0VGFiQWN0aXZlID0gZmFsc2U7XHJcbiAgICB0aGlzLnNlY29uZFRhYkFjdGl2ZSA9IHRydWU7XHJcbiAgICBpZiAodGhpcy5zdGF0dXMgPT0gXCJVxb5iYWlndGFzXCIpIHtcclxuICAgICAgLy9kbyBub3RoaW5nXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgLy90aGlzLnN0YXR1cyA9IFwiVcW+YmFpZ3Rhc1wiO1xyXG4gICAgdGhpcy5pc0xvYWRpbmcgPSB0cnVlO1xyXG4gICAgdGhpcy5zZWFyY2hFbFJlZi5uYXRpdmVFbGVtZW50LnZhbHVlID0gJyc7XHJcbiAgICB0aGlzLmNvbnRlc3RzU2VydmljZS5nZXRGaWx0ZXJlZENvbnRlc3RzKFwiXCIpIC8vID0gZ2V0IGFsbFxyXG4gICAgICAgIC5zdWJzY3JpYmUoY29udGVzdHMgPT4ge1xyXG4gICAgICAgICAgLy9jb25zb2xlLmxvZygnRmlsdGVyIGxheWVyIDEgY29udGVzdHMnKTtcclxuICAgICAgICAgIC8vY29uc29sZS5sb2coY29udGVzdHMpO1xyXG4gICAgICAgICAgdmFyIHVuZmlsdGVyZWRDb250ZXN0cyA9IGNvbnRlc3RzO1xyXG4gICAgICAgICAgdmFyIGZpbHRlcmVkQ29udGVzdHMgPSB1bmZpbHRlcmVkQ29udGVzdHMuZmlsdGVyKChpdGVtOiBhbnkpID0+IGl0ZW0uc3RhdHVzID09IHRoaXMuc3RhdHVzKTtcclxuICAgICAgICAgIC8vY29uc29sZS5sb2coJ0ZpbHRlciBsYXllciAyIGNvbnRlc3RzJyk7XHJcbiAgICAgICAgICAvL2NvbnNvbGUubG9nKGZpbHRlcmVkQ29udGVzdHMpO1xyXG4gICAgICAgICAgdGhpcy5jb250ZXN0cyA9IGZpbHRlcmVkQ29udGVzdHM7XHJcbiAgICAgICAgICB0aGlzLmNkUmVmLmRldGVjdENoYW5nZXMoKTtcclxuICAgICAgICAgIHRoaXMuaXNMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgfSwgZXJyb3IgPT4ge1xyXG4gICAgICAgICAgdGhpcy5pc0xvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgIHRoaXMubm90aWZpY2F0aW9uc1NlcnZpY2UuZXJyb3IoZXJyb3IudGl0bGUsIGVycm9yLmVycm9yLm1lc3NhZ2UsIHt0aW1lT3V0OiAzMDAwLCBzaG93UHJvZ3Jlc3NCYXI6IGZhbHNlfSlcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGdvVG9Db250ZXN0RGV0YWlscyhpZE5hbWU6IHN0cmluZykge1xyXG4gICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoWycvYWRtaW4nLCAna29ua3Vyc2FpJywgaWROYW1lXSk7XHJcbiAgfVxyXG5cclxuICBiZWxvbmdzVG9Vc2VyKHVzZXJJZDogc3RyaW5nKSB7XHJcbiAgICByZXR1cm4gc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbSgndXNlcklkJykgPT0gdXNlcklkO1xyXG4gIH1cclxufSJdfQ==
