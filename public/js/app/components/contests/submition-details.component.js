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
            _this.notificationsService.error(error.title, error.error.message, { timeOut: 3000, showProgressBar: false });
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
                _this.notificationsService.error(error.title, error.error.message, { timeOut: 3000, showProgressBar: false });
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
            _this.notificationsService.error(error.title, error.error.message, { timeOut: 3000, showProgressBar: false });
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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvY29udGVzdHMvc3VibWl0aW9uLWRldGFpbHMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBd0MsZUFBZSxDQUFDLENBQUE7QUFDeEQsaUNBQWdDLGlDQUFpQyxDQUFDLENBQUE7QUFDbEUsc0JBQTZCLG9CQUFvQixDQUFDLENBQUE7QUFFbEQsNEJBQTJCLDRCQUE0QixDQUFDLENBQUE7QUFDeEQsdUJBQStDLGlCQUFpQixDQUFDLENBQUE7QUFDakUsdUNBQXFDLHdCQUF3QixDQUFDLENBQUE7QUFROUQ7SUFXRSxtQ0FBb0IsVUFBc0IsRUFDdEIsWUFBMEIsRUFDMUIsZUFBZ0MsRUFDaEMsS0FBcUIsRUFDckIsTUFBYyxFQUNkLG9CQUEwQztRQUwxQyxlQUFVLEdBQVYsVUFBVSxDQUFZO1FBQ3RCLGlCQUFZLEdBQVosWUFBWSxDQUFjO1FBQzFCLG9CQUFlLEdBQWYsZUFBZSxDQUFpQjtRQUNoQyxVQUFLLEdBQUwsS0FBSyxDQUFnQjtRQUNyQixXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQ2QseUJBQW9CLEdBQXBCLG9CQUFvQixDQUFzQjtRQVo1RCxlQUFVLEdBQVUsRUFBRSxDQUFDO1FBQ3ZCLHdCQUFtQixHQUFZLEtBQUssQ0FBQztRQUNyQyxjQUFTLEdBQUcsS0FBSyxDQUFDO1FBQ1gsWUFBTyxHQUFHO1lBQ2YsUUFBUSxFQUFFLENBQUMsS0FBSyxFQUFDLE9BQU8sQ0FBQztTQUMxQixDQUFDO0lBTzhELENBQUM7SUFFbkUsNENBQVEsR0FBUjtRQUFBLGlCQW1DQztRQWxDRyxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQztRQUN0QixPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztRQUNuRCxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxlQUFlLENBQUMsZ0JBQWdCLENBQUMsU0FBUyxDQUFDO1FBQ2pFLElBQUks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S0FBSSxDQUFDLFNBQVMsRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFDLENBQUM7WUFDdkksTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDLENBQUM7WUFDckIsS0FBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxhQUFhLENBQUMsRUFBRSxFQUFDLFVBQVUsRUFBRSxLQUFJLENBQUMsS0FBSyxFQUFDLENBQUMsQ0FBQztRQUNwRSxDQUFDLEVBQUUsVUFBQSxLQUFLO1lBQ0osS0FBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7WUFDdkIsS0FBSSxDQUFDLG9CQUFvQixDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsS0FBSyxFQUFFLEtBQUssQ0FBQyxLQUFLLENBQUMsT0FBTyxFQUFFLEVBQUMsT0FBTyxFQUFFLElBQUksRUFBRSxlQUFlLEVBQUUsS0FBSyxFQUFDLENBQUMsQ0FBQTtRQUM5RyxDQUFDLENBQUMsQ0FBQztJQUNYLENBQUM7SUFFRCwwQ0FBTSxHQUFOO1FBQ0ksTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDLENBQUM7UUFDckIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxJQUFJLENBQUMsRUFBRSxFQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsS0FBSyxFQUFDLENBQUMsQ0FBQztJQUMzRCxDQUFDO0lBdkhMO1FBQUMsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixRQUFRLEVBQUUsbUJBQW1CO1lBQzdCLFdBQVcsRUFBRSxrQ0FBa0M7WUFDL0MsU0FBUyxFQUFFLENBQUMsaUNBQWlDLENBQUM7U0FDL0MsQ0FBQzs7aUNBQUE7SUFvSEYsZ0NBQUM7QUFBRCxDQW5IQSxBQW1IQyxJQUFBO0FBbkhZLGlDQUF5Qiw0QkFtSHJDLENBQUEiLCJmaWxlIjoiY29tcG9uZW50cy9jb250ZXN0cy9zdWJtaXRpb24tZGV0YWlscy5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDb250ZXN0c1NlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9jb250ZXN0cy5zZXJ2aWNlJztcclxuaW1wb3J0IHsgRXJyb3JTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vZXJyb3JzL2luZGV4JztcclxuaW1wb3J0IHsgQXV0aFNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9hdXRoLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBBcGlTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvYXBpLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBBY3RpdmF0ZWRSb3V0ZSwgUm91dGVyLCBQYXJhbXMgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5pbXBvcnQgeyBOb3RpZmljYXRpb25zU2VydmljZSB9IGZyb20gJ2FuZ3VsYXIyLW5vdGlmaWNhdGlvbnMnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcclxuICBzZWxlY3RvcjogJ3N1Ym1pdGlvbi1kZXRhaWxzJyxcclxuICB0ZW1wbGF0ZVVybDogJ3N1Ym1pdGlvbi1kZXRhaWxzLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnc3VibWl0aW9uLWRldGFpbHMuY29tcG9uZW50LmNzcyddXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBTdWJtaXRpb25EZXRhaWxzQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuICAgIGNvbnRlc3RJZDogc3RyaW5nO1xyXG4gICAgY29udGVzdDogYW55O1xyXG4gICAgc3VibWl0aW9uOiBhbnk7XHJcbiAgICBzdWJtaXRpb25zOiBhbnlbXSA9IFtdO1xyXG4gICAgY29uZmlybWF0aW9uVmlzaWJsZTogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgaXNMb2FkaW5nID0gZmFsc2U7XHJcbiAgICBwdWJsaWMgb3B0aW9ucyA9IHtcclxuICAgICAgcG9zaXRpb246IFtcInRvcFwiLFwicmlnaHRcIl1cclxuICAgIH07XHJcbiAgICBcclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGFwaVNlcnZpY2U6IEFwaVNlcnZpY2UsIFxyXG4gICAgICAgICAgICAgIHByaXZhdGUgZXJyb3JTZXJ2aWNlOiBFcnJvclNlcnZpY2UsXHJcbiAgICAgICAgICAgICAgcHJpdmF0ZSBjb250ZXN0c1NlcnZpY2U6IENvbnRlc3RzU2VydmljZSwgXHJcbiAgICAgICAgICAgICAgcHJpdmF0ZSByb3V0ZTogQWN0aXZhdGVkUm91dGUsXHJcbiAgICAgICAgICAgICAgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlcixcclxuICAgICAgICAgICAgICBwcml2YXRlIG5vdGlmaWNhdGlvbnNTZXJ2aWNlOiBOb3RpZmljYXRpb25zU2VydmljZSkgeyB9XHJcblxyXG4gIG5nT25Jbml0KCkgeyBcclxuICAgICAgdGhpcy5pc0xvYWRpbmcgPSB0cnVlO1xyXG4gICAgICBjb25zb2xlLmxvZyh0aGlzLmNvbnRlc3RzU2VydmljZS5zdWJtaXRpb25EZXRhaWxzKTtcclxuICAgICAgdGhpcy5jb250ZXN0SWQgPSB0aGlzLmNvbnRlc3RzU2VydmljZS5zdWJtaXRpb25EZXRhaWxzLmNvbnRlc3RJZDtcclxuICAgICAgdGhpcy5jb250ZXN0ID0gdGhpcy5jb250ZXN0c1NlcnZpY2Uuc3VibWl0aW9uRGV0YWlscy5jb250ZXN0O1xyXG4gICAgICB0aGlzLnN1Ym1pdGlvbiA9IHRoaXMuY29udGVzdHNTZXJ2aWNlLnN1Ym1pdGlvbkRldGFpbHMuc3VibWl0aW9uO1xyXG4gICAgLy8gdGhpcy5yb3V0ZS5wYXJhbXMuc3Vic2NyaWJlKChwYXJhbXM6IFBhcmFtcykgPT4ge1xyXG4gICAgLy8gICB0aGlzLmNvbnRlc3RJZCA9IHBhcmFtc1snaWQnXTtcclxuICAgIC8vICAgY29uc29sZS5sb2coJ25nT25Jbml0IHBhcmFtcyBpZCAoY29udGVzdElkKScpO1xyXG4gICAgLy8gICBjb25zb2xlLmxvZyh0aGlzLmNvbnRlc3RJZCk7XHJcbiAgICAvLyB9KTtcclxuICAgIHRoaXMuYXBpU2VydmljZS5nZXRDb250ZXN0U3VibWl0aW9ucyh0aGlzLmNvbnRlc3RJZCkgLy9DVVJSRU5UIEZPQ1VTXHJcbiAgICAgICAgLnN1YnNjcmliZShzdWJtaXRpb25zID0+IHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ3N1Ym1pdGlvbnMgZnJvbSBhcGlzZXJ2aWNlIGluIHN1Ym1pdGlvbi1kZXRhaWxzJyk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHN1Ym1pdGlvbnMpO1xyXG4gICAgICAgICAgICB0aGlzLnN1Ym1pdGlvbnMgPSBzdWJtaXRpb25zO1xyXG4gICAgICAgICAgICB0aGlzLmlzTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyh0aGlzLnN1Ym1pdGlvbnMpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZXJyb3IgPT4ge1xyXG4gICAgICAgICAgLy90aGlzLmVycm9yU2VydmljZS5oYW5kbGVFcnJvcihlcnJvcik7XHJcbiAgICAgICAgICB0aGlzLmlzTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgdGhpcy5ub3RpZmljYXRpb25zU2VydmljZS5lcnJvcihlcnJvci50aXRsZSwgZXJyb3IuZXJyb3IubWVzc2FnZSwge3RpbWVPdXQ6IDMwMDAsIHNob3dQcm9ncmVzc0JhcjogZmFsc2V9KVxyXG4gICAgICB9KTtcclxuICAgIC8vICAgY29uc29sZS5sb2coJ25nT25Jbml0IHN1Ym1pdGlvbiBkZXRhaWxzIHRoaXMuc3VibWl0aW9uUycpO1xyXG4gICAgLy8gICBjb25zb2xlLmxvZyh0aGlzLnN1Ym1pdGlvbnMpO1xyXG4gICAgLy8gICB0aGlzLnN1Ym1pdGlvbiA9IHRoaXMuc3VibWl0aW9ucy5maWx0ZXIoKHN1YikgPT4ge1xyXG4gICAgLy8gICAgIGNvbnNvbGUubG9nKCdzdWIuc3VibWl0aW9uVXJsJyk7XHJcbiAgICAvLyAgICAgY29uc29sZS5sb2coc3ViLnN1Ym1pdGlvblVybCk7XHJcbiAgICAvLyAgICAgY29uc29sZS5sb2coJ3RoaXMuc3VibWl0aW9uVXJsJyk7XHJcbiAgICAvLyAgICAgY29uc29sZS5sb2codGhpcy5zdWJtaXRpb25VcmwpO1xyXG4gICAgLy8gICAgIHJldHVybiBzdWIuc3VibWl0aW9uVXJsID09IHRoaXMuc3VibWl0aW9uVXJsXHJcbiAgICAvLyAgIH0pO1xyXG4gICAgLy8gICBjb25zb2xlLmxvZygnbmdPbkluaXQgc3VibWl0aW9uIGRldGFpbHMgdGhpcy5zdWJtaXRpb24nKTtcclxuICAgIC8vICAgY29uc29sZS5sb2codGhpcy5zdWJtaXRpb24pO1xyXG4gIH1cclxuXHJcbiAgICBjbG9zZWQoKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ01vZGFsIGNsb3NlZCcpO1xyXG4gICAgfVxyXG5cclxuICAgIGRpc21pc3NlZCgpIHtcclxuICAgICAgICBjb25zb2xlLmxvZygnTW9kYWwgZGlzbWlzc2VkJyk7XHJcbiAgICAgICAgdGhpcy5jb25maXJtYXRpb25WaXNpYmxlID0gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgb3BlbmVkKCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdNb2RhbCBvcGVuZWQnKTtcclxuICAgIH1cclxuXHJcbiAgICBpc0NvbnRlc3RQdWJsaXNoZXIoY29udGVzdEF1dGhvcklkOiBzdHJpbmcpIHtcclxuICAgICAgICB2YXIgdXNlcklkID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3VzZXJJZCcpO1xyXG4gICAgICAgIHJldHVybiBjb250ZXN0QXV0aG9ySWQgPT0gdXNlcklkO1xyXG4gICAgfVxyXG5cclxuICAgIG9uUmF0aW5nKG9iajogYW55KSB7XHJcbiAgICAgICAgdGhpcy5pc0xvYWRpbmcgPSB0cnVlO1xyXG4gICAgICAgIHZhciBzdWJtaXRpb24gPSB0aGlzLnN1Ym1pdGlvbnMuZmlsdGVyKChpdGVtOiBhbnkpID0+IGl0ZW0uc3VibWl0aW9uSWQgPT0gb2JqLnN1Ym1pdGlvbklkKTtcclxuICAgICAgICBjb25zb2xlLmxvZygnb25SYXRpbmcoKSBzdWJtaXRpb24gYWZ0ZXIgZmlsdGVyJyk7XHJcbiAgICAgICAgY29uc29sZS5sb2coc3VibWl0aW9uKTtcclxuICAgICAgICBpZiAoISFzdWJtaXRpb24gJiYgc3VibWl0aW9uLmxlbmd0aCA9PSAxKSB7XHJcbiAgICAgICAgICAgIC8vdGhpcy5zdWJtaXRpb25zWzBdLnN1Ym1pdGlvblJhdGluZyA9IG9iai5yYXRpbmc7XHJcbiAgICAgICAgICAgIHN1Ym1pdGlvblswXS5zdWJtaXRpb25SYXRpbmcgPSBvYmoucmF0aW5nO1xyXG4gICAgICAgICAgICB0aGlzLmNvbnRlc3RzU2VydmljZS51cGRhdGVTdWJtaXRpb25SYXRpbmcodGhpcy5jb250ZXN0LCBzdWJtaXRpb25bMF0pXHJcbiAgICAgICAgICAgICAgICAuc3Vic2NyaWJlKGRhdGEgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdSYXRpbmcgY2hhbmdlZCcpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaXNMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5ub3RpZmljYXRpb25zU2VydmljZS5zdWNjZXNzKCdQYWtlaXN0YScsICdEaXphaW5vIHJlaXRpbmdhcyBwYWtlaXN0YXMnLCB7dGltZU91dDogMzAwMCwgc2hvd1Byb2dyZXNzQmFyOiBmYWxzZX0pXHJcbiAgICAgICAgICAgICAgICB9LCBlcnJvciA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5pc0xvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLm5vdGlmaWNhdGlvbnNTZXJ2aWNlLmVycm9yKGVycm9yLnRpdGxlLCBlcnJvci5lcnJvci5tZXNzYWdlLCB7dGltZU91dDogMzAwMCwgc2hvd1Byb2dyZXNzQmFyOiBmYWxzZX0pXHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBzZWxlY3RXaW5uZXIoY29udGVzdElkTmFtZSwgc3VibWl0aW9uSWQsIGNvbnRlc3QpIHtcclxuICAgICAgICB0aGlzLmlzTG9hZGluZyA9IHRydWU7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ3lvdSB3aW4gJyArIGNvbnRlc3RJZE5hbWUgKycsICcrIHN1Ym1pdGlvbklkKTtcclxuICAgICAgICB0aGlzLmFwaVNlcnZpY2Uuc2VsZWN0V2lubmVyKGNvbnRlc3RJZE5hbWUsIHN1Ym1pdGlvbklkKVxyXG4gICAgICAgICAgICAuc3Vic2NyaWJlKGRhdGEgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZGF0YSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmlzTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jb250ZXN0c1NlcnZpY2UuY29udGVzdFdpbm5lciA9IHtjb250ZXN0SWQ6IGNvbnRlc3RJZE5hbWUsIHN1Ym1pdGlvbklkOiBzdWJtaXRpb25JZCwgc3VibWl0aW9uOiB0aGlzLnN1Ym1pdGlvbiwgY29udGVzdDogY29udGVzdH07XHJcbiAgICAgICAgICAgICAgICB3aW5kb3cuc2Nyb2xsVG8oMCwwKTtcclxuICAgICAgICAgICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFsnbnVnYWxldG9qYXMnXSwge3JlbGF0aXZlVG86IHRoaXMucm91dGV9KTtcclxuICAgICAgICAgICAgfSwgZXJyb3IgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5pc0xvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIHRoaXMubm90aWZpY2F0aW9uc1NlcnZpY2UuZXJyb3IoZXJyb3IudGl0bGUsIGVycm9yLmVycm9yLm1lc3NhZ2UsIHt0aW1lT3V0OiAzMDAwLCBzaG93UHJvZ3Jlc3NCYXI6IGZhbHNlfSlcclxuICAgICAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgZ29CYWNrKCkge1xyXG4gICAgICAgIHdpbmRvdy5zY3JvbGxUbygwLDApO1xyXG4gICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFsnLi8nXSwge3JlbGF0aXZlVG86IHRoaXMucm91dGV9KTtcclxuICAgIH1cclxuXHJcbn0iXX0=
