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
var CryptoJS = require('crypto-js');
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
        this.additionalFiles = [];
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
            _this.additionalFiles = contest.additionalFiles;
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
    ContestDetailsComponent.prototype.ngAfterViewInit = function () {
        jQuery(document).ready(function () {
            jQuery(".fancybox").fancybox({});
        });
    };
    ContestDetailsComponent.prototype.isClient = function () {
        return this.authService.isClient();
    };
    ContestDetailsComponent.prototype.isDesigner = function () {
        return this.authService.isDesigner();
    };
    ContestDetailsComponent.prototype.isLoggedIn = function () {
        return this.authService.isLoggedIn();
    };
    ContestDetailsComponent.prototype.isEmailConfirmed = function () {
        return sessionStorage.getItem('emailConfirmed') == CryptoJS.SHA3('true').toString();
        ;
    };
    //FILE UPLOAD STUFF
    ContestDetailsComponent.prototype.uploadSubmitions = function () {
        var _this = this;
        this.isLoading = true;
        this.userId = sessionStorage.getItem('userId');
        this.makeFileRequest('http://localhost:3000/api/v1/submitions/' + this.contestId + '/' + this.userId, this.filesToUpload, "submition").then(function (result) {
            console.log(result);
            _this.isLoading = false;
        }, function (error) {
            _this.isLoading = false;
            _this.notificationsService.error(error.title, error.error.message, { timeOut: 3000, showProgressBar: false });
        });
        this.makeFileRequest('http://localhost:3000/api/v1/submitions/gallery/' + this.contestId + '/' + this.userId, this.filesToUpload, "submition").then(function (result) {
            console.log(result);
            _this.filesToUpload = [];
        }, function (error) {
            console.log('reached err');
            _this.isLoading = false;
            window.scrollTo(0, 0);
            _this.apiService.getContestSubmitions(_this.contestId)
                .subscribe(function (submitions) {
                console.log('submitions from apiservice in contest-details');
                console.log(submitions);
                _this.submitions = submitions;
                _this.isLoading = false;
                console.log(_this.submitions);
                _this.notificationsService.success('Dizainai įkelti', 'Dizainai įkelti sėkmingai', { timeOut: 3000, showProgressBar: false });
            }, function (error) {
                _this.isLoading = false;
                _this.notificationsService.error(error.title, error.error.message, { timeOut: 3000, showProgressBar: false });
            });
            _this.apiService.getMySubmitions(_this.contestId)
                .subscribe(function (mySubmitions) {
                console.log('MySubmitions from apiservice in contest-details');
                console.log(mySubmitions);
                _this.mySubmitions = mySubmitions;
                console.log('this.mySubmitions');
                console.log(_this.mySubmitions);
            }, function (error) {
                _this.isLoading = false;
                _this.notificationsService.error(error.title, error.error.message, { timeOut: 3000, showProgressBar: false });
            });
        });
    };
    // uploadSubmitions() { // SOMEHOW BUGGED... again
    //   this.isLoading = true;
    //     this.userId = sessionStorage.getItem('userId');
    //     this.makeFileRequest('http://localhost:3000/api/v1/submitions/' + this.contestId + '/' +this.userId,this.filesToUpload, "submition").then((result) => {
    //         console.log(result);
    //         this.isLoading = false;
    //     }, (error) => {
    //         this.isLoading = false;
    //         this.notificationsService.error(error.title, error.error.message, {timeOut: 3000, showProgressBar: false})
    //     });
    //     this.makeFileRequest('http://localhost:3000/api/v1/submitions/gallery/' + this.contestId + '/' +this.userId, this.filesToUpload, "submition").then((result) => {
    //         console.log(result);
    //         this.filesToUpload = [];
    //         this.apiService.getContestSubmitions(this.contestId) //CURRENT FOCUS
    //     .subscribe(submitions => {
    //         console.log('submitions from apiservice in contest-details');
    //         console.log(submitions);
    //         this.submitions = submitions;
    //         this.isLoading = false;
    //         console.log(this.submitions);
    //         this.notificationsService.success('Dizainai įkelti', 'Dizainai įkelti sėkmingai', {timeOut: 3000, showProgressBar: false})
    //     },
    //     error => {
    //       this.isLoading = false;
    //       this.notificationsService.error(error.title, error.error.message, {timeOut: 3000, showProgressBar: false})
    //     });
    //     this.apiService.getMySubmitions(this.contestId)
    //     .subscribe(mySubmitions => {
    //         console.log('MySubmitions from apiservice in contest-details');
    //         console.log(mySubmitions);
    //         this.mySubmitions = mySubmitions;
    //         console.log('this.mySubmitions');
    //         console.log(this.mySubmitions);
    //     },
    //     error => {
    //       this.isLoading = false;
    //       this.notificationsService.error(error.title, error.error.message, {timeOut: 3000, showProgressBar: false})
    //   });
    //     }, (error) => {
    //         this.isLoading = false;
    //         window.scrollTo(0, 0);
    //         this.apiService.getContestSubmitions(this.contestId) 
    //     .subscribe(submitions => {
    //         console.log('submitions from apiservice in contest-details');
    //         console.log(submitions);
    //         this.submitions = submitions;
    //         this.isLoading = false;
    //         console.log(this.submitions);
    //         this.notificationsService.success('Dizainai įkelti', 'Dizainai įkelti sėkmingai', {timeOut: 3000, showProgressBar: false})
    //     },
    //     error => {
    //       this.isLoading = false;
    //       this.notificationsService.error(error.title, error.error.message, {timeOut: 3000, showProgressBar: false})
    //     });
    //     this.apiService.getMySubmitions(this.contestId)
    //     .subscribe(mySubmitions => {
    //         console.log('MySubmitions from apiservice in contest-details');
    //         console.log(mySubmitions);
    //         this.mySubmitions = mySubmitions;
    //         console.log('this.mySubmitions');
    //         console.log(this.mySubmitions);
    //     },
    //     error => {
    //       this.isLoading = false;
    //       this.notificationsService.error(error.title, error.error.message, {timeOut: 3000, showProgressBar: false})
    //   });
    //     });
    // }
    // Upload additional files
    ContestDetailsComponent.prototype.uploadAdditionalFiles = function () {
        var _this = this;
        this.isLoading = true;
        this.userId = sessionStorage.getItem('userId');
        this.makeFileRequest('http://localhost:3000/api/v1/contests/' + this.contestId + '/files', this.filesToUpload, "additionalfiles").then(function (result) {
            console.log(result);
            _this.isLoading = false;
            _this.apiService.getContestAdditionalFiles(_this.contestId)
                .subscribe(function (data) {
                console.log(data);
                _this.additionalFiles = data;
            }, function (error) {
                _this.isLoading = false;
                _this.notificationsService.error(error.title, error.error.message, { timeOut: 3000, showProgressBar: false });
            });
            //this.filesToUpload = [];
        }, function (error) {
            _this.apiService.getContestAdditionalFiles(_this.contestId)
                .subscribe(function (data) {
                _this.isLoading = false;
                console.log(data);
                _this.additionalFiles = data;
            }, function (error) {
                _this.isLoading = false;
                _this.notificationsService.error(error.title, error.error.message, { timeOut: 3000, showProgressBar: false });
            });
            _this.notificationsService.success('Įkelta', 'Failai įkelti', { timeOut: 3000, showProgressBar: false });
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
    ContestDetailsComponent.prototype.makeFileRequest = function (url, files, fileType) {
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
                        console.log(xhr.response);
                        resolve(JSON.parse(xhr.response));
                    }
                    else {
                        console.log(xhr.response);
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
        var userId = sessionStorage.getItem('userId');
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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvY29udGVzdHMvY29udGVzdC1kZXRhaWxzLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQWtDLGVBQWUsQ0FBQyxDQUFBO0FBQ2xELHVCQUErQyxpQkFBaUIsQ0FBQyxDQUFBO0FBRWpFLGlDQUFnQyxpQ0FBaUMsQ0FBQyxDQUFBO0FBQ2xFLHNCQUE2QixvQkFBb0IsQ0FBQyxDQUFBO0FBQ2xELDZCQUE0Qiw2QkFBNkIsQ0FBQyxDQUFBO0FBQzFELDRCQUEyQiw0QkFBNEIsQ0FBQyxDQUFBO0FBRXhELElBQVksTUFBTSxXQUFNLFFBQVEsQ0FBQyxDQUFBO0FBQ2pDLFFBQU8sb0JBQW9CLENBQUMsQ0FBQTtBQUM1Qix1Q0FBcUMsd0JBQXdCLENBQUMsQ0FBQTtBQUM5RCxJQUFZLFFBQVEsV0FBTSxXQUFXLENBQUMsQ0FBQTtBQVV0QztJQWlCRSxpQ0FBb0IsS0FBcUIsRUFDckIsTUFBYyxFQUNkLGVBQWdDLEVBQ2hDLFlBQTBCLEVBQzFCLFdBQXdCLEVBQ3hCLFVBQXNCLEVBQ3RCLG9CQUEwQztRQU4xQyxVQUFLLEdBQUwsS0FBSyxDQUFnQjtRQUNyQixXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQ2Qsb0JBQWUsR0FBZixlQUFlLENBQWlCO1FBQ2hDLGlCQUFZLEdBQVosWUFBWSxDQUFjO1FBQzFCLGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBQ3hCLGVBQVUsR0FBVixVQUFVLENBQVk7UUFDdEIseUJBQW9CLEdBQXBCLG9CQUFvQixDQUFzQjtRQXRCOUQsY0FBUyxHQUFXLEVBQUUsQ0FBQztRQUN2QixZQUFPLEdBQVksSUFBSSxDQUFDO1FBQ3hCLFdBQU0sR0FBVyxFQUFFLENBQUM7UUFDcEIsa0JBQWEsR0FBVyxFQUFFLENBQUM7UUFFM0IsZUFBVSxHQUFVLEVBQUUsQ0FBQztRQUN2QixpQkFBWSxHQUFVLEVBQUUsQ0FBQztRQUN6QixvQkFBZSxHQUFHLEVBQUUsQ0FBQztRQUtyQixjQUFT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QUFTLENBQUMsV0FBVyxDQUFDLEVBQUUsRUFBQyxVQUFVLEVBQUUsSUFBSSxDQUFDLEtBQUssRUFBQyxDQUFDLENBQUM7SUFDNUUsQ0FBQztJQW5XSjtRQUFDLGdCQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsUUFBUSxFQUFFLGlCQUFpQjtZQUMzQixXQUFXLEVBQUUsZ0NBQWdDO1lBQzdDLFNBQVMsRUFBRSxDQUFDLCtCQUErQixDQUFDO1NBQzdDLENBQUM7OytCQUFBO0lBZ1dGLDhCQUFDO0FBQUQsQ0EvVkEsQUErVkMsSUFBQTtBQS9WWSwrQkFBdUIsMEJBK1ZuQyxDQUFBIiwiZmlsZSI6ImNvbXBvbmVudHMvY29udGVzdHMvY29udGVzdC1kZXRhaWxzLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFJvdXRlciwgQWN0aXZhdGVkUm91dGUsIFBhcmFtcyB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcbmltcG9ydCB7IENvbnRlc3QgfSBmcm9tICcuLi8uLi9tb2RlbHMvY29udGVzdCc7XHJcbmltcG9ydCB7IENvbnRlc3RzU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL2NvbnRlc3RzLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBFcnJvclNlcnZpY2UgfSBmcm9tICcuLi8uLi9lcnJvcnMvaW5kZXgnO1xyXG5pbXBvcnQgeyBBdXRoU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL2F1dGguc2VydmljZSc7XHJcbmltcG9ydCB7IEFwaVNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9hcGkuc2VydmljZSc7XHJcbmltcG9ydCB7IEZvcm1Hcm91cCwgRm9ybUNvbnRyb2wsIEZvcm1CdWlsZGVyLCBWYWxpZGF0b3JzIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5pbXBvcnQgKiBhcyBtb21lbnQgZnJvbSAnbW9tZW50JztcclxuaW1wb3J0ICdtb21lbnQvbWluL2xvY2FsZXMnO1xyXG5pbXBvcnQgeyBOb3RpZmljYXRpb25zU2VydmljZSB9IGZyb20gJ2FuZ3VsYXIyLW5vdGlmaWNhdGlvbnMnO1xyXG5pbXBvcnQgKiBhcyBDcnlwdG9KUyBmcm9tICdjcnlwdG8tanMnO1xyXG5cclxuZGVjbGFyZSB2YXIgalF1ZXJ5OiBhbnk7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBtb2R1bGVJZDogbW9kdWxlLmlkLFxyXG4gIHNlbGVjdG9yOiAnY29udGVzdC1kZXRhaWxzJyxcclxuICB0ZW1wbGF0ZVVybDogJ2NvbnRlc3QtZGV0YWlscy5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJ2NvbnRlc3QtZGV0YWlscy5jb21wb25lbnQuY3NzJ11cclxufSlcclxuZXhwb3J0IGNsYXNzIENvbnRlc3REZXRhaWxzQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuICBjb250ZXN0SWQ6IHN0cmluZyA9ICcnO1xyXG4gIGNvbnRlc3Q6IENvbnRlc3QgPSBudWxsO1xyXG4gIHVzZXJJZDogc3RyaW5nID0gJyc7XHJcbiAgZmlsZXNUb1VwbG9hZDogRmlsZVtdID0gW107XHJcbiAgcGVyY2VudDogbnVtYmVyO1xyXG4gIHN1Ym1pdGlvbnM6IGFueVtdID0gW107XHJcbiAgbXlTdWJtaXRpb25zOiBhbnlbXSA9IFtdO1xyXG4gIGFkZGl0aW9uYWxGaWxlcyA9IFtdO1xyXG4gIHdpbm5lclN1Ym1pdGlvbjogYW55O1xyXG4gIC8vbG9jYWxlID0gbW9tZW50LmxvY2FsZSgnbHQnKTtcclxuICAvL21vbWVudERhdGU6IGFueSA9IG1vbWVudChEYXRlLm5vdygpLnRvU3RyaW5nKCksICdZWVlZIE1NTU0gRG8nLCAnbHQnKTtcclxuICBtb21lbnREYXRlOiBhbnk7XHJcbiAgaXNMb2FkaW5nID0gZmFsc2U7XHJcbiAgcHVibGljIG9wdGlvbnMgPSB7XHJcbiAgICAgIHBvc2l0aW9uOiBbXCJ0b3BcIixcInJpZ2h0XCJdXHJcbiAgICB9O1xyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcm91dGU6IEFjdGl2YXRlZFJvdXRlLFxyXG4gICAgICAgICAgICAgIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsXHJcbiAgICAgICAgICAgICAgcHJpdmF0ZSBjb250ZXN0c1NlcnZpY2U6IENvbnRlc3RzU2VydmljZSxcclxuICAgICAgICAgICAgICBwcml2YXRlIGVycm9yU2VydmljZTogRXJyb3JTZXJ2aWNlLFxyXG4gICAgICAgICAgICAgIHByaXZhdGUgYXV0aFNlcnZpY2U6IEF1dGhTZXJ2aWNlLFxyXG4gICAgICAgICAgICAgIHByaXZhdGUgYXBpU2VydmljZTogQXBpU2VydmljZSxcclxuICAgICAgICAgICAgICBwcml2YXRlIG5vdGlmaWNhdGlvbnNTZXJ2aWNlOiBOb3RpZmljYXRpb25zU2VydmljZSkgeyB9XHJcblxyXG4gIG5nT25Jbml0KCkgeyBcclxuICAgIHRoaXMuaXNMb2FkaW5nID0gdHJ1ZTtcclxuICAgbW9tZW50LmxvY2FsZSgnbHQtbHQnKTtcclxuICAgIC8vICAgY29uc29sZS5sb2coJ0xPQ0FMRScpO1xyXG4gICAgLy8gICBjb25zb2xlLmxvZyhsb2NhbGUpO1xyXG4gICAgICAvL3RoaXMubW9tZW50RGF0ZSA9IG1vbWVudCgpLmZvcm1hdCgnWVlZWSBNTU1NIERvJyk7XHJcbiAgICAgIHRoaXMubW9tZW50RGF0ZSA9IG1vbWVudCgpLmFkZCgzLCAnZGF5cycpLmNhbGVuZGFyKCk7XHJcbiAgICB0aGlzLnJvdXRlLnBhcmFtcy5zdWJzY3JpYmUoKHBhcmFtczogUGFyYW1zKSA9PiB7XHJcbiAgICAgIHRoaXMuY29udGVzdElkID0gcGFyYW1zWydpZCddO1xyXG4gICAgfSk7XHJcbiAgICB0aGlzLmNvbnRlc3RzU2VydmljZS5nZXRJbmRpdmlkdWFsQ29udGVzdCh0aGlzLmNvbnRlc3RJZClcclxuICAgICAgLnN1YnNjcmliZShjb250ZXN0ID0+IHtcclxuICAgICAgICB0aGlzLmNvbnRlc3QgPSBjb250ZXN0O1xyXG4gICAgICAgIHRoaXMuYWRkaXRpb25hbEZpbGVzID0gY29udGVzdC5hZGRpdGlvbmFsRmlsZXM7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ2NvbnRlc3QtZGV0YWlscy5jb21wb25lbnQudHMgdGhpcy5jb250ZXN0Jyk7XHJcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5jb250ZXN0KTtcclxuICAgICAgfSwgXHJcbiAgICAgIGVycm9yID0+IHtcclxuICAgICAgICAgIC8vdGhpcy5lcnJvclNlcnZpY2UuaGFuZGxlRXJyb3IoZXJyb3IpO1xyXG4gICAgICAgICAgdGhpcy5pc0xvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgIHRoaXMubm90aWZpY2F0aW9uc1NlcnZpY2UuZXJyb3IoZXJyb3IudGl0bGUsIGVycm9yLmVycm9yLm1lc3NhZ2UsIHt0aW1lT3V0OiAzMDAwLCBzaG93UHJvZ3Jlc3NCYXI6IGZhbHNlfSlcclxuICAgICAgfSk7XHJcbiAgICB0aGlzLmFwaVNlcnZpY2UuZ2V0Q29udGVzdFN1Ym1pdGlvbnModGhpcy5jb250ZXN0SWQpIC8vQ1VSUkVOVCBGT0NVU1xyXG4gICAgICAgIC5zdWJzY3JpYmUoc3VibWl0aW9ucyA9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdzdWJtaXRpb25zIGZyb20gYXBpc2VydmljZSBpbiBjb250ZXN0LWRldGFpbHMnKTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coc3VibWl0aW9ucyk7XHJcbiAgICAgICAgICAgIHRoaXMuc3VibWl0aW9ucyA9IHN1Ym1pdGlvbnM7XHJcbiAgICAgICAgICAgIHRoaXMuaXNMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHRoaXMuc3VibWl0aW9ucyk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBlcnJvciA9PiB7XHJcbiAgICAgICAgICAvL3RoaXMuZXJyb3JTZXJ2aWNlLmhhbmRsZUVycm9yKGVycm9yKTtcclxuICAgICAgICAgIHRoaXMuaXNMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICB0aGlzLm5vdGlmaWNhdGlvbnNTZXJ2aWNlLmVycm9yKGVycm9yLnRpdGxlLCBlcnJvci5lcnJvci5tZXNzYWdlLCB7dGltZU91dDogMzAwMCwgc2hvd1Byb2dyZXNzQmFyOiBmYWxzZX0pXHJcbiAgICAgIH0pO1xyXG4gICAgICBpZiAodGhpcy5pc0xvZ2dlZEluKCkpIHtcclxuICAgICAgICB0aGlzLmFwaVNlcnZpY2UuZ2V0TXlTdWJtaXRpb25zKHRoaXMuY29udGVzdElkKVxyXG4gICAgICAgICAgLnN1YnNjcmliZShteVN1Ym1pdGlvbnMgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnTXlTdWJtaXRpb25zIGZyb20gYXBpc2VydmljZSBpbiBjb250ZXN0LWRldGFpbHMnKTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2cobXlTdWJtaXRpb25zKTtcclxuICAgICAgICAgICAgdGhpcy5teVN1Ym1pdGlvbnMgPSBteVN1Ym1pdGlvbnM7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCd0aGlzLm15U3VibWl0aW9ucycpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyh0aGlzLm15U3VibWl0aW9ucyk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBlcnJvciA9PiB7XHJcbiAgICAgICAgICAvL3RoaXMuZXJyb3JTZXJ2aWNlLmhhbmRsZUVycm9yKGVycm9yKTtcclxuICAgICAgICAgIHRoaXMuaXNMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAvL3RoaXMubm90aWZpY2F0aW9uc1NlcnZpY2UuZXJyb3IoJ8SudnlrbyBrbGFpZGEnLCAnTmVwYXZ5a28gZ2F1dGkga29ua3Vyc28gZGl6YWluxbMnLCB7dGltZU91dDogMzAwMCwgc2hvd1Byb2dyZXNzQmFyOiBmYWxzZX0pXHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgdGhpcy5hcGlTZXJ2aWNlLmdldFdpbm5lclN1Ym1pdGlvbih0aGlzLmNvbnRlc3RJZClcclxuICAgICAgICAuc3Vic2NyaWJlKGRhdGEgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhkYXRhKTtcclxuICAgICAgICAgICAgaWYgKGRhdGEuc3VibWl0aW9uVXJsKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLndpbm5lclN1Ym1pdGlvbiA9IGRhdGE7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICBjb25zb2xlLmxvZygnV0lOTk5OTk5OTk5ORVInKTtcclxuICAgICAgICAgICAgICBjb25zb2xlLmxvZyh0aGlzLndpbm5lclN1Ym1pdGlvbik7XHJcbiAgICAgICAgfSwgZXJyb3IgPT4ge1xyXG4gICAgICAgICAgIHRoaXMuaXNMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICB0aGlzLm5vdGlmaWNhdGlvbnNTZXJ2aWNlLmluZm8oZXJyb3IudGl0bGUsIGVycm9yLmVycm9yLm1lc3NhZ2UsIHt0aW1lT3V0OiAzMDAwLCBzaG93UHJvZ3Jlc3NCYXI6IGZhbHNlfSkgXHJcbiAgICAgICAgfSlcclxuXHJcbiAgfSAvL0VuZCBvZiBuZ09uSW5pdFxyXG5cclxuICBuZ0FmdGVyVmlld0luaXQoKSB7XHJcbiAgICAgIGpRdWVyeShkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgalF1ZXJ5KFwiLmZhbmN5Ym94XCIpLmZhbmN5Ym94KHtcclxuICAgICAgICBcclxuICAgICAgICB9KTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgaXNDbGllbnQoKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLmF1dGhTZXJ2aWNlLmlzQ2xpZW50KCk7XHJcbiAgfVxyXG5cclxuICBpc0Rlc2lnbmVyKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuYXV0aFNlcnZpY2UuaXNEZXNpZ25lcigpO1xyXG4gIH1cclxuXHJcbiAgaXNMb2dnZWRJbigpIHtcclxuICByZXR1cm4gdGhpcy5hdXRoU2VydmljZS5pc0xvZ2dlZEluKCk7XHJcbiAgfVxyXG5cclxuICBpc0VtYWlsQ29uZmlybWVkKCkge1xyXG4gICAgICByZXR1cm4gc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbSgnZW1haWxDb25maXJtZWQnKSA9PSBDcnlwdG9KUy5TSEEzKCd0cnVlJykudG9TdHJpbmcoKTs7XHJcbiAgfVxyXG5cclxuICAvL0ZJTEUgVVBMT0FEIFNUVUZGXHJcblxyXG4gIHVwbG9hZFN1Ym1pdGlvbnMoKSB7XHJcbiAgICAgIHRoaXMuaXNMb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLnVzZXJJZCA9IHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oJ3VzZXJJZCcpO1xyXG4gICAgICAgIHRoaXMubWFrZUZpbGVSZXF1ZXN0KCdodHRwOi8vbG9jYWxob3N0OjMwMDAvYXBpL3YxL3N1Ym1pdGlvbnMvJyArIHRoaXMuY29udGVzdElkICsgJy8nICt0aGlzLnVzZXJJZCx0aGlzLmZpbGVzVG9VcGxvYWQsIFwic3VibWl0aW9uXCIpLnRoZW4oKHJlc3VsdCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhyZXN1bHQpO1xyXG4gICAgICAgICAgICB0aGlzLmlzTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgIH0sIChlcnJvcikgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmlzTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICB0aGlzLm5vdGlmaWNhdGlvbnNTZXJ2aWNlLmVycm9yKGVycm9yLnRpdGxlLCBlcnJvci5lcnJvci5tZXNzYWdlLCB7dGltZU91dDogMzAwMCwgc2hvd1Byb2dyZXNzQmFyOiBmYWxzZX0pXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5tYWtlRmlsZVJlcXVlc3QoJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9hcGkvdjEvc3VibWl0aW9ucy9nYWxsZXJ5LycgKyB0aGlzLmNvbnRlc3RJZCArICcvJyArdGhpcy51c2VySWQsIHRoaXMuZmlsZXNUb1VwbG9hZCwgXCJzdWJtaXRpb25cIikudGhlbigocmVzdWx0KSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3VsdCk7XHJcbiAgICAgICAgICAgIHRoaXMuZmlsZXNUb1VwbG9hZCA9IFtdO1xyXG4gICAgICAgIH0sIChlcnJvcikgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygncmVhY2hlZCBlcnInKTtcclxuICAgICAgICAgICAgdGhpcy5pc0xvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgd2luZG93LnNjcm9sbFRvKDAsIDApO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5hcGlTZXJ2aWNlLmdldENvbnRlc3RTdWJtaXRpb25zKHRoaXMuY29udGVzdElkKSBcclxuICAgICAgICAgICAgLnN1YnNjcmliZShzdWJtaXRpb25zID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdzdWJtaXRpb25zIGZyb20gYXBpc2VydmljZSBpbiBjb250ZXN0LWRldGFpbHMnKTtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHN1Ym1pdGlvbnMpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zdWJtaXRpb25zID0gc3VibWl0aW9ucztcclxuICAgICAgICAgICAgICAgIHRoaXMuaXNMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyh0aGlzLnN1Ym1pdGlvbnMpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5ub3RpZmljYXRpb25zU2VydmljZS5zdWNjZXNzKCdEaXphaW5haSDEr2tlbHRpJywgJ0RpemFpbmFpIMSva2VsdGkgc8SXa21pbmdhaScsIHt0aW1lT3V0OiAzMDAwLCBzaG93UHJvZ3Jlc3NCYXI6IGZhbHNlfSlcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgZXJyb3IgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmlzTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICB0aGlzLm5vdGlmaWNhdGlvbnNTZXJ2aWNlLmVycm9yKGVycm9yLnRpdGxlLCBlcnJvci5lcnJvci5tZXNzYWdlLCB7dGltZU91dDogMzAwMCwgc2hvd1Byb2dyZXNzQmFyOiBmYWxzZX0pXHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5hcGlTZXJ2aWNlLmdldE15U3VibWl0aW9ucyh0aGlzLmNvbnRlc3RJZClcclxuICAgICAgICAgICAgLnN1YnNjcmliZShteVN1Ym1pdGlvbnMgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ015U3VibWl0aW9ucyBmcm9tIGFwaXNlcnZpY2UgaW4gY29udGVzdC1kZXRhaWxzJyk7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhteVN1Ym1pdGlvbnMpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5teVN1Ym1pdGlvbnMgPSBteVN1Ym1pdGlvbnM7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygndGhpcy5teVN1Ym1pdGlvbnMnKTtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHRoaXMubXlTdWJtaXRpb25zKTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgZXJyb3IgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmlzTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICB0aGlzLm5vdGlmaWNhdGlvbnNTZXJ2aWNlLmVycm9yKGVycm9yLnRpdGxlLCBlcnJvci5lcnJvci5tZXNzYWdlLCB7dGltZU91dDogMzAwMCwgc2hvd1Byb2dyZXNzQmFyOiBmYWxzZX0pXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIHVwbG9hZFN1Ym1pdGlvbnMoKSB7IC8vIFNPTUVIT1cgQlVHR0VELi4uIGFnYWluXHJcbiAgICAvLyAgIHRoaXMuaXNMb2FkaW5nID0gdHJ1ZTtcclxuICAgIC8vICAgICB0aGlzLnVzZXJJZCA9IHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oJ3VzZXJJZCcpO1xyXG4gICAgLy8gICAgIHRoaXMubWFrZUZpbGVSZXF1ZXN0KCdodHRwOi8vbG9jYWxob3N0OjMwMDAvYXBpL3YxL3N1Ym1pdGlvbnMvJyArIHRoaXMuY29udGVzdElkICsgJy8nICt0aGlzLnVzZXJJZCx0aGlzLmZpbGVzVG9VcGxvYWQsIFwic3VibWl0aW9uXCIpLnRoZW4oKHJlc3VsdCkgPT4ge1xyXG4gICAgLy8gICAgICAgICBjb25zb2xlLmxvZyhyZXN1bHQpO1xyXG4gICAgLy8gICAgICAgICB0aGlzLmlzTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgLy8gICAgIH0sIChlcnJvcikgPT4ge1xyXG4gICAgLy8gICAgICAgICB0aGlzLmlzTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgLy8gICAgICAgICB0aGlzLm5vdGlmaWNhdGlvbnNTZXJ2aWNlLmVycm9yKGVycm9yLnRpdGxlLCBlcnJvci5lcnJvci5tZXNzYWdlLCB7dGltZU91dDogMzAwMCwgc2hvd1Byb2dyZXNzQmFyOiBmYWxzZX0pXHJcbiAgICAvLyAgICAgfSk7XHJcbiAgICAvLyAgICAgdGhpcy5tYWtlRmlsZVJlcXVlc3QoJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9hcGkvdjEvc3VibWl0aW9ucy9nYWxsZXJ5LycgKyB0aGlzLmNvbnRlc3RJZCArICcvJyArdGhpcy51c2VySWQsIHRoaXMuZmlsZXNUb1VwbG9hZCwgXCJzdWJtaXRpb25cIikudGhlbigocmVzdWx0KSA9PiB7XHJcbiAgICAvLyAgICAgICAgIGNvbnNvbGUubG9nKHJlc3VsdCk7XHJcbiAgICAvLyAgICAgICAgIHRoaXMuZmlsZXNUb1VwbG9hZCA9IFtdO1xyXG5cclxuICAgIC8vICAgICAgICAgdGhpcy5hcGlTZXJ2aWNlLmdldENvbnRlc3RTdWJtaXRpb25zKHRoaXMuY29udGVzdElkKSAvL0NVUlJFTlQgRk9DVVNcclxuICAgIC8vICAgICAuc3Vic2NyaWJlKHN1Ym1pdGlvbnMgPT4ge1xyXG4gICAgLy8gICAgICAgICBjb25zb2xlLmxvZygnc3VibWl0aW9ucyBmcm9tIGFwaXNlcnZpY2UgaW4gY29udGVzdC1kZXRhaWxzJyk7XHJcbiAgICAvLyAgICAgICAgIGNvbnNvbGUubG9nKHN1Ym1pdGlvbnMpO1xyXG4gICAgLy8gICAgICAgICB0aGlzLnN1Ym1pdGlvbnMgPSBzdWJtaXRpb25zO1xyXG4gICAgLy8gICAgICAgICB0aGlzLmlzTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgLy8gICAgICAgICBjb25zb2xlLmxvZyh0aGlzLnN1Ym1pdGlvbnMpO1xyXG4gICAgLy8gICAgICAgICB0aGlzLm5vdGlmaWNhdGlvbnNTZXJ2aWNlLnN1Y2Nlc3MoJ0RpemFpbmFpIMSva2VsdGknLCAnRGl6YWluYWkgxK9rZWx0aSBzxJdrbWluZ2FpJywge3RpbWVPdXQ6IDMwMDAsIHNob3dQcm9ncmVzc0JhcjogZmFsc2V9KVxyXG4gICAgLy8gICAgIH0sXHJcbiAgICAvLyAgICAgZXJyb3IgPT4ge1xyXG4gICAgLy8gICAgICAgdGhpcy5pc0xvYWRpbmcgPSBmYWxzZTtcclxuICAgIC8vICAgICAgIHRoaXMubm90aWZpY2F0aW9uc1NlcnZpY2UuZXJyb3IoZXJyb3IudGl0bGUsIGVycm9yLmVycm9yLm1lc3NhZ2UsIHt0aW1lT3V0OiAzMDAwLCBzaG93UHJvZ3Jlc3NCYXI6IGZhbHNlfSlcclxuICAgIC8vICAgICB9KTtcclxuXHJcbiAgICAvLyAgICAgdGhpcy5hcGlTZXJ2aWNlLmdldE15U3VibWl0aW9ucyh0aGlzLmNvbnRlc3RJZClcclxuICAgIC8vICAgICAuc3Vic2NyaWJlKG15U3VibWl0aW9ucyA9PiB7XHJcbiAgICAvLyAgICAgICAgIGNvbnNvbGUubG9nKCdNeVN1Ym1pdGlvbnMgZnJvbSBhcGlzZXJ2aWNlIGluIGNvbnRlc3QtZGV0YWlscycpO1xyXG4gICAgLy8gICAgICAgICBjb25zb2xlLmxvZyhteVN1Ym1pdGlvbnMpO1xyXG4gICAgLy8gICAgICAgICB0aGlzLm15U3VibWl0aW9ucyA9IG15U3VibWl0aW9ucztcclxuICAgIC8vICAgICAgICAgY29uc29sZS5sb2coJ3RoaXMubXlTdWJtaXRpb25zJyk7XHJcbiAgICAvLyAgICAgICAgIGNvbnNvbGUubG9nKHRoaXMubXlTdWJtaXRpb25zKTtcclxuICAgIC8vICAgICB9LFxyXG4gICAgLy8gICAgIGVycm9yID0+IHtcclxuXHJcbiAgICAvLyAgICAgICB0aGlzLmlzTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgLy8gICAgICAgdGhpcy5ub3RpZmljYXRpb25zU2VydmljZS5lcnJvcihlcnJvci50aXRsZSwgZXJyb3IuZXJyb3IubWVzc2FnZSwge3RpbWVPdXQ6IDMwMDAsIHNob3dQcm9ncmVzc0JhcjogZmFsc2V9KVxyXG4gICAgLy8gICB9KTtcclxuXHJcbiAgICAvLyAgICAgfSwgKGVycm9yKSA9PiB7XHJcbiAgICAvLyAgICAgICAgIHRoaXMuaXNMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAvLyAgICAgICAgIHdpbmRvdy5zY3JvbGxUbygwLCAwKTtcclxuICAgIC8vICAgICAgICAgdGhpcy5hcGlTZXJ2aWNlLmdldENvbnRlc3RTdWJtaXRpb25zKHRoaXMuY29udGVzdElkKSBcclxuICAgIC8vICAgICAuc3Vic2NyaWJlKHN1Ym1pdGlvbnMgPT4ge1xyXG4gICAgLy8gICAgICAgICBjb25zb2xlLmxvZygnc3VibWl0aW9ucyBmcm9tIGFwaXNlcnZpY2UgaW4gY29udGVzdC1kZXRhaWxzJyk7XHJcbiAgICAvLyAgICAgICAgIGNvbnNvbGUubG9nKHN1Ym1pdGlvbnMpO1xyXG4gICAgLy8gICAgICAgICB0aGlzLnN1Ym1pdGlvbnMgPSBzdWJtaXRpb25zO1xyXG4gICAgLy8gICAgICAgICB0aGlzLmlzTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgLy8gICAgICAgICBjb25zb2xlLmxvZyh0aGlzLnN1Ym1pdGlvbnMpO1xyXG4gICAgLy8gICAgICAgICB0aGlzLm5vdGlmaWNhdGlvbnNTZXJ2aWNlLnN1Y2Nlc3MoJ0RpemFpbmFpIMSva2VsdGknLCAnRGl6YWluYWkgxK9rZWx0aSBzxJdrbWluZ2FpJywge3RpbWVPdXQ6IDMwMDAsIHNob3dQcm9ncmVzc0JhcjogZmFsc2V9KVxyXG4gICAgLy8gICAgIH0sXHJcbiAgICAvLyAgICAgZXJyb3IgPT4ge1xyXG4gICAgLy8gICAgICAgdGhpcy5pc0xvYWRpbmcgPSBmYWxzZTtcclxuICAgIC8vICAgICAgIHRoaXMubm90aWZpY2F0aW9uc1NlcnZpY2UuZXJyb3IoZXJyb3IudGl0bGUsIGVycm9yLmVycm9yLm1lc3NhZ2UsIHt0aW1lT3V0OiAzMDAwLCBzaG93UHJvZ3Jlc3NCYXI6IGZhbHNlfSlcclxuICAgIC8vICAgICB9KTtcclxuICAgIC8vICAgICB0aGlzLmFwaVNlcnZpY2UuZ2V0TXlTdWJtaXRpb25zKHRoaXMuY29udGVzdElkKVxyXG4gICAgLy8gICAgIC5zdWJzY3JpYmUobXlTdWJtaXRpb25zID0+IHtcclxuICAgIC8vICAgICAgICAgY29uc29sZS5sb2coJ015U3VibWl0aW9ucyBmcm9tIGFwaXNlcnZpY2UgaW4gY29udGVzdC1kZXRhaWxzJyk7XHJcbiAgICAvLyAgICAgICAgIGNvbnNvbGUubG9nKG15U3VibWl0aW9ucyk7XHJcbiAgICAvLyAgICAgICAgIHRoaXMubXlTdWJtaXRpb25zID0gbXlTdWJtaXRpb25zO1xyXG4gICAgLy8gICAgICAgICBjb25zb2xlLmxvZygndGhpcy5teVN1Ym1pdGlvbnMnKTtcclxuICAgIC8vICAgICAgICAgY29uc29sZS5sb2codGhpcy5teVN1Ym1pdGlvbnMpO1xyXG4gICAgLy8gICAgIH0sXHJcbiAgICAvLyAgICAgZXJyb3IgPT4ge1xyXG4gICAgLy8gICAgICAgdGhpcy5pc0xvYWRpbmcgPSBmYWxzZTtcclxuICAgIC8vICAgICAgIHRoaXMubm90aWZpY2F0aW9uc1NlcnZpY2UuZXJyb3IoZXJyb3IudGl0bGUsIGVycm9yLmVycm9yLm1lc3NhZ2UsIHt0aW1lT3V0OiAzMDAwLCBzaG93UHJvZ3Jlc3NCYXI6IGZhbHNlfSlcclxuICAgIC8vICAgfSk7XHJcblxyXG4gICAgLy8gICAgIH0pO1xyXG4gICAgLy8gfVxyXG5cclxuICAgIC8vIFVwbG9hZCBhZGRpdGlvbmFsIGZpbGVzXHJcblxyXG4gICAgdXBsb2FkQWRkaXRpb25hbEZpbGVzKCkge1xyXG4gICAgICB0aGlzLmlzTG9hZGluZyA9IHRydWU7XHJcbiAgICAgICAgdGhpcy51c2VySWQgPSBzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKCd1c2VySWQnKTtcclxuICAgICAgICB0aGlzLm1ha2VGaWxlUmVxdWVzdCgnaHR0cDovL2xvY2FsaG9zdDozMDAwL2FwaS92MS9jb250ZXN0cy8nICsgdGhpcy5jb250ZXN0SWQgKyAnL2ZpbGVzJyx0aGlzLmZpbGVzVG9VcGxvYWQsIFwiYWRkaXRpb25hbGZpbGVzXCIpLnRoZW4oKHJlc3VsdCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhyZXN1bHQpO1xyXG4gICAgICAgICAgICB0aGlzLmlzTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICB0aGlzLmFwaVNlcnZpY2UuZ2V0Q29udGVzdEFkZGl0aW9uYWxGaWxlcyh0aGlzLmNvbnRlc3RJZClcclxuICAgICAgICAgICAgLnN1YnNjcmliZShkYXRhID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5hZGRpdGlvbmFsRmlsZXMgPSBkYXRhO1xyXG4gICAgICAgICAgICB9LCBlcnJvciA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmlzTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5ub3RpZmljYXRpb25zU2VydmljZS5lcnJvcihlcnJvci50aXRsZSwgZXJyb3IuZXJyb3IubWVzc2FnZSwge3RpbWVPdXQ6IDMwMDAsIHNob3dQcm9ncmVzc0JhcjogZmFsc2V9KVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAvL3RoaXMuZmlsZXNUb1VwbG9hZCA9IFtdO1xyXG4gICAgICAgIH0sIChlcnJvcikgPT4geyAvLyBUT0RPIGZpbmQgb3V0IHdoeSBpdCBhbHdheXMgZ28gaW50byBlcnJvciBzdGF0ZVxyXG4gICAgICAgICAgICB0aGlzLmFwaVNlcnZpY2UuZ2V0Q29udGVzdEFkZGl0aW9uYWxGaWxlcyh0aGlzLmNvbnRlc3RJZClcclxuICAgICAgICAgICAgLnN1YnNjcmliZShkYXRhID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuaXNMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhkYXRhKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuYWRkaXRpb25hbEZpbGVzID0gZGF0YTtcclxuICAgICAgICAgICAgfSwgZXJyb3IgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5pc0xvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIHRoaXMubm90aWZpY2F0aW9uc1NlcnZpY2UuZXJyb3IoZXJyb3IudGl0bGUsIGVycm9yLmVycm9yLm1lc3NhZ2UsIHt0aW1lT3V0OiAzMDAwLCBzaG93UHJvZ3Jlc3NCYXI6IGZhbHNlfSlcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgdGhpcy5ub3RpZmljYXRpb25zU2VydmljZS5zdWNjZXNzKCfErmtlbHRhJywnRmFpbGFpIMSva2VsdGknLCB7dGltZU91dDogMzAwMCwgc2hvd1Byb2dyZXNzQmFyOiBmYWxzZX0pXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgZmlsZUNoYW5nZUV2ZW50KGZpbGVJbnB1dDogYW55KXtcclxuICAgICAgICB0aGlzLmZpbGVzVG9VcGxvYWQgPSA8QXJyYXk8RmlsZT4+IGZpbGVJbnB1dC50YXJnZXQuZmlsZXM7XHJcbiAgICAgICAgLy90aGlzLmZpbGVzVG9VcGxvYWQuZm9yRWFjaCgoZmlsZSwgaSkgPT4gdGhpcy5maWxlc1RvVXBsb2FkLnB1c2goZmlsZUlucHV0LnRhcmdldC5maWxlc1tpXSkpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGZpbGVJbnB1dC50YXJnZXQuZmlsZXMpO1xyXG4gICAgICAgIC8vbGV0IGFyciA9IEFycmF5LmZyb20oZmlsZUlucHV0LnRhcmdldC5maWxlcyk7IC8vY29udmVydCBGaWxlIE9iamVjdCB0byBBcnJheSB0byBwdXNoIGl0XHJcbiAgICAgICAgLy90aGlzLmZpbGVzVG9VcGxvYWQucHVzaChhcnJbMF0pOyAvL3VzZSB0aGlzIGlmIHlvdSB1c2UgbXVsdGlwbGUgc2luZ2xlIGZpbGUgaW5wdXRzXHJcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5maWxlc1RvVXBsb2FkKTtcclxuICAgIH1cclxuIFxyXG4gICAgbWFrZUZpbGVSZXF1ZXN0KHVybDogc3RyaW5nLCBmaWxlczogQXJyYXk8RmlsZT4sIGZpbGVUeXBlOiBzdHJpbmcpIHtcclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICAgICAgICB2YXIgZm9ybURhdGE6IGFueSA9IG5ldyBGb3JtRGF0YSgpO1xyXG4gICAgICAgICAgICB2YXIgeGhyID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XHJcbiAgICAgICAgICAgIGZvcih2YXIgaSA9IDA7IGkgPCBmaWxlcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgZm9ybURhdGEuYXBwZW5kKGZpbGVUeXBlLCBmaWxlc1tpXSwgZmlsZXNbaV0ubmFtZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgeGhyLnVwbG9hZC5hZGRFdmVudExpc3RlbmVyKFwicHJvZ3Jlc3NcIiwgKGV2dCkgPT4gdGhpcy5jYWxjdWxhdGVVcGxvYWRQcm9ncmVzcyhldnQpLCBmYWxzZSk7IFxyXG4gICAgICAgICAgICB4aHIub25yZWFkeXN0YXRlY2hhbmdlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKHhoci5yZWFkeVN0YXRlID09IDQpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoeGhyLnN0YXR1cyA9PSAyMDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coeGhyLnJlc3BvbnNlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShKU09OLnBhcnNlKHhoci5yZXNwb25zZSkpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHhoci5yZXNwb25zZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlamVjdCh4aHIucmVzcG9uc2UpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB4aHIub25lcnJvciA9IGZ1bmN0aW9uKGUpIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdLbGFpZGEgxK9rZWxpYW50IGZhaWx1cycpO1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZSk7XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIHhoci5vcGVuKFwiUE9TVFwiLCB1cmwsIHRydWUpO1xyXG4gICAgICAgICAgICB4aHIuc2VuZChmb3JtRGF0YSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgY2FsY3VsYXRlVXBsb2FkUHJvZ3Jlc3MoZXZ0KSB7XHJcbiAgICBpZiAoZXZ0Lmxlbmd0aENvbXB1dGFibGUpIHtcclxuICAgICAgICB0aGlzLnBlcmNlbnQgPSBNYXRoLnJvdW5kKGV2dC5sb2FkZWQgLyBldnQudG90YWwgKiAxMDApO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiUEVSQ0VOVCA6IFwiLCB0aGlzLnBlcmNlbnQgKyBcIiVcIik7XHJcbiAgICB9XHJcbiAgICAvL0VORCBPRiBGSUxFIFVQTE9BRCBTVFVGRlxyXG5cclxufVxyXG5cclxuICAgIG9uUmF0aW5nKG9iajogYW55KSB7XHJcbiAgICAgICAgdGhpcy5pc0xvYWRpbmcgPSB0cnVlO1xyXG4gICAgICAgIHZhciBzdWJtaXRpb24gPSB0aGlzLnN1Ym1pdGlvbnMuZmlsdGVyKChpdGVtOiBhbnkpID0+IGl0ZW0uc3VibWl0aW9uSWQgPT0gb2JqLnN1Ym1pdGlvbklkKTtcclxuICAgICAgICBjb25zb2xlLmxvZygnb25SYXRpbmcoKSBzdWJtaXRpb24gYWZ0ZXIgZmlsdGVyJyk7XHJcbiAgICAgICAgY29uc29sZS5sb2coc3VibWl0aW9uKTtcclxuICAgICAgICBpZiAoISFzdWJtaXRpb24gJiYgc3VibWl0aW9uLmxlbmd0aCA9PSAxKSB7XHJcbiAgICAgICAgICAgIC8vdGhpcy5zdWJtaXRpb25zWzBdLnN1Ym1pdGlvblJhdGluZyA9IG9iai5yYXRpbmc7XHJcblxyXG4gICAgICAgICAgICBzdWJtaXRpb25bMF0uc3VibWl0aW9uUmF0aW5nID0gb2JqLnJhdGluZztcclxuICAgICAgICAgICAgdGhpcy5jb250ZXN0c1NlcnZpY2UudXBkYXRlU3VibWl0aW9uUmF0aW5nKHRoaXMuY29udGVzdCwgc3VibWl0aW9uWzBdKVxyXG4gICAgICAgICAgICAgICAgLnN1YnNjcmliZShkYXRhID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnUmF0aW5nIGNoYW5nZWQnKTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhkYXRhKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoc3VibWl0aW9uWzBdLnN0YXR1cyA9PSAnTnVnYWzEl3RvamFzJykgeyBcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy53aW5uZXJTdWJtaXRpb24uc3VibWl0aW9uUmF0aW5nID0gZGF0YS5vYmouc3VibWl0aW9uc1tvYmouc3VibWl0aW9uSWQgLSAxXS5zdWJtaXRpb25SYXRpbmc7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaXNMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5ub3RpZmljYXRpb25zU2VydmljZS5zdWNjZXNzKCdBdG5hdWppbnRhJywgJ1JlaXRpbmdhcyBzxJdrbWluZ2FpIHBha2Vpc3RhcycsIHt0aW1lT3V0OiAzMDAwLCBzaG93UHJvZ3Jlc3NCYXI6IGZhbHNlfSlcclxuICAgICAgICAgICAgICAgIH0sIGVycm9yID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmlzTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubm90aWZpY2F0aW9uc1NlcnZpY2UuZXJyb3IoZXJyb3IudGl0bGUsIGVycm9yLmVycm9yLm1lc3NhZ2UsIHt0aW1lT3V0OiAzMDAwLCBzaG93UHJvZ3Jlc3NCYXI6IGZhbHNlfSlcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGlzQ29udGVzdFB1Ymxpc2hlcihjb250ZXN0QXV0aG9ySWQ6IHN0cmluZykge1xyXG4gICAgICAgIHZhciB1c2VySWQgPSBzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKCd1c2VySWQnKTtcclxuICAgICAgICByZXR1cm4gY29udGVzdEF1dGhvcklkID09IHVzZXJJZDtcclxuICAgIH1cclxuXHJcbiAgIHZpZXdTdWJtaXRpb25EZXRhaWxzKGNvbnRlc3RJZCwgY29udGVzdCwgc3VibWl0aW9uKSB7XHJcbiAgICAgICB0aGlzLmNvbnRlc3RzU2VydmljZS5zdWJtaXRpb25EZXRhaWxzID0ge2NvbnRlc3RJZDogY29udGVzdElkLCBjb250ZXN0OiBjb250ZXN0LCBzdWJtaXRpb246IHN1Ym1pdGlvbn07XHJcbiAgICAgICBjb25zb2xlLmxvZyh0aGlzLmNvbnRlc3RzU2VydmljZS5zdWJtaXRpb25EZXRhaWxzKTtcclxuICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFtzdWJtaXRpb24uc3VibWl0aW9uSWRdLCB7cmVsYXRpdmVUbzogdGhpcy5yb3V0ZX0pO1xyXG4gICB9XHJcblxyXG59Il19
