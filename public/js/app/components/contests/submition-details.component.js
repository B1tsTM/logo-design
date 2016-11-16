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
        this.cssClass = '';
        this.submitions = [];
        this.animation = true;
        this.keyboard = true;
        this.backdrop = true;
        this.isLoading = false;
        this.options = {
            position: ["top", "right"]
        };
    }
    SubmitionDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.isLoading = true;
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
            }, function (error) {
                _this.isLoading = false;
                _this.notificationsService.error('Įvyko klaida', 'Nepavyko pakeisti reitingo', { timeOut: 3000, showProgressBar: false });
            });
        }
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], SubmitionDetailsComponent.prototype, "contestId", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], SubmitionDetailsComponent.prototype, "contest", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], SubmitionDetailsComponent.prototype, "submition", void 0);
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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvY29udGVzdHMvc3VibWl0aW9uLWRldGFpbHMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBd0MsZUFBZSxDQUFDLENBQUE7QUFDeEQsaUNBQWdDLGlDQUFpQyxDQUFDLENBQUE7QUFDbEUsc0JBQTZCLG9CQUFvQixDQUFDLENBQUE7QUFFbEQsNEJBQTJCLDRCQUE0QixDQUFDLENBQUE7QUFDeEQsdUJBQStDLGlCQUFpQixDQUFDLENBQUE7QUFDakUsdUNBQXFDLHdCQUF3QixDQUFDLENBQUE7QUFROUQ7SUFjRSxtQ0FBb0IsVUFBc0IsRUFDdEIsWUFBMEIsRUFDMUIsZUFBZ0MsRUFDaEMsS0FBcUIsRUFDckIsTUFBYyxFQUNkLG9CQUEwQztRQUwxQyxlQUFVLEdBQVYsVUFBVSxDQUFZO1FBQ3RCLGlCQUFZLEdBQVosWUFBWSxDQUFjO1FBQzFCLG9CQUFlLEdBQWYsZUFBZSxDQUFpQjtRQUNoQyxVQUFLLEdBQUwsS0FBSyxDQUFnQjtRQUNyQixXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQ2QseUJBQW9CLEdBQXBCLG9CQUFvQixDQUFzQjtRQWY1RCxhQUFRLEdBQVcsRUFBRSxDQUFDO1FBQ3RCLGVBQVUsR0FBVSxFQUFFLENBQUM7UUFDdkIsY0FBUyxHQUFZLElBQUksQ0FBQztRQUMxQixhQUFRLEdBQVksSUFBSSxDQUFDO1FBQ3pCLGFBQVEsR0FBcUIsSUFBSSxDQUFDO1FBQ2xDLGNBQVMsR0FBRyxLQUFLLENBQUM7UUFDWCxZQUFPLEdBQUc7WUFDZixRQUFRLEVBQUUsQ0FBQyxLQUFLLEVBQUMsT0FBTyxDQUFDO1NBQzFCLENBQUM7SUFPOEQsQ0FBQztJQUVuRSw0Q0FBUSxHQUFSO1FBQUEsaUJBK0JDO1FBOUJHLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDO1FBQ3hCLG9EQUFvRDtRQUNwRCxtQ0FBbUM7UUFDbkMsbURBQW1EO1FBQ25ELGlDQUFpQztRQUNqQyxNQUFNO1FB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LEVBQUUsSUFBSSxFQUFFLGVBQWUsRUFBRSxLQUFLLEVBQUMsQ0FBQyxDQUFBO1lBQzFILENBQUMsQ0FBQyxDQUFBO1FBQ1YsQ0FBQztJQUNMLENBQUM7SUF4RkQ7UUFBQyxZQUFLLEVBQUU7O2dFQUFBO0lBQ1I7UUFBQyxZQUFLLEVBQUU7OzhEQUFBO0lBQ1I7UUFBQyxZQUFLLEVBQUU7O2dFQUFBO0lBVFo7UUFBQyxnQkFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFFBQVEsRUFBRSxtQkFBbUI7WUFDN0IsV0FBVyxFQUFFLGtDQUFrQztZQUMvQyxTQUFTLEVBQUUsQ0FBQyxpQ0FBaUMsQ0FBQztTQUMvQyxDQUFDOztpQ0FBQTtJQTRGRixnQ0FBQztBQUFELENBM0ZBLEFBMkZDLElBQUE7QUEzRlksaUNBQXlCLDRCQTJGckMsQ0FBQSIsImZpbGUiOiJjb21wb25lbnRzL2NvbnRlc3RzL3N1Ym1pdGlvbi1kZXRhaWxzLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IENvbnRlc3RzU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL2NvbnRlc3RzLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBFcnJvclNlcnZpY2UgfSBmcm9tICcuLi8uLi9lcnJvcnMvaW5kZXgnO1xyXG5pbXBvcnQgeyBBdXRoU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL2F1dGguc2VydmljZSc7XHJcbmltcG9ydCB7IEFwaVNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9hcGkuc2VydmljZSc7XHJcbmltcG9ydCB7IEFjdGl2YXRlZFJvdXRlLCBSb3V0ZXIsIFBhcmFtcyB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcbmltcG9ydCB7IE5vdGlmaWNhdGlvbnNTZXJ2aWNlIH0gZnJvbSAnYW5ndWxhcjItbm90aWZpY2F0aW9ucyc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBtb2R1bGVJZDogbW9kdWxlLmlkLFxyXG4gIHNlbGVjdG9yOiAnc3VibWl0aW9uLWRldGFpbHMnLFxyXG4gIHRlbXBsYXRlVXJsOiAnc3VibWl0aW9uLWRldGFpbHMuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWydzdWJtaXRpb24tZGV0YWlscy5jb21wb25lbnQuY3NzJ11cclxufSlcclxuZXhwb3J0IGNsYXNzIFN1Ym1pdGlvbkRldGFpbHNDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gICAgQElucHV0KCkgY29udGVzdElkOiBzdHJpbmc7XHJcbiAgICBASW5wdXQoKSBjb250ZXN0OiBhbnk7XHJcbiAgICBASW5wdXQoKSBzdWJtaXRpb246IGFueTtcclxuICAgIGNzc0NsYXNzOiBzdHJpbmcgPSAnJztcclxuICAgIHN1Ym1pdGlvbnM6IGFueVtdID0gW107XHJcbiAgICBhbmltYXRpb246IGJvb2xlYW4gPSB0cnVlO1xyXG4gICAga2V5Ym9hcmQ6IGJvb2xlYW4gPSB0cnVlO1xyXG4gICAgYmFja2Ryb3A6IHN0cmluZyB8IGJvb2xlYW4gPSB0cnVlO1xyXG4gICAgaXNMb2FkaW5nID0gZmFsc2U7XHJcbiAgICBwdWJsaWMgb3B0aW9ucyA9IHtcclxuICAgICAgcG9zaXRpb246IFtcInRvcFwiLFwicmlnaHRcIl1cclxuICAgIH07XHJcbiAgICBcclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGFwaVNlcnZpY2U6IEFwaVNlcnZpY2UsIFxyXG4gICAgICAgICAgICAgIHByaXZhdGUgZXJyb3JTZXJ2aWNlOiBFcnJvclNlcnZpY2UsXHJcbiAgICAgICAgICAgICAgcHJpdmF0ZSBjb250ZXN0c1NlcnZpY2U6IENvbnRlc3RzU2VydmljZSwgXHJcbiAgICAgICAgICAgICAgcHJpdmF0ZSByb3V0ZTogQWN0aXZhdGVkUm91dGUsXHJcbiAgICAgICAgICAgICAgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlcixcclxuICAgICAgICAgICAgICBwcml2YXRlIG5vdGlmaWNhdGlvbnNTZXJ2aWNlOiBOb3RpZmljYXRpb25zU2VydmljZSkgeyB9XHJcblxyXG4gIG5nT25Jbml0KCkgeyBcclxuICAgICAgdGhpcy5pc0xvYWRpbmcgPSB0cnVlO1xyXG4gICAgLy8gdGhpcy5yb3V0ZS5wYXJhbXMuc3Vic2NyaWJlKChwYXJhbXM6IFBhcmFtcykgPT4ge1xyXG4gICAgLy8gICB0aGlzLmNvbnRlc3RJZCA9IHBhcmFtc1snaWQnXTtcclxuICAgIC8vICAgY29uc29sZS5sb2coJ25nT25Jbml0IHBhcmFtcyBpZCAoY29udGVzdElkKScpO1xyXG4gICAgLy8gICBjb25zb2xlLmxvZyh0aGlzLmNvbnRlc3RJZCk7XHJcbiAgICAvLyB9KTtcclxuICAgIHRoaXMuYXBpU2VydmljZS5nZXRDb250ZXN0U3VibWl0aW9ucyh0aGlzLmNvbnRlc3RJZCkgLy9DVVJSRU5UIEZPQ1VTXHJcbiAgICAgICAgLnN1YnNjcmliZShzdWJtaXRpb25zID0+IHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ3N1Ym1pdGlvbnMgZnJvbSBhcGlzZXJ2aWNlIGluIHN1Ym1pdGlvbi1kZXRhaWxzJyk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHN1Ym1pdGlvbnMpO1xyXG4gICAgICAgICAgICB0aGlzLnN1Ym1pdGlvbnMgPSBzdWJtaXRpb25zO1xyXG4gICAgICAgICAgICB0aGlzLmlzTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyh0aGlzLnN1Ym1pdGlvbnMpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZXJyb3IgPT4ge1xyXG4gICAgICAgICAgLy90aGlzLmVycm9yU2VydmljZS5oYW5kbGVFcnJvcihlcnJvcik7XHJcbiAgICAgICAgICB0aGlzLmlzTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgdGhpcy5ub3RpZmljYXRpb25zU2VydmljZS5lcnJvcignxK52eWtvIGtsYWlkYScsICdOZXBhdnlrbyBnYXV0aSBrb25rdXJzbyBkaXphaW7FsycsIHt0aW1lT3V0OiAzMDAwLCBzaG93UHJvZ3Jlc3NCYXI6IGZhbHNlfSlcclxuICAgICAgfSk7XHJcbiAgICAvLyAgIGNvbnNvbGUubG9nKCduZ09uSW5pdCBzdWJtaXRpb24gZGV0YWlscyB0aGlzLnN1Ym1pdGlvblMnKTtcclxuICAgIC8vICAgY29uc29sZS5sb2codGhpcy5zdWJtaXRpb25zKTtcclxuICAgIC8vICAgdGhpcy5zdWJtaXRpb24gPSB0aGlzLnN1Ym1pdGlvbnMuZmlsdGVyKChzdWIpID0+IHtcclxuICAgIC8vICAgICBjb25zb2xlLmxvZygnc3ViLnN1Ym1pdGlvblVybCcpO1xyXG4gICAgLy8gICAgIGNvbnNvbGUubG9nKHN1Yi5zdWJtaXRpb25VcmwpO1xyXG4gICAgLy8gICAgIGNvbnNvbGUubG9nKCd0aGlzLnN1Ym1pdGlvblVybCcpO1xyXG4gICAgLy8gICAgIGNvbnNvbGUubG9nKHRoaXMuc3VibWl0aW9uVXJsKTtcclxuICAgIC8vICAgICByZXR1cm4gc3ViLnN1Ym1pdGlvblVybCA9PSB0aGlzLnN1Ym1pdGlvblVybFxyXG4gICAgLy8gICB9KTtcclxuICAgIC8vICAgY29uc29sZS5sb2coJ25nT25Jbml0IHN1Ym1pdGlvbiBkZXRhaWxzIHRoaXMuc3VibWl0aW9uJyk7XHJcbiAgICAvLyAgIGNvbnNvbGUubG9nKHRoaXMuc3VibWl0aW9uKTtcclxuICB9XHJcblxyXG4gICAgY2xvc2VkKCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdNb2RhbCBjbG9zZWQnKTtcclxuICAgIH1cclxuXHJcbiAgICBkaXNtaXNzZWQoKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ01vZGFsIGRpc21pc3NlZCcpO1xyXG4gICAgfVxyXG5cclxuICAgIG9wZW5lZCgpIHtcclxuICAgICAgICBjb25zb2xlLmxvZygnTW9kYWwgb3BlbmVkJyk7XHJcbiAgICB9XHJcblxyXG4gICAgaXNDb250ZXN0UHVibGlzaGVyKGNvbnRlc3RBdXRob3JJZDogc3RyaW5nKSB7XHJcbiAgICAgICAgdmFyIHVzZXJJZCA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd1c2VySWQnKTtcclxuICAgICAgICByZXR1cm4gY29udGVzdEF1dGhvcklkID09IHVzZXJJZDtcclxuICAgIH1cclxuXHJcbiAgICBvblJhdGluZyhvYmo6IGFueSkge1xyXG4gICAgICAgIHRoaXMuaXNMb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgICB2YXIgc3VibWl0aW9uID0gdGhpcy5zdWJtaXRpb25zLmZpbHRlcigoaXRlbTogYW55KSA9PiBpdGVtLnN1Ym1pdGlvbklkID09IG9iai5zdWJtaXRpb25JZCk7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ29uUmF0aW5nKCkgc3VibWl0aW9uIGFmdGVyIGZpbHRlcicpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHN1Ym1pdGlvbik7XHJcbiAgICAgICAgaWYgKCEhc3VibWl0aW9uICYmIHN1Ym1pdGlvbi5sZW5ndGggPT0gMSkge1xyXG4gICAgICAgICAgICAvL3RoaXMuc3VibWl0aW9uc1swXS5zdWJtaXRpb25SYXRpbmcgPSBvYmoucmF0aW5nO1xyXG4gICAgICAgICAgICBzdWJtaXRpb25bMF0uc3VibWl0aW9uUmF0aW5nID0gb2JqLnJhdGluZztcclxuICAgICAgICAgICAgdGhpcy5jb250ZXN0c1NlcnZpY2UudXBkYXRlU3VibWl0aW9uUmF0aW5nKHRoaXMuY29udGVzdCwgc3VibWl0aW9uWzBdKVxyXG4gICAgICAgICAgICAgICAgLnN1YnNjcmliZShkYXRhID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnUmF0aW5nIGNoYW5nZWQnKTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhkYXRhKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmlzTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgfSwgZXJyb3IgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaXNMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5ub3RpZmljYXRpb25zU2VydmljZS5lcnJvcignxK52eWtvIGtsYWlkYScsICdOZXBhdnlrbyBwYWtlaXN0aSByZWl0aW5nbycsIHt0aW1lT3V0OiAzMDAwLCBzaG93UHJvZ3Jlc3NCYXI6IGZhbHNlfSlcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxufSJdfQ==
