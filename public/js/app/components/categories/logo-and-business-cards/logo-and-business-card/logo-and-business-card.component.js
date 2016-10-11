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
var ng2_file_upload_1 = require('ng2-file-upload/ng2-file-upload');
var LogoAndBusinessCardComponent = (function () {
    // public myForm: FormGroup;
    function LogoAndBusinessCardComponent(fb) {
        this.fb = fb;
        this.URL = 'http://localhost:3000/api/v1/upload';
        this.uploader = new ng2_file_upload_1.FileUploader('http://localhost:3000/api/v1/upload');
        this.hasBaseDropZoneOver = false;
        this.hasAnotherDropZoneOver = false;
    }
    LogoAndBusinessCardComponent.prototype.fileOverBase = function (e) {
        this.hasBaseDropZoneOver = e;
    };
    LogoAndBusinessCardComponent.prototype.fileOverAnother = function (e) {
        this.hasAnotherDropZoneOver = e;
    };
    LogoAndBusinessCardComponent.prototype.ngOnInit = function () {
        //  this.myForm = this.fb.group({});
    };
    LogoAndBusinessCardComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            templateUrl: 'logo-and-business-card.component.html'
        }), 
        __metadata('design:paramtypes', [forms_1.FormBuilder])
    ], LogoAndBusinessCardComponent);
    return LogoAndBusinessCardComponent;
}());
exports.LogoAndBusinessCardComponent = LogoAndBusinessCardComponent;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvY2F0ZWdvcmllcy9sb2dvLWFuZC1idXNpbmVzcy1jYXJkcy9sb2dvLWFuZC1idXNpbmVzcy1jYXJkL2xvZ28tYW5kLWJ1c2luZXNzLWNhcmQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBa0MsZUFBZSxDQUFDLENBQUE7QUFDbEQsc0JBQWdFLGdCQUFnQixDQUFDLENBQUE7QUFDakYsZ0NBQXFFLGlDQUFpQyxDQUFDLENBQUE7QUFRdkc7SUFjQyw0QkFBNEI7SUFDM0Isc0NBQW9CLEVBQWU7UUFBZixPQUFFLEdBQUYsRUFBRSxDQUFhO1FBZG5DLFFBQUcsR0FBRyxxQ0FBcUMsQ0FBQztRQUNyQyxhQUFRLEdBQWdCLElBQUksOEJBQVksQ0FBQyxxQ0FBcUMsQ0FBQyxDQUFDO1FBQ2hGLHdCQUFtQixHQUFXLEtBQUssQ0FBQztRQUNwQywyQkFBc0IsR0FBVyxLQUFLLENBQUM7SUFXUCxDQUFDO0lBVGpDLG1EQUFZLEdBQW5CLFVBQW9CLENBQUs7UUFDdkIsSUFBSSxDQUFDLG1CQUFtQixHQUFHLENBQUMsQ0FBQztJQUMvQixDQUFDO0lBRU0sc0RBQWUsR0FBdEIsVUFBdUIsQ0FBSztRQUMxQixJQUFJLENBQUMsc0JBQXNCLEdBQUcsQ0FBQyxDQUFDO0lBQ2xDLENBQUM7SUFLRCwrQ0FBUSxHQUFSO1FBQ0Esb0NBQW9DO0lBQ3BDLENBQUM7SUF2Qkg7UUFBQyxnQkFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFdBQVcsRUFBRSx1Q0FBdUM7U0FDckQsQ0FBQzs7b0NBQUE7SUFxQkYsbUNBQUM7QUFBRCxDQXBCQSxBQW9CQyxJQUFBO0FBcEJZLG9DQUE0QiwrQkFvQnhDLENBQUEiLCJmaWxlIjoiY29tcG9uZW50cy9jYXRlZ29yaWVzL2xvZ28tYW5kLWJ1c2luZXNzLWNhcmRzL2xvZ28tYW5kLWJ1c2luZXNzLWNhcmQvbG9nby1hbmQtYnVzaW5lc3MtY2FyZC5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBGb3JtR3JvdXAsIEZvcm1Db250cm9sLCBGb3JtQnVpbGRlciwgVmFsaWRhdG9ycyB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuaW1wb3J0IHsgRmlsZVNlbGVjdERpcmVjdGl2ZSwgRmlsZURyb3BEaXJlY3RpdmUsIEZpbGVVcGxvYWRlciB9IGZyb20gJ25nMi1maWxlLXVwbG9hZC9uZzItZmlsZS11cGxvYWQnO1xyXG5cclxuXHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBtb2R1bGVJZDogbW9kdWxlLmlkLFxyXG4gIHRlbXBsYXRlVXJsOiAnbG9nby1hbmQtYnVzaW5lc3MtY2FyZC5jb21wb25lbnQuaHRtbCdcclxufSlcclxuZXhwb3J0IGNsYXNzIExvZ29BbmRCdXNpbmVzc0NhcmRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gIFVSTCA9ICdodHRwOi8vbG9jYWxob3N0OjMwMDAvYXBpL3YxL3VwbG9hZCc7XHJcbiAgcHVibGljIHVwbG9hZGVyOkZpbGVVcGxvYWRlciA9IG5ldyBGaWxlVXBsb2FkZXIoJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9hcGkvdjEvdXBsb2FkJyk7XHJcbiAgcHVibGljIGhhc0Jhc2VEcm9wWm9uZU92ZXI6Ym9vbGVhbiA9IGZhbHNlO1xyXG4gIHB1YmxpYyBoYXNBbm90aGVyRHJvcFpvbmVPdmVyOmJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgcHVibGljIGZpbGVPdmVyQmFzZShlOmFueSk6dm9pZCB7XHJcbiAgICB0aGlzLmhhc0Jhc2VEcm9wWm9uZU92ZXIgPSBlO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGZpbGVPdmVyQW5vdGhlcihlOmFueSk6dm9pZCB7XHJcbiAgICB0aGlzLmhhc0Fub3RoZXJEcm9wWm9uZU92ZXIgPSBlO1xyXG4gIH1cclxuXHJcbiAvLyBwdWJsaWMgbXlGb3JtOiBGb3JtR3JvdXA7XHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBmYjogRm9ybUJ1aWxkZXIpIHsgfVxyXG5cclxuICBuZ09uSW5pdCgpIHsgXHJcbiAgLy8gIHRoaXMubXlGb3JtID0gdGhpcy5mYi5ncm91cCh7fSk7XHJcbiAgfVxyXG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
