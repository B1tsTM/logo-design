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
var LogoComponent = (function () {
    function LogoComponent(fb) {
        this.fb = fb;
        this.submitted = false;
    }
    LogoComponent.prototype.ngOnInit = function () {
        // this.myForm = new FormGroup({
        //    firstName: new FormControl()
        // });
        this.myForm = this.fb.group({
            firstName: ['', forms_1.Validators.required]
        });
    };
    LogoComponent.prototype.save = function (model, isValid) {
        this.submitted = true; // set form submit to true
        // check if model is valid
        // if valid, call API to save customer
        console.log(model);
        console.log(isValid);
    };
    LogoComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            templateUrl: 'logo.component.html',
            styleUrls: ['logo.component.css']
        }), 
        __metadata('design:paramtypes', [forms_1.FormBuilder])
    ], LogoComponent);
    return LogoComponent;
}());
exports.LogoComponent = LogoComponent;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvY2F0ZWdvcmllcy9sb2dvLWFuZC1idXNpbmVzcy1jYXJkcy9sb2dvL2xvZ28uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBa0MsZUFBZSxDQUFDLENBQUE7QUFDbEQsc0JBQWdFLGdCQUFnQixDQUFDLENBQUE7QUFPakY7SUFHRSx1QkFBb0IsRUFBZTtRQUFmLE9BQUUsR0FBRixFQUFFLENBQWE7UUFENUIsY0FBUyxHQUFZLEtBQUssQ0FBQztJQUNLLENBQUM7SUFFeEMsZ0NBQVEsR0FBUjtRQUNFLGdDQUFnQztRQUNoQyxrQ0FBa0M7UUFDbEMsTUFBTTtRQUNOLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7WUFDMUIsU0FBUyxFQUFFLENBQUMsRUFBRSxFQUFFLGtCQUFVLENBQUMsUUFBUSxDQUFDO1NBQ3JDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFRCw0QkFBSSxHQUFKLFVBQUssS0FBSyxFQUFFLE9BQWdCO1FBQ3RCLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLENBQUMsMEJBQTBCO1FBRWpELDBCQUEwQjtRQUMxQixzQ0FBc0M7UUFDdEMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNuQixPQUFPLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQ3pCLENBQUM7SUExQkw7UUFBQyxnQkFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFdBQVcsRUFBRSxxQkFBcUI7WUFDbEMsU0FBUyxFQUFFLENBQUMsb0JBQW9CLENBQUM7U0FDbEMsQ0FBQzs7cUJBQUE7SUF1QkYsb0JBQUM7QUFBRCxDQXRCQSxBQXNCQyxJQUFBO0FBdEJZLHFCQUFhLGdCQXNCekIsQ0FBQSIsImZpbGUiOiJjb21wb25lbnRzL2NhdGVnb3JpZXMvbG9nby1hbmQtYnVzaW5lc3MtY2FyZHMvbG9nby9sb2dvLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEZvcm1Hcm91cCwgRm9ybUNvbnRyb2wsIEZvcm1CdWlsZGVyLCBWYWxpZGF0b3JzIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcclxuICB0ZW1wbGF0ZVVybDogJ2xvZ28uY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWydsb2dvLmNvbXBvbmVudC5jc3MnXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgTG9nb0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgcHVibGljIG15Rm9ybTogRm9ybUdyb3VwO1xyXG4gIHB1YmxpYyBzdWJtaXR0ZWQ6IGJvb2xlYW4gPSBmYWxzZTtcclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGZiOiBGb3JtQnVpbGRlcikgeyB9XHJcblxyXG4gIG5nT25Jbml0KCkgeyBcclxuICAgIC8vIHRoaXMubXlGb3JtID0gbmV3IEZvcm1Hcm91cCh7XHJcbiAgICAvLyAgICBmaXJzdE5hbWU6IG5ldyBGb3JtQ29udHJvbCgpXHJcbiAgICAvLyB9KTtcclxuICAgIHRoaXMubXlGb3JtID0gdGhpcy5mYi5ncm91cCh7XHJcbiAgICAgIGZpcnN0TmFtZTogWycnLCBWYWxpZGF0b3JzLnJlcXVpcmVkXVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBzYXZlKG1vZGVsLCBpc1ZhbGlkOiBib29sZWFuKSB7XHJcbiAgICAgICAgdGhpcy5zdWJtaXR0ZWQgPSB0cnVlOyAvLyBzZXQgZm9ybSBzdWJtaXQgdG8gdHJ1ZVxyXG5cclxuICAgICAgICAvLyBjaGVjayBpZiBtb2RlbCBpcyB2YWxpZFxyXG4gICAgICAgIC8vIGlmIHZhbGlkLCBjYWxsIEFQSSB0byBzYXZlIGN1c3RvbWVyXHJcbiAgICAgICAgY29uc29sZS5sb2cobW9kZWwpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGlzVmFsaWQpO1xyXG4gICAgfVxyXG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
