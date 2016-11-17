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
            _this.notificationsService.error('Įvyko klaida', 'Nepavyko gauti konkurso dizainų', { timeOut: 3000, showProgressBar: false });
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
        var userId = localStorage.getItem('userId');
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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvY29udGVzdHMvd2lubmVyLWRldGFpbHMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBa0MsZUFBZSxDQUFDLENBQUE7QUFDbEQsaUNBQWdDLGlDQUFpQyxDQUFDLENBQUE7QUFDbEUsc0JBQTZCLG9CQUFvQixDQUFDLENBQUE7QUFFbEQsNEJBQTJCLDRCQUE0QixDQUFDLENBQUE7QUFDeEQsdUJBQStDLGlCQUFpQixDQUFDLENBQUE7QUFDakUsdUNBQXFDLHdCQUF3QixDQUFDLENBQUE7QUFROUQ7SUFVRSxnQ0FBb0IsVUFBc0IsRUFDdEIsWUFBMEIsRUFDMUIsZUFBZ0MsRUFDaEMsS0FBcUIsRUFDckIsTUFBYyxFQUNkLG9CQUEwQztRQUwxQyxlQUFVLEdBQVYsVUFBVSxDQUFZO1FBQ3RCLGlCQUFZLEdBQVosWUFBWSxDQUFjO1FBQzFCLG9CQUFlLEdBQWYsZUFBZSxDQUFpQjtRQUNoQyxVQUFLLEdBQUwsS0FBSyxDQUFnQjtRQUNyQixXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQ2QseUJBQW9CLEdBQXBCLG9CQUFvQixDQUFzQjtRQWQ5RCxjQUFTLEdBQVksS0FBSyxDQUFDO1FBSzNCLGVBQVUsR0FBRyxFQUFFLENBQUM7UUFDUixZQUFPLEdBQUc7WUFDZCxRQUFRLEVBQUUsQ0FBQyxLQUFLLEVBQUMsT0FBTyxDQUFDO1NBQzFCLENBQUM7SUFNOEQsQ0FBQztJQUVuRSx5Q0FBUSxHQUFSO1FBQUEsaUJBd0JFO1FBdkJBLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDO1FBQ3BCLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxhQUFhLENBQUMsQ0FBQztRQUNoRCxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxlQUFlLENBQUMsYUFBYSxDQUFDLFNBQVMsQ0FBQztRQUM5RCxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxlQUFlLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQztRQUMxRCxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxlQUFlLENBQUMsYUFBYSxDQUFDLFNBQVMsQ0FBQztRQUM5RCxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxlQUFlLENBQUMsYUFBYSxDQUFDLFdBQVcsQ0FBQztRQUNwRSxvREFBb0Q7UUFDcEQsbUNBQW1DO1FBQ25DLG1EQUFtRDtRQUNuRCxpQ0FBaUM7UUFDakMsTUFBTTtRQUNOLElBQUksQ0FBQyxVQUFVLENBQUMsb0JBQW9CLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLGVBQWU7YUFDL0QsU0FBUyxDQUFDLFVBQUEsVUFBVTtZQUNqQixPQUFPLENBQUMsR0FBRyxDQUFDLGlEQUFpRCxDQUFDLENBQUM7WUFDL0QsT0FBTyxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsQ0FBQztZQUN4QixLQUFJLENBQUMsVUFBVSxHQUFHLFVBQVUsQ0FBQztZQUM3QixLQUFJLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQztZQUN2QixPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUNqQyxDQUFDLEVBQ0QsVUFBQSxLQUFLO1lBQ0gsS0FBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7WUFDdkIsS0FBSSxDQUFDLG9CQUFvQixDQUFDLEtBQUssQ0FBQyxjQUFjLEVBQUUsaUNBQWlDLEVBQUUsRUFBQyxPQUFPLEVBQUUsSUFBSSxFQUFFLGVBQWUsRUFBRSxLQUFLLEVBQUMsQ0FBQyxDQUFBO1FBQy9ILENBQUMsQ0FBQyxDQUFDO0lBQ04sQ0FBQyxFQUFDLGtCQUFrQjtJQUVwQiw4Q0FBYSxHQUFiLFVBQWMsUUFBUTtRQUNwQixJQUFNLEtBQUssR0FBRyxZQUFZLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEdBQUcsaUJBQWlCLENBQUM7UUFDbkUsSUFBSSxDQUFDLGVBQWUsQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDO1FBQ3ZDLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsV0FBVyxFQUFDLFFBQVEsRUFBQyxlQUFlLEVBQUUsUUFBUSxDQUFDLENBQUMsQ0FBQztJQUN6RSxDQUFDO0lBRUQsdUNBQU0sR0FBTjtRQUNFLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsWUFBWSxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztJQUM1RCxDQUFDO0lBRUQsbURBQWtCLEdBQWxCLFVBQW1CLGVBQXVCO1FBQ3JDLElBQUksTUFBTSxHQUFHLFlBQVksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDNUMsTUFBTSxDQUFDLGVBQWUsSUFBSSxNQUFNLENBQUM7SUFDckMsQ0FBQztJQTlETDtRQUFDLGdCQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsUUFBUSxFQUFFLGdCQUFnQjtZQUMxQixXQUFXLEVBQUUsK0JBQStCO1lBQzVDLFNBQVMsRUFBRSxDQUFDLDhCQUE4QixDQUFDO1NBQzVDLENBQUM7OzhCQUFBO0lBNERGLDZCQUFDO0FBQUQsQ0EzREEsQUEyREMsSUFBQTtBQTNEWSw4QkFBc0IseUJBMkRsQyxDQUFBIiwiZmlsZSI6ImNvbXBvbmVudHMvY29udGVzdHMvd2lubmVyLWRldGFpbHMuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQ29udGVzdHNTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvY29udGVzdHMuc2VydmljZSc7XHJcbmltcG9ydCB7IEVycm9yU2VydmljZSB9IGZyb20gJy4uLy4uL2Vycm9ycy9pbmRleCc7XHJcbmltcG9ydCB7IEF1dGhTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvYXV0aC5zZXJ2aWNlJztcclxuaW1wb3J0IHsgQXBpU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL2FwaS5zZXJ2aWNlJztcclxuaW1wb3J0IHsgQWN0aXZhdGVkUm91dGUsIFJvdXRlciwgUGFyYW1zIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuaW1wb3J0IHsgTm90aWZpY2F0aW9uc1NlcnZpY2UgfSBmcm9tICdhbmd1bGFyMi1ub3RpZmljYXRpb25zJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIG1vZHVsZUlkOiBtb2R1bGUuaWQsXHJcbiAgc2VsZWN0b3I6ICd3aW5uZXItZGV0YWlscycsXHJcbiAgdGVtcGxhdGVVcmw6ICd3aW5uZXItZGV0YWlscy5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJ3dpbm5lci1kZXRhaWxzLmNvbXBvbmVudC5jc3MnXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgV2lubmVyRGV0YWlsc0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgaXNMb2FkaW5nOiBib29sZWFuID0gZmFsc2U7XHJcbiAgY29udGVzdDogYW55O1xyXG4gIGNvbnRlc3RJZDogYW55O1xyXG4gIHN1Ym1pdGlvbjogYW55O1xyXG4gIHN1Ym1pdGlvbklkOiBhbnk7XHJcbiAgc3VibWl0aW9ucyA9IFtdO1xyXG4gICBwdWJsaWMgb3B0aW9ucyA9IHtcclxuICAgICAgcG9zaXRpb246IFtcInRvcFwiLFwicmlnaHRcIl1cclxuICAgIH07XHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBhcGlTZXJ2aWNlOiBBcGlTZXJ2aWNlLCBcclxuICAgICAgICAgICAgICBwcml2YXRlIGVycm9yU2VydmljZTogRXJyb3JTZXJ2aWNlLFxyXG4gICAgICAgICAgICAgIHByaXZhdGUgY29udGVzdHNTZXJ2aWNlOiBDb250ZXN0c1NlcnZpY2UsIFxyXG4gICAgICAgICAgICAgIHByaXZhdGUgcm91dGU6IEFjdGl2YXRlZFJvdXRlLFxyXG4gICAgICAgICAgICAgIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsXHJcbiAgICAgICAgICAgICAgcHJpdmF0ZSBub3RpZmljYXRpb25zU2VydmljZTogTm90aWZpY2F0aW9uc1NlcnZpY2UpIHsgfVxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICAgIHRoaXMuaXNMb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgY29uc29sZS5sb2codGhpcy5jb250ZXN0c1NlcnZpY2UuY29udGVzdFdpbm5lcik7XHJcbiAgICAgIHRoaXMuY29udGVzdElkID0gdGhpcy5jb250ZXN0c1NlcnZpY2UuY29udGVzdFdpbm5lci5jb250ZXN0SWQ7XHJcbiAgICAgIHRoaXMuY29udGVzdCA9IHRoaXMuY29udGVzdHNTZXJ2aWNlLmNvbnRlc3RXaW5uZXIuY29udGVzdDtcclxuICAgICAgdGhpcy5zdWJtaXRpb24gPSB0aGlzLmNvbnRlc3RzU2VydmljZS5jb250ZXN0V2lubmVyLnN1Ym1pdGlvbjtcclxuICAgICAgdGhpcy5zdWJtaXRpb25JZCA9IHRoaXMuY29udGVzdHNTZXJ2aWNlLmNvbnRlc3RXaW5uZXIuc3VibWl0aW9uSWQ7XHJcbiAgICAvLyB0aGlzLnJvdXRlLnBhcmFtcy5zdWJzY3JpYmUoKHBhcmFtczogUGFyYW1zKSA9PiB7XHJcbiAgICAvLyAgIHRoaXMuY29udGVzdElkID0gcGFyYW1zWydpZCddO1xyXG4gICAgLy8gICBjb25zb2xlLmxvZygnbmdPbkluaXQgcGFyYW1zIGlkIChjb250ZXN0SWQpJyk7XHJcbiAgICAvLyAgIGNvbnNvbGUubG9nKHRoaXMuY29udGVzdElkKTtcclxuICAgIC8vIH0pO1xyXG4gICAgdGhpcy5hcGlTZXJ2aWNlLmdldENvbnRlc3RTdWJtaXRpb25zKHRoaXMuY29udGVzdElkKSAvL0NVUlJFTlQgRk9DVVNcclxuICAgICAgICAuc3Vic2NyaWJlKHN1Ym1pdGlvbnMgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnc3VibWl0aW9ucyBmcm9tIGFwaXNlcnZpY2UgaW4gc3VibWl0aW9uLWRldGFpbHMnKTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coc3VibWl0aW9ucyk7XHJcbiAgICAgICAgICAgIHRoaXMuc3VibWl0aW9ucyA9IHN1Ym1pdGlvbnM7XHJcbiAgICAgICAgICAgIHRoaXMuaXNMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHRoaXMuc3VibWl0aW9ucyk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBlcnJvciA9PiB7XHJcbiAgICAgICAgICB0aGlzLmlzTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgdGhpcy5ub3RpZmljYXRpb25zU2VydmljZS5lcnJvcignxK52eWtvIGtsYWlkYScsICdOZXBhdnlrbyBnYXV0aSBrb25rdXJzbyBkaXphaW7FsycsIHt0aW1lT3V0OiAzMDAwLCBzaG93UHJvZ3Jlc3NCYXI6IGZhbHNlfSlcclxuICAgICAgfSk7XHJcbiAgIH0gLy8gRW5kIG9mIG5nT25Jbml0XHJcblxyXG4gICBjb250YWN0V2lubmVyKG5pY2tuYW1lKSB7XHJcbiAgICAgY29uc3QgdG9waWMgPSBcIktvbmt1cnNvICdcIiArIHRoaXMuY29udGVzdC5uYW1lICsgXCInIGF0c2lza2FpdHltYXNcIjtcclxuICAgICB0aGlzLmNvbnRlc3RzU2VydmljZS5tYWlsVG9waWMgPSB0b3BpYztcclxuICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJy9wcm9maWxpcycsJ3Bhc3RhcycsJ3Jhc3l0aS1sYWlza2EnLCBuaWNrbmFtZV0pO1xyXG4gICB9XHJcblxyXG4gICBnb0JhY2soKSB7XHJcbiAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoWycva29ua3Vyc2FpJywgdGhpcy5jb250ZXN0LmlkTmFtZV0pO1xyXG4gICB9XHJcblxyXG4gICBpc0NvbnRlc3RQdWJsaXNoZXIoY29udGVzdEF1dGhvcklkOiBzdHJpbmcpIHtcclxuICAgICAgICB2YXIgdXNlcklkID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3VzZXJJZCcpO1xyXG4gICAgICAgIHJldHVybiBjb250ZXN0QXV0aG9ySWQgPT0gdXNlcklkO1xyXG4gICAgfVxyXG5cclxuXHJcbn0iXX0=
