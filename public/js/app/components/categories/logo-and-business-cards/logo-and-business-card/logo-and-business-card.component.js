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
var http_1 = require('@angular/http');
var LogoAndBusinessCardComponent = (function () {
    function LogoAndBusinessCardComponent(fb, http) {
        this.fb = fb;
        this.http = http;
        this.URL = 'http://localhost:3000/api/v1/upload';
        this.uploader = new ng2_file_upload_1.FileUploader('http://localhost:3000/api/v1/avatar');
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
        this.myForm = this.fb.group({});
    };
    LogoAndBusinessCardComponent.prototype.submit = function () {
        return this.http.post('http://localhost:3000/api/v1/avatar', { test: 'test' })
            .map(function (res) { return res.json(); })
            .subscribe(function (data) { return console.log(data); });
    };
    LogoAndBusinessCardComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            templateUrl: 'logo-and-business-card.component.html'
        }), 
        __metadata('design:paramtypes', [forms_1.FormBuilder, http_1.Http])
    ], LogoAndBusinessCardComponent);
    return LogoAndBusinessCardComponent;
}());
exports.LogoAndBusinessCardComponent = LogoAndBusinessCardComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvY2F0ZWdvcmllcy9sb2dvLWFuZC1idXNpbmVzcy1jYXJkcy9sb2dvLWFuZC1idXNpbmVzcy1jYXJkL2xvZ28tYW5kLWJ1c2luZXNzLWNhcmQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBa0MsZUFBZSxDQUFDLENBQUE7QUFDbEQsc0JBQWdFLGdCQUFnQixDQUFDLENBQUE7QUFDakYsZ0NBQXFFLGlDQUFpQyxDQUFDLENBQUE7QUFDdkcscUJBQThCLGVBQWUsQ0FBQyxDQUFBO0FBUTlDO0lBZUUsc0NBQW9CLEVBQWUsRUFBVSxJQUFVO1FBQW5DLE9BQUUsR0FBRixFQUFFLENBQWE7UUFBVSxTQUFJLEdBQUosSUFBSSxDQUFNO1FBZHZELFFBQUcsR0FBRyxxQ0FBcUMsQ0FBQztRQUNyQyxhQUFRLEdBQWdCLElBQUksOEJBQVksQ0FBQyxxQ0FBcUMsQ0FBQyxDQUFDO1FBQ2hGLHdCQUFtQixHQUFXLEtBQUssQ0FBQztRQUNwQywyQkFBc0IsR0FBVyxLQUFLLENBQUM7SUFXYSxDQUFDO0lBVHJELG1EQUFZLEdBQW5CLFVBQW9CLENBQUs7UUFDdkIsSUFBSSxDQUFDLG1CQUFtQixHQUFHLENBQUMsQ0FBQztJQUMvQixDQUFDO0lBRU0sc0RBQWUsR0FBdEIsVUFBdUIsQ0FBSztRQUMxQixJQUFJLENBQUMsc0JBQXNCLEdBQUcsQ0FBQyxDQUFDO0lBQ2xDLENBQUM7SUFLRCwrQ0FBUSxHQUFSO1FBQ0UsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUNsQyxDQUFDO0lBRUQsNkNBQU0sR0FBTjtRQUNFLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxxQ0FBcUMsRUFBRSxFQUFDLElBQUksRUFBRSxNQUFNLEVBQUMsQ0FBQzthQUMzRSxHQUFHLENBQUMsVUFBQSxHQUFHLElBQUksT0FBQSxHQUFHLENBQUMsSUFBSSxFQUFFLEVBQVYsQ0FBVSxDQUFDO2FBQ3RCLFNBQVMsQ0FBQyxVQUFBLElBQUksSUFBSSxPQUFBLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEVBQWpCLENBQWlCLENBQUMsQ0FBQTtJQUN2QyxDQUFDO0lBN0JIO1FBQUMsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixXQUFXLEVBQUUsdUNBQXVDO1NBQ3JELENBQUM7O29DQUFBO0lBMkJGLG1DQUFDO0FBQUQsQ0ExQkEsQUEwQkMsSUFBQTtBQTFCWSxvQ0FBNEIsK0JBMEJ4QyxDQUFBIiwiZmlsZSI6ImNvbXBvbmVudHMvY2F0ZWdvcmllcy9sb2dvLWFuZC1idXNpbmVzcy1jYXJkcy9sb2dvLWFuZC1idXNpbmVzcy1jYXJkL2xvZ28tYW5kLWJ1c2luZXNzLWNhcmQuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgRm9ybUdyb3VwLCBGb3JtQ29udHJvbCwgRm9ybUJ1aWxkZXIsIFZhbGlkYXRvcnMgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcbmltcG9ydCB7IEZpbGVTZWxlY3REaXJlY3RpdmUsIEZpbGVEcm9wRGlyZWN0aXZlLCBGaWxlVXBsb2FkZXIgfSBmcm9tICduZzItZmlsZS11cGxvYWQvbmcyLWZpbGUtdXBsb2FkJztcclxuaW1wb3J0IHsgSHR0cCwgSGVhZGVycyB9IGZyb20gJ0Bhbmd1bGFyL2h0dHAnO1xyXG5cclxuXHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBtb2R1bGVJZDogbW9kdWxlLmlkLFxyXG4gIHRlbXBsYXRlVXJsOiAnbG9nby1hbmQtYnVzaW5lc3MtY2FyZC5jb21wb25lbnQuaHRtbCdcclxufSlcclxuZXhwb3J0IGNsYXNzIExvZ29BbmRCdXNpbmVzc0NhcmRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gIFVSTCA9ICdodHRwOi8vbG9jYWxob3N0OjMwMDAvYXBpL3YxL3VwbG9hZCc7XHJcbiAgcHVibGljIHVwbG9hZGVyOkZpbGVVcGxvYWRlciA9IG5ldyBGaWxlVXBsb2FkZXIoJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9hcGkvdjEvYXZhdGFyJyk7XHJcbiAgcHVibGljIGhhc0Jhc2VEcm9wWm9uZU92ZXI6Ym9vbGVhbiA9IGZhbHNlO1xyXG4gIHB1YmxpYyBoYXNBbm90aGVyRHJvcFpvbmVPdmVyOmJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgcHVibGljIGZpbGVPdmVyQmFzZShlOmFueSk6dm9pZCB7XHJcbiAgICB0aGlzLmhhc0Jhc2VEcm9wWm9uZU92ZXIgPSBlO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGZpbGVPdmVyQW5vdGhlcihlOmFueSk6dm9pZCB7XHJcbiAgICB0aGlzLmhhc0Fub3RoZXJEcm9wWm9uZU92ZXIgPSBlO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIG15Rm9ybTogRm9ybUdyb3VwO1xyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZmI6IEZvcm1CdWlsZGVyLCBwcml2YXRlIGh0dHA6IEh0dHApIHsgfVxyXG5cclxuICBuZ09uSW5pdCgpIHsgXHJcbiAgICB0aGlzLm15Rm9ybSA9IHRoaXMuZmIuZ3JvdXAoe30pO1xyXG4gIH1cclxuXHJcbiAgc3VibWl0KCkge1xyXG4gICAgcmV0dXJuIHRoaXMuaHR0cC5wb3N0KCdodHRwOi8vbG9jYWxob3N0OjMwMDAvYXBpL3YxL2F2YXRhcicsIHt0ZXN0OiAndGVzdCd9KVxyXG4gICAgLm1hcChyZXMgPT4gcmVzLmpzb24oKSlcclxuICAgIC5zdWJzY3JpYmUoZGF0YSA9PiBjb25zb2xlLmxvZyhkYXRhKSlcclxuICB9XHJcbn0iXX0=
