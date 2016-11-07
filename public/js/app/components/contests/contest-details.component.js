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
var ContestDetailsComponent = (function () {
    function ContestDetailsComponent(route, router, contestsService, errorService, authService, apiService) {
        this.route = route;
        this.router = router;
        this.contestsService = contestsService;
        this.errorService = errorService;
        this.authService = authService;
        this.apiService = apiService;
        this.contestId = '';
        this.contest = null;
        this.userId = '';
        this.filesToUpload = [];
        this.submitions = [];
        this.mySubmitions = [];
    }
    ContestDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
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
            _this.errorService.handleError(error);
        });
        this.apiService.getContestSubmitions(this.contestId) //CURRENT FOCUS
            .subscribe(function (submitions) {
            console.log('submitions from apiservice in contest-details');
            console.log(submitions);
            _this.submitions = submitions;
            console.log(_this.submitions);
        }, function (error) {
            _this.errorService.handleError(error);
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
                _this.errorService.handleError(error);
            });
        }
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
    //FILE UPLOAD STUFF
    ContestDetailsComponent.prototype.upload = function () {
        var _this = this;
        this.userId = localStorage.getItem('userId');
        this.makeFileRequest('http://localhost:3000/api/v1/submitions/' + this.contestId + '/' + this.userId, [], this.filesToUpload).then(function (result) {
            console.log(result);
            //this.filesToUpload = [];
        }, function (error) {
            console.error(error);
        });
        this.makeFileRequest('http://localhost:3000/api/v1/submitions/gallery/' + this.contestId + '/' + this.userId, [], this.filesToUpload).then(function (result) {
            console.log(result);
            _this.filesToUpload = [];
            //reload submitions
            _this.apiService.getContestSubmitions(_this.contestId) //CURRENT FOCUS
                .subscribe(function (submitions) {
                console.log('submitions from apiservice in contest-details');
                console.log(submitions);
                _this.submitions = submitions;
                console.log(_this.submitions);
            }, function (error) {
                _this.errorService.handleError(error);
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
                _this.errorService.handleError(error);
            });
            //end of reloading my submitions
        }, function (error) {
            console.error(error);
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
    ContestDetailsComponent.prototype.makeFileRequest = function (url, params, files) {
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
            });
        }
    };
    ContestDetailsComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'contest-details',
            templateUrl: 'contest-details.component.html',
            styleUrls: ['contest-details.component.css']
        }), 
        __metadata('design:paramtypes', [router_1.ActivatedRoute, router_1.Router, contests_service_1.ContestsService, index_1.ErrorService, auth_service_1.AuthService, api_service_1.ApiService])
    ], ContestDetailsComponent);
    return ContestDetailsComponent;
}());
exports.ContestDetailsComponent = ContestDetailsComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvY29udGVzdHMvY29udGVzdC1kZXRhaWxzLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQWtDLGVBQWUsQ0FBQyxDQUFBO0FBQ2xELHVCQUErQyxpQkFBaUIsQ0FBQyxDQUFBO0FBRWpFLGlDQUFnQyxpQ0FBaUMsQ0FBQyxDQUFBO0FBQ2xFLHNCQUE2QixvQkFBb0IsQ0FBQyxDQUFBO0FBQ2xELDZCQUE0Qiw2QkFBNkIsQ0FBQyxDQUFBO0FBQzFELDRCQUEyQiw0QkFBNEIsQ0FBQyxDQUFBO0FBQ3hELElBQVksTUFBTSxXQUFNLFFBQVEsQ0FBQyxDQUFBO0FBQ2pDLFFBQU8sb0JBQW9CLENBQUMsQ0FBQTtBQVM1QjtJQVdFLGlDQUFvQixLQUFxQixFQUNyQixNQUFjLEVBQ2QsZUFBZ0MsRUFDaEMsWUFBMEIsRUFDMUIsV0FBd0IsRUFDeEIsVUFBc0I7UUFMdEIsVUFBSyxHQUFMLEtBQUssQ0FBZ0I7UUFDckIsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUNkLG9CQUFlLEdBQWYsZUFBZSxDQUFpQjtRQUNoQyxpQkFBWSxHQUFaLFlBQVksQ0FBYztRQUMxQixnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUN4QixlQUFVLEdBQVYsVUFBVSxDQUFZO1FBZjFDLGNBQVMsR0FBVyxFQUFFLENBQUM7UUFDdkIsWUFBTyxHQUFZLElBQUksQ0FBQztRQUN4QixXQUFNLEdBQVcsRUFBRSxDQUFDO1FBQ3BCLGtCQUFhLEdBQVcsRUFBRSxDQUFDO1FBRTNCLGVBQVUsR0FBVSxFQUFFLENBQUM7UUFDdkIsaUJBQVksR0FBVSxFQUFFLENBQUM7SUFTcUIsQ0FBQztJQUUvQywwQ0FBUSxHQUFSO1FBQUEsaUJBeUNDO1FBeENBLE1BQU0sQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDdEIsMkJBQTJCO1FBQzNCLHlCQUF5QjtRQUN2QixvREFBb0Q7UUFDcEQsSUFBSSxDQUFDLFVBQVUsR0FBRyxNQUFN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TDtRQUFDLGdCQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsUUFBUSxFQUFFLGlCQUFpQjtZQUMzQixXQUFXLEVBQUUsZ0NBQWdDO1lBQzdDLFNBQVMsRUFBRSxDQUFDLCtCQUErQixDQUFDO1NBQzdDLENBQUM7OytCQUFBO0lBa0xGLDhCQUFDO0FBQUQsQ0FqTEEsQUFpTEMsSUFBQTtBQWpMWSwrQkFBdUIsMEJBaUxuQyxDQUFBIiwiZmlsZSI6ImNvbXBvbmVudHMvY29udGVzdHMvY29udGVzdC1kZXRhaWxzLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFJvdXRlciwgQWN0aXZhdGVkUm91dGUsIFBhcmFtcyB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcbmltcG9ydCB7IENvbnRlc3QgfSBmcm9tICcuLi8uLi9tb2RlbHMvY29udGVzdCc7XHJcbmltcG9ydCB7IENvbnRlc3RzU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL2NvbnRlc3RzLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBFcnJvclNlcnZpY2UgfSBmcm9tICcuLi8uLi9lcnJvcnMvaW5kZXgnO1xyXG5pbXBvcnQgeyBBdXRoU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL2F1dGguc2VydmljZSc7XHJcbmltcG9ydCB7IEFwaVNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9hcGkuc2VydmljZSc7XHJcbmltcG9ydCAqIGFzIG1vbWVudCBmcm9tICdtb21lbnQnO1xyXG5pbXBvcnQgJ21vbWVudC9taW4vbG9jYWxlcyc7XHJcblxyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcclxuICBzZWxlY3RvcjogJ2NvbnRlc3QtZGV0YWlscycsXHJcbiAgdGVtcGxhdGVVcmw6ICdjb250ZXN0LWRldGFpbHMuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWydjb250ZXN0LWRldGFpbHMuY29tcG9uZW50LmNzcyddXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBDb250ZXN0RGV0YWlsc0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgY29udGVzdElkOiBzdHJpbmcgPSAnJztcclxuICBjb250ZXN0OiBDb250ZXN0ID0gbnVsbDtcclxuICB1c2VySWQ6IHN0cmluZyA9ICcnO1xyXG4gIGZpbGVzVG9VcGxvYWQ6IEZpbGVbXSA9IFtdO1xyXG4gIHBlcmNlbnQ6IG51bWJlcjtcclxuICBzdWJtaXRpb25zOiBhbnlbXSA9IFtdO1xyXG4gIG15U3VibWl0aW9uczogYW55W10gPSBbXTtcclxuICAvL2xvY2FsZSA9IG1vbWVudC5sb2NhbGUoJ2x0Jyk7XHJcbiAgLy9tb21lbnREYXRlOiBhbnkgPSBtb21lbnQoRGF0ZS5ub3coKS50b1N0cmluZygpLCAnWVlZWSBNTU1NIERvJywgJ2x0Jyk7XHJcbiAgbW9tZW50RGF0ZTogYW55O1xyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcm91dGU6IEFjdGl2YXRlZFJvdXRlLFxyXG4gICAgICAgICAgICAgIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsXHJcbiAgICAgICAgICAgICAgcHJpdmF0ZSBjb250ZXN0c1NlcnZpY2U6IENvbnRlc3RzU2VydmljZSxcclxuICAgICAgICAgICAgICBwcml2YXRlIGVycm9yU2VydmljZTogRXJyb3JTZXJ2aWNlLFxyXG4gICAgICAgICAgICAgIHByaXZhdGUgYXV0aFNlcnZpY2U6IEF1dGhTZXJ2aWNlLFxyXG4gICAgICAgICAgICAgIHByaXZhdGUgYXBpU2VydmljZTogQXBpU2VydmljZSkgeyB9XHJcblxyXG4gIG5nT25Jbml0KCkgeyBcclxuICAgbW9tZW50LmxvY2FsZSgnbHQtbHQnKTtcclxuICAgIC8vICAgY29uc29sZS5sb2coJ0xPQ0FMRScpO1xyXG4gICAgLy8gICBjb25zb2xlLmxvZyhsb2NhbGUpO1xyXG4gICAgICAvL3RoaXMubW9tZW50RGF0ZSA9IG1vbWVudCgpLmZvcm1hdCgnWVlZWSBNTU1NIERvJyk7XHJcbiAgICAgIHRoaXMubW9tZW50RGF0ZSA9IG1vbWVudCgpLmFkZCgzLCAnZGF5cycpLmNhbGVuZGFyKCk7XHJcbiAgICB0aGlzLnJvdXRlLnBhcmFtcy5zdWJzY3JpYmUoKHBhcmFtczogUGFyYW1zKSA9PiB7XHJcbiAgICAgIHRoaXMuY29udGVzdElkID0gcGFyYW1zWydpZCddO1xyXG4gICAgfSk7XHJcbiAgICB0aGlzLmNvbnRlc3RzU2VydmljZS5nZXRJbmRpdmlkdWFsQ29udGVzdCh0aGlzLmNvbnRlc3RJZClcclxuICAgICAgLnN1YnNjcmliZShjb250ZXN0ID0+IHtcclxuICAgICAgICB0aGlzLmNvbnRlc3QgPSBjb250ZXN0O1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdjb250ZXN0LWRldGFpbHMuY29tcG9uZW50LnRzIHRoaXMuY29udGVzdCcpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMuY29udGVzdCk7XHJcbiAgICAgIH0sIFxyXG4gICAgICBlcnJvciA9PiB7XHJcbiAgICAgICAgICB0aGlzLmVycm9yU2VydmljZS5oYW5kbGVFcnJvcihlcnJvcik7XHJcbiAgICAgIH0pO1xyXG4gICAgdGhpcy5hcGlTZXJ2aWNlLmdldENvbnRlc3RTdWJtaXRpb25zKHRoaXMuY29udGVzdElkKSAvL0NVUlJFTlQgRk9DVVNcclxuICAgICAgICAuc3Vic2NyaWJlKHN1Ym1pdGlvbnMgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnc3VibWl0aW9ucyBmcm9tIGFwaXNlcnZpY2UgaW4gY29udGVzdC1kZXRhaWxzJyk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHN1Ym1pdGlvbnMpO1xyXG4gICAgICAgICAgICB0aGlzLnN1Ym1pdGlvbnMgPSBzdWJtaXRpb25zO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyh0aGlzLnN1Ym1pdGlvbnMpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZXJyb3IgPT4ge1xyXG4gICAgICAgICAgdGhpcy5lcnJvclNlcnZpY2UuaGFuZGxlRXJyb3IoZXJyb3IpO1xyXG4gICAgICB9KTtcclxuICAgICAgaWYgKHRoaXMuaXNMb2dnZWRJbigpKSB7XHJcbiAgICAgICAgdGhpcy5hcGlTZXJ2aWNlLmdldE15U3VibWl0aW9ucyh0aGlzLmNvbnRlc3RJZClcclxuICAgICAgICAgIC5zdWJzY3JpYmUobXlTdWJtaXRpb25zID0+IHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ015U3VibWl0aW9ucyBmcm9tIGFwaXNlcnZpY2UgaW4gY29udGVzdC1kZXRhaWxzJyk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKG15U3VibWl0aW9ucyk7XHJcbiAgICAgICAgICAgIHRoaXMubXlTdWJtaXRpb25zID0gbXlTdWJtaXRpb25zO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygndGhpcy5teVN1Ym1pdGlvbnMnKTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2codGhpcy5teVN1Ym1pdGlvbnMpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZXJyb3IgPT4ge1xyXG4gICAgICAgICAgdGhpcy5lcnJvclNlcnZpY2UuaGFuZGxlRXJyb3IoZXJyb3IpO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGlzQ2xpZW50KCkge1xyXG4gICAgICByZXR1cm4gdGhpcy5hdXRoU2VydmljZS5pc0NsaWVudCgpO1xyXG4gIH1cclxuXHJcbiAgaXNEZXNpZ25lcigpIHtcclxuICAgIHJldHVybiB0aGlzLmF1dGhTZXJ2aWNlLmlzRGVzaWduZXIoKTtcclxuICB9XHJcblxyXG4gIGlzTG9nZ2VkSW4oKSB7XHJcbiAgcmV0dXJuIHRoaXMuYXV0aFNlcnZpY2UuaXNMb2dnZWRJbigpO1xyXG4gIH1cclxuXHJcbiAgLy9GSUxFIFVQTE9BRCBTVFVGRlxyXG5cclxuICB1cGxvYWQoKSB7XHJcbiAgICAgICAgdGhpcy51c2VySWQgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndXNlcklkJyk7XHJcbiAgICAgICAgdGhpcy5tYWtlRmlsZVJlcXVlc3QoJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9hcGkvdjEvc3VibWl0aW9ucy8nICsgdGhpcy5jb250ZXN0SWQgKyAnLycgK3RoaXMudXNlcklkLCBbXSwgdGhpcy5maWxlc1RvVXBsb2FkKS50aGVuKChyZXN1bHQpID0+IHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2cocmVzdWx0KTtcclxuICAgICAgICAgICAgLy90aGlzLmZpbGVzVG9VcGxvYWQgPSBbXTtcclxuICAgICAgICB9LCAoZXJyb3IpID0+IHtcclxuICAgICAgICAgICAgY29uc29sZS5lcnJvcihlcnJvcik7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5tYWtlRmlsZVJlcXVlc3QoJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9hcGkvdjEvc3VibWl0aW9ucy9nYWxsZXJ5LycgKyB0aGlzLmNvbnRlc3RJZCArICcvJyArdGhpcy51c2VySWQsIFtdLCB0aGlzLmZpbGVzVG9VcGxvYWQpLnRoZW4oKHJlc3VsdCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhyZXN1bHQpO1xyXG4gICAgICAgICAgICB0aGlzLmZpbGVzVG9VcGxvYWQgPSBbXTtcclxuICAgICAgICAgICAgLy9yZWxvYWQgc3VibWl0aW9uc1xyXG4gICAgICAgICAgICB0aGlzLmFwaVNlcnZpY2UuZ2V0Q29udGVzdFN1Ym1pdGlvbnModGhpcy5jb250ZXN0SWQpIC8vQ1VSUkVOVCBGT0NVU1xyXG4gICAgICAgIC5zdWJzY3JpYmUoc3VibWl0aW9ucyA9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdzdWJtaXRpb25zIGZyb20gYXBpc2VydmljZSBpbiBjb250ZXN0LWRldGFpbHMnKTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coc3VibWl0aW9ucyk7XHJcbiAgICAgICAgICAgIHRoaXMuc3VibWl0aW9ucyA9IHN1Ym1pdGlvbnM7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHRoaXMuc3VibWl0aW9ucyk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBlcnJvciA9PiB7XHJcbiAgICAgICAgICB0aGlzLmVycm9yU2VydmljZS5oYW5kbGVFcnJvcihlcnJvcik7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgLy9lbmQgb2YgcmVsb2FkaW5nIHN1Ym1pdGlvbnNcclxuICAgICAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gICAgICAgIC8vcmVsb2FkaW5nIG15IHN1Ym1pdGlvbnNcclxuICAgICAgICB0aGlzLmFwaVNlcnZpY2UuZ2V0TXlTdWJtaXRpb25zKHRoaXMuY29udGVzdElkKVxyXG4gICAgICAgIC5zdWJzY3JpYmUobXlTdWJtaXRpb25zID0+IHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ015U3VibWl0aW9ucyBmcm9tIGFwaXNlcnZpY2UgaW4gY29udGVzdC1kZXRhaWxzJyk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKG15U3VibWl0aW9ucyk7XHJcbiAgICAgICAgICAgIHRoaXMubXlTdWJtaXRpb25zID0gbXlTdWJtaXRpb25zO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygndGhpcy5teVN1Ym1pdGlvbnMnKTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2codGhpcy5teVN1Ym1pdGlvbnMpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZXJyb3IgPT4ge1xyXG4gICAgICAgICAgdGhpcy5lcnJvclNlcnZpY2UuaGFuZGxlRXJyb3IoZXJyb3IpO1xyXG4gICAgICB9KTtcclxuICAgICAgICAvL2VuZCBvZiByZWxvYWRpbmcgbXkgc3VibWl0aW9uc1xyXG4gICAgICAgIH0sIChlcnJvcikgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBmaWxlQ2hhbmdlRXZlbnQoZmlsZUlucHV0OiBhbnkpe1xyXG4gICAgICAgIHRoaXMuZmlsZXNUb1VwbG9hZCA9IDxBcnJheTxGaWxlPj4gZmlsZUlucHV0LnRhcmdldC5maWxlcztcclxuICAgICAgICAvL3RoaXMuZmlsZXNUb1VwbG9hZC5mb3JFYWNoKChmaWxlLCBpKSA9PiB0aGlzLmZpbGVzVG9VcGxvYWQucHVzaChmaWxlSW5wdXQudGFyZ2V0LmZpbGVzW2ldKSk7XHJcbiAgICAgICAgY29uc29sZS5sb2coZmlsZUlucHV0LnRhcmdldC5maWxlcyk7XHJcbiAgICAgICAgLy9sZXQgYXJyID0gQXJyYXkuZnJvbShmaWxlSW5wdXQudGFyZ2V0LmZpbGVzKTsgLy9jb252ZXJ0IEZpbGUgT2JqZWN0IHRvIEFycmF5IHRvIHB1c2ggaXRcclxuICAgICAgICAvL3RoaXMuZmlsZXNUb1VwbG9hZC5wdXNoKGFyclswXSk7IC8vdXNlIHRoaXMgaWYgeW91IHVzZSBtdWx0aXBsZSBzaW5nbGUgZmlsZSBpbnB1dHNcclxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLmZpbGVzVG9VcGxvYWQpO1xyXG4gICAgfVxyXG4gXHJcbiAgICBtYWtlRmlsZVJlcXVlc3QodXJsOiBzdHJpbmcsIHBhcmFtczogQXJyYXk8c3RyaW5nPiwgZmlsZXM6IEFycmF5PEZpbGU+KSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgICAgICAgdmFyIGZvcm1EYXRhOiBhbnkgPSBuZXcgRm9ybURhdGEoKTtcclxuICAgICAgICAgICAgdmFyIHhociA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xyXG4gICAgICAgICAgICBmb3IodmFyIGkgPSAwOyBpIDwgZmlsZXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIGZvcm1EYXRhLmFwcGVuZChcInN1Ym1pdGlvblwiLCBmaWxlc1tpXSwgZmlsZXNbaV0ubmFtZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgeGhyLnVwbG9hZC5hZGRFdmVudExpc3RlbmVyKFwicHJvZ3Jlc3NcIiwgKGV2dCkgPT4gdGhpcy5jYWxjdWxhdGVVcGxvYWRQcm9ncmVzcyhldnQpLCBmYWxzZSk7IFxyXG4gICAgICAgICAgICB4aHIub25yZWFkeXN0YXRlY2hhbmdlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKHhoci5yZWFkeVN0YXRlID09IDQpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoeGhyLnN0YXR1cyA9PSAyMDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShKU09OLnBhcnNlKHhoci5yZXNwb25zZSkpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlamVjdCh4aHIucmVzcG9uc2UpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB4aHIub25lcnJvciA9IGZ1bmN0aW9uKGUpIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdLbGFpZGEgxK9rZWxpYW50IGZhaWx1cycpO1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZSk7XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIHhoci5vcGVuKFwiUE9TVFwiLCB1cmwsIHRydWUpO1xyXG4gICAgICAgICAgICB4aHIuc2VuZChmb3JtRGF0YSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgY2FsY3VsYXRlVXBsb2FkUHJvZ3Jlc3MoZXZ0KSB7XHJcbiAgICBpZiAoZXZ0Lmxlbmd0aENvbXB1dGFibGUpIHtcclxuICAgICAgICB0aGlzLnBlcmNlbnQgPSBNYXRoLnJvdW5kKGV2dC5sb2FkZWQgLyBldnQudG90YWwgKiAxMDApO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiUEVSQ0VOVCA6IFwiLCB0aGlzLnBlcmNlbnQgKyBcIiVcIik7XHJcbiAgICB9XHJcbiAgICAvL0VORCBPRiBGSUxFIFVQTE9BRCBTVFVGRlxyXG5cclxufVxyXG5cclxuICAgIG9uUmF0aW5nKG9iajogYW55KSB7XHJcbiAgICAgICAgdmFyIHN1Ym1pdGlvbiA9IHRoaXMuc3VibWl0aW9ucy5maWx0ZXIoKGl0ZW06IGFueSkgPT4gaXRlbS5zdWJtaXRpb25JZCA9PSBvYmouc3VibWl0aW9uSWQpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdvblJhdGluZygpIHN1Ym1pdGlvbiBhZnRlciBmaWx0ZXInKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhzdWJtaXRpb24pO1xyXG4gICAgICAgIGlmICghIXN1Ym1pdGlvbiAmJiBzdWJtaXRpb24ubGVuZ3RoID09IDEpIHtcclxuICAgICAgICAgICAgLy90aGlzLnN1Ym1pdGlvbnNbMF0uc3VibWl0aW9uUmF0aW5nID0gb2JqLnJhdGluZztcclxuICAgICAgICAgICAgc3VibWl0aW9uWzBdLnN1Ym1pdGlvblJhdGluZyA9IG9iai5yYXRpbmc7XHJcbiAgICAgICAgICAgIHRoaXMuY29udGVzdHNTZXJ2aWNlLnVwZGF0ZVN1Ym1pdGlvblJhdGluZyh0aGlzLmNvbnRlc3QsIHN1Ym1pdGlvblswXSlcclxuICAgICAgICAgICAgICAgIC5zdWJzY3JpYmUoZGF0YSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ1JhdGluZyBjaGFuZ2VkJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZGF0YSk7XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcblxyXG59Il19
