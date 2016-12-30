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
var MicroGalleryComponent = (function () {
    function MicroGalleryComponent() {
        this.cssClass = '';
        this.animation = true;
        this.keyboard = true;
        this.backdrop = true;
    }
    MicroGalleryComponent.prototype.ngOnInit = function () { };
    MicroGalleryComponent.prototype.ngAfterViewInit = function () {
        jQuery(document).ready(function () {
            jQuery(".fancybox").fancybox({});
        });
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], MicroGalleryComponent.prototype, "designer", void 0);
    MicroGalleryComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'micro-gallery',
            templateUrl: 'micro-gallery.component.html',
            styleUrls: ['micro-gallery.component.css']
        }), 
        __metadata('design:paramtypes', [])
    ], MicroGalleryComponent);
    return MicroGalleryComponent;
}());
exports.MicroGalleryComponent = MicroGalleryComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvZGVzaWduZXJzL21pY3JvLWdhbGxlcnkuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBeUMsZUFBZSxDQUFDLENBQUE7QUFVekQ7SUFPRTtRQUxBLGFBQVEsR0FBVyxFQUFFLENBQUM7UUFDdEIsY0FBUyxHQUFZLElBQUksQ0FBQztRQUMxQixhQUFRLEdBQVksSUFBSSxDQUFDO1FBQ3pCLGFBQVEsR0FBcUIsSUFBSSxDQUFDO0lBRWxCLENBQUM7SUFFakIsd0NBQVEsR0FBUixjQUFhLENBQUM7SUFFZCwrQ0FBZSxHQUFmO1FBQ00sTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEtBQUssQ0FBQztZQUNyQixNQUFNLENBQUMsV0FBVyxDQUFDLENBQUMsUUFBUSxDQUFDLEVBRTVCLENBQUMsQ0FBQztRQUNQLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQWhCSDtRQUFDLFlBQUssRUFBRTs7MkRBQUE7SUFQVjtRQUFDLGdCQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsUUFBUSxFQUFFLGVBQWU7WUFDekIsV0FBVyxFQUFFLDhCQUE4QjtZQUMzQyxTQUFTLEVBQUUsQ0FBQyw2QkFBNkIsQ0FBQztTQUMzQyxDQUFDOzs2QkFBQTtJQW9CRiw0QkFBQztBQUFELENBbkJBLEFBbUJDLElBQUE7QUFuQlksNkJBQXFCLHdCQW1CakMsQ0FBQSIsImZpbGUiOiJjb21wb25lbnRzL2Rlc2lnbmVycy9taWNyby1nYWxsZXJ5LmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuZGVjbGFyZSB2YXIgalF1ZXJ5OiBhbnk7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBtb2R1bGVJZDogbW9kdWxlLmlkLFxyXG4gIHNlbGVjdG9yOiAnbWljcm8tZ2FsbGVyeScsXHJcbiAgdGVtcGxhdGVVcmw6ICdtaWNyby1nYWxsZXJ5LmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnbWljcm8tZ2FsbGVyeS5jb21wb25lbnQuY3NzJ11cclxufSlcclxuZXhwb3J0IGNsYXNzIE1pY3JvR2FsbGVyeUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgQElucHV0KCkgZGVzaWduZXI7XHJcbiAgY3NzQ2xhc3M6IHN0cmluZyA9ICcnO1xyXG4gIGFuaW1hdGlvbjogYm9vbGVhbiA9IHRydWU7XHJcbiAga2V5Ym9hcmQ6IGJvb2xlYW4gPSB0cnVlO1xyXG4gIGJhY2tkcm9wOiBzdHJpbmcgfCBib29sZWFuID0gdHJ1ZTtcclxuICBcclxuICBjb25zdHJ1Y3RvcigpIHsgfVxyXG5cclxuICBuZ09uSW5pdCgpIHsgfVxyXG5cclxuICBuZ0FmdGVyVmlld0luaXQoKSB7XHJcbiAgICAgICAgalF1ZXJ5KGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigpIHtcclxuICAgICAgICAgIGpRdWVyeShcIi5mYW5jeWJveFwiKS5mYW5jeWJveCh7XHJcbiAgICAgICAgICBcclxuICAgICAgICAgIH0pO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuXHJcbn0iXX0=
