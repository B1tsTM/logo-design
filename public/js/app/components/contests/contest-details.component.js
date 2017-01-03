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
            //START
            _this.apiService.getContestSubmitions(_this.contestId) //CURRENT FOCUS
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
            if (_this.isLoggedIn()) {
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
                    //this.notificationsService.error('Įvyko klaida', 'Nepavyko gauti konkurso dizainų', {timeOut: 3000, showProgressBar: false})
                });
            }
            _this.apiService.getWinnerSubmition(_this.contestId)
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
            //END
        }, function (error) {
            //this.errorService.handleError(error);
            _this.isLoading = false;
            _this.notificationsService.error(error.title, error.error.message, { timeOut: 3000, showProgressBar: false });
            _this.router.navigate(['/konkursai']);
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
    ContestDetailsComponent.prototype.isAdmin = function () {
        return this.authService.isAdmin();
    };
    ContestDetailsComponent.prototype.isDesignAuthor = function (designerId) {
        var userId = sessionStorage.getItem('userId');
        return designerId == userId;
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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvY29udGVzdHMvY29udGVzdC1kZXRhaWxzLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQWtDLGVBQWUsQ0FBQyxDQUFBO0FBQ2xELHVCQUErQyxpQkFBaUIsQ0FBQyxDQUFBO0FBRWpFLGlDQUFnQyxpQ0FBaUMsQ0FBQyxDQUFBO0FBQ2xFLHNCQUE2QixvQkFBb0IsQ0FBQyxDQUFBO0FBQ2xELDZCQUE0Qiw2QkFBNkIsQ0FBQyxDQUFBO0FBQzFELDRCQUEyQiw0QkFBNEIsQ0FBQyxDQUFBO0FBRXhELElBQVksTUFBTSxXQUFNLFFBQVEsQ0FBQyxDQUFBO0FBQ2pDLFFBQU8sb0JBQW9CLENBQUMsQ0FBQTtBQUM1Qix1Q0FBcUMsd0JBQXdCLENBQUMsQ0FBQTtBQUM5RCxJQUFZLFFBQVEsV0FBTSxXQUFXLENBQUMsQ0FBQTtBQVV0QztJQWlCRSxpQ0FBb0IsS0FBcUIsRUFDckIsTUFBYyxFQUNkLGVBQWdDLEVBQ2hDLFlBQTBCLEVBQzFCLFdBQXdCLEVBQ3hCLFVBQXNCLEVBQ3RCLG9CQUEwQztRQU4xQyxVQUFLLEdBQUwsS0FBSyxDQUFnQjtRQUNyQixXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQ2Qsb0JBQWUsR0FBZixlQUFlLENBQWlCO1FBQ2hDLGlCQUFZLEdBQVosWUFBWSxDQUFjO1FBQzFCLGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBQ3hCLGVBQVUsR0FBVixVQUFVLENBQVk7UUFDdEIseUJBQW9CLEdBQXBCLG9CQUFvQixDQUFzQjtRQXRCOUQsY0FBUyxHQUFXLEVBQUUsQ0FBQztRQUN2QixZQUFPLEdBQVksSUFBSSxDQUFDO1FBQ3hCLFdBQU0sR0FBVyxFQUFFLENBQUM7UUFDcEIsa0JBQWEsR0FBVyxFQUFFLENBQUM7UUFFM0IsZUFBVSxHQUFVLEVBQUUsQ0FBQztRQUN2QixpQkFBWSxHQUFVLEVBQUUsQ0FBQztRQUN6QixvQkFBZSxHQUFHLEVBQUUsQ0FBQztRQUtyQixjQUFT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QzlDLE1BQU0sQ0FBQyxlQUFlLElBQUksTUFBTSxDQUFDO0lBQ3JDLENBQUM7SUFFRixzREFBb0IsR0FBcEIsVUFBcUIsU0FBUyxFQUFFLE9BQU8sRUFBRSxTQUFTO1FBQzlDLElBQUksQ0FBQyxlQUFlLENBQUMsZ0JBQWdCLEdBQUcsRUFBQyxTQUFTLEVBQUUsU0FBUyxFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBQyxDQUFDO1FBQ3ZHLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO1FBQ25ELElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsU0FBUyxDQUFDLFdBQVcsQ0FBQyxFQUFFLEVBQUMsVUFBVSxFQUFFLElBQUksQ0FBQyxLQUFLLEVBQUMsQ0FBQyxDQUFDO0lBQzVFLENBQUM7SUEvV0o7UUFBQyxnQkFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFFBQVEsRUFBRSxpQkFBaUI7WUFDM0IsV0FBVyxFQUFFLGdDQUFnQztZQUM3QyxTQUFTLEVBQUUsQ0FBQywrQkFBK0IsQ0FBQztTQUM3QyxDQUFDOzsrQkFBQTtJQTRXRiw4QkFBQztBQUFELENBM1dBLEFBMldDLElBQUE7QUEzV1ksK0JBQXVCLDBCQTJXbkMsQ0FBQSIsImZpbGUiOiJjb21wb25lbnRzL2NvbnRlc3RzL2NvbnRlc3QtZGV0YWlscy5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBSb3V0ZXIsIEFjdGl2YXRlZFJvdXRlLCBQYXJhbXMgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5pbXBvcnQgeyBDb250ZXN0IH0gZnJvbSAnLi4vLi4vbW9kZWxzL2NvbnRlc3QnO1xyXG5pbXBvcnQgeyBDb250ZXN0c1NlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9jb250ZXN0cy5zZXJ2aWNlJztcclxuaW1wb3J0IHsgRXJyb3JTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vZXJyb3JzL2luZGV4JztcclxuaW1wb3J0IHsgQXV0aFNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9hdXRoLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBBcGlTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvYXBpLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBGb3JtR3JvdXAsIEZvcm1Db250cm9sLCBGb3JtQnVpbGRlciwgVmFsaWRhdG9ycyB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuaW1wb3J0ICogYXMgbW9tZW50IGZyb20gJ21vbWVudCc7XHJcbmltcG9ydCAnbW9tZW50L21pbi9sb2NhbGVzJztcclxuaW1wb3J0IHsgTm90aWZpY2F0aW9uc1NlcnZpY2UgfSBmcm9tICdhbmd1bGFyMi1ub3RpZmljYXRpb25zJztcclxuaW1wb3J0ICogYXMgQ3J5cHRvSlMgZnJvbSAnY3J5cHRvLWpzJztcclxuXHJcbmRlY2xhcmUgdmFyIGpRdWVyeTogYW55O1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcclxuICBzZWxlY3RvcjogJ2NvbnRlc3QtZGV0YWlscycsXHJcbiAgdGVtcGxhdGVVcmw6ICdjb250ZXN0LWRldGFpbHMuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWydjb250ZXN0LWRldGFpbHMuY29tcG9uZW50LmNzcyddXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBDb250ZXN0RGV0YWlsc0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgY29udGVzdElkOiBzdHJpbmcgPSAnJztcclxuICBjb250ZXN0OiBDb250ZXN0ID0gbnVsbDtcclxuICB1c2VySWQ6IHN0cmluZyA9ICcnO1xyXG4gIGZpbGVzVG9VcGxvYWQ6IEZpbGVbXSA9IFtdO1xyXG4gIHBlcmNlbnQ6IG51bWJlcjtcclxuICBzdWJtaXRpb25zOiBhbnlbXSA9IFtdO1xyXG4gIG15U3VibWl0aW9uczogYW55W10gPSBbXTtcclxuICBhZGRpdGlvbmFsRmlsZXMgPSBbXTtcclxuICB3aW5uZXJTdWJtaXRpb246IGFueTtcclxuICAvL2xvY2FsZSA9IG1vbWVudC5sb2NhbGUoJ2x0Jyk7XHJcbiAgLy9tb21lbnREYXRlOiBhbnkgPSBtb21lbnQoRGF0ZS5ub3coKS50b1N0cmluZygpLCAnWVlZWSBNTU1NIERvJywgJ2x0Jyk7XHJcbiAgbW9tZW50RGF0ZTogYW55O1xyXG4gIGlzTG9hZGluZyA9IGZhbHNlO1xyXG4gIHB1YmxpYyBvcHRpb25zID0ge1xyXG4gICAgICBwb3NpdGlvbjogW1widG9wXCIsXCJyaWdodFwiXVxyXG4gICAgfTtcclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSxcclxuICAgICAgICAgICAgICBwcml2YXRlIHJvdXRlcjogUm91dGVyLFxyXG4gICAgICAgICAgICAgIHByaXZhdGUgY29udGVzdHNTZXJ2aWNlOiBDb250ZXN0c1NlcnZpY2UsXHJcbiAgICAgICAgICAgICAgcHJpdmF0ZSBlcnJvclNlcnZpY2U6IEVycm9yU2VydmljZSxcclxuICAgICAgICAgICAgICBwcml2YXRlIGF1dGhTZXJ2aWNlOiBBdXRoU2VydmljZSxcclxuICAgICAgICAgICAgICBwcml2YXRlIGFwaVNlcnZpY2U6IEFwaVNlcnZpY2UsXHJcbiAgICAgICAgICAgICAgcHJpdmF0ZSBub3RpZmljYXRpb25zU2VydmljZTogTm90aWZpY2F0aW9uc1NlcnZpY2UpIHsgfVxyXG5cclxuICBuZ09uSW5pdCgpIHsgXHJcbiAgICB0aGlzLmlzTG9hZGluZyA9IHRydWU7XHJcbiAgIG1vbWVudC5sb2NhbGUoJ2x0LWx0Jyk7XHJcbiAgICAvLyAgIGNvbnNvbGUubG9nKCdMT0NBTEUnKTtcclxuICAgIC8vICAgY29uc29sZS5sb2cobG9jYWxlKTtcclxuICAgICAgLy90aGlzLm1vbWVudERhdGUgPSBtb21lbnQoKS5mb3JtYXQoJ1lZWVkgTU1NTSBEbycpO1xyXG4gICAgICB0aGlzLm1vbWVudERhdGUgPSBtb21lbnQoKS5hZGQoMywgJ2RheXMnKS5jYWxlbmRhcigpO1xyXG4gICAgdGhpcy5yb3V0ZS5wYXJhbXMuc3Vic2NyaWJlKChwYXJhbXM6IFBhcmFtcykgPT4ge1xyXG4gICAgICB0aGlzLmNvbnRlc3RJZCA9IHBhcmFtc1snaWQnXTtcclxuICAgIH0pO1xyXG4gICAgdGhpcy5jb250ZXN0c1NlcnZpY2UuZ2V0SW5kaXZpZHVhbENvbnRlc3QodGhpcy5jb250ZXN0SWQpXHJcbiAgICAgIC5zdWJzY3JpYmUoY29udGVzdCA9PiB7XHJcbiAgICAgICAgdGhpcy5jb250ZXN0ID0gY29udGVzdDtcclxuICAgICAgICB0aGlzLmFkZGl0aW9uYWxGaWxlcyA9IGNvbnRlc3QuYWRkaXRpb25hbEZpbGVzO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdjb250ZXN0LWRldGFpbHMuY29tcG9uZW50LnRzIHRoaXMuY29udGVzdCcpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMuY29udGVzdCk7XHJcbiAgICAgICAgLy9TVEFSVFxyXG4gICAgICAgIHRoaXMuYXBpU2VydmljZS5nZXRDb250ZXN0U3VibWl0aW9ucyh0aGlzLmNvbnRlc3RJZCkgLy9DVVJSRU5UIEZPQ1VTXHJcbiAgICAgICAgLnN1YnNjcmliZShzdWJtaXRpb25zID0+IHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ3N1Ym1pdGlvbnMgZnJvbSBhcGlzZXJ2aWNlIGluIGNvbnRlc3QtZGV0YWlscycpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhzdWJtaXRpb25zKTtcclxuICAgICAgICAgICAgdGhpcy5zdWJtaXRpb25zID0gc3VibWl0aW9ucztcclxuICAgICAgICAgICAgdGhpcy5pc0xvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2codGhpcy5zdWJtaXRpb25zKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGVycm9yID0+IHtcclxuICAgICAgICAgIC8vdGhpcy5lcnJvclNlcnZpY2UuaGFuZGxlRXJyb3IoZXJyb3IpO1xyXG4gICAgICAgICAgdGhpcy5pc0xvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgIHRoaXMubm90aWZpY2F0aW9uc1NlcnZpY2UuZXJyb3IoZXJyb3IudGl0bGUsIGVycm9yLmVycm9yLm1lc3NhZ2UsIHt0aW1lT3V0OiAzMDAwLCBzaG93UHJvZ3Jlc3NCYXI6IGZhbHNlfSlcclxuICAgICAgfSk7XHJcbiAgICAgIGlmICh0aGlzLmlzTG9nZ2VkSW4oKSkge1xyXG4gICAgICAgIHRoaXMuYXBpU2VydmljZS5nZXRNeVN1Ym1pdGlvbnModGhpcy5jb250ZXN0SWQpXHJcbiAgICAgICAgICAuc3Vic2NyaWJlKG15U3VibWl0aW9ucyA9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdNeVN1Ym1pdGlvbnMgZnJvbSBhcGlzZXJ2aWNlIGluIGNvbnRlc3QtZGV0YWlscycpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhteVN1Ym1pdGlvbnMpO1xyXG4gICAgICAgICAgICB0aGlzLm15U3VibWl0aW9ucyA9IG15U3VibWl0aW9ucztcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ3RoaXMubXlTdWJtaXRpb25zJyk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHRoaXMubXlTdWJtaXRpb25zKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGVycm9yID0+IHtcclxuICAgICAgICAgIC8vdGhpcy5lcnJvclNlcnZpY2UuaGFuZGxlRXJyb3IoZXJyb3IpO1xyXG4gICAgICAgICAgdGhpcy5pc0xvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgIC8vdGhpcy5ub3RpZmljYXRpb25zU2VydmljZS5lcnJvcignxK52eWtvIGtsYWlkYScsICdOZXBhdnlrbyBnYXV0aSBrb25rdXJzbyBkaXphaW7FsycsIHt0aW1lT3V0OiAzMDAwLCBzaG93UHJvZ3Jlc3NCYXI6IGZhbHNlfSlcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICB0aGlzLmFwaVNlcnZpY2UuZ2V0V2lubmVyU3VibWl0aW9uKHRoaXMuY29udGVzdElkKVxyXG4gICAgICAgIC5zdWJzY3JpYmUoZGF0YSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xyXG4gICAgICAgICAgICBpZiAoZGF0YS5zdWJtaXRpb25VcmwpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMud2lubmVyU3VibWl0aW9uID0gZGF0YTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdXSU5OTk5OTk5OTk5FUicpO1xyXG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKHRoaXMud2lubmVyU3VibWl0aW9uKTtcclxuICAgICAgICB9LCBlcnJvciA9PiB7XHJcbiAgICAgICAgICAgdGhpcy5pc0xvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgIHRoaXMubm90aWZpY2F0aW9uc1NlcnZpY2UuaW5mbyhlcnJvci50aXRsZSwgZXJyb3IuZXJyb3IubWVzc2FnZSwge3RpbWVPdXQ6IDMwMDAsIHNob3dQcm9ncmVzc0JhcjogZmFsc2V9KSBcclxuICAgICAgICB9KVxyXG4gICAgICAgIC8vRU5EXHJcbiAgICAgIH0sIFxyXG4gICAgICBlcnJvciA9PiB7XHJcbiAgICAgICAgICAvL3RoaXMuZXJyb3JTZXJ2aWNlLmhhbmRsZUVycm9yKGVycm9yKTtcclxuICAgICAgICAgIHRoaXMuaXNMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICB0aGlzLm5vdGlmaWNhdGlvbnNTZXJ2aWNlLmVycm9yKGVycm9yLnRpdGxlLCBlcnJvci5lcnJvci5tZXNzYWdlLCB7dGltZU91dDogMzAwMCwgc2hvd1Byb2dyZXNzQmFyOiBmYWxzZX0pXHJcbiAgICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJy9rb25rdXJzYWknXSk7XHJcbiAgICAgIH0pO1xyXG4gICAgXHJcblxyXG4gIH0gLy9FbmQgb2YgbmdPbkluaXRcclxuXHJcbiAgbmdBZnRlclZpZXdJbml0KCkge1xyXG4gICAgICBqUXVlcnkoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIGpRdWVyeShcIi5mYW5jeWJveFwiKS5mYW5jeWJveCh7XHJcbiAgICAgICAgXHJcbiAgICAgICAgfSk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGlzQ2xpZW50KCkge1xyXG4gICAgICByZXR1cm4gdGhpcy5hdXRoU2VydmljZS5pc0NsaWVudCgpO1xyXG4gIH1cclxuXHJcbiAgaXNEZXNpZ25lcigpIHtcclxuICAgIHJldHVybiB0aGlzLmF1dGhTZXJ2aWNlLmlzRGVzaWduZXIoKTtcclxuICB9XHJcblxyXG4gIGlzTG9nZ2VkSW4oKSB7XHJcbiAgcmV0dXJuIHRoaXMuYXV0aFNlcnZpY2UuaXNMb2dnZWRJbigpO1xyXG4gIH1cclxuXHJcbiAgaXNFbWFpbENvbmZpcm1lZCgpIHtcclxuICAgICAgcmV0dXJuIHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oJ2VtYWlsQ29uZmlybWVkJykgPT0gQ3J5cHRvSlMuU0hBMygndHJ1ZScpLnRvU3RyaW5nKCk7O1xyXG4gIH1cclxuICBpc0FkbWluKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuYXV0aFNlcnZpY2UuaXNBZG1pbigpO1xyXG4gIH1cclxuXHJcbiAgaXNEZXNpZ25BdXRob3IoZGVzaWduZXJJZCkge1xyXG4gICAgICB2YXIgdXNlcklkID0gc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbSgndXNlcklkJyk7XHJcbiAgICAgICAgcmV0dXJuIGRlc2lnbmVySWQgPT0gdXNlcklkO1xyXG4gIH1cclxuXHJcbiAgLy9GSUxFIFVQTE9BRCBTVFVGRlxyXG5cclxuICB1cGxvYWRTdWJtaXRpb25zKCkge1xyXG4gICAgICB0aGlzLmlzTG9hZGluZyA9IHRydWU7XHJcbiAgICAgICAgdGhpcy51c2VySWQgPSBzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKCd1c2VySWQnKTtcclxuICAgICAgICB0aGlzLm1ha2VGaWxlUmVxdWVzdCgnaHR0cDovL2xvY2FsaG9zdDozMDAwL2FwaS92MS9zdWJtaXRpb25zLycgKyB0aGlzLmNvbnRlc3RJZCArICcvJyArdGhpcy51c2VySWQsdGhpcy5maWxlc1RvVXBsb2FkLCBcInN1Ym1pdGlvblwiKS50aGVuKChyZXN1bHQpID0+IHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2cocmVzdWx0KTtcclxuICAgICAgICAgICAgdGhpcy5pc0xvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICB9LCAoZXJyb3IpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5pc0xvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgdGhpcy5ub3RpZmljYXRpb25zU2VydmljZS5lcnJvcihlcnJvci50aXRsZSwgZXJyb3IuZXJyb3IubWVzc2FnZSwge3RpbWVPdXQ6IDMwMDAsIHNob3dQcm9ncmVzc0JhcjogZmFsc2V9KVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMubWFrZUZpbGVSZXF1ZXN0KCdodHRwOi8vbG9jYWxob3N0OjMwMDAvYXBpL3YxL3N1Ym1pdGlvbnMvZ2FsbGVyeS8nICsgdGhpcy5jb250ZXN0SWQgKyAnLycgK3RoaXMudXNlcklkLCB0aGlzLmZpbGVzVG9VcGxvYWQsIFwic3VibWl0aW9uXCIpLnRoZW4oKHJlc3VsdCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhyZXN1bHQpO1xyXG4gICAgICAgICAgICB0aGlzLmZpbGVzVG9VcGxvYWQgPSBbXTtcclxuICAgICAgICB9LCAoZXJyb3IpID0+IHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ3JlYWNoZWQgZXJyJyk7XHJcbiAgICAgICAgICAgIHRoaXMuaXNMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHdpbmRvdy5zY3JvbGxUbygwLCAwKTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuYXBpU2VydmljZS5nZXRDb250ZXN0U3VibWl0aW9ucyh0aGlzLmNvbnRlc3RJZCkgXHJcbiAgICAgICAgICAgIC5zdWJzY3JpYmUoc3VibWl0aW9ucyA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnc3VibWl0aW9ucyBmcm9tIGFwaXNlcnZpY2UgaW4gY29udGVzdC1kZXRhaWxzJyk7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhzdWJtaXRpb25zKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuc3VibWl0aW9ucyA9IHN1Ym1pdGlvbnM7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmlzTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2codGhpcy5zdWJtaXRpb25zKTtcclxuICAgICAgICAgICAgICAgIHRoaXMubm90aWZpY2F0aW9uc1NlcnZpY2Uuc3VjY2VzcygnRGl6YWluYWkgxK9rZWx0aScsICdEaXphaW5haSDEr2tlbHRpIHPEl2ttaW5nYWknLCB7dGltZU91dDogMzAwMCwgc2hvd1Byb2dyZXNzQmFyOiBmYWxzZX0pXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGVycm9yID0+IHtcclxuICAgICAgICAgICAgdGhpcy5pc0xvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgdGhpcy5ub3RpZmljYXRpb25zU2VydmljZS5lcnJvcihlcnJvci50aXRsZSwgZXJyb3IuZXJyb3IubWVzc2FnZSwge3RpbWVPdXQ6IDMwMDAsIHNob3dQcm9ncmVzc0JhcjogZmFsc2V9KVxyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuYXBpU2VydmljZS5nZXRNeVN1Ym1pdGlvbnModGhpcy5jb250ZXN0SWQpXHJcbiAgICAgICAgICAgIC5zdWJzY3JpYmUobXlTdWJtaXRpb25zID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdNeVN1Ym1pdGlvbnMgZnJvbSBhcGlzZXJ2aWNlIGluIGNvbnRlc3QtZGV0YWlscycpO1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2cobXlTdWJtaXRpb25zKTtcclxuICAgICAgICAgICAgICAgIHRoaXMubXlTdWJtaXRpb25zID0gbXlTdWJtaXRpb25zO1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ3RoaXMubXlTdWJtaXRpb25zJyk7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyh0aGlzLm15U3VibWl0aW9ucyk7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGVycm9yID0+IHtcclxuICAgICAgICAgICAgdGhpcy5pc0xvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgdGhpcy5ub3RpZmljYXRpb25zU2VydmljZS5lcnJvcihlcnJvci50aXRsZSwgZXJyb3IuZXJyb3IubWVzc2FnZSwge3RpbWVPdXQ6IDMwMDAsIHNob3dQcm9ncmVzc0JhcjogZmFsc2V9KVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvLyB1cGxvYWRTdWJtaXRpb25zKCkgeyAvLyBTT01FSE9XIEJVR0dFRC4uLiBhZ2FpblxyXG4gICAgLy8gICB0aGlzLmlzTG9hZGluZyA9IHRydWU7XHJcbiAgICAvLyAgICAgdGhpcy51c2VySWQgPSBzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKCd1c2VySWQnKTtcclxuICAgIC8vICAgICB0aGlzLm1ha2VGaWxlUmVxdWVzdCgnaHR0cDovL2xvY2FsaG9zdDozMDAwL2FwaS92MS9zdWJtaXRpb25zLycgKyB0aGlzLmNvbnRlc3RJZCArICcvJyArdGhpcy51c2VySWQsdGhpcy5maWxlc1RvVXBsb2FkLCBcInN1Ym1pdGlvblwiKS50aGVuKChyZXN1bHQpID0+IHtcclxuICAgIC8vICAgICAgICAgY29uc29sZS5sb2cocmVzdWx0KTtcclxuICAgIC8vICAgICAgICAgdGhpcy5pc0xvYWRpbmcgPSBmYWxzZTtcclxuICAgIC8vICAgICB9LCAoZXJyb3IpID0+IHtcclxuICAgIC8vICAgICAgICAgdGhpcy5pc0xvYWRpbmcgPSBmYWxzZTtcclxuICAgIC8vICAgICAgICAgdGhpcy5ub3RpZmljYXRpb25zU2VydmljZS5lcnJvcihlcnJvci50aXRsZSwgZXJyb3IuZXJyb3IubWVzc2FnZSwge3RpbWVPdXQ6IDMwMDAsIHNob3dQcm9ncmVzc0JhcjogZmFsc2V9KVxyXG4gICAgLy8gICAgIH0pO1xyXG4gICAgLy8gICAgIHRoaXMubWFrZUZpbGVSZXF1ZXN0KCdodHRwOi8vbG9jYWxob3N0OjMwMDAvYXBpL3YxL3N1Ym1pdGlvbnMvZ2FsbGVyeS8nICsgdGhpcy5jb250ZXN0SWQgKyAnLycgK3RoaXMudXNlcklkLCB0aGlzLmZpbGVzVG9VcGxvYWQsIFwic3VibWl0aW9uXCIpLnRoZW4oKHJlc3VsdCkgPT4ge1xyXG4gICAgLy8gICAgICAgICBjb25zb2xlLmxvZyhyZXN1bHQpO1xyXG4gICAgLy8gICAgICAgICB0aGlzLmZpbGVzVG9VcGxvYWQgPSBbXTtcclxuXHJcbiAgICAvLyAgICAgICAgIHRoaXMuYXBpU2VydmljZS5nZXRDb250ZXN0U3VibWl0aW9ucyh0aGlzLmNvbnRlc3RJZCkgLy9DVVJSRU5UIEZPQ1VTXHJcbiAgICAvLyAgICAgLnN1YnNjcmliZShzdWJtaXRpb25zID0+IHtcclxuICAgIC8vICAgICAgICAgY29uc29sZS5sb2coJ3N1Ym1pdGlvbnMgZnJvbSBhcGlzZXJ2aWNlIGluIGNvbnRlc3QtZGV0YWlscycpO1xyXG4gICAgLy8gICAgICAgICBjb25zb2xlLmxvZyhzdWJtaXRpb25zKTtcclxuICAgIC8vICAgICAgICAgdGhpcy5zdWJtaXRpb25zID0gc3VibWl0aW9ucztcclxuICAgIC8vICAgICAgICAgdGhpcy5pc0xvYWRpbmcgPSBmYWxzZTtcclxuICAgIC8vICAgICAgICAgY29uc29sZS5sb2codGhpcy5zdWJtaXRpb25zKTtcclxuICAgIC8vICAgICAgICAgdGhpcy5ub3RpZmljYXRpb25zU2VydmljZS5zdWNjZXNzKCdEaXphaW5haSDEr2tlbHRpJywgJ0RpemFpbmFpIMSva2VsdGkgc8SXa21pbmdhaScsIHt0aW1lT3V0OiAzMDAwLCBzaG93UHJvZ3Jlc3NCYXI6IGZhbHNlfSlcclxuICAgIC8vICAgICB9LFxyXG4gICAgLy8gICAgIGVycm9yID0+IHtcclxuICAgIC8vICAgICAgIHRoaXMuaXNMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAvLyAgICAgICB0aGlzLm5vdGlmaWNhdGlvbnNTZXJ2aWNlLmVycm9yKGVycm9yLnRpdGxlLCBlcnJvci5lcnJvci5tZXNzYWdlLCB7dGltZU91dDogMzAwMCwgc2hvd1Byb2dyZXNzQmFyOiBmYWxzZX0pXHJcbiAgICAvLyAgICAgfSk7XHJcblxyXG4gICAgLy8gICAgIHRoaXMuYXBpU2VydmljZS5nZXRNeVN1Ym1pdGlvbnModGhpcy5jb250ZXN0SWQpXHJcbiAgICAvLyAgICAgLnN1YnNjcmliZShteVN1Ym1pdGlvbnMgPT4ge1xyXG4gICAgLy8gICAgICAgICBjb25zb2xlLmxvZygnTXlTdWJtaXRpb25zIGZyb20gYXBpc2VydmljZSBpbiBjb250ZXN0LWRldGFpbHMnKTtcclxuICAgIC8vICAgICAgICAgY29uc29sZS5sb2cobXlTdWJtaXRpb25zKTtcclxuICAgIC8vICAgICAgICAgdGhpcy5teVN1Ym1pdGlvbnMgPSBteVN1Ym1pdGlvbnM7XHJcbiAgICAvLyAgICAgICAgIGNvbnNvbGUubG9nKCd0aGlzLm15U3VibWl0aW9ucycpO1xyXG4gICAgLy8gICAgICAgICBjb25zb2xlLmxvZyh0aGlzLm15U3VibWl0aW9ucyk7XHJcbiAgICAvLyAgICAgfSxcclxuICAgIC8vICAgICBlcnJvciA9PiB7XHJcblxyXG4gICAgLy8gICAgICAgdGhpcy5pc0xvYWRpbmcgPSBmYWxzZTtcclxuICAgIC8vICAgICAgIHRoaXMubm90aWZpY2F0aW9uc1NlcnZpY2UuZXJyb3IoZXJyb3IudGl0bGUsIGVycm9yLmVycm9yLm1lc3NhZ2UsIHt0aW1lT3V0OiAzMDAwLCBzaG93UHJvZ3Jlc3NCYXI6IGZhbHNlfSlcclxuICAgIC8vICAgfSk7XHJcblxyXG4gICAgLy8gICAgIH0sIChlcnJvcikgPT4ge1xyXG4gICAgLy8gICAgICAgICB0aGlzLmlzTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgLy8gICAgICAgICB3aW5kb3cuc2Nyb2xsVG8oMCwgMCk7XHJcbiAgICAvLyAgICAgICAgIHRoaXMuYXBpU2VydmljZS5nZXRDb250ZXN0U3VibWl0aW9ucyh0aGlzLmNvbnRlc3RJZCkgXHJcbiAgICAvLyAgICAgLnN1YnNjcmliZShzdWJtaXRpb25zID0+IHtcclxuICAgIC8vICAgICAgICAgY29uc29sZS5sb2coJ3N1Ym1pdGlvbnMgZnJvbSBhcGlzZXJ2aWNlIGluIGNvbnRlc3QtZGV0YWlscycpO1xyXG4gICAgLy8gICAgICAgICBjb25zb2xlLmxvZyhzdWJtaXRpb25zKTtcclxuICAgIC8vICAgICAgICAgdGhpcy5zdWJtaXRpb25zID0gc3VibWl0aW9ucztcclxuICAgIC8vICAgICAgICAgdGhpcy5pc0xvYWRpbmcgPSBmYWxzZTtcclxuICAgIC8vICAgICAgICAgY29uc29sZS5sb2codGhpcy5zdWJtaXRpb25zKTtcclxuICAgIC8vICAgICAgICAgdGhpcy5ub3RpZmljYXRpb25zU2VydmljZS5zdWNjZXNzKCdEaXphaW5haSDEr2tlbHRpJywgJ0RpemFpbmFpIMSva2VsdGkgc8SXa21pbmdhaScsIHt0aW1lT3V0OiAzMDAwLCBzaG93UHJvZ3Jlc3NCYXI6IGZhbHNlfSlcclxuICAgIC8vICAgICB9LFxyXG4gICAgLy8gICAgIGVycm9yID0+IHtcclxuICAgIC8vICAgICAgIHRoaXMuaXNMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAvLyAgICAgICB0aGlzLm5vdGlmaWNhdGlvbnNTZXJ2aWNlLmVycm9yKGVycm9yLnRpdGxlLCBlcnJvci5lcnJvci5tZXNzYWdlLCB7dGltZU91dDogMzAwMCwgc2hvd1Byb2dyZXNzQmFyOiBmYWxzZX0pXHJcbiAgICAvLyAgICAgfSk7XHJcbiAgICAvLyAgICAgdGhpcy5hcGlTZXJ2aWNlLmdldE15U3VibWl0aW9ucyh0aGlzLmNvbnRlc3RJZClcclxuICAgIC8vICAgICAuc3Vic2NyaWJlKG15U3VibWl0aW9ucyA9PiB7XHJcbiAgICAvLyAgICAgICAgIGNvbnNvbGUubG9nKCdNeVN1Ym1pdGlvbnMgZnJvbSBhcGlzZXJ2aWNlIGluIGNvbnRlc3QtZGV0YWlscycpO1xyXG4gICAgLy8gICAgICAgICBjb25zb2xlLmxvZyhteVN1Ym1pdGlvbnMpO1xyXG4gICAgLy8gICAgICAgICB0aGlzLm15U3VibWl0aW9ucyA9IG15U3VibWl0aW9ucztcclxuICAgIC8vICAgICAgICAgY29uc29sZS5sb2coJ3RoaXMubXlTdWJtaXRpb25zJyk7XHJcbiAgICAvLyAgICAgICAgIGNvbnNvbGUubG9nKHRoaXMubXlTdWJtaXRpb25zKTtcclxuICAgIC8vICAgICB9LFxyXG4gICAgLy8gICAgIGVycm9yID0+IHtcclxuICAgIC8vICAgICAgIHRoaXMuaXNMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAvLyAgICAgICB0aGlzLm5vdGlmaWNhdGlvbnNTZXJ2aWNlLmVycm9yKGVycm9yLnRpdGxlLCBlcnJvci5lcnJvci5tZXNzYWdlLCB7dGltZU91dDogMzAwMCwgc2hvd1Byb2dyZXNzQmFyOiBmYWxzZX0pXHJcbiAgICAvLyAgIH0pO1xyXG5cclxuICAgIC8vICAgICB9KTtcclxuICAgIC8vIH1cclxuXHJcbiAgICAvLyBVcGxvYWQgYWRkaXRpb25hbCBmaWxlc1xyXG5cclxuICAgIHVwbG9hZEFkZGl0aW9uYWxGaWxlcygpIHtcclxuICAgICAgdGhpcy5pc0xvYWRpbmcgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMudXNlcklkID0gc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbSgndXNlcklkJyk7XHJcbiAgICAgICAgdGhpcy5tYWtlRmlsZVJlcXVlc3QoJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9hcGkvdjEvY29udGVzdHMvJyArIHRoaXMuY29udGVzdElkICsgJy9maWxlcycsdGhpcy5maWxlc1RvVXBsb2FkLCBcImFkZGl0aW9uYWxmaWxlc1wiKS50aGVuKChyZXN1bHQpID0+IHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2cocmVzdWx0KTtcclxuICAgICAgICAgICAgdGhpcy5pc0xvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgdGhpcy5hcGlTZXJ2aWNlLmdldENvbnRlc3RBZGRpdGlvbmFsRmlsZXModGhpcy5jb250ZXN0SWQpXHJcbiAgICAgICAgICAgIC5zdWJzY3JpYmUoZGF0YSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhkYXRhKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuYWRkaXRpb25hbEZpbGVzID0gZGF0YTtcclxuICAgICAgICAgICAgfSwgZXJyb3IgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5pc0xvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIHRoaXMubm90aWZpY2F0aW9uc1NlcnZpY2UuZXJyb3IoZXJyb3IudGl0bGUsIGVycm9yLmVycm9yLm1lc3NhZ2UsIHt0aW1lT3V0OiAzMDAwLCBzaG93UHJvZ3Jlc3NCYXI6IGZhbHNlfSlcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLy90aGlzLmZpbGVzVG9VcGxvYWQgPSBbXTtcclxuICAgICAgICB9LCAoZXJyb3IpID0+IHsgLy8gVE9ETyBmaW5kIG91dCB3aHkgaXQgYWx3YXlzIGdvIGludG8gZXJyb3Igc3RhdGVcclxuICAgICAgICAgICAgdGhpcy5hcGlTZXJ2aWNlLmdldENvbnRlc3RBZGRpdGlvbmFsRmlsZXModGhpcy5jb250ZXN0SWQpXHJcbiAgICAgICAgICAgIC5zdWJzY3JpYmUoZGF0YSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmlzTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZGF0YSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmFkZGl0aW9uYWxGaWxlcyA9IGRhdGE7XHJcbiAgICAgICAgICAgIH0sIGVycm9yID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuaXNMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm5vdGlmaWNhdGlvbnNTZXJ2aWNlLmVycm9yKGVycm9yLnRpdGxlLCBlcnJvci5lcnJvci5tZXNzYWdlLCB7dGltZU91dDogMzAwMCwgc2hvd1Byb2dyZXNzQmFyOiBmYWxzZX0pXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIHRoaXMubm90aWZpY2F0aW9uc1NlcnZpY2Uuc3VjY2VzcygnxK5rZWx0YScsJ0ZhaWxhaSDEr2tlbHRpJywge3RpbWVPdXQ6IDMwMDAsIHNob3dQcm9ncmVzc0JhcjogZmFsc2V9KVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGZpbGVDaGFuZ2VFdmVudChmaWxlSW5wdXQ6IGFueSl7XHJcbiAgICAgICAgdGhpcy5maWxlc1RvVXBsb2FkID0gPEFycmF5PEZpbGU+PiBmaWxlSW5wdXQudGFyZ2V0LmZpbGVzO1xyXG4gICAgICAgIC8vdGhpcy5maWxlc1RvVXBsb2FkLmZvckVhY2goKGZpbGUsIGkpID0+IHRoaXMuZmlsZXNUb1VwbG9hZC5wdXNoKGZpbGVJbnB1dC50YXJnZXQuZmlsZXNbaV0pKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhmaWxlSW5wdXQudGFyZ2V0LmZpbGVzKTtcclxuICAgICAgICAvL2xldCBhcnIgPSBBcnJheS5mcm9tKGZpbGVJbnB1dC50YXJnZXQuZmlsZXMpOyAvL2NvbnZlcnQgRmlsZSBPYmplY3QgdG8gQXJyYXkgdG8gcHVzaCBpdFxyXG4gICAgICAgIC8vdGhpcy5maWxlc1RvVXBsb2FkLnB1c2goYXJyWzBdKTsgLy91c2UgdGhpcyBpZiB5b3UgdXNlIG11bHRpcGxlIHNpbmdsZSBmaWxlIGlucHV0c1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMuZmlsZXNUb1VwbG9hZCk7XHJcbiAgICB9XHJcbiBcclxuICAgIG1ha2VGaWxlUmVxdWVzdCh1cmw6IHN0cmluZywgZmlsZXM6IEFycmF5PEZpbGU+LCBmaWxlVHlwZTogc3RyaW5nKSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgICAgICAgdmFyIGZvcm1EYXRhOiBhbnkgPSBuZXcgRm9ybURhdGEoKTtcclxuICAgICAgICAgICAgdmFyIHhociA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xyXG4gICAgICAgICAgICBmb3IodmFyIGkgPSAwOyBpIDwgZmlsZXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIGZvcm1EYXRhLmFwcGVuZChmaWxlVHlwZSwgZmlsZXNbaV0sIGZpbGVzW2ldLm5hbWUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHhoci51cGxvYWQuYWRkRXZlbnRMaXN0ZW5lcihcInByb2dyZXNzXCIsIChldnQpID0+IHRoaXMuY2FsY3VsYXRlVXBsb2FkUHJvZ3Jlc3MoZXZ0KSwgZmFsc2UpOyBcclxuICAgICAgICAgICAgeGhyLm9ucmVhZHlzdGF0ZWNoYW5nZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIGlmICh4aHIucmVhZHlTdGF0ZSA9PSA0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHhoci5zdGF0dXMgPT0gMjAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHhoci5yZXNwb25zZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUoSlNPTi5wYXJzZSh4aHIucmVzcG9uc2UpKTtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyh4aHIucmVzcG9uc2UpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZWplY3QoeGhyLnJlc3BvbnNlKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgeGhyLm9uZXJyb3IgPSBmdW5jdGlvbihlKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnS2xhaWRhIMSva2VsaWFudCBmYWlsdXMnKTtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGUpO1xyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICB4aHIub3BlbihcIlBPU1RcIiwgdXJsLCB0cnVlKTtcclxuICAgICAgICAgICAgeGhyLnNlbmQoZm9ybURhdGEpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGNhbGN1bGF0ZVVwbG9hZFByb2dyZXNzKGV2dCkge1xyXG4gICAgaWYgKGV2dC5sZW5ndGhDb21wdXRhYmxlKSB7XHJcbiAgICAgICAgdGhpcy5wZXJjZW50ID0gTWF0aC5yb3VuZChldnQubG9hZGVkIC8gZXZ0LnRvdGFsICogMTAwKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIlBFUkNFTlQgOiBcIiwgdGhpcy5wZXJjZW50ICsgXCIlXCIpO1xyXG4gICAgfVxyXG4gICAgLy9FTkQgT0YgRklMRSBVUExPQUQgU1RVRkZcclxuXHJcbn1cclxuXHJcbiAgICBvblJhdGluZyhvYmo6IGFueSkge1xyXG4gICAgICAgIHRoaXMuaXNMb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgICB2YXIgc3VibWl0aW9uID0gdGhpcy5zdWJtaXRpb25zLmZpbHRlcigoaXRlbTogYW55KSA9PiBpdGVtLnN1Ym1pdGlvbklkID09IG9iai5zdWJtaXRpb25JZCk7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ29uUmF0aW5nKCkgc3VibWl0aW9uIGFmdGVyIGZpbHRlcicpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHN1Ym1pdGlvbik7XHJcbiAgICAgICAgaWYgKCEhc3VibWl0aW9uICYmIHN1Ym1pdGlvbi5sZW5ndGggPT0gMSkge1xyXG4gICAgICAgICAgICAvL3RoaXMuc3VibWl0aW9uc1swXS5zdWJtaXRpb25SYXRpbmcgPSBvYmoucmF0aW5nO1xyXG5cclxuICAgICAgICAgICAgc3VibWl0aW9uWzBdLnN1Ym1pdGlvblJhdGluZyA9IG9iai5yYXRpbmc7XHJcbiAgICAgICAgICAgIHRoaXMuY29udGVzdHNTZXJ2aWNlLnVwZGF0ZVN1Ym1pdGlvblJhdGluZyh0aGlzLmNvbnRlc3QsIHN1Ym1pdGlvblswXSlcclxuICAgICAgICAgICAgICAgIC5zdWJzY3JpYmUoZGF0YSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ1JhdGluZyBjaGFuZ2VkJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZGF0YSk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHN1Ym1pdGlvblswXS5zdGF0dXMgPT0gJ051Z2FsxJd0b2phcycpIHsgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMud2lubmVyU3VibWl0aW9uLnN1Ym1pdGlvblJhdGluZyA9IGRhdGEub2JqLnN1Ym1pdGlvbnNbb2JqLnN1Ym1pdGlvbklkIC0gMV0uc3VibWl0aW9uUmF0aW5nO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmlzTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubm90aWZpY2F0aW9uc1NlcnZpY2Uuc3VjY2VzcygnQXRuYXVqaW50YScsICdSZWl0aW5nYXMgc8SXa21pbmdhaSBwYWtlaXN0YXMnLCB7dGltZU91dDogMzAwMCwgc2hvd1Byb2dyZXNzQmFyOiBmYWxzZX0pXHJcbiAgICAgICAgICAgICAgICB9LCBlcnJvciA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5pc0xvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLm5vdGlmaWNhdGlvbnNTZXJ2aWNlLmVycm9yKGVycm9yLnRpdGxlLCBlcnJvci5lcnJvci5tZXNzYWdlLCB7dGltZU91dDogMzAwMCwgc2hvd1Byb2dyZXNzQmFyOiBmYWxzZX0pXHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBpc0NvbnRlc3RQdWJsaXNoZXIoY29udGVzdEF1dGhvcklkOiBzdHJpbmcpIHtcclxuICAgICAgICB2YXIgdXNlcklkID0gc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbSgndXNlcklkJyk7XHJcbiAgICAgICAgcmV0dXJuIGNvbnRlc3RBdXRob3JJZCA9PSB1c2VySWQ7XHJcbiAgICB9XHJcblxyXG4gICB2aWV3U3VibWl0aW9uRGV0YWlscyhjb250ZXN0SWQsIGNvbnRlc3QsIHN1Ym1pdGlvbikge1xyXG4gICAgICAgdGhpcy5jb250ZXN0c1NlcnZpY2Uuc3VibWl0aW9uRGV0YWlscyA9IHtjb250ZXN0SWQ6IGNvbnRlc3RJZCwgY29udGVzdDogY29udGVzdCwgc3VibWl0aW9uOiBzdWJtaXRpb259O1xyXG4gICAgICAgY29uc29sZS5sb2codGhpcy5jb250ZXN0c1NlcnZpY2Uuc3VibWl0aW9uRGV0YWlscyk7XHJcbiAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbc3VibWl0aW9uLnN1Ym1pdGlvbklkXSwge3JlbGF0aXZlVG86IHRoaXMucm91dGV9KTtcclxuICAgfVxyXG5cclxufSJdfQ==
