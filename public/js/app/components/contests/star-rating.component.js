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
var StarRatingComponent = (function () {
    function StarRatingComponent() {
        this.range = [1, 2, 3, 4, 5];
        this.ratingClicked = new core_1.EventEmitter();
    }
    StarRatingComponent.prototype.ngOnInit = function () { };
    StarRatingComponent.prototype.changeRating = function (rating) {
        this.rating = rating;
        this.ratingClicked.emit({
            rating: this.rating,
            submitionId: this.submitionId,
            contestId: this.contestId
        });
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Number)
    ], StarRatingComponent.prototype, "rating", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Number)
    ], StarRatingComponent.prototype, "submitionId", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], StarRatingComponent.prototype, "contestId", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], StarRatingComponent.prototype, "ratingClicked", void 0);
    StarRatingComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'star-rating',
            templateUrl: 'star-rating.component.html',
            styleUrls: ['star-rating.component.css']
        }), 
        __metadata('design:paramtypes', [])
    ], StarRatingComponent);
    return StarRatingComponent;
}());
exports.StarRatingComponent = StarRatingComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvY29udGVzdHMvc3Rhci1yYXRpbmcuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBK0QsZUFBZSxDQUFDLENBQUE7QUFRL0U7SUFNRTtRQUxBLFVBQUssR0FBa0IsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFJN0Isa0JBQWEsR0FBc0IsSUFBSSxtQkFBWSxFQUFPLENBQUM7SUFDckQsQ0FBQztJQUVqQixzQ0FBUSxHQUFSLGNBQWEsQ0FBQztJQUVkLDBDQUFZLEdBQVosVUFBYSxNQUFjO1FBQ3pCLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO1FBQ3JCLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDO1lBQ3RCLE1BQU0sRUFBRSxJQUFJLENBQUMsTUFBTTtZQUNuQixXQUFXLEVBQUUsSUFBSSxDQUFDLFdBQVc7WUFDN0IsU0FBUyxFQUFFLElBQUksQ0FBQyxTQUFTO1NBQzFCLENBQUMsQ0FBQztJQUNMLENBQUM7SUFmRDtRQUFDLFlBQUssRUFBRTs7dURBQUE7SUFDUjtRQUFDLFlBQUssRUFBRTs7NERBQUE7SUFDUjtRQUFDLFlBQUssRUFBRTs7MERBQUE7SUFDUjtRQUFDLGFBQU0sRUFBRTs7OERBQUE7SUFYWDtRQUFDLGdCQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsUUFBUSxFQUFFLGFBQWE7WUFDdkIsV0FBVyxFQUFFLDRCQUE0QjtZQUN6QyxTQUFTLEVBQUUsQ0FBQywyQkFBMkIsQ0FBQztTQUN6QyxDQUFDOzsyQkFBQTtJQW1CRiwwQkFBQztBQUFELENBbEJBLEFBa0JDLElBQUE7QUFsQlksMkJBQW1CLHNCQWtCL0IsQ0FBQSIsImZpbGUiOiJjb21wb25lbnRzL2NvbnRlc3RzL3N0YXItcmF0aW5nLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIG1vZHVsZUlkOiBtb2R1bGUuaWQsXHJcbiAgc2VsZWN0b3I6ICdzdGFyLXJhdGluZycsXHJcbiAgdGVtcGxhdGVVcmw6ICdzdGFyLXJhdGluZy5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJ3N0YXItcmF0aW5nLmNvbXBvbmVudC5jc3MnXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgU3RhclJhdGluZ0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgcmFuZ2U6IEFycmF5PG51bWJlcj4gPSBbMSwgMiwgMywgNCwgNV07XHJcbiAgQElucHV0KCkgcmF0aW5nOiBudW1iZXI7XHJcbiAgQElucHV0KCkgc3VibWl0aW9uSWQ6IG51bWJlcjtcclxuICBASW5wdXQoKSBjb250ZXN0SWQ6IHN0cmluZztcclxuICBAT3V0cHV0KCkgcmF0aW5nQ2xpY2tlZDogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcclxuICBjb25zdHJ1Y3RvcigpIHsgfVxyXG5cclxuICBuZ09uSW5pdCgpIHsgfVxyXG5cclxuICBjaGFuZ2VSYXRpbmcocmF0aW5nOiBudW1iZXIpIHtcclxuICAgIHRoaXMucmF0aW5nID0gcmF0aW5nO1xyXG4gICAgdGhpcy5yYXRpbmdDbGlja2VkLmVtaXQoe1xyXG4gICAgICByYXRpbmc6IHRoaXMucmF0aW5nLFxyXG4gICAgICBzdWJtaXRpb25JZDogdGhpcy5zdWJtaXRpb25JZCxcclxuICAgICAgY29udGVzdElkOiB0aGlzLmNvbnRlc3RJZFxyXG4gICAgfSk7XHJcbiAgfVxyXG59Il19
