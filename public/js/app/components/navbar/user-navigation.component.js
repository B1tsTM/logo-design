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
var forms_1 = require('@angular/forms');
var router_1 = require('@angular/router');
var auth_service_1 = require('../../services/auth.service');
var api_service_1 = require('../../services/api.service');
var user_1 = require('../../models/user');
var index_1 = require('../../errors/index');
var angular2_notifications_1 = require('angular2-notifications');
var CryptoJS = require('crypto-js');
var UserNavigationComponent = (function () {
    function UserNavigationComponent(router, authService, fb, errorService, notificationsService, apiService) {
        this.router = router;
        this.authService = authService;
        this.fb = fb;
        this.errorService = errorService;
        this.notificationsService = notificationsService;
        this.apiService = apiService;
        this.userId = '';
        this.nickname = '';
        //@ViewChild('modal')
        //modal: ModalComponent;   //to support modal in modal (to implement: forgot password)
        this.model = new user_1.User('', '');
        this.index = 0;
        //  backdropOptions = [true, false, 'static'];
        this.cssClass = '';
        this.animation = true;
        this.keyboard = true;
        this.backdrop = true;
        this.isLoading = false;
        this.submitted = false;
        this.userTypes = [
            { value: 'uzsakovas', display: 'Užsakovas' },
            { value: 'dizaineris', display: 'Dizaineris' }
        ];
        this.options = {
            position: ["top", "right"]
        };
        //this.isMatchingPassword = this.isMatchingPassword.bind(this);
    }
    UserNavigationComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userId = sessionStorage.getItem('userId');
        this.apiService.getUserInfo(this.userId)
            .subscribe(function (user) {
            _this.nickname = user.nickName;
        }, function (error) {
            _this.isLoading = false;
        });
        this.loginForm = this.fb.group({
            nickName: ['', forms_1.Validators.required],
            password: ['', forms_1.Validators.required]
        });
        this.registerForm = this.fb.group({
            firstName: ['', forms_1.Validators.required],
            lastName: ['', forms_1.Validators.required],
            nickNameReg: ['', forms_1.Validators.compose([forms_1.Validators.required, forms_1.Validators.minLength(4)])],
            email: ['', forms_1.Validators.compose([forms_1.Validators.required, this.isValidEmail])],
            passwordReg: ['', forms_1.Validators.compose([forms_1.Validators.required, forms_1.Validators.minLength(6)])],
            repeatPassword: ['', forms_1.Validators.compose([forms_1.Validators.required, forms_1.Validators.minLength(6)])],
            userType: [this.userTypes[0].value, forms_1.Validators.required]
        });
    };
    UserNavigationComponent.prototype.logout = function () {
        sessionStorage.clear();
        this.notificationsService.info('Atsijungiama...', 'Sėkmingai atsijungėte', { timeOut: 3000, showProgressBar: false });
        this.router.navigate(['/']);
    };
    UserNavigationComponent.prototype.isLoggedIn = function () {
        return this.authService.isLoggedIn();
    };
    UserNavigationComponent.prototype.closed = function () {
    };
    UserNavigationComponent.prototype.dismissed = function () {
    };
    UserNavigationComponent.prototype.opened = function () {
    };
    UserNavigationComponent.prototype.login = function (form) {
        var _this = this;
        this.isLoading = true;
        var user = new user_1.User(form.nickName.value, form.password.value);
        this.authService.signin(user)
            .subscribe(function (data) {
            sessionStorage.setItem('token', data.token);
            sessionStorage.setItem('userId', data.userId);
            sessionStorage.setItem('userType', CryptoJS.SHA3(data.userType).toString());
            sessionStorage.setItem('emailConfirmed', CryptoJS.SHA3(data.emailConfirmed.toString()).toString());
            _this.nickname = data.nickname;
            _this.isLoading = false;
            _this.loginModal.close();
            _this.notificationsService.success('Prisijungta', 'Sėkmingai prisijungta', { timeOut: 3000, showProgressBar: false });
        }, function (error) {
            _this.isLoading = false;
            _this.notificationsService.error(error.title, error.error.message, { timeOut: 3000, showProgressBar: false });
        });
    };
    UserNavigationComponent.prototype.register = function (form) {
        var _this = this;
        this.isLoading = true;
        var user = new user_1.User(form.nickNameReg.value, form.passwordReg.value, form.repeatPassword.value, this.registerForm.value.userType, form.firstName.value, form.lastName.value, form.email.value, 0, 0);
        this.authService.signup(user)
            .subscribe(function (data) {
            form.firstName.value = null;
            form.lastName.value = null;
            form.nickNameReg.value = null;
            form.email.value = null;
            form.passwordReg.value = null;
            form.repeatPassword.value = null;
            _this.isLoading = false;
            _this.registerModal.close();
            _this.notificationsService.success('Užregistruota', 'Sėkmingai užsiregistravote. Patikrinkite savo el. pašto paskyrą ir ją patvirtinkite', { timeOut: 7000, showProgressBar: false });
        }, function (error) {
            _this.isLoading = false;
            _this.notificationsService.error(error.title, error.error.message, { timeOut: 3000, showProgressBar: false });
        });
    };
    UserNavigationComponent.prototype.isClient = function () {
        return this.authService.isClient();
    };
    UserNavigationComponent.prototype.isDesigner = function () {
        return this.authService.isDesigner();
    };
    UserNavigationComponent.prototype.isAdmin = function () {
        return this.authService.isAdmin();
    };
    UserNavigationComponent.prototype.isValidEmail = function (control) {
        var emailRegex = new RegExp("[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?");
        return emailRegex.test(control.value) ? null : { invalidEmail: true };
    };
    UserNavigationComponent.prototype.isMatchingPassword = function (control) {
        // check if control is equal to the password1 control //for some reason not working properly
        return control.value === this.registerForm.value.passwordReg ? null : { isEqual: true };
    };
    UserNavigationComponent.prototype.created = function (ev) {
    };
    UserNavigationComponent.prototype.destroyed = function (ev) {
    };
    UserNavigationComponent.prototype.log = function (firstName) {
        console.log(firstName);
    };
    __decorate([
        core_1.ViewChild('registerModal'), 
        __metadata('design:type', Object)
    ], UserNavigationComponent.prototype, "registerModal", void 0);
    __decorate([
        core_1.ViewChild('loginModal'), 
        __metadata('design:type', Object)
    ], UserNavigationComponent.prototype, "loginModal", void 0);
    UserNavigationComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'user-nav',
            templateUrl: 'user-navigation.component.html',
            styleUrls: ['user-navigation.component.css']
        }), 
        __metadata('design:paramtypes', [router_1.Router, auth_service_1.AuthService, forms_1.FormBuilder, index_1.ErrorService, angular2_notifications_1.NotificationsService, api_service_1.ApiService])
    ], UserNavigationComponent);
    return UserNavigationComponent;
}());
exports.UserNavigationComponent = UserNavigationComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvbmF2YmFyL3VzZXItbmF2aWdhdGlvbi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUFnRSxlQUFlLENBQUMsQ0FBQTtBQUNoRixzQkFBZ0UsZ0JBQWdCLENBQUMsQ0FBQTtBQUNqRix1QkFBdUIsaUJBQWlCLENBQUMsQ0FBQTtBQUN6Qyw2QkFBNEIsNkJBQTZCLENBQUMsQ0FBQTtBQUMxRCw0QkFBMkIsNEJBQTRCLENBQUMsQ0FBQTtBQUV4RCxxQkFBcUIsbUJBQW1CLENBQUMsQ0FBQTtBQUN6QyxzQkFBNkIsb0JBQW9CLENBQUMsQ0FBQTtBQUNsRCx1Q0FBcUMsd0JBQXdCLENBQUMsQ0FBQTtBQUM5RCxJQUFZLFFBQVEsV0FBTSxXQUFXLENBQUMsQ0FBQTtBQVV0QztJQStCRSxpQ0FBb0IsTUFBYyxFQUNkLFdBQXdCLEVBQ3hCLEVBQWUsRUFDZixZQUEwQixFQUMxQixvQkFBMEMsRUFDMUMsVUFBc0I7UUFMdEIsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUNkLGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBQ3hCLE9BQUUsR0FBRixFQUFFLENBQWE7UUFDZixpQkFBWSxHQUFaLFlBQVksQ0FBYztRQUMxQix5QkFBb0IsR0FBcEIsb0JBQW9CLENBQXNCO1FBQzFDLGVBQVUsR0FBVixVQUFVLENBQVk7UUFuQ3hDLFdBQU0sR0FBVyxFQUFFLENBQUM7UUFDcEIsYUFBUSxHQUFXLEVBQUUsQ0FBQztRQUN4QixxQkFBcUI7UUFDbkIsc0ZBQXNGO1FBQ3RGLFVBQUssR0FBUyxJQUFJLFdBQUksQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFLL0IsVUFBSyxHQUFXLENBQUMsQ0FBQztRQUNwQiw4Q0FBOEM7UUFDNUMsYUFBUSxHQUFXLEVBQUUsQ0FBQztRQUV0QixjQUFTLEdBQVksSUFBSSxDQUFDO1FBQzFCLGFBQVEsR0FBWSxJQUFJLENBQUM7UUFDekIsYUFBUSxHQUFxQixJQUFJLENB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QztJQUVILG9EQUFrQixHQUFsQixVQUFtQixPQUFrQjtRQUNqQyw0RkFBNEY7UUFDNUYsTUFBTSxDQUFDLE9BQU8sQ0FBQyxLQUFLLEtBQUssSUFBSSxDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUMsV0FBVyxHQUFHLElBQUksR0FBRyxFQUFDLE9BQU8sRUFBRSxJQUFJLEVBQUMsQ0FBQztJQUMxRixDQUFDO0lBRUMseUNBQU8sR0FBUCxVQUFRLEVBQUU7SUFDWixDQUFDO0lBRUQsMkNBQVMsR0FBVCxVQUFVLEVBQUU7SUFDWixDQUFDO0lBRUQscUNBQUcsR0FBSCxVQUFJLFNBQVM7UUFDWCxPQUFPLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQ3pCLENBQUM7SUF0SkQ7UUFBQyxnQkFBUyxDQUFDLGVBQWUsQ0FBQzs7a0VBQUE7SUFDM0I7UUFBQyxnQkFBUyxDQUFDLFlBQVksQ0FBQzs7K0RBQUE7SUFmNUI7UUFBQyxnQkFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFFBQVEsRUFBRSxVQUFVO1lBQ3BCLFdBQVcsRUFBRSxnQ0FBZ0M7WUFDN0MsU0FBUyxFQUFFLENBQUMsK0JBQStCLENBQUM7U0FFN0MsQ0FBQzs7K0JBQUE7SUFnS0YsOEJBQUM7QUFBRCxDQS9KQSxBQStKQyxJQUFBO0FBL0pZLCtCQUF1QiwwQkErSm5DLENBQUEiLCJmaWxlIjoiY29tcG9uZW50cy9uYXZiYXIvdXNlci1uYXZpZ2F0aW9uLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBWaWV3Q2hpbGQsIFZpZXdFbmNhcHN1bGF0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEZvcm1Hcm91cCwgRm9ybUNvbnRyb2wsIEZvcm1CdWlsZGVyLCBWYWxpZGF0b3JzIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5pbXBvcnQgeyBBdXRoU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL2F1dGguc2VydmljZSc7XHJcbmltcG9ydCB7IEFwaVNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9hcGkuc2VydmljZSc7XHJcbmltcG9ydCB7IE1vZGFsQ29tcG9uZW50IH0gZnJvbSAnbmcyLWJzMy1tb2RhbC9uZzItYnMzLW1vZGFsJztcclxuaW1wb3J0IHsgVXNlciB9IGZyb20gJy4uLy4uL21vZGVscy91c2VyJztcclxuaW1wb3J0IHsgRXJyb3JTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vZXJyb3JzL2luZGV4JztcclxuaW1wb3J0IHsgTm90aWZpY2F0aW9uc1NlcnZpY2UgfSBmcm9tICdhbmd1bGFyMi1ub3RpZmljYXRpb25zJztcclxuaW1wb3J0ICogYXMgQ3J5cHRvSlMgZnJvbSAnY3J5cHRvLWpzJztcclxuXHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBtb2R1bGVJZDogbW9kdWxlLmlkLFxyXG4gIHNlbGVjdG9yOiAndXNlci1uYXYnLFxyXG4gIHRlbXBsYXRlVXJsOiAndXNlci1uYXZpZ2F0aW9uLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsndXNlci1uYXZpZ2F0aW9uLmNvbXBvbmVudC5jc3MnXVxyXG4gIC8vLCBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBVc2VyTmF2aWdhdGlvbkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgICB1c2VySWQ6IHN0cmluZyA9ICcnO1xyXG4gICAgbmlja25hbWU6IHN0cmluZyA9ICcnO1xyXG4gIC8vQFZpZXdDaGlsZCgnbW9kYWwnKVxyXG4gICAgLy9tb2RhbDogTW9kYWxDb21wb25lbnQ7ICAgLy90byBzdXBwb3J0IG1vZGFsIGluIG1vZGFsICh0byBpbXBsZW1lbnQ6IGZvcmdvdCBwYXNzd29yZClcclxuICAgIG1vZGVsOiBVc2VyID0gbmV3IFVzZXIoJycsICcnKTtcclxuXHJcbiAgICBAVmlld0NoaWxkKCdyZWdpc3Rlck1vZGFsJykgcmVnaXN0ZXJNb2RhbDtcclxuICAgIEBWaWV3Q2hpbGQoJ2xvZ2luTW9kYWwnKSBsb2dpbk1vZGFsO1xyXG5cclxuICAgIGluZGV4OiBudW1iZXIgPSAwO1xyXG4gIC8vICBiYWNrZHJvcE9wdGlvbnMgPSBbdHJ1ZSwgZmFsc2UsICdzdGF0aWMnXTtcclxuICAgIGNzc0NsYXNzOiBzdHJpbmcgPSAnJztcclxuXHJcbiAgICBhbmltYXRpb246IGJvb2xlYW4gPSB0cnVlO1xyXG4gICAga2V5Ym9hcmQ6IGJvb2xlYW4gPSB0cnVlO1xyXG4gICAgYmFja2Ryb3A6IHN0cmluZyB8IGJvb2xlYW4gPSB0cnVlO1xyXG4gICAgaXNMb2FkaW5nID0gZmFsc2U7XHJcbiAvLyAgIGNzczogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICBwdWJsaWMgbG9naW5Gb3JtOiBGb3JtR3JvdXA7XHJcbiAgcHVibGljIHJlZ2lzdGVyRm9ybTogRm9ybUdyb3VwO1xyXG4gIHB1YmxpYyBzdWJtaXR0ZWQ6IGJvb2xlYW4gPSBmYWxzZTtcclxuICBwdWJsaWMgdXNlclR5cGVzID0gW1xyXG4gICAgeyB2YWx1ZTogJ3V6c2Frb3ZhcycsIGRpc3BsYXk6ICdVxb5zYWtvdmFzJyB9LFxyXG4gICAgeyB2YWx1ZTogJ2RpemFpbmVyaXMnLCBkaXNwbGF5OiAnRGl6YWluZXJpcycgfVxyXG5dO1xyXG4gIHB1YmxpYyBvcHRpb25zID0ge1xyXG4gICAgICBwb3NpdGlvbjogW1widG9wXCIsXCJyaWdodFwiXVxyXG4gICAgfTtcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSByb3V0ZXI6IFJvdXRlciwgXHJcbiAgICAgICAgICAgICAgcHJpdmF0ZSBhdXRoU2VydmljZTogQXV0aFNlcnZpY2UsIFxyXG4gICAgICAgICAgICAgIHByaXZhdGUgZmI6IEZvcm1CdWlsZGVyLCBcclxuICAgICAgICAgICAgICBwcml2YXRlIGVycm9yU2VydmljZTogRXJyb3JTZXJ2aWNlLFxyXG4gICAgICAgICAgICAgIHByaXZhdGUgbm90aWZpY2F0aW9uc1NlcnZpY2U6IE5vdGlmaWNhdGlvbnNTZXJ2aWNlLFxyXG4gICAgICAgICAgICAgIHByaXZhdGUgYXBpU2VydmljZTogQXBpU2VydmljZSkge1xyXG4gICAgICAgICAgICAgIC8vdGhpcy5pc01hdGNoaW5nUGFzc3dvcmQgPSB0aGlzLmlzTWF0Y2hpbmdQYXNzd29yZC5iaW5kKHRoaXMpO1xyXG4gICAgICAgICAgICAgICB9XHJcblxyXG4gIG5nT25Jbml0KCkgeyBcclxuICAgIHRoaXMudXNlcklkID0gc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbSgndXNlcklkJyk7XHJcbiAgICB0aGlzLmFwaVNlcnZpY2UuZ2V0VXNlckluZm8odGhpcy51c2VySWQpXHJcbiAgICAgIC5zdWJzY3JpYmUodXNlciA9PiB7XHJcbiAgICAgICAgdGhpcy5uaWNrbmFtZSA9IHVzZXIubmlja05hbWU7XHJcbiAgICAgIH0sXHJcbiAgICAgIGVycm9yID0+IHtcclxuICAgICAgICB0aGlzLmlzTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICB9KTtcclxuXHJcbiAgICB0aGlzLmxvZ2luRm9ybSA9IHRoaXMuZmIuZ3JvdXAoe1xyXG4gICAgICBuaWNrTmFtZTogWycnLCBWYWxpZGF0b3JzLnJlcXVpcmVkXSxcclxuICAgICAgcGFzc3dvcmQ6IFsnJywgVmFsaWRhdG9ycy5yZXF1aXJlZF1cclxuICAgIH0pO1xyXG5cclxuICAgIHRoaXMucmVnaXN0ZXJGb3JtID0gdGhpcy5mYi5ncm91cCh7XHJcbiAgICAgIGZpcnN0TmFtZTogWycnLCBWYWxpZGF0b3JzLnJlcXVpcmVkXSxcclxuICAgICAgbGFzdE5hbWU6IFsnJywgVmFsaWRhdG9ycy5yZXF1aXJlZF0sXHJcbiAgICAgIG5pY2tOYW1lUmVnOiBbJycsIFZhbGlkYXRvcnMuY29tcG9zZShbVmFsaWRhdG9ycy5yZXF1aXJlZCwgVmFsaWRhdG9ycy5taW5MZW5ndGgoNCldKV0sXHJcbiAgICAgIGVtYWlsOiBbJycsIFZhbGlkYXRvcnMuY29tcG9zZShbVmFsaWRhdG9ycy5yZXF1aXJlZCwgdGhpcy5pc1ZhbGlkRW1haWxdKV0sXHJcbiAgICAgIHBhc3N3b3JkUmVnOiBbJycsIFZhbGlkYXRvcnMuY29tcG9zZShbVmFsaWRhdG9ycy5yZXF1aXJlZCwgVmFsaWRhdG9ycy5taW5MZW5ndGgoNildKV0sXHJcbiAgICAgIHJlcGVhdFBhc3N3b3JkOiBbJycsIFZhbGlkYXRvcnMuY29tcG9zZShbVmFsaWRhdG9ycy5yZXF1aXJlZCwgVmFsaWRhdG9ycy5taW5MZW5ndGgoNildKV0sXHJcbiAgICAgIHVzZXJUeXBlOiBbdGhpcy51c2VyVHlwZXNbMF0udmFsdWUsIFZhbGlkYXRvcnMucmVxdWlyZWRdXHJcbiAgICB9KTtcclxuXHJcbiAgfVxyXG5cclxuICBsb2dvdXQoKSB7XHJcbiAgICBzZXNzaW9uU3RvcmFnZS5jbGVhcigpO1xyXG4gICAgdGhpcy5ub3RpZmljYXRpb25zU2VydmljZS5pbmZvKCdBdHNpanVuZ2lhbWEuLi4nLCAnU8SXa21pbmdhaSBhdHNpanVuZ8SXdGUnLCB7dGltZU91dDogMzAwMCwgc2hvd1Byb2dyZXNzQmFyOiBmYWxzZX0pO1xyXG4gICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoWycvJ10pO1xyXG4gIH1cclxuXHJcbiAgaXNMb2dnZWRJbigpIHtcclxuICAgIHJldHVybiB0aGlzLmF1dGhTZXJ2aWNlLmlzTG9nZ2VkSW4oKTtcclxuICB9XHJcblxyXG4gICAgY2xvc2VkKCkge1xyXG4gICAgfVxyXG5cclxuICAgIGRpc21pc3NlZCgpIHtcclxuICAgIH1cclxuXHJcbiAgICBvcGVuZWQoKSB7XHJcbiAgICB9XHJcblxyXG4gICAgbG9naW4oZm9ybTogYW55KSB7XHJcbiAgICAgIHRoaXMuaXNMb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgIGNvbnN0IHVzZXIgPSBuZXcgVXNlcihmb3JtLm5pY2tOYW1lLnZhbHVlLCBmb3JtLnBhc3N3b3JkLnZhbHVlKTtcclxuICAgICAgIHRoaXMuYXV0aFNlcnZpY2Uuc2lnbmluKHVzZXIpXHJcbiAgICAgICAuc3Vic2NyaWJlKGRhdGEgPT4ge1xyXG4gICAgICAgICBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKCd0b2tlbicsIGRhdGEudG9rZW4pO1xyXG4gICAgICAgICBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKCd1c2VySWQnLCBkYXRhLnVzZXJJZCk7XHJcbiAgICAgICAgIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0oJ3VzZXJUeXBlJywgQ3J5cHRvSlMuU0hBMyhkYXRhLnVzZXJUeXBlKS50b1N0cmluZygpKTtcclxuICAgICAgICAgc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbSgnZW1haWxDb25maXJtZWQnLCBDcnlwdG9KUy5TSEEzKGRhdGEuZW1haWxDb25maXJtZWQudG9TdHJpbmcoKSkudG9TdHJpbmcoKSk7XHJcbiAgICAgICAgIHRoaXMubmlja25hbWUgPSBkYXRhLm5pY2tuYW1lO1xyXG4gICAgICAgICB0aGlzLmlzTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgICB0aGlzLmxvZ2luTW9kYWwuY2xvc2UoKTtcclxuICAgICAgICAgdGhpcy5ub3RpZmljYXRpb25zU2VydmljZS5zdWNjZXNzKCdQcmlzaWp1bmd0YScsICdTxJdrbWluZ2FpIHByaXNpanVuZ3RhJywge3RpbWVPdXQ6IDMwMDAsIHNob3dQcm9ncmVzc0JhcjogZmFsc2V9KTtcclxuICAgICAgIH0sXHJcbiAgICAgICBlcnJvciA9PiB7XHJcbiAgICAgICAgIHRoaXMuaXNMb2FkaW5nID0gZmFsc2U7IFxyXG4gICAgICAgICB0aGlzLm5vdGlmaWNhdGlvbnNTZXJ2aWNlLmVycm9yKGVycm9yLnRpdGxlLCBlcnJvci5lcnJvci5tZXNzYWdlLCB7dGltZU91dDogMzAwMCwgc2hvd1Byb2dyZXNzQmFyOiBmYWxzZX0pXHJcbiAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgcmVnaXN0ZXIoZm9ybTogYW55KSB7XHJcbiAgICAgIHRoaXMuaXNMb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgY29uc3QgdXNlciA9IG5ldyBVc2VyKGZvcm0ubmlja05hbWVSZWcudmFsdWUsIGZvcm0ucGFzc3dvcmRSZWcudmFsdWUsIGZvcm0ucmVwZWF0UGFzc3dvcmQudmFsdWUsIHRoaXMucmVnaXN0ZXJGb3JtLnZhbHVlLnVzZXJUeXBlLCBmb3JtLmZpcnN0TmFtZS52YWx1ZSwgZm9ybS5sYXN0TmFtZS52YWx1ZSwgZm9ybS5lbWFpbC52YWx1ZSwgMCwgMCk7XHJcbiAgICAgICAgdGhpcy5hdXRoU2VydmljZS5zaWdudXAodXNlcilcclxuICAgICAgICAgIC5zdWJzY3JpYmUoZGF0YSA9PiB7XHJcbiAgICAgICAgICAgIGZvcm0uZmlyc3ROYW1lLnZhbHVlID0gbnVsbDtcclxuICAgICAgICAgICAgZm9ybS5sYXN0TmFtZS52YWx1ZSA9IG51bGw7XHJcbiAgICAgICAgICAgIGZvcm0ubmlja05hbWVSZWcudmFsdWUgPSBudWxsO1xyXG4gICAgICAgICAgICBmb3JtLmVtYWlsLnZhbHVlID0gbnVsbDtcclxuICAgICAgICAgICAgZm9ybS5wYXNzd29yZFJlZy52YWx1ZSA9IG51bGw7XHJcbiAgICAgICAgICAgIGZvcm0ucmVwZWF0UGFzc3dvcmQudmFsdWUgPSBudWxsO1xyXG4gICAgICAgICAgICB0aGlzLmlzTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICB0aGlzLnJlZ2lzdGVyTW9kYWwuY2xvc2UoKTtcclxuICAgICAgICAgICAgdGhpcy5ub3RpZmljYXRpb25zU2VydmljZS5zdWNjZXNzKCdVxb5yZWdpc3RydW90YScsICdTxJdrbWluZ2FpIHXFvnNpcmVnaXN0cmF2b3RlLiBQYXRpa3JpbmtpdGUgc2F2byBlbC4gcGHFoXRvIHBhc2t5csSFIGlyIGrEhSBwYXR2aXJ0aW5raXRlJywge3RpbWVPdXQ6IDcwMDAsIHNob3dQcm9ncmVzc0JhcjogZmFsc2V9KTtcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICBlcnJvciA9PiB7IFxyXG4gICAgICAgICAgICB0aGlzLmlzTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICB0aGlzLm5vdGlmaWNhdGlvbnNTZXJ2aWNlLmVycm9yKGVycm9yLnRpdGxlLCBlcnJvci5lcnJvci5tZXNzYWdlLCB7dGltZU91dDogMzAwMCwgc2hvd1Byb2dyZXNzQmFyOiBmYWxzZX0pXHJcbiAgICAgICAgfSkgXHJcbiAgICB9XHJcblxyXG4gICAgaXNDbGllbnQoKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLmF1dGhTZXJ2aWNlLmlzQ2xpZW50KCk7XHJcbiAgICB9XHJcblxyXG4gICAgaXNEZXNpZ25lcigpIHtcclxuICAgICAgcmV0dXJuIHRoaXMuYXV0aFNlcnZpY2UuaXNEZXNpZ25lcigpO1xyXG4gICAgfVxyXG5cclxuICAgIGlzQWRtaW4oKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLmF1dGhTZXJ2aWNlLmlzQWRtaW4oKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGlzVmFsaWRFbWFpbChjb250cm9sOiBGb3JtQ29udHJvbCk6IHtbczogc3RyaW5nXTogYm9vbGVhbn0ge1xyXG4gICAgICBsZXQgZW1haWxSZWdleCA9IG5ldyBSZWdFeHAoXCJbYS16MC05ISMkJSYnKisvPT9eX2B7fH1+LV0rKD86XFwuW2EtejAtOSEjJCUmJyorLz0/Xl9ge3x9fi1dKykqQCg/OlthLXowLTldKD86W2EtejAtOS1dKlthLXowLTldKT9cXC4pK1thLXowLTldKD86W2EtejAtOS1dKlthLXowLTldKT9cIik7IFxyXG4gICAgICByZXR1cm4gZW1haWxSZWdleC50ZXN0KGNvbnRyb2wudmFsdWUpID8gbnVsbCA6IHtpbnZhbGlkRW1haWw6IHRydWV9XHJcbiAgICAgIH1cclxuXHJcbiAgICBpc01hdGNoaW5nUGFzc3dvcmQoY29udHJvbDogRm9ybUdyb3VwKSB7XHJcbiAgICAgICAgLy8gY2hlY2sgaWYgY29udHJvbCBpcyBlcXVhbCB0byB0aGUgcGFzc3dvcmQxIGNvbnRyb2wgLy9mb3Igc29tZSByZWFzb24gbm90IHdvcmtpbmcgcHJvcGVybHlcclxuICAgICAgICByZXR1cm4gY29udHJvbC52YWx1ZSA9PT0gdGhpcy5yZWdpc3RlckZvcm0udmFsdWUucGFzc3dvcmRSZWcgPyBudWxsIDoge2lzRXF1YWw6IHRydWV9O1xyXG4gICAgfVxyXG5cclxuICAgICAgY3JlYXRlZChldikge1xyXG4gICAgfVxyXG5cclxuICAgIGRlc3Ryb3llZChldikge1xyXG4gICAgfVxyXG5cclxuICAgIGxvZyhmaXJzdE5hbWUpIHtcclxuICAgICAgY29uc29sZS5sb2coZmlyc3ROYW1lKTtcclxuICAgIH1cclxuXHJcbn0iXX0=
