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
var api_service_1 = require('../../services/api.service');
var router_1 = require('@angular/router');
var angular2_notifications_1 = require('angular2-notifications');
var CryptoJS = require('crypto-js');
var ProfilePageComponent = (function () {
    function ProfilePageComponent(authService, notificationsService, apiService, router) {
        this.authService = authService;
        this.notificationsService = notificationsService;
        this.apiService = apiService;
        this.router = router;
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
        this.id = sessionStorage.getItem('userId');
        this.authService.getAvatar(this.id)
            .subscribe(function (data) {
            _this.avatarUrl = data.avatarUrl;
            _this.isLoading = false;
        }, function (error) {
            _this.notificationsService.error(error.title, error.error.message, { timeOut: 3000, showProgressBar: false });
        });
        this.apiService.getUserInfo(this.id)
            .subscribe(function (user) {
            _this.user = user;
        }, function (error) {
            _this.isLoading = false;
        });
    };
    ProfilePageComponent.prototype.ngAfterViewInit = function () {
        jQuery(document).ready(function () {
            jQuery(".fancybox").fancybox({});
        });
    };
    ProfilePageComponent.prototype.upload = function () {
        var _this = this;
        this.isLoading = true;
        this.makeFileRequest("http://localhost:3000/api/v1/avatars/" + this.id, this.filesToUpload).then(function (result) {
            _this.authService.getAvatar(_this.id)
                .subscribe(function (data) {
                _this.avatarUrl = data.avatarUrl;
                _this.isLoading = false;
                _this.notificationsService.success('Pakeista', 'Avataras pakeistas', { timeOut: 3000, showProgressBar: false });
            }, function (error) {
                _this.isLoading = false;
                _this.notificationsService.error(error.title, error.error.message, { timeOut: 3000, showProgressBar: false });
            });
            _this.filesToUpload = [];
        }, function (error) {
            _this.isLoading = false;
            _this.notificationsService.error('Klaida !', 'Netinkamas failo formatas! Tinkami formatai: .jpg, .jpeg, .png, .gif', { timeOut: 3000, showProgressBar: false });
        });
    };
    ProfilePageComponent.prototype.fileChangeEvent = function (fileInput) {
        this.filesToUpload = fileInput.target.files;
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
            };
            xhr.open("POST", url, true);
            xhr.send(formData);
        });
    };
    ProfilePageComponent.prototype.calculateUploadProgress = function (evt) {
        if (evt.lengthComputable) {
            this.percent = Math.round(evt.loaded / evt.total * 100) + "%";
        }
    };
    ProfilePageComponent.prototype.emailConfirmed = function () {
        return sessionStorage.getItem('emailConfirmed') == CryptoJS.SHA3('true').toString();
    };
    ProfilePageComponent.prototype.sendConfirmationEmail = function () {
        var _this = this;
        this.authService.sendConfirmationEmail(this.id)
            .subscribe(function (data) {
            _this.notificationsService.success('Išsiųsta', 'Patvirtinimo laiškas išsiųstas adresu ' + data.email, { timeOut: 3000, showProgressBar: false });
        }, function (error) {
            _this.notificationsService.error(error.title, error.error.message, { timeOut: 3000, showProgressBar: false });
        });
    };
    ProfilePageComponent.prototype.sendPrivateMessage = function (nickname) {
        this.router.navigate(['/profilis', 'pastas', 'rasyti-laiska', nickname]);
    };
    ProfilePageComponent.prototype.goToMail = function () {
        this.router.navigate(['/profilis', 'pastas']);
    };
    ProfilePageComponent.prototype.isClient = function () {
        return this.authService.isClient();
    };
    ProfilePageComponent.prototype.isDesigner = function () {
        return this.authService.isDesigner();
    };
    ProfilePageComponent.prototype.isAdmin = function () {
        return this.authService.isAdmin();
    };
    ProfilePageComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'profile-page',
            templateUrl: 'profile-page.component.html',
            styleUrls: ['profile-page.component.css']
        }), 
        __metadata('design:paramtypes', [auth_service_1.AuthService, angular2_notifications_1.NotificationsService, api_service_1.ApiService, router_1.Router])
    ], ProfilePageComponent);
    return ProfilePageComponent;
}());
exports.ProfilePageComponent = ProfilePageComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvcHJvZmlsZS9wcm9maWxlLXBhZ2UuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBa0MsZUFBZSxDQUFDLENBQUE7QUFDbEQsNkJBQTRCLDZCQUE2QixDQUFDLENBQUE7QUFDMUQsNEJBQTJCLDRCQUE0QixDQUFDLENBQUE7QUFDeEQsdUJBQXVCLGlCQUFpQixDQUFDLENBQUE7QUFDekMsdUNBQXFDLHdCQUF3QixDQUFDLENBQUE7QUFDOUQsSUFBWSxRQUFRLFdBQU0sV0FBVyxDQUFDLENBQUE7QUFVdEM7SUFVRSw4QkFBb0IsV0FBd0IsRUFDeEIsb0JBQTBDLEVBQzFDLFVBQXNCLEVBQ3RCLE1BQWM7UUFIZCxnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUN4Qix5QkFBb0IsR0FBcEIsb0JBQW9CLENBQXNCO1FBQzFDLGVBQVUsR0FBVixVQUFVLENBQVk7UUFDdEIsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQVpsQyxjQUFTLEdBQVcsRUFBRSxDQUFDO1FBRXZCLFlBQU8sR0FBRyxHQUFHLENBQUM7UUFDZCxPQUFFLEdBQUcsRUFBRSxDQUFDO1FBRVIsY0FBUyxHQUFHLEtBQUssQ0FBQztRQUNYLFlBQU8sR0FBRztZQUNiLFFBQVEsRUFBRSxDQUFDLEtBQUssRUFBQyxPQUFPLENBQUM7U0FDMUIsQ0FBQztRQUtGLElBQUksQ0FBQyxhQUFhLEdBQUcsRUFBRSxDQUFDO0lBQ3pCLENBQUM7SUFFRix1Q0FBUSxHQUFSO1FBQUEsaUJBaUJDO1FBaEJHLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDO1FBQ3hCLElBQUksQ0FBQyxFQUFFLEdBQUcsY0FBYyxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUMzQyxJQUFJLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDO2FBQ2hDLFNBQVMsQ0FBQyxVQUFBLElBQUk7WUFDYixLQUFJLENBQUMsU0FBUyxH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LE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxXQUFXLEVBQUUsUUFBUSxDQUFDLENBQUMsQ0FBQztJQUNsRCxDQUFDO0lBRUQsdUNBQVEsR0FBUjtRQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQ3ZDLENBQUM7SUFFRCx5Q0FBVSxHQUFWO1FBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsVUFBVSxFQUFFLENBQUM7SUFDekMsQ0FBQztJQUVELHNDQUFPLEdBQVA7UUFDSSxNQUFNLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxPQUFPLEVBQUUsQ0FBQztJQUN0QyxDQUFDO0lBdElMO1FBQUMsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixRQUFRLEVBQUUsY0FBYztZQUN4QixXQUFXLEVBQUUsNkJBQTZCO1lBQzFDLFNBQVMsRUFBRSxDQUFDLDRCQUE0QixDQUFDO1NBQzFDLENBQUM7OzRCQUFBO0lBbUlGLDJCQUFDO0FBQUQsQ0FsSUEsQUFrSUMsSUFBQTtBQWxJWSw0QkFBb0IsdUJBa0loQyxDQUFBIiwiZmlsZSI6ImNvbXBvbmVudHMvcHJvZmlsZS9wcm9maWxlLXBhZ2UuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQXV0aFNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9hdXRoLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBBcGlTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvYXBpLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5pbXBvcnQgeyBOb3RpZmljYXRpb25zU2VydmljZSB9IGZyb20gJ2FuZ3VsYXIyLW5vdGlmaWNhdGlvbnMnO1xyXG5pbXBvcnQgKiBhcyBDcnlwdG9KUyBmcm9tICdjcnlwdG8tanMnO1xyXG5cclxuZGVjbGFyZSB2YXIgalF1ZXJ5OiBhbnk7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBtb2R1bGVJZDogbW9kdWxlLmlkLFxyXG4gIHNlbGVjdG9yOiAncHJvZmlsZS1wYWdlJyxcclxuICB0ZW1wbGF0ZVVybDogJ3Byb2ZpbGUtcGFnZS5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJ3Byb2ZpbGUtcGFnZS5jb21wb25lbnQuY3NzJ11cclxufSlcclxuZXhwb3J0IGNsYXNzIFByb2ZpbGVQYWdlQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuICBhdmF0YXJVcmw6IHN0cmluZyA9ICcnO1xyXG4gIGZpbGVzVG9VcGxvYWQ6IEZpbGVbXTtcclxuICBwZXJjZW50ID0gXCIwXCI7XHJcbiAgaWQgPSAnJztcclxuICB1c2VyOiBhbnk7XHJcbiAgaXNMb2FkaW5nID0gZmFsc2U7XHJcbiAgcHVibGljIG9wdGlvbnMgPSB7XHJcbiAgICAgIHBvc2l0aW9uOiBbXCJ0b3BcIixcInJpZ2h0XCJdXHJcbiAgICB9O1xyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgYXV0aFNlcnZpY2U6IEF1dGhTZXJ2aWNlLCBcclxuICAgICAgICAgICAgICBwcml2YXRlIG5vdGlmaWNhdGlvbnNTZXJ2aWNlOiBOb3RpZmljYXRpb25zU2VydmljZSxcclxuICAgICAgICAgICAgICBwcml2YXRlIGFwaVNlcnZpY2U6IEFwaVNlcnZpY2UsXHJcbiAgICAgICAgICAgICAgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlcikge1xyXG4gICAgdGhpcy5maWxlc1RvVXBsb2FkID0gW107XHJcbiAgIH1cclxuXHJcbiAgbmdPbkluaXQoKSB7IFxyXG4gICAgICB0aGlzLmlzTG9hZGluZyA9IHRydWU7XHJcbiAgICB0aGlzLmlkID0gc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbSgndXNlcklkJyk7XHJcbiAgICB0aGlzLmF1dGhTZXJ2aWNlLmdldEF2YXRhcih0aGlzLmlkKVxyXG4gICAgICAuc3Vic2NyaWJlKGRhdGEgPT4ge1xyXG4gICAgICAgIHRoaXMuYXZhdGFyVXJsID0gZGF0YS5hdmF0YXJVcmw7XHJcbiAgICAgICAgdGhpcy5pc0xvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgfSwgZXJyb3IgPT4ge1xyXG4gICAgICAgICAgdGhpcy5ub3RpZmljYXRpb25zU2VydmljZS5lcnJvcihlcnJvci50aXRsZSwgZXJyb3IuZXJyb3IubWVzc2FnZSwge3RpbWVPdXQ6IDMwMDAsIHNob3dQcm9ncmVzc0JhcjogZmFsc2V9KVxyXG4gICAgICB9KTtcclxuICAgICAgdGhpcy5hcGlTZXJ2aWNlLmdldFVzZXJJbmZvKHRoaXMuaWQpXHJcbiAgICAgIC5zdWJzY3JpYmUodXNlciA9PiB7XHJcbiAgICAgICAgdGhpcy51c2VyID0gdXNlcjtcclxuICAgICAgfSxcclxuICAgICAgZXJyb3IgPT4ge1xyXG4gICAgICAgIHRoaXMuaXNMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgbmdBZnRlclZpZXdJbml0KCkge1xyXG4gICAgalF1ZXJ5KGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigpIHtcclxuICAgICAgalF1ZXJ5KFwiLmZhbmN5Ym94XCIpLmZhbmN5Ym94KHtcclxuICAgICAgICBcclxuICAgICAgfSk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHVwbG9hZCgpIHtcclxuICAgICAgdGhpcy5pc0xvYWRpbmcgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMubWFrZUZpbGVSZXF1ZXN0KFwiaHR0cDovL2xvY2FsaG9zdDozMDAwL2FwaS92MS9hdmF0YXJzL1wiK3RoaXMuaWQsIHRoaXMuZmlsZXNUb1VwbG9hZCkudGhlbigocmVzdWx0KSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuYXV0aFNlcnZpY2UuZ2V0QXZhdGFyKHRoaXMuaWQpXHJcbiAgICAgICAgICAgICAgLnN1YnNjcmliZShkYXRhID0+IHtcclxuICAgICAgICAgICAgICB0aGlzLmF2YXRhclVybCA9IGRhdGEuYXZhdGFyVXJsO1xyXG4gICAgICAgICAgICAgIHRoaXMuaXNMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgdGhpcy5ub3RpZmljYXRpb25zU2VydmljZS5zdWNjZXNzKCdQYWtlaXN0YScsJ0F2YXRhcmFzIHBha2Vpc3RhcycsIHt0aW1lT3V0OiAzMDAwLCBzaG93UHJvZ3Jlc3NCYXI6IGZhbHNlfSlcclxuICAgICAgICAgICAgfSwgZXJyb3IgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5pc0xvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIHRoaXMubm90aWZpY2F0aW9uc1NlcnZpY2UuZXJyb3IoZXJyb3IudGl0bGUsIGVycm9yLmVycm9yLm1lc3NhZ2UsIHt0aW1lT3V0OiAzMDAwLCBzaG93UHJvZ3Jlc3NCYXI6IGZhbHNlfSlcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIHRoaXMuZmlsZXNUb1VwbG9hZCA9IFtdO1xyXG4gICAgICAgIH0sIChlcnJvcikgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmlzTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICB0aGlzLm5vdGlmaWNhdGlvbnNTZXJ2aWNlLmVycm9yKCdLbGFpZGEgIScsICdOZXRpbmthbWFzIGZhaWxvIGZvcm1hdGFzISBUaW5rYW1pIGZvcm1hdGFpOiAuanBnLCAuanBlZywgLnBuZywgLmdpZicsIHt0aW1lT3V0OiAzMDAwLCBzaG93UHJvZ3Jlc3NCYXI6IGZhbHNlfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgZmlsZUNoYW5nZUV2ZW50KGZpbGVJbnB1dDogYW55KXtcclxuICAgICAgICB0aGlzLmZpbGVzVG9VcGxvYWQgPSA8QXJyYXk8RmlsZT4+IGZpbGVJbnB1dC50YXJnZXQuZmlsZXM7XHJcbiAgICB9XHJcbiBcclxuICAgIG1ha2VGaWxlUmVxdWVzdCh1cmw6IHN0cmluZywgZmlsZXM6IEFycmF5PEZpbGU+KSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgICAgICAgdmFyIGZvcm1EYXRhOiBhbnkgPSBuZXcgRm9ybURhdGEoKTtcclxuICAgICAgICAgICAgdmFyIHhociA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xyXG4gICAgICAgICAgICBmb3IodmFyIGkgPSAwOyBpIDwgZmlsZXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIGZvcm1EYXRhLmFwcGVuZChcImF2YXRhclwiLCBmaWxlc1tpXSwgZmlsZXNbaV0ubmFtZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgeGhyLnVwbG9hZC5hZGRFdmVudExpc3RlbmVyKFwicHJvZ3Jlc3NcIiwgKGV2dCkgPT4gdGhpcy5jYWxjdWxhdGVVcGxvYWRQcm9ncmVzcyhldnQpLCBmYWxzZSk7IFxyXG4gICAgICAgICAgICB4aHIub25yZWFkeXN0YXRlY2hhbmdlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKHhoci5yZWFkeVN0YXRlID09IDQpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoeGhyLnN0YXR1cyA9PSAyMDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShKU09OLnBhcnNlKHhoci5yZXNwb25zZSkpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlamVjdCh4aHIucmVzcG9uc2UpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB4aHIub25lcnJvciA9IGZ1bmN0aW9uKGUpIHtcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgeGhyLm9wZW4oXCJQT1NUXCIsIHVybCwgdHJ1ZSk7XHJcbiAgICAgICAgICAgIHhoci5zZW5kKGZvcm1EYXRhKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBjYWxjdWxhdGVVcGxvYWRQcm9ncmVzcyhldnQpIHtcclxuICAgIGlmIChldnQubGVuZ3RoQ29tcHV0YWJsZSkge1xyXG4gICAgICAgIHRoaXMucGVyY2VudCA9IE1hdGgucm91bmQoZXZ0LmxvYWRlZCAvIGV2dC50b3RhbCAqIDEwMCkgKyBcIiVcIjtcclxuICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBlbWFpbENvbmZpcm1lZCgpIHtcclxuICAgICAgICByZXR1cm4gc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbSgnZW1haWxDb25maXJtZWQnKSA9PSBDcnlwdG9KUy5TSEEzKCd0cnVlJykudG9TdHJpbmcoKTtcclxuICAgIH1cclxuXHJcbiAgICBzZW5kQ29uZmlybWF0aW9uRW1haWwoKSB7XHJcbiAgICAgICAgdGhpcy5hdXRoU2VydmljZS5zZW5kQ29uZmlybWF0aW9uRW1haWwodGhpcy5pZClcclxuICAgICAgICAuc3Vic2NyaWJlKGRhdGEgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLm5vdGlmaWNhdGlvbnNTZXJ2aWNlLnN1Y2Nlc3MoJ0nFoXNpxbNzdGEnLCAnUGF0dmlydGluaW1vIGxhacWha2FzIGnFoXNpxbNzdGFzIGFkcmVzdSAnICsgZGF0YS5lbWFpbCwge3RpbWVPdXQ6IDMwMDAsIHNob3dQcm9ncmVzc0JhcjogZmFsc2V9KVxyXG4gICAgICAgIH0sIGVycm9yID0+IHtcclxuICAgICAgICAgICAgdGhpcy5ub3RpZmljYXRpb25zU2VydmljZS5lcnJvcihlcnJvci50aXRsZSwgZXJyb3IuZXJyb3IubWVzc2FnZSwge3RpbWVPdXQ6IDMwMDAsIHNob3dQcm9ncmVzc0JhcjogZmFsc2V9KVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgc2VuZFByaXZhdGVNZXNzYWdlKG5pY2tuYW1lKSB7XHJcbiAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoWycvcHJvZmlsaXMnLCAncGFzdGFzJywgJ3Jhc3l0aS1sYWlza2EnLCBuaWNrbmFtZV0pO1xyXG4gICAgfVxyXG5cclxuICAgIGdvVG9NYWlsKCkge1xyXG4gICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFsnL3Byb2ZpbGlzJywgJ3Bhc3RhcyddKTtcclxuICAgIH1cclxuXHJcbiAgICBpc0NsaWVudCgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5hdXRoU2VydmljZS5pc0NsaWVudCgpO1xyXG4gICAgfVxyXG5cclxuICAgIGlzRGVzaWduZXIoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuYXV0aFNlcnZpY2UuaXNEZXNpZ25lcigpO1xyXG4gICAgfVxyXG5cclxuICAgIGlzQWRtaW4oKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuYXV0aFNlcnZpY2UuaXNBZG1pbigpO1xyXG4gICAgfVxyXG5cclxufSJdfQ==
