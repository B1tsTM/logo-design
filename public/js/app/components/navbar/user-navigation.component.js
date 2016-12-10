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
            console.log('comments-section comp user var');
            console.log(user);
            _this.nickname = user.nickName;
        }, function (error) {
            _this.isLoading = false;
            //this.notificationsService.error(error.title, error.error.message, {timeOut: 3000, showProgressBar: false})
            //this.errorService.handleError(error);
        });
        this.loginForm = this.fb.group({
            //email: ['', Validators.compose([Validators.required, this.isValidEmail])],
            nickName: ['', forms_1.Validators.required],
            password: ['', forms_1.Validators.required]
        });
        this.registerForm = this.fb.group({
            firstName: ['', forms_1.Validators.required],
            lastName: ['', forms_1.Validators.required],
            nickName: ['', forms_1.Validators.compose([forms_1.Validators.required, forms_1.Validators.minLength(4)])],
            email: ['', forms_1.Validators.compose([forms_1.Validators.required, this.isValidEmail])],
            password: ['', forms_1.Validators.compose([forms_1.Validators.required, forms_1.Validators.minLength(6)])],
            repeatPassword: ['', forms_1.Validators.compose([forms_1.Validators.required, forms_1.Validators.minLength(6)])],
            userType: [this.userTypes[0].value, forms_1.Validators.required]
        });
    };
    UserNavigationComponent.prototype.logout = function () {
        sessionStorage.clear();
        console.log('sessionStorage cleared, logging out...');
        this.notificationsService.info('Atsijungiama...', 'Sėkmingai atsijungėte', { timeOut: 3000, showProgressBar: false });
        this.router.navigate(['/']);
    };
    UserNavigationComponent.prototype.isLoggedIn = function () {
        return this.authService.isLoggedIn();
    };
    UserNavigationComponent.prototype.closed = function () {
        console.log('Modal closed');
    };
    UserNavigationComponent.prototype.dismissed = function () {
        console.log('Modal dismissed');
    };
    UserNavigationComponent.prototype.opened = function () {
        console.log('Modal opened');
    };
    UserNavigationComponent.prototype.login = function (form) {
        var _this = this;
        this.isLoading = true;
        var user = new user_1.User(form.nickName.value, form.password.value);
        console.log('user-navigation login user const');
        console.log(user);
        this.authService.signin(user)
            .subscribe(function (data) {
            console.log(data);
            console.log('Sekmingai prisijungta');
            sessionStorage.setItem('token', data.token);
            sessionStorage.setItem('userId', data.userId);
            sessionStorage.setItem('userType', data.userType);
            _this.nickname = data.nickname;
            _this.isLoading = false;
            _this.notificationsService.success('Prisijungta', 'Sėkmingai prisijungta', { timeOut: 3000, showProgressBar: false });
            //this.router.navigateByUrl('/');
        }, 
        //error => this.errorService.handleError(error))
        function (error) {
            _this.isLoading = false;
            //this.notificationsService.error('Klaida', 'Įvyko klaida prisijungiant', {timeOut: 3000, showProgressBar: false}) 
            _this.notificationsService.error(error.title, error.error.message, { timeOut: 3000, showProgressBar: false });
        });
    };
    UserNavigationComponent.prototype.register = function (form) {
        var _this = this;
        this.isLoading = true;
        var user = new user_1.User(form.nickName.value, form.password.value, form.repeatPassword.value, this.registerForm.value.userType, form.firstName.value, form.lastName.value, form.email.value, 0, 0);
        this.authService.signup(user)
            .subscribe(function (data) {
            console.log(data);
            form.firstName.value = null;
            form.lastName.value = null;
            form.nickName.value = null;
            form.email.value = null;
            form.password.value = null;
            form.repeatPassword.value = null;
            _this.isLoading = false;
            _this.notificationsService.success('Užregistruota', 'Sėkmingai užsiregistravote', { timeOut: 3000, showProgressBar: false });
        }, 
        //error => this.errorService.handleError(error))
        function (error) {
            _this.isLoading = false;
            //this.notificationsService.error('Klaida registruojantis', 'Tinkamai užpildykite visus laukus. Pasirinkite unikalų slapyvardį', {timeOut: 3000, showProgressBar: false})
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
        // check if control is equal to the password1 control
        console.log(control);
        console.log(this.registerForm);
        return control.value === this.registerForm.value.password ? null : { isEqual: true };
    };
    UserNavigationComponent.prototype.created = function (ev) {
        console.log('notification created');
    };
    UserNavigationComponent.prototype.destroyed = function (ev) {
        console.log('notification destroyed');
    };
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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvbmF2YmFyL3VzZXItbmF2aWdhdGlvbi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUFnRSxlQUFlLENBQUMsQ0FBQTtBQUNoRixzQkFBZ0UsZ0JBQWdCLENBQUMsQ0FBQTtBQUNqRix1QkFBdUIsaUJBQWlCLENBQUMsQ0FBQTtBQUN6Qyw2QkFBNEIsNkJBQTZCLENBQUMsQ0FBQTtBQUMxRCw0QkFBMkIsNEJBQTRCLENBQUMsQ0FBQTtBQUV4RCxxQkFBcUIsbUJBQW1CLENBQUMsQ0FBQTtBQUN6QyxzQkFBNkIsb0JBQW9CLENBQUMsQ0FBQTtBQUNsRCx1Q0FBcUMsd0JBQXdCLENBQUMsQ0FBQTtBQVU5RDtJQTRCRSxpQ0FBb0IsTUFBYyxFQUNkLFdBQXdCLEVBQ3hCLEVBQWUsRUFDZixZQUEwQixFQUMxQixvQkFBMEMsRUFDMUMsVUFBc0I7UUFMdEIsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUNkLGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBQ3hCLE9BQUUsR0FBRixFQUFFLENBQWE7UUFDZixpQkFBWSxHQUFaLFlBQVksQ0FBYztRQUMxQix5QkFBb0IsR0FBcEIsb0JBQW9CLENBQXNCO1FBQzFDLGVBQVUsR0FBVixVQUFVLENBQVk7UUFoQ3hDLFdBQU0sR0FBVyxFQUFFLENBQUM7UUFDcEIsYUFBUSxHQUFXLEVBQUUsQ0FBQztRQUN4QixxQkFBcUI7UUFDbkIsc0ZBQXNGO1FBQ3RGLFVBQUssR0FBUyxJQUFJLFdBQUksQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFFL0IsVUFBSyxHQUFXLENBQUMsQ0FBQztRQUNwQiw4Q0FBOEM7UUFDNUMsYUFBUSxHQUFXLEVBQUUsQ0FBQztRQUV0QixjQUFTLEdBQVksSUFBSSxDQUFDO1FBQzFCLGFBQVEsR0FBWSxJQUFJLENBQUM7UUFDekIsYUFBUSxHQUFxQixJQUFJLENBQUM7UUFDbEMsY0FBUyxHQUFHLEtBQUssQ0FBQztRQUtiLGNB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QUF1QiwwQkE2S25DLENBQUEiLCJmaWxlIjoiY29tcG9uZW50cy9uYXZiYXIvdXNlci1uYXZpZ2F0aW9uLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBWaWV3Q2hpbGQsIFZpZXdFbmNhcHN1bGF0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEZvcm1Hcm91cCwgRm9ybUNvbnRyb2wsIEZvcm1CdWlsZGVyLCBWYWxpZGF0b3JzIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5pbXBvcnQgeyBBdXRoU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL2F1dGguc2VydmljZSc7XHJcbmltcG9ydCB7IEFwaVNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9hcGkuc2VydmljZSc7XHJcbmltcG9ydCB7IE1vZGFsQ29tcG9uZW50IH0gZnJvbSAnbmcyLWJzMy1tb2RhbC9uZzItYnMzLW1vZGFsJztcclxuaW1wb3J0IHsgVXNlciB9IGZyb20gJy4uLy4uL21vZGVscy91c2VyJztcclxuaW1wb3J0IHsgRXJyb3JTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vZXJyb3JzL2luZGV4JztcclxuaW1wb3J0IHsgTm90aWZpY2F0aW9uc1NlcnZpY2UgfSBmcm9tICdhbmd1bGFyMi1ub3RpZmljYXRpb25zJztcclxuXHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBtb2R1bGVJZDogbW9kdWxlLmlkLFxyXG4gIHNlbGVjdG9yOiAndXNlci1uYXYnLFxyXG4gIHRlbXBsYXRlVXJsOiAndXNlci1uYXZpZ2F0aW9uLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsndXNlci1uYXZpZ2F0aW9uLmNvbXBvbmVudC5jc3MnXVxyXG4gIC8vLCBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBVc2VyTmF2aWdhdGlvbkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgICB1c2VySWQ6IHN0cmluZyA9ICcnO1xyXG4gICAgbmlja25hbWU6IHN0cmluZyA9ICcnO1xyXG4gIC8vQFZpZXdDaGlsZCgnbW9kYWwnKVxyXG4gICAgLy9tb2RhbDogTW9kYWxDb21wb25lbnQ7ICAgLy90byBzdXBwb3J0IG1vZGFsIGluIG1vZGFsICh0byBpbXBsZW1lbnQ6IGZvcmdvdCBwYXNzd29yZClcclxuICAgIG1vZGVsOiBVc2VyID0gbmV3IFVzZXIoJycsICcnKTtcclxuXHJcbiAgICBpbmRleDogbnVtYmVyID0gMDtcclxuICAvLyAgYmFja2Ryb3BPcHRpb25zID0gW3RydWUsIGZhbHNlLCAnc3RhdGljJ107XHJcbiAgICBjc3NDbGFzczogc3RyaW5nID0gJyc7XHJcblxyXG4gICAgYW5pbWF0aW9uOiBib29sZWFuID0gdHJ1ZTtcclxuICAgIGtleWJvYXJkOiBib29sZWFuID0gdHJ1ZTtcclxuICAgIGJhY2tkcm9wOiBzdHJpbmcgfCBib29sZWFuID0gdHJ1ZTtcclxuICAgIGlzTG9hZGluZyA9IGZhbHNlO1xyXG4gLy8gICBjc3M6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgcHVibGljIGxvZ2luRm9ybTogRm9ybUdyb3VwO1xyXG4gIHB1YmxpYyByZWdpc3RlckZvcm06IEZvcm1Hcm91cDtcclxuICBwdWJsaWMgc3VibWl0dGVkOiBib29sZWFuID0gZmFsc2U7XHJcbiAgcHVibGljIHVzZXJUeXBlcyA9IFtcclxuICAgIHsgdmFsdWU6ICd1enNha292YXMnLCBkaXNwbGF5OiAnVcW+c2Frb3ZhcycgfSxcclxuICAgIHsgdmFsdWU6ICdkaXphaW5lcmlzJywgZGlzcGxheTogJ0RpemFpbmVyaXMnIH1cclxuXTtcclxuICBwdWJsaWMgb3B0aW9ucyA9IHtcclxuICAgICAgcG9zaXRpb246IFtcInRvcFwiLFwicmlnaHRcIl1cclxuICAgIH07XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsIFxyXG4gICAgICAgICAgICAgIHByaXZhdGUgYXV0aFNlcnZpY2U6IEF1dGhTZXJ2aWNlLCBcclxuICAgICAgICAgICAgICBwcml2YXRlIGZiOiBGb3JtQnVpbGRlciwgXHJcbiAgICAgICAgICAgICAgcHJpdmF0ZSBlcnJvclNlcnZpY2U6IEVycm9yU2VydmljZSxcclxuICAgICAgICAgICAgICBwcml2YXRlIG5vdGlmaWNhdGlvbnNTZXJ2aWNlOiBOb3RpZmljYXRpb25zU2VydmljZSxcclxuICAgICAgICAgICAgICBwcml2YXRlIGFwaVNlcnZpY2U6IEFwaVNlcnZpY2UpIHtcclxuICAgICAgICAgICAgICAvL3RoaXMuaXNNYXRjaGluZ1Bhc3N3b3JkID0gdGhpcy5pc01hdGNoaW5nUGFzc3dvcmQuYmluZCh0aGlzKTtcclxuICAgICAgICAgICAgICAgfVxyXG5cclxuICBuZ09uSW5pdCgpIHsgXHJcbiAgICB0aGlzLnVzZXJJZCA9IHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oJ3VzZXJJZCcpO1xyXG4gICAgdGhpcy5hcGlTZXJ2aWNlLmdldFVzZXJJbmZvKHRoaXMudXNlcklkKVxyXG4gICAgICAuc3Vic2NyaWJlKHVzZXIgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdjb21tZW50cy1zZWN0aW9uIGNvbXAgdXNlciB2YXInKTtcclxuICAgICAgICBjb25zb2xlLmxvZyh1c2VyKTtcclxuICAgICAgICB0aGlzLm5pY2tuYW1lID0gdXNlci5uaWNrTmFtZTtcclxuICAgICAgfSxcclxuICAgICAgZXJyb3IgPT4ge1xyXG4gICAgICAgIHRoaXMuaXNMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgLy90aGlzLm5vdGlmaWNhdGlvbnNTZXJ2aWNlLmVycm9yKGVycm9yLnRpdGxlLCBlcnJvci5lcnJvci5tZXNzYWdlLCB7dGltZU91dDogMzAwMCwgc2hvd1Byb2dyZXNzQmFyOiBmYWxzZX0pXHJcbiAgICAgICAgLy90aGlzLmVycm9yU2VydmljZS5oYW5kbGVFcnJvcihlcnJvcik7XHJcbiAgICAgIH0pO1xyXG5cclxuICAgIHRoaXMubG9naW5Gb3JtID0gdGhpcy5mYi5ncm91cCh7XHJcbiAgICAgIC8vZW1haWw6IFsnJywgVmFsaWRhdG9ycy5jb21wb3NlKFtWYWxpZGF0b3JzLnJlcXVpcmVkLCB0aGlzLmlzVmFsaWRFbWFpbF0pXSxcclxuICAgICAgbmlja05hbWU6IFsnJywgVmFsaWRhdG9ycy5yZXF1aXJlZF0sXHJcbiAgICAgIHBhc3N3b3JkOiBbJycsIFZhbGlkYXRvcnMucmVxdWlyZWRdXHJcbiAgICB9KTtcclxuXHJcbiAgICB0aGlzLnJlZ2lzdGVyRm9ybSA9IHRoaXMuZmIuZ3JvdXAoe1xyXG4gICAgICBmaXJzdE5hbWU6IFsnJywgVmFsaWRhdG9ycy5yZXF1aXJlZF0sXHJcbiAgICAgIGxhc3ROYW1lOiBbJycsIFZhbGlkYXRvcnMucmVxdWlyZWRdLFxyXG4gICAgICBuaWNrTmFtZTogWycnLCBWYWxpZGF0b3JzLmNvbXBvc2UoW1ZhbGlkYXRvcnMucmVxdWlyZWQsIFZhbGlkYXRvcnMubWluTGVuZ3RoKDQpXSldLFxyXG4gICAgICBlbWFpbDogWycnLCBWYWxpZGF0b3JzLmNvbXBvc2UoW1ZhbGlkYXRvcnMucmVxdWlyZWQsIHRoaXMuaXNWYWxpZEVtYWlsXSldLFxyXG4gICAgICBwYXNzd29yZDogWycnLCBWYWxpZGF0b3JzLmNvbXBvc2UoW1ZhbGlkYXRvcnMucmVxdWlyZWQsIFZhbGlkYXRvcnMubWluTGVuZ3RoKDYpXSldLFxyXG4gICAgICByZXBlYXRQYXNzd29yZDogWycnLCBWYWxpZGF0b3JzLmNvbXBvc2UoW1ZhbGlkYXRvcnMucmVxdWlyZWQsIFZhbGlkYXRvcnMubWluTGVuZ3RoKDYpXSldLFxyXG4gICAgICB1c2VyVHlwZTogW3RoaXMudXNlclR5cGVzWzBdLnZhbHVlLCBWYWxpZGF0b3JzLnJlcXVpcmVkXVxyXG4gICAgfSk7XHJcblxyXG4gIH1cclxuXHJcbiAgbG9nb3V0KCkge1xyXG4gICAgc2Vzc2lvblN0b3JhZ2UuY2xlYXIoKTtcclxuICAgIGNvbnNvbGUubG9nKCdzZXNzaW9uU3RvcmFnZSBjbGVhcmVkLCBsb2dnaW5nIG91dC4uLicpO1xyXG4gICAgdGhpcy5ub3RpZmljYXRpb25zU2VydmljZS5pbmZvKCdBdHNpanVuZ2lhbWEuLi4nLCAnU8SXa21pbmdhaSBhdHNpanVuZ8SXdGUnLCB7dGltZU91dDogMzAwMCwgc2hvd1Byb2dyZXNzQmFyOiBmYWxzZX0pO1xyXG4gICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoWycvJ10pO1xyXG4gIH1cclxuXHJcbiAgaXNMb2dnZWRJbigpIHtcclxuICAgIHJldHVybiB0aGlzLmF1dGhTZXJ2aWNlLmlzTG9nZ2VkSW4oKTtcclxuICB9XHJcblxyXG4gICAgY2xvc2VkKCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdNb2RhbCBjbG9zZWQnKTtcclxuICAgIH1cclxuXHJcbiAgICBkaXNtaXNzZWQoKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ01vZGFsIGRpc21pc3NlZCcpO1xyXG4gICAgfVxyXG5cclxuICAgIG9wZW5lZCgpIHtcclxuICAgICAgICBjb25zb2xlLmxvZygnTW9kYWwgb3BlbmVkJyk7XHJcbiAgICB9XHJcblxyXG4gICAgbG9naW4oZm9ybTogYW55KSB7XHJcbiAgICAgIHRoaXMuaXNMb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgIGNvbnN0IHVzZXIgPSBuZXcgVXNlcihmb3JtLm5pY2tOYW1lLnZhbHVlLCBmb3JtLnBhc3N3b3JkLnZhbHVlKTtcclxuICAgICAgIGNvbnNvbGUubG9nKCd1c2VyLW5hdmlnYXRpb24gbG9naW4gdXNlciBjb25zdCcpO1xyXG4gICAgICAgY29uc29sZS5sb2codXNlcik7XHJcbiAgICAgICB0aGlzLmF1dGhTZXJ2aWNlLnNpZ25pbih1c2VyKVxyXG4gICAgICAgLnN1YnNjcmliZShkYXRhID0+IHtcclxuICAgICAgICAgY29uc29sZS5sb2coZGF0YSk7XHJcbiAgICAgICAgIGNvbnNvbGUubG9nKCdTZWttaW5nYWkgcHJpc2lqdW5ndGEnKTtcclxuICAgICAgICAgc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbSgndG9rZW4nLCBkYXRhLnRva2VuKTtcclxuICAgICAgICAgc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbSgndXNlcklkJywgZGF0YS51c2VySWQpO1xyXG4gICAgICAgICBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKCd1c2VyVHlwZScsIGRhdGEudXNlclR5cGUpO1xyXG4gICAgICAgICB0aGlzLm5pY2tuYW1lID0gZGF0YS5uaWNrbmFtZTtcclxuICAgICAgICAgdGhpcy5pc0xvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgdGhpcy5ub3RpZmljYXRpb25zU2VydmljZS5zdWNjZXNzKCdQcmlzaWp1bmd0YScsICdTxJdrbWluZ2FpIHByaXNpanVuZ3RhJywge3RpbWVPdXQ6IDMwMDAsIHNob3dQcm9ncmVzc0JhcjogZmFsc2V9KTtcclxuICAgICAgICAgLy90aGlzLnJvdXRlci5uYXZpZ2F0ZUJ5VXJsKCcvJyk7XHJcbiAgICAgICB9LFxyXG4gICAgICAgLy9lcnJvciA9PiB0aGlzLmVycm9yU2VydmljZS5oYW5kbGVFcnJvcihlcnJvcikpXHJcbiAgICAgICBlcnJvciA9PiB7XHJcbiAgICAgICAgIHRoaXMuaXNMb2FkaW5nID0gZmFsc2U7IFxyXG4gICAgICAgICAvL3RoaXMubm90aWZpY2F0aW9uc1NlcnZpY2UuZXJyb3IoJ0tsYWlkYScsICfErnZ5a28ga2xhaWRhIHByaXNpanVuZ2lhbnQnLCB7dGltZU91dDogMzAwMCwgc2hvd1Byb2dyZXNzQmFyOiBmYWxzZX0pIFxyXG4gICAgICAgICB0aGlzLm5vdGlmaWNhdGlvbnNTZXJ2aWNlLmVycm9yKGVycm9yLnRpdGxlLCBlcnJvci5lcnJvci5tZXNzYWdlLCB7dGltZU91dDogMzAwMCwgc2hvd1Byb2dyZXNzQmFyOiBmYWxzZX0pXHJcbiAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgcmVnaXN0ZXIoZm9ybTogYW55KSB7XHJcbiAgICAgIHRoaXMuaXNMb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgY29uc3QgdXNlciA9IG5ldyBVc2VyKGZvcm0ubmlja05hbWUudmFsdWUsIGZvcm0ucGFzc3dvcmQudmFsdWUsIGZvcm0ucmVwZWF0UGFzc3dvcmQudmFsdWUsIHRoaXMucmVnaXN0ZXJGb3JtLnZhbHVlLnVzZXJUeXBlLCBmb3JtLmZpcnN0TmFtZS52YWx1ZSwgZm9ybS5sYXN0TmFtZS52YWx1ZSwgZm9ybS5lbWFpbC52YWx1ZSwgMCwgMCk7XHJcbiAgICAgICAgdGhpcy5hdXRoU2VydmljZS5zaWdudXAodXNlcilcclxuICAgICAgICAgIC5zdWJzY3JpYmUoZGF0YSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xyXG4gICAgICAgICAgICBmb3JtLmZpcnN0TmFtZS52YWx1ZSA9IG51bGw7XHJcbiAgICAgICAgICAgIGZvcm0ubGFzdE5hbWUudmFsdWUgPSBudWxsO1xyXG4gICAgICAgICAgICBmb3JtLm5pY2tOYW1lLnZhbHVlID0gbnVsbDtcclxuICAgICAgICAgICAgZm9ybS5lbWFpbC52YWx1ZSA9IG51bGw7XHJcbiAgICAgICAgICAgIGZvcm0ucGFzc3dvcmQudmFsdWUgPSBudWxsO1xyXG4gICAgICAgICAgICBmb3JtLnJlcGVhdFBhc3N3b3JkLnZhbHVlID0gbnVsbDtcclxuICAgICAgICAgICAgdGhpcy5pc0xvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgdGhpcy5ub3RpZmljYXRpb25zU2VydmljZS5zdWNjZXNzKCdVxb5yZWdpc3RydW90YScsICdTxJdrbWluZ2FpIHXFvnNpcmVnaXN0cmF2b3RlJywge3RpbWVPdXQ6IDMwMDAsIHNob3dQcm9ncmVzc0JhcjogZmFsc2V9KTtcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICAvL2Vycm9yID0+IHRoaXMuZXJyb3JTZXJ2aWNlLmhhbmRsZUVycm9yKGVycm9yKSlcclxuICAgICAgICAgIFxyXG4gICAgICAgICAgZXJyb3IgPT4geyBcclxuICAgICAgICAgICAgdGhpcy5pc0xvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgLy90aGlzLm5vdGlmaWNhdGlvbnNTZXJ2aWNlLmVycm9yKCdLbGFpZGEgcmVnaXN0cnVvamFudGlzJywgJ1RpbmthbWFpIHXFvnBpbGR5a2l0ZSB2aXN1cyBsYXVrdXMuIFBhc2lyaW5raXRlIHVuaWthbMWzIHNsYXB5dmFyZMSvJywge3RpbWVPdXQ6IDMwMDAsIHNob3dQcm9ncmVzc0JhcjogZmFsc2V9KVxyXG4gICAgICAgICAgICB0aGlzLm5vdGlmaWNhdGlvbnNTZXJ2aWNlLmVycm9yKGVycm9yLnRpdGxlLCBlcnJvci5lcnJvci5tZXNzYWdlLCB7dGltZU91dDogMzAwMCwgc2hvd1Byb2dyZXNzQmFyOiBmYWxzZX0pXHJcbiAgICAgICAgfSkgXHJcbiAgICB9XHJcblxyXG4gICAgaXNDbGllbnQoKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLmF1dGhTZXJ2aWNlLmlzQ2xpZW50KCk7XHJcbiAgICB9XHJcblxyXG4gICAgaXNEZXNpZ25lcigpIHtcclxuICAgICAgcmV0dXJuIHRoaXMuYXV0aFNlcnZpY2UuaXNEZXNpZ25lcigpO1xyXG4gICAgfVxyXG5cclxuICAgIGlzQWRtaW4oKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLmF1dGhTZXJ2aWNlLmlzQWRtaW4oKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGlzVmFsaWRFbWFpbChjb250cm9sOiBGb3JtQ29udHJvbCk6IHtbczogc3RyaW5nXTogYm9vbGVhbn0ge1xyXG4gICAgICBsZXQgZW1haWxSZWdleCA9IG5ldyBSZWdFeHAoXCJbYS16MC05ISMkJSYnKisvPT9eX2B7fH1+LV0rKD86XFwuW2EtejAtOSEjJCUmJyorLz0/Xl9ge3x9fi1dKykqQCg/OlthLXowLTldKD86W2EtejAtOS1dKlthLXowLTldKT9cXC4pK1thLXowLTldKD86W2EtejAtOS1dKlthLXowLTldKT9cIik7IFxyXG4gICAgICByZXR1cm4gZW1haWxSZWdleC50ZXN0KGNvbnRyb2wudmFsdWUpID8gbnVsbCA6IHtpbnZhbGlkRW1haWw6IHRydWV9XHJcbiAgICAgIH1cclxuXHJcbiAgICBpc01hdGNoaW5nUGFzc3dvcmQoY29udHJvbDogRm9ybUdyb3VwKSB7XHJcbiAgICAgICAgLy8gY2hlY2sgaWYgY29udHJvbCBpcyBlcXVhbCB0byB0aGUgcGFzc3dvcmQxIGNvbnRyb2xcclxuICAgICAgICBjb25zb2xlLmxvZyhjb250cm9sKTtcclxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLnJlZ2lzdGVyRm9ybSk7XHJcbiAgICAgICAgcmV0dXJuIGNvbnRyb2wudmFsdWUgPT09IHRoaXMucmVnaXN0ZXJGb3JtLnZhbHVlLnBhc3N3b3JkID8gbnVsbCA6IHtpc0VxdWFsOiB0cnVlfTtcclxuICAgIH1cclxuXHJcbiAgICAgIGNyZWF0ZWQoZXYpIHtcclxuICAgICAgY29uc29sZS5sb2coJ25vdGlmaWNhdGlvbiBjcmVhdGVkJyk7XHJcbiAgICB9XHJcblxyXG4gICAgZGVzdHJveWVkKGV2KSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKCdub3RpZmljYXRpb24gZGVzdHJveWVkJyk7XHJcbiAgICB9XHJcblxyXG59Il19
