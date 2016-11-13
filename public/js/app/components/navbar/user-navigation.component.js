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
var user_1 = require('../../models/user');
var index_1 = require('../../errors/index');
var angular2_notifications_1 = require('angular2-notifications');
var UserNavigationComponent = (function () {
    function UserNavigationComponent(router, authService, fb, errorService, notificationsService) {
        this.router = router;
        this.authService = authService;
        this.fb = fb;
        this.errorService = errorService;
        this.notificationsService = notificationsService;
        //@ViewChild('modal')
        //modal: ModalComponent;   //to support modal in modal (to implement: forgot password)
        this.model = new user_1.User('', '');
        this.index = 0;
        //  backdropOptions = [true, false, 'static'];
        this.cssClass = '';
        this.animation = true;
        this.keyboard = true;
        this.backdrop = true;
        this.submitted = false;
        this.userTypes = [
            { value: 'uzsakovas', display: 'Užsakovas' },
            { value: 'dizaineris', display: 'Dizaineris' }
        ];
        this.options = {
            position: ["top", "right"]
        };
    }
    UserNavigationComponent.prototype.ngOnInit = function () {
        this.loginForm = this.fb.group({
            //email: ['', Validators.compose([Validators.required, this.isValidEmail])],
            nickName: ['', forms_1.Validators.required],
            password: ['', forms_1.Validators.required]
        });
        this.registerForm = this.fb.group({
            firstName: ['', forms_1.Validators.required],
            lastName: ['', forms_1.Validators.required],
            nickName: ['', forms_1.Validators.required],
            email: ['', forms_1.Validators.compose([forms_1.Validators.required, this.isValidEmail])],
            password: ['', forms_1.Validators.required],
            userType: [this.userTypes[0].value, forms_1.Validators.required]
        });
    };
    UserNavigationComponent.prototype.logout = function () {
        localStorage.clear();
        console.log('localStorage cleared, logging out...');
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
        var user = new user_1.User(form.nickName.value, form.password.value);
        console.log('user-navigation login user const');
        console.log(user);
        this.authService.signin(user)
            .subscribe(function (data) {
            console.log(data);
            console.log('Sekmingai prisijungta');
            localStorage.setItem('token', data.token);
            localStorage.setItem('userId', data.userId);
            localStorage.setItem('userType', data.userType);
            _this.notificationsService.success('Prisijungta', 'Sėkmingai prisijungta', { timeOut: 3000, showProgressBar: false });
            _this.router.navigateByUrl('/');
        }, 
        //error => this.errorService.handleError(error))
        function (error) { return _this.notificationsService.error('Klaida', 'Įvyko klaida prisijungiant', { timeOut: 3000, showProgressBar: false }); });
    };
    UserNavigationComponent.prototype.register = function (form) {
        var _this = this;
        //const user = new User(this.registerForm.value.email, this.registerForm.value.password, this.registerForm.value.userType ,this.registerForm.value.firstName, this.registerForm.value.lastName, 0, 0, 0);
        //const user = new User(form.nickName.value, form.password.value, this.registerForm.value.userType, form.firstName.value, form.lastName.value, form.email.value, 0, 0, 0);
        var user = new user_1.User(form.nickName.value, form.password.value, this.registerForm.value.userType, form.firstName.value, form.lastName.value, form.email.value, 0, 0, 0);
        this.authService.signup(user)
            .subscribe(function (data) {
            console.log(data);
            form.firstName.value = '';
            form.lastName.value = '';
            form.nickName.value = '';
            form.email.value = '';
            form.password.value = '';
            _this.notificationsService.success('Užregistruota', 'Sėkmingai užsiregistravote', { timeOut: 3000, showProgressBar: false });
        }, 
        //error => this.errorService.handleError(error))
        function (error) { return _this.notificationsService.error('Klaida registruojantis', 'Tinkamai užpildykite visus laukus', { timeOut: 3000, showProgressBar: false }); });
    };
    UserNavigationComponent.prototype.isClient = function () {
        return this.authService.isClient();
    };
    UserNavigationComponent.prototype.isDesigner = function () {
        return this.authService.isDesigner();
    };
    UserNavigationComponent.prototype.isValidEmail = function (control) {
        var emailRegex = new RegExp("[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?");
        return emailRegex.test(control.value) ? null : { invalidEmail: true };
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
        __metadata('design:paramtypes', [router_1.Router, auth_service_1.AuthService, forms_1.FormBuilder, index_1.ErrorService, angular2_notifications_1.NotificationsService])
    ], UserNavigationComponent);
    return UserNavigationComponent;
}());
exports.UserNavigationComponent = UserNavigationComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvbmF2YmFyL3VzZXItbmF2aWdhdGlvbi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUFnRSxlQUFlLENBQUMsQ0FBQTtBQUNoRixzQkFBZ0UsZ0JBQWdCLENBQUMsQ0FBQTtBQUNqRix1QkFBdUIsaUJBQWlCLENBQUMsQ0FBQTtBQUN6Qyw2QkFBNEIsNkJBQTZCLENBQUMsQ0FBQTtBQUUxRCxxQkFBcUIsbUJBQW1CLENBQUMsQ0FBQTtBQUN6QyxzQkFBNkIsb0JBQW9CLENBQUMsQ0FBQTtBQUNsRCx1Q0FBcUMsd0JBQXdCLENBQUMsQ0FBQTtBQVU5RDtJQTBCRSxpQ0FBb0IsTUFBYyxFQUNkLFdBQXdCLEVBQ3hCLEVBQWUsRUFDZixZQUEwQixFQUMxQixvQkFBMEM7UUFKMUMsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUNkLGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBQ3hCLE9BQUUsR0FBRixFQUFFLENBQWE7UUFDZixpQkFBWSxHQUFaLFlBQVksQ0FBYztRQUMxQix5QkFBb0IsR0FBcEIsb0JBQW9CLENBQXNCO1FBNUI5RCxxQkFBcUI7UUFDbkIsc0ZBQXNGO1FBQ3RGLFVBQUssR0FBUyxJQUFJLFdBQUksQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFFL0IsVUFBSyxHQUFXLENBQUMsQ0FBQztRQUNwQiw4Q0FBOEM7UUFDNUMsYUFBUSxHQUFXLEVBQUUsQ0FBQztRQUV0QixjQUFTLEdBQVksSUFBSSxDQUFDO1FBQzFCLGFBQVEsR0FBWSxJQUFJLENBQUM7UUFDekIsYUFBUSxHQUFxQixJQUFJLENBQUM7UUFLN0IsY0FBUyxHQUFZLEtBQUssQ0FBQztRQUMzQixjQUFTLEdBQUc7WUFDakIsRUFBRSxLQUFLLEVBQUUsV0FBVyxFQUFFLE9BQU8sRUFBRSxXQUFXLEVBQUU7WUFDNUMsRUFBRSxLQUFLLEVBQUUsWUFBWSxFQUFFLE9BQU8sRUFBRSxZQUFZLEVBQUU7U0FDakQsQ0FB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SUw7UUFBQyxnQkFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFFBQVEsRUFBRSxVQUFVO1lBQ3BCLFdBQVcsRUFBRSxnQ0FBZ0M7WUFDN0MsU0FBUyxFQUFFLENBQUMsK0JBQStCLENBQUM7U0FFN0MsQ0FBQzs7K0JBQUE7SUFpSUYsOEJBQUM7QUFBRCxDQWhJQSxBQWdJQyxJQUFBO0FBaElZLCtCQUF1QiwwQkFnSW5DLENBQUEiLCJmaWxlIjoiY29tcG9uZW50cy9uYXZiYXIvdXNlci1uYXZpZ2F0aW9uLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBWaWV3Q2hpbGQsIFZpZXdFbmNhcHN1bGF0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEZvcm1Hcm91cCwgRm9ybUNvbnRyb2wsIEZvcm1CdWlsZGVyLCBWYWxpZGF0b3JzIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5pbXBvcnQgeyBBdXRoU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL2F1dGguc2VydmljZSc7XHJcbmltcG9ydCB7IE1vZGFsQ29tcG9uZW50IH0gZnJvbSAnbmcyLWJzMy1tb2RhbC9uZzItYnMzLW1vZGFsJztcclxuaW1wb3J0IHsgVXNlciB9IGZyb20gJy4uLy4uL21vZGVscy91c2VyJztcclxuaW1wb3J0IHsgRXJyb3JTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vZXJyb3JzL2luZGV4JztcclxuaW1wb3J0IHsgTm90aWZpY2F0aW9uc1NlcnZpY2UgfSBmcm9tICdhbmd1bGFyMi1ub3RpZmljYXRpb25zJztcclxuXHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBtb2R1bGVJZDogbW9kdWxlLmlkLFxyXG4gIHNlbGVjdG9yOiAndXNlci1uYXYnLFxyXG4gIHRlbXBsYXRlVXJsOiAndXNlci1uYXZpZ2F0aW9uLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsndXNlci1uYXZpZ2F0aW9uLmNvbXBvbmVudC5jc3MnXVxyXG4gIC8vLCBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBVc2VyTmF2aWdhdGlvbkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcblxyXG4gIC8vQFZpZXdDaGlsZCgnbW9kYWwnKVxyXG4gICAgLy9tb2RhbDogTW9kYWxDb21wb25lbnQ7ICAgLy90byBzdXBwb3J0IG1vZGFsIGluIG1vZGFsICh0byBpbXBsZW1lbnQ6IGZvcmdvdCBwYXNzd29yZClcclxuICAgIG1vZGVsOiBVc2VyID0gbmV3IFVzZXIoJycsICcnKTtcclxuXHJcbiAgICBpbmRleDogbnVtYmVyID0gMDtcclxuICAvLyAgYmFja2Ryb3BPcHRpb25zID0gW3RydWUsIGZhbHNlLCAnc3RhdGljJ107XHJcbiAgICBjc3NDbGFzczogc3RyaW5nID0gJyc7XHJcblxyXG4gICAgYW5pbWF0aW9uOiBib29sZWFuID0gdHJ1ZTtcclxuICAgIGtleWJvYXJkOiBib29sZWFuID0gdHJ1ZTtcclxuICAgIGJhY2tkcm9wOiBzdHJpbmcgfCBib29sZWFuID0gdHJ1ZTtcclxuIC8vICAgY3NzOiBib29sZWFuID0gZmFsc2U7XHJcblxyXG4gIHB1YmxpYyBsb2dpbkZvcm06IEZvcm1Hcm91cDtcclxuICBwdWJsaWMgcmVnaXN0ZXJGb3JtOiBGb3JtR3JvdXA7XHJcbiAgcHVibGljIHN1Ym1pdHRlZDogYm9vbGVhbiA9IGZhbHNlO1xyXG4gIHB1YmxpYyB1c2VyVHlwZXMgPSBbXHJcbiAgICB7IHZhbHVlOiAndXpzYWtvdmFzJywgZGlzcGxheTogJ1XFvnNha292YXMnIH0sXHJcbiAgICB7IHZhbHVlOiAnZGl6YWluZXJpcycsIGRpc3BsYXk6ICdEaXphaW5lcmlzJyB9XHJcbl07XHJcbiAgcHVibGljIG9wdGlvbnMgPSB7XHJcbiAgICAgIHBvc2l0aW9uOiBbXCJ0b3BcIixcInJpZ2h0XCJdXHJcbiAgICB9O1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJvdXRlcjogUm91dGVyLCBcclxuICAgICAgICAgICAgICBwcml2YXRlIGF1dGhTZXJ2aWNlOiBBdXRoU2VydmljZSwgXHJcbiAgICAgICAgICAgICAgcHJpdmF0ZSBmYjogRm9ybUJ1aWxkZXIsIFxyXG4gICAgICAgICAgICAgIHByaXZhdGUgZXJyb3JTZXJ2aWNlOiBFcnJvclNlcnZpY2UsXHJcbiAgICAgICAgICAgICAgcHJpdmF0ZSBub3RpZmljYXRpb25zU2VydmljZTogTm90aWZpY2F0aW9uc1NlcnZpY2UpIHsgfVxyXG5cclxuICBuZ09uSW5pdCgpIHsgXHJcbiAgICB0aGlzLmxvZ2luRm9ybSA9IHRoaXMuZmIuZ3JvdXAoe1xyXG4gICAgICAvL2VtYWlsOiBbJycsIFZhbGlkYXRvcnMuY29tcG9zZShbVmFsaWRhdG9ycy5yZXF1aXJlZCwgdGhpcy5pc1ZhbGlkRW1haWxdKV0sXHJcbiAgICAgIG5pY2tOYW1lOiBbJycsIFZhbGlkYXRvcnMucmVxdWlyZWRdLFxyXG4gICAgICBwYXNzd29yZDogWycnLCBWYWxpZGF0b3JzLnJlcXVpcmVkXVxyXG4gICAgfSk7XHJcblxyXG4gICAgdGhpcy5yZWdpc3RlckZvcm0gPSB0aGlzLmZiLmdyb3VwKHtcclxuICAgICAgZmlyc3ROYW1lOiBbJycsIFZhbGlkYXRvcnMucmVxdWlyZWRdLFxyXG4gICAgICBsYXN0TmFtZTogWycnLCBWYWxpZGF0b3JzLnJlcXVpcmVkXSxcclxuICAgICAgbmlja05hbWU6IFsnJywgVmFsaWRhdG9ycy5yZXF1aXJlZF0sXHJcbiAgICAgIGVtYWlsOiBbJycsIFZhbGlkYXRvcnMuY29tcG9zZShbVmFsaWRhdG9ycy5yZXF1aXJlZCwgdGhpcy5pc1ZhbGlkRW1haWxdKV0sXHJcbiAgICAgIHBhc3N3b3JkOiBbJycsIFZhbGlkYXRvcnMucmVxdWlyZWRdLFxyXG4gICAgICB1c2VyVHlwZTogW3RoaXMudXNlclR5cGVzWzBdLnZhbHVlLCBWYWxpZGF0b3JzLnJlcXVpcmVkXVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBsb2dvdXQoKSB7XHJcbiAgICBsb2NhbFN0b3JhZ2UuY2xlYXIoKTtcclxuICAgIGNvbnNvbGUubG9nKCdsb2NhbFN0b3JhZ2UgY2xlYXJlZCwgbG9nZ2luZyBvdXQuLi4nKTtcclxuICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFsnLyddKTtcclxuICB9XHJcblxyXG4gIGlzTG9nZ2VkSW4oKSB7XHJcbiAgICByZXR1cm4gdGhpcy5hdXRoU2VydmljZS5pc0xvZ2dlZEluKCk7XHJcbiAgfVxyXG5cclxuICAgIGNsb3NlZCgpIHtcclxuICAgICAgICBjb25zb2xlLmxvZygnTW9kYWwgY2xvc2VkJyk7XHJcbiAgICB9XHJcblxyXG4gICAgZGlzbWlzc2VkKCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdNb2RhbCBkaXNtaXNzZWQnKTtcclxuICAgIH1cclxuXHJcbiAgICBvcGVuZWQoKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ01vZGFsIG9wZW5lZCcpO1xyXG4gICAgfVxyXG5cclxuICAgIGxvZ2luKGZvcm06IGFueSkge1xyXG4gICAgICAgY29uc3QgdXNlciA9IG5ldyBVc2VyKGZvcm0ubmlja05hbWUudmFsdWUsIGZvcm0ucGFzc3dvcmQudmFsdWUpO1xyXG4gICAgICAgY29uc29sZS5sb2coJ3VzZXItbmF2aWdhdGlvbiBsb2dpbiB1c2VyIGNvbnN0Jyk7XHJcbiAgICAgICBjb25zb2xlLmxvZyh1c2VyKTtcclxuICAgICAgIHRoaXMuYXV0aFNlcnZpY2Uuc2lnbmluKHVzZXIpXHJcbiAgICAgICAuc3Vic2NyaWJlKGRhdGEgPT4ge1xyXG4gICAgICAgICBjb25zb2xlLmxvZyhkYXRhKTtcclxuICAgICAgICAgY29uc29sZS5sb2coJ1Nla21pbmdhaSBwcmlzaWp1bmd0YScpO1xyXG4gICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndG9rZW4nLCBkYXRhLnRva2VuKTtcclxuICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3VzZXJJZCcsIGRhdGEudXNlcklkKTtcclxuICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3VzZXJUeXBlJywgZGF0YS51c2VyVHlwZSk7XHJcbiAgICAgICAgIHRoaXMubm90aWZpY2F0aW9uc1NlcnZpY2Uuc3VjY2VzcygnUHJpc2lqdW5ndGEnLCAnU8SXa21pbmdhaSBwcmlzaWp1bmd0YScsIHt0aW1lT3V0OiAzMDAwLCBzaG93UHJvZ3Jlc3NCYXI6IGZhbHNlfSk7XHJcbiAgICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlQnlVcmwoJy8nKTtcclxuICAgICAgIH0sXHJcbiAgICAgICAvL2Vycm9yID0+IHRoaXMuZXJyb3JTZXJ2aWNlLmhhbmRsZUVycm9yKGVycm9yKSlcclxuICAgICAgIGVycm9yID0+IHRoaXMubm90aWZpY2F0aW9uc1NlcnZpY2UuZXJyb3IoJ0tsYWlkYScsICfErnZ5a28ga2xhaWRhIHByaXNpanVuZ2lhbnQnLCB7dGltZU91dDogMzAwMCwgc2hvd1Byb2dyZXNzQmFyOiBmYWxzZX0pKVxyXG4gICAgfVxyXG5cclxuICAgIHJlZ2lzdGVyKGZvcm06IGFueSkge1xyXG4gICAgICAvL2NvbnN0IHVzZXIgPSBuZXcgVXNlcih0aGlzLnJlZ2lzdGVyRm9ybS52YWx1ZS5lbWFpbCwgdGhpcy5yZWdpc3RlckZvcm0udmFsdWUucGFzc3dvcmQsIHRoaXMucmVnaXN0ZXJGb3JtLnZhbHVlLnVzZXJUeXBlICx0aGlzLnJlZ2lzdGVyRm9ybS52YWx1ZS5maXJzdE5hbWUsIHRoaXMucmVnaXN0ZXJGb3JtLnZhbHVlLmxhc3ROYW1lLCAwLCAwLCAwKTtcclxuICAgICAgLy9jb25zdCB1c2VyID0gbmV3IFVzZXIoZm9ybS5uaWNrTmFtZS52YWx1ZSwgZm9ybS5wYXNzd29yZC52YWx1ZSwgdGhpcy5yZWdpc3RlckZvcm0udmFsdWUudXNlclR5cGUsIGZvcm0uZmlyc3ROYW1lLnZhbHVlLCBmb3JtLmxhc3ROYW1lLnZhbHVlLCBmb3JtLmVtYWlsLnZhbHVlLCAwLCAwLCAwKTtcclxuICAgICAgY29uc3QgdXNlciA9IG5ldyBVc2VyKGZvcm0ubmlja05hbWUudmFsdWUsIGZvcm0ucGFzc3dvcmQudmFsdWUsIHRoaXMucmVnaXN0ZXJGb3JtLnZhbHVlLnVzZXJUeXBlLCBmb3JtLmZpcnN0TmFtZS52YWx1ZSwgZm9ybS5sYXN0TmFtZS52YWx1ZSwgZm9ybS5lbWFpbC52YWx1ZSwgMCwgMCwgMCk7XHJcbiAgICAgICAgdGhpcy5hdXRoU2VydmljZS5zaWdudXAodXNlcilcclxuICAgICAgICAgIC5zdWJzY3JpYmUoZGF0YSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xyXG4gICAgICAgICAgICBmb3JtLmZpcnN0TmFtZS52YWx1ZSA9ICcnO1xyXG4gICAgICAgICAgICBmb3JtLmxhc3ROYW1lLnZhbHVlID0gJyc7XHJcbiAgICAgICAgICAgIGZvcm0ubmlja05hbWUudmFsdWUgPSAnJztcclxuICAgICAgICAgICAgZm9ybS5lbWFpbC52YWx1ZSA9ICcnO1xyXG4gICAgICAgICAgICBmb3JtLnBhc3N3b3JkLnZhbHVlID0gJyc7XHJcbiAgICAgICAgICAgIHRoaXMubm90aWZpY2F0aW9uc1NlcnZpY2Uuc3VjY2VzcygnVcW+cmVnaXN0cnVvdGEnLCAnU8SXa21pbmdhaSB1xb5zaXJlZ2lzdHJhdm90ZScsIHt0aW1lT3V0OiAzMDAwLCBzaG93UHJvZ3Jlc3NCYXI6IGZhbHNlfSk7XHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgLy9lcnJvciA9PiB0aGlzLmVycm9yU2VydmljZS5oYW5kbGVFcnJvcihlcnJvcikpXHJcbiAgICAgICAgICBlcnJvciA9PiB0aGlzLm5vdGlmaWNhdGlvbnNTZXJ2aWNlLmVycm9yKCdLbGFpZGEgcmVnaXN0cnVvamFudGlzJywgJ1RpbmthbWFpIHXFvnBpbGR5a2l0ZSB2aXN1cyBsYXVrdXMnLCB7dGltZU91dDogMzAwMCwgc2hvd1Byb2dyZXNzQmFyOiBmYWxzZX0pKVxyXG4gICAgfVxyXG5cclxuICAgIGlzQ2xpZW50KCkge1xyXG4gICAgICByZXR1cm4gdGhpcy5hdXRoU2VydmljZS5pc0NsaWVudCgpO1xyXG4gICAgfVxyXG5cclxuICAgIGlzRGVzaWduZXIoKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLmF1dGhTZXJ2aWNlLmlzRGVzaWduZXIoKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGlzVmFsaWRFbWFpbChjb250cm9sOiBGb3JtQ29udHJvbCk6IHtbczogc3RyaW5nXTogYm9vbGVhbn0ge1xyXG4gICAgICBsZXQgZW1haWxSZWdleCA9IG5ldyBSZWdFeHAoXCJbYS16MC05ISMkJSYnKisvPT9eX2B7fH1+LV0rKD86XFwuW2EtejAtOSEjJCUmJyorLz0/Xl9ge3x9fi1dKykqQCg/OlthLXowLTldKD86W2EtejAtOS1dKlthLXowLTldKT9cXC4pK1thLXowLTldKD86W2EtejAtOS1dKlthLXowLTldKT9cIik7IFxyXG4gICAgICByZXR1cm4gZW1haWxSZWdleC50ZXN0KGNvbnRyb2wudmFsdWUpID8gbnVsbCA6IHtpbnZhbGlkRW1haWw6IHRydWV9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGNyZWF0ZWQoZXYpIHtcclxuICAgICAgY29uc29sZS5sb2coJ25vdGlmaWNhdGlvbiBjcmVhdGVkJyk7XHJcbiAgICB9XHJcblxyXG4gICAgZGVzdHJveWVkKGV2KSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKCdub3RpZmljYXRpb24gZGVzdHJveWVkJyk7XHJcbiAgICB9XHJcblxyXG59Il19
