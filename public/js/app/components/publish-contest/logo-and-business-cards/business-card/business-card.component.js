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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvcHVibGlzaC1jb250ZXN0L2xvZ28tYW5kLWJ1c2luZXNzLWNhcmRzL2J1c2luZXNzLWNhcmQvYnVzaW5lc3MtY2FyZC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUFrQyxlQUFlLENBQUMsQ0FBQTtBQUNsRCxzQkFBZ0UsZ0JBQWdCLENBQUMsQ0FBQTtBQVFqRjtJQUdFLCtCQUFvQixFQUFlO1FBQWYsT0FBRSxHQUFGLEVBQUUsQ0FBYTtRQUQ1QixjQUFTLEdBQVksS0FBSyxDQUFDO0lBQ0ssQ0FBQztJQUV4Qyx3Q0FBUSxHQUFSO1FBQ0UsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQztZQUMxQixRQUFRLEVBQUUsQ0FBQyxFQUFFLEVBQUUsa0JBQVUsQ0FBQyxRQUFRLENBQUM7WUFDbkMsV0FBVyxFQUFFLENBQUMsRUFBRSxDQUFDO1lBQ2pCLGNBQWMsRUFBRSxDQUFDLEVBQUUsQ0FBQztTQUNyQixDQUFDLENBQUM7SUFDSixDQUFDO0lBRUQsb0NBQUksR0FBSixVQUFLLEtBQUssRUFBRSxPQUFnQjtRQUN2QixJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxDQUFDLDBCQUEwQjtRQUVqRCwwQkFBMEI7UUFDMUIsc0NBQXNDO1FBQ3RDLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDbkIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUN6QixDQUFDO0lBekJMO1FBQUMsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixXQUFXLEVBQUUsOEJBQThCO1lBQzNDLFNBQVMsRUFBRSxDQUFDLDZCQUE2QixDQUFDO1NBQzNDLENBQUM7OzZCQUFBO0lBc0JGLDRCQUFDO0FBQUQsQ0FyQkEsQUFxQkMsSUFBQTtBQXJCWSw2QkFBcUIsd0JBcUJqQyxDQUFBIiwiZmlsZSI6ImNvbXBvbmVudHMvcHVibGlzaC1jb250ZXN0L2xvZ28tYW5kLWJ1c2luZXNzLWNhcmRzL2J1c2luZXNzLWNhcmQvYnVzaW5lc3MtY2FyZC5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBGb3JtR3JvdXAsIEZvcm1Db250cm9sLCBGb3JtQnVpbGRlciwgVmFsaWRhdG9ycyB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuXHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBtb2R1bGVJZDogbW9kdWxlLmlkLFxyXG4gIHRlbXBsYXRlVXJsOiAnYnVzaW5lc3MtY2FyZC5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJ2J1c2luZXNzLWNhcmQuY29tcG9uZW50LmNzcyddXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBCdXNpbmVzc0NhcmRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gIHB1YmxpYyBteUZvcm06IEZvcm1Hcm91cDtcclxuICBwdWJsaWMgc3VibWl0dGVkOiBib29sZWFuID0gZmFsc2U7XHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBmYjogRm9ybUJ1aWxkZXIpIHsgfVxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICAgIHRoaXMubXlGb3JtID0gdGhpcy5mYi5ncm91cCh7XHJcbiAgICAgIGxvZ29OYW1lOiBbJycsIFZhbGlkYXRvcnMucmVxdWlyZWRdLFxyXG4gICAgICBkZXNjcmlwdGlvbjogWycnXSxcclxuICAgICAgYWRkaXRpb25hbEluZm86IFsnJ11cclxuICAgIH0pO1xyXG4gICB9XHJcblxyXG4gICBzYXZlKG1vZGVsLCBpc1ZhbGlkOiBib29sZWFuKSB7XHJcbiAgICAgICAgdGhpcy5zdWJtaXR0ZWQgPSB0cnVlOyAvLyBzZXQgZm9ybSBzdWJtaXQgdG8gdHJ1ZVxyXG5cclxuICAgICAgICAvLyBjaGVjayBpZiBtb2RlbCBpcyB2YWxpZFxyXG4gICAgICAgIC8vIGlmIHZhbGlkLCBjYWxsIEFQSSB0byBzYXZlIGN1c3RvbWVyXHJcbiAgICAgICAgY29uc29sZS5sb2cobW9kZWwpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGlzVmFsaWQpO1xyXG4gICAgfVxyXG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
