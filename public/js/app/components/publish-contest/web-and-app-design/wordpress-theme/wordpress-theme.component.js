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
var WordpressThemeComponent = (function () {
    function WordpressThemeComponent(router, contestsService, notificationsService, authService) {
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
    WordpressThemeComponent.prototype.ngOnInit = function () {
        window.scrollTo(0, 0);
        this.contest.category = "WordPress tema";
    };
    WordpressThemeComponent.prototype.backToList = function () {
        this.router.navigate(['/paskelbti-konkursa']);
    };
    WordpressThemeComponent.prototype.logErrors = function (errors) {
        console.log(errors);
    };
    WordpressThemeComponent.prototype.addContest = function (value) {
        var _this = this;
        this.isLoading = true;
        console.log(value);
        this.contestsService.addContest(value)
            .subscribe(function (contest) {
            console.log('contest added');
            console.log(contest);
            _this.isLoading = false;
            _this.notificationsService.success('Paskelbta', 'Konkursas paskelbtas', { timeOut: 3000, showProgressBar: false });
            _this.router.navigate(['/']);
        }, function (error) {
            _this.isLoading = false;
            _this.notificationsService.error(error.title, error.error.message, { timeOut: 3000, showProgressBar: false });
        });
    };
    WordpressThemeComponent.prototype.isClient = function () {
        return this.authService.isClient();
    };
    WordpressThemeComponent.prototype.isDesigner = function () {
        return this.authService.isDesigner();
    };
    WordpressThemeComponent.prototype.isEmailConfirmed = function () {
        return sessionStorage.getItem('emailConfirmed') == CryptoJS.SHA3('true').toString();
    };
    WordpressThemeComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            templateUrl: 'wordpress-theme.component.html',
            styleUrls: ['wordpress-theme.component.css']
        }), 
        __metadata('design:paramtypes', [router_1.Router, contests_service_1.ContestsService, angular2_notifications_1.NotificationsService, auth_service_1.AuthService])
    ], WordpressThemeComponent);
    return WordpressThemeComponent;
}());
exports.WordpressThemeComponent = WordpressThemeComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvcHVibGlzaC1jb250ZXN0L3dlYi1hbmQtYXBwLWRlc2lnbi93b3JkcHJlc3MtdGhlbWUvd29yZHByZXNzLXRoZW1lLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQWtDLGVBQWUsQ0FBQyxDQUFBO0FBRWxELGlDQUFnQyx1Q0FBdUMsQ0FBQyxDQUFBO0FBQ3hFLDZCQUE0QixtQ0FBbUMsQ0FBQyxDQUFBO0FBR2hFLHVCQUF1QixpQkFBaUIsQ0FBQyxDQUFBO0FBQ3pDLHVDQUFxQyx3QkFBd0IsQ0FBQyxDQUFBO0FBQzlELElBQVksUUFBUSxXQUFNLFdBQVcsQ0FBQyxDQUFBO0FBT3RDO0lBT0UsaUNBQW9CLE1BQWMsRUFDZCxlQUFnQyxFQUNoQyxvQkFBMEMsRUFDMUMsV0FBd0I7UUFIeEIsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUNkLG9CQUFlLEdBQWYsZUFBZSxDQUFpQjtRQUNoQyx5QkFBb0IsR0FBcEIsb0JBQW9CLENBQXNCO1FBQzFDLGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBVDVDLFlBQU8sR0FBVyxFQUFFLENBQUM7UUFDckIsY0FBUyxHQUFHLEtBQUssQ0FBQztRQUNYLFlBQU8sR0FBRztZQUNiLFFBQVEsRUFBRSxDQUFDLEtBQUssRUFBQyxPQUFPLENBQUM7U0FDMUIsQ0FBQztJQUs0QyxDQUFDO0lBRWpELDBDQUFRLEdBQVI7UUFDRSxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsRUFBQyxDQUFDLENBQUMsQ0FBQztRQUNyQixJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsR0FBRyxnQkFBZ0IsQ0FBQztJQUMzQyxDQUFDO0lBRUQsNENBQVUsR0FBVjtRQUNFLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMscUJBQXFCLENBQUMsQ0FBQyxDQUFDO0lBQ2hELENBQUM7SUFFRCwyQ0FBUyxHQUFULFVBQVUsTUFBTTtRQUNkLE9BQU8sQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDdEIsQ0FBQztJQUVELDRDQUFVLEdBQVYsVUFBVyxLQUFLO1FBQWhCLGlCQWNDO1FBYkMsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUM7UUFDdEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNuQixJQUFJLENBQUMsZUFBZSxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUM7YUFDbkMsU0FBUyxDQUFDLFVBQUEsT0FBTztZQUNoQixPQUFPLENBQUMsR0FBRyxDQUFDLGVBQWUsQ0FBQyxDQUFDO1lBQzdCLE9BQU8sQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUM7WUFDckIsS0FBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7WUFDdkIsS0FBSSxDQUFDLG9CQUFvQixDQUFDLE9BQU8sQ0FBQyxXQUFXLEVBQUUsc0JBQXNCLEVBQUUsRUFBQyxPQUFPLEVBQUUsSUFBSSxFQUFFLGVBQWUsRUFBRSxLQUFLLEVBQUMsQ0FBQyxDQUFBO1lBQy9HLEtBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztRQUM5QixDQUFDLEVBQUUsVUFBQSxLQUFLO1lBQ04sS0FBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7WUFDdkIsS0FBSSxDQUFDLG9CQUFvQixDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsS0FBSyxFQUFFLEtBQUssQ0FBQyxLQUFLLENBQUMsT0FBTyxFQUFFLEVBQUMsT0FBTyxFQUFFLElBQUksRUFBRSxlQUFlLEVBQUUsS0FBSyxFQUFDLENBQUMsQ0FBQTtRQUM1RyxDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFDRCwwQ0FBUSxHQUFSO1FBQ0UsTUFBTSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDckMsQ0FBQztJQUVELDRDQUFVLEdBQVY7UUFDRSxNQUFNLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxVQUFVLEVBQUUsQ0FBQztJQUN2QyxDQUFDO0lBRUMsa0RBQWdCLEdBQWhCO1FBQ0EsTUFBTSxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxRQUFRLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQ3RGLENBQUM7SUF2REg7UUFBQyxnQkFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFdBQVcsRUFBRSxnQ0FBZ0M7WUFDN0MsU0FBUyxFQUFFLENBQUMsK0JBQStCLENBQUM7U0FDN0MsQ0FBQzs7K0JBQUE7SUFvREYsOEJBQUM7QUFBRCxDQW5EQSxBQW1EQyxJQUFBO0FBbkRZLCtCQUF1QiwwQkFtRG5DLENBQUEiLCJmaWxlIjoiY29tcG9uZW50cy9wdWJsaXNoLWNvbnRlc3Qvd2ViLWFuZC1hcHAtZGVzaWduL3dvcmRwcmVzcy10aGVtZS93b3JkcHJlc3MtdGhlbWUuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbnRlc3QgfSBmcm9tICcuLi8uLi8uLi8uLi9tb2RlbHMvY29udGVzdCc7XG5pbXBvcnQgeyBDb250ZXN0c1NlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi8uLi9zZXJ2aWNlcy9jb250ZXN0cy5zZXJ2aWNlJztcbmltcG9ydCB7IEF1dGhTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vLi4vc2VydmljZXMvYXV0aC5zZXJ2aWNlJztcbmltcG9ydCB7IEVycm9yU2VydmljZSB9IGZyb20gJy4uLy4uLy4uLy4uL2Vycm9ycy9pbmRleCc7XG5pbXBvcnQgeyBGb3JtR3JvdXAsIEZvcm1Db250cm9sLCBGb3JtQnVpbGRlciwgVmFsaWRhdG9ycyB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBOb3RpZmljYXRpb25zU2VydmljZSB9IGZyb20gJ2FuZ3VsYXIyLW5vdGlmaWNhdGlvbnMnO1xuaW1wb3J0ICogYXMgQ3J5cHRvSlMgZnJvbSAnY3J5cHRvLWpzJztcblxuQENvbXBvbmVudCh7XG4gIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gIHRlbXBsYXRlVXJsOiAnd29yZHByZXNzLXRoZW1lLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJ3dvcmRwcmVzcy10aGVtZS5jb21wb25lbnQuY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgV29yZHByZXNzVGhlbWVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBjb250ZXN0OiBPYmplY3QgPSB7fTtcbiAgaXNMb2FkaW5nID0gZmFsc2U7XG4gIHB1YmxpYyBvcHRpb25zID0ge1xuICAgICAgcG9zaXRpb246IFtcInRvcFwiLFwicmlnaHRcIl1cbiAgICB9O1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsXG4gICAgICAgICAgICAgIHByaXZhdGUgY29udGVzdHNTZXJ2aWNlOiBDb250ZXN0c1NlcnZpY2UsXG4gICAgICAgICAgICAgIHByaXZhdGUgbm90aWZpY2F0aW9uc1NlcnZpY2U6IE5vdGlmaWNhdGlvbnNTZXJ2aWNlLFxuICAgICAgICAgICAgICBwcml2YXRlIGF1dGhTZXJ2aWNlOiBBdXRoU2VydmljZSkgeyB9XG5cbiAgbmdPbkluaXQoKSB7IFxuICAgIHdpbmRvdy5zY3JvbGxUbygwLDApO1xuICAgIHRoaXMuY29udGVzdC5jYXRlZ29yeSA9IFwiV29yZFByZXNzIHRlbWFcIjtcbiAgfVxuXG4gIGJhY2tUb0xpc3QoKSB7XG4gICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoWycvcGFza2VsYnRpLWtvbmt1cnNhJ10pO1xuICB9XG5cbiAgbG9nRXJyb3JzKGVycm9ycykge1xuICAgIGNvbnNvbGUubG9nKGVycm9ycyk7XG4gIH1cblxuICBhZGRDb250ZXN0KHZhbHVlKSB7XG4gICAgdGhpcy5pc0xvYWRpbmcgPSB0cnVlO1xuICAgIGNvbnNvbGUubG9nKHZhbHVlKTtcbiAgICB0aGlzLmNvbnRlc3RzU2VydmljZS5hZGRDb250ZXN0KHZhbHVlKVxuICAgICAgLnN1YnNjcmliZShjb250ZXN0ID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coJ2NvbnRlc3QgYWRkZWQnKTtcbiAgICAgICAgY29uc29sZS5sb2coY29udGVzdCk7XG4gICAgICAgIHRoaXMuaXNMb2FkaW5nID0gZmFsc2U7XG4gICAgICAgIHRoaXMubm90aWZpY2F0aW9uc1NlcnZpY2Uuc3VjY2VzcygnUGFza2VsYnRhJywgJ0tvbmt1cnNhcyBwYXNrZWxidGFzJywge3RpbWVPdXQ6IDMwMDAsIHNob3dQcm9ncmVzc0JhcjogZmFsc2V9KVxuICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJy8nXSk7XG4gICAgICB9LCBlcnJvciA9PiB7XG4gICAgICAgIHRoaXMuaXNMb2FkaW5nID0gZmFsc2U7XG4gICAgICAgIHRoaXMubm90aWZpY2F0aW9uc1NlcnZpY2UuZXJyb3IoZXJyb3IudGl0bGUsIGVycm9yLmVycm9yLm1lc3NhZ2UsIHt0aW1lT3V0OiAzMDAwLCBzaG93UHJvZ3Jlc3NCYXI6IGZhbHNlfSlcbiAgICAgIH0pO1xuICB9XG4gIGlzQ2xpZW50KCkge1xuICAgIHJldHVybiB0aGlzLmF1dGhTZXJ2aWNlLmlzQ2xpZW50KCk7XG4gIH1cblxuICBpc0Rlc2lnbmVyKCkge1xuICAgIHJldHVybiB0aGlzLmF1dGhTZXJ2aWNlLmlzRGVzaWduZXIoKTtcbiAgfVxuXG4gICAgaXNFbWFpbENvbmZpcm1lZCgpIHsgLy8gVE9ETyBhZGQgdGhlc2UgY2hlY2tzIHRvIGV2ZXJ5IGZvcm1cbiAgICByZXR1cm4gc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbSgnZW1haWxDb25maXJtZWQnKSA9PSBDcnlwdG9KUy5TSEEzKCd0cnVlJykudG9TdHJpbmcoKTtcbiAgfVxufSJdfQ==
