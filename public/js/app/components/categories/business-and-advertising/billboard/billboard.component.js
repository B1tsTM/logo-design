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
var http_1 = require('@angular/http');
var BillboardComponent = (function () {
    function BillboardComponent(http, el) {
        this.http = http;
        this.el = el;
    }
    BillboardComponent.prototype.ngOnInit = function () { };
    BillboardComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            templateUrl: 'billboard.component.html'
        }), 
        __metadata('design:paramtypes', [http_1.Http, core_1.ElementRef])
    ], BillboardComponent);
    return BillboardComponent;
}());
exports.BillboardComponent = BillboardComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvY2F0ZWdvcmllcy9idXNpbmVzcy1hbmQtYWR2ZXJ0aXNpbmcvYmlsbGJvYXJkL2JpbGxib2FyZC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUE4QyxlQUFlLENBQUMsQ0FBQTtBQUM5RCxxQkFBcUIsZUFBZSxDQUFDLENBQUE7QUFNckM7SUFDRSw0QkFBb0IsSUFBVSxFQUFVLEVBQWE7UUFBakMsU0FBSSxHQUFKLElBQUksQ0FBTTtRQUFVLE9BQUUsR0FBRixFQUFFLENBQVc7SUFBSSxDQUFDO0lBRTFELHFDQUFRLEdBQVIsY0FBYSxDQUFDO0lBUGhCO1FBQUMsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixXQUFXLEVBQUUsMEJBQTBCO1NBQ3hDLENBQUM7OzBCQUFBO0lBUUYseUJBQUM7QUFBRCxDQVBBLEFBT0MsSUFBQTtBQVBZLDBCQUFrQixxQkFPOUIsQ0FBQSIsImZpbGUiOiJjb21wb25lbnRzL2NhdGVnb3JpZXMvYnVzaW5lc3MtYW5kLWFkdmVydGlzaW5nL2JpbGxib2FyZC9iaWxsYm9hcmQuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIEVsZW1lbnRSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgSHR0cCB9IGZyb20gJ0Bhbmd1bGFyL2h0dHAnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcclxuICB0ZW1wbGF0ZVVybDogJ2JpbGxib2FyZC5jb21wb25lbnQuaHRtbCdcclxufSlcclxuZXhwb3J0IGNsYXNzIEJpbGxib2FyZENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBodHRwOiBIdHRwLCBwcml2YXRlIGVsOkVsZW1lbnRSZWYpIHsgfVxyXG5cclxuICBuZ09uSW5pdCgpIHsgfVxyXG5cclxuICBcclxuXHJcbn0iXX0=
