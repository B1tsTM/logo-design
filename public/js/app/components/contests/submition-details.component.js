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
        this.percent = 0;
        this.filesToUpload = [];
        this.isLoading = false;
        this.options = {
            position: ["top", "right"]
        };
    }
    SubmitionDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (!this.contestsService.submitionDetails) {
            return this.route.params.subscribe(function (params) {
                _this.router.navigate(['/konkursai', params['id']]);
            });
        }
        this.isLoading = true;
        this.contestId = this.contestsService.submitionDetails.contestId;
        this.contest = this.contestsService.submitionDetails.contest;
        this.submition = this.contestsService.submitionDetails.submition;
        this.apiService.getContestSubmitions(this.contestId) //CURRENT FOCUS
            .subscribe(function (submitions) {
            _this.submitions = submitions;
            _this.isLoading = false;
        }, function (error) {
            _this.isLoading = false;
            _this.notificationsService.error(error.title, error.error.message, { timeOut: 3000, showProgressBar: false });
        });
    };
    SubmitionDetailsComponent.prototype.closed = function () {
    };
    SubmitionDetailsComponent.prototype.dismissed = function () {
        this.confirmationVisible = false;
    };
    SubmitionDetailsComponent.prototype.opened = function () {
    };
    SubmitionDetailsComponent.prototype.isContestPublisher = function (contestAuthorId) {
        var userId = sessionStorage.getItem('userId');
        return contestAuthorId == userId;
    };
    SubmitionDetailsComponent.prototype.onRating = function (obj) {
        var _this = this;
        this.isLoading = true;
        var submition = this.submitions.filter(function (item) { return item.submitionId == obj.submitionId; });
        if (!!submition && submition.length == 1) {
            submition[0].submitionRating = obj.rating;
            this.contestsService.updateSubmitionRating(this.contest, submition[0])
                .subscribe(function (data) {
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
        var message = "Sveikiname laimėjus konkursą '" + contest.name + "'! Su jumis artimiausiu metu susisieks konkurso autorius " + contest.publisher.nickName + ". Kai Jūs išsiųsite atitinkamus dizaino failus ir gausite už tai pinigus, Jums reikės tai patvirtinti atrašant į ši laišką, įtraukiant konkurso pavadinimą (bei paminėti iškilusias problemas, jei tokių buvo) arba susisiekti el. pašto adresu irmantas.liepis@inbox.lt . Tai padarius konkursas bus laikomas užbaigtu. Sveikiname ir linkime Jums geros dienos!";
        var messageForAdmin = "Konkursą " + contest.name + "laimėjo " + this.submition.submitionAuthor.nickName + " laiku " + Date.now(); // TODO proper date format
        this.apiService.selectWinner(contestIdName, submitionId, contest.id, this.submition.submitionAuthor._id, submition)
            .subscribe(function (data) {
            _this.isLoading = false;
            _this.contestsService.contestWinner = { contestId: contestIdName, submitionId: submitionId, submition: _this.submition, contest: contest };
            _this.apiService.sendMessage(_this.submition.submitionAuthor.nickName, topic, message, "Admin") //.add sender param, figure out how to change it in api.service
                .subscribe(function (res) {
                _this.notificationsService.success('Sveikiname', 'Laimėtoją informavome apie pergalę', { timeOut: 5000, showProgressBar: false });
            }, function (error) {
                _this.isLoading = false;
                _this.notificationsService.error(error.title, error.error.message, { timeOut: 3000, showProgressBar: false });
            });
            _this.apiService.sendMessage('Admin', topic, messageForAdmin, 'Admin')
                .subscribe(function (res) {
            }, function (error) {
                _this.isLoading = false;
                _this.notificationsService.error(error.title, error.error.message, { timeOut: 3000, showProgressBar: false });
            });
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
    SubmitionDetailsComponent.prototype.isDesignAuthor = function (designerId) {
        var userId = sessionStorage.getItem('userId');
        return designerId == userId;
    };
    SubmitionDetailsComponent.prototype.changeSubmition = function () {
        var _this = this;
        this.isLoading = true;
        if (this.filesToUpload.length > 1) {
            this.isLoading = false;
            return this.notificationsService.error('Klaida', 'Pasirinkite tik vieną failą', { timeOut: 3000 });
        }
        this.userId = sessionStorage.getItem('userId');
        this.makeFileRequest('http://localhost:3000/api/v1/submitions/change/' + this.contestId + '/' + this.userId + '/' + this.submition.submitionId, this.filesToUpload, "submition").then(function (result) {
            _this.submition.submitionUrl = result.files[0].filename;
            _this.isLoading = false;
            _this.filesToUpload = [];
            _this.notificationsService.success('Pakeista', 'Dizainas sėkmingai pakeistas', { timeOut: 3000, showProgressBar: false });
        }, function (error) {
            _this.isLoading = false;
            _this.notificationsService.error(error.title, error.error.message, { timeOut: 3000, showProgressBar: false });
        });
    };
    SubmitionDetailsComponent.prototype.fileChangeEvent = function (fileInput) {
        this.filesToUpload = fileInput.target.files;
    };
    SubmitionDetailsComponent.prototype.makeFileRequest = function (url, files, fileType) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var formData = new FormData();
            var xhr = new XMLHttpRequest();
            for (var i = 0; i < files.length; i++) {
                formData.append(fileType, files[i], files[i].name);
            }
            xhr.upload.addEventListener("progress", function (evt) { return _this.calculateUploadProgress(evt); }, false);
            xhr.onreadystatechange = function () {
                if (xhr.readyState == 4) {
                    if (xhr.status == 200) {
                        resolve(JSON.parse(xhr.response));
                    }
                    else {
                        reject(xhr.response);
                    }
                }
            };
            xhr.onerror = function (e) {
            };
            xhr.open("POST", url, true);
            xhr.send(formData);
        });
    };
    SubmitionDetailsComponent.prototype.calculateUploadProgress = function (evt) {
        if (evt.lengthComputable) {
            this.percent = Math.round(evt.loaded / evt.total * 100);
        }
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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvY29udGVzdHMvc3VibWl0aW9uLWRldGFpbHMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBd0MsZUFBZSxDQUFDLENBQUE7QUFDeEQsaUNBQWdDLGlDQUFpQyxDQUFDLENBQUE7QUFDbEUsc0JBQTZCLG9CQUFvQixDQUFDLENBQUE7QUFFbEQsNEJBQTJCLDRCQUE0QixDQUFDLENBQUE7QUFDeEQsdUJBQStDLGlCQUFpQixDQUFDLENBQUE7QUFDakUsdUNBQXFDLHdCQUF3QixDQUFDLENBQUE7QUFROUQ7SUFjRSxtQ0FBb0IsVUFBc0IsRUFDdEIsWUFBMEIsRUFDMUIsZUFBZ0MsRUFDaEMsS0FBcUIsRUFDckIsTUFBYyxFQUNkLG9CQUEwQztRQUwxQyxlQUFVLEdBQVYsVUFBVSxDQUFZO1FBQ3RCLGlCQUFZLEdBQVosWUFBWSxDQUFjO1FBQzFCLG9CQUFlLEdBQWYsZUFBZSxDQUFpQjtRQUNoQyxVQUFLLEdBQUwsS0FBSyxDQUFnQjtRQUNyQixXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQ2QseUJBQW9CLEdBQXBCLG9CQUFvQixDQUFzQjtRQWY1RCxlQUFVLEdBQVUsRUFBRSxDQUFDO1FBQ3ZCLHdCQUFtQixHQUFZLEtBQUssQ0FBQztRQUNyQyxZQUFPLEdBQVcsQ0FBQyxDQUFDO1FBQ3BCLGtCQUFhLEdBQUcsRUFBRSxDQUFDO1FBRW5CLGNBQVMsR0FBRyxLQUFLLENBQUM7UUFDWCxZQUFPLEdBQUc7WUFDZixRQUFRLEVBQUUsQ0FBQyxLQUFLLEVBQUMsT0FBTyxDQUFDO1NBQzFCLENBQUM7SUFPOEQsQ0FBQztJQUVuRSw0Q0FBUSxHQUFSO1FBQUEsaUJBb0JDO1FBbkJELEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLENBQUM7WUFDekMsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxV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QzNCLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLENBQUM7WUFDdkIsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxNQUFNLEdBQUcsR0FBRyxDQUFDLEtBQUssR0FBRyxHQUFHLENBQUMsQ0FBQztRQUN4RCxDQUFDO0lBQ0wsQ0FBQztJQTVLTDtRQUFDLGdCQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsUUFBUSxFQUFFLG1CQUFtQjtZQUM3QixXQUFXLEVBQUUsa0NBQWtDO1lBQy9DLFNBQVMsRUFBRSxDQUFDLGlDQUFpQyxDQUFDO1NBQy9DLENBQUM7O2lDQUFBO0lBeUtGLGdDQUFDO0FBQUQsQ0F4S0EsQUF3S0MsSUFBQTtBQXhLWSxpQ0FBeUIsNEJBd0tyQyxDQUFBIiwiZmlsZSI6ImNvbXBvbmVudHMvY29udGVzdHMvc3VibWl0aW9uLWRldGFpbHMuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0fSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQ29udGVzdHNTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvY29udGVzdHMuc2VydmljZSc7XHJcbmltcG9ydCB7IEVycm9yU2VydmljZSB9IGZyb20gJy4uLy4uL2Vycm9ycy9pbmRleCc7XHJcbmltcG9ydCB7IEF1dGhTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvYXV0aC5zZXJ2aWNlJztcclxuaW1wb3J0IHsgQXBpU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL2FwaS5zZXJ2aWNlJztcclxuaW1wb3J0IHsgQWN0aXZhdGVkUm91dGUsIFJvdXRlciwgUGFyYW1zIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuaW1wb3J0IHsgTm90aWZpY2F0aW9uc1NlcnZpY2UgfSBmcm9tICdhbmd1bGFyMi1ub3RpZmljYXRpb25zJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIG1vZHVsZUlkOiBtb2R1bGUuaWQsXHJcbiAgc2VsZWN0b3I6ICdzdWJtaXRpb24tZGV0YWlscycsXHJcbiAgdGVtcGxhdGVVcmw6ICdzdWJtaXRpb24tZGV0YWlscy5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJ3N1Ym1pdGlvbi1kZXRhaWxzLmNvbXBvbmVudC5jc3MnXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgU3VibWl0aW9uRGV0YWlsc0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgICBjb250ZXN0SWQ6IHN0cmluZztcclxuICAgIGNvbnRlc3Q6IGFueTtcclxuICAgIHN1Ym1pdGlvbjogYW55O1xyXG4gICAgc3VibWl0aW9uczogYW55W10gPSBbXTtcclxuICAgIGNvbmZpcm1hdGlvblZpc2libGU6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgIHBlcmNlbnQ6IG51bWJlciA9IDA7XHJcbiAgICBmaWxlc1RvVXBsb2FkID0gW107XHJcbiAgICB1c2VySWQ6IHN0cmluZztcclxuICAgIGlzTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgcHVibGljIG9wdGlvbnMgPSB7XHJcbiAgICAgIHBvc2l0aW9uOiBbXCJ0b3BcIixcInJpZ2h0XCJdXHJcbiAgICB9O1xyXG4gICAgXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBhcGlTZXJ2aWNlOiBBcGlTZXJ2aWNlLCBcclxuICAgICAgICAgICAgICBwcml2YXRlIGVycm9yU2VydmljZTogRXJyb3JTZXJ2aWNlLFxyXG4gICAgICAgICAgICAgIHByaXZhdGUgY29udGVzdHNTZXJ2aWNlOiBDb250ZXN0c1NlcnZpY2UsIFxyXG4gICAgICAgICAgICAgIHByaXZhdGUgcm91dGU6IEFjdGl2YXRlZFJvdXRlLFxyXG4gICAgICAgICAgICAgIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsXHJcbiAgICAgICAgICAgICAgcHJpdmF0ZSBub3RpZmljYXRpb25zU2VydmljZTogTm90aWZpY2F0aW9uc1NlcnZpY2UpIHsgfVxyXG5cclxuICBuZ09uSW5pdCgpIHsgIC8vIFRPRE8gYWRkIGNvbW1lbnRzIHRvIHVzZXJzJ3MgY29tbWVudHMgYXJyYXlcclxuICBpZiAoIXRoaXMuY29udGVzdHNTZXJ2aWNlLnN1Ym1pdGlvbkRldGFpbHMpIHtcclxuICAgICAgcmV0dXJuIHRoaXMucm91dGUucGFyYW1zLnN1YnNjcmliZShwYXJhbXMgPT4ge1xyXG4gICAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoWycva29ua3Vyc2FpJywgcGFyYW1zWydpZCddXSk7XHJcbiAgICAgIH0pO1xyXG4gIH1cclxuICAgICAgdGhpcy5pc0xvYWRpbmcgPSB0cnVlO1xyXG4gICAgICB0aGlzLmNvbnRlc3RJZCA9IHRoaXMuY29udGVzdHNTZXJ2aWNlLnN1Ym1pdGlvbkRldGFpbHMuY29udGVzdElkO1xyXG4gICAgICB0aGlzLmNvbnRlc3QgPSB0aGlzLmNvbnRlc3RzU2VydmljZS5zdWJtaXRpb25EZXRhaWxzLmNvbnRlc3Q7XHJcbiAgICAgIHRoaXMuc3VibWl0aW9uID0gdGhpcy5jb250ZXN0c1NlcnZpY2Uuc3VibWl0aW9uRGV0YWlscy5zdWJtaXRpb247XHJcblxyXG4gICAgICB0aGlzLmFwaVNlcnZpY2UuZ2V0Q29udGVzdFN1Ym1pdGlvbnModGhpcy5jb250ZXN0SWQpIC8vQ1VSUkVOVCBGT0NVU1xyXG4gICAgICAgIC5zdWJzY3JpYmUoc3VibWl0aW9ucyA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuc3VibWl0aW9ucyA9IHN1Ym1pdGlvbnM7XHJcbiAgICAgICAgICAgIHRoaXMuaXNMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBlcnJvciA9PiB7XHJcbiAgICAgICAgICB0aGlzLmlzTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgdGhpcy5ub3RpZmljYXRpb25zU2VydmljZS5lcnJvcihlcnJvci50aXRsZSwgZXJyb3IuZXJyb3IubWVzc2FnZSwge3RpbWVPdXQ6IDMwMDAsIHNob3dQcm9ncmVzc0JhcjogZmFsc2V9KVxyXG4gICAgICB9KTtcclxuICB9XHJcblxyXG4gICAgY2xvc2VkKCkge1xyXG4gICAgfVxyXG5cclxuICAgIGRpc21pc3NlZCgpIHtcclxuICAgICAgICB0aGlzLmNvbmZpcm1hdGlvblZpc2libGUgPSBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICBvcGVuZWQoKSB7XHJcbiAgICB9XHJcblxyXG4gICAgaXNDb250ZXN0UHVibGlzaGVyKGNvbnRlc3RBdXRob3JJZDogc3RyaW5nKSB7XHJcbiAgICAgICAgdmFyIHVzZXJJZCA9IHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oJ3VzZXJJZCcpO1xyXG4gICAgICAgIHJldHVybiBjb250ZXN0QXV0aG9ySWQgPT0gdXNlcklkO1xyXG4gICAgfVxyXG5cclxuICAgIG9uUmF0aW5nKG9iajogYW55KSB7XHJcbiAgICAgICAgdGhpcy5pc0xvYWRpbmcgPSB0cnVlO1xyXG4gICAgICAgIHZhciBzdWJtaXRpb24gPSB0aGlzLnN1Ym1pdGlvbnMuZmlsdGVyKChpdGVtOiBhbnkpID0+IGl0ZW0uc3VibWl0aW9uSWQgPT0gb2JqLnN1Ym1pdGlvbklkKTtcclxuICAgICAgICBpZiAoISFzdWJtaXRpb24gJiYgc3VibWl0aW9uLmxlbmd0aCA9PSAxKSB7XHJcbiAgICAgICAgICAgIHN1Ym1pdGlvblswXS5zdWJtaXRpb25SYXRpbmcgPSBvYmoucmF0aW5nO1xyXG4gICAgICAgICAgICB0aGlzLmNvbnRlc3RzU2VydmljZS51cGRhdGVTdWJtaXRpb25SYXRpbmcodGhpcy5jb250ZXN0LCBzdWJtaXRpb25bMF0pXHJcbiAgICAgICAgICAgICAgICAuc3Vic2NyaWJlKGRhdGEgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaXNMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5ub3RpZmljYXRpb25zU2VydmljZS5zdWNjZXNzKCdQYWtlaXN0YScsICdEaXphaW5vIHJlaXRpbmdhcyBwYWtlaXN0YXMnLCB7dGltZU91dDogMzAwMCwgc2hvd1Byb2dyZXNzQmFyOiBmYWxzZX0pXHJcbiAgICAgICAgICAgICAgICB9LCBlcnJvciA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5pc0xvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLm5vdGlmaWNhdGlvbnNTZXJ2aWNlLmVycm9yKGVycm9yLnRpdGxlLCBlcnJvci5lcnJvci5tZXNzYWdlLCB7dGltZU91dDogMzAwMCwgc2hvd1Byb2dyZXNzQmFyOiBmYWxzZX0pXHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBzZWxlY3RXaW5uZXIoY29udGVzdElkTmFtZSwgc3VibWl0aW9uSWQsIGNvbnRlc3QsIHN1Ym1pdGlvbikge1xyXG4gICAgICAgIHRoaXMuaXNMb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgICBjb25zdCB0b3BpYyA9IFwiUGVyZ2FsxJcga29ua3Vyc2UgXCIgKyBjb250ZXN0Lm5hbWU7XHJcbiAgICAgICAgY29uc3QgbWVzc2FnZSA9IFwiU3ZlaWtpbmFtZSBsYWltxJdqdXMga29ua3Vyc8SFICdcIiArIGNvbnRlc3QubmFtZSArIFwiJyEgU3UganVtaXMgYXJ0aW1pYXVzaXUgbWV0dSBzdXNpc2lla3Mga29ua3Vyc28gYXV0b3JpdXMgXCIgKyBjb250ZXN0LnB1Ymxpc2hlci5uaWNrTmFtZSArIFwiLiBLYWkgSsWrcyBpxaFzacWzc2l0ZSBhdGl0aW5rYW11cyBkaXphaW5vIGZhaWx1cyBpciBnYXVzaXRlIHXFviB0YWkgcGluaWd1cywgSnVtcyByZWlrxJdzIHRhaSBwYXR2aXJ0aW50aSBhdHJhxaFhbnQgxK8gxaFpIGxhacWha8SFLCDEr3RyYXVraWFudCBrb25rdXJzbyBwYXZhZGluaW3EhSAoYmVpIHBhbWluxJd0aSBpxaFraWx1c2lhcyBwcm9ibGVtYXMsIGplaSB0b2tpxbMgYnV2bykgYXJiYSBzdXNpc2lla3RpIGVsLiBwYcWhdG8gYWRyZXN1IGlybWFudGFzLmxpZXBpc0BpbmJveC5sdCAuIFRhaSBwYWRhcml1cyBrb25rdXJzYXMgYnVzIGxhaWtvbWFzIHXFvmJhaWd0dS4gU3ZlaWtpbmFtZSBpciBsaW5raW1lIEp1bXMgZ2Vyb3MgZGllbm9zIVwiO1xyXG4gICAgICAgIGNvbnN0IG1lc3NhZ2VGb3JBZG1pbiA9IFwiS29ua3Vyc8SFIFwiICsgY29udGVzdC5uYW1lICsgXCJsYWltxJdqbyBcIiArIHRoaXMuc3VibWl0aW9uLnN1Ym1pdGlvbkF1dGhvci5uaWNrTmFtZSArIFwiIGxhaWt1IFwiICsgRGF0ZS5ub3coKTsgLy8gVE9ETyBwcm9wZXIgZGF0ZSBmb3JtYXRcclxuICAgICAgICB0aGlzLmFwaVNlcnZpY2Uuc2VsZWN0V2lubmVyKGNvbnRlc3RJZE5hbWUsIHN1Ym1pdGlvbklkLCBjb250ZXN0LmlkLCB0aGlzLnN1Ym1pdGlvbi5zdWJtaXRpb25BdXRob3IuX2lkLCBzdWJtaXRpb24pXHJcbiAgICAgICAgICAgIC5zdWJzY3JpYmUoZGF0YSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmlzTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jb250ZXN0c1NlcnZpY2UuY29udGVzdFdpbm5lciA9IHtjb250ZXN0SWQ6IGNvbnRlc3RJZE5hbWUsIHN1Ym1pdGlvbklkOiBzdWJtaXRpb25JZCwgc3VibWl0aW9uOiB0aGlzLnN1Ym1pdGlvbiwgY29udGVzdDogY29udGVzdH07XHJcbiAgICAgICAgICAgICAgICB0aGlzLmFwaVNlcnZpY2Uuc2VuZE1lc3NhZ2UodGhpcy5zdWJtaXRpb24uc3VibWl0aW9uQXV0aG9yLm5pY2tOYW1lLCB0b3BpYywgbWVzc2FnZSwgXCJBZG1pblwiKSAvLy5hZGQgc2VuZGVyIHBhcmFtLCBmaWd1cmUgb3V0IGhvdyB0byBjaGFuZ2UgaXQgaW4gYXBpLnNlcnZpY2VcclxuICAgICAgICAgICAgICAgICAgICAuc3Vic2NyaWJlKHJlcyA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubm90aWZpY2F0aW9uc1NlcnZpY2Uuc3VjY2VzcygnU3ZlaWtpbmFtZScsICdMYWltxJd0b2rEhSBpbmZvcm1hdm9tZSBhcGllIHBlcmdhbMSZJywge3RpbWVPdXQ6IDUwMDAsIHNob3dQcm9ncmVzc0JhcjogZmFsc2V9KVxyXG4gICAgICAgICAgICAgICAgICAgIH0sIGVycm9yID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5pc0xvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5ub3RpZmljYXRpb25zU2VydmljZS5lcnJvcihlcnJvci50aXRsZSwgZXJyb3IuZXJyb3IubWVzc2FnZSwge3RpbWVPdXQ6IDMwMDAsIHNob3dQcm9ncmVzc0JhcjogZmFsc2V9KVxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5hcGlTZXJ2aWNlLnNlbmRNZXNzYWdlKCdBZG1pbicsIHRvcGljLCBtZXNzYWdlRm9yQWRtaW4sICdBZG1pbicpXHJcbiAgICAgICAgICAgICAgICAgICAgLnN1YnNjcmliZShyZXMgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIH0sIGVycm9yID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5pc0xvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5ub3RpZmljYXRpb25zU2VydmljZS5lcnJvcihlcnJvci50aXRsZSwgZXJyb3IuZXJyb3IubWVzc2FnZSwge3RpbWVPdXQ6IDMwMDAsIHNob3dQcm9ncmVzc0JhcjogZmFsc2V9KVxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgd2luZG93LnNjcm9sbFRvKDAsMCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJ251Z2FsZXRvamFzJ10sIHtyZWxhdGl2ZVRvOiB0aGlzLnJvdXRlfSk7XHJcbiAgICAgICAgICAgIH0sIGVycm9yID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuaXNMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm5vdGlmaWNhdGlvbnNTZXJ2aWNlLmVycm9yKGVycm9yLnRpdGxlLCBlcnJvci5lcnJvci5tZXNzYWdlLCB7dGltZU91dDogMzAwMCwgc2hvd1Byb2dyZXNzQmFyOiBmYWxzZX0pXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGdvQmFjaygpIHtcclxuICAgICAgICB3aW5kb3cuc2Nyb2xsVG8oMCwwKTtcclxuICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJy9rb25rdXJzYWknLCB0aGlzLmNvbnRlc3RJZF0pO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBpc0Rlc2lnbkF1dGhvcihkZXNpZ25lcklkKSB7XHJcbiAgICAgIHZhciB1c2VySWQgPSBzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKCd1c2VySWQnKTtcclxuICAgICAgICByZXR1cm4gZGVzaWduZXJJZCA9PSB1c2VySWQ7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIGNoYW5nZVN1Ym1pdGlvbigpIHtcclxuICAgICAgdGhpcy5pc0xvYWRpbmcgPSB0cnVlO1xyXG4gICAgICBpZiAodGhpcy5maWxlc1RvVXBsb2FkLmxlbmd0aCA+IDEpIHtcclxuICAgICAgICB0aGlzLmlzTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgIHJldHVybiB0aGlzLm5vdGlmaWNhdGlvbnNTZXJ2aWNlLmVycm9yKCdLbGFpZGEnLCAnUGFzaXJpbmtpdGUgdGlrIHZpZW7EhSBmYWlsxIUnLCB7dGltZU91dDogMzAwMH0pO1xyXG4gICAgICB9XHJcbiAgICAgICAgdGhpcy51c2VySWQgPSBzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKCd1c2VySWQnKTtcclxuICAgICAgICB0aGlzLm1ha2VGaWxlUmVxdWVzdCgnaHR0cDovL2xvY2FsaG9zdDozMDAwL2FwaS92MS9zdWJtaXRpb25zL2NoYW5nZS8nICsgdGhpcy5jb250ZXN0SWQgKyAnLycgK3RoaXMudXNlcklkICsgJy8nICsgdGhpcy5zdWJtaXRpb24uc3VibWl0aW9uSWQsdGhpcy5maWxlc1RvVXBsb2FkLCBcInN1Ym1pdGlvblwiKS50aGVuKChyZXN1bHQpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5zdWJtaXRpb24uc3VibWl0aW9uVXJsID0gcmVzdWx0LmZpbGVzWzBdLmZpbGVuYW1lO1xyXG4gICAgICAgICAgICB0aGlzLmlzTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICB0aGlzLmZpbGVzVG9VcGxvYWQgPSBbXTtcclxuICAgICAgICAgICAgdGhpcy5ub3RpZmljYXRpb25zU2VydmljZS5zdWNjZXNzKCdQYWtlaXN0YScsICdEaXphaW5hcyBzxJdrbWluZ2FpIHBha2Vpc3RhcycsIHt0aW1lT3V0OiAzMDAwLCBzaG93UHJvZ3Jlc3NCYXI6IGZhbHNlfSk7XHJcbiAgICAgICAgfSwgKGVycm9yKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuaXNMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHRoaXMubm90aWZpY2F0aW9uc1NlcnZpY2UuZXJyb3IoZXJyb3IudGl0bGUsIGVycm9yLmVycm9yLm1lc3NhZ2UsIHt0aW1lT3V0OiAzMDAwLCBzaG93UHJvZ3Jlc3NCYXI6IGZhbHNlfSlcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBmaWxlQ2hhbmdlRXZlbnQoZmlsZUlucHV0OiBhbnkpe1xyXG4gICAgICAgIHRoaXMuZmlsZXNUb1VwbG9hZCA9IDxBcnJheTxGaWxlPj4gZmlsZUlucHV0LnRhcmdldC5maWxlcztcclxuICAgIH1cclxuXHJcbiAgICBtYWtlRmlsZVJlcXVlc3QodXJsOiBzdHJpbmcsIGZpbGVzOiBBcnJheTxGaWxlPiwgZmlsZVR5cGU6IHN0cmluZykge1xyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgICAgIHZhciBmb3JtRGF0YTogYW55ID0gbmV3IEZvcm1EYXRhKCk7XHJcbiAgICAgICAgICAgIHZhciB4aHIgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcclxuICAgICAgICAgICAgZm9yKHZhciBpID0gMDsgaSA8IGZpbGVzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICBmb3JtRGF0YS5hcHBlbmQoZmlsZVR5cGUsIGZpbGVzW2ldLCBmaWxlc1tpXS5uYW1lKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB4aHIudXBsb2FkLmFkZEV2ZW50TGlzdGVuZXIoXCJwcm9ncmVzc1wiLCAoZXZ0KSA9PiB0aGlzLmNhbGN1bGF0ZVVwbG9hZFByb2dyZXNzKGV2dCksIGZhbHNlKTsgXHJcbiAgICAgICAgICAgIHhoci5vbnJlYWR5c3RhdGVjaGFuZ2UgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoeGhyLnJlYWR5U3RhdGUgPT0gNCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICh4aHIuc3RhdHVzID09IDIwMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlKEpTT04ucGFyc2UoeGhyLnJlc3BvbnNlKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVqZWN0KHhoci5yZXNwb25zZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHhoci5vbmVycm9yID0gZnVuY3Rpb24oZSkge1xyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICB4aHIub3BlbihcIlBPU1RcIiwgdXJsLCB0cnVlKTtcclxuICAgICAgICAgICAgeGhyLnNlbmQoZm9ybURhdGEpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGNhbGN1bGF0ZVVwbG9hZFByb2dyZXNzKGV2dCkge1xyXG4gICAgaWYgKGV2dC5sZW5ndGhDb21wdXRhYmxlKSB7XHJcbiAgICAgICAgdGhpcy5wZXJjZW50ID0gTWF0aC5yb3VuZChldnQubG9hZGVkIC8gZXZ0LnRvdGFsICogMTAwKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG59Il19
