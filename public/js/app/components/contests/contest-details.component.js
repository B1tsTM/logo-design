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
    }
    ContestDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvY29udGVzdHMvY29udGVzdC1kZXRhaWxzLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQWtDLGVBQWUsQ0FBQyxDQUFBO0FBQ2xELHVCQUErQyxpQkFBaUIsQ0FBQyxDQUFBO0FBRWpFLGlDQUFnQyxpQ0FBaUMsQ0FBQyxDQUFBO0FBQ2xFLHNCQUE2QixvQkFBb0IsQ0FBQyxDQUFBO0FBQ2xELDZCQUE0Qiw2QkFBNkIsQ0FBQyxDQUFBO0FBQzFELDRCQUEyQiw0QkFBNEIsQ0FBQyxDQUFBO0FBU3hEO0lBT0UsaUNBQW9CLEtBQXFCLEVBQ3JCLE1BQWMsRUFDZCxlQUFnQyxFQUNoQyxZQUEwQixFQUMxQixXQUF3QixFQUN4QixVQUFzQjtRQUx0QixVQUFLLEdBQUwsS0FBSyxDQUFnQjtRQUNyQixXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQ2Qsb0JBQWUsR0FBZixlQUFlLENBQWlCO1FBQ2hDLGlCQUFZLEdBQVosWUFBWSxDQUFjO1FBQzFCLGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBQ3hCLGVBQVUsR0FBVixVQUFVLENBQVk7UUFYMUMsY0FBUyxHQUFXLEVBQUUsQ0FBQztRQUN2QixZQUFPLEdBQVksSUFBSSxDQUFDO1FBQ3hCLFdBQU0sR0FBVyxFQUFFLENBQUM7UUFDcEIsa0JBQWEsR0FBVyxFQUFFLENBQUM7UUFFM0IsZUFBVSxHQUFVLEVBQUUsQ0FBQztJQU11QixDQUFDO0lBRS9DLDBDQUFRLEdBQVI7UUFBQSxpQkF1QkM7UUF0QkMsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLFVBQUMsTUFBYztZQUN6QyxLQUFJLENBQUMsU0FBUyxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNoQyxDQUFDLENBQUMsQ0FBQztRQUNILElBQUksQ0FBQyxlQUFlLENBQUMsb0JBQW9CLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQzthQUN0RCxTQUFTLENBQUMs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QUM7SUFqSUQ7UUFBQyxnQkFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFFBQVEsRUFBRSxpQkFBaUI7WUFDM0IsV0FBVyxFQUFFLGdDQUFnQztZQUM3QyxTQUFTLEVBQUUsQ0FBQywrQkFBK0IsQ0FBQztTQUM3QyxDQUFDOzsrQkFBQTtJQThIRiw4QkFBQztBQUFELENBN0hBLEFBNkhDLElBQUE7QUE3SFksK0JBQXVCLDBCQTZIbkMsQ0FBQSIsImZpbGUiOiJjb21wb25lbnRzL2NvbnRlc3RzL2NvbnRlc3QtZGV0YWlscy5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBSb3V0ZXIsIEFjdGl2YXRlZFJvdXRlLCBQYXJhbXMgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5pbXBvcnQgeyBDb250ZXN0IH0gZnJvbSAnLi4vLi4vbW9kZWxzL2NvbnRlc3QnO1xyXG5pbXBvcnQgeyBDb250ZXN0c1NlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9jb250ZXN0cy5zZXJ2aWNlJztcclxuaW1wb3J0IHsgRXJyb3JTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vZXJyb3JzL2luZGV4JztcclxuaW1wb3J0IHsgQXV0aFNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9hdXRoLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBBcGlTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvYXBpLnNlcnZpY2UnO1xyXG5cclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIG1vZHVsZUlkOiBtb2R1bGUuaWQsXHJcbiAgc2VsZWN0b3I6ICdjb250ZXN0LWRldGFpbHMnLFxyXG4gIHRlbXBsYXRlVXJsOiAnY29udGVzdC1kZXRhaWxzLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnY29udGVzdC1kZXRhaWxzLmNvbXBvbmVudC5jc3MnXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgQ29udGVzdERldGFpbHNDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gIGNvbnRlc3RJZDogc3RyaW5nID0gJyc7XHJcbiAgY29udGVzdDogQ29udGVzdCA9IG51bGw7XHJcbiAgdXNlcklkOiBzdHJpbmcgPSAnJztcclxuICBmaWxlc1RvVXBsb2FkOiBGaWxlW10gPSBbXTtcclxuICBwZXJjZW50OiBudW1iZXI7XHJcbiAgc3VibWl0aW9uczogYW55W10gPSBbXTtcclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSxcclxuICAgICAgICAgICAgICBwcml2YXRlIHJvdXRlcjogUm91dGVyLFxyXG4gICAgICAgICAgICAgIHByaXZhdGUgY29udGVzdHNTZXJ2aWNlOiBDb250ZXN0c1NlcnZpY2UsXHJcbiAgICAgICAgICAgICAgcHJpdmF0ZSBlcnJvclNlcnZpY2U6IEVycm9yU2VydmljZSxcclxuICAgICAgICAgICAgICBwcml2YXRlIGF1dGhTZXJ2aWNlOiBBdXRoU2VydmljZSxcclxuICAgICAgICAgICAgICBwcml2YXRlIGFwaVNlcnZpY2U6IEFwaVNlcnZpY2UpIHsgfVxyXG5cclxuICBuZ09uSW5pdCgpIHsgXHJcbiAgICB0aGlzLnJvdXRlLnBhcmFtcy5zdWJzY3JpYmUoKHBhcmFtczogUGFyYW1zKSA9PiB7XHJcbiAgICAgIHRoaXMuY29udGVzdElkID0gcGFyYW1zWydpZCddO1xyXG4gICAgfSk7XHJcbiAgICB0aGlzLmNvbnRlc3RzU2VydmljZS5nZXRJbmRpdmlkdWFsQ29udGVzdCh0aGlzLmNvbnRlc3RJZClcclxuICAgICAgLnN1YnNjcmliZShjb250ZXN0ID0+IHtcclxuICAgICAgICB0aGlzLmNvbnRlc3QgPSBjb250ZXN0O1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdjb250ZXN0LWRldGFpbHMuY29tcG9uZW50LnRzIHRoaXMuY29udGVzdCcpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMuY29udGVzdCk7XHJcbiAgICAgIH0sIFxyXG4gICAgICBlcnJvciA9PiB7XHJcbiAgICAgICAgICB0aGlzLmVycm9yU2VydmljZS5oYW5kbGVFcnJvcihlcnJvcik7XHJcbiAgICAgIH0pO1xyXG4gICAgdGhpcy5hcGlTZXJ2aWNlLmdldENvbnRlc3RTdWJtaXRpb25zKHRoaXMuY29udGVzdElkKSAvL0NVUlJFTlQgRk9DVVNcclxuICAgICAgICAuc3Vic2NyaWJlKHN1Ym1pdGlvbnMgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnc3VibWl0aW9ucyBmcm9tIGFwaXNlcnZpY2UgaW4gY29udGVzdC1kZXRhaWxzJyk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHN1Ym1pdGlvbnMpO1xyXG4gICAgICAgICAgICB0aGlzLnN1Ym1pdGlvbnMgPSBzdWJtaXRpb25zO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyh0aGlzLnN1Ym1pdGlvbnMpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZXJyb3IgPT4ge1xyXG4gICAgICAgICAgdGhpcy5lcnJvclNlcnZpY2UuaGFuZGxlRXJyb3IoZXJyb3IpO1xyXG4gICAgICB9KTtcclxuICB9XHJcblxyXG4gIGlzQ2xpZW50KCkge1xyXG4gICAgICByZXR1cm4gdGhpcy5hdXRoU2VydmljZS5pc0NsaWVudCgpO1xyXG4gIH1cclxuXHJcbiAgaXNEZXNpZ25lcigpIHtcclxuICAgIHJldHVybiB0aGlzLmF1dGhTZXJ2aWNlLmlzRGVzaWduZXIoKTtcclxuICB9XHJcblxyXG4gIGlzTG9nZ2VkSW4oKSB7XHJcbiAgcmV0dXJuIHRoaXMuYXV0aFNlcnZpY2UuaXNMb2dnZWRJbigpO1xyXG4gIH1cclxuXHJcbiAgLy9GSUxFIFVQTE9BRCBTVFVGRlxyXG5cclxuICB1cGxvYWQoKSB7XHJcbiAgICAgICAgdGhpcy51c2VySWQgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndXNlcklkJyk7XHJcbiAgICAgICAgdGhpcy5tYWtlRmlsZVJlcXVlc3QoJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9hcGkvdjEvc3VibWl0aW9ucy8nICsgdGhpcy5jb250ZXN0SWQgKyAnLycgK3RoaXMudXNlcklkLCBbXSwgdGhpcy5maWxlc1RvVXBsb2FkKS50aGVuKChyZXN1bHQpID0+IHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2cocmVzdWx0KTtcclxuICAgICAgICAgICAgLy90aGlzLmZpbGVzVG9VcGxvYWQgPSBbXTtcclxuICAgICAgICB9LCAoZXJyb3IpID0+IHtcclxuICAgICAgICAgICAgY29uc29sZS5lcnJvcihlcnJvcik7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5tYWtlRmlsZVJlcXVlc3QoJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9hcGkvdjEvc3VibWl0aW9ucy9nYWxsZXJ5LycgKyB0aGlzLmNvbnRlc3RJZCArICcvJyArdGhpcy51c2VySWQsIFtdLCB0aGlzLmZpbGVzVG9VcGxvYWQpLnRoZW4oKHJlc3VsdCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhyZXN1bHQpO1xyXG4gICAgICAgICAgICB0aGlzLmZpbGVzVG9VcGxvYWQgPSBbXTtcclxuICAgICAgICAgICAgLy9yZWxvYWQgc3VibWl0aW9uc1xyXG4gICAgICAgICAgICB0aGlzLmFwaVNlcnZpY2UuZ2V0Q29udGVzdFN1Ym1pdGlvbnModGhpcy5jb250ZXN0SWQpIC8vQ1VSUkVOVCBGT0NVU1xyXG4gICAgICAgIC5zdWJzY3JpYmUoc3VibWl0aW9ucyA9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdzdWJtaXRpb25zIGZyb20gYXBpc2VydmljZSBpbiBjb250ZXN0LWRldGFpbHMnKTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coc3VibWl0aW9ucyk7XHJcbiAgICAgICAgICAgIHRoaXMuc3VibWl0aW9ucyA9IHN1Ym1pdGlvbnM7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHRoaXMuc3VibWl0aW9ucyk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBlcnJvciA9PiB7XHJcbiAgICAgICAgICB0aGlzLmVycm9yU2VydmljZS5oYW5kbGVFcnJvcihlcnJvcik7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgLy9lbmQgb2YgcmVsb2FkaW5nIHN1Ym1pdGlvbnNcclxuICAgICAgICB9LCAoZXJyb3IpID0+IHtcclxuICAgICAgICAgICAgY29uc29sZS5lcnJvcihlcnJvcik7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgZmlsZUNoYW5nZUV2ZW50KGZpbGVJbnB1dDogYW55KXtcclxuICAgICAgICB0aGlzLmZpbGVzVG9VcGxvYWQgPSA8QXJyYXk8RmlsZT4+IGZpbGVJbnB1dC50YXJnZXQuZmlsZXM7XHJcbiAgICAgICAgLy90aGlzLmZpbGVzVG9VcGxvYWQuZm9yRWFjaCgoZmlsZSwgaSkgPT4gdGhpcy5maWxlc1RvVXBsb2FkLnB1c2goZmlsZUlucHV0LnRhcmdldC5maWxlc1tpXSkpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGZpbGVJbnB1dC50YXJnZXQuZmlsZXMpO1xyXG4gICAgICAgIC8vbGV0IGFyciA9IEFycmF5LmZyb20oZmlsZUlucHV0LnRhcmdldC5maWxlcyk7IC8vY29udmVydCBGaWxlIE9iamVjdCB0byBBcnJheSB0byBwdXNoIGl0XHJcbiAgICAgICAgLy90aGlzLmZpbGVzVG9VcGxvYWQucHVzaChhcnJbMF0pOyAvL3VzZSB0aGlzIGlmIHlvdSB1c2UgbXVsdGlwbGUgc2luZ2xlIGZpbGUgaW5wdXRzXHJcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5maWxlc1RvVXBsb2FkKTtcclxuICAgIH1cclxuIFxyXG4gICAgbWFrZUZpbGVSZXF1ZXN0KHVybDogc3RyaW5nLCBwYXJhbXM6IEFycmF5PHN0cmluZz4sIGZpbGVzOiBBcnJheTxGaWxlPikge1xyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgICAgIHZhciBmb3JtRGF0YTogYW55ID0gbmV3IEZvcm1EYXRhKCk7XHJcbiAgICAgICAgICAgIHZhciB4aHIgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcclxuICAgICAgICAgICAgZm9yKHZhciBpID0gMDsgaSA8IGZpbGVzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICBmb3JtRGF0YS5hcHBlbmQoXCJzdWJtaXRpb25cIiwgZmlsZXNbaV0sIGZpbGVzW2ldLm5hbWUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHhoci51cGxvYWQuYWRkRXZlbnRMaXN0ZW5lcihcInByb2dyZXNzXCIsIChldnQpID0+IHRoaXMuY2FsY3VsYXRlVXBsb2FkUHJvZ3Jlc3MoZXZ0KSwgZmFsc2UpOyBcclxuICAgICAgICAgICAgeGhyLm9ucmVhZHlzdGF0ZWNoYW5nZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIGlmICh4aHIucmVhZHlTdGF0ZSA9PSA0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHhoci5zdGF0dXMgPT0gMjAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUoSlNPTi5wYXJzZSh4aHIucmVzcG9uc2UpKTtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZWplY3QoeGhyLnJlc3BvbnNlKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgeGhyLm9uZXJyb3IgPSBmdW5jdGlvbihlKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnS2xhaWRhIMSva2VsaWFudCBmYWlsdXMnKTtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGUpO1xyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICB4aHIub3BlbihcIlBPU1RcIiwgdXJsLCB0cnVlKTtcclxuICAgICAgICAgICAgeGhyLnNlbmQoZm9ybURhdGEpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGNhbGN1bGF0ZVVwbG9hZFByb2dyZXNzKGV2dCkge1xyXG4gICAgaWYgKGV2dC5sZW5ndGhDb21wdXRhYmxlKSB7XHJcbiAgICAgICAgdGhpcy5wZXJjZW50ID0gTWF0aC5yb3VuZChldnQubG9hZGVkIC8gZXZ0LnRvdGFsICogMTAwKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIlBFUkNFTlQgOiBcIiwgdGhpcy5wZXJjZW50ICsgXCIlXCIpO1xyXG4gICAgfVxyXG4gICAgLy9FTkQgT0YgRklMRSBVUExPQUQgU1RVRkZcclxuXHJcbn1cclxuXHJcbn0iXX0=
