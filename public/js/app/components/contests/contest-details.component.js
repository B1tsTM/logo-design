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
var ContestDetailsComponent = (function () {
    function ContestDetailsComponent(route, router, contestsService, errorService, authService, apiService, notificationsService) {
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
        this.isLoading = false;
        this.options = {
            position: ["top", "right"]
        };
    }
    ContestDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.isLoading = true;
        moment.locale('lt-lt');
        //   console.log('LOCALE');
        //   console.log(locale);
        //this.momentDate = moment().format('YYYY MMMM Do');
        this.momentDate = moment().add(3, 'days').calendar();
        this.route.params.subscribe(function (params) {
            _this.contestId = params['id'];
        });
        this.contestsService.getIndividualContest(this.contestId)
            .subscribe(function (contest) {
            _this.contest = contest;
            console.log('contest-details.component.ts this.contest');
            console.log(_this.contest);
        }, function (error) {
            //this.errorService.handleError(error);
            _this.isLoading = false;
            _this.notificationsService.error(error.title, error.error.message, { timeOut: 3000, showProgressBar: false });
        });
        this.apiService.getContestSubmitions(this.contestId) //CURRENT FOCUS
            .subscribe(function (submitions) {
            console.log('submitions from apiservice in contest-details');
            console.log(submitions);
            _this.submitions = submitions;
            _this.isLoading = false;
            console.log(_this.submitions);
        }, function (error) {
            //this.errorService.handleError(error);
            _this.isLoading = false;
            _this.notificationsService.error(error.title, error.error.message, { timeOut: 3000, showProgressBar: false });
        });
        if (this.isLoggedIn()) {
            this.apiService.getMySubmitions(this.contestId)
                .subscribe(function (mySubmitions) {
                console.log('MySubmitions from apiservice in contest-details');
                console.log(mySubmitions);
                _this.mySubmitions = mySubmitions;
                console.log('this.mySubmitions');
                console.log(_this.mySubmitions);
            }, function (error) {
                //this.errorService.handleError(error);
                _this.isLoading = false;
                //this.notificationsService.error('Įvyko klaida', 'Nepavyko gauti konkurso dizainų', {timeOut: 3000, showProgressBar: false})
            });
        }
        this.apiService.getWinnerSubmition(this.contestId)
            .subscribe(function (data) {
            console.log(data);
            if (data.submitionUrl) {
                _this.winnerSubmition = data;
            }
            console.log('WINNNNNNNNNNER');
            console.log(_this.winnerSubmition);
        }, function (error) {
            _this.isLoading = false;
            _this.notificationsService.info(error.title, error.error.message, { timeOut: 3000, showProgressBar: false });
        });
    }; //End of ngOnInit
    ContestDetailsComponent.prototype.isClient = function () {
        return this.authService.isClient();
    };
    ContestDetailsComponent.prototype.isDesigner = function () {
        return this.authService.isDesigner();
    };
    ContestDetailsComponent.prototype.isLoggedIn = function () {
        return this.authService.isLoggedIn();
    };
    //FILE UPLOAD STUFF
    ContestDetailsComponent.prototype.upload = function () {
        var _this = this;
        this.isLoading = true;
        this.userId = localStorage.getItem('userId');
        this.makeFileRequest('http://localhost:3000/api/v1/submitions/' + this.contestId + '/' + this.userId, this.filesToUpload).then(function (result) {
            console.log(result);
            //this.filesToUpload = [];
        }, function (error) {
            _this.isLoading = false;
            _this.notificationsService.error(error.title, error.error.message, { timeOut: 3000, showProgressBar: false });
        });
        this.makeFileRequest('http://localhost:3000/api/v1/submitions/gallery/' + this.contestId + '/' + this.userId, this.filesToUpload).then(function (result) {
            console.log(result);
            _this.filesToUpload = [];
            //reload submitions
            _this.apiService.getContestSubmitions(_this.contestId) //CURRENT FOCUS
                .subscribe(function (submitions) {
                console.log('submitions from apiservice in contest-details');
                console.log(submitions);
                _this.submitions = submitions;
                _this.isLoading = false;
                console.log(_this.submitions);
                _this.notificationsService.success('Dizainai įkelti', 'Dizainai įkelti sėkmingai', { timeOut: 3000, showProgressBar: false });
            }, function (error) {
                //this.errorService.handleError(error);
                _this.isLoading = false;
                _this.notificationsService.error(error.title, error.error.message, { timeOut: 3000, showProgressBar: false });
            });
            //end of reloading submitions
            // --------------------------
            //reloading my submitions
            _this.apiService.getMySubmitions(_this.contestId)
                .subscribe(function (mySubmitions) {
                console.log('MySubmitions from apiservice in contest-details');
                console.log(mySubmitions);
                _this.mySubmitions = mySubmitions;
                console.log('this.mySubmitions');
                console.log(_this.mySubmitions);
            }, function (error) {
                //this.errorService.handleError(error);
                _this.isLoading = false;
                _this.notificationsService.error(error.title, error.error.message, { timeOut: 3000, showProgressBar: false });
            });
            //end of reloading my submitions
        }, function (error) {
            _this.isLoading = false;
            _this.notificationsService.error(error.title, error.error.message, { timeOut: 3000, showProgressBar: false });
        });
    };
    ContestDetailsComponent.prototype.fileChangeEvent = function (fileInput) {
        this.filesToUpload = fileInput.target.files;
        //this.filesToUpload.forEach((file, i) => this.filesToUpload.push(fileInput.target.files[i]));
        console.log(fileInput.target.files);
        //let arr = Array.from(fileInput.target.files); //convert File Object to Array to push it
        //this.filesToUpload.push(arr[0]); //use this if you use multiple single file inputs
        console.log(this.filesToUpload);
    };
    ContestDetailsComponent.prototype.makeFileRequest = function (url, files) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var formData = new FormData();
            var xhr = new XMLHttpRequest();
            for (var i = 0; i < files.length; i++) {
                formData.append("submition", files[i], files[i].name);
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
                console.log('Klaida įkeliant failus');
                console.log(e);
            };
            xhr.open("POST", url, true);
            xhr.send(formData);
        });
    };
    ContestDetailsComponent.prototype.calculateUploadProgress = function (evt) {
        if (evt.lengthComputable) {
            this.percent = Math.round(evt.loaded / evt.total * 100);
            console.log("PERCENT : ", this.percent + "%");
        }
        //END OF FILE UPLOAD STUFF
    };
    ContestDetailsComponent.prototype.onRating = function (obj) {
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
                if (submition[0].status == 'Nugalėtojas') {
                    _this.winnerSubmition.submitionRating = data.obj.submitions[obj.submitionId - 1].submitionRating;
                }
                _this.isLoading = false;
                _this.notificationsService.success('Atnaujinta', 'Reitingas sėkmingai pakeistas', { timeOut: 3000, showProgressBar: false });
            }, function (error) {
                _this.isLoading = false;
                _this.notificationsService.error(error.title, error.error.message, { timeOut: 3000, showProgressBar: false });
            });
        }
    };
    ContestDetailsComponent.prototype.isContestPublisher = function (contestAuthorId) {
        var userId = localStorage.getItem('userId');
        return contestAuthorId == userId;
    };
    ContestDetailsComponent.prototype.viewSubmitionDetails = function (contestId, contest, submition) {
        this.contestsService.submitionDetails = { contestId: contestId, contest: contest, submition: submition };
        console.log(this.contestsService.submitionDetails);
        this.router.navigate([submition.submitionId], { relativeTo: this.route });
    };
    ContestDetailsComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'contest-details',
            templateUrl: 'contest-details.component.html',
            styleUrls: ['contest-details.component.css']
        }), 
        __metadata('design:paramtypes', [router_1.ActivatedRoute, router_1.Router, contests_service_1.ContestsService, index_1.ErrorService, auth_service_1.AuthService, api_service_1.ApiService, angular2_notifications_1.NotificationsService])
    ], ContestDetailsComponent);
    return ContestDetailsComponent;
}());
exports.ContestDetailsComponent = ContestDetailsComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvY29udGVzdHMvY29udGVzdC1kZXRhaWxzLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQWtDLGVBQWUsQ0FBQyxDQUFBO0FBQ2xELHVCQUErQyxpQkFBaUIsQ0FBQyxDQUFBO0FBRWpFLGlDQUFnQyxpQ0FBaUMsQ0FBQyxDQUFBO0FBQ2xFLHNCQUE2QixvQkFBb0IsQ0FBQyxDQUFBO0FBQ2xELDZCQUE0Qiw2QkFBNkIsQ0FBQyxDQUFBO0FBQzFELDRCQUEyQiw0QkFBNEIsQ0FBQyxDQUFBO0FBRXhELElBQVksTUFBTSxXQUFNLFFBQVEsQ0FBQyxDQUFBO0FBQ2pDLFFBQU8sb0JBQW9CLENBQUMsQ0FBQTtBQUM1Qix1Q0FBcUMsd0JBQXdCLENBQUMsQ0FBQTtBQVM5RDtJQWdCRSxpQ0FBb0IsS0FBcUIsRUFDckIsTUFBYyxFQUNkLGVBQWdDLEVBQ2hDLFlBQTBCLEVBQzFCLFdBQXdCLEVBQ3hCLFVBQXNCLEVBQ3RCLG9CQUEwQztRQU4xQyxVQUFLLEdBQUwsS0FBSyxDQUFnQjtRQUNyQixXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQ2Qsb0JBQWUsR0FBZixlQUFlLENBQWlCO1FBQ2hDLGlCQUFZLEdBQVosWUFBWSxDQUFjO1FBQzFCLGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBQ3hCLGVBQVUsR0FBVixVQUFVLENBQVk7UUFDdEIseUJBQW9CLEdBQXBCLG9CQUFvQixDQUFzQjtRQXJCOUQsY0FBUyxHQUFXLEVBQUUsQ0FBQztRQUN2QixZQUFPLEdBQVksSUFBSSxDQUFDO1FBQ3hCLFdBQU0sR0FBVyxFQUFFLENBQUM7UUFDcEIsa0JBQWEsR0FBVyxFQUFFLENBQUM7UUFFM0IsZUFBVSxHQUFVLEVBQUUsQ0FBQztRQUN2QixpQkFBWSxHQUFVLEVBQUUsQ0FBQztRQUt6QixjQUFTLEdBQUcsS0FBSyxDQUFDO1FBQ1gsWUFBTyxHQUFHO1lBQ2IsUUFBUSxFQUFFLENBQUMsS0FBSyxFQUFDLE9B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LENBQUM7UUFDdkcsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLGdCQUFnQixDQUFDLENBQUM7UUFDbkQsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxTQUFTLENBQUMsV0FBVyxDQUFDLEVBQUUsRUFBQyxVQUFVLEVBQUUsSUFBSSxDQUFDLEtBQUssRUFBQyxDQUFDLENBQUM7SUFDNUUsQ0FBQztJQTdPSjtRQUFDLGdCQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsUUFBUSxFQUFFLGlCQUFpQjtZQUMzQixXQUFXLEVBQUUsZ0NBQWdDO1lBQzdDLFNBQVMsRUFBRSxDQUFDLCtCQUErQixDQUFDO1NBQzdDLENBQUM7OytCQUFBO0lBME9GLDhCQUFDO0FBQUQsQ0F6T0EsQUF5T0MsSUFBQTtBQXpPWSwrQkFBdUIsMEJBeU9uQyxDQUFBIiwiZmlsZSI6ImNvbXBvbmVudHMvY29udGVzdHMvY29udGVzdC1kZXRhaWxzLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFJvdXRlciwgQWN0aXZhdGVkUm91dGUsIFBhcmFtcyB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcbmltcG9ydCB7IENvbnRlc3QgfSBmcm9tICcuLi8uLi9tb2RlbHMvY29udGVzdCc7XHJcbmltcG9ydCB7IENvbnRlc3RzU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL2NvbnRlc3RzLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBFcnJvclNlcnZpY2UgfSBmcm9tICcuLi8uLi9lcnJvcnMvaW5kZXgnO1xyXG5pbXBvcnQgeyBBdXRoU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL2F1dGguc2VydmljZSc7XHJcbmltcG9ydCB7IEFwaVNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9hcGkuc2VydmljZSc7XHJcbmltcG9ydCB7IEZvcm1Hcm91cCwgRm9ybUNvbnRyb2wsIEZvcm1CdWlsZGVyLCBWYWxpZGF0b3JzIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5pbXBvcnQgKiBhcyBtb21lbnQgZnJvbSAnbW9tZW50JztcclxuaW1wb3J0ICdtb21lbnQvbWluL2xvY2FsZXMnO1xyXG5pbXBvcnQgeyBOb3RpZmljYXRpb25zU2VydmljZSB9IGZyb20gJ2FuZ3VsYXIyLW5vdGlmaWNhdGlvbnMnO1xyXG5cclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIG1vZHVsZUlkOiBtb2R1bGUuaWQsXHJcbiAgc2VsZWN0b3I6ICdjb250ZXN0LWRldGFpbHMnLFxyXG4gIHRlbXBsYXRlVXJsOiAnY29udGVzdC1kZXRhaWxzLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnY29udGVzdC1kZXRhaWxzLmNvbXBvbmVudC5jc3MnXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgQ29udGVzdERldGFpbHNDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gIGNvbnRlc3RJZDogc3RyaW5nID0gJyc7XHJcbiAgY29udGVzdDogQ29udGVzdCA9IG51bGw7XHJcbiAgdXNlcklkOiBzdHJpbmcgPSAnJztcclxuICBmaWxlc1RvVXBsb2FkOiBGaWxlW10gPSBbXTtcclxuICBwZXJjZW50OiBudW1iZXI7XHJcbiAgc3VibWl0aW9uczogYW55W10gPSBbXTtcclxuICBteVN1Ym1pdGlvbnM6IGFueVtdID0gW107XHJcbiAgd2lubmVyU3VibWl0aW9uOiBhbnk7XHJcbiAgLy9sb2NhbGUgPSBtb21lbnQubG9jYWxlKCdsdCcpO1xyXG4gIC8vbW9tZW50RGF0ZTogYW55ID0gbW9tZW50KERhdGUubm93KCkudG9TdHJpbmcoKSwgJ1lZWVkgTU1NTSBEbycsICdsdCcpO1xyXG4gIG1vbWVudERhdGU6IGFueTtcclxuICBpc0xvYWRpbmcgPSBmYWxzZTtcclxuICBwdWJsaWMgb3B0aW9ucyA9IHtcclxuICAgICAgcG9zaXRpb246IFtcInRvcFwiLFwicmlnaHRcIl1cclxuICAgIH07XHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSByb3V0ZTogQWN0aXZhdGVkUm91dGUsXHJcbiAgICAgICAgICAgICAgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlcixcclxuICAgICAgICAgICAgICBwcml2YXRlIGNvbnRlc3RzU2VydmljZTogQ29udGVzdHNTZXJ2aWNlLFxyXG4gICAgICAgICAgICAgIHByaXZhdGUgZXJyb3JTZXJ2aWNlOiBFcnJvclNlcnZpY2UsXHJcbiAgICAgICAgICAgICAgcHJpdmF0ZSBhdXRoU2VydmljZTogQXV0aFNlcnZpY2UsXHJcbiAgICAgICAgICAgICAgcHJpdmF0ZSBhcGlTZXJ2aWNlOiBBcGlTZXJ2aWNlLFxyXG4gICAgICAgICAgICAgIHByaXZhdGUgbm90aWZpY2F0aW9uc1NlcnZpY2U6IE5vdGlmaWNhdGlvbnNTZXJ2aWNlKSB7IH1cclxuXHJcbiAgbmdPbkluaXQoKSB7IFxyXG4gICAgdGhpcy5pc0xvYWRpbmcgPSB0cnVlO1xyXG4gICBtb21lbnQubG9jYWxlKCdsdC1sdCcpO1xyXG4gICAgLy8gICBjb25zb2xlLmxvZygnTE9DQUxFJyk7XHJcbiAgICAvLyAgIGNvbnNvbGUubG9nKGxvY2FsZSk7XHJcbiAgICAgIC8vdGhpcy5tb21lbnREYXRlID0gbW9tZW50KCkuZm9ybWF0KCdZWVlZIE1NTU0gRG8nKTtcclxuICAgICAgdGhpcy5tb21lbnREYXRlID0gbW9tZW50KCkuYWRkKDMsICdkYXlzJykuY2FsZW5kYXIoKTtcclxuICAgIHRoaXMucm91dGUucGFyYW1zLnN1YnNjcmliZSgocGFyYW1zOiBQYXJhbXMpID0+IHtcclxuICAgICAgdGhpcy5jb250ZXN0SWQgPSBwYXJhbXNbJ2lkJ107XHJcbiAgICB9KTtcclxuICAgIHRoaXMuY29udGVzdHNTZXJ2aWNlLmdldEluZGl2aWR1YWxDb250ZXN0KHRoaXMuY29udGVzdElkKVxyXG4gICAgICAuc3Vic2NyaWJlKGNvbnRlc3QgPT4ge1xyXG4gICAgICAgIHRoaXMuY29udGVzdCA9IGNvbnRlc3Q7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ2NvbnRlc3QtZGV0YWlscy5jb21wb25lbnQudHMgdGhpcy5jb250ZXN0Jyk7XHJcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5jb250ZXN0KTtcclxuICAgICAgfSwgXHJcbiAgICAgIGVycm9yID0+IHtcclxuICAgICAgICAgIC8vdGhpcy5lcnJvclNlcnZpY2UuaGFuZGxlRXJyb3IoZXJyb3IpO1xyXG4gICAgICAgICAgdGhpcy5pc0xvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgIHRoaXMubm90aWZpY2F0aW9uc1NlcnZpY2UuZXJyb3IoZXJyb3IudGl0bGUsIGVycm9yLmVycm9yLm1lc3NhZ2UsIHt0aW1lT3V0OiAzMDAwLCBzaG93UHJvZ3Jlc3NCYXI6IGZhbHNlfSlcclxuICAgICAgfSk7XHJcbiAgICB0aGlzLmFwaVNlcnZpY2UuZ2V0Q29udGVzdFN1Ym1pdGlvbnModGhpcy5jb250ZXN0SWQpIC8vQ1VSUkVOVCBGT0NVU1xyXG4gICAgICAgIC5zdWJzY3JpYmUoc3VibWl0aW9ucyA9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdzdWJtaXRpb25zIGZyb20gYXBpc2VydmljZSBpbiBjb250ZXN0LWRldGFpbHMnKTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coc3VibWl0aW9ucyk7XHJcbiAgICAgICAgICAgIHRoaXMuc3VibWl0aW9ucyA9IHN1Ym1pdGlvbnM7XHJcbiAgICAgICAgICAgIHRoaXMuaXNMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHRoaXMuc3VibWl0aW9ucyk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBlcnJvciA9PiB7XHJcbiAgICAgICAgICAvL3RoaXMuZXJyb3JTZXJ2aWNlLmhhbmRsZUVycm9yKGVycm9yKTtcclxuICAgICAgICAgIHRoaXMuaXNMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICB0aGlzLm5vdGlmaWNhdGlvbnNTZXJ2aWNlLmVycm9yKGVycm9yLnRpdGxlLCBlcnJvci5lcnJvci5tZXNzYWdlLCB7dGltZU91dDogMzAwMCwgc2hvd1Byb2dyZXNzQmFyOiBmYWxzZX0pXHJcbiAgICAgIH0pO1xyXG4gICAgICBpZiAodGhpcy5pc0xvZ2dlZEluKCkpIHtcclxuICAgICAgICB0aGlzLmFwaVNlcnZpY2UuZ2V0TXlTdWJtaXRpb25zKHRoaXMuY29udGVzdElkKVxyXG4gICAgICAgICAgLnN1YnNjcmliZShteVN1Ym1pdGlvbnMgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnTXlTdWJtaXRpb25zIGZyb20gYXBpc2VydmljZSBpbiBjb250ZXN0LWRldGFpbHMnKTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2cobXlTdWJtaXRpb25zKTtcclxuICAgICAgICAgICAgdGhpcy5teVN1Ym1pdGlvbnMgPSBteVN1Ym1pdGlvbnM7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCd0aGlzLm15U3VibWl0aW9ucycpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyh0aGlzLm15U3VibWl0aW9ucyk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBlcnJvciA9PiB7XHJcbiAgICAgICAgICAvL3RoaXMuZXJyb3JTZXJ2aWNlLmhhbmRsZUVycm9yKGVycm9yKTtcclxuICAgICAgICAgIHRoaXMuaXNMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAvL3RoaXMubm90aWZpY2F0aW9uc1NlcnZpY2UuZXJyb3IoJ8SudnlrbyBrbGFpZGEnLCAnTmVwYXZ5a28gZ2F1dGkga29ua3Vyc28gZGl6YWluxbMnLCB7dGltZU91dDogMzAwMCwgc2hvd1Byb2dyZXNzQmFyOiBmYWxzZX0pXHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgdGhpcy5hcGlTZXJ2aWNlLmdldFdpbm5lclN1Ym1pdGlvbih0aGlzLmNvbnRlc3RJZClcclxuICAgICAgICAuc3Vic2NyaWJlKGRhdGEgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhkYXRhKTtcclxuICAgICAgICAgICAgaWYgKGRhdGEuc3VibWl0aW9uVXJsKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLndpbm5lclN1Ym1pdGlvbiA9IGRhdGE7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICBjb25zb2xlLmxvZygnV0lOTk5OTk5OTk5ORVInKTtcclxuICAgICAgICAgICAgICBjb25zb2xlLmxvZyh0aGlzLndpbm5lclN1Ym1pdGlvbik7XHJcbiAgICAgICAgfSwgZXJyb3IgPT4ge1xyXG4gICAgICAgICAgIHRoaXMuaXNMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICB0aGlzLm5vdGlmaWNhdGlvbnNTZXJ2aWNlLmluZm8oZXJyb3IudGl0bGUsIGVycm9yLmVycm9yLm1lc3NhZ2UsIHt0aW1lT3V0OiAzMDAwLCBzaG93UHJvZ3Jlc3NCYXI6IGZhbHNlfSkgXHJcbiAgICAgICAgfSlcclxuXHJcbiAgfSAvL0VuZCBvZiBuZ09uSW5pdFxyXG5cclxuICBpc0NsaWVudCgpIHtcclxuICAgICAgcmV0dXJuIHRoaXMuYXV0aFNlcnZpY2UuaXNDbGllbnQoKTtcclxuICB9XHJcblxyXG4gIGlzRGVzaWduZXIoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5hdXRoU2VydmljZS5pc0Rlc2lnbmVyKCk7XHJcbiAgfVxyXG5cclxuICBpc0xvZ2dlZEluKCkge1xyXG4gIHJldHVybiB0aGlzLmF1dGhTZXJ2aWNlLmlzTG9nZ2VkSW4oKTtcclxuICB9XHJcblxyXG4gIC8vRklMRSBVUExPQUQgU1RVRkZcclxuXHJcbiAgdXBsb2FkKCkge1xyXG4gICAgICB0aGlzLmlzTG9hZGluZyA9IHRydWU7XHJcbiAgICAgICAgdGhpcy51c2VySWQgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndXNlcklkJyk7XHJcbiAgICAgICAgdGhpcy5tYWtlRmlsZVJlcXVlc3QoJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9hcGkvdjEvc3VibWl0aW9ucy8nICsgdGhpcy5jb250ZXN0SWQgKyAnLycgK3RoaXMudXNlcklkLHRoaXMuZmlsZXNUb1VwbG9hZCkudGhlbigocmVzdWx0KSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3VsdCk7XHJcbiAgICAgICAgICAgIC8vdGhpcy5maWxlc1RvVXBsb2FkID0gW107XHJcbiAgICAgICAgfSwgKGVycm9yKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuaXNMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHRoaXMubm90aWZpY2F0aW9uc1NlcnZpY2UuZXJyb3IoZXJyb3IudGl0bGUsIGVycm9yLmVycm9yLm1lc3NhZ2UsIHt0aW1lT3V0OiAzMDAwLCBzaG93UHJvZ3Jlc3NCYXI6IGZhbHNlfSlcclxuICAgICAgICB9KTtcclxuICAgICAgICB0aGlzLm1ha2VGaWxlUmVxdWVzdCgnaHR0cDovL2xvY2FsaG9zdDozMDAwL2FwaS92MS9zdWJtaXRpb25zL2dhbGxlcnkvJyArIHRoaXMuY29udGVzdElkICsgJy8nICt0aGlzLnVzZXJJZCwgdGhpcy5maWxlc1RvVXBsb2FkKS50aGVuKChyZXN1bHQpID0+IHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2cocmVzdWx0KTtcclxuICAgICAgICAgICAgdGhpcy5maWxlc1RvVXBsb2FkID0gW107XHJcbiAgICAgICAgICAgIC8vcmVsb2FkIHN1Ym1pdGlvbnNcclxuICAgICAgICAgICAgdGhpcy5hcGlTZXJ2aWNlLmdldENvbnRlc3RTdWJtaXRpb25zKHRoaXMuY29udGVzdElkKSAvL0NVUlJFTlQgRk9DVVNcclxuICAgICAgICAuc3Vic2NyaWJlKHN1Ym1pdGlvbnMgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnc3VibWl0aW9ucyBmcm9tIGFwaXNlcnZpY2UgaW4gY29udGVzdC1kZXRhaWxzJyk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHN1Ym1pdGlvbnMpO1xyXG4gICAgICAgICAgICB0aGlzLnN1Ym1pdGlvbnMgPSBzdWJtaXRpb25zO1xyXG4gICAgICAgICAgICB0aGlzLmlzTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyh0aGlzLnN1Ym1pdGlvbnMpO1xyXG4gICAgICAgICAgICB0aGlzLm5vdGlmaWNhdGlvbnNTZXJ2aWNlLnN1Y2Nlc3MoJ0RpemFpbmFpIMSva2VsdGknLCAnRGl6YWluYWkgxK9rZWx0aSBzxJdrbWluZ2FpJywge3RpbWVPdXQ6IDMwMDAsIHNob3dQcm9ncmVzc0JhcjogZmFsc2V9KVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZXJyb3IgPT4ge1xyXG4gICAgICAgICAgLy90aGlzLmVycm9yU2VydmljZS5oYW5kbGVFcnJvcihlcnJvcik7XHJcbiAgICAgICAgICB0aGlzLmlzTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgdGhpcy5ub3RpZmljYXRpb25zU2VydmljZS5lcnJvcihlcnJvci50aXRsZSwgZXJyb3IuZXJyb3IubWVzc2FnZSwge3RpbWVPdXQ6IDMwMDAsIHNob3dQcm9ncmVzc0JhcjogZmFsc2V9KVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIC8vZW5kIG9mIHJlbG9hZGluZyBzdWJtaXRpb25zXHJcbiAgICAgICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICAgICAgICAvL3JlbG9hZGluZyBteSBzdWJtaXRpb25zXHJcbiAgICAgICAgdGhpcy5hcGlTZXJ2aWNlLmdldE15U3VibWl0aW9ucyh0aGlzLmNvbnRlc3RJZClcclxuICAgICAgICAuc3Vic2NyaWJlKG15U3VibWl0aW9ucyA9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdNeVN1Ym1pdGlvbnMgZnJvbSBhcGlzZXJ2aWNlIGluIGNvbnRlc3QtZGV0YWlscycpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhteVN1Ym1pdGlvbnMpO1xyXG4gICAgICAgICAgICB0aGlzLm15U3VibWl0aW9ucyA9IG15U3VibWl0aW9ucztcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ3RoaXMubXlTdWJtaXRpb25zJyk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHRoaXMubXlTdWJtaXRpb25zKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGVycm9yID0+IHtcclxuICAgICAgICAgIC8vdGhpcy5lcnJvclNlcnZpY2UuaGFuZGxlRXJyb3IoZXJyb3IpO1xyXG4gICAgICAgICAgdGhpcy5pc0xvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgIHRoaXMubm90aWZpY2F0aW9uc1NlcnZpY2UuZXJyb3IoZXJyb3IudGl0bGUsIGVycm9yLmVycm9yLm1lc3NhZ2UsIHt0aW1lT3V0OiAzMDAwLCBzaG93UHJvZ3Jlc3NCYXI6IGZhbHNlfSlcclxuICAgICAgfSk7XHJcbiAgICAgICAgLy9lbmQgb2YgcmVsb2FkaW5nIG15IHN1Ym1pdGlvbnNcclxuICAgICAgICB9LCAoZXJyb3IpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5pc0xvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgdGhpcy5ub3RpZmljYXRpb25zU2VydmljZS5lcnJvcihlcnJvci50aXRsZSwgZXJyb3IuZXJyb3IubWVzc2FnZSwge3RpbWVPdXQ6IDMwMDAsIHNob3dQcm9ncmVzc0JhcjogZmFsc2V9KVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGZpbGVDaGFuZ2VFdmVudChmaWxlSW5wdXQ6IGFueSl7XHJcbiAgICAgICAgdGhpcy5maWxlc1RvVXBsb2FkID0gPEFycmF5PEZpbGU+PiBmaWxlSW5wdXQudGFyZ2V0LmZpbGVzO1xyXG4gICAgICAgIC8vdGhpcy5maWxlc1RvVXBsb2FkLmZvckVhY2goKGZpbGUsIGkpID0+IHRoaXMuZmlsZXNUb1VwbG9hZC5wdXNoKGZpbGVJbnB1dC50YXJnZXQuZmlsZXNbaV0pKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhmaWxlSW5wdXQudGFyZ2V0LmZpbGVzKTtcclxuICAgICAgICAvL2xldCBhcnIgPSBBcnJheS5mcm9tKGZpbGVJbnB1dC50YXJnZXQuZmlsZXMpOyAvL2NvbnZlcnQgRmlsZSBPYmplY3QgdG8gQXJyYXkgdG8gcHVzaCBpdFxyXG4gICAgICAgIC8vdGhpcy5maWxlc1RvVXBsb2FkLnB1c2goYXJyWzBdKTsgLy91c2UgdGhpcyBpZiB5b3UgdXNlIG11bHRpcGxlIHNpbmdsZSBmaWxlIGlucHV0c1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMuZmlsZXNUb1VwbG9hZCk7XHJcbiAgICB9XHJcbiBcclxuICAgIG1ha2VGaWxlUmVxdWVzdCh1cmw6IHN0cmluZywgZmlsZXM6IEFycmF5PEZpbGU+KSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgICAgICAgdmFyIGZvcm1EYXRhOiBhbnkgPSBuZXcgRm9ybURhdGEoKTtcclxuICAgICAgICAgICAgdmFyIHhociA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xyXG4gICAgICAgICAgICBmb3IodmFyIGkgPSAwOyBpIDwgZmlsZXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIGZvcm1EYXRhLmFwcGVuZChcInN1Ym1pdGlvblwiLCBmaWxlc1tpXSwgZmlsZXNbaV0ubmFtZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgeGhyLnVwbG9hZC5hZGRFdmVudExpc3RlbmVyKFwicHJvZ3Jlc3NcIiwgKGV2dCkgPT4gdGhpcy5jYWxjdWxhdGVVcGxvYWRQcm9ncmVzcyhldnQpLCBmYWxzZSk7IFxyXG4gICAgICAgICAgICB4aHIub25yZWFkeXN0YXRlY2hhbmdlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKHhoci5yZWFkeVN0YXRlID09IDQpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoeGhyLnN0YXR1cyA9PSAyMDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShKU09OLnBhcnNlKHhoci5yZXNwb25zZSkpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlamVjdCh4aHIucmVzcG9uc2UpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB4aHIub25lcnJvciA9IGZ1bmN0aW9uKGUpIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdLbGFpZGEgxK9rZWxpYW50IGZhaWx1cycpO1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZSk7XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIHhoci5vcGVuKFwiUE9TVFwiLCB1cmwsIHRydWUpO1xyXG4gICAgICAgICAgICB4aHIuc2VuZChmb3JtRGF0YSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgY2FsY3VsYXRlVXBsb2FkUHJvZ3Jlc3MoZXZ0KSB7XHJcbiAgICBpZiAoZXZ0Lmxlbmd0aENvbXB1dGFibGUpIHtcclxuICAgICAgICB0aGlzLnBlcmNlbnQgPSBNYXRoLnJvdW5kKGV2dC5sb2FkZWQgLyBldnQudG90YWwgKiAxMDApO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiUEVSQ0VOVCA6IFwiLCB0aGlzLnBlcmNlbnQgKyBcIiVcIik7XHJcbiAgICB9XHJcbiAgICAvL0VORCBPRiBGSUxFIFVQTE9BRCBTVFVGRlxyXG5cclxufVxyXG5cclxuICAgIG9uUmF0aW5nKG9iajogYW55KSB7XHJcbiAgICAgICAgdGhpcy5pc0xvYWRpbmcgPSB0cnVlO1xyXG4gICAgICAgIHZhciBzdWJtaXRpb24gPSB0aGlzLnN1Ym1pdGlvbnMuZmlsdGVyKChpdGVtOiBhbnkpID0+IGl0ZW0uc3VibWl0aW9uSWQgPT0gb2JqLnN1Ym1pdGlvbklkKTtcclxuICAgICAgICBjb25zb2xlLmxvZygnb25SYXRpbmcoKSBzdWJtaXRpb24gYWZ0ZXIgZmlsdGVyJyk7XHJcbiAgICAgICAgY29uc29sZS5sb2coc3VibWl0aW9uKTtcclxuICAgICAgICBpZiAoISFzdWJtaXRpb24gJiYgc3VibWl0aW9uLmxlbmd0aCA9PSAxKSB7XHJcbiAgICAgICAgICAgIC8vdGhpcy5zdWJtaXRpb25zWzBdLnN1Ym1pdGlvblJhdGluZyA9IG9iai5yYXRpbmc7XHJcblxyXG4gICAgICAgICAgICBzdWJtaXRpb25bMF0uc3VibWl0aW9uUmF0aW5nID0gb2JqLnJhdGluZztcclxuICAgICAgICAgICAgdGhpcy5jb250ZXN0c1NlcnZpY2UudXBkYXRlU3VibWl0aW9uUmF0aW5nKHRoaXMuY29udGVzdCwgc3VibWl0aW9uWzBdKVxyXG4gICAgICAgICAgICAgICAgLnN1YnNjcmliZShkYXRhID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnUmF0aW5nIGNoYW5nZWQnKTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhkYXRhKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoc3VibWl0aW9uWzBdLnN0YXR1cyA9PSAnTnVnYWzEl3RvamFzJykgeyBcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy53aW5uZXJTdWJtaXRpb24uc3VibWl0aW9uUmF0aW5nID0gZGF0YS5vYmouc3VibWl0aW9uc1tvYmouc3VibWl0aW9uSWQgLSAxXS5zdWJtaXRpb25SYXRpbmc7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaXNMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5ub3RpZmljYXRpb25zU2VydmljZS5zdWNjZXNzKCdBdG5hdWppbnRhJywgJ1JlaXRpbmdhcyBzxJdrbWluZ2FpIHBha2Vpc3RhcycsIHt0aW1lT3V0OiAzMDAwLCBzaG93UHJvZ3Jlc3NCYXI6IGZhbHNlfSlcclxuICAgICAgICAgICAgICAgIH0sIGVycm9yID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmlzTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubm90aWZpY2F0aW9uc1NlcnZpY2UuZXJyb3IoZXJyb3IudGl0bGUsIGVycm9yLmVycm9yLm1lc3NhZ2UsIHt0aW1lT3V0OiAzMDAwLCBzaG93UHJvZ3Jlc3NCYXI6IGZhbHNlfSlcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGlzQ29udGVzdFB1Ymxpc2hlcihjb250ZXN0QXV0aG9ySWQ6IHN0cmluZykge1xyXG4gICAgICAgIHZhciB1c2VySWQgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndXNlcklkJyk7XHJcbiAgICAgICAgcmV0dXJuIGNvbnRlc3RBdXRob3JJZCA9PSB1c2VySWQ7XHJcbiAgICB9XHJcblxyXG4gICB2aWV3U3VibWl0aW9uRGV0YWlscyhjb250ZXN0SWQsIGNvbnRlc3QsIHN1Ym1pdGlvbikge1xyXG4gICAgICAgdGhpcy5jb250ZXN0c1NlcnZpY2Uuc3VibWl0aW9uRGV0YWlscyA9IHtjb250ZXN0SWQ6IGNvbnRlc3RJZCwgY29udGVzdDogY29udGVzdCwgc3VibWl0aW9uOiBzdWJtaXRpb259O1xyXG4gICAgICAgY29uc29sZS5sb2codGhpcy5jb250ZXN0c1NlcnZpY2Uuc3VibWl0aW9uRGV0YWlscyk7XHJcbiAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbc3VibWl0aW9uLnN1Ym1pdGlvbklkXSwge3JlbGF0aXZlVG86IHRoaXMucm91dGV9KTtcclxuICAgfVxyXG5cclxufSJdfQ==
