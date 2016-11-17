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
var SubmitionDetailsComponent = (function () {
    function SubmitionDetailsComponent(apiService, errorService, contestsService, route, router, notificationsService) {
        this.apiService = apiService;
        this.errorService = errorService;
        this.contestsService = contestsService;
        this.route = route;
        this.router = router;
        this.notificationsService = notificationsService;
        this.submitions = [];
        this.confirmationVisible = false;
        this.isLoading = false;
        this.options = {
            position: ["top", "right"]
        };
    }
    SubmitionDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.isLoading = true;
        console.log(this.contestsService.submitionDetails);
        this.contestId = this.contestsService.submitionDetails.contestId;
        this.contest = this.contestsService.submitionDetails.contest;
        this.submition = this.contestsService.submitionDetails.submition;
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
            //this.errorService.handleError(error);
            _this.isLoading = false;
            _this.notificationsService.error('Įvyko klaida', 'Nepavyko gauti konkurso dizainų', { timeOut: 3000, showProgressBar: false });
        });
        //   console.log('ngOnInit submition details this.submitionS');
        //   console.log(this.submitions);
        //   this.submition = this.submitions.filter((sub) => {
        //     console.log('sub.submitionUrl');
        //     console.log(sub.submitionUrl);
        //     console.log('this.submitionUrl');
        //     console.log(this.submitionUrl);
        //     return sub.submitionUrl == this.submitionUrl
        //   });
        //   console.log('ngOnInit submition details this.submition');
        //   console.log(this.submition);
    };
    SubmitionDetailsComponent.prototype.closed = function () {
        console.log('Modal closed');
    };
    SubmitionDetailsComponent.prototype.dismissed = function () {
        console.log('Modal dismissed');
        this.confirmationVisible = false;
    };
    SubmitionDetailsComponent.prototype.opened = function () {
        console.log('Modal opened');
    };
    SubmitionDetailsComponent.prototype.isContestPublisher = function (contestAuthorId) {
        var userId = localStorage.getItem('userId');
        return contestAuthorId == userId;
    };
    SubmitionDetailsComponent.prototype.onRating = function (obj) {
        var _this = this;
        this.isLoading = true;
        var submition = this.submitions.filter(function (item) { return item.submitionId == obj.submitionId; });
        console.log('onRating() submition after filter');
        console.log(submition);
        if (!!submition && submition.length == 1) {
            //this.submitions[0].submitionRating = obj.rating;
            submition[0].submitionRating = obj.rating;
            this.contestsService.updateSubmitionRating(this.contest, submition[0])
                .subscribe(function (data) {
                console.log('Rating changed');
                console.log(data);
                _this.isLoading = false;
                _this.notificationsService.success('Pakeista', 'Dizaino reitingas pakeistas', { timeOut: 3000, showProgressBar: false });
            }, function (error) {
                _this.isLoading = false;
                _this.notificationsService.error('Įvyko klaida', 'Nepavyko pakeisti reitingo', { timeOut: 3000, showProgressBar: false });
            });
        }
    };
    SubmitionDetailsComponent.prototype.selectWinner = function (contestIdName, submitionId, contest) {
        var _this = this;
        this.isLoading = true;
        console.log('you win ' + contestIdName + ', ' + submitionId);
        this.apiService.selectWinner(contestIdName, submitionId)
            .subscribe(function (data) {
            console.log(data);
            _this.isLoading = false;
            _this.contestsService.contestWinner = { contestId: contestIdName, submitionId: submitionId, submition: _this.submition, contest: contest };
            window.scrollTo(0, 0);
            _this.router.navigate(['nugaletojas'], { relativeTo: _this.route });
        }, function (error) {
            _this.isLoading = false;
            _this.notificationsService.error('Įvyko klaida', 'Nepavyko išrinkti nugalėtojo', { timeOut: 3000, showProgressBar: false });
        });
    };
    SubmitionDetailsComponent.prototype.goBack = function () {
        window.scrollTo(0, 0);
        this.router.navigate(['./'], { relativeTo: this.route });
    };
    SubmitionDetailsComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'submition-details',
            templateUrl: 'submition-details.component.html',
            styleUrls: ['submition-details.component.css']
        }), 
        __metadata('design:paramtypes', [api_service_1.ApiService, index_1.ErrorService, contests_service_1.ContestsService, router_1.ActivatedRoute, router_1.Router, angular2_notifications_1.NotificationsService])
    ], SubmitionDetailsComponent);
    return SubmitionDetailsComponent;
}());
exports.SubmitionDetailsComponent = SubmitionDetailsComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvY29udGVzdHMvc3VibWl0aW9uLWRldGFpbHMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBd0MsZUFBZSxDQUFDLENBQUE7QUFDeEQsaUNBQWdDLGlDQUFpQyxDQUFDLENBQUE7QUFDbEUsc0JBQTZCLG9CQUFvQixDQUFDLENBQUE7QUFFbEQsNEJBQTJCLDRCQUE0QixDQUFDLENBQUE7QUFDeEQsdUJBQStDLGlCQUFpQixDQUFDLENBQUE7QUFDakUsdUNBQXFDLHdCQUF3QixDQUFDLENBQUE7QUFROUQ7SUFXRSxtQ0FBb0IsVUFBc0IsRUFDdEIsWUFBMEIsRUFDMUIsZUFBZ0MsRUFDaEMsS0FBcUIsRUFDckIsTUFBYyxFQUNkLG9CQUEwQztRQUwxQyxlQUFVLEdBQVYsVUFBVSxDQUFZO1FBQ3RCLGlCQUFZLEdBQVosWUFBWSxDQUFjO1FBQzFCLG9CQUFlLEdBQWYsZUFBZSxDQUFpQjtRQUNoQyxVQUFLLEdBQUwsS0FBSyxDQUFnQjtRQUNyQixXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQ2QseUJBQW9CLEdBQXBCLG9CQUFvQixDQUFzQjtRQVo1RCxlQUFVLEdBQVUsRUFBRSxDQUFDO1FBQ3ZCLHdCQUFtQixHQUFZLEtBQUssQ0FBQztRQUNyQyxjQUFTLEdBQUcsS0FBSyxDQUFDO1FBQ1gsWUFBTyxHQUFHO1lBQ2YsUUFBUSxFQUFFLENBQUMsS0FBSyxFQUFDLE9BQU8sQ0FBQztTQUMxQixDQUFDO0lBTzhELENBQUM7SUFFbkUsNENBQVEsR0FBUjtRQUFBLGlCQW1DQztRQWxDRyxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQztRQUN0QixPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztRQUNuRCxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxlQUFlLENBQUMsZ0JBQWdCLENBQUMsU0FBUyxDQUFDO1FBQ2pFLElBQUks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Q0FBQyxRQUFRLENBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ3JCLEtBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsYUFBYSxDQUFDLEVBQUUsRUFBQyxVQUFVLEVBQUUsS0FBSSxDQUFDLEtBQUssRUFBQyxDQUFDLENBQUM7UUFDcEUsQ0FBQyxFQUFFLFVBQUEsS0FBSztZQUNKLEtBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDO1lBQ3ZCLEtBQUksQ0FBQyxvQkFBb0IsQ0FBQyxLQUFLLENBQUMsY0FBYyxFQUFFLDhCQUE4QixFQUFFLEVBQUMsT0FBTyxFQUFFLElBQUksRUFBRSxlQUFlLEVBQUUsS0FBSyxFQUFDLENBQUMsQ0FBQTtRQUM1SCxDQUFDLENBQUMsQ0FBQztJQUNYLENBQUM7SUFFRCwwQ0FBTSxHQUFOO1FBQ0ksTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDLENBQUM7UUFDckIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxJQUFJLENBQUMsRUFBRSxFQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsS0FBSyxFQUFDLENBQUMsQ0FBQztJQUMzRCxDQUFDO0lBdkhMO1FBQUMsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixRQUFRLEVBQUUsbUJBQW1CO1lBQzdCLFdBQVcsRUFBRSxrQ0FBa0M7WUFDL0MsU0FBUyxFQUFFLENBQUMsaUNBQWlDLENBQUM7U0FDL0MsQ0FBQzs7aUNBQUE7SUFvSEYsZ0NBQUM7QUFBRCxDQW5IQSxBQW1IQyxJQUFBO0FBbkhZLGlDQUF5Qiw0QkFtSHJDLENBQUEiLCJmaWxlIjoiY29tcG9uZW50cy9jb250ZXN0cy9zdWJtaXRpb24tZGV0YWlscy5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDb250ZXN0c1NlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9jb250ZXN0cy5zZXJ2aWNlJztcclxuaW1wb3J0IHsgRXJyb3JTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vZXJyb3JzL2luZGV4JztcclxuaW1wb3J0IHsgQXV0aFNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9hdXRoLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBBcGlTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvYXBpLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBBY3RpdmF0ZWRSb3V0ZSwgUm91dGVyLCBQYXJhbXMgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5pbXBvcnQgeyBOb3RpZmljYXRpb25zU2VydmljZSB9IGZyb20gJ2FuZ3VsYXIyLW5vdGlmaWNhdGlvbnMnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcclxuICBzZWxlY3RvcjogJ3N1Ym1pdGlvbi1kZXRhaWxzJyxcclxuICB0ZW1wbGF0ZVVybDogJ3N1Ym1pdGlvbi1kZXRhaWxzLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnc3VibWl0aW9uLWRldGFpbHMuY29tcG9uZW50LmNzcyddXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBTdWJtaXRpb25EZXRhaWxzQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuICAgIGNvbnRlc3RJZDogc3RyaW5nO1xyXG4gICAgY29udGVzdDogYW55O1xyXG4gICAgc3VibWl0aW9uOiBhbnk7XHJcbiAgICBzdWJtaXRpb25zOiBhbnlbXSA9IFtdO1xyXG4gICAgY29uZmlybWF0aW9uVmlzaWJsZTogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgaXNMb2FkaW5nID0gZmFsc2U7XHJcbiAgICBwdWJsaWMgb3B0aW9ucyA9IHtcclxuICAgICAgcG9zaXRpb246IFtcInRvcFwiLFwicmlnaHRcIl1cclxuICAgIH07XHJcbiAgICBcclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGFwaVNlcnZpY2U6IEFwaVNlcnZpY2UsIFxyXG4gICAgICAgICAgICAgIHByaXZhdGUgZXJyb3JTZXJ2aWNlOiBFcnJvclNlcnZpY2UsXHJcbiAgICAgICAgICAgICAgcHJpdmF0ZSBjb250ZXN0c1NlcnZpY2U6IENvbnRlc3RzU2VydmljZSwgXHJcbiAgICAgICAgICAgICAgcHJpdmF0ZSByb3V0ZTogQWN0aXZhdGVkUm91dGUsXHJcbiAgICAgICAgICAgICAgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlcixcclxuICAgICAgICAgICAgICBwcml2YXRlIG5vdGlmaWNhdGlvbnNTZXJ2aWNlOiBOb3RpZmljYXRpb25zU2VydmljZSkgeyB9XHJcblxyXG4gIG5nT25Jbml0KCkgeyBcclxuICAgICAgdGhpcy5pc0xvYWRpbmcgPSB0cnVlO1xyXG4gICAgICBjb25zb2xlLmxvZyh0aGlzLmNvbnRlc3RzU2VydmljZS5zdWJtaXRpb25EZXRhaWxzKTtcclxuICAgICAgdGhpcy5jb250ZXN0SWQgPSB0aGlzLmNvbnRlc3RzU2VydmljZS5zdWJtaXRpb25EZXRhaWxzLmNvbnRlc3RJZDtcclxuICAgICAgdGhpcy5jb250ZXN0ID0gdGhpcy5jb250ZXN0c1NlcnZpY2Uuc3VibWl0aW9uRGV0YWlscy5jb250ZXN0O1xyXG4gICAgICB0aGlzLnN1Ym1pdGlvbiA9IHRoaXMuY29udGVzdHNTZXJ2aWNlLnN1Ym1pdGlvbkRldGFpbHMuc3VibWl0aW9uO1xyXG4gICAgLy8gdGhpcy5yb3V0ZS5wYXJhbXMuc3Vic2NyaWJlKChwYXJhbXM6IFBhcmFtcykgPT4ge1xyXG4gICAgLy8gICB0aGlzLmNvbnRlc3RJZCA9IHBhcmFtc1snaWQnXTtcclxuICAgIC8vICAgY29uc29sZS5sb2coJ25nT25Jbml0IHBhcmFtcyBpZCAoY29udGVzdElkKScpO1xyXG4gICAgLy8gICBjb25zb2xlLmxvZyh0aGlzLmNvbnRlc3RJZCk7XHJcbiAgICAvLyB9KTtcclxuICAgIHRoaXMuYXBpU2VydmljZS5nZXRDb250ZXN0U3VibWl0aW9ucyh0aGlzLmNvbnRlc3RJZCkgLy9DVVJSRU5UIEZPQ1VTXHJcbiAgICAgICAgLnN1YnNjcmliZShzdWJtaXRpb25zID0+IHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ3N1Ym1pdGlvbnMgZnJvbSBhcGlzZXJ2aWNlIGluIHN1Ym1pdGlvbi1kZXRhaWxzJyk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHN1Ym1pdGlvbnMpO1xyXG4gICAgICAgICAgICB0aGlzLnN1Ym1pdGlvbnMgPSBzdWJtaXRpb25zO1xyXG4gICAgICAgICAgICB0aGlzLmlzTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyh0aGlzLnN1Ym1pdGlvbnMpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZXJyb3IgPT4ge1xyXG4gICAgICAgICAgLy90aGlzLmVycm9yU2VydmljZS5oYW5kbGVFcnJvcihlcnJvcik7XHJcbiAgICAgICAgICB0aGlzLmlzTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgdGhpcy5ub3RpZmljYXRpb25zU2VydmljZS5lcnJvcignxK52eWtvIGtsYWlkYScsICdOZXBhdnlrbyBnYXV0aSBrb25rdXJzbyBkaXphaW7FsycsIHt0aW1lT3V0OiAzMDAwLCBzaG93UHJvZ3Jlc3NCYXI6IGZhbHNlfSlcclxuICAgICAgfSk7XHJcbiAgICAvLyAgIGNvbnNvbGUubG9nKCduZ09uSW5pdCBzdWJtaXRpb24gZGV0YWlscyB0aGlzLnN1Ym1pdGlvblMnKTtcclxuICAgIC8vICAgY29uc29sZS5sb2codGhpcy5zdWJtaXRpb25zKTtcclxuICAgIC8vICAgdGhpcy5zdWJtaXRpb24gPSB0aGlzLnN1Ym1pdGlvbnMuZmlsdGVyKChzdWIpID0+IHtcclxuICAgIC8vICAgICBjb25zb2xlLmxvZygnc3ViLnN1Ym1pdGlvblVybCcpO1xyXG4gICAgLy8gICAgIGNvbnNvbGUubG9nKHN1Yi5zdWJtaXRpb25VcmwpO1xyXG4gICAgLy8gICAgIGNvbnNvbGUubG9nKCd0aGlzLnN1Ym1pdGlvblVybCcpO1xyXG4gICAgLy8gICAgIGNvbnNvbGUubG9nKHRoaXMuc3VibWl0aW9uVXJsKTtcclxuICAgIC8vICAgICByZXR1cm4gc3ViLnN1Ym1pdGlvblVybCA9PSB0aGlzLnN1Ym1pdGlvblVybFxyXG4gICAgLy8gICB9KTtcclxuICAgIC8vICAgY29uc29sZS5sb2coJ25nT25Jbml0IHN1Ym1pdGlvbiBkZXRhaWxzIHRoaXMuc3VibWl0aW9uJyk7XHJcbiAgICAvLyAgIGNvbnNvbGUubG9nKHRoaXMuc3VibWl0aW9uKTtcclxuICB9XHJcblxyXG4gICAgY2xvc2VkKCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdNb2RhbCBjbG9zZWQnKTtcclxuICAgIH1cclxuXHJcbiAgICBkaXNtaXNzZWQoKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ01vZGFsIGRpc21pc3NlZCcpO1xyXG4gICAgICAgIHRoaXMuY29uZmlybWF0aW9uVmlzaWJsZSA9IGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIG9wZW5lZCgpIHtcclxuICAgICAgICBjb25zb2xlLmxvZygnTW9kYWwgb3BlbmVkJyk7XHJcbiAgICB9XHJcblxyXG4gICAgaXNDb250ZXN0UHVibGlzaGVyKGNvbnRlc3RBdXRob3JJZDogc3RyaW5nKSB7XHJcbiAgICAgICAgdmFyIHVzZXJJZCA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd1c2VySWQnKTtcclxuICAgICAgICByZXR1cm4gY29udGVzdEF1dGhvcklkID09IHVzZXJJZDtcclxuICAgIH1cclxuXHJcbiAgICBvblJhdGluZyhvYmo6IGFueSkge1xyXG4gICAgICAgIHRoaXMuaXNMb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgICB2YXIgc3VibWl0aW9uID0gdGhpcy5zdWJtaXRpb25zLmZpbHRlcigoaXRlbTogYW55KSA9PiBpdGVtLnN1Ym1pdGlvbklkID09IG9iai5zdWJtaXRpb25JZCk7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ29uUmF0aW5nKCkgc3VibWl0aW9uIGFmdGVyIGZpbHRlcicpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHN1Ym1pdGlvbik7XHJcbiAgICAgICAgaWYgKCEhc3VibWl0aW9uICYmIHN1Ym1pdGlvbi5sZW5ndGggPT0gMSkge1xyXG4gICAgICAgICAgICAvL3RoaXMuc3VibWl0aW9uc1swXS5zdWJtaXRpb25SYXRpbmcgPSBvYmoucmF0aW5nO1xyXG4gICAgICAgICAgICBzdWJtaXRpb25bMF0uc3VibWl0aW9uUmF0aW5nID0gb2JqLnJhdGluZztcclxuICAgICAgICAgICAgdGhpcy5jb250ZXN0c1NlcnZpY2UudXBkYXRlU3VibWl0aW9uUmF0aW5nKHRoaXMuY29udGVzdCwgc3VibWl0aW9uWzBdKVxyXG4gICAgICAgICAgICAgICAgLnN1YnNjcmliZShkYXRhID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnUmF0aW5nIGNoYW5nZWQnKTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhkYXRhKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmlzTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubm90aWZpY2F0aW9uc1NlcnZpY2Uuc3VjY2VzcygnUGFrZWlzdGEnLCAnRGl6YWlubyByZWl0aW5nYXMgcGFrZWlzdGFzJywge3RpbWVPdXQ6IDMwMDAsIHNob3dQcm9ncmVzc0JhcjogZmFsc2V9KVxyXG4gICAgICAgICAgICAgICAgfSwgZXJyb3IgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaXNMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5ub3RpZmljYXRpb25zU2VydmljZS5lcnJvcignxK52eWtvIGtsYWlkYScsICdOZXBhdnlrbyBwYWtlaXN0aSByZWl0aW5nbycsIHt0aW1lT3V0OiAzMDAwLCBzaG93UHJvZ3Jlc3NCYXI6IGZhbHNlfSlcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHNlbGVjdFdpbm5lcihjb250ZXN0SWROYW1lLCBzdWJtaXRpb25JZCwgY29udGVzdCkge1xyXG4gICAgICAgIHRoaXMuaXNMb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgICBjb25zb2xlLmxvZygneW91IHdpbiAnICsgY29udGVzdElkTmFtZSArJywgJysgc3VibWl0aW9uSWQpO1xyXG4gICAgICAgIHRoaXMuYXBpU2VydmljZS5zZWxlY3RXaW5uZXIoY29udGVzdElkTmFtZSwgc3VibWl0aW9uSWQpXHJcbiAgICAgICAgICAgIC5zdWJzY3JpYmUoZGF0YSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhkYXRhKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuaXNMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNvbnRlc3RzU2VydmljZS5jb250ZXN0V2lubmVyID0ge2NvbnRlc3RJZDogY29udGVzdElkTmFtZSwgc3VibWl0aW9uSWQ6IHN1Ym1pdGlvbklkLCBzdWJtaXRpb246IHRoaXMuc3VibWl0aW9uLCBjb250ZXN0OiBjb250ZXN0fTtcclxuICAgICAgICAgICAgICAgIHdpbmRvdy5zY3JvbGxUbygwLDApO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoWydudWdhbGV0b2phcyddLCB7cmVsYXRpdmVUbzogdGhpcy5yb3V0ZX0pO1xyXG4gICAgICAgICAgICB9LCBlcnJvciA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmlzTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5ub3RpZmljYXRpb25zU2VydmljZS5lcnJvcignxK52eWtvIGtsYWlkYScsICdOZXBhdnlrbyBpxaFyaW5rdGkgbnVnYWzEl3Rvam8nLCB7dGltZU91dDogMzAwMCwgc2hvd1Byb2dyZXNzQmFyOiBmYWxzZX0pXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGdvQmFjaygpIHtcclxuICAgICAgICB3aW5kb3cuc2Nyb2xsVG8oMCwwKTtcclxuICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJy4vJ10sIHtyZWxhdGl2ZVRvOiB0aGlzLnJvdXRlfSk7XHJcbiAgICB9XHJcblxyXG59Il19
