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
var designer_1 = require('../../models/designer');
var auth_service_1 = require('../../services/auth.service');
var RegisterComponent = (function () {
    function RegisterComponent(fb, authService) {
        this.fb = fb;
        this.authService = authService;
        this.submitted = false;
    }
    RegisterComponent.prototype.ngOnInit = function () {
        this.myForm = this.fb.group({
            firstName: ['', forms_1.Validators.required],
            lastName: ['', forms_1.Validators.required],
            email: ['', forms_1.Validators.compose([forms_1.Validators.required, this.isValidEmail])],
            password: ['', forms_1.Validators.required]
        });
    };
    RegisterComponent.prototype.register = function (model) {
        var designer = new designer_1.Designer(this.myForm.value.email, this.myForm.value.password, this.myForm.value.firstName, this.myForm.value.lastName);
        this.authService.signup(designer)
            .subscribe(function (data) {
            console.log(data);
        }, function (error) { return console.error(error); });
    };
    RegisterComponent.prototype.isValidEmail = function (control) {
        var emailRegex = new RegExp("[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?");
        return emailRegex.test(control.value) ? null : { invalidEmail: true };
    };
    RegisterComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'register',
            templateUrl: 'register.component.html'
        }), 
        __metadata('design:paramtypes', [forms_1.FormBuilder, auth_service_1.AuthService])
    ], RegisterComponent);
    return RegisterComponent;
}());
exports.RegisterComponent = RegisterComponent;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvcmVnaXN0ZXIvcmVnaXN0ZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBa0MsZUFBZSxDQUFDLENBQUE7QUFDbEQsc0JBQWdFLGdCQUFnQixDQUFDLENBQUE7QUFDakYseUJBQXlCLHVCQUF1QixDQUFDLENBQUE7QUFDakQsNkJBQTRCLDZCQUE2QixDQUFDLENBQUE7QUFRMUQ7SUFHRSwyQkFBb0IsRUFBZSxFQUFVLFdBQXdCO1FBQWpELE9BQUUsR0FBRixFQUFFLENBQWE7UUFBVSxnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUQ5RCxjQUFTLEdBQVksS0FBSyxDQUFDO0lBQ3VDLENBQUM7SUFFMUUsb0NBQVEsR0FBUjtRQUNFLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7WUFDMUIsU0FBUyxFQUFFLENBQUMsRUFBRSxFQUFFLGtCQUFVLENBQUMsUUFBUSxDQUFDO1lBQ3BDLFFBQVEsRUFBRSxDQUFDLEVBQUUsRUFBRSxrQkFBVSxDQUFDLFFBQVEsQ0FBQztZQUNuQyxLQUFLLEVBQUUsQ0FBQyxFQUFFLEVBQUUsa0JBQVUsQ0FBQyxPQUFPLENBQUMsQ0FBQyxrQkFBVSxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQztZQUN6RSxRQUFRLEVBQUUsQ0FBQyxFQUFFLEVBQUUsa0JBQVUsQ0FBQyxRQUFRLENBQUM7U0FDcEMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVELG9DQUFRLEdBQVIsVUFBUyxLQUFLO1FBQ1IsSUFBTSxRQUFRLEdBQUcsSUFBSSxtQkFBUSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQzVJLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQzthQUM5QixTQUFTLENBQUMsVUFBQSxJQUFJO1lBQ2IsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNwQixDQUFDLEVBQ0QsVUFBQSxLQUFLLElBQUksT0FBQSxPQUFPLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxFQUFwQixDQUFvQixDQUFDLENBQUE7SUFDcEMsQ0FBQztJQUVPLHdDQUFZLEdBQXBCLFVBQXFCLE9BQW9CO1FBQ3ZDLElBQUksVUFBVSxHQUFHLElBQUksTUFBTSxDQUFDLHVJQUF1SSxDQUFDLENBQUM7UUFDckssTUFBTSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxHQUFHLElBQUksR0FBRyxFQUFDLFlBQVksRUFBRSxJQUFJLEVBQUMsQ0FBQTtJQUNuRSxDQUFDO0lBL0JQO1FBQUMsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixRQUFRLEVBQUUsVUFBVTtZQUNwQixXQUFXLEVBQUUseUJBQXlCO1NBQ3ZDLENBQUM7O3lCQUFBO0lBNEJFLHdCQUFDO0FBQUQsQ0EzQkosQUEyQkssSUFBQTtBQTNCUSx5QkFBaUIsb0JBMkJ6QixDQUFBIiwiZmlsZSI6ImNvbXBvbmVudHMvcmVnaXN0ZXIvcmVnaXN0ZXIuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgRm9ybUdyb3VwLCBGb3JtQ29udHJvbCwgRm9ybUJ1aWxkZXIsIFZhbGlkYXRvcnMgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcbmltcG9ydCB7IERlc2lnbmVyIH0gZnJvbSAnLi4vLi4vbW9kZWxzL2Rlc2lnbmVyJztcclxuaW1wb3J0IHsgQXV0aFNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9hdXRoLnNlcnZpY2UnO1xyXG5cclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIG1vZHVsZUlkOiBtb2R1bGUuaWQsXHJcbiAgc2VsZWN0b3I6ICdyZWdpc3RlcicsXHJcbiAgdGVtcGxhdGVVcmw6ICdyZWdpc3Rlci5jb21wb25lbnQuaHRtbCdcclxufSlcclxuZXhwb3J0IGNsYXNzIFJlZ2lzdGVyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuICAgcHVibGljIG15Rm9ybTogRm9ybUdyb3VwO1xyXG4gIHB1YmxpYyBzdWJtaXR0ZWQ6IGJvb2xlYW4gPSBmYWxzZTtcclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGZiOiBGb3JtQnVpbGRlciwgcHJpdmF0ZSBhdXRoU2VydmljZTogQXV0aFNlcnZpY2UpIHsgfVxyXG5cclxuICBuZ09uSW5pdCgpIHsgXHJcbiAgICB0aGlzLm15Rm9ybSA9IHRoaXMuZmIuZ3JvdXAoe1xyXG4gICAgICBmaXJzdE5hbWU6IFsnJywgVmFsaWRhdG9ycy5yZXF1aXJlZF0sXHJcbiAgICAgIGxhc3ROYW1lOiBbJycsIFZhbGlkYXRvcnMucmVxdWlyZWRdLFxyXG4gICAgICBlbWFpbDogWycnLCBWYWxpZGF0b3JzLmNvbXBvc2UoW1ZhbGlkYXRvcnMucmVxdWlyZWQsIHRoaXMuaXNWYWxpZEVtYWlsXSldLFxyXG4gICAgICBwYXNzd29yZDogWycnLCBWYWxpZGF0b3JzLnJlcXVpcmVkXVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICByZWdpc3Rlcihtb2RlbCkge1xyXG4gICAgICAgIGNvbnN0IGRlc2lnbmVyID0gbmV3IERlc2lnbmVyKHRoaXMubXlGb3JtLnZhbHVlLmVtYWlsLCB0aGlzLm15Rm9ybS52YWx1ZS5wYXNzd29yZCwgdGhpcy5teUZvcm0udmFsdWUuZmlyc3ROYW1lLCB0aGlzLm15Rm9ybS52YWx1ZS5sYXN0TmFtZSk7XHJcbiAgICAgICAgdGhpcy5hdXRoU2VydmljZS5zaWdudXAoZGVzaWduZXIpXHJcbiAgICAgICAgICAuc3Vic2NyaWJlKGRhdGEgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhkYXRhKTtcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICBlcnJvciA9PiBjb25zb2xlLmVycm9yKGVycm9yKSlcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGlzVmFsaWRFbWFpbChjb250cm9sOiBGb3JtQ29udHJvbCk6IHtbczogc3RyaW5nXTogYm9vbGVhbn0ge1xyXG4gICAgICBsZXQgZW1haWxSZWdleCA9IG5ldyBSZWdFeHAoXCJbYS16MC05ISMkJSYnKisvPT9eX2B7fH1+LV0rKD86XFwuW2EtejAtOSEjJCUmJyorLz0/Xl9ge3x9fi1dKykqQCg/OlthLXowLTldKD86W2EtejAtOS1dKlthLXowLTldKT9cXC4pK1thLXowLTldKD86W2EtejAtOS1dKlthLXowLTldKT9cIik7IFxyXG4gICAgICByZXR1cm4gZW1haWxSZWdleC50ZXN0KGNvbnRyb2wudmFsdWUpID8gbnVsbCA6IHtpbnZhbGlkRW1haWw6IHRydWV9XHJcbiAgICAgIH1cclxuICAgIH1cclxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
