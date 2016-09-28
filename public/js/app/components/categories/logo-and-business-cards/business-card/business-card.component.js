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
var BusinessCardComponent = (function () {
    function BusinessCardComponent(fb) {
        this.fb = fb;
        this.submitted = false;
    }
    BusinessCardComponent.prototype.ngOnInit = function () {
        this.myForm = this.fb.group({
            logoName: ['', forms_1.Validators.required],
            description: [''],
            additionalInfo: ['']
        });
    };
    BusinessCardComponent.prototype.save = function (model, isValid) {
        this.submitted = true; // set form submit to true
        // check if model is valid
        // if valid, call API to save customer
        console.log(model);
        console.log(isValid);
    };
    BusinessCardComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            templateUrl: 'business-card.component.html',
            styleUrls: ['business-card.component.css']
        }), 
        __metadata('design:paramtypes', [forms_1.FormBuilder])
    ], BusinessCardComponent);
    return BusinessCardComponent;
}());
exports.BusinessCardComponent = BusinessCardComponent;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvY2F0ZWdvcmllcy9sb2dvLWFuZC1idXNpbmVzcy1jYXJkcy9idXNpbmVzcy1jYXJkL2J1c2luZXNzLWNhcmQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBa0MsZUFBZSxDQUFDLENBQUE7QUFDbEQsc0JBQWdFLGdCQUFnQixDQUFDLENBQUE7QUFRakY7SUFHRSwrQkFBb0IsRUFBZTtRQUFmLE9BQUUsR0FBRixFQUFFLENBQWE7UUFENUIsY0FBUyxHQUFZLEtBQUssQ0FBQztJQUNLLENBQUM7SUFFeEMsd0NBQVEsR0FBUjtRQUNFLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7WUFDMUIsUUFBUSxFQUFFLENBQUMsRUFBRSxFQUFFLGtCQUFVLENBQUMsUUFBUSxDQUFDO1lBQ25DLFdBQVcsRUFBRSxDQUFDLEVBQUUsQ0FBQztZQUNqQixjQUFjLEVBQUUsQ0FBQyxFQUFFLENBQUM7U0FDckIsQ0FBQyxDQUFDO0lBQ0osQ0FBQztJQUVELG9DQUFJLEdBQUosVUFBSyxLQUFLLEVBQUUsT0FBZ0I7UUFDdkIsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsQ0FBQywwQkFBMEI7UUFFakQsMEJBQTBCO1FBQzFCLHNDQUFzQztRQUN0QyxPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ25CLE9BQU8sQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDekIsQ0FBQztJQXpCTDtRQUFDLGdCQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsV0FBVyxFQUFFLDhCQUE4QjtZQUMzQyxTQUFTLEVBQUUsQ0FBQyw2QkFBNkIsQ0FBQztTQUMzQyxDQUFDOzs2QkFBQTtJQXNCRiw0QkFBQztBQUFELENBckJBLEFBcUJDLElBQUE7QUFyQlksNkJBQXFCLHdCQXFCakMsQ0FBQSIsImZpbGUiOiJjb21wb25lbnRzL2NhdGVnb3JpZXMvbG9nby1hbmQtYnVzaW5lc3MtY2FyZHMvYnVzaW5lc3MtY2FyZC9idXNpbmVzcy1jYXJkLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEZvcm1Hcm91cCwgRm9ybUNvbnRyb2wsIEZvcm1CdWlsZGVyLCBWYWxpZGF0b3JzIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5cclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIG1vZHVsZUlkOiBtb2R1bGUuaWQsXHJcbiAgdGVtcGxhdGVVcmw6ICdidXNpbmVzcy1jYXJkLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnYnVzaW5lc3MtY2FyZC5jb21wb25lbnQuY3NzJ11cclxufSlcclxuZXhwb3J0IGNsYXNzIEJ1c2luZXNzQ2FyZENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgcHVibGljIG15Rm9ybTogRm9ybUdyb3VwO1xyXG4gIHB1YmxpYyBzdWJtaXR0ZWQ6IGJvb2xlYW4gPSBmYWxzZTtcclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGZiOiBGb3JtQnVpbGRlcikgeyB9XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG4gICAgdGhpcy5teUZvcm0gPSB0aGlzLmZiLmdyb3VwKHtcclxuICAgICAgbG9nb05hbWU6IFsnJywgVmFsaWRhdG9ycy5yZXF1aXJlZF0sXHJcbiAgICAgIGRlc2NyaXB0aW9uOiBbJyddLFxyXG4gICAgICBhZGRpdGlvbmFsSW5mbzogWycnXVxyXG4gICAgfSk7XHJcbiAgIH1cclxuXHJcbiAgIHNhdmUobW9kZWwsIGlzVmFsaWQ6IGJvb2xlYW4pIHtcclxuICAgICAgICB0aGlzLnN1Ym1pdHRlZCA9IHRydWU7IC8vIHNldCBmb3JtIHN1Ym1pdCB0byB0cnVlXHJcblxyXG4gICAgICAgIC8vIGNoZWNrIGlmIG1vZGVsIGlzIHZhbGlkXHJcbiAgICAgICAgLy8gaWYgdmFsaWQsIGNhbGwgQVBJIHRvIHNhdmUgY3VzdG9tZXJcclxuICAgICAgICBjb25zb2xlLmxvZyhtb2RlbCk7XHJcbiAgICAgICAgY29uc29sZS5sb2coaXNWYWxpZCk7XHJcbiAgICB9XHJcbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
