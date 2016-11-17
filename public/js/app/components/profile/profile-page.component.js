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
var auth_service_1 = require('../../services/auth.service');
var angular2_notifications_1 = require('angular2-notifications');
var ProfilePageComponent = (function () {
    function ProfilePageComponent(authService, notificationsService) {
        this.authService = authService;
        this.notificationsService = notificationsService;
        this.avatarUrl = '';
        this.percent = "0";
        this.id = '';
        this.isLoading = false;
        this.options = {
            position: ["top", "right"]
        };
        this.filesToUpload = [];
    }
    ProfilePageComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.isLoading = true;
        this.id = localStorage.getItem('userId');
        this.authService.getAvatar(this.id)
            .subscribe(function (data) {
            console.log(data);
            _this.avatarUrl = data.avatarUrl;
            _this.isLoading = false;
        }, function (error) {
            _this.notificationsService.error(error.title, error.error.message, { timeOut: 3000, showProgressBar: false });
        });
    };
    ProfilePageComponent.prototype.upload = function () {
        var _this = this;
        this.isLoading = true;
        this.makeFileRequest("http://localhost:3000/api/v1/avatars/" + this.id, this.filesToUpload).then(function (result) {
            console.log(result);
            _this.authService.getAvatar(_this.id)
                .subscribe(function (data) {
                console.log(data);
                _this.avatarUrl = data.avatarUrl;
                _this.isLoading = false;
            }, function (error) {
                _this.notificationsService.error(error.title, error.error.message, { timeOut: 3000, showProgressBar: false });
            });
            _this.filesToUpload = [];
        }, function (error) {
            console.error(error);
        });
    };
    ProfilePageComponent.prototype.fileChangeEvent = function (fileInput) {
        this.filesToUpload = fileInput.target.files;
        //this.filesToUpload.forEach((file, i) => this.filesToUpload.push(fileInput.target.files[i]));
        console.log(fileInput.target.files);
        //let arr = Array.from(fileInput.target.files); //convert File Object to Array to push it
        //this.filesToUpload.push(arr[0]); //use this if you use multiple single file inputs
        console.log(this.filesToUpload);
    };
    ProfilePageComponent.prototype.makeFileRequest = function (url, files) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var formData = new FormData();
            var xhr = new XMLHttpRequest();
            for (var i = 0; i < files.length; i++) {
                formData.append("avatar", files[i], files[i].name);
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
    ProfilePageComponent.prototype.calculateUploadProgress = function (evt) {
        if (evt.lengthComputable) {
            this.percent = Math.round(evt.loaded / evt.total * 100) + "%";
            console.log("PERCENT : ", this.percent);
        }
    };
    ProfilePageComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'profile-page',
            templateUrl: 'profile-page.component.html'
        }), 
        __metadata('design:paramtypes', [auth_service_1.AuthService, angular2_notifications_1.NotificationsService])
    ], ProfilePageComponent);
    return ProfilePageComponent;
}());
exports.ProfilePageComponent = ProfilePageComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvcHJvZmlsZS9wcm9maWxlLXBhZ2UuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBa0MsZUFBZSxDQUFDLENBQUE7QUFDbEQsNkJBQTRCLDZCQUE2QixDQUFDLENBQUE7QUFDMUQsdUNBQXFDLHdCQUF3QixDQUFDLENBQUE7QUFPOUQ7SUFTRSw4QkFBb0IsV0FBd0IsRUFBVSxvQkFBMEM7UUFBNUUsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFBVSx5QkFBb0IsR0FBcEIsb0JBQW9CLENBQXNCO1FBUmhHLGNBQVMsR0FBVyxFQUFFLENBQUM7UUFFdkIsWUFBTyxHQUFHLEdBQUcsQ0FBQztRQUNkLE9BQUUsR0FBRyxFQUFFLENBQUM7UUFDUixjQUFTLEdBQUcsS0FBSyxDQUFDO1FBQ1gsWUFBTyxHQUFHO1lBQ2IsUUFBUSxFQUFFLENBQUMsS0FBSyxFQUFDLE9BQU8sQ0FBQztTQUMxQixDQUFDO1FBRUYsSUFBSSxDQUFDLGFBQWEsR0FBRyxFQUFFLENBQUM7SUFDekIsQ0FBQztJQUVGLHVDQUFRLEdBQVI7UUFBQSxpQkFXQztRQVZHLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDO1FBQ3hCLElBQUksQ0FBQyxFQUFFLEdBQUcsWUFBWSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUN6QyxJQUFJLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDO2FBQ2hDLFNBQVMsQ0FBQyxVQUFBLElBQUk7WUFDYixPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ2xCLEtBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQztZQUNoQyxLQUFJLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQztRQUN6QixDQUFDLEVBQUUsVUFBQSxLQUFLO1lBQ0osS0FBSSxDQUFDLG9CQUFvQixDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMs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cy9wcm9maWxlL3Byb2ZpbGUtcGFnZS5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBBdXRoU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL2F1dGguc2VydmljZSc7XHJcbmltcG9ydCB7IE5vdGlmaWNhdGlvbnNTZXJ2aWNlIH0gZnJvbSAnYW5ndWxhcjItbm90aWZpY2F0aW9ucyc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBtb2R1bGVJZDogbW9kdWxlLmlkLFxyXG4gIHNlbGVjdG9yOiAncHJvZmlsZS1wYWdlJyxcclxuICB0ZW1wbGF0ZVVybDogJ3Byb2ZpbGUtcGFnZS5jb21wb25lbnQuaHRtbCdcclxufSlcclxuZXhwb3J0IGNsYXNzIFByb2ZpbGVQYWdlQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuICBhdmF0YXJVcmw6IHN0cmluZyA9ICcnO1xyXG4gIGZpbGVzVG9VcGxvYWQ6IEZpbGVbXTtcclxuICBwZXJjZW50ID0gXCIwXCI7XHJcbiAgaWQgPSAnJztcclxuICBpc0xvYWRpbmcgPSBmYWxzZTtcclxuICBwdWJsaWMgb3B0aW9ucyA9IHtcclxuICAgICAgcG9zaXRpb246IFtcInRvcFwiLFwicmlnaHRcIl1cclxuICAgIH07XHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBhdXRoU2VydmljZTogQXV0aFNlcnZpY2UsIHByaXZhdGUgbm90aWZpY2F0aW9uc1NlcnZpY2U6IE5vdGlmaWNhdGlvbnNTZXJ2aWNlKSB7XHJcbiAgICB0aGlzLmZpbGVzVG9VcGxvYWQgPSBbXTtcclxuICAgfVxyXG5cclxuICBuZ09uSW5pdCgpIHsgXHJcbiAgICAgIHRoaXMuaXNMb2FkaW5nID0gdHJ1ZTtcclxuICAgIHRoaXMuaWQgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndXNlcklkJyk7XHJcbiAgICB0aGlzLmF1dGhTZXJ2aWNlLmdldEF2YXRhcih0aGlzLmlkKVxyXG4gICAgICAuc3Vic2NyaWJlKGRhdGEgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xyXG4gICAgICAgIHRoaXMuYXZhdGFyVXJsID0gZGF0YS5hdmF0YXJVcmw7XHJcbiAgICAgICAgdGhpcy5pc0xvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgfSwgZXJyb3IgPT4ge1xyXG4gICAgICAgICAgdGhpcy5ub3RpZmljYXRpb25zU2VydmljZS5lcnJvcihlcnJvci50aXRsZSwgZXJyb3IuZXJyb3IubWVzc2FnZSwge3RpbWVPdXQ6IDMwMDAsIHNob3dQcm9ncmVzc0JhcjogZmFsc2V9KVxyXG4gICAgICB9KTtcclxuICB9XHJcblxyXG4gIHVwbG9hZCgpIHtcclxuICAgICAgdGhpcy5pc0xvYWRpbmcgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMubWFrZUZpbGVSZXF1ZXN0KFwiaHR0cDovL2xvY2FsaG9zdDozMDAwL2FwaS92MS9hdmF0YXJzL1wiK3RoaXMuaWQsIHRoaXMuZmlsZXNUb1VwbG9hZCkudGhlbigocmVzdWx0KSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3VsdCk7XHJcbiAgICAgICAgICAgIHRoaXMuYXV0aFNlcnZpY2UuZ2V0QXZhdGFyKHRoaXMuaWQpXHJcbiAgICAgICAgICAgICAgLnN1YnNjcmliZShkYXRhID0+IHtcclxuICAgICAgICAgICAgICBjb25zb2xlLmxvZyhkYXRhKTtcclxuICAgICAgICAgICAgICB0aGlzLmF2YXRhclVybCA9IGRhdGEuYXZhdGFyVXJsO1xyXG4gICAgICAgICAgICAgIHRoaXMuaXNMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgIH0sIGVycm9yID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMubm90aWZpY2F0aW9uc1NlcnZpY2UuZXJyb3IoZXJyb3IudGl0bGUsIGVycm9yLmVycm9yLm1lc3NhZ2UsIHt0aW1lT3V0OiAzMDAwLCBzaG93UHJvZ3Jlc3NCYXI6IGZhbHNlfSlcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIHRoaXMuZmlsZXNUb1VwbG9hZCA9IFtdO1xyXG4gICAgICAgIH0sIChlcnJvcikgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBmaWxlQ2hhbmdlRXZlbnQoZmlsZUlucHV0OiBhbnkpe1xyXG4gICAgICAgIHRoaXMuZmlsZXNUb1VwbG9hZCA9IDxBcnJheTxGaWxlPj4gZmlsZUlucHV0LnRhcmdldC5maWxlcztcclxuICAgICAgICAvL3RoaXMuZmlsZXNUb1VwbG9hZC5mb3JFYWNoKChmaWxlLCBpKSA9PiB0aGlzLmZpbGVzVG9VcGxvYWQucHVzaChmaWxlSW5wdXQudGFyZ2V0LmZpbGVzW2ldKSk7XHJcbiAgICAgICAgY29uc29sZS5sb2coZmlsZUlucHV0LnRhcmdldC5maWxlcyk7XHJcbiAgICAgICAgLy9sZXQgYXJyID0gQXJyYXkuZnJvbShmaWxlSW5wdXQudGFyZ2V0LmZpbGVzKTsgLy9jb252ZXJ0IEZpbGUgT2JqZWN0IHRvIEFycmF5IHRvIHB1c2ggaXRcclxuICAgICAgICAvL3RoaXMuZmlsZXNUb1VwbG9hZC5wdXNoKGFyclswXSk7IC8vdXNlIHRoaXMgaWYgeW91IHVzZSBtdWx0aXBsZSBzaW5nbGUgZmlsZSBpbnB1dHNcclxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLmZpbGVzVG9VcGxvYWQpO1xyXG4gICAgfVxyXG4gXHJcbiAgICBtYWtlRmlsZVJlcXVlc3QodXJsOiBzdHJpbmcsIGZpbGVzOiBBcnJheTxGaWxlPikge1xyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgICAgIHZhciBmb3JtRGF0YTogYW55ID0gbmV3IEZvcm1EYXRhKCk7XHJcbiAgICAgICAgICAgIHZhciB4aHIgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcclxuICAgICAgICAgICAgZm9yKHZhciBpID0gMDsgaSA8IGZpbGVzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICBmb3JtRGF0YS5hcHBlbmQoXCJhdmF0YXJcIiwgZmlsZXNbaV0sIGZpbGVzW2ldLm5hbWUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHhoci51cGxvYWQuYWRkRXZlbnRMaXN0ZW5lcihcInByb2dyZXNzXCIsIChldnQpID0+IHRoaXMuY2FsY3VsYXRlVXBsb2FkUHJvZ3Jlc3MoZXZ0KSwgZmFsc2UpOyBcclxuICAgICAgICAgICAgeGhyLm9ucmVhZHlzdGF0ZWNoYW5nZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIGlmICh4aHIucmVhZHlTdGF0ZSA9PSA0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHhoci5zdGF0dXMgPT0gMjAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUoSlNPTi5wYXJzZSh4aHIucmVzcG9uc2UpKTtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZWplY3QoeGhyLnJlc3BvbnNlKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgeGhyLm9uZXJyb3IgPSBmdW5jdGlvbihlKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnS2xhaWRhIMSva2VsaWFudCBmYWlsdXMnKTtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGUpO1xyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICB4aHIub3BlbihcIlBPU1RcIiwgdXJsLCB0cnVlKTtcclxuICAgICAgICAgICAgeGhyLnNlbmQoZm9ybURhdGEpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGNhbGN1bGF0ZVVwbG9hZFByb2dyZXNzKGV2dCkge1xyXG4gICAgaWYgKGV2dC5sZW5ndGhDb21wdXRhYmxlKSB7XHJcbiAgICAgICAgdGhpcy5wZXJjZW50ID0gTWF0aC5yb3VuZChldnQubG9hZGVkIC8gZXZ0LnRvdGFsICogMTAwKSArIFwiJVwiO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiUEVSQ0VOVCA6IFwiLCB0aGlzLnBlcmNlbnQpO1xyXG4gICAgfVxyXG59XHJcblxyXG59Il19
