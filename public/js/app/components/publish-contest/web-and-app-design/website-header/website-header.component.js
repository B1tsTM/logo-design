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
var WebsiteHeaderComponent = (function () {
    function WebsiteHeaderComponent(router, contestsService, notificationsService, authService) {
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
    WebsiteHeaderComponent.prototype.ngOnInit = function () {
        window.scrollTo(0, 0);
        this.contest.category = "Antraštė";
    };
    WebsiteHeaderComponent.prototype.backToList = function () {
        this.router.navigate(['/paskelbti-konkursa']);
    };
    WebsiteHeaderComponent.prototype.logErrors = function (errors) {
        console.log(errors);
    };
    WebsiteHeaderComponent.prototype.addContest = function (value) {
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
    WebsiteHeaderComponent.prototype.isClient = function () {
        return this.authService.isClient();
    };
    WebsiteHeaderComponent.prototype.isDesigner = function () {
        return this.authService.isDesigner();
    };
    WebsiteHeaderComponent.prototype.isEmailConfirmed = function () {
        return sessionStorage.getItem('emailConfirmed') == CryptoJS.SHA3('true').toString();
    };
    WebsiteHeaderComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            templateUrl: 'website-header.component.html',
            styleUrls: ['website-header.component.css']
        }), 
        __metadata('design:paramtypes', [router_1.Router, contests_service_1.ContestsService, angular2_notifications_1.NotificationsService, auth_service_1.AuthService])
    ], WebsiteHeaderComponent);
    return WebsiteHeaderComponent;
}());
exports.WebsiteHeaderComponent = WebsiteHeaderComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvcHVibGlzaC1jb250ZXN0L3dlYi1hbmQtYXBwLWRlc2lnbi93ZWJzaXRlLWhlYWRlci93ZWJzaXRlLWhlYWRlci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUFrQyxlQUFlLENBQUMsQ0FBQTtBQUVsRCxpQ0FBZ0MsdUNBQXVDLENBQUMsQ0FBQTtBQUN4RSw2QkFBNEIsbUNBQW1DLENBQUMsQ0FBQTtBQUdoRSx1QkFBdUIsaUJBQWlCLENBQUMsQ0FBQTtBQUN6Qyx1Q0FBcUMsd0JBQXdCLENBQUMsQ0FBQTtBQUM5RCxJQUFZLFFBQVEsV0FBTSxXQUFXLENBQUMsQ0FBQTtBQU90QztJQU9FLGdDQUFvQixNQUFjLEVBQ2QsZUFBZ0MsRUFDaEMsb0JBQTBDLEVBQzFDLFdBQXdCO1FBSHhCLFdBQU0sR0FBTixNQUFNLENBQVE7UUFDZCxvQkFBZSxHQUFmLGVBQWUsQ0FBaUI7UUFDaEMseUJBQW9CLEdBQXBCLG9CQUFvQixDQUFzQjtRQUMxQyxnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQVQ1QyxZQUFPLEdBQVcsRUFBRSxDQUFDO1FBQ3JCLGNBQVMsR0FBRyxLQUFLLENBQUM7UUFDWCxZQUFPLEdBQUc7WUFDYixRQUFRLEVBQUUsQ0FBQyxLQUFLLEVBQUMsT0FBTyxDQUFDO1NBQzFCLENBQUM7SUFLNEMsQ0FBQztJQUVqRCx5Q0FBUSxHQUFSO1FBQ0UsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDLENBQUM7UUFDckIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLEdBQUcsVUFBVSxDQUFDO0lBQ3JDLENBQUM7SUFFRCwyQ0FBVSxHQUFWO1FBQ0UsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDLENBQUM7SUFDaEQsQ0FBQztJQUVELDBDQUFTLEdBQVQsVUFBVSxNQUFNO1FBQ2QsT0FBTyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUN0QixDQUFDO0lBRUQsMkNBQVUsR0FBVixVQUFXLEtBQUs7UUFBaEIsaUJBY0M7UUFiQyxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQztRQUN0QixxQkFBcUI7UUFDckIsSUFBSSxDQUFDLGVBQWUsQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDO2FBQ25DLFNBQVMsQ0FBQyxVQUFBLE9BQU87WUFDaEIsK0JBQStCO1lBQy9CLHVCQUF1QjtZQUN2QixLQUFJLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQztZQUN2QixLQUFJLENBQUMsb0JBQW9CLENBQUMsT0FBTyxDQUFDLFdBQVcsRUFBRSxzQkFBc0IsRUFBRSxFQUFDLE9BQU8sRUFBRSxJQUFJLEVBQUUsZUFBZSxFQUFFLEtBQUssRUFBQyxDQUFDLENBQUE7WUFDL0csS0FBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQzlCLENBQUMsRUFBRSxVQUFBLEtBQUs7WUFDTixLQUFJLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQztZQUN2QixLQUFJLENBQUMsb0JBQW9CLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxLQUFLLEVBQUUsS0FBSyxDQUFDLEtBQUssQ0FBQyxPQUFPLEVBQUUsRUFBQyxPQUFPLEVBQUUsSUFBSSxFQUFFLGVBQWUsRUFBRSxLQUFLLEVBQUMsQ0FBQyxDQUFBO1FBQzVHLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUVELHlDQUFRLEdBQVI7UUFDRSxNQUFNLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUNyQyxDQUFDO0lBRUQsMkNBQVUsR0FBVjtRQUNFLE1BQU0sQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLFVBQVUsRUFBRSxDQUFDO0lBQ3ZDLENBQUM7SUFFQyxpREFBZ0IsR0FBaEI7UUFDQSxNQUFNLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLFFBQVEsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDdEYsQ0FBQztJQXhESDtRQUFDLGdCQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsV0FBVyxFQUFFLCtCQUErQjtZQUM1QyxTQUFTLEVBQUUsQ0FBQyw4QkFBOEIsQ0FBQztTQUM1QyxDQUFDOzs4QkFBQTtJQXFERiw2QkFBQztBQUFELENBcERBLEFBb0RDLElBQUE7QUFwRFksOEJBQXNCLHlCQW9EbEMsQ0FBQSIsImZpbGUiOiJjb21wb25lbnRzL3B1Ymxpc2gtY29udGVzdC93ZWItYW5kLWFwcC1kZXNpZ24vd2Vic2l0ZS1oZWFkZXIvd2Vic2l0ZS1oZWFkZXIuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbnRlc3QgfSBmcm9tICcuLi8uLi8uLi8uLi9tb2RlbHMvY29udGVzdCc7XG5pbXBvcnQgeyBDb250ZXN0c1NlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi8uLi9zZXJ2aWNlcy9jb250ZXN0cy5zZXJ2aWNlJztcbmltcG9ydCB7IEF1dGhTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vLi4vc2VydmljZXMvYXV0aC5zZXJ2aWNlJztcbmltcG9ydCB7IEVycm9yU2VydmljZSB9IGZyb20gJy4uLy4uLy4uLy4uL2Vycm9ycy9pbmRleCc7XG5pbXBvcnQgeyBGb3JtR3JvdXAsIEZvcm1Db250cm9sLCBGb3JtQnVpbGRlciwgVmFsaWRhdG9ycyB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBOb3RpZmljYXRpb25zU2VydmljZSB9IGZyb20gJ2FuZ3VsYXIyLW5vdGlmaWNhdGlvbnMnO1xuaW1wb3J0ICogYXMgQ3J5cHRvSlMgZnJvbSAnY3J5cHRvLWpzJztcblxuQENvbXBvbmVudCh7XG4gIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gIHRlbXBsYXRlVXJsOiAnd2Vic2l0ZS1oZWFkZXIuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnd2Vic2l0ZS1oZWFkZXIuY29tcG9uZW50LmNzcyddXG59KVxuZXhwb3J0IGNsYXNzIFdlYnNpdGVIZWFkZXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBjb250ZXN0OiBPYmplY3QgPSB7fTtcbiAgaXNMb2FkaW5nID0gZmFsc2U7XG4gIHB1YmxpYyBvcHRpb25zID0ge1xuICAgICAgcG9zaXRpb246IFtcInRvcFwiLFwicmlnaHRcIl1cbiAgICB9O1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsXG4gICAgICAgICAgICAgIHByaXZhdGUgY29udGVzdHNTZXJ2aWNlOiBDb250ZXN0c1NlcnZpY2UsXG4gICAgICAgICAgICAgIHByaXZhdGUgbm90aWZpY2F0aW9uc1NlcnZpY2U6IE5vdGlmaWNhdGlvbnNTZXJ2aWNlLFxuICAgICAgICAgICAgICBwcml2YXRlIGF1dGhTZXJ2aWNlOiBBdXRoU2VydmljZSkgeyB9XG5cbiAgbmdPbkluaXQoKSB7IFxuICAgIHdpbmRvdy5zY3JvbGxUbygwLDApO1xuICAgIHRoaXMuY29udGVzdC5jYXRlZ29yeSA9IFwiQW50cmHFoXTEl1wiO1xuICB9XG5cbiAgYmFja1RvTGlzdCgpIHtcbiAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJy9wYXNrZWxidGkta29ua3Vyc2EnXSk7XG4gIH1cblxuICBsb2dFcnJvcnMoZXJyb3JzKSB7XG4gICAgY29uc29sZS5sb2coZXJyb3JzKTtcbiAgfVxuXG4gIGFkZENvbnRlc3QodmFsdWUpIHtcbiAgICB0aGlzLmlzTG9hZGluZyA9IHRydWU7XG4gICAgLy9jb25zb2xlLmxvZyh2YWx1ZSk7XG4gICAgdGhpcy5jb250ZXN0c1NlcnZpY2UuYWRkQ29udGVzdCh2YWx1ZSlcbiAgICAgIC5zdWJzY3JpYmUoY29udGVzdCA9PiB7XG4gICAgICAgIC8vY29uc29sZS5sb2coJ2NvbnRlc3QgYWRkZWQnKTtcbiAgICAgICAgLy9jb25zb2xlLmxvZyhjb250ZXN0KTtcbiAgICAgICAgdGhpcy5pc0xvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5ub3RpZmljYXRpb25zU2VydmljZS5zdWNjZXNzKCdQYXNrZWxidGEnLCAnS29ua3Vyc2FzIHBhc2tlbGJ0YXMnLCB7dGltZU91dDogMzAwMCwgc2hvd1Byb2dyZXNzQmFyOiBmYWxzZX0pXG4gICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFsnLyddKTtcbiAgICAgIH0sIGVycm9yID0+IHtcbiAgICAgICAgdGhpcy5pc0xvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5ub3RpZmljYXRpb25zU2VydmljZS5lcnJvcihlcnJvci50aXRsZSwgZXJyb3IuZXJyb3IubWVzc2FnZSwge3RpbWVPdXQ6IDMwMDAsIHNob3dQcm9ncmVzc0JhcjogZmFsc2V9KVxuICAgICAgfSk7XG4gIH1cblxuICBpc0NsaWVudCgpIHtcbiAgICByZXR1cm4gdGhpcy5hdXRoU2VydmljZS5pc0NsaWVudCgpO1xuICB9XG5cbiAgaXNEZXNpZ25lcigpIHtcbiAgICByZXR1cm4gdGhpcy5hdXRoU2VydmljZS5pc0Rlc2lnbmVyKCk7XG4gIH1cblxuICAgIGlzRW1haWxDb25maXJtZWQoKSB7IC8vIFRPRE8gYWRkIHRoZXNlIGNoZWNrcyB0byBldmVyeSBmb3JtXG4gICAgcmV0dXJuIHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oJ2VtYWlsQ29uZmlybWVkJykgPT0gQ3J5cHRvSlMuU0hBMygndHJ1ZScpLnRvU3RyaW5nKCk7XG4gIH1cbn0iXX0=
