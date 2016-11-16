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
            _this.notificationsService.error('Įvyko klaida', 'Nepavyko įkelti avataro', { timeOut: 3000, showProgressBar: false });
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
                _this.notificationsService.error('Įvyko klaida', 'Nepavyko įkelti avataro', { timeOut: 3000, showProgressBar: false });
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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvcHJvZmlsZS9wcm9maWxlLXBhZ2UuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBa0MsZUFBZSxDQUFDLENBQUE7QUFDbEQsNkJBQTRCLDZCQUE2QixDQUFDLENBQUE7QUFDMUQsdUNBQXFDLHdCQUF3QixDQUFDLENBQUE7QUFPOUQ7SUFTRSw4QkFBb0IsV0FBd0IsRUFBVSxvQkFBMEM7UUFBNUUsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFBVSx5QkFBb0IsR0FBcEIsb0JBQW9CLENBQXNCO1FBUmhHLGNBQVMsR0FBVyxFQUFFLENBQUM7UUFFdkIsWUFBTyxHQUFHLEdBQUcsQ0FBQztRQUNkLE9BQUUsR0FBRyxFQUFFLENBQUM7UUFDUixjQUFTLEdBQUcsS0FBSyxDQUFDO1FBQ1gsWUFBTyxHQUFHO1lBQ2IsUUFBUSxFQUFFLENBQUMsS0FBSyxFQUFDLE9BQU8sQ0FBQztTQUMxQixDQUFDO1FBRUYsSUFBSSxDQUFDLGFBQWEsR0FBRyxFQUFFLENBQUM7SUFDekIsQ0FBQztJQUVGLHVDQUFRLEdBQVI7UUFBQSxpQkFXQztRQVZHLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDO1FBQ3hCLElBQUksQ0FBQyxFQUFFLEdBQUcsWUFBWSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUN6QyxJQUFJLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDO2FBQ2hDLFNBQVMsQ0FBQyxVQUFBLElBQUk7WUFDYixPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ2xCLEtBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQztZQUNoQyxLQUFJLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQztRQUN6QixDQUFDLEVBQUUsVUFBQSxLQUFLO1lBQ0osS0FBSSxDQUFDLG9CQUFvQixDQUFDLEtBQUssQ0FBQyxjQUFjLEVBQUUs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dEMsQ0FBQztvQkFBQyxJQUFJLENBQUMsQ0FBQzt3QkFDSixNQUFNLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDO29CQUN6QixDQUFDO2dCQUNMLENBQUM7WUFDTCxDQUFDLENBQUE7WUFDRCxHQUFHLENBQUMsT0FBTyxHQUFHLFVBQVMsQ0FBQztnQkFDcEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyx3QkFBd0IsQ0FBQyxDQUFDO2dCQUN0QyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ25CLENBQUMsQ0FBQztZQUNGLEdBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUcsRUFBRSxJQUFJLENBQUMsQ0FBQztZQUM1QixHQUFHLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ3ZCLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUVELHNEQUF1QixHQUF2QixVQUF3QixHQUFHO1FBQzNCLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLENBQUM7WUFDdkIsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxNQUFNLEdBQUcsR0FBRyxDQUFDLEtBQUssR0FBRyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUM7WUFDOUQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxZQUFZLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQzVDLENBQUM7SUFDTCxDQUFDO0lBekZEO1FBQUMsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixRQUFRLEVBQUUsY0FBYztZQUN4QixXQUFXLEVBQUUsNkJBQTZCO1NBQzNDLENBQUM7OzRCQUFBO0lBdUZGLDJCQUFDO0FBQUQsQ0F0RkEsQUFzRkMsSUFBQTtBQXRGWSw0QkFBb0IsdUJBc0ZoQyxDQUFBIiwiZmlsZSI6ImNvbXBvbmVudHMvcHJvZmlsZS9wcm9maWxlLXBhZ2UuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQXV0aFNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9hdXRoLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBOb3RpZmljYXRpb25zU2VydmljZSB9IGZyb20gJ2FuZ3VsYXIyLW5vdGlmaWNhdGlvbnMnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcclxuICBzZWxlY3RvcjogJ3Byb2ZpbGUtcGFnZScsXHJcbiAgdGVtcGxhdGVVcmw6ICdwcm9maWxlLXBhZ2UuY29tcG9uZW50Lmh0bWwnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBQcm9maWxlUGFnZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgYXZhdGFyVXJsOiBzdHJpbmcgPSAnJztcclxuICBmaWxlc1RvVXBsb2FkOiBGaWxlW107XHJcbiAgcGVyY2VudCA9IFwiMFwiO1xyXG4gIGlkID0gJyc7XHJcbiAgaXNMb2FkaW5nID0gZmFsc2U7XHJcbiAgcHVibGljIG9wdGlvbnMgPSB7XHJcbiAgICAgIHBvc2l0aW9uOiBbXCJ0b3BcIixcInJpZ2h0XCJdXHJcbiAgICB9O1xyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgYXV0aFNlcnZpY2U6IEF1dGhTZXJ2aWNlLCBwcml2YXRlIG5vdGlmaWNhdGlvbnNTZXJ2aWNlOiBOb3RpZmljYXRpb25zU2VydmljZSkge1xyXG4gICAgdGhpcy5maWxlc1RvVXBsb2FkID0gW107XHJcbiAgIH1cclxuXHJcbiAgbmdPbkluaXQoKSB7IFxyXG4gICAgICB0aGlzLmlzTG9hZGluZyA9IHRydWU7XHJcbiAgICB0aGlzLmlkID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3VzZXJJZCcpO1xyXG4gICAgdGhpcy5hdXRoU2VydmljZS5nZXRBdmF0YXIodGhpcy5pZClcclxuICAgICAgLnN1YnNjcmliZShkYXRhID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhkYXRhKTtcclxuICAgICAgICB0aGlzLmF2YXRhclVybCA9IGRhdGEuYXZhdGFyVXJsO1xyXG4gICAgICAgIHRoaXMuaXNMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgIH0sIGVycm9yID0+IHtcclxuICAgICAgICAgIHRoaXMubm90aWZpY2F0aW9uc1NlcnZpY2UuZXJyb3IoJ8SudnlrbyBrbGFpZGEnLCAnTmVwYXZ5a28gxK9rZWx0aSBhdmF0YXJvJywge3RpbWVPdXQ6IDMwMDAsIHNob3dQcm9ncmVzc0JhcjogZmFsc2V9KVxyXG4gICAgICB9KTtcclxuICB9XHJcblxyXG4gIHVwbG9hZCgpIHtcclxuICAgICAgdGhpcy5pc0xvYWRpbmcgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMubWFrZUZpbGVSZXF1ZXN0KFwiaHR0cDovL2xvY2FsaG9zdDozMDAwL2FwaS92MS9hdmF0YXJzL1wiK3RoaXMuaWQsIHRoaXMuZmlsZXNUb1VwbG9hZCkudGhlbigocmVzdWx0KSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3VsdCk7XHJcbiAgICAgICAgICAgIHRoaXMuYXV0aFNlcnZpY2UuZ2V0QXZhdGFyKHRoaXMuaWQpXHJcbiAgICAgICAgICAgICAgLnN1YnNjcmliZShkYXRhID0+IHtcclxuICAgICAgICAgICAgICBjb25zb2xlLmxvZyhkYXRhKTtcclxuICAgICAgICAgICAgICB0aGlzLmF2YXRhclVybCA9IGRhdGEuYXZhdGFyVXJsO1xyXG4gICAgICAgICAgICAgIHRoaXMuaXNMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgIH0sIGVycm9yID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMubm90aWZpY2F0aW9uc1NlcnZpY2UuZXJyb3IoJ8SudnlrbyBrbGFpZGEnLCAnTmVwYXZ5a28gxK9rZWx0aSBhdmF0YXJvJywge3RpbWVPdXQ6IDMwMDAsIHNob3dQcm9ncmVzc0JhcjogZmFsc2V9KVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgdGhpcy5maWxlc1RvVXBsb2FkID0gW107XHJcbiAgICAgICAgfSwgKGVycm9yKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGZpbGVDaGFuZ2VFdmVudChmaWxlSW5wdXQ6IGFueSl7XHJcbiAgICAgICAgdGhpcy5maWxlc1RvVXBsb2FkID0gPEFycmF5PEZpbGU+PiBmaWxlSW5wdXQudGFyZ2V0LmZpbGVzO1xyXG4gICAgICAgIC8vdGhpcy5maWxlc1RvVXBsb2FkLmZvckVhY2goKGZpbGUsIGkpID0+IHRoaXMuZmlsZXNUb1VwbG9hZC5wdXNoKGZpbGVJbnB1dC50YXJnZXQuZmlsZXNbaV0pKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhmaWxlSW5wdXQudGFyZ2V0LmZpbGVzKTtcclxuICAgICAgICAvL2xldCBhcnIgPSBBcnJheS5mcm9tKGZpbGVJbnB1dC50YXJnZXQuZmlsZXMpOyAvL2NvbnZlcnQgRmlsZSBPYmplY3QgdG8gQXJyYXkgdG8gcHVzaCBpdFxyXG4gICAgICAgIC8vdGhpcy5maWxlc1RvVXBsb2FkLnB1c2goYXJyWzBdKTsgLy91c2UgdGhpcyBpZiB5b3UgdXNlIG11bHRpcGxlIHNpbmdsZSBmaWxlIGlucHV0c1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMuZmlsZXNUb1VwbG9hZCk7XHJcbiAgICB9XHJcbiBcclxuICAgIG1ha2VGaWxlUmVxdWVzdCh1cmw6IHN0cmluZywgZmlsZXM6IEFycmF5PEZpbGU+KSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgICAgICAgdmFyIGZvcm1EYXRhOiBhbnkgPSBuZXcgRm9ybURhdGEoKTtcclxuICAgICAgICAgICAgdmFyIHhociA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xyXG4gICAgICAgICAgICBmb3IodmFyIGkgPSAwOyBpIDwgZmlsZXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIGZvcm1EYXRhLmFwcGVuZChcImF2YXRhclwiLCBmaWxlc1tpXSwgZmlsZXNbaV0ubmFtZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgeGhyLnVwbG9hZC5hZGRFdmVudExpc3RlbmVyKFwicHJvZ3Jlc3NcIiwgKGV2dCkgPT4gdGhpcy5jYWxjdWxhdGVVcGxvYWRQcm9ncmVzcyhldnQpLCBmYWxzZSk7IFxyXG4gICAgICAgICAgICB4aHIub25yZWFkeXN0YXRlY2hhbmdlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKHhoci5yZWFkeVN0YXRlID09IDQpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoeGhyLnN0YXR1cyA9PSAyMDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShKU09OLnBhcnNlKHhoci5yZXNwb25zZSkpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlamVjdCh4aHIucmVzcG9uc2UpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB4aHIub25lcnJvciA9IGZ1bmN0aW9uKGUpIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdLbGFpZGEgxK9rZWxpYW50IGZhaWx1cycpO1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZSk7XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIHhoci5vcGVuKFwiUE9TVFwiLCB1cmwsIHRydWUpO1xyXG4gICAgICAgICAgICB4aHIuc2VuZChmb3JtRGF0YSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgY2FsY3VsYXRlVXBsb2FkUHJvZ3Jlc3MoZXZ0KSB7XHJcbiAgICBpZiAoZXZ0Lmxlbmd0aENvbXB1dGFibGUpIHtcclxuICAgICAgICB0aGlzLnBlcmNlbnQgPSBNYXRoLnJvdW5kKGV2dC5sb2FkZWQgLyBldnQudG90YWwgKiAxMDApICsgXCIlXCI7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJQRVJDRU5UIDogXCIsIHRoaXMucGVyY2VudCk7XHJcbiAgICB9XHJcbn1cclxuXHJcbn0iXX0=
