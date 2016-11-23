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
var api_service_1 = require('../../services/api.service');
var router_1 = require('@angular/router');
var angular2_notifications_1 = require('angular2-notifications');
var WinnerDetailsComponent = (function () {
    function WinnerDetailsComponent(apiService, errorService, contestsService, route, router, notificationsService) {
        this.apiService = apiService;
        this.errorService = errorService;
        this.contestsService = contestsService;
        this.route = route;
        this.router = router;
        this.notificationsService = notificationsService;
        this.isLoading = false;
        this.submitions = [];
        this.options = {
            position: ["top", "right"]
        };
    }
    WinnerDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.isLoading = true;
        console.log(this.contestsService.contestWinner);
        this.contestId = this.contestsService.contestWinner.contestId;
        this.contest = this.contestsService.contestWinner.contest;
        this.submition = this.contestsService.contestWinner.submition;
        this.submitionId = this.contestsService.contestWinner.submitionId;
        // this.route.params.subscribe((params: Params) => {
        //   this.contestId = params['id'];
        //   console.log('ngOnInit params id (contestId)');
        //   console.log(this.contestId);
        // });
        this.apiService.getContestSubmitions(this.contestId) //CURRENT FOCUS
            .subscribe(function (submitions) {
            console.log('submitions from apiservice in submition-details');
            console.log(submitions);
            _this.submitions = submitions;
            _this.isLoading = false;
            console.log(_this.submitions);
        }, function (error) {
            _this.isLoading = false;
            _this.notificationsService.error(error.title, error.error.message, { timeOut: 3000, showProgressBar: false });
        });
    }; // End of ngOnInit
    WinnerDetailsComponent.prototype.contactWinner = function (nickname) {
        var topic = "Konkurso '" + this.contest.name + "' atsiskaitymas";
        this.contestsService.mailTopic = topic;
        this.router.navigate(['/profilis', 'pastas', 'rasyti-laiska', nickname]);
    };
    WinnerDetailsComponent.prototype.goBack = function () {
        this.router.navigate(['/konkursai', this.contest.idName]);
    };
    WinnerDetailsComponent.prototype.isContestPublisher = function (contestAuthorId) {
        var userId = sessionStorage.getItem('userId');
        return contestAuthorId == userId;
    };
    WinnerDetailsComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'winner-details',
            templateUrl: 'winner-details.component.html',
            styleUrls: ['winner-details.component.css']
        }), 
        __metadata('design:paramtypes', [api_service_1.ApiService, index_1.ErrorService, contests_service_1.ContestsService, router_1.ActivatedRoute, router_1.Router, angular2_notifications_1.NotificationsService])
    ], WinnerDetailsComponent);
    return WinnerDetailsComponent;
}());
exports.WinnerDetailsComponent = WinnerDetailsComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvY29udGVzdHMvd2lubmVyLWRldGFpbHMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBa0MsZUFBZSxDQUFDLENBQUE7QUFDbEQsaUNBQWdDLGlDQUFpQyxDQUFDLENBQUE7QUFDbEUsc0JBQTZCLG9CQUFvQixDQUFDLENBQUE7QUFFbEQsNEJBQTJCLDRCQUE0QixDQUFDLENBQUE7QUFDeEQsdUJBQStDLGlCQUFpQixDQUFDLENBQUE7QUFDakUsdUNBQXFDLHdCQUF3QixDQUFDLENBQUE7QUFROUQ7SUFVRSxnQ0FBb0IsVUFBc0IsRUFDdEIsWUFBMEIsRUFDMUIsZUFBZ0MsRUFDaEMsS0FBcUIsRUFDckIsTUFBYyxFQUNkLG9CQUEwQztRQUwxQyxlQUFVLEdBQVYsVUFBVSxDQUFZO1FBQ3RCLGlCQUFZLEdBQVosWUFBWSxDQUFjO1FBQzFCLG9CQUFlLEdBQWYsZUFBZSxDQUFpQjtRQUNoQyxVQUFLLEdBQUwsS0FBSyxDQUFnQjtRQUNyQixXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQ2QseUJBQW9CLEdBQXBCLG9CQUFvQixDQUFzQjtRQWQ5RCxjQUFTLEdBQVksS0FBSyxDQUFDO1FBSzNCLGVBQVUsR0FBRyxFQUFFLENBQUM7UUFDUixZQUFPLEdBQUc7WUFDZCxRQUFRLEVBQUUsQ0FBQyxLQUFLLEVBQUMsT0FBTyxDQUFDO1NBQzFCLENBQUM7SUFNOEQsQ0FBQztJQUVuRSx5Q0FBUSxHQUFSO1FBQUEsaUJBd0JFO1FBdkJBLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDO1FBQ3BCLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxhQUFhLENBQUMsQ0FBQztRQUNoRCxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxlQUFlLENBQUMsYUFBYSxDQUFDLFNBQVMsQ0FBQztRQUM5RCxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxlQUFlLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQztRQUMxRCxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxlQUFlLENBQUMsYUFBYSxDQUFDLFNBQVMsQ0FBQztRQUM5RCxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxlQUFlLENBQUMsYUFBYSxDQUFDLFdBQVcsQ0FBQztRQUNwRSxvREFBb0Q7UUFDcEQsbUNBQW1DO1FBQ25DLG1EQUFtRDtRQUNuRCxpQ0FBaUM7UUFDakMsTUFBTTtRQUNOLElBQUksQ0FBQyxVQUFVLENBQUMsb0JBQW9CLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLGVBQWU7YUFDL0QsU0FBUyxDQUFDLFVBQUEsVUFBVTtZQUNqQixPQUFPLENBQUMsR0FBRyxDQUFDLGlEQUFpRCxDQUFDLENBQUM7WUFDL0QsT0FBTyxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsQ0FBQztZQUN4QixLQUFJLENBQUMsVUFBVSxHQUFHLFVBQVUsQ0FBQztZQUM3QixLQUFJLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQztZQUN2QixPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUNqQyxDQUFDLEVBQ0QsVUFBQSxLQUFLO1lBQ0gsS0FBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7WUFDdkIsS0FBSSxDQUFDLG9CQUFvQixDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsS0FBSyxFQUFFLEtBQUssQ0FBQyxLQUFLLENBQUMsT0FBTyxFQUFFLEVBQUMsT0FBTyxFQUFFLElBQUksRUFBRSxlQUFlLEVBQUUsS0FBSyxFQUFDLENBQUMsQ0FBQTtRQUM5RyxDQUFDLENBQUMsQ0FBQztJQUNOLENBQUMsRUFBQyxrQkFBa0I7SUFFcEIsOENBQWEsR0FBYixVQUFjLFFBQVE7UUFDcEIsSUFBTSxLQUFLLEdBQUcsWUFBWSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxHQUFHLGlCQUFpQixDQUFDO1FBQ25FLElBQUksQ0FBQyxlQUFlLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQztRQUN2QyxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLFdBQVcsRUFBQyxRQUFRLEVBQUMsZUFBZSxFQUFFLFFBQVEsQ0FBQyxDQUFDLENBQUM7SUFDekUsQ0FBQztJQUVELHVDQUFNLEdBQU47UUFDRSxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLFlBQVksRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7SUFDNUQsQ0FBQztJQUVELG1EQUFrQixHQUFsQixVQUFtQixlQUF1QjtRQUNyQyxJQUFJLE1BQU0sR0FBRyxjQUFjLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQzlDLE1BQU0sQ0FBQyxlQUFlLElBQUksTUFBTSxDQUFDO0lBQ3JDLENBQUM7SUE5REw7UUFBQyxnQkFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFFBQVEsRUFBRSxnQkFBZ0I7WUFDMUIsV0FBVyxFQUFFLCtCQUErQjtZQUM1QyxTQUFTLEVBQUUsQ0FBQyw4QkFBOEIsQ0FBQztTQUM1QyxDQUFDOzs4QkFBQTtJQTRERiw2QkFBQztBQUFELENBM0RBLEFBMkRDLElBQUE7QUEzRFksOEJBQXNCLHlCQTJEbEMsQ0FBQSIsImZpbGUiOiJjb21wb25lbnRzL2NvbnRlc3RzL3dpbm5lci1kZXRhaWxzLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IENvbnRlc3RzU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL2NvbnRlc3RzLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBFcnJvclNlcnZpY2UgfSBmcm9tICcuLi8uLi9lcnJvcnMvaW5kZXgnO1xyXG5pbXBvcnQgeyBBdXRoU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL2F1dGguc2VydmljZSc7XHJcbmltcG9ydCB7IEFwaVNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9hcGkuc2VydmljZSc7XHJcbmltcG9ydCB7IEFjdGl2YXRlZFJvdXRlLCBSb3V0ZXIsIFBhcmFtcyB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcbmltcG9ydCB7IE5vdGlmaWNhdGlvbnNTZXJ2aWNlIH0gZnJvbSAnYW5ndWxhcjItbm90aWZpY2F0aW9ucyc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBtb2R1bGVJZDogbW9kdWxlLmlkLFxyXG4gIHNlbGVjdG9yOiAnd2lubmVyLWRldGFpbHMnLFxyXG4gIHRlbXBsYXRlVXJsOiAnd2lubmVyLWRldGFpbHMuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWyd3aW5uZXItZGV0YWlscy5jb21wb25lbnQuY3NzJ11cclxufSlcclxuZXhwb3J0IGNsYXNzIFdpbm5lckRldGFpbHNDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gIGlzTG9hZGluZzogYm9vbGVhbiA9IGZhbHNlO1xyXG4gIGNvbnRlc3Q6IGFueTtcclxuICBjb250ZXN0SWQ6IGFueTtcclxuICBzdWJtaXRpb246IGFueTtcclxuICBzdWJtaXRpb25JZDogYW55O1xyXG4gIHN1Ym1pdGlvbnMgPSBbXTtcclxuICAgcHVibGljIG9wdGlvbnMgPSB7XHJcbiAgICAgIHBvc2l0aW9uOiBbXCJ0b3BcIixcInJpZ2h0XCJdXHJcbiAgICB9O1xyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgYXBpU2VydmljZTogQXBpU2VydmljZSwgXHJcbiAgICAgICAgICAgICAgcHJpdmF0ZSBlcnJvclNlcnZpY2U6IEVycm9yU2VydmljZSxcclxuICAgICAgICAgICAgICBwcml2YXRlIGNvbnRlc3RzU2VydmljZTogQ29udGVzdHNTZXJ2aWNlLCBcclxuICAgICAgICAgICAgICBwcml2YXRlIHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSxcclxuICAgICAgICAgICAgICBwcml2YXRlIHJvdXRlcjogUm91dGVyLFxyXG4gICAgICAgICAgICAgIHByaXZhdGUgbm90aWZpY2F0aW9uc1NlcnZpY2U6IE5vdGlmaWNhdGlvbnNTZXJ2aWNlKSB7IH1cclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgICB0aGlzLmlzTG9hZGluZyA9IHRydWU7XHJcbiAgICAgIGNvbnNvbGUubG9nKHRoaXMuY29udGVzdHNTZXJ2aWNlLmNvbnRlc3RXaW5uZXIpO1xyXG4gICAgICB0aGlzLmNvbnRlc3RJZCA9IHRoaXMuY29udGVzdHNTZXJ2aWNlLmNvbnRlc3RXaW5uZXIuY29udGVzdElkO1xyXG4gICAgICB0aGlzLmNvbnRlc3QgPSB0aGlzLmNvbnRlc3RzU2VydmljZS5jb250ZXN0V2lubmVyLmNvbnRlc3Q7XHJcbiAgICAgIHRoaXMuc3VibWl0aW9uID0gdGhpcy5jb250ZXN0c1NlcnZpY2UuY29udGVzdFdpbm5lci5zdWJtaXRpb247XHJcbiAgICAgIHRoaXMuc3VibWl0aW9uSWQgPSB0aGlzLmNvbnRlc3RzU2VydmljZS5jb250ZXN0V2lubmVyLnN1Ym1pdGlvbklkO1xyXG4gICAgLy8gdGhpcy5yb3V0ZS5wYXJhbXMuc3Vic2NyaWJlKChwYXJhbXM6IFBhcmFtcykgPT4ge1xyXG4gICAgLy8gICB0aGlzLmNvbnRlc3RJZCA9IHBhcmFtc1snaWQnXTtcclxuICAgIC8vICAgY29uc29sZS5sb2coJ25nT25Jbml0IHBhcmFtcyBpZCAoY29udGVzdElkKScpO1xyXG4gICAgLy8gICBjb25zb2xlLmxvZyh0aGlzLmNvbnRlc3RJZCk7XHJcbiAgICAvLyB9KTtcclxuICAgIHRoaXMuYXBpU2VydmljZS5nZXRDb250ZXN0U3VibWl0aW9ucyh0aGlzLmNvbnRlc3RJZCkgLy9DVVJSRU5UIEZPQ1VTXHJcbiAgICAgICAgLnN1YnNjcmliZShzdWJtaXRpb25zID0+IHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ3N1Ym1pdGlvbnMgZnJvbSBhcGlzZXJ2aWNlIGluIHN1Ym1pdGlvbi1kZXRhaWxzJyk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHN1Ym1pdGlvbnMpO1xyXG4gICAgICAgICAgICB0aGlzLnN1Ym1pdGlvbnMgPSBzdWJtaXRpb25zO1xyXG4gICAgICAgICAgICB0aGlzLmlzTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyh0aGlzLnN1Ym1pdGlvbnMpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZXJyb3IgPT4ge1xyXG4gICAgICAgICAgdGhpcy5pc0xvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgIHRoaXMubm90aWZpY2F0aW9uc1NlcnZpY2UuZXJyb3IoZXJyb3IudGl0bGUsIGVycm9yLmVycm9yLm1lc3NhZ2UsIHt0aW1lT3V0OiAzMDAwLCBzaG93UHJvZ3Jlc3NCYXI6IGZhbHNlfSlcclxuICAgICAgfSk7XHJcbiAgIH0gLy8gRW5kIG9mIG5nT25Jbml0XHJcblxyXG4gICBjb250YWN0V2lubmVyKG5pY2tuYW1lKSB7XHJcbiAgICAgY29uc3QgdG9waWMgPSBcIktvbmt1cnNvICdcIiArIHRoaXMuY29udGVzdC5uYW1lICsgXCInIGF0c2lza2FpdHltYXNcIjtcclxuICAgICB0aGlzLmNvbnRlc3RzU2VydmljZS5tYWlsVG9waWMgPSB0b3BpYztcclxuICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJy9wcm9maWxpcycsJ3Bhc3RhcycsJ3Jhc3l0aS1sYWlza2EnLCBuaWNrbmFtZV0pO1xyXG4gICB9XHJcblxyXG4gICBnb0JhY2soKSB7XHJcbiAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoWycva29ua3Vyc2FpJywgdGhpcy5jb250ZXN0LmlkTmFtZV0pO1xyXG4gICB9XHJcblxyXG4gICBpc0NvbnRlc3RQdWJsaXNoZXIoY29udGVzdEF1dGhvcklkOiBzdHJpbmcpIHtcclxuICAgICAgICB2YXIgdXNlcklkID0gc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbSgndXNlcklkJyk7XHJcbiAgICAgICAgcmV0dXJuIGNvbnRlc3RBdXRob3JJZCA9PSB1c2VySWQ7XHJcbiAgICB9XHJcblxyXG5cclxufSJdfQ==
