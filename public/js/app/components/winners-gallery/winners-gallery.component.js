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
var contests_service_1 = require('../../services/contests.service');
var WinnersGalleryComponent = (function () {
    function WinnersGalleryComponent(contestsService) {
        this.contestsService = contestsService;
        this.cssClass = '';
        this.animation = true;
        this.keyboard = true;
        this.backdrop = true;
        this.winners = [];
    }
    WinnersGalleryComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.contestsService.getWinnersGallery()
            .subscribe(function (data) {
            _this.winners = data;
        }, function (error) {
            console.log('Klaida gaunant laimėtojus');
        });
    };
    WinnersGalleryComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'winners-gallery',
            templateUrl: 'winners-gallery.component.html',
            styleUrls: ['winners-gallery.component.css']
        }), 
        __metadata('design:paramtypes', [contests_service_1.ContestsService])
    ], WinnersGalleryComponent);
    return WinnersGalleryComponent;
}());
exports.WinnersGalleryComponent = WinnersGalleryComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvd2lubmVycy1nYWxsZXJ5L3dpbm5lcnMtZ2FsbGVyeS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUFrQyxlQUFlLENBQUMsQ0FBQTtBQUNsRCxpQ0FBZ0MsaUNBQWlDLENBQUMsQ0FBQTtBQVFsRTtJQU1FLGlDQUFvQixlQUFnQztRQUFoQyxvQkFBZSxHQUFmLGVBQWUsQ0FBaUI7UUFMcEQsYUFBUSxHQUFXLEVBQUUsQ0FBQztRQUN0QixjQUFTLEdBQVksSUFBSSxDQUFDO1FBQzFCLGFBQVEsR0FBWSxJQUFJLENBQUM7UUFDekIsYUFBUSxHQUFxQixJQUFJLENBQUM7UUFDbEMsWUFBTyxHQUFHLEVBQUUsQ0FBQztJQUMyQyxDQUFDO0lBRXpELDBDQUFRLEdBQVI7UUFBQSxpQkFPQztRQU5DLElBQUksQ0FBQyxlQUFlLENBQUMsaUJBQWlCLEVBQUU7YUFDdkMsU0FBUyxDQUFDLFVBQUEsSUFBSTtZQUNiLEtBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO1FBQ3RCLENBQUMsRUFBRSxVQUFBLEtBQUs7WUFDTixPQUFPLENBQUMsR0FBRyxDQUFDLDJCQUEyQixDQUFDLENBQUM7UUFDM0MsQ0FBQyxDQUFDLENBQUE7SUFDSixDQUFDO0lBckJIO1FBQUMsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixRQUFRLEVBQUUsaUJBQWlCO1lBQzNCLFdBQVcsRUFBRSxnQ0FBZ0M7WUFDN0MsU0FBUyxFQUFFLENBQUMsK0JBQStCLENBQUM7U0FDN0MsQ0FBQzs7K0JBQUE7SUFpQkYsOEJBQUM7QUFBRCxDQWhCQSxBQWdCQyxJQUFBO0FBaEJZLCtCQUF1QiwwQkFnQm5DLENBQUEiLCJmaWxlIjoiY29tcG9uZW50cy93aW5uZXJzLWdhbGxlcnkvd2lubmVycy1nYWxsZXJ5LmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IENvbnRlc3RzU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL2NvbnRlc3RzLnNlcnZpY2UnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcclxuICBzZWxlY3RvcjogJ3dpbm5lcnMtZ2FsbGVyeScsXHJcbiAgdGVtcGxhdGVVcmw6ICd3aW5uZXJzLWdhbGxlcnkuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWyd3aW5uZXJzLWdhbGxlcnkuY29tcG9uZW50LmNzcyddXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBXaW5uZXJzR2FsbGVyeUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgY3NzQ2xhc3M6IHN0cmluZyA9ICcnO1xyXG4gIGFuaW1hdGlvbjogYm9vbGVhbiA9IHRydWU7XHJcbiAga2V5Ym9hcmQ6IGJvb2xlYW4gPSB0cnVlO1xyXG4gIGJhY2tkcm9wOiBzdHJpbmcgfCBib29sZWFuID0gdHJ1ZTtcclxuICB3aW5uZXJzID0gW107XHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBjb250ZXN0c1NlcnZpY2U6IENvbnRlc3RzU2VydmljZSkgeyB9XHJcblxyXG4gIG5nT25Jbml0KCkgeyBcclxuICAgIHRoaXMuY29udGVzdHNTZXJ2aWNlLmdldFdpbm5lcnNHYWxsZXJ5KClcclxuICAgIC5zdWJzY3JpYmUoZGF0YSA9PiB7XHJcbiAgICAgIHRoaXMud2lubmVycyA9IGRhdGE7XHJcbiAgICB9LCBlcnJvciA9PiB7XHJcbiAgICAgIGNvbnNvbGUubG9nKCdLbGFpZGEgZ2F1bmFudCBsYWltxJd0b2p1cycpO1xyXG4gICAgfSlcclxuICB9XHJcbn0iXX0=
