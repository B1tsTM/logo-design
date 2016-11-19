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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvY29udGVzdHMvc3VibWl0aW9uLWRldGFpbHMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBd0MsZUFBZSxDQUFDLENBQUE7QUFDeEQsaUNBQWdDLGlDQUFpQyxDQUFDLENBQUE7QUFDbEUsc0JBQTZCLG9CQUFvQixDQUFDLENBQUE7QUFFbEQsNEJBQTJCLDRCQUE0QixDQUFDLENBQUE7QUFDeEQsdUJBQStDLGlCQUFpQixDQUFDLENBQUE7QUFDakUsdUNBQXFDLHdCQUF3QixDQUFDLENBQUE7QUFROUQ7SUFXRSxtQ0FBb0IsVUFBc0IsRUFDdEIsWUFBMEIsRUFDMUIsZUFBZ0MsRUFDaEMsS0FBcUIsRUFDckIsTUFBYyxFQUNkLG9CQUEwQztRQUwxQyxlQUFVLEdBQVYsVUFBVSxDQUFZO1FBQ3RCLGlCQUFZLEdBQVosWUFBWSxDQUFjO1FBQzFCLG9CQUFlLEdBQWYsZUFBZSxDQUFpQjtRQUNoQyxVQUFLLEdBQUwsS0FBSyxDQUFnQjtRQUNyQixXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQ2QseUJBQW9CLEdBQXBCLG9CQUFvQixDQUFzQjtRQVo1RCxlQUFVLEdBQVUsRUFBRSxDQUFDO1FBQ3ZCLHdCQUFtQixHQUFZLEtBQUssQ0FBQztRQUNyQyxjQUFTLEdBQUcsS0FBSyxDQUFDO1FBQ1gsWUFBTyxHQUFHO1lBQ2YsUUFBUSxFQUFFLENBQUMsS0FBSyxFQUFDLE9BQU8sQ0FBQztTQUMxQixDQUFDO0lBTzhELENBQUM7SUFFbkUsNENBQVEsR0FBUjtRQUFBLGlCQXFDQztRQXBDRyxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQztRQUN0QixPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztRQUNuRCxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxlQUFlLENBQUMsZ0JBQWdCLENBQUMsU0FBUyxDQUFDO1FBQ2pFLElBQUks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RSxVQUFBLEtBQUs7WUFDSixLQUFJLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQztZQUN2QixLQUFJLENBQUMsb0JBQW9CLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxLQUFLLEVBQUUsS0FBSyxDQUFDLEtBQUssQ0FBQyxPQUFPLEVBQUUsRUFBQyxPQUFPLEVBQUUsSUFBSSxFQUFFLGVBQWUsRUFBRSxLQUFLLEVBQUMsQ0FBQyxDQUFBO1FBQzlHLENBQUMsQ0FBQyxDQUFDO0lBQ1gsQ0FBQztJQUVELDBDQUFNLEdBQU47UUFDSSxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsRUFBQyxDQUFDLENBQUMsQ0FBQztRQUNyQixJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLFlBQVksRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQztJQUN6RCxDQUFDO0lBcEpMO1FBQUMsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixRQUFRLEVBQUUsbUJBQW1CO1lBQzdCLFdBQVcsRUFBRSxrQ0FBa0M7WUFDL0MsU0FBUyxFQUFFLENBQUMsaUNBQWlDLENBQUM7U0FDL0MsQ0FBQzs7aUNBQUE7SUFpSkYsZ0NBQUM7QUFBRCxDQWhKQSxBQWdKQyxJQUFBO0FBaEpZLGlDQUF5Qiw0QkFnSnJDLENBQUEiLCJmaWxlIjoiY29tcG9uZW50cy9jb250ZXN0cy9zdWJtaXRpb24tZGV0YWlscy5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDb250ZXN0c1NlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9jb250ZXN0cy5zZXJ2aWNlJztcclxuaW1wb3J0IHsgRXJyb3JTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vZXJyb3JzL2luZGV4JztcclxuaW1wb3J0IHsgQXV0aFNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9hdXRoLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBBcGlTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvYXBpLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBBY3RpdmF0ZWRSb3V0ZSwgUm91dGVyLCBQYXJhbXMgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5pbXBvcnQgeyBOb3RpZmljYXRpb25zU2VydmljZSB9IGZyb20gJ2FuZ3VsYXIyLW5vdGlmaWNhdGlvbnMnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcclxuICBzZWxlY3RvcjogJ3N1Ym1pdGlvbi1kZXRhaWxzJyxcclxuICB0ZW1wbGF0ZVVybDogJ3N1Ym1pdGlvbi1kZXRhaWxzLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnc3VibWl0aW9uLWRldGFpbHMuY29tcG9uZW50LmNzcyddXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBTdWJtaXRpb25EZXRhaWxzQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuICAgIGNvbnRlc3RJZDogc3RyaW5nO1xyXG4gICAgY29udGVzdDogYW55O1xyXG4gICAgc3VibWl0aW9uOiBhbnk7XHJcbiAgICBzdWJtaXRpb25zOiBhbnlbXSA9IFtdO1xyXG4gICAgY29uZmlybWF0aW9uVmlzaWJsZTogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgaXNMb2FkaW5nID0gZmFsc2U7XHJcbiAgICBwdWJsaWMgb3B0aW9ucyA9IHtcclxuICAgICAgcG9zaXRpb246IFtcInRvcFwiLFwicmlnaHRcIl1cclxuICAgIH07XHJcbiAgICBcclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGFwaVNlcnZpY2U6IEFwaVNlcnZpY2UsIFxyXG4gICAgICAgICAgICAgIHByaXZhdGUgZXJyb3JTZXJ2aWNlOiBFcnJvclNlcnZpY2UsXHJcbiAgICAgICAgICAgICAgcHJpdmF0ZSBjb250ZXN0c1NlcnZpY2U6IENvbnRlc3RzU2VydmljZSwgXHJcbiAgICAgICAgICAgICAgcHJpdmF0ZSByb3V0ZTogQWN0aXZhdGVkUm91dGUsXHJcbiAgICAgICAgICAgICAgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlcixcclxuICAgICAgICAgICAgICBwcml2YXRlIG5vdGlmaWNhdGlvbnNTZXJ2aWNlOiBOb3RpZmljYXRpb25zU2VydmljZSkgeyB9XHJcblxyXG4gIG5nT25Jbml0KCkgeyAgLy8gVE9ETyBhZGQgY29tbWVudHMgdG8gdXNlcnMncyBjb21tZW50cyBhcnJheVxyXG4gICAgICB0aGlzLmlzTG9hZGluZyA9IHRydWU7XHJcbiAgICAgIGNvbnNvbGUubG9nKHRoaXMuY29udGVzdHNTZXJ2aWNlLnN1Ym1pdGlvbkRldGFpbHMpO1xyXG4gICAgICB0aGlzLmNvbnRlc3RJZCA9IHRoaXMuY29udGVzdHNTZXJ2aWNlLnN1Ym1pdGlvbkRldGFpbHMuY29udGVzdElkO1xyXG4gICAgICB0aGlzLmNvbnRlc3QgPSB0aGlzLmNvbnRlc3RzU2VydmljZS5zdWJtaXRpb25EZXRhaWxzLmNvbnRlc3Q7XHJcbiAgICAgIHRoaXMuc3VibWl0aW9uID0gdGhpcy5jb250ZXN0c1NlcnZpY2Uuc3VibWl0aW9uRGV0YWlscy5zdWJtaXRpb247XHJcbiAgICAgIGNvbnNvbGUubG9nKCdERUJVRyBUSGlzLnN1Ym1pdGlvbicpO1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2codGhpcy5zdWJtaXRpb24uc3VibWl0aW9uQXV0aG9yLl9pZCk7XHJcbiAgICAvLyB0aGlzLnJvdXRlLnBhcmFtcy5zdWJzY3JpYmUoKHBhcmFtczogUGFyYW1zKSA9PiB7XHJcbiAgICAvLyAgIHRoaXMuY29udGVzdElkID0gcGFyYW1zWydpZCddO1xyXG4gICAgLy8gICBjb25zb2xlLmxvZygnbmdPbkluaXQgcGFyYW1zIGlkIChjb250ZXN0SWQpJyk7XHJcbiAgICAvLyAgIGNvbnNvbGUubG9nKHRoaXMuY29udGVzdElkKTtcclxuICAgIC8vIH0pO1xyXG4gICAgdGhpcy5hcGlTZXJ2aWNlLmdldENvbnRlc3RTdWJtaXRpb25zKHRoaXMuY29udGVzdElkKSAvL0NVUlJFTlQgRk9DVVNcclxuICAgICAgICAuc3Vic2NyaWJlKHN1Ym1pdGlvbnMgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnc3VibWl0aW9ucyBmcm9tIGFwaXNlcnZpY2UgaW4gc3VibWl0aW9uLWRldGFpbHMnKTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coc3VibWl0aW9ucyk7XHJcbiAgICAgICAgICAgIHRoaXMuc3VibWl0aW9ucyA9IHN1Ym1pdGlvbnM7XHJcbiAgICAgICAgICAgIHRoaXMuaXNMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHRoaXMuc3VibWl0aW9ucyk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBlcnJvciA9PiB7XHJcbiAgICAgICAgICAvL3RoaXMuZXJyb3JTZXJ2aWNlLmhhbmRsZUVycm9yKGVycm9yKTtcclxuICAgICAgICAgIHRoaXMuaXNMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICB0aGlzLm5vdGlmaWNhdGlvbnNTZXJ2aWNlLmVycm9yKGVycm9yLnRpdGxlLCBlcnJvci5lcnJvci5tZXNzYWdlLCB7dGltZU91dDogMzAwMCwgc2hvd1Byb2dyZXNzQmFyOiBmYWxzZX0pXHJcbiAgICAgIH0pO1xyXG4gICAgLy8gICBjb25zb2xlLmxvZygnbmdPbkluaXQgc3VibWl0aW9uIGRldGFpbHMgdGhpcy5zdWJtaXRpb25TJyk7XHJcbiAgICAvLyAgIGNvbnNvbGUubG9nKHRoaXMuc3VibWl0aW9ucyk7XHJcbiAgICAvLyAgIHRoaXMuc3VibWl0aW9uID0gdGhpcy5zdWJtaXRpb25zLmZpbHRlcigoc3ViKSA9PiB7XHJcbiAgICAvLyAgICAgY29uc29sZS5sb2coJ3N1Yi5zdWJtaXRpb25VcmwnKTtcclxuICAgIC8vICAgICBjb25zb2xlLmxvZyhzdWIuc3VibWl0aW9uVXJsKTtcclxuICAgIC8vICAgICBjb25zb2xlLmxvZygndGhpcy5zdWJtaXRpb25VcmwnKTtcclxuICAgIC8vICAgICBjb25zb2xlLmxvZyh0aGlzLnN1Ym1pdGlvblVybCk7XHJcbiAgICAvLyAgICAgcmV0dXJuIHN1Yi5zdWJtaXRpb25VcmwgPT0gdGhpcy5zdWJtaXRpb25VcmxcclxuICAgIC8vICAgfSk7XHJcbiAgICAvLyAgIGNvbnNvbGUubG9nKCduZ09uSW5pdCBzdWJtaXRpb24gZGV0YWlscyB0aGlzLnN1Ym1pdGlvbicpO1xyXG4gICAgLy8gICBjb25zb2xlLmxvZyh0aGlzLnN1Ym1pdGlvbik7XHJcbiAgfVxyXG5cclxuICAgIGNsb3NlZCgpIHtcclxuICAgICAgICBjb25zb2xlLmxvZygnTW9kYWwgY2xvc2VkJyk7XHJcbiAgICB9XHJcblxyXG4gICAgZGlzbWlzc2VkKCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdNb2RhbCBkaXNtaXNzZWQnKTtcclxuICAgICAgICB0aGlzLmNvbmZpcm1hdGlvblZpc2libGUgPSBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICBvcGVuZWQoKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ01vZGFsIG9wZW5lZCcpO1xyXG4gICAgfVxyXG5cclxuICAgIGlzQ29udGVzdFB1Ymxpc2hlcihjb250ZXN0QXV0aG9ySWQ6IHN0cmluZykge1xyXG4gICAgICAgIHZhciB1c2VySWQgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndXNlcklkJyk7XHJcbiAgICAgICAgcmV0dXJuIGNvbnRlc3RBdXRob3JJZCA9PSB1c2VySWQ7XHJcbiAgICB9XHJcblxyXG4gICAgb25SYXRpbmcob2JqOiBhbnkpIHtcclxuICAgICAgICB0aGlzLmlzTG9hZGluZyA9IHRydWU7XHJcbiAgICAgICAgdmFyIHN1Ym1pdGlvbiA9IHRoaXMuc3VibWl0aW9ucy5maWx0ZXIoKGl0ZW06IGFueSkgPT4gaXRlbS5zdWJtaXRpb25JZCA9PSBvYmouc3VibWl0aW9uSWQpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdvblJhdGluZygpIHN1Ym1pdGlvbiBhZnRlciBmaWx0ZXInKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhzdWJtaXRpb24pO1xyXG4gICAgICAgIGlmICghIXN1Ym1pdGlvbiAmJiBzdWJtaXRpb24ubGVuZ3RoID09IDEpIHtcclxuICAgICAgICAgICAgLy90aGlzLnN1Ym1pdGlvbnNbMF0uc3VibWl0aW9uUmF0aW5nID0gb2JqLnJhdGluZztcclxuICAgICAgICAgICAgc3VibWl0aW9uWzBdLnN1Ym1pdGlvblJhdGluZyA9IG9iai5yYXRpbmc7XHJcbiAgICAgICAgICAgIHRoaXMuY29udGVzdHNTZXJ2aWNlLnVwZGF0ZVN1Ym1pdGlvblJhdGluZyh0aGlzLmNvbnRlc3QsIHN1Ym1pdGlvblswXSlcclxuICAgICAgICAgICAgICAgIC5zdWJzY3JpYmUoZGF0YSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ1JhdGluZyBjaGFuZ2VkJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZGF0YSk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5pc0xvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLm5vdGlmaWNhdGlvbnNTZXJ2aWNlLnN1Y2Nlc3MoJ1Bha2Vpc3RhJywgJ0RpemFpbm8gcmVpdGluZ2FzIHBha2Vpc3RhcycsIHt0aW1lT3V0OiAzMDAwLCBzaG93UHJvZ3Jlc3NCYXI6IGZhbHNlfSlcclxuICAgICAgICAgICAgICAgIH0sIGVycm9yID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmlzTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubm90aWZpY2F0aW9uc1NlcnZpY2UuZXJyb3IoZXJyb3IudGl0bGUsIGVycm9yLmVycm9yLm1lc3NhZ2UsIHt0aW1lT3V0OiAzMDAwLCBzaG93UHJvZ3Jlc3NCYXI6IGZhbHNlfSlcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHNlbGVjdFdpbm5lcihjb250ZXN0SWROYW1lLCBzdWJtaXRpb25JZCwgY29udGVzdCwgc3VibWl0aW9uKSB7XHJcbiAgICAgICAgdGhpcy5pc0xvYWRpbmcgPSB0cnVlO1xyXG4gICAgICAgIGNvbnN0IHRvcGljID0gXCJQZXJnYWzElyBrb25rdXJzZSBcIiArIGNvbnRlc3QubmFtZTtcclxuICAgICAgICBjb25zdCBtZXNzYWdlID0gXCJTdmVpa2luYW1lIGxhaW3El2p1cyBrb25rdXJzxIUgJ1wiICsgY29udGVzdC5uYW1lICsgXCInISBTdSBqdW1pcyBhcnRpbWlhdXNpdSBtZXR1IHN1c2lzaWVrcyBrb25rdXJzbyBhdXRvcml1cyBcIiArIGNvbnRlc3QucHVibGlzaGVyLm5pY2tOYW1lICsgXCIuIEthaSBKxatzIGnFoXNpxbNzaXRlIGF0aXRpbmthbXVzIGRpemFpbm8gZmFpbHVzIGlyIGdhdXNpdGUgdcW+IHRhaSBwaW5pZ3VzLCBKdW1zIHJlaWvEl3MgdGFpIHBhdHZpcnRpbnRpIGF0cmHFoWFudCDEryDFoWkgbGFpxaFrxIUsIMSvdHJhdWtpYW50IGtvbmt1cnNvIHBhdmFkaW5pbcSFIChiZWkgcGFtaW7El3RpIGnFoWtpbHVzaWFzIHByb2JsZW1hcywgamVpIHRva2nFsyBidXZvKSBhcmJhIHN1c2lzaWVrdGkgZWwuIHBhxaF0byBhZHJlc3UgaW5mb0BkaXphaW5va29ua3Vyc2FpLmx0IC4gVGFpIHBhZGFyaXVzIGtvbmt1cnNhcyBidXMgbGFpa29tYXMgdcW+YmFpZ3R1LiBTdmVpa2luYW1lIGlyIGxpbmtpbWUgSnVtcyBnZXJvcyBkaWVub3MhXCI7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ3lvdSB3aW4gJyArIGNvbnRlc3RJZE5hbWUgKycsICcrIHN1Ym1pdGlvbklkKTtcclxuICAgICAgICBjb25zdCBtZXNzYWdlRm9yQWRtaW4gPSBcIktvbmt1cnPEhSBcIiArIGNvbnRlc3QubmFtZSArIFwibGFpbcSXam8gXCIgKyB0aGlzLnN1Ym1pdGlvbi5zdWJtaXRpb25BdXRob3Iubmlja05hbWUgKyBcIiBsYWlrdSBcIiArIERhdGUubm93KCk7IC8vIFRPRE8gcHJvcGVyIGRhdGUgZm9ybWF0XHJcbiAgICAgICAgdGhpcy5hcGlTZXJ2aWNlLnNlbGVjdFdpbm5lcihjb250ZXN0SWROYW1lLCBzdWJtaXRpb25JZCwgY29udGVzdC5pZCwgdGhpcy5zdWJtaXRpb24uc3VibWl0aW9uQXV0aG9yLl9pZCwgc3VibWl0aW9uKVxyXG4gICAgICAgICAgICAuc3Vic2NyaWJlKGRhdGEgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZGF0YSk7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnREVCVUcgVEhpcy5zdWJtaXRpb24nKTtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHRoaXMuc3VibWl0aW9uKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuaXNMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNvbnRlc3RzU2VydmljZS5jb250ZXN0V2lubmVyID0ge2NvbnRlc3RJZDogY29udGVzdElkTmFtZSwgc3VibWl0aW9uSWQ6IHN1Ym1pdGlvbklkLCBzdWJtaXRpb246IHRoaXMuc3VibWl0aW9uLCBjb250ZXN0OiBjb250ZXN0fTtcclxuICAgICAgICAgICAgICAgIHRoaXMuYXBpU2VydmljZS5zZW5kTWVzc2FnZSh0aGlzLnN1Ym1pdGlvbi5zdWJtaXRpb25BdXRob3Iubmlja05hbWUsIHRvcGljLCBtZXNzYWdlLCBcIkFkbWluXCIpIC8vLmFkZCBzZW5kZXIgcGFyYW0sIGZpZ3VyZSBvdXQgaG93IHRvIGNoYW5nZSBpdCBpbiBhcGkuc2VydmljZVxyXG4gICAgICAgICAgICAgICAgICAgIC5zdWJzY3JpYmUocmVzID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ1ppbnV0ZSBsYWltZXRvanVpIGlzc2l1c3RhJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubm90aWZpY2F0aW9uc1NlcnZpY2Uuc3VjY2VzcygnU3ZlaWtpbmFtZScsICdMYWltxJd0b2rEhSBpbmZvcm1hdm9tZSBhcGllIHBlcmdhbMSZJywge3RpbWVPdXQ6IDUwMDAsIHNob3dQcm9ncmVzc0JhcjogZmFsc2V9KVxyXG4gICAgICAgICAgICAgICAgICAgIH0sIGVycm9yID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5pc0xvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5ub3RpZmljYXRpb25zU2VydmljZS5lcnJvcihlcnJvci50aXRsZSwgZXJyb3IuZXJyb3IubWVzc2FnZSwge3RpbWVPdXQ6IDMwMDAsIHNob3dQcm9ncmVzc0JhcjogZmFsc2V9KVxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5hcGlTZXJ2aWNlLnNlbmRNZXNzYWdlKCdBZG1pbicsIHRvcGljLCBtZXNzYWdlRm9yQWRtaW4sICdBZG1pbicpXHJcbiAgICAgICAgICAgICAgICAgICAgLnN1YnNjcmliZShyZXMgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnWmludXRlIGFkbWluaXN0YXRvcml1aSBpc3NpdXN0YScpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0sIGVycm9yID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5pc0xvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5ub3RpZmljYXRpb25zU2VydmljZS5lcnJvcihlcnJvci50aXRsZSwgZXJyb3IuZXJyb3IubWVzc2FnZSwge3RpbWVPdXQ6IDMwMDAsIHNob3dQcm9ncmVzc0JhcjogZmFsc2V9KVxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIHRoaXMuYXBpU2VydmljZS5hZGRXaW5uaW5nQ29udGVzdChjb250ZXN0Ll9pZCwgdGhpcy5zdWJtaXRpb24uc3VibWl0aW9uQXV0aG9yLl9pZClcclxuICAgICAgICAgICAgICAgICAgICAvLyAuc3Vic2NyaWJlKGRhdGEgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICBjb25zb2xlLmxvZyhkYXRhKTtcclxuICAgICAgICAgICAgICAgICAgICAvLyB9LCBlcnJvciA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgIHRoaXMuaXNMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgIHRoaXMubm90aWZpY2F0aW9uc1NlcnZpY2UuZXJyb3IoZXJyb3IudGl0bGUsIGVycm9yLmVycm9yLm1lc3NhZ2UsIHt0aW1lT3V0OiAzMDAwLCBzaG93UHJvZ3Jlc3NCYXI6IGZhbHNlfSlcclxuICAgICAgICAgICAgICAgICAgICAvLyB9KTtcclxuICAgICAgICAgICAgICAgIHdpbmRvdy5zY3JvbGxUbygwLDApO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoWydudWdhbGV0b2phcyddLCB7cmVsYXRpdmVUbzogdGhpcy5yb3V0ZX0pO1xyXG4gICAgICAgICAgICB9LCBlcnJvciA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmlzTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5ub3RpZmljYXRpb25zU2VydmljZS5lcnJvcihlcnJvci50aXRsZSwgZXJyb3IuZXJyb3IubWVzc2FnZSwge3RpbWVPdXQ6IDMwMDAsIHNob3dQcm9ncmVzc0JhcjogZmFsc2V9KVxyXG4gICAgICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBnb0JhY2soKSB7XHJcbiAgICAgICAgd2luZG93LnNjcm9sbFRvKDAsMCk7XHJcbiAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoWycva29ua3Vyc2FpJywgdGhpcy5jb250ZXN0SWRdKTtcclxuICAgIH1cclxuXHJcbn0iXX0=
