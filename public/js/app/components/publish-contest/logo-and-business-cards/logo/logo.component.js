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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvcHVibGlzaC1jb250ZXN0L2xvZ28tYW5kLWJ1c2luZXNzLWNhcmRzL2xvZ28vbG9nby5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUFrQyxlQUFlLENBQUMsQ0FBQTtBQUNsRCxzQkFBZ0UsZ0JBQWdCLENBQUMsQ0FBQTtBQU9qRjtJQUdFLHVCQUFvQixFQUFlO1FBQWYsT0FBRSxHQUFGLEVBQUUsQ0FBYTtRQUQ1QixjQUFTLEdBQVksS0FBSyxDQUFDO0lBQ0ssQ0FBQztJQUV4QyxnQ0FBUSxHQUFSO1FBQ0UsZ0NBQWdDO1FBQ2hDLGtDQUFrQztRQUNsQyxNQUFNO1FBQ04sSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQztZQUMxQixTQUFTLEVBQUUsQ0FBQyxFQUFFLEVBQUUsa0JBQVUsQ0FBQyxRQUFRLENBQUM7U0FDckMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVELDRCQUFJLEdBQUosVUFBSyxLQUFLLEVBQUUsT0FBZ0I7UUFDdEIsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsQ0FBQywwQkFBMEI7UUFFakQsMEJBQTBCO1FBQzFCLHNDQUFzQztRQUN0QyxPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ25CLE9BQU8sQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDekIsQ0FBQztJQTFCTDtRQUFDLGdCQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsV0FBVyxFQUFFLHFCQUFxQjtZQUNsQyxTQUFTLEVBQUUsQ0FBQyxvQkFBb0IsQ0FBQztTQUNsQyxDQUFDOztxQkFBQTtJQXVCRixvQkFBQztBQUFELENBdEJBLEFBc0JDLElBQUE7QUF0QlkscUJBQWEsZ0JBc0J6QixDQUFBIiwiZmlsZSI6ImNvbXBvbmVudHMvcHVibGlzaC1jb250ZXN0L2xvZ28tYW5kLWJ1c2luZXNzLWNhcmRzL2xvZ28vbG9nby5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBGb3JtR3JvdXAsIEZvcm1Db250cm9sLCBGb3JtQnVpbGRlciwgVmFsaWRhdG9ycyB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIG1vZHVsZUlkOiBtb2R1bGUuaWQsXHJcbiAgdGVtcGxhdGVVcmw6ICdsb2dvLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnbG9nby5jb21wb25lbnQuY3NzJ11cclxufSlcclxuZXhwb3J0IGNsYXNzIExvZ29Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gIHB1YmxpYyBteUZvcm06IEZvcm1Hcm91cDtcclxuICBwdWJsaWMgc3VibWl0dGVkOiBib29sZWFuID0gZmFsc2U7XHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBmYjogRm9ybUJ1aWxkZXIpIHsgfVxyXG5cclxuICBuZ09uSW5pdCgpIHsgXHJcbiAgICAvLyB0aGlzLm15Rm9ybSA9IG5ldyBGb3JtR3JvdXAoe1xyXG4gICAgLy8gICAgZmlyc3ROYW1lOiBuZXcgRm9ybUNvbnRyb2woKVxyXG4gICAgLy8gfSk7XHJcbiAgICB0aGlzLm15Rm9ybSA9IHRoaXMuZmIuZ3JvdXAoe1xyXG4gICAgICBmaXJzdE5hbWU6IFsnJywgVmFsaWRhdG9ycy5yZXF1aXJlZF1cclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgc2F2ZShtb2RlbCwgaXNWYWxpZDogYm9vbGVhbikge1xyXG4gICAgICAgIHRoaXMuc3VibWl0dGVkID0gdHJ1ZTsgLy8gc2V0IGZvcm0gc3VibWl0IHRvIHRydWVcclxuXHJcbiAgICAgICAgLy8gY2hlY2sgaWYgbW9kZWwgaXMgdmFsaWRcclxuICAgICAgICAvLyBpZiB2YWxpZCwgY2FsbCBBUEkgdG8gc2F2ZSBjdXN0b21lclxyXG4gICAgICAgIGNvbnNvbGUubG9nKG1vZGVsKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhpc1ZhbGlkKTtcclxuICAgIH1cclxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
