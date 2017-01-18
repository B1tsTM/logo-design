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
var contests_service_1 = require('../../../../services/contests.service');
var auth_service_1 = require('../../../../services/auth.service');
var router_1 = require('@angular/router');
var angular2_notifications_1 = require('angular2-notifications');
var CryptoJS = require('crypto-js');
var YoutubeChannelComponent = (function () {
    function YoutubeChannelComponent(router, contestsService, notificationsService, authService) {
        this.router = router;
        this.contestsService = contestsService;
        this.notificationsService = notificationsService;
        this.authService = authService;
        this.contest = {};
        this.isLoading = false;
        this.options = {
            position: ["top", "right"]
        };
    }
    YoutubeChannelComponent.prototype.ngOnInit = function () {
        window.scrollTo(0, 0);
        this.contest.category = "YouTube kanalas";
    };
    YoutubeChannelComponent.prototype.backToList = function () {
        this.router.navigate(['/paskelbti-konkursa']);
    };
    YoutubeChannelComponent.prototype.logErrors = function (errors) {
        console.log(errors);
    };
    YoutubeChannelComponent.prototype.addContest = function (value) {
        var _this = this;
        this.isLoading = true;
        //console.log(value);
        this.contestsService.addContest(value)
            .subscribe(function (contest) {
            //console.log('contest added');
            //console.log(contest);
            _this.isLoading = false;
            _this.notificationsService.success('Paskelbta', 'Konkursas paskelbtas', { timeOut: 3000, showProgressBar: false });
            _this.router.navigate(['/']);
        }, function (error) {
            _this.isLoading = false;
            _this.notificationsService.error(error.title, error.error.message, { timeOut: 3000, showProgressBar: false });
        });
    };
    YoutubeChannelComponent.prototype.isClient = function () {
        return this.authService.isClient();
    };
    YoutubeChannelComponent.prototype.isDesigner = function () {
        return this.authService.isDesigner();
    };
    YoutubeChannelComponent.prototype.isEmailConfirmed = function () {
        return sessionStorage.getItem('emailConfirmed') == CryptoJS.SHA3('true').toString();
    };
    YoutubeChannelComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            templateUrl: 'youtube-channel.component.html',
            styleUrls: ['youtube-channel.component.css']
        }), 
        __metadata('design:paramtypes', [router_1.Router, contests_service_1.ContestsService, angular2_notifications_1.NotificationsService, auth_service_1.AuthService])
    ], YoutubeChannelComponent);
    return YoutubeChannelComponent;
}());
exports.YoutubeChannelComponent = YoutubeChannelComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvcHVibGlzaC1jb250ZXN0L3dlYi1hbmQtYXBwLWRlc2lnbi95b3V0dWJlLWNoYW5uZWwveW91dHViZS1jaGFubmVsLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQWtDLGVBQWUsQ0FBQyxDQUFBO0FBRWxELGlDQUFnQyx1Q0FBdUMsQ0FBQyxDQUFBO0FBQ3hFLDZCQUE0QixtQ0FBbUMsQ0FBQyxDQUFBO0FBR2hFLHVCQUF1QixpQkFBaUIsQ0FBQyxDQUFBO0FBQ3pDLHVDQUFxQyx3QkFBd0IsQ0FBQyxDQUFBO0FBQzlELElBQVksUUFBUSxXQUFNLFdBQVcsQ0FBQyxDQUFBO0FBT3RDO0lBT0UsaUNBQW9CLE1BQWMsRUFDZCxlQUFnQyxFQUNoQyxvQkFBMEMsRUFDMUMsV0FBd0I7UUFIeEIsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUNkLG9CQUFlLEdBQWYsZUFBZSxDQUFpQjtRQUNoQyx5QkFBb0IsR0FBcEIsb0JBQW9CLENBQXNCO1FBQzFDLGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBVDVDLFlBQU8sR0FBVyxFQUFFLENBQUM7UUFDckIsY0FBUyxHQUFHLEtBQUssQ0FBQztRQUNYLFlBQU8sR0FBRztZQUNiLFFBQVEsRUFBRSxDQUFDLEtBQUssRUFBQyxPQUFPLENBQUM7U0FDMUIsQ0FBQztJQUs0QyxDQUFDO0lBRWpELDBDQUFRLEdBQVI7UUFDRSxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsRUFBQyxDQUFDLENBQUMsQ0FBQztRQUNyQixJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsR0FBRyxpQkFBaUIsQ0FBQztJQUM1QyxDQUFDO0lBRUQsNENBQVUsR0FBVjtRQUNFLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMscUJBQXFCLENBQUMsQ0FBQyxDQUFDO0lBQ2hELENBQUM7SUFFRCwyQ0FBUyxHQUFULFVBQVUsTUFBTTtRQUNkLE9BQU8sQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDdEIsQ0FBQztJQUVELDRDQUFVLEdBQVYsVUFBVyxLQUFLO1FBQWhCLGlCQWNDO1FBYkMsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUM7UUFDdEIscUJBQXFCO1FBQ3JCLElBQUksQ0FBQyxlQUFlLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQzthQUNuQyxTQUFTLENBQUMsVUFBQSxPQUFPO1lBQ2hCLCtCQUErQjtZQUMvQix1QkFBdUI7WUFDdkIsS0FBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7WUFDdkIsS0FBSSxDQUFDLG9CQUFvQixDQUFDLE9BQU8sQ0FBQyxXQUFXLEVBQUUsc0JBQXNCLEVBQUUsRUFBQyxPQUFPLEVBQUUsSUFBSSxFQUFFLGVBQWUsRUFBRSxLQUFLLEVBQUMsQ0FBQyxDQUFBO1lBQy9HLEtBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztRQUM5QixDQUFDLEVBQUUsVUFBQSxLQUFLO1lBQ04sS0FBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7WUFDdkIsS0FBSSxDQUFDLG9CQUFvQixDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsS0FBSyxFQUFFLEtBQUssQ0FBQyxLQUFLLENBQUMsT0FBTyxFQUFFLEVBQUMsT0FBTyxFQUFFLElBQUksRUFBRSxlQUFlLEVBQUUsS0FBSyxFQUFDLENBQUMsQ0FBQTtRQUM1RyxDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFDRCwwQ0FBUSxHQUFSO1FBQ0UsTUFBTSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDckMsQ0FBQztJQUVELDRDQUFVLEdBQVY7UUFDRSxNQUFNLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxVQUFVLEVBQUUsQ0FBQztJQUN2QyxDQUFDO0lBRUMsa0RBQWdCLEdBQWhCO1FBQ0EsTUFBTSxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxRQUFRLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQ3RGLENBQUM7SUF2REg7UUFBQyxnQkFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFdBQVcsRUFBRSxnQ0FBZ0M7WUFDN0MsU0FBUyxFQUFFLENBQUMsK0JBQStCLENBQUM7U0FDN0MsQ0FBQzs7K0JBQUE7SUFvREYsOEJBQUM7QUFBRCxDQW5EQSxBQW1EQyxJQUFBO0FBbkRZLCtCQUF1QiwwQkFtRG5DLENBQUEiLCJmaWxlIjoiY29tcG9uZW50cy9wdWJsaXNoLWNvbnRlc3Qvd2ViLWFuZC1hcHAtZGVzaWduL3lvdXR1YmUtY2hhbm5lbC95b3V0dWJlLWNoYW5uZWwuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbnRlc3QgfSBmcm9tICcuLi8uLi8uLi8uLi9tb2RlbHMvY29udGVzdCc7XG5pbXBvcnQgeyBDb250ZXN0c1NlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi8uLi9zZXJ2aWNlcy9jb250ZXN0cy5zZXJ2aWNlJztcbmltcG9ydCB7IEF1dGhTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vLi4vc2VydmljZXMvYXV0aC5zZXJ2aWNlJztcbmltcG9ydCB7IEVycm9yU2VydmljZSB9IGZyb20gJy4uLy4uLy4uLy4uL2Vycm9ycy9pbmRleCc7XG5pbXBvcnQgeyBGb3JtR3JvdXAsIEZvcm1Db250cm9sLCBGb3JtQnVpbGRlciwgVmFsaWRhdG9ycyB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBOb3RpZmljYXRpb25zU2VydmljZSB9IGZyb20gJ2FuZ3VsYXIyLW5vdGlmaWNhdGlvbnMnO1xuaW1wb3J0ICogYXMgQ3J5cHRvSlMgZnJvbSAnY3J5cHRvLWpzJztcblxuQENvbXBvbmVudCh7XG4gIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gIHRlbXBsYXRlVXJsOiAneW91dHViZS1jaGFubmVsLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJ3lvdXR1YmUtY2hhbm5lbC5jb21wb25lbnQuY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgWW91dHViZUNoYW5uZWxDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBjb250ZXN0OiBPYmplY3QgPSB7fTtcbiAgaXNMb2FkaW5nID0gZmFsc2U7XG4gIHB1YmxpYyBvcHRpb25zID0ge1xuICAgICAgcG9zaXRpb246IFtcInRvcFwiLFwicmlnaHRcIl1cbiAgICB9O1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsXG4gICAgICAgICAgICAgIHByaXZhdGUgY29udGVzdHNTZXJ2aWNlOiBDb250ZXN0c1NlcnZpY2UsXG4gICAgICAgICAgICAgIHByaXZhdGUgbm90aWZpY2F0aW9uc1NlcnZpY2U6IE5vdGlmaWNhdGlvbnNTZXJ2aWNlLFxuICAgICAgICAgICAgICBwcml2YXRlIGF1dGhTZXJ2aWNlOiBBdXRoU2VydmljZSkgeyB9XG5cbiAgbmdPbkluaXQoKSB7IFxuICAgIHdpbmRvdy5zY3JvbGxUbygwLDApO1xuICAgIHRoaXMuY29udGVzdC5jYXRlZ29yeSA9IFwiWW91VHViZSBrYW5hbGFzXCI7XG4gIH1cblxuICBiYWNrVG9MaXN0KCkge1xuICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFsnL3Bhc2tlbGJ0aS1rb25rdXJzYSddKTtcbiAgfVxuXG4gIGxvZ0Vycm9ycyhlcnJvcnMpIHtcbiAgICBjb25zb2xlLmxvZyhlcnJvcnMpO1xuICB9XG5cbiAgYWRkQ29udGVzdCh2YWx1ZSkge1xuICAgIHRoaXMuaXNMb2FkaW5nID0gdHJ1ZTtcbiAgICAvL2NvbnNvbGUubG9nKHZhbHVlKTtcbiAgICB0aGlzLmNvbnRlc3RzU2VydmljZS5hZGRDb250ZXN0KHZhbHVlKVxuICAgICAgLnN1YnNjcmliZShjb250ZXN0ID0+IHtcbiAgICAgICAgLy9jb25zb2xlLmxvZygnY29udGVzdCBhZGRlZCcpO1xuICAgICAgICAvL2NvbnNvbGUubG9nKGNvbnRlc3QpO1xuICAgICAgICB0aGlzLmlzTG9hZGluZyA9IGZhbHNlO1xuICAgICAgICB0aGlzLm5vdGlmaWNhdGlvbnNTZXJ2aWNlLnN1Y2Nlc3MoJ1Bhc2tlbGJ0YScsICdLb25rdXJzYXMgcGFza2VsYnRhcycsIHt0aW1lT3V0OiAzMDAwLCBzaG93UHJvZ3Jlc3NCYXI6IGZhbHNlfSlcbiAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoWycvJ10pO1xuICAgICAgfSwgZXJyb3IgPT4ge1xuICAgICAgICB0aGlzLmlzTG9hZGluZyA9IGZhbHNlO1xuICAgICAgICB0aGlzLm5vdGlmaWNhdGlvbnNTZXJ2aWNlLmVycm9yKGVycm9yLnRpdGxlLCBlcnJvci5lcnJvci5tZXNzYWdlLCB7dGltZU91dDogMzAwMCwgc2hvd1Byb2dyZXNzQmFyOiBmYWxzZX0pXG4gICAgICB9KTtcbiAgfVxuICBpc0NsaWVudCgpIHtcbiAgICByZXR1cm4gdGhpcy5hdXRoU2VydmljZS5pc0NsaWVudCgpO1xuICB9XG5cbiAgaXNEZXNpZ25lcigpIHtcbiAgICByZXR1cm4gdGhpcy5hdXRoU2VydmljZS5pc0Rlc2lnbmVyKCk7XG4gIH1cblxuICAgIGlzRW1haWxDb25maXJtZWQoKSB7IC8vIFRPRE8gYWRkIHRoZXNlIGNoZWNrcyB0byBldmVyeSBmb3JtXG4gICAgcmV0dXJuIHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oJ2VtYWlsQ29uZmlybWVkJykgPT0gQ3J5cHRvSlMuU0hBMygndHJ1ZScpLnRvU3RyaW5nKCk7XG4gIH1cbn0iXX0=
