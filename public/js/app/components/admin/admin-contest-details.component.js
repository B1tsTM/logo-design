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
var index_1 = require('../../errors/index');
var auth_service_1 = require('../../services/auth.service');
var api_service_1 = require('../../services/api.service');
var moment = require('moment');
require('moment/min/locales');
var angular2_notifications_1 = require('angular2-notifications');
var AdminContestDetailsComponent = (function () {
    function AdminContestDetailsComponent(route, router, contestsService, errorService, authService, apiService, notificationsService) {
        this.route = route;
        this.router = router;
        this.contestsService = contestsService;
        this.errorService = errorService;
        this.authService = authService;
        this.apiService = apiService;
        this.notificationsService = notificationsService;
        this.contestId = '';
        this.contest = null;
        this.userId = '';
        this.filesToUpload = [];
        this.submitions = [];
        this.mySubmitions = [];
        this.additionalFiles = [];
        this.extendInputEnabled = false;
        this.isLoading = false;
        this.options = {
            position: ["top", "right"]
        };
    }
    AdminContestDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.isLoading = true;
        moment.locale('lt-lt');
        this.momentDate = moment().add(3, 'days').calendar();
        this.route.params.subscribe(function (params) {
            _this.contestId = params['id'];
        });
        this.contestsService.getIndividualContest(this.contestId)
            .subscribe(function (contest) {
            _this.contest = contest;
            _this.additionalFiles = contest.additionalFiles;
        }, function (error) {
            //this.errorService.handleError(error);
            _this.isLoading = false;
            _this.notificationsService.error(error.title, error.error.message, { timeOut: 3000, showProgressBar: false });
        });
        this.apiService.getContestSubmitions(this.contestId) //CURRENT FOCUS
            .subscribe(function (submitions) {
            _this.submitions = submitions;
            _this.isLoading = false;
        }, function (error) {
            //this.errorService.handleError(error);
            _this.isLoading = false;
            _this.notificationsService.error(error.title, error.error.message, { timeOut: 3000, showProgressBar: false });
        });
        this.apiService.getWinnerSubmition(this.contestId)
            .subscribe(function (data) {
            if (data.submitionUrl) {
                _this.winnerSubmition = data;
            }
        }, function (error) {
            _this.isLoading = false;
            _this.notificationsService.info(error.title, error.error.message, { timeOut: 3000, showProgressBar: false });
        });
    }; //End of ngOnInit
    AdminContestDetailsComponent.prototype.isClient = function () {
        return this.authService.isClient();
    };
    AdminContestDetailsComponent.prototype.isDesigner = function () {
        return this.authService.isDesigner();
    };
    AdminContestDetailsComponent.prototype.isLoggedIn = function () {
        return this.authService.isLoggedIn();
    };
    AdminContestDetailsComponent.prototype.isAdmin = function () {
        return this.authService.isAdmin();
    };
    AdminContestDetailsComponent.prototype.isContestPublisher = function (contestAuthorId) {
        var userId = sessionStorage.getItem('userId');
        return contestAuthorId == userId;
    };
    AdminContestDetailsComponent.prototype.viewSubmitionDetails = function (contestId, contest, submition) {
        this.contestsService.submitionDetails = { contestId: contestId, contest: contest, submition: submition };
        this.router.navigate([submition.submitionId], { relativeTo: this.route });
    };
    AdminContestDetailsComponent.prototype.validateContest = function (idName) {
        var _this = this;
        this.isLoading = true;
        this.contestsService.updateContestStatus(idName, "Aktyvus")
            .subscribe(function (res) {
            _this.notificationsService.success('Patvirtinta', 'Konkursas sėkmingai patvirtintas', { timeOut: 3000, showProgressBar: false });
            _this.isLoading = false;
            _this.router.navigate(['/admin', 'konkursai']);
        }, function (error) {
            _this.isLoading = false;
            _this.notificationsService.error(error.title, error.error.message, { timeOut: 3000, showProgressBar: false });
        });
    };
    AdminContestDetailsComponent.prototype.denyContest = function (idName) {
        var _this = this;
        this.isLoading = true;
        this.contestsService.updateContestStatus(idName, "Atmestas")
            .subscribe(function (res) {
            _this.notificationsService.success('Atmesta', 'Konkursas sėkmingai atmestas', { timeOut: 3000, showProgressBar: false });
            _this.isLoading = false;
            _this.router.navigate(['/admin', 'konkursai']);
        }, function (error) {
            _this.isLoading = false;
            _this.notificationsService.error(error.title, error.error.message, { timeOut: 3000, showProgressBar: false });
        });
    };
    AdminContestDetailsComponent.prototype.extendContest = function () {
        var _this = this;
        this.isLoading = true;
        this.contestsService.extendContest(this.contestId, this.endDate, this.extraPrize)
            .subscribe(function (res) {
            _this.notificationsService.success('Pratęsta', 'Konkursas sėkmingai pratęstas', { timeOut: 3000, showProgressBar: false });
            _this.isLoading = false;
            _this.router.navigate(['/admin', 'konkursai']);
        }, function (error) {
            _this.isLoading = false;
            _this.notificationsService.error(error.title, error.error.message, { timeOut: 3000, showProgressBar: false });
        });
    };
    AdminContestDetailsComponent.prototype.goBackToAdminContests = function () {
        this.router.navigate(['/admin', 'konkursai']);
    };
    AdminContestDetailsComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'admin-contest-details',
            templateUrl: 'admin-contest-details.component.html',
            styleUrls: ['admin-contest-details.component.css']
        }), 
        __metadata('design:paramtypes', [router_1.ActivatedRoute, router_1.Router, contests_service_1.ContestsService, index_1.ErrorService, auth_service_1.AuthService, api_service_1.ApiService, angular2_notifications_1.NotificationsService])
    ], AdminContestDetailsComponent);
    return AdminContestDetailsComponent;
}());
exports.AdminContestDetailsComponent = AdminContestDetailsComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvYWRtaW4vYWRtaW4tY29udGVzdC1kZXRhaWxzLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQWtDLGVBQWUsQ0FBQyxDQUFBO0FBQ2xELHVCQUErQyxpQkFBaUIsQ0FBQyxDQUFBO0FBRWpFLGlDQUFnQyxpQ0FBaUMsQ0FBQyxDQUFBO0FBQ2xFLHNCQUE2QixvQkFBb0IsQ0FBQyxDQUFBO0FBQ2xELDZCQUE0Qiw2QkFBNkIsQ0FBQyxDQUFBO0FBQzFELDRCQUEyQiw0QkFBNEIsQ0FBQyxDQUFBO0FBRXhELElBQVksTUFBTSxXQUFNLFFBQVEsQ0FBQyxDQUFBO0FBQ2pDLFFBQU8sb0JBQW9CLENBQUMsQ0FBQTtBQUM1Qix1Q0FBcUMsd0JBQXdCLENBQUMsQ0FBQTtBQVE5RDtJQW9CRSxzQ0FBb0IsS0FBcUIsRUFDckIsTUFBYyxFQUNkLGVBQWdDLEVBQ2hDLFlBQTBCLEVBQzFCLFdBQXdCLEVBQ3hCLFVBQXNCLEVBQ3RCLG9CQUEwQztRQU4xQyxVQUFLLEdBQUwsS0FBSyxDQUFnQjtRQUNyQixXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQ2Qsb0JBQWUsR0FBZixlQUFlLENBQWlCO1FBQ2hDLGlCQUFZLEdBQVosWUFBWSxDQUFjO1FBQzFCLGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBQ3hCLGVBQVUsR0FBVixVQUFVLENBQVk7UUFDdEIseUJBQW9CLEdBQXBCLG9CQUFvQixDQUFzQjtRQXpCOUQsY0FBUyxHQUFXLEVBQUUsQ0FBQztRQUN2QixZQUFPLEdBQVksSUFBSSxDQUFDO1FBQ3hCLFdBQU0sR0FBVyxFQUFFLENBQUM7UUFDcEIsa0JBQWEsR0FBVyxFQUFFLENBQUM7UUFFM0IsZUFBVSxHQUFVLEVBQUUsQ0FBQztRQUN2QixpQkFBWSxHQUFVLEVBQUUsQ0FBQztRQUN6QixvQkFBZSxHQUFHLEVBQUUsQ0FBQztRQUVyQix1QkFBa0IsR0FBRyxLQUFLLENBQUM7UUFNM0IsY0FBUyxHQUFH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QXhJQSxBQXdJQyxJQUFBO0FBeElZLG9DQUE0QiwrQkF3SXhDLENBQUEiLCJmaWxlIjoiY29tcG9uZW50cy9hZG1pbi9hZG1pbi1jb250ZXN0LWRldGFpbHMuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgUm91dGVyLCBBY3RpdmF0ZWRSb3V0ZSwgUGFyYW1zIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuaW1wb3J0IHsgQ29udGVzdCB9IGZyb20gJy4uLy4uL21vZGVscy9jb250ZXN0JztcclxuaW1wb3J0IHsgQ29udGVzdHNTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvY29udGVzdHMuc2VydmljZSc7XHJcbmltcG9ydCB7IEVycm9yU2VydmljZSB9IGZyb20gJy4uLy4uL2Vycm9ycy9pbmRleCc7XHJcbmltcG9ydCB7IEF1dGhTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvYXV0aC5zZXJ2aWNlJztcclxuaW1wb3J0IHsgQXBpU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL2FwaS5zZXJ2aWNlJztcclxuaW1wb3J0IHsgRm9ybUdyb3VwLCBGb3JtQ29udHJvbCwgRm9ybUJ1aWxkZXIsIFZhbGlkYXRvcnMgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcbmltcG9ydCAqIGFzIG1vbWVudCBmcm9tICdtb21lbnQnO1xyXG5pbXBvcnQgJ21vbWVudC9taW4vbG9jYWxlcyc7XHJcbmltcG9ydCB7IE5vdGlmaWNhdGlvbnNTZXJ2aWNlIH0gZnJvbSAnYW5ndWxhcjItbm90aWZpY2F0aW9ucyc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBtb2R1bGVJZDogbW9kdWxlLmlkLFxyXG4gIHNlbGVjdG9yOiAnYWRtaW4tY29udGVzdC1kZXRhaWxzJyxcclxuICB0ZW1wbGF0ZVVybDogJ2FkbWluLWNvbnRlc3QtZGV0YWlscy5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJ2FkbWluLWNvbnRlc3QtZGV0YWlscy5jb21wb25lbnQuY3NzJ11cclxufSlcclxuZXhwb3J0IGNsYXNzIEFkbWluQ29udGVzdERldGFpbHNDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gIGNvbnRlc3RJZDogc3RyaW5nID0gJyc7XHJcbiAgY29udGVzdDogQ29udGVzdCA9IG51bGw7XHJcbiAgdXNlcklkOiBzdHJpbmcgPSAnJztcclxuICBmaWxlc1RvVXBsb2FkOiBGaWxlW10gPSBbXTtcclxuICBwZXJjZW50OiBudW1iZXI7XHJcbiAgc3VibWl0aW9uczogYW55W10gPSBbXTtcclxuICBteVN1Ym1pdGlvbnM6IGFueVtdID0gW107XHJcbiAgYWRkaXRpb25hbEZpbGVzID0gW107XHJcbiAgd2lubmVyU3VibWl0aW9uOiBhbnk7XHJcbiAgZXh0ZW5kSW5wdXRFbmFibGVkID0gZmFsc2U7XHJcbiAgZW5kRGF0ZTogbnVtYmVyO1xyXG4gIGV4dHJhUHJpemU6IG51bWJlcjtcclxuICAvL2xvY2FsZSA9IG1vbWVudC5sb2NhbGUoJ2x0Jyk7XHJcbiAgLy9tb21lbnREYXRlOiBhbnkgPSBtb21lbnQoRGF0ZS5ub3coKS50b1N0cmluZygpLCAnWVlZWSBNTU1NIERvJywgJ2x0Jyk7XHJcbiAgbW9tZW50RGF0ZTogYW55O1xyXG4gIGlzTG9hZGluZyA9IGZhbHNlO1xyXG4gIHB1YmxpYyBvcHRpb25zID0ge1xyXG4gICAgICBwb3NpdGlvbjogW1widG9wXCIsXCJyaWdodFwiXVxyXG4gICAgfTtcclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSxcclxuICAgICAgICAgICAgICBwcml2YXRlIHJvdXRlcjogUm91dGVyLFxyXG4gICAgICAgICAgICAgIHByaXZhdGUgY29udGVzdHNTZXJ2aWNlOiBDb250ZXN0c1NlcnZpY2UsXHJcbiAgICAgICAgICAgICAgcHJpdmF0ZSBlcnJvclNlcnZpY2U6IEVycm9yU2VydmljZSxcclxuICAgICAgICAgICAgICBwcml2YXRlIGF1dGhTZXJ2aWNlOiBBdXRoU2VydmljZSxcclxuICAgICAgICAgICAgICBwcml2YXRlIGFwaVNlcnZpY2U6IEFwaVNlcnZpY2UsXHJcbiAgICAgICAgICAgICAgcHJpdmF0ZSBub3RpZmljYXRpb25zU2VydmljZTogTm90aWZpY2F0aW9uc1NlcnZpY2UpIHsgfVxyXG5cclxuICBuZ09uSW5pdCgpIHsgXHJcbiAgICB0aGlzLmlzTG9hZGluZyA9IHRydWU7XHJcbiAgICBtb21lbnQubG9jYWxlKCdsdC1sdCcpO1xyXG4gICAgdGhpcy5tb21lbnREYXRlID0gbW9tZW50KCkuYWRkKDMsICdkYXlzJykuY2FsZW5kYXIoKTtcclxuICAgIHRoaXMucm91dGUucGFyYW1zLnN1YnNjcmliZSgocGFyYW1zOiBQYXJhbXMpID0+IHtcclxuICAgIHRoaXMuY29udGVzdElkID0gcGFyYW1zWydpZCddO1xyXG4gICAgfSk7XHJcbiAgICB0aGlzLmNvbnRlc3RzU2VydmljZS5nZXRJbmRpdmlkdWFsQ29udGVzdCh0aGlzLmNvbnRlc3RJZClcclxuICAgICAgLnN1YnNjcmliZShjb250ZXN0ID0+IHtcclxuICAgICAgICB0aGlzLmNvbnRlc3QgPSBjb250ZXN0O1xyXG4gICAgICAgIHRoaXMuYWRkaXRpb25hbEZpbGVzID0gY29udGVzdC5hZGRpdGlvbmFsRmlsZXM7XHJcbiAgICAgIH0sIFxyXG4gICAgICBlcnJvciA9PiB7XHJcbiAgICAgICAgICAvL3RoaXMuZXJyb3JTZXJ2aWNlLmhhbmRsZUVycm9yKGVycm9yKTtcclxuICAgICAgICAgIHRoaXMuaXNMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICB0aGlzLm5vdGlmaWNhdGlvbnNTZXJ2aWNlLmVycm9yKGVycm9yLnRpdGxlLCBlcnJvci5lcnJvci5tZXNzYWdlLCB7dGltZU91dDogMzAwMCwgc2hvd1Byb2dyZXNzQmFyOiBmYWxzZX0pXHJcbiAgICAgIH0pO1xyXG4gICAgdGhpcy5hcGlTZXJ2aWNlLmdldENvbnRlc3RTdWJtaXRpb25zKHRoaXMuY29udGVzdElkKSAvL0NVUlJFTlQgRk9DVVNcclxuICAgICAgICAuc3Vic2NyaWJlKHN1Ym1pdGlvbnMgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLnN1Ym1pdGlvbnMgPSBzdWJtaXRpb25zO1xyXG4gICAgICAgICAgICB0aGlzLmlzTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZXJyb3IgPT4ge1xyXG4gICAgICAgICAgLy90aGlzLmVycm9yU2VydmljZS5oYW5kbGVFcnJvcihlcnJvcik7XHJcbiAgICAgICAgICB0aGlzLmlzTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgdGhpcy5ub3RpZmljYXRpb25zU2VydmljZS5lcnJvcihlcnJvci50aXRsZSwgZXJyb3IuZXJyb3IubWVzc2FnZSwge3RpbWVPdXQ6IDMwMDAsIHNob3dQcm9ncmVzc0JhcjogZmFsc2V9KVxyXG4gICAgICB9KTtcclxuXHJcbiAgICB0aGlzLmFwaVNlcnZpY2UuZ2V0V2lubmVyU3VibWl0aW9uKHRoaXMuY29udGVzdElkKVxyXG4gICAgICAgIC5zdWJzY3JpYmUoZGF0YSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChkYXRhLnN1Ym1pdGlvblVybCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy53aW5uZXJTdWJtaXRpb24gPSBkYXRhO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSwgZXJyb3IgPT4ge1xyXG4gICAgICAgICAgIHRoaXMuaXNMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICB0aGlzLm5vdGlmaWNhdGlvbnNTZXJ2aWNlLmluZm8oZXJyb3IudGl0bGUsIGVycm9yLmVycm9yLm1lc3NhZ2UsIHt0aW1lT3V0OiAzMDAwLCBzaG93UHJvZ3Jlc3NCYXI6IGZhbHNlfSkgXHJcbiAgICAgICAgfSlcclxuXHJcbiAgfSAvL0VuZCBvZiBuZ09uSW5pdFxyXG5cclxuICBpc0NsaWVudCgpIHtcclxuICAgICAgcmV0dXJuIHRoaXMuYXV0aFNlcnZpY2UuaXNDbGllbnQoKTtcclxuICB9XHJcblxyXG4gIGlzRGVzaWduZXIoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5hdXRoU2VydmljZS5pc0Rlc2lnbmVyKCk7XHJcbiAgfVxyXG5cclxuICBpc0xvZ2dlZEluKCkge1xyXG4gIHJldHVybiB0aGlzLmF1dGhTZXJ2aWNlLmlzTG9nZ2VkSW4oKTtcclxuICB9XHJcbiAgaXNBZG1pbigpIHtcclxuICAgIHJldHVybiB0aGlzLmF1dGhTZXJ2aWNlLmlzQWRtaW4oKTtcclxuICB9XHJcblxyXG4gIGlzQ29udGVzdFB1Ymxpc2hlcihjb250ZXN0QXV0aG9ySWQ6IHN0cmluZykge1xyXG4gICAgdmFyIHVzZXJJZCA9IHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oJ3VzZXJJZCcpO1xyXG4gICAgcmV0dXJuIGNvbnRlc3RBdXRob3JJZCA9PSB1c2VySWQ7XHJcbiAgfVxyXG5cclxuICAgdmlld1N1Ym1pdGlvbkRldGFpbHMoY29udGVzdElkLCBjb250ZXN0LCBzdWJtaXRpb24pIHtcclxuICAgICAgIHRoaXMuY29udGVzdHNTZXJ2aWNlLnN1Ym1pdGlvbkRldGFpbHMgPSB7Y29udGVzdElkOiBjb250ZXN0SWQsIGNvbnRlc3Q6IGNvbnRlc3QsIHN1Ym1pdGlvbjogc3VibWl0aW9ufTtcclxuICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFtzdWJtaXRpb24uc3VibWl0aW9uSWRdLCB7cmVsYXRpdmVUbzogdGhpcy5yb3V0ZX0pO1xyXG4gICB9XHJcblxyXG4gIHZhbGlkYXRlQ29udGVzdChpZE5hbWU6IHN0cmluZykge1xyXG4gICAgdGhpcy5pc0xvYWRpbmcgPSB0cnVlO1xyXG4gICAgdGhpcy5jb250ZXN0c1NlcnZpY2UudXBkYXRlQ29udGVzdFN0YXR1cyhpZE5hbWUsIFwiQWt0eXZ1c1wiKVxyXG4gICAgLnN1YnNjcmliZShyZXMgPT4ge1xyXG4gICAgICB0aGlzLm5vdGlmaWNhdGlvbnNTZXJ2aWNlLnN1Y2Nlc3MoJ1BhdHZpcnRpbnRhJywgJ0tvbmt1cnNhcyBzxJdrbWluZ2FpIHBhdHZpcnRpbnRhcycsIHt0aW1lT3V0OiAzMDAwLCBzaG93UHJvZ3Jlc3NCYXI6IGZhbHNlfSk7XHJcbiAgICAgIHRoaXMuaXNMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFsnL2FkbWluJywgJ2tvbmt1cnNhaSddKTtcclxuICAgIH0sIGVycm9yID0+IHtcclxuICAgICAgdGhpcy5pc0xvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgdGhpcy5ub3RpZmljYXRpb25zU2VydmljZS5lcnJvcihlcnJvci50aXRsZSwgZXJyb3IuZXJyb3IubWVzc2FnZSwge3RpbWVPdXQ6IDMwMDAsIHNob3dQcm9ncmVzc0JhcjogZmFsc2V9KVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBkZW55Q29udGVzdChpZE5hbWU6IHN0cmluZykge1xyXG4gICAgdGhpcy5pc0xvYWRpbmcgPSB0cnVlO1xyXG4gICAgdGhpcy5jb250ZXN0c1NlcnZpY2UudXBkYXRlQ29udGVzdFN0YXR1cyhpZE5hbWUsIFwiQXRtZXN0YXNcIilcclxuICAgIC5zdWJzY3JpYmUocmVzID0+IHtcclxuICAgICAgdGhpcy5ub3RpZmljYXRpb25zU2VydmljZS5zdWNjZXNzKCdBdG1lc3RhJywgJ0tvbmt1cnNhcyBzxJdrbWluZ2FpIGF0bWVzdGFzJywge3RpbWVPdXQ6IDMwMDAsIHNob3dQcm9ncmVzc0JhcjogZmFsc2V9KTtcclxuICAgICAgdGhpcy5pc0xvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoWycvYWRtaW4nLCAna29ua3Vyc2FpJ10pO1xyXG4gICAgfSwgZXJyb3IgPT4ge1xyXG4gICAgICB0aGlzLmlzTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICB0aGlzLm5vdGlmaWNhdGlvbnNTZXJ2aWNlLmVycm9yKGVycm9yLnRpdGxlLCBlcnJvci5lcnJvci5tZXNzYWdlLCB7dGltZU91dDogMzAwMCwgc2hvd1Byb2dyZXNzQmFyOiBmYWxzZX0pXHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGV4dGVuZENvbnRlc3QoKSB7XHJcbiAgICB0aGlzLmlzTG9hZGluZyA9IHRydWU7XHJcbiAgICB0aGlzLmNvbnRlc3RzU2VydmljZS5leHRlbmRDb250ZXN0KHRoaXMuY29udGVzdElkLCB0aGlzLmVuZERhdGUsIHRoaXMuZXh0cmFQcml6ZSlcclxuICAgIC5zdWJzY3JpYmUocmVzID0+IHtcclxuICAgICAgdGhpcy5ub3RpZmljYXRpb25zU2VydmljZS5zdWNjZXNzKCdQcmF0xJlzdGEnLCAnS29ua3Vyc2FzIHPEl2ttaW5nYWkgcHJhdMSZc3RhcycsIHt0aW1lT3V0OiAzMDAwLCBzaG93UHJvZ3Jlc3NCYXI6IGZhbHNlfSk7XHJcbiAgICAgIHRoaXMuaXNMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFsnL2FkbWluJywgJ2tvbmt1cnNhaSddKTtcclxuICAgIH0sIGVycm9yID0+IHtcclxuICAgICAgdGhpcy5pc0xvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgdGhpcy5ub3RpZmljYXRpb25zU2VydmljZS5lcnJvcihlcnJvci50aXRsZSwgZXJyb3IuZXJyb3IubWVzc2FnZSwge3RpbWVPdXQ6IDMwMDAsIHNob3dQcm9ncmVzc0JhcjogZmFsc2V9KVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBnb0JhY2tUb0FkbWluQ29udGVzdHMoKSB7XHJcbiAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJy9hZG1pbicsICdrb25rdXJzYWknXSk7XHJcbiAgfVxyXG5cclxufSJdfQ==
