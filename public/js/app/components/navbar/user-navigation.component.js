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
        this.isLoading = false;
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
        //const user = new User(this.registerForm.value.email, this.registerForm.value.password, this.registerForm.value.userType ,this.registerForm.value.firstName, this.registerForm.value.lastName, 0, 0, 0);
        //const user = new User(form.nickName.value, form.password.value, this.registerForm.value.userType, form.firstName.value, form.lastName.value, form.email.value, 0, 0, 0);
        var user = new user_1.User(form.nickName.value, form.password.value, this.registerForm.value.userType, form.firstName.value, form.lastName.value, form.email.value, 0, 0);
        this.authService.signup(user)
            .subscribe(function (data) {
            console.log(data);
            form.firstName.value = null;
            form.lastName.value = null;
            form.nickName.value = null;
            form.email.value = null;
            form.password.value = null;
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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvbmF2YmFyL3VzZXItbmF2aWdhdGlvbi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUFnRSxlQUFlLENBQUMsQ0FBQTtBQUNoRixzQkFBZ0UsZ0JBQWdCLENBQUMsQ0FBQTtBQUNqRix1QkFBdUIsaUJBQWlCLENBQUMsQ0FBQTtBQUN6Qyw2QkFBNEIsNkJBQTZCLENBQUMsQ0FBQTtBQUUxRCxxQkFBcUIsbUJBQW1CLENBQUMsQ0FBQTtBQUN6QyxzQkFBNkIsb0JBQW9CLENBQUMsQ0FBQTtBQUNsRCx1Q0FBcUMsd0JBQXdCLENBQUMsQ0FBQTtBQVU5RDtJQTJCRSxpQ0FBb0IsTUFBYyxFQUNkLFdBQXdCLEVBQ3hCLEVBQWUsRUFDZixZQUEwQixFQUMxQixvQkFBMEM7UUFKMUMsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUNkLGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBQ3hCLE9BQUUsR0FBRixFQUFFLENBQWE7UUFDZixpQkFBWSxHQUFaLFlBQVksQ0FBYztRQUMxQix5QkFBb0IsR0FBcEIsb0JBQW9CLENBQXNCO1FBN0I5RCxxQkFBcUI7UUFDbkIsc0ZBQXNGO1FBQ3RGLFVBQUssR0FBUyxJQUFJLFdBQUksQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFFL0IsVUFBSyxHQUFXLENBQUMsQ0FBQztRQUNwQiw4Q0FBOEM7UUFDNUMsYUFBUSxHQUFXLEVBQUUsQ0FBQztRQUV0QixjQUFTLEdBQVksSUFBSSxDQUFDO1FBQzFCLGFBQVEsR0FBWSxJQUFJLENBQUM7UUFDekIsYUFBUSxHQUFxQixJQUFJLENBQUM7UUFDbEMsY0FBUyxHQUFHLEtBQUssQ0FBQztRQUtiLGNBQVMsR0FBWSxLQUFLLENBQUM7UUFDM0IsY0FBUyxHQUFHO1lBQ2pCLEVBQUUsS0FBSyxFQUFFLFdBQVcsRUFBRSxPQUFPLEVBQUUsV0FBVyxFQUFFO1lBQzVDLEVBQUUsS0FBSyxFQUFFLFlBQVksRUFBRSxPQUFPLEVBQUUsWUFBWSxFQUFFO1NBQ2pELENBQUM7UUFDTyxZQUFPLEdBQUc7WUFDYixRQUFRLEVBQUUsQ0FBQyxLQUFLLEVBQUMsT0FBTyxDQUFDO1NBQzFCLENBQUM7SUFNOEQsQ0FBQztJQUVuRSwwQ0FBUSxHQUFSO1FBQ0UsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQztZQUM3Qiw0RUFBNEU7WUFDNUUsUUFBUSxFQUFFLENBQUMsRUFBRSxFQUFFLGtCQUFVLENBQUMsUUFBUSxDQUFDO1lBQ25DLFFBQVEsRUFBRSxDQUFDLEVBQUUsRUFBRSxrQkFBVSxDQUFDLFFBQVEsQ0FBQztTQUNwQyxDQUFDLENBQUM7UUFFSCxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDO1lBQ2hDLFNBQVMsRUFBRSxDQUFDLEVBQUUsRUFBRSxrQkFBVSxDQUFDLFFBQVEsQ0FBQztZQUNwQyxRQUFRLEVBQUUsQ0FBQyxFQUFFLEVBQUUsa0JBQVUsQ0FBQyxRQUFRLENBQUM7WUFDbkMsUUFBUSxFQUFFLENBQUMsRUFBRSxFQUFFLGtCQUFVLENBQUMsUUFBUSxDQUFDO1lBQ25DLEtBQUssRUFBRSxDQUFDLEVBQUUsRUFBRSxrQkFBVSxDQUFDLE9BQU8sQ0FBQyxDQUFDLGtCQUFVLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDO1lBQ3pFLFFBQVEsRUFBRSxDQUFDLEVBQUUsRUFBRSxrQkFBVSxDQUFDLFFBQVEsQ0FBQztZQUNuQyxRQUFRLEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssRUFBRSxrQkFBVSxDQUFDLFFBQVEsQ0FBQztTQUN6RCxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQsd0NBQU0sR0FBTjtRQUNFLGNBQWMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUN2QixPQUFPLENBQUMsR0FBRyxDQUFDLHdDQUF3QyxDQUFDLENBQUM7UUFDdEQsSUFBSSxDQUFDLG9CQUFvQixDQUFDLElBQUksQ0FBQyxpQkFBaUIsRUFBRSx1QkFBdUIsRUFBRSxFQUFDLE9BQU8sRUFBRSxJQUFJLEVBQUUsZUFBZSxFQUFFLEtBQUssRUFBQyxDQUFDLENBQUM7UUFDcEgsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO0lBQzlCLENBQUM7SUFFRCw0Q0FBVSxHQUFWO1FBQ0UsTUFBTSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsVUFBVSxFQUFFLENBQUM7SUFDdkMsQ0FBQztJQUVDLHdDQUFNLEdBQU47UUFDSSxPQUFPLENBQUMsR0FBRyxDQUFDLGNBQWMsQ0FBQyxDQUFDO0lBQ2hDLENBQUM7SUFFRCwyQ0FBUyxHQUFUO1FBQ0ksT0FBTyxDQUFDLEdBQUcsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO0lBQ25DLENBQUM7SUFFRCx3Q0FBTSxHQUFOO1FBQ0ksT0FBTyxDQUFDLEdBQUcsQ0FBQyxjQUFjLENBQUMsQ0FBQztJQUNoQyxDQUFDO0lBRUQsdUNBQUssR0FBTCxVQUFNLElBQVM7UUFBZixpQkFzQkM7UUFyQkMsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUM7UUFDckIsSUFBTSxJQUFJLEdBQUcsSUFBSSxXQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNoRSxPQUFPLENBQUMsR0FBRyxDQUFDLGtDQUFrQyxDQUFDLENBQUM7UUFDaEQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNsQixJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUM7YUFDNUIsU0FBUyxDQUFDLFVBQUEsSUFBSTtZQUNiLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDbEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDO1lBQ3JDLGNBQWMsQ0FBQyxPQUFPLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUM1QyxjQUFjLENBQUMsT0FBTyxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDOUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBQ2xELEtBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDO1lBQ3ZCLEtBQUksQ0FBQyxvQkFBb0IsQ0FBQyxPQUFPLENBQUMsYUFBYSxFQUFFLHVCQUF1QixFQUFFLEVBQUMsT0FBTyxFQUFFLElBQUksRUFBRSxlQUFlLEVBQUUsS0FBSyxFQUFDLENBQUMsQ0FBQztZQUNuSCxpQ0FBaUM7UUFDbkMsQ0FBQztRQUNELGdEQUFnRDtRQUNoRCxVQUFBLEtBQUs7WUFDSCxLQUFJLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQztZQUN2QixtSEFBbUg7WUFDbkgsS0FBSSxDQUFDLG9CQUFvQixDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsS0FBSyxFQUFFLEtBQUssQ0FBQyxLQUFLLENBQUMsT0FBTyxFQUFFLEVBQUMsT0FBTyxFQUFFLElBQUksRUFBRSxlQUFlLEVBQUUsS0FBSyxFQUFDLENBQUMsQ0FBQTtRQUM3RyxDQUFDLENBQUMsQ0FBQTtJQUNKLENBQUM7SUFFRCwwQ0FBUSxHQUFSLFVBQVMsSUFBUztRQUFsQixpQkF1QkM7UUF0QkMsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUM7UUFDdEIseU1BQXlNO1FBQ3pNLDBLQUEwSztRQUMxSyxJQUFNLElBQUksR0FBRyxJQUFJLFdBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQ25LLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQzthQUMxQixTQUFTLENBQUMsVUFBQSxJQUFJO1lBQ2IsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUNsQixJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUM7WUFDNUIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDO1lBQzNCLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQztZQUMzQixJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUM7WUFDeEIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDO1lBQzNCLEtBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDO1lBQ3ZCLEtBQUksQ0FBQyxvQkFBb0IsQ0FBQyxPQUFPLENBQUMsZUFBZSxFQUFFLDRCQUE0QixFQUFFLEVBQUMsT0FBTyxFQUFFLElBQUksRUFBRSxlQUFlLEVBQUUsS0FBSyxFQUFDLENBQUMsQ0FBQztRQUM1SCxDQUFDO1FBQ0QsZ0RBQWdEO1FBRWhELFVBQUEsS0FBSztZQUNILEtBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDO1lBQ3ZCLHlLQUF5SztZQUN6SyxLQUFJLENBQUMsb0JBQW9CLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxLQUFLLEVBQUUsS0FBSyxDQUFDLEtBQUssQ0FBQyxPQUFPLEVBQUUsRUFBQyxPQUFPLEVBQUUsSUFBSSxFQUFFLGVBQWUsRUFBRSxLQUFLLEVBQUMsQ0FBQyxDQUFBO1FBQzlHLENBQUMsQ0FBQyxDQUFBO0lBQ04sQ0FBQztJQUVELDBDQUFRLEdBQVI7UUFDRSxNQUFNLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUNyQyxDQUFDO0lBRUQsNENBQVUsR0FBVjtRQUNFLE1BQU0sQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLFVBQVUsRUFBRSxDQUFDO0lBQ3ZDLENBQUM7SUFFTyw4Q0FBWSxHQUFwQixVQUFxQixPQUFvQjtRQUN2QyxJQUFJLFVBQVUsR0FBRyxJQUFJLE1BQU0sQ0FBQyx1SUFBdUksQ0FBQyxDQUFDO1FBQ3JLLE1BQU0sQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsR0FBRyxJQUFJLEdBQUcsRUFBQyxZQUFZLEVBQUUsSUFBSSxFQUFDLENBQUE7SUFDbkUsQ0FBQztJQUVELHlDQUFPLEdBQVAsVUFBUSxFQUFFO1FBQ1YsT0FBTyxDQUFDLEdBQUcsQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDO0lBQ3RDLENBQUM7SUFFRCwyQ0FBUyxHQUFULFVBQVUsRUFBRTtRQUNWLE9BQU8sQ0FBQyxHQUFHLENBQUMsd0JBQXdCLENBQUMsQ0FBQztJQUN4QyxDQUFDO0lBcEpMO1FBQUMsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixRQUFRLEVBQUUsVUFBVTtZQUNwQixXQUFXLEVBQUUsZ0NBQWdDO1lBQzdDLFNBQVMsRUFBRSxDQUFDLCtCQUErQixDQUFDO1NBRTdDLENBQUM7OytCQUFBO0lBZ0pGLDhCQUFDO0FBQUQsQ0EvSUEsQUErSUMsSUFBQTtBQS9JWSwrQkFBdUIsMEJBK0luQyxDQUFBIiwiZmlsZSI6ImNvbXBvbmVudHMvbmF2YmFyL3VzZXItbmF2aWdhdGlvbi5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgVmlld0NoaWxkLCBWaWV3RW5jYXBzdWxhdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBGb3JtR3JvdXAsIEZvcm1Db250cm9sLCBGb3JtQnVpbGRlciwgVmFsaWRhdG9ycyB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuaW1wb3J0IHsgQXV0aFNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9hdXRoLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBNb2RhbENvbXBvbmVudCB9IGZyb20gJ25nMi1iczMtbW9kYWwvbmcyLWJzMy1tb2RhbCc7XHJcbmltcG9ydCB7IFVzZXIgfSBmcm9tICcuLi8uLi9tb2RlbHMvdXNlcic7XHJcbmltcG9ydCB7IEVycm9yU2VydmljZSB9IGZyb20gJy4uLy4uL2Vycm9ycy9pbmRleCc7XHJcbmltcG9ydCB7IE5vdGlmaWNhdGlvbnNTZXJ2aWNlIH0gZnJvbSAnYW5ndWxhcjItbm90aWZpY2F0aW9ucyc7XHJcblxyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcclxuICBzZWxlY3RvcjogJ3VzZXItbmF2JyxcclxuICB0ZW1wbGF0ZVVybDogJ3VzZXItbmF2aWdhdGlvbi5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJ3VzZXItbmF2aWdhdGlvbi5jb21wb25lbnQuY3NzJ11cclxuICAvLywgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZVxyXG59KVxyXG5leHBvcnQgY2xhc3MgVXNlck5hdmlnYXRpb25Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG5cclxuICAvL0BWaWV3Q2hpbGQoJ21vZGFsJylcclxuICAgIC8vbW9kYWw6IE1vZGFsQ29tcG9uZW50OyAgIC8vdG8gc3VwcG9ydCBtb2RhbCBpbiBtb2RhbCAodG8gaW1wbGVtZW50OiBmb3Jnb3QgcGFzc3dvcmQpXHJcbiAgICBtb2RlbDogVXNlciA9IG5ldyBVc2VyKCcnLCAnJyk7XHJcblxyXG4gICAgaW5kZXg6IG51bWJlciA9IDA7XHJcbiAgLy8gIGJhY2tkcm9wT3B0aW9ucyA9IFt0cnVlLCBmYWxzZSwgJ3N0YXRpYyddO1xyXG4gICAgY3NzQ2xhc3M6IHN0cmluZyA9ICcnO1xyXG5cclxuICAgIGFuaW1hdGlvbjogYm9vbGVhbiA9IHRydWU7XHJcbiAgICBrZXlib2FyZDogYm9vbGVhbiA9IHRydWU7XHJcbiAgICBiYWNrZHJvcDogc3RyaW5nIHwgYm9vbGVhbiA9IHRydWU7XHJcbiAgICBpc0xvYWRpbmcgPSBmYWxzZTtcclxuIC8vICAgY3NzOiBib29sZWFuID0gZmFsc2U7XHJcblxyXG4gIHB1YmxpYyBsb2dpbkZvcm06IEZvcm1Hcm91cDtcclxuICBwdWJsaWMgcmVnaXN0ZXJGb3JtOiBGb3JtR3JvdXA7XHJcbiAgcHVibGljIHN1Ym1pdHRlZDogYm9vbGVhbiA9IGZhbHNlO1xyXG4gIHB1YmxpYyB1c2VyVHlwZXMgPSBbXHJcbiAgICB7IHZhbHVlOiAndXpzYWtvdmFzJywgZGlzcGxheTogJ1XFvnNha292YXMnIH0sXHJcbiAgICB7IHZhbHVlOiAnZGl6YWluZXJpcycsIGRpc3BsYXk6ICdEaXphaW5lcmlzJyB9XHJcbl07XHJcbiAgcHVibGljIG9wdGlvbnMgPSB7XHJcbiAgICAgIHBvc2l0aW9uOiBbXCJ0b3BcIixcInJpZ2h0XCJdXHJcbiAgICB9O1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJvdXRlcjogUm91dGVyLCBcclxuICAgICAgICAgICAgICBwcml2YXRlIGF1dGhTZXJ2aWNlOiBBdXRoU2VydmljZSwgXHJcbiAgICAgICAgICAgICAgcHJpdmF0ZSBmYjogRm9ybUJ1aWxkZXIsIFxyXG4gICAgICAgICAgICAgIHByaXZhdGUgZXJyb3JTZXJ2aWNlOiBFcnJvclNlcnZpY2UsXHJcbiAgICAgICAgICAgICAgcHJpdmF0ZSBub3RpZmljYXRpb25zU2VydmljZTogTm90aWZpY2F0aW9uc1NlcnZpY2UpIHsgfVxyXG5cclxuICBuZ09uSW5pdCgpIHsgXHJcbiAgICB0aGlzLmxvZ2luRm9ybSA9IHRoaXMuZmIuZ3JvdXAoe1xyXG4gICAgICAvL2VtYWlsOiBbJycsIFZhbGlkYXRvcnMuY29tcG9zZShbVmFsaWRhdG9ycy5yZXF1aXJlZCwgdGhpcy5pc1ZhbGlkRW1haWxdKV0sXHJcbiAgICAgIG5pY2tOYW1lOiBbJycsIFZhbGlkYXRvcnMucmVxdWlyZWRdLFxyXG4gICAgICBwYXNzd29yZDogWycnLCBWYWxpZGF0b3JzLnJlcXVpcmVkXVxyXG4gICAgfSk7XHJcblxyXG4gICAgdGhpcy5yZWdpc3RlckZvcm0gPSB0aGlzLmZiLmdyb3VwKHtcclxuICAgICAgZmlyc3ROYW1lOiBbJycsIFZhbGlkYXRvcnMucmVxdWlyZWRdLFxyXG4gICAgICBsYXN0TmFtZTogWycnLCBWYWxpZGF0b3JzLnJlcXVpcmVkXSxcclxuICAgICAgbmlja05hbWU6IFsnJywgVmFsaWRhdG9ycy5yZXF1aXJlZF0sXHJcbiAgICAgIGVtYWlsOiBbJycsIFZhbGlkYXRvcnMuY29tcG9zZShbVmFsaWRhdG9ycy5yZXF1aXJlZCwgdGhpcy5pc1ZhbGlkRW1haWxdKV0sXHJcbiAgICAgIHBhc3N3b3JkOiBbJycsIFZhbGlkYXRvcnMucmVxdWlyZWRdLFxyXG4gICAgICB1c2VyVHlwZTogW3RoaXMudXNlclR5cGVzWzBdLnZhbHVlLCBWYWxpZGF0b3JzLnJlcXVpcmVkXVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBsb2dvdXQoKSB7XHJcbiAgICBzZXNzaW9uU3RvcmFnZS5jbGVhcigpO1xyXG4gICAgY29uc29sZS5sb2coJ3Nlc3Npb25TdG9yYWdlIGNsZWFyZWQsIGxvZ2dpbmcgb3V0Li4uJyk7XHJcbiAgICB0aGlzLm5vdGlmaWNhdGlvbnNTZXJ2aWNlLmluZm8oJ0F0c2lqdW5naWFtYS4uLicsICdTxJdrbWluZ2FpIGF0c2lqdW5nxJd0ZScsIHt0aW1lT3V0OiAzMDAwLCBzaG93UHJvZ3Jlc3NCYXI6IGZhbHNlfSk7XHJcbiAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJy8nXSk7XHJcbiAgfVxyXG5cclxuICBpc0xvZ2dlZEluKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuYXV0aFNlcnZpY2UuaXNMb2dnZWRJbigpO1xyXG4gIH1cclxuXHJcbiAgICBjbG9zZWQoKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ01vZGFsIGNsb3NlZCcpO1xyXG4gICAgfVxyXG5cclxuICAgIGRpc21pc3NlZCgpIHtcclxuICAgICAgICBjb25zb2xlLmxvZygnTW9kYWwgZGlzbWlzc2VkJyk7XHJcbiAgICB9XHJcblxyXG4gICAgb3BlbmVkKCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdNb2RhbCBvcGVuZWQnKTtcclxuICAgIH1cclxuXHJcbiAgICBsb2dpbihmb3JtOiBhbnkpIHtcclxuICAgICAgdGhpcy5pc0xvYWRpbmcgPSB0cnVlO1xyXG4gICAgICAgY29uc3QgdXNlciA9IG5ldyBVc2VyKGZvcm0ubmlja05hbWUudmFsdWUsIGZvcm0ucGFzc3dvcmQudmFsdWUpO1xyXG4gICAgICAgY29uc29sZS5sb2coJ3VzZXItbmF2aWdhdGlvbiBsb2dpbiB1c2VyIGNvbnN0Jyk7XHJcbiAgICAgICBjb25zb2xlLmxvZyh1c2VyKTtcclxuICAgICAgIHRoaXMuYXV0aFNlcnZpY2Uuc2lnbmluKHVzZXIpXHJcbiAgICAgICAuc3Vic2NyaWJlKGRhdGEgPT4ge1xyXG4gICAgICAgICBjb25zb2xlLmxvZyhkYXRhKTtcclxuICAgICAgICAgY29uc29sZS5sb2coJ1Nla21pbmdhaSBwcmlzaWp1bmd0YScpO1xyXG4gICAgICAgICBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKCd0b2tlbicsIGRhdGEudG9rZW4pO1xyXG4gICAgICAgICBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKCd1c2VySWQnLCBkYXRhLnVzZXJJZCk7XHJcbiAgICAgICAgIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0oJ3VzZXJUeXBlJywgZGF0YS51c2VyVHlwZSk7XHJcbiAgICAgICAgIHRoaXMuaXNMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgIHRoaXMubm90aWZpY2F0aW9uc1NlcnZpY2Uuc3VjY2VzcygnUHJpc2lqdW5ndGEnLCAnU8SXa21pbmdhaSBwcmlzaWp1bmd0YScsIHt0aW1lT3V0OiAzMDAwLCBzaG93UHJvZ3Jlc3NCYXI6IGZhbHNlfSk7XHJcbiAgICAgICAgIC8vdGhpcy5yb3V0ZXIubmF2aWdhdGVCeVVybCgnLycpO1xyXG4gICAgICAgfSxcclxuICAgICAgIC8vZXJyb3IgPT4gdGhpcy5lcnJvclNlcnZpY2UuaGFuZGxlRXJyb3IoZXJyb3IpKVxyXG4gICAgICAgZXJyb3IgPT4ge1xyXG4gICAgICAgICB0aGlzLmlzTG9hZGluZyA9IGZhbHNlOyBcclxuICAgICAgICAgLy90aGlzLm5vdGlmaWNhdGlvbnNTZXJ2aWNlLmVycm9yKCdLbGFpZGEnLCAnxK52eWtvIGtsYWlkYSBwcmlzaWp1bmdpYW50Jywge3RpbWVPdXQ6IDMwMDAsIHNob3dQcm9ncmVzc0JhcjogZmFsc2V9KSBcclxuICAgICAgICAgdGhpcy5ub3RpZmljYXRpb25zU2VydmljZS5lcnJvcihlcnJvci50aXRsZSwgZXJyb3IuZXJyb3IubWVzc2FnZSwge3RpbWVPdXQ6IDMwMDAsIHNob3dQcm9ncmVzc0JhcjogZmFsc2V9KVxyXG4gICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIHJlZ2lzdGVyKGZvcm06IGFueSkge1xyXG4gICAgICB0aGlzLmlzTG9hZGluZyA9IHRydWU7XHJcbiAgICAgIC8vY29uc3QgdXNlciA9IG5ldyBVc2VyKHRoaXMucmVnaXN0ZXJGb3JtLnZhbHVlLmVtYWlsLCB0aGlzLnJlZ2lzdGVyRm9ybS52YWx1ZS5wYXNzd29yZCwgdGhpcy5yZWdpc3RlckZvcm0udmFsdWUudXNlclR5cGUgLHRoaXMucmVnaXN0ZXJGb3JtLnZhbHVlLmZpcnN0TmFtZSwgdGhpcy5yZWdpc3RlckZvcm0udmFsdWUubGFzdE5hbWUsIDAsIDAsIDApO1xyXG4gICAgICAvL2NvbnN0IHVzZXIgPSBuZXcgVXNlcihmb3JtLm5pY2tOYW1lLnZhbHVlLCBmb3JtLnBhc3N3b3JkLnZhbHVlLCB0aGlzLnJlZ2lzdGVyRm9ybS52YWx1ZS51c2VyVHlwZSwgZm9ybS5maXJzdE5hbWUudmFsdWUsIGZvcm0ubGFzdE5hbWUudmFsdWUsIGZvcm0uZW1haWwudmFsdWUsIDAsIDAsIDApO1xyXG4gICAgICBjb25zdCB1c2VyID0gbmV3IFVzZXIoZm9ybS5uaWNrTmFtZS52YWx1ZSwgZm9ybS5wYXNzd29yZC52YWx1ZSwgdGhpcy5yZWdpc3RlckZvcm0udmFsdWUudXNlclR5cGUsIGZvcm0uZmlyc3ROYW1lLnZhbHVlLCBmb3JtLmxhc3ROYW1lLnZhbHVlLCBmb3JtLmVtYWlsLnZhbHVlLCAwLCAwKTtcclxuICAgICAgICB0aGlzLmF1dGhTZXJ2aWNlLnNpZ251cCh1c2VyKVxyXG4gICAgICAgICAgLnN1YnNjcmliZShkYXRhID0+IHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZGF0YSk7XHJcbiAgICAgICAgICAgIGZvcm0uZmlyc3ROYW1lLnZhbHVlID0gbnVsbDtcclxuICAgICAgICAgICAgZm9ybS5sYXN0TmFtZS52YWx1ZSA9IG51bGw7XHJcbiAgICAgICAgICAgIGZvcm0ubmlja05hbWUudmFsdWUgPSBudWxsO1xyXG4gICAgICAgICAgICBmb3JtLmVtYWlsLnZhbHVlID0gbnVsbDtcclxuICAgICAgICAgICAgZm9ybS5wYXNzd29yZC52YWx1ZSA9IG51bGw7XHJcbiAgICAgICAgICAgIHRoaXMuaXNMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHRoaXMubm90aWZpY2F0aW9uc1NlcnZpY2Uuc3VjY2VzcygnVcW+cmVnaXN0cnVvdGEnLCAnU8SXa21pbmdhaSB1xb5zaXJlZ2lzdHJhdm90ZScsIHt0aW1lT3V0OiAzMDAwLCBzaG93UHJvZ3Jlc3NCYXI6IGZhbHNlfSk7XHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgLy9lcnJvciA9PiB0aGlzLmVycm9yU2VydmljZS5oYW5kbGVFcnJvcihlcnJvcikpXHJcbiAgICAgICAgICBcclxuICAgICAgICAgIGVycm9yID0+IHsgXHJcbiAgICAgICAgICAgIHRoaXMuaXNMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgIC8vdGhpcy5ub3RpZmljYXRpb25zU2VydmljZS5lcnJvcignS2xhaWRhIHJlZ2lzdHJ1b2phbnRpcycsICdUaW5rYW1haSB1xb5waWxkeWtpdGUgdmlzdXMgbGF1a3VzLiBQYXNpcmlua2l0ZSB1bmlrYWzFsyBzbGFweXZhcmTErycsIHt0aW1lT3V0OiAzMDAwLCBzaG93UHJvZ3Jlc3NCYXI6IGZhbHNlfSlcclxuICAgICAgICAgICAgdGhpcy5ub3RpZmljYXRpb25zU2VydmljZS5lcnJvcihlcnJvci50aXRsZSwgZXJyb3IuZXJyb3IubWVzc2FnZSwge3RpbWVPdXQ6IDMwMDAsIHNob3dQcm9ncmVzc0JhcjogZmFsc2V9KVxyXG4gICAgICAgIH0pIFxyXG4gICAgfVxyXG5cclxuICAgIGlzQ2xpZW50KCkge1xyXG4gICAgICByZXR1cm4gdGhpcy5hdXRoU2VydmljZS5pc0NsaWVudCgpO1xyXG4gICAgfVxyXG5cclxuICAgIGlzRGVzaWduZXIoKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLmF1dGhTZXJ2aWNlLmlzRGVzaWduZXIoKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGlzVmFsaWRFbWFpbChjb250cm9sOiBGb3JtQ29udHJvbCk6IHtbczogc3RyaW5nXTogYm9vbGVhbn0ge1xyXG4gICAgICBsZXQgZW1haWxSZWdleCA9IG5ldyBSZWdFeHAoXCJbYS16MC05ISMkJSYnKisvPT9eX2B7fH1+LV0rKD86XFwuW2EtejAtOSEjJCUmJyorLz0/Xl9ge3x9fi1dKykqQCg/OlthLXowLTldKD86W2EtejAtOS1dKlthLXowLTldKT9cXC4pK1thLXowLTldKD86W2EtejAtOS1dKlthLXowLTldKT9cIik7IFxyXG4gICAgICByZXR1cm4gZW1haWxSZWdleC50ZXN0KGNvbnRyb2wudmFsdWUpID8gbnVsbCA6IHtpbnZhbGlkRW1haWw6IHRydWV9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGNyZWF0ZWQoZXYpIHtcclxuICAgICAgY29uc29sZS5sb2coJ25vdGlmaWNhdGlvbiBjcmVhdGVkJyk7XHJcbiAgICB9XHJcblxyXG4gICAgZGVzdHJveWVkKGV2KSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKCdub3RpZmljYXRpb24gZGVzdHJveWVkJyk7XHJcbiAgICB9XHJcblxyXG59Il19
