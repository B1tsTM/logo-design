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
            _this.allContests = contests;
            _this.contests = contests;
            var unconfirmedContets = contests.filter(function (item) { return item.status == _this.status; });
            _this.allUnconfirmedContests = unconfirmedContets;
            _this.isLoading = false;
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
                .distinctUntilChanged() // TODO fix this. Update: not working, Needs a custom callback to check for whitespace differences
                .subscribe(function (event) {
                _this.contestsService.getFilteredContests(event.target.value) //searchString
                    .subscribe(function (contests) {
                    var unfilteredContests = contests;
                    var filteredContests = unfilteredContests.filter(function (item) { return item.status == _this.status; });
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
            this.isLoading = true;
            this.searchElRef.nativeElement.value = '';
            this.contestsService.getFilteredContests("") // = get all
                .subscribe(function (contests) {
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
            this.isLoading = true;
            this.searchElRef.nativeElement.value = '';
            this.contestsService.getFilteredContests("") // = get all
                .subscribe(function (contests) {
                var unfilteredContests = contests;
                var filteredContests = unfilteredContests.filter(function (item) { return item.status == _this.status; });
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
    AdminManageContestsComponent.prototype.goBackToAdminPanel = function () {
        this.router.navigate(['/admin']);
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
            templateUrl: 'admin-manage-contests.component.html',
            styleUrls: ['admin-manage-contests.component.css']
        }), 
        __metadata('design:paramtypes', [contests_service_1.ContestsService, index_1.ErrorService, api_service_1.ApiService, angular2_notifications_1.NotificationsService, core_1.NgZone, core_1.ChangeDetectorRef, router_1.Router])
    ], AdminManageContestsComponent);
    return AdminManageContestsComponent;
}());
exports.AdminManageContestsComponent = AdminManageContestsComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvYWRtaW4vYWRtaW4tbWFuYWdlLWNvbnRlc3RzLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQW9GLGVBQWUsQ0FBQyxDQUFBO0FBQ3BHLHVCQUF1QixpQkFBaUIsQ0FBQyxDQUFBO0FBRXpDLGlDQUFnQyxpQ0FBaUMsQ0FBQyxDQUFBO0FBQ2xFLDRCQUEyQiw0QkFBNEIsQ0FBQyxDQUFBO0FBQ3hELHNCQUE2QixvQkFBb0IsQ0FBQyxDQUFBO0FBQ2xELHVDQUFxQyx3QkFBd0IsQ0FBQyxDQUFBO0FBQzlELDJCQUEyQixpQkFBaUIsQ0FBQyxDQUFBO0FBQzdDLFFBQU8sU0FBUyxDQUFDLENBQUE7QUFRakI7SUFjRSxzQ0FBb0IsZUFBZ0MsRUFDaEMsWUFBMEIsRUFDMUIsVUFBc0IsRUFDdEIsb0JBQTBDLEVBQzFDLE1BQWMsRUFDZCxLQUF3QixFQUN4QixNQUFjO1FBTmQsb0JBQWUsR0FBZixlQUFlLENBQWlCO1FBQ2hDLGlCQUFZLEdBQVosWUFBWSxDQUFjO1FBQzFCLGVBQVUsR0FBVixVQUFVLENBQVk7UUFDdEIseUJBQW9CLEdBQXBCLG9CQUFvQixDQUFzQjtRQUMxQyxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQ2QsVUFBSyxHQUFMLEtBQUssQ0FBbUI7UUFDeEIsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQW5CbEMsYUFBUSxHQUFRLEVBQUUsQ0FBQztRQUNuQixjQUFTLEdBQUcsS0FBSyxDQUFDO1FBQ2xCLFdBQU0sR0FBRyxnQkFBZ0IsQ0FBQztRQUMxQixtQkFBYyxHQUFHLElBQUksQ0FBQztRQUN0QixvQkFBZSxHQUFHLEtBQUssQ0FBQztRQUN4QiwyQkFBc0IsR0FBRyxFQUFFLENBQUM7UUFDNUIsZ0JBQVcsR0FBRyxFQUFFLENBQUM7UUFHVixZQUFPLEdBQUc7WUFDYixRQUFRLEVBQUUsQ0FBQyxLQUFLLEVBQUMsT0FBTyxDQUFDO1NBQzFCLENBQUM7SUFRa0MsQ0FBQztJQUV2QywrQ0FBUSxHQUFSO1FBQUEsaUJBYUM7UUFaQyxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQztRQUN0QixJQUFJLENBQUMsZUFBZSxDQUFDLGNBQWMsRUFBRTthQUNwQyxTQUFTLENBQUMsVUFBQSxRQUFRO1lBQ2pCLEtBQUksQ0FBQyxXQUFXLEdBQUcsUUFBUSxDQUFDO1lBQzVCLEtBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO1lBQ3pCLElBQUksa0JBQWtCLEdBQUcsUUFBUSxDQUFDLE1BQU0sQ0FBQyxVQUFDLElBQVMsSUFBSyxPQUFBLElBQUksQ0FBQyxNQUFNLElBQUksS0FBSSxDQUFDLE1BQU0sRUFBMUIsQ0FBMEIsQ0FBQyxDQUFDO1lBQ3BGLEtBQUksQ0FBQyxzQkFBc0IsR0FBRyxrQkFBa0IsQ0FBQztZQUNqRCxLQUFJLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQztRQUN6QixDQUFDLEVBQUUsVUFBQSxLQUFLO1lBQ04sS0FBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7WUFDdkIsS0FBSSxDQUFDLG9CQUFvQixDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsS0FBSyxFQUFFLEtBQUssQ0FBQyxLQUFLLENBQUMsT0FBTyxFQUFFLEVBQUMsT0FBTyxFQUFFLElBQUksRUFBRSxlQUFlLEVBQUUsS0FBSyxFQUFDLENBQUMsQ0FBQTtRQUM1RyxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFRCxzREFBZSxHQUFmO1FBQUEsaUJBZ0NDO1FBL0JDLElBQUksQ0FBQyxNQUFNLENBQUMsaUJBQWlCLENBQUM7WUFDNUIsdUJBQVUsQ0FBQyxTQUFTLENBQUMsS0FBSSxDQUFDLFdBQVcsQ0FBQyxhQUFhLEVBQUUsT0FBTyxDQUFDO2lCQUM1RCxZQUFZLENBQUMsSUFBSSxDQUFDO2lCQUNsQixvQkFBb0IsRUFBRSxDQUFDLHdGQUF3RjtpQkFDL0csU0FBUyxDQUFDLFVBQUEsS0FBSztnQkFDZCxLQUFJLENBQUMsZUFBZSxDQUFDLG1CQUFtQixDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsY0FBYztxQkFDMUUsU0FBUyxDQUFDLFVBQUEsUUFBUTtvQkFDakIsS0FBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7b0JBQ3pCLEtBQUksQ0FBQyxLQUFLLENBQUMsYUFBYSxFQUFFLENBQUM7Z0JBQzdCLENBQUMsRUFBRSxVQUFBLEtBQUs7b0JBQ04sS0FBSSxDQUFDLG9CQUFvQixDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsS0FBSyxFQUFFLEtBQUssQ0FBQyxLQUFLLENBQUMsT0FBTyxFQUFFLEVBQUMsT0FBTyxFQUFFLElBQUksRUFBRSxlQUFlLEVBQUUsS0FBSyxFQUFDLENBQUMsQ0FBQTtnQkFDNUcsQ0FBQyxDQUFDLENBQUM7WUFDTCxDQUFDLENBQUMsQ0FBQztRQUNMLENBQUMsQ0FBQyxDQUFDO1FBRUgsSUFBSSxDQUFDLE1BQU0sQ0FBQyxpQkFBaUIsQ0FBQztZQUM1Qix1QkFBVSxDQUFDLFNBQVMsQ0FBQyxLQUFJLENBQUMsZUFBZSxDQUFDLGFBQWEsRUFBRSxPQUFPLENBQUM7aUJBQ2hFLFlBQVksQ0FBQyxJQUFJLENBQUM7aUJBQ2xCLG9CQUFvQixFQUFFLENBQUMsa0dBQWtHO2lCQUN6SCxTQUFTLENBQUMsVUFBQSxLQUFLO2dCQUNkLEtBQUksQ0FBQyxlQUFlLENBQUMsbUJBQW1CLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxjQUFjO3FCQUMxRSxTQUFTLENBQUMsVUFBQSxRQUFRO29CQUNqQixJQUFJLGtCQUFrQixHQUFHLFFBQVEsQ0FBQztvQkFDbEMsSUFBSSxnQkFBZ0IsR0FBRyxrQkFBa0IsQ0FBQyxNQUFNLENBQUMsVUFBQyxJQUFTLElBQUssT0FBQSxJQUFJLENBQUMsTUFBTSxJQUFJLEtBQUksQ0FBQyxNQUFNLEVBQTFCLENBQTBCLENBQUMsQ0FBQztvQkFDNUYsS0FBSSxDQUFDLFFBQVEsR0FBRyxnQkFBZ0IsQ0FBQztvQkFDakMsS0FBSSxDQUFDLEtBQUssQ0FBQyxhQUFhLEVBQUUsQ0FBQztnQkFDN0IsQ0FBQyxFQUFFLFVBQUEsS0FBSztvQkFDTixLQUFJLENBQUMsb0JBQW9CLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxLQUFLLEVBQUUsS0FBSyxDQUFDLEtBQUssQ0FBQyxPQUFPLEVBQUUsRUFBQyxPQUFPLEVBQUUsSUFBSSxFQUFFLGVBQWUsRUFBRSxLQUFLLEVBQUMsQ0FBQyxDQUFBO2dCQUM1RyxDQUFDLENBQUMsQ0FBQztZQUNMLENBQUMsQ0FBQyxDQUFDO1FBQ0wsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQscURBQWMsR0FBZDtRQUFBLGlCQWtCQztRQWpCQyxJQUFJLENBQUMsY0FBYyxHQUFHLElBQUksQ0FBQztRQUMzQixJQUFJLENBQUMsZUFBZSxHQUFHLEtBQUssQ0FBQztRQUM3QixFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxJQUFJLFNBQVMsQ0FBQyxDQUFDLENBQUM7UUFFL0IsQ0FBQztRQUFDLElBQUksQ0FBQyxDQUFDO1lBQ1IsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUM7WUFDdEIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxhQUFhLENBQUMsS0FBSyxHQUFHLEVBQUUsQ0FBQztZQUMxQyxJQUFJLENBQUMsZUFBZSxDQUFDLG1CQUFtQixDQUFDLEVBQUUsQ0FBQyxDQUFDLFlBQVk7aUJBQ3BELFNBQVMsQ0FBQyxVQUFBLFFBQVE7Z0JBQ2pCLEtBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO2dCQUN6QixLQUFJLENBQUMsS0FBSyxDQUFDLGFBQWEsRUFBRSxDQUFDO2dCQUMzQixLQUFJLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQztZQUN6QixDQUFDLEVBQUUsVUFBQSxLQUFLO2dCQUNOLEtBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDO2dCQUN2QixLQUFJLENBQUMsb0JBQW9CLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxLQUFLLEVBQUUsS0FBSyxDQUFDLEtBQUssQ0FBQyxPQUFPLEVBQUUsRUFBQyxPQUFPLEVBQUUsSUFBSSxFQUFFLGVBQWUsRUFBRSxLQUFLLEVBQUMsQ0FBQyxDQUFBO1lBQzVHLENBQUMsQ0FBQyxDQUFDO1FBQ1AsQ0FBQztJQUNILENBQUM7SUFFRCxzREFBZSxHQUFmO1FBQUEsaUJBb0JDO1FBbkJDLElBQUksQ0FBQyxjQUFjLEdBQUcsS0FBSyxDQUFDO1FBQzVCLElBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDO1FBQzVCLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLElBQUksV0FBVyxDQUFDLENBQUMsQ0FBQztRQUVqQyxDQUFDO1FBQUMsSUFBSSxDQUFDLENBQUM7WUFDUixJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQztZQUN0QixJQUFJLENBQUMsV0FBVyxDQUFDLGFBQWEsQ0FBQyxLQUFLLEdBQUcsRUFBRSxDQUFDO1lBQzFDLElBQUksQ0FBQyxlQUFlLENBQUMsbUJBQW1CLENBQUMsRUFBRSxDQUFDLENBQUMsWUFBWTtpQkFDcEQsU0FBUyxDQUFDLFVBQUEsUUFBUTtnQkFDakIsSUFBSSxrQkFBa0IsR0FBRyxRQUFRLENBQUM7Z0JBQ2xDLElBQUksZ0JBQWdCLEdBQUcsa0JBQWtCLENBQUMsTUFBTSxDQUFDLFVBQUMsSUFBUyxJQUFLLE9BQUEsSUFBSSxDQUFDLE1BQU0sSUFBSSxLQUFJLENBQUMsTUFBTSxFQUExQixDQUEwQixDQUFDLENBQUM7Z0JBQzVGLEtBQUksQ0FBQyxRQUFRLEdBQUcsZ0JBQWdCLENBQUM7Z0JBQ2pDLEtBQUksQ0FBQyxLQUFLLENBQUMsYUFBYSxFQUFFLENBQUM7Z0JBQzNCLEtBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDO1lBQ3pCLENBQUMsRUFBRSxVQUFBLEtBQUs7Z0JBQ04sS0FBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7Z0JBQ3ZCLEtBQUksQ0FBQyxvQkFBb0IsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLEtBQUssRUFBRSxLQUFLLENBQUMsS0FBSyxDQUFDLE9BQU8sRUFBRSxFQUFDLE9BQU8sRUFBRSxJQUFJLEVBQUUsZUFBZSxFQUFFLEtBQUssRUFBQyxDQUFDLENBQUE7WUFDNUcsQ0FBQyxDQUFDLENBQUM7UUFDUCxDQUFDO0lBQ0gsQ0FBQztJQUVELHlEQUFrQixHQUFsQixVQUFtQixNQUFjO1FBQy9CLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsUUFBUSxFQUFFLFdBQVcsRUFBRSxNQUFNLENBQUMsQ0FBQyxDQUFDO0lBQ3hELENBQUM7SUFFRCxvREFBYSxHQUFiLFVBQWMsTUFBYztRQUMxQixNQUFNLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsSUFBSSxNQUFNLENBQUM7SUFDcEQsQ0FBQztJQUVELHlEQUFrQixHQUFsQjtRQUNFLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztJQUNuQyxDQUFDO0lBbkhEO1FBQUMsZ0JBQVMsQ0FBQyxRQUFRLENBQUM7O3FFQUFBO0lBQ3BCO1FBQUMsZ0JBQVMsQ0FBQyxjQUFjLENBQUM7O3lFQUFBO0lBZjVCO1FBQUMsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixRQUFRLEVBQUUsZ0JBQWdCO1lBQzFCLFdBQVcsRUFBRSxzQ0FBc0M7WUFDbkQsU0FBUyxFQUFFLENBQUMscUNBQXFDLENBQUM7U0FDbkQsQ0FBQzs7b0NBQUE7SUE4SEYsbUNBQUM7QUFBRCxDQTdIQSxBQTZIQyxJQUFBO0FBN0hZLG9DQUE0QiwrQkE2SHhDLENBQUEiLCJmaWxlIjoiY29tcG9uZW50cy9hZG1pbi9hZG1pbi1tYW5hZ2UtY29udGVzdHMuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIFZpZXdDaGlsZCwgRWxlbWVudFJlZiwgTmdab25lLCBDaGFuZ2VEZXRlY3RvclJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5pbXBvcnQgeyBDb250ZXN0IH0gZnJvbSAnLi4vLi4vbW9kZWxzL2NvbnRlc3QnO1xyXG5pbXBvcnQgeyBDb250ZXN0c1NlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9jb250ZXN0cy5zZXJ2aWNlJztcclxuaW1wb3J0IHsgQXBpU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL2FwaS5zZXJ2aWNlJztcclxuaW1wb3J0IHsgRXJyb3JTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vZXJyb3JzL2luZGV4JztcclxuaW1wb3J0IHsgTm90aWZpY2F0aW9uc1NlcnZpY2UgfSBmcm9tICdhbmd1bGFyMi1ub3RpZmljYXRpb25zJztcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMvT2JzZXJ2YWJsZSc7XHJcbmltcG9ydCAncnhqcy9SeCc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBtb2R1bGVJZDogbW9kdWxlLmlkLFxyXG4gIHNlbGVjdG9yOiAnYWRtaW4tY29udGVzdHMnLFxyXG4gIHRlbXBsYXRlVXJsOiAnYWRtaW4tbWFuYWdlLWNvbnRlc3RzLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnYWRtaW4tbWFuYWdlLWNvbnRlc3RzLmNvbXBvbmVudC5jc3MnXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgQWRtaW5NYW5hZ2VDb250ZXN0c0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgY29udGVzdHM6IGFueSA9IFtdO1xyXG4gIGlzTG9hZGluZyA9IGZhbHNlO1xyXG4gIHN0YXR1cyA9IFwiTmVwYXR2aXJ0aW50YXNcIjtcclxuICBmaXJzdFRhYkFjdGl2ZSA9IHRydWU7XHJcbiAgc2Vjb25kVGFiQWN0aXZlID0gZmFsc2U7XHJcbiAgYWxsVW5jb25maXJtZWRDb250ZXN0cyA9IFtdO1xyXG4gIGFsbENvbnRlc3RzID0gW107XHJcbiAgQFZpZXdDaGlsZCgnc2VhcmNoJykgc2VhcmNoRWxSZWY6IEVsZW1lbnRSZWY7XHJcbiAgQFZpZXdDaGlsZCgnc2VhcmNoZmlsdGVyJykgc2VhcmNoRmlsdGVyUmVmOiBFbGVtZW50UmVmO1xyXG4gIHB1YmxpYyBvcHRpb25zID0ge1xyXG4gICAgICBwb3NpdGlvbjogW1widG9wXCIsXCJyaWdodFwiXVxyXG4gICAgfTtcclxuICBcclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGNvbnRlc3RzU2VydmljZTogQ29udGVzdHNTZXJ2aWNlLCBcclxuICAgICAgICAgICAgICBwcml2YXRlIGVycm9yU2VydmljZTogRXJyb3JTZXJ2aWNlLFxyXG4gICAgICAgICAgICAgIHByaXZhdGUgYXBpU2VydmljZTogQXBpU2VydmljZSxcclxuICAgICAgICAgICAgICBwcml2YXRlIG5vdGlmaWNhdGlvbnNTZXJ2aWNlOiBOb3RpZmljYXRpb25zU2VydmljZSxcclxuICAgICAgICAgICAgICBwcml2YXRlIG5nem9uZTogTmdab25lLFxyXG4gICAgICAgICAgICAgIHByaXZhdGUgY2RSZWY6IENoYW5nZURldGVjdG9yUmVmLFxyXG4gICAgICAgICAgICAgIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIpIHsgfVxyXG5cclxuICBuZ09uSW5pdCgpIHsgXHJcbiAgICB0aGlzLmlzTG9hZGluZyA9IHRydWU7XHJcbiAgICB0aGlzLmNvbnRlc3RzU2VydmljZS5nZXRBbGxDb250ZXN0cygpXHJcbiAgICAuc3Vic2NyaWJlKGNvbnRlc3RzID0+IHtcclxuICAgICAgdGhpcy5hbGxDb250ZXN0cyA9IGNvbnRlc3RzO1xyXG4gICAgICB0aGlzLmNvbnRlc3RzID0gY29udGVzdHM7XHJcbiAgICAgIHZhciB1bmNvbmZpcm1lZENvbnRldHMgPSBjb250ZXN0cy5maWx0ZXIoKGl0ZW06IGFueSkgPT4gaXRlbS5zdGF0dXMgPT0gdGhpcy5zdGF0dXMpO1xyXG4gICAgICB0aGlzLmFsbFVuY29uZmlybWVkQ29udGVzdHMgPSB1bmNvbmZpcm1lZENvbnRldHM7XHJcbiAgICAgIHRoaXMuaXNMb2FkaW5nID0gZmFsc2U7XHJcbiAgICB9LCBlcnJvciA9PiB7XHJcbiAgICAgIHRoaXMuaXNMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgIHRoaXMubm90aWZpY2F0aW9uc1NlcnZpY2UuZXJyb3IoZXJyb3IudGl0bGUsIGVycm9yLmVycm9yLm1lc3NhZ2UsIHt0aW1lT3V0OiAzMDAwLCBzaG93UHJvZ3Jlc3NCYXI6IGZhbHNlfSlcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgbmdBZnRlclZpZXdJbml0KCkge1xyXG4gICAgdGhpcy5uZ3pvbmUucnVuT3V0c2lkZUFuZ3VsYXIoKCkgPT4ge1xyXG4gICAgICBPYnNlcnZhYmxlLmZyb21FdmVudCh0aGlzLnNlYXJjaEVsUmVmLm5hdGl2ZUVsZW1lbnQsICdrZXl1cCcpXHJcbiAgICAgIC5kZWJvdW5jZVRpbWUoMTAwMClcclxuICAgICAgLmRpc3RpbmN0VW50aWxDaGFuZ2VkKCkgLy8gVE9ETyBVcGRhdGU6IG5vdCB3b3JraW5nLiBOZWVkcyBhIGN1c3RvbSBjYWxsYmFjayB0byBjaGVjayBmb3Igd2hpdGVzcGFjZSBkaWZmZXJlbmNlc1xyXG4gICAgICAuc3Vic2NyaWJlKGV2ZW50ID0+IHtcclxuICAgICAgICB0aGlzLmNvbnRlc3RzU2VydmljZS5nZXRGaWx0ZXJlZENvbnRlc3RzKGV2ZW50LnRhcmdldC52YWx1ZSkgLy9zZWFyY2hTdHJpbmdcclxuICAgICAgICAuc3Vic2NyaWJlKGNvbnRlc3RzID0+IHtcclxuICAgICAgICAgIHRoaXMuY29udGVzdHMgPSBjb250ZXN0cztcclxuICAgICAgICAgIHRoaXMuY2RSZWYuZGV0ZWN0Q2hhbmdlcygpO1xyXG4gICAgICAgIH0sIGVycm9yID0+IHtcclxuICAgICAgICAgIHRoaXMubm90aWZpY2F0aW9uc1NlcnZpY2UuZXJyb3IoZXJyb3IudGl0bGUsIGVycm9yLmVycm9yLm1lc3NhZ2UsIHt0aW1lT3V0OiAzMDAwLCBzaG93UHJvZ3Jlc3NCYXI6IGZhbHNlfSlcclxuICAgICAgICB9KTtcclxuICAgICAgfSk7XHJcbiAgICB9KTtcclxuXHJcbiAgICB0aGlzLm5nem9uZS5ydW5PdXRzaWRlQW5ndWxhcigoKSA9PiB7XHJcbiAgICAgIE9ic2VydmFibGUuZnJvbUV2ZW50KHRoaXMuc2VhcmNoRmlsdGVyUmVmLm5hdGl2ZUVsZW1lbnQsICdrZXl1cCcpXHJcbiAgICAgIC5kZWJvdW5jZVRpbWUoMTAwMClcclxuICAgICAgLmRpc3RpbmN0VW50aWxDaGFuZ2VkKCkgLy8gVE9ETyBmaXggdGhpcy4gVXBkYXRlOiBub3Qgd29ya2luZywgTmVlZHMgYSBjdXN0b20gY2FsbGJhY2sgdG8gY2hlY2sgZm9yIHdoaXRlc3BhY2UgZGlmZmVyZW5jZXNcclxuICAgICAgLnN1YnNjcmliZShldmVudCA9PiB7XHJcbiAgICAgICAgdGhpcy5jb250ZXN0c1NlcnZpY2UuZ2V0RmlsdGVyZWRDb250ZXN0cyhldmVudC50YXJnZXQudmFsdWUpIC8vc2VhcmNoU3RyaW5nXHJcbiAgICAgICAgLnN1YnNjcmliZShjb250ZXN0cyA9PiB7XHJcbiAgICAgICAgICB2YXIgdW5maWx0ZXJlZENvbnRlc3RzID0gY29udGVzdHM7XHJcbiAgICAgICAgICB2YXIgZmlsdGVyZWRDb250ZXN0cyA9IHVuZmlsdGVyZWRDb250ZXN0cy5maWx0ZXIoKGl0ZW06IGFueSkgPT4gaXRlbS5zdGF0dXMgPT0gdGhpcy5zdGF0dXMpO1xyXG4gICAgICAgICAgdGhpcy5jb250ZXN0cyA9IGZpbHRlcmVkQ29udGVzdHM7XHJcbiAgICAgICAgICB0aGlzLmNkUmVmLmRldGVjdENoYW5nZXMoKTtcclxuICAgICAgICB9LCBlcnJvciA9PiB7XHJcbiAgICAgICAgICB0aGlzLm5vdGlmaWNhdGlvbnNTZXJ2aWNlLmVycm9yKGVycm9yLnRpdGxlLCBlcnJvci5lcnJvci5tZXNzYWdlLCB7dGltZU91dDogMzAwMCwgc2hvd1Byb2dyZXNzQmFyOiBmYWxzZX0pXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBzZWxlY3RGaXJzdFRhYigpIHtcclxuICAgIHRoaXMuZmlyc3RUYWJBY3RpdmUgPSB0cnVlO1xyXG4gICAgdGhpcy5zZWNvbmRUYWJBY3RpdmUgPSBmYWxzZTtcclxuICAgIGlmICh0aGlzLnN0YXR1cyA9PSBcIkFrdHl2dXNcIikge1xyXG4gICAgICAvL2RvIG5vdGhpbmdcclxuICAgIH0gZWxzZSB7XHJcbiAgICB0aGlzLmlzTG9hZGluZyA9IHRydWU7XHJcbiAgICB0aGlzLnNlYXJjaEVsUmVmLm5hdGl2ZUVsZW1lbnQudmFsdWUgPSAnJztcclxuICAgIHRoaXMuY29udGVzdHNTZXJ2aWNlLmdldEZpbHRlcmVkQ29udGVzdHMoXCJcIikgLy8gPSBnZXQgYWxsXHJcbiAgICAgICAgLnN1YnNjcmliZShjb250ZXN0cyA9PiB7XHJcbiAgICAgICAgICB0aGlzLmNvbnRlc3RzID0gY29udGVzdHM7XHJcbiAgICAgICAgICB0aGlzLmNkUmVmLmRldGVjdENoYW5nZXMoKTtcclxuICAgICAgICAgIHRoaXMuaXNMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgfSwgZXJyb3IgPT4ge1xyXG4gICAgICAgICAgdGhpcy5pc0xvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgIHRoaXMubm90aWZpY2F0aW9uc1NlcnZpY2UuZXJyb3IoZXJyb3IudGl0bGUsIGVycm9yLmVycm9yLm1lc3NhZ2UsIHt0aW1lT3V0OiAzMDAwLCBzaG93UHJvZ3Jlc3NCYXI6IGZhbHNlfSlcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHNlbGVjdFNlY29uZFRhYigpIHtcclxuICAgIHRoaXMuZmlyc3RUYWJBY3RpdmUgPSBmYWxzZTtcclxuICAgIHRoaXMuc2Vjb25kVGFiQWN0aXZlID0gdHJ1ZTtcclxuICAgIGlmICh0aGlzLnN0YXR1cyA9PSBcIlXFvmJhaWd0YXNcIikge1xyXG4gICAgICAvL2RvIG5vdGhpbmdcclxuICAgIH0gZWxzZSB7XHJcbiAgICB0aGlzLmlzTG9hZGluZyA9IHRydWU7XHJcbiAgICB0aGlzLnNlYXJjaEVsUmVmLm5hdGl2ZUVsZW1lbnQudmFsdWUgPSAnJztcclxuICAgIHRoaXMuY29udGVzdHNTZXJ2aWNlLmdldEZpbHRlcmVkQ29udGVzdHMoXCJcIikgLy8gPSBnZXQgYWxsXHJcbiAgICAgICAgLnN1YnNjcmliZShjb250ZXN0cyA9PiB7XHJcbiAgICAgICAgICB2YXIgdW5maWx0ZXJlZENvbnRlc3RzID0gY29udGVzdHM7XHJcbiAgICAgICAgICB2YXIgZmlsdGVyZWRDb250ZXN0cyA9IHVuZmlsdGVyZWRDb250ZXN0cy5maWx0ZXIoKGl0ZW06IGFueSkgPT4gaXRlbS5zdGF0dXMgPT0gdGhpcy5zdGF0dXMpO1xyXG4gICAgICAgICAgdGhpcy5jb250ZXN0cyA9IGZpbHRlcmVkQ29udGVzdHM7XHJcbiAgICAgICAgICB0aGlzLmNkUmVmLmRldGVjdENoYW5nZXMoKTtcclxuICAgICAgICAgIHRoaXMuaXNMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgfSwgZXJyb3IgPT4ge1xyXG4gICAgICAgICAgdGhpcy5pc0xvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgIHRoaXMubm90aWZpY2F0aW9uc1NlcnZpY2UuZXJyb3IoZXJyb3IudGl0bGUsIGVycm9yLmVycm9yLm1lc3NhZ2UsIHt0aW1lT3V0OiAzMDAwLCBzaG93UHJvZ3Jlc3NCYXI6IGZhbHNlfSlcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGdvVG9Db250ZXN0RGV0YWlscyhpZE5hbWU6IHN0cmluZykge1xyXG4gICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoWycvYWRtaW4nLCAna29ua3Vyc2FpJywgaWROYW1lXSk7XHJcbiAgfVxyXG5cclxuICBiZWxvbmdzVG9Vc2VyKHVzZXJJZDogc3RyaW5nKSB7XHJcbiAgICByZXR1cm4gc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbSgndXNlcklkJykgPT0gdXNlcklkO1xyXG4gIH1cclxuXHJcbiAgZ29CYWNrVG9BZG1pblBhbmVsKCkge1xyXG4gICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoWycvYWRtaW4nXSk7XHJcbiAgfVxyXG5cclxufSJdfQ==
