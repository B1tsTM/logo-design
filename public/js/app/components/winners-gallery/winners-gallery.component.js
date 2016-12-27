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
    WinnersGalleryComponent.prototype.ngAfterViewInit = function () {
        jQuery(document).ready(function () {
            jQuery(".fancybox").fancybox({});
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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvd2lubmVycy1nYWxsZXJ5L3dpbm5lcnMtZ2FsbGVyeS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUFrQyxlQUFlLENBQUMsQ0FBQTtBQUNsRCxpQ0FBZ0MsaUNBQWlDLENBQUMsQ0FBQTtBQVVsRTtJQU1FLGlDQUFvQixlQUFnQztRQUFoQyxvQkFBZSxHQUFmLGVBQWUsQ0FBaUI7UUFMcEQsYUFBUSxHQUFXLEVBQUUsQ0FBQztRQUN0QixjQUFTLEdBQVksSUFBSSxDQUFDO1FBQzFCLGFBQVEsR0FBWSxJQUFJLENBQUM7UUFDekIsYUFBUSxHQUFxQixJQUFJLENBQUM7UUFDbEMsWUFBTyxHQUFHLEVBQUUsQ0FBQztJQUMyQyxDQUFDO0lBRXpELDBDQUFRLEdBQVI7UUFBQSxpQkFPQztRQU5DLElBQUksQ0FBQyxlQUFlLENBQUMsaUJBQWlCLEVBQUU7YUFDdkMsU0FBUyxDQUFDLFVBQUEsSUFBSTtZQUNiLEtBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO1FBQ3RCLENBQUMsRUFBRSxVQUFBLEtBQUs7WUFDTixPQUFPLENBQUMsR0FBRyxDQUFDLDJCQUEyQixDQUFDLENBQUM7UUFDM0MsQ0FBQyxDQUFDLENBQUE7SUFDSixDQUFDO0lBRUQsaURBQWUsR0FBZjtRQUNFLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxLQUFLLENBQUM7WUFDckIsTUFBTSxDQUFDLFdBQVcsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxFQUU1QixDQUFDLENBQUM7UUFDTCxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUE3Qkg7UUFBQyxnQkFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFFBQVEsRUFBRSxpQkFBaUI7WUFDM0IsV0FBVyxFQUFFLGdDQUFnQztZQUM3QyxTQUFTLEVBQUUsQ0FBQywrQkFBK0IsQ0FBQztTQUM3QyxDQUFDOzsrQkFBQTtJQTBCRiw4QkFBQztBQUFELENBekJBLEFBeUJDLElBQUE7QUF6QlksK0JBQXVCLDBCQXlCbkMsQ0FBQSIsImZpbGUiOiJjb21wb25lbnRzL3dpbm5lcnMtZ2FsbGVyeS93aW5uZXJzLWdhbGxlcnkuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQ29udGVzdHNTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvY29udGVzdHMuc2VydmljZSc7XHJcblxyXG5kZWNsYXJlIHZhciBqUXVlcnk6IGFueTtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIG1vZHVsZUlkOiBtb2R1bGUuaWQsXHJcbiAgc2VsZWN0b3I6ICd3aW5uZXJzLWdhbGxlcnknLFxyXG4gIHRlbXBsYXRlVXJsOiAnd2lubmVycy1nYWxsZXJ5LmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnd2lubmVycy1nYWxsZXJ5LmNvbXBvbmVudC5jc3MnXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgV2lubmVyc0dhbGxlcnlDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gIGNzc0NsYXNzOiBzdHJpbmcgPSAnJztcclxuICBhbmltYXRpb246IGJvb2xlYW4gPSB0cnVlO1xyXG4gIGtleWJvYXJkOiBib29sZWFuID0gdHJ1ZTtcclxuICBiYWNrZHJvcDogc3RyaW5nIHwgYm9vbGVhbiA9IHRydWU7XHJcbiAgd2lubmVycyA9IFtdO1xyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgY29udGVzdHNTZXJ2aWNlOiBDb250ZXN0c1NlcnZpY2UpIHsgfVxyXG5cclxuICBuZ09uSW5pdCgpIHsgXHJcbiAgICB0aGlzLmNvbnRlc3RzU2VydmljZS5nZXRXaW5uZXJzR2FsbGVyeSgpXHJcbiAgICAuc3Vic2NyaWJlKGRhdGEgPT4ge1xyXG4gICAgICB0aGlzLndpbm5lcnMgPSBkYXRhO1xyXG4gICAgfSwgZXJyb3IgPT4ge1xyXG4gICAgICBjb25zb2xlLmxvZygnS2xhaWRhIGdhdW5hbnQgbGFpbcSXdG9qdXMnKTtcclxuICAgIH0pXHJcbiAgfVxyXG5cclxuICBuZ0FmdGVyVmlld0luaXQoKSB7XHJcbiAgICBqUXVlcnkoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKCkge1xyXG4gICAgICBqUXVlcnkoXCIuZmFuY3lib3hcIikuZmFuY3lib3goe1xyXG4gICAgICAgIFxyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbn0iXX0=
