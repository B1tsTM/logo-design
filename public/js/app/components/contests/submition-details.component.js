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
        console.log('DEBUG THis.submition');
        console.log(this.submition.submitionAuthor._id);
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
                //this.contestsService.submitionDetails.submition = data.obj.submitions[obj.submitionId - 1];
                console.log(_this.contestsService.submitionDetails.submition);
                _this.isLoading = false;
                _this.notificationsService.success('Pakeista', 'Dizaino reitingas pakeistas', { timeOut: 3000, showProgressBar: false });
            }, function (error) {
                _this.isLoading = false;
                _this.notificationsService.error(error.title, error.error.message, { timeOut: 3000, showProgressBar: false });
            });
        }
    };
    SubmitionDetailsComponent.prototype.selectWinner = function (contestIdName, submitionId, contest, submition) {
        var _this = this;
        this.isLoading = true;
        var topic = "Pergalė konkurse " + contest.name;
        var message = "Sveikiname laimėjus konkursą '" + contest.name + "'! Su jumis artimiausiu metu susisieks konkurso autorius " + contest.publisher.nickName + ". Kai Jūs išsiųsite atitinkamus dizaino failus ir gausite už tai pinigus, Jums reikės tai patvirtinti atrašant į ši laišką, įtraukiant konkurso pavadinimą (bei paminėti iškilusias problemas, jei tokių buvo) arba susisiekti el. pašto adresu info@dizainokonkursai.lt . Tai padarius konkursas bus laikomas užbaigtu. Sveikiname ir linkime Jums geros dienos!";
        console.log('you win ' + contestIdName + ', ' + submitionId);
        var messageForAdmin = "Konkursą " + contest.name + "laimėjo " + this.submition.submitionAuthor.nickName + " laiku " + Date.now(); // TODO proper date format
        this.apiService.selectWinner(contestIdName, submitionId, contest.id, this.submition.submitionAuthor._id, submition)
            .subscribe(function (data) {
            console.log(data);
            console.log('DEBUG THis.submition');
            console.log(_this.submition);
            _this.isLoading = false;
            _this.contestsService.contestWinner = { contestId: contestIdName, submitionId: submitionId, submition: _this.submition, contest: contest };
            _this.apiService.sendMessage(_this.submition.submitionAuthor.nickName, topic, message, "Admin") //.add sender param, figure out how to change it in api.service
                .subscribe(function (res) {
                console.log('Zinute laimetojui issiusta');
                _this.notificationsService.success('Sveikiname', 'Laimėtoją informavome apie pergalę', { timeOut: 5000, showProgressBar: false });
            }, function (error) {
                _this.isLoading = false;
                _this.notificationsService.error(error.title, error.error.message, { timeOut: 3000, showProgressBar: false });
            });
            _this.apiService.sendMessage('Admin', topic, messageForAdmin, 'Admin')
                .subscribe(function (res) {
                console.log('Zinute administatoriui issiusta');
            }, function (error) {
                _this.isLoading = false;
                _this.notificationsService.error(error.title, error.error.message, { timeOut: 3000, showProgressBar: false });
            });
            // this.apiService.addWinningContest(contest._id, this.submition.submitionAuthor._id)
            // .subscribe(data => {
            //     console.log(data);
            // }, error => {
            //     this.isLoading = false;
            //     this.notificationsService.error(error.title, error.error.message, {timeOut: 3000, showProgressBar: false})
            // });
            window.scrollTo(0, 0);
            _this.router.navigate(['nugaletojas'], { relativeTo: _this.route });
        }, function (error) {
            _this.isLoading = false;
            _this.notificationsService.error(error.title, error.error.message, { timeOut: 3000, showProgressBar: false });
        });
    };
    SubmitionDetailsComponent.prototype.goBack = function () {
        window.scrollTo(0, 0);
        this.router.navigate(['/konkursai', this.contestId]);
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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvY29udGVzdHMvc3VibWl0aW9uLWRldGFpbHMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBd0MsZUFBZSxDQUFDLENBQUE7QUFDeEQsaUNBQWdDLGlDQUFpQyxDQUFDLENBQUE7QUFDbEUsc0JBQTZCLG9CQUFvQixDQUFDLENBQUE7QUFFbEQsNEJBQTJCLDRCQUE0QixDQUFDLENBQUE7QUFDeEQsdUJBQStDLGlCQUFpQixDQUFDLENBQUE7QUFDakUsdUNBQXFDLHdCQUF3QixDQUFDLENBQUE7QUFROUQ7SUFXRSxtQ0FBb0IsVUFBc0IsRUFDdEIsWUFBMEIsRUFDMUIsZUFBZ0MsRUFDaEMsS0FBcUIsRUFDckIsTUFBYyxFQUNkLG9CQUEwQztRQUwxQyxlQUFVLEdBQVYsVUFBVSxDQUFZO1FBQ3RCLGlCQUFZLEdBQVosWUFBWSxDQUFjO1FBQzFCLG9CQUFlLEdBQWYsZUFBZSxDQUFpQjtRQUNoQyxVQUFLLEdBQUwsS0FBSyxDQUFnQjtRQUNyQixXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQ2QseUJBQW9CLEdBQXBCLG9CQUFvQixDQUFzQjtRQVo1RCxlQUFVLEdBQVUsRUFBRSxDQUFDO1FBQ3ZCLHdCQUFtQixHQUFZLEtBQUssQ0FBQztRQUNyQyxjQUFTLEdBQUcsS0FBSyxDQUFDO1FBQ1gsWUFBTyxHQUFHO1lBQ2YsUUFBUSxFQUFFLENBQUMsS0FBSyxFQUFDLE9BQU8sQ0FBQztTQUMxQixDQUFDO0lBTzhELENBQUM7SUFFbkUsNENBQVEsR0FBUjtRQUFBLGlCQXFDQztRQXBDRyxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQztRQUN0QixPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztRQUNuRCxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxlQUFlLENBQUMsZ0JBQWdCLENBQUMsU0FBUyxDQUFDO1FBQ2pFLElBQUks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QUFRLENBQUMsQ0FBQyxhQUFhLENBQUMsRUFBRSxFQUFDLFVBQVUsRUFBRSxLQUFJLENBQUMsS0FBSyxFQUFDLENBQUMsQ0FBQztRQUNwRSxDQUFDLEVBQUUsVUFBQSxLQUFLO1lBQ0osS0FBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7WUFDdkIsS0FBSSxDQUFDLG9CQUFvQixDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsS0FBSyxFQUFFLEtBQUssQ0FBQyxLQUFLLENBQUMsT0FBTyxFQUFFLEVBQUMsT0FBTyxFQUFFLElBQUksRUFBRSxlQUFlLEVBQUUsS0FBSyxFQUFDLENBQUMsQ0FBQTtRQUM5RyxDQUFDLENBQUMsQ0FBQztJQUNYLENBQUM7SUFFRCwwQ0FBTSxHQUFOO1FBQ0ksTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDLENBQUM7UUFDckIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxZQUFZLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUM7SUFDekQsQ0FBQztJQXRKTDtRQUFDLGdCQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsUUFBUSxFQUFFLG1CQUFtQjtZQUM3QixXQUFXLEVBQUUsa0NBQWtDO1lBQy9DLFNBQVMsRUFBRSxDQUFDLGlDQUFpQyxDQUFDO1NBQy9DLENBQUM7O2lDQUFBO0lBbUpGLGdDQUFDO0FBQUQsQ0FsSkEsQUFrSkMsSUFBQTtBQWxKWSxpQ0FBeUIsNEJBa0pyQyxDQUFBIiwiZmlsZSI6ImNvbXBvbmVudHMvY29udGVzdHMvc3VibWl0aW9uLWRldGFpbHMuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0fSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQ29udGVzdHNTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvY29udGVzdHMuc2VydmljZSc7XHJcbmltcG9ydCB7IEVycm9yU2VydmljZSB9IGZyb20gJy4uLy4uL2Vycm9ycy9pbmRleCc7XHJcbmltcG9ydCB7IEF1dGhTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvYXV0aC5zZXJ2aWNlJztcclxuaW1wb3J0IHsgQXBpU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL2FwaS5zZXJ2aWNlJztcclxuaW1wb3J0IHsgQWN0aXZhdGVkUm91dGUsIFJvdXRlciwgUGFyYW1zIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuaW1wb3J0IHsgTm90aWZpY2F0aW9uc1NlcnZpY2UgfSBmcm9tICdhbmd1bGFyMi1ub3RpZmljYXRpb25zJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIG1vZHVsZUlkOiBtb2R1bGUuaWQsXHJcbiAgc2VsZWN0b3I6ICdzdWJtaXRpb24tZGV0YWlscycsXHJcbiAgdGVtcGxhdGVVcmw6ICdzdWJtaXRpb24tZGV0YWlscy5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJ3N1Ym1pdGlvbi1kZXRhaWxzLmNvbXBvbmVudC5jc3MnXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgU3VibWl0aW9uRGV0YWlsc0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgICBjb250ZXN0SWQ6IHN0cmluZztcclxuICAgIGNvbnRlc3Q6IGFueTtcclxuICAgIHN1Ym1pdGlvbjogYW55O1xyXG4gICAgc3VibWl0aW9uczogYW55W10gPSBbXTtcclxuICAgIGNvbmZpcm1hdGlvblZpc2libGU6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgIGlzTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgcHVibGljIG9wdGlvbnMgPSB7XHJcbiAgICAgIHBvc2l0aW9uOiBbXCJ0b3BcIixcInJpZ2h0XCJdXHJcbiAgICB9O1xyXG4gICAgXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBhcGlTZXJ2aWNlOiBBcGlTZXJ2aWNlLCBcclxuICAgICAgICAgICAgICBwcml2YXRlIGVycm9yU2VydmljZTogRXJyb3JTZXJ2aWNlLFxyXG4gICAgICAgICAgICAgIHByaXZhdGUgY29udGVzdHNTZXJ2aWNlOiBDb250ZXN0c1NlcnZpY2UsIFxyXG4gICAgICAgICAgICAgIHByaXZhdGUgcm91dGU6IEFjdGl2YXRlZFJvdXRlLFxyXG4gICAgICAgICAgICAgIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsXHJcbiAgICAgICAgICAgICAgcHJpdmF0ZSBub3RpZmljYXRpb25zU2VydmljZTogTm90aWZpY2F0aW9uc1NlcnZpY2UpIHsgfVxyXG5cclxuICBuZ09uSW5pdCgpIHsgIC8vIFRPRE8gYWRkIGNvbW1lbnRzIHRvIHVzZXJzJ3MgY29tbWVudHMgYXJyYXlcclxuICAgICAgdGhpcy5pc0xvYWRpbmcgPSB0cnVlO1xyXG4gICAgICBjb25zb2xlLmxvZyh0aGlzLmNvbnRlc3RzU2VydmljZS5zdWJtaXRpb25EZXRhaWxzKTtcclxuICAgICAgdGhpcy5jb250ZXN0SWQgPSB0aGlzLmNvbnRlc3RzU2VydmljZS5zdWJtaXRpb25EZXRhaWxzLmNvbnRlc3RJZDtcclxuICAgICAgdGhpcy5jb250ZXN0ID0gdGhpcy5jb250ZXN0c1NlcnZpY2Uuc3VibWl0aW9uRGV0YWlscy5jb250ZXN0O1xyXG4gICAgICB0aGlzLnN1Ym1pdGlvbiA9IHRoaXMuY29udGVzdHNTZXJ2aWNlLnN1Ym1pdGlvbkRldGFpbHMuc3VibWl0aW9uO1xyXG4gICAgICBjb25zb2xlLmxvZygnREVCVUcgVEhpcy5zdWJtaXRpb24nKTtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHRoaXMuc3VibWl0aW9uLnN1Ym1pdGlvbkF1dGhvci5faWQpO1xyXG4gICAgLy8gdGhpcy5yb3V0ZS5wYXJhbXMuc3Vic2NyaWJlKChwYXJhbXM6IFBhcmFtcykgPT4ge1xyXG4gICAgLy8gICB0aGlzLmNvbnRlc3RJZCA9IHBhcmFtc1snaWQnXTtcclxuICAgIC8vICAgY29uc29sZS5sb2coJ25nT25Jbml0IHBhcmFtcyBpZCAoY29udGVzdElkKScpO1xyXG4gICAgLy8gICBjb25zb2xlLmxvZyh0aGlzLmNvbnRlc3RJZCk7XHJcbiAgICAvLyB9KTtcclxuICAgIHRoaXMuYXBpU2VydmljZS5nZXRDb250ZXN0U3VibWl0aW9ucyh0aGlzLmNvbnRlc3RJZCkgLy9DVVJSRU5UIEZPQ1VTXHJcbiAgICAgICAgLnN1YnNjcmliZShzdWJtaXRpb25zID0+IHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ3N1Ym1pdGlvbnMgZnJvbSBhcGlzZXJ2aWNlIGluIHN1Ym1pdGlvbi1kZXRhaWxzJyk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHN1Ym1pdGlvbnMpO1xyXG4gICAgICAgICAgICB0aGlzLnN1Ym1pdGlvbnMgPSBzdWJtaXRpb25zO1xyXG4gICAgICAgICAgICB0aGlzLmlzTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyh0aGlzLnN1Ym1pdGlvbnMpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZXJyb3IgPT4ge1xyXG4gICAgICAgICAgLy90aGlzLmVycm9yU2VydmljZS5oYW5kbGVFcnJvcihlcnJvcik7XHJcbiAgICAgICAgICB0aGlzLmlzTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgdGhpcy5ub3RpZmljYXRpb25zU2VydmljZS5lcnJvcihlcnJvci50aXRsZSwgZXJyb3IuZXJyb3IubWVzc2FnZSwge3RpbWVPdXQ6IDMwMDAsIHNob3dQcm9ncmVzc0JhcjogZmFsc2V9KVxyXG4gICAgICB9KTtcclxuICAgIC8vICAgY29uc29sZS5sb2coJ25nT25Jbml0IHN1Ym1pdGlvbiBkZXRhaWxzIHRoaXMuc3VibWl0aW9uUycpO1xyXG4gICAgLy8gICBjb25zb2xlLmxvZyh0aGlzLnN1Ym1pdGlvbnMpO1xyXG4gICAgLy8gICB0aGlzLnN1Ym1pdGlvbiA9IHRoaXMuc3VibWl0aW9ucy5maWx0ZXIoKHN1YikgPT4ge1xyXG4gICAgLy8gICAgIGNvbnNvbGUubG9nKCdzdWIuc3VibWl0aW9uVXJsJyk7XHJcbiAgICAvLyAgICAgY29uc29sZS5sb2coc3ViLnN1Ym1pdGlvblVybCk7XHJcbiAgICAvLyAgICAgY29uc29sZS5sb2coJ3RoaXMuc3VibWl0aW9uVXJsJyk7XHJcbiAgICAvLyAgICAgY29uc29sZS5sb2codGhpcy5zdWJtaXRpb25VcmwpO1xyXG4gICAgLy8gICAgIHJldHVybiBzdWIuc3VibWl0aW9uVXJsID09IHRoaXMuc3VibWl0aW9uVXJsXHJcbiAgICAvLyAgIH0pO1xyXG4gICAgLy8gICBjb25zb2xlLmxvZygnbmdPbkluaXQgc3VibWl0aW9uIGRldGFpbHMgdGhpcy5zdWJtaXRpb24nKTtcclxuICAgIC8vICAgY29uc29sZS5sb2codGhpcy5zdWJtaXRpb24pO1xyXG4gIH1cclxuXHJcbiAgICBjbG9zZWQoKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ01vZGFsIGNsb3NlZCcpO1xyXG4gICAgfVxyXG5cclxuICAgIGRpc21pc3NlZCgpIHtcclxuICAgICAgICBjb25zb2xlLmxvZygnTW9kYWwgZGlzbWlzc2VkJyk7XHJcbiAgICAgICAgdGhpcy5jb25maXJtYXRpb25WaXNpYmxlID0gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgb3BlbmVkKCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdNb2RhbCBvcGVuZWQnKTtcclxuICAgIH1cclxuXHJcbiAgICBpc0NvbnRlc3RQdWJsaXNoZXIoY29udGVzdEF1dGhvcklkOiBzdHJpbmcpIHtcclxuICAgICAgICB2YXIgdXNlcklkID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3VzZXJJZCcpO1xyXG4gICAgICAgIHJldHVybiBjb250ZXN0QXV0aG9ySWQgPT0gdXNlcklkO1xyXG4gICAgfVxyXG5cclxuICAgIG9uUmF0aW5nKG9iajogYW55KSB7XHJcbiAgICAgICAgdGhpcy5pc0xvYWRpbmcgPSB0cnVlO1xyXG4gICAgICAgIHZhciBzdWJtaXRpb24gPSB0aGlzLnN1Ym1pdGlvbnMuZmlsdGVyKChpdGVtOiBhbnkpID0+IGl0ZW0uc3VibWl0aW9uSWQgPT0gb2JqLnN1Ym1pdGlvbklkKTtcclxuICAgICAgICBjb25zb2xlLmxvZygnb25SYXRpbmcoKSBzdWJtaXRpb24gYWZ0ZXIgZmlsdGVyJyk7XHJcbiAgICAgICAgY29uc29sZS5sb2coc3VibWl0aW9uKTtcclxuICAgICAgICBpZiAoISFzdWJtaXRpb24gJiYgc3VibWl0aW9uLmxlbmd0aCA9PSAxKSB7XHJcbiAgICAgICAgICAgIC8vdGhpcy5zdWJtaXRpb25zWzBdLnN1Ym1pdGlvblJhdGluZyA9IG9iai5yYXRpbmc7XHJcbiAgICAgICAgICAgIHN1Ym1pdGlvblswXS5zdWJtaXRpb25SYXRpbmcgPSBvYmoucmF0aW5nO1xyXG4gICAgICAgICAgICB0aGlzLmNvbnRlc3RzU2VydmljZS51cGRhdGVTdWJtaXRpb25SYXRpbmcodGhpcy5jb250ZXN0LCBzdWJtaXRpb25bMF0pXHJcbiAgICAgICAgICAgICAgICAuc3Vic2NyaWJlKGRhdGEgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdSYXRpbmcgY2hhbmdlZCcpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vdGhpcy5jb250ZXN0c1NlcnZpY2Uuc3VibWl0aW9uRGV0YWlscy5zdWJtaXRpb24gPSBkYXRhLm9iai5zdWJtaXRpb25zW29iai5zdWJtaXRpb25JZCAtIDFdO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHRoaXMuY29udGVzdHNTZXJ2aWNlLnN1Ym1pdGlvbkRldGFpbHMuc3VibWl0aW9uKTsgXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5pc0xvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLm5vdGlmaWNhdGlvbnNTZXJ2aWNlLnN1Y2Nlc3MoJ1Bha2Vpc3RhJywgJ0RpemFpbm8gcmVpdGluZ2FzIHBha2Vpc3RhcycsIHt0aW1lT3V0OiAzMDAwLCBzaG93UHJvZ3Jlc3NCYXI6IGZhbHNlfSlcclxuICAgICAgICAgICAgICAgIH0sIGVycm9yID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmlzTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubm90aWZpY2F0aW9uc1NlcnZpY2UuZXJyb3IoZXJyb3IudGl0bGUsIGVycm9yLmVycm9yLm1lc3NhZ2UsIHt0aW1lT3V0OiAzMDAwLCBzaG93UHJvZ3Jlc3NCYXI6IGZhbHNlfSlcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHNlbGVjdFdpbm5lcihjb250ZXN0SWROYW1lLCBzdWJtaXRpb25JZCwgY29udGVzdCwgc3VibWl0aW9uKSB7XHJcbiAgICAgICAgdGhpcy5pc0xvYWRpbmcgPSB0cnVlO1xyXG4gICAgICAgIGNvbnN0IHRvcGljID0gXCJQZXJnYWzElyBrb25rdXJzZSBcIiArIGNvbnRlc3QubmFtZTtcclxuICAgICAgICBjb25zdCBtZXNzYWdlID0gXCJTdmVpa2luYW1lIGxhaW3El2p1cyBrb25rdXJzxIUgJ1wiICsgY29udGVzdC5uYW1lICsgXCInISBTdSBqdW1pcyBhcnRpbWlhdXNpdSBtZXR1IHN1c2lzaWVrcyBrb25rdXJzbyBhdXRvcml1cyBcIiArIGNvbnRlc3QucHVibGlzaGVyLm5pY2tOYW1lICsgXCIuIEthaSBKxatzIGnFoXNpxbNzaXRlIGF0aXRpbmthbXVzIGRpemFpbm8gZmFpbHVzIGlyIGdhdXNpdGUgdcW+IHRhaSBwaW5pZ3VzLCBKdW1zIHJlaWvEl3MgdGFpIHBhdHZpcnRpbnRpIGF0cmHFoWFudCDEryDFoWkgbGFpxaFrxIUsIMSvdHJhdWtpYW50IGtvbmt1cnNvIHBhdmFkaW5pbcSFIChiZWkgcGFtaW7El3RpIGnFoWtpbHVzaWFzIHByb2JsZW1hcywgamVpIHRva2nFsyBidXZvKSBhcmJhIHN1c2lzaWVrdGkgZWwuIHBhxaF0byBhZHJlc3UgaW5mb0BkaXphaW5va29ua3Vyc2FpLmx0IC4gVGFpIHBhZGFyaXVzIGtvbmt1cnNhcyBidXMgbGFpa29tYXMgdcW+YmFpZ3R1LiBTdmVpa2luYW1lIGlyIGxpbmtpbWUgSnVtcyBnZXJvcyBkaWVub3MhXCI7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ3lvdSB3aW4gJyArIGNvbnRlc3RJZE5hbWUgKycsICcrIHN1Ym1pdGlvbklkKTtcclxuICAgICAgICBjb25zdCBtZXNzYWdlRm9yQWRtaW4gPSBcIktvbmt1cnPEhSBcIiArIGNvbnRlc3QubmFtZSArIFwibGFpbcSXam8gXCIgKyB0aGlzLnN1Ym1pdGlvbi5zdWJtaXRpb25BdXRob3Iubmlja05hbWUgKyBcIiBsYWlrdSBcIiArIERhdGUubm93KCk7IC8vIFRPRE8gcHJvcGVyIGRhdGUgZm9ybWF0XHJcbiAgICAgICAgdGhpcy5hcGlTZXJ2aWNlLnNlbGVjdFdpbm5lcihjb250ZXN0SWROYW1lLCBzdWJtaXRpb25JZCwgY29udGVzdC5pZCwgdGhpcy5zdWJtaXRpb24uc3VibWl0aW9uQXV0aG9yLl9pZCwgc3VibWl0aW9uKVxyXG4gICAgICAgICAgICAuc3Vic2NyaWJlKGRhdGEgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZGF0YSk7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnREVCVUcgVEhpcy5zdWJtaXRpb24nKTtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHRoaXMuc3VibWl0aW9uKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuaXNMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNvbnRlc3RzU2VydmljZS5jb250ZXN0V2lubmVyID0ge2NvbnRlc3RJZDogY29udGVzdElkTmFtZSwgc3VibWl0aW9uSWQ6IHN1Ym1pdGlvbklkLCBzdWJtaXRpb246IHRoaXMuc3VibWl0aW9uLCBjb250ZXN0OiBjb250ZXN0fTtcclxuICAgICAgICAgICAgICAgIHRoaXMuYXBpU2VydmljZS5zZW5kTWVzc2FnZSh0aGlzLnN1Ym1pdGlvbi5zdWJtaXRpb25BdXRob3Iubmlja05hbWUsIHRvcGljLCBtZXNzYWdlLCBcIkFkbWluXCIpIC8vLmFkZCBzZW5kZXIgcGFyYW0sIGZpZ3VyZSBvdXQgaG93IHRvIGNoYW5nZSBpdCBpbiBhcGkuc2VydmljZVxyXG4gICAgICAgICAgICAgICAgICAgIC5zdWJzY3JpYmUocmVzID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ1ppbnV0ZSBsYWltZXRvanVpIGlzc2l1c3RhJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubm90aWZpY2F0aW9uc1NlcnZpY2Uuc3VjY2VzcygnU3ZlaWtpbmFtZScsICdMYWltxJd0b2rEhSBpbmZvcm1hdm9tZSBhcGllIHBlcmdhbMSZJywge3RpbWVPdXQ6IDUwMDAsIHNob3dQcm9ncmVzc0JhcjogZmFsc2V9KVxyXG4gICAgICAgICAgICAgICAgICAgIH0sIGVycm9yID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5pc0xvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5ub3RpZmljYXRpb25zU2VydmljZS5lcnJvcihlcnJvci50aXRsZSwgZXJyb3IuZXJyb3IubWVzc2FnZSwge3RpbWVPdXQ6IDMwMDAsIHNob3dQcm9ncmVzc0JhcjogZmFsc2V9KVxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5hcGlTZXJ2aWNlLnNlbmRNZXNzYWdlKCdBZG1pbicsIHRvcGljLCBtZXNzYWdlRm9yQWRtaW4sICdBZG1pbicpXHJcbiAgICAgICAgICAgICAgICAgICAgLnN1YnNjcmliZShyZXMgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnWmludXRlIGFkbWluaXN0YXRvcml1aSBpc3NpdXN0YScpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0sIGVycm9yID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5pc0xvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5ub3RpZmljYXRpb25zU2VydmljZS5lcnJvcihlcnJvci50aXRsZSwgZXJyb3IuZXJyb3IubWVzc2FnZSwge3RpbWVPdXQ6IDMwMDAsIHNob3dQcm9ncmVzc0JhcjogZmFsc2V9KVxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIHRoaXMuYXBpU2VydmljZS5hZGRXaW5uaW5nQ29udGVzdChjb250ZXN0Ll9pZCwgdGhpcy5zdWJtaXRpb24uc3VibWl0aW9uQXV0aG9yLl9pZClcclxuICAgICAgICAgICAgICAgICAgICAvLyAuc3Vic2NyaWJlKGRhdGEgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICBjb25zb2xlLmxvZyhkYXRhKTtcclxuICAgICAgICAgICAgICAgICAgICAvLyB9LCBlcnJvciA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgIHRoaXMuaXNMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgIHRoaXMubm90aWZpY2F0aW9uc1NlcnZpY2UuZXJyb3IoZXJyb3IudGl0bGUsIGVycm9yLmVycm9yLm1lc3NhZ2UsIHt0aW1lT3V0OiAzMDAwLCBzaG93UHJvZ3Jlc3NCYXI6IGZhbHNlfSlcclxuICAgICAgICAgICAgICAgICAgICAvLyB9KTtcclxuICAgICAgICAgICAgICAgIHdpbmRvdy5zY3JvbGxUbygwLDApO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoWydudWdhbGV0b2phcyddLCB7cmVsYXRpdmVUbzogdGhpcy5yb3V0ZX0pO1xyXG4gICAgICAgICAgICB9LCBlcnJvciA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmlzTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5ub3RpZmljYXRpb25zU2VydmljZS5lcnJvcihlcnJvci50aXRsZSwgZXJyb3IuZXJyb3IubWVzc2FnZSwge3RpbWVPdXQ6IDMwMDAsIHNob3dQcm9ncmVzc0JhcjogZmFsc2V9KVxyXG4gICAgICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBnb0JhY2soKSB7XHJcbiAgICAgICAgd2luZG93LnNjcm9sbFRvKDAsMCk7XHJcbiAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoWycva29ua3Vyc2FpJywgdGhpcy5jb250ZXN0SWRdKTtcclxuICAgIH1cclxuXHJcbn0iXX0=
