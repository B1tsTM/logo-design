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
    function StarRatingComponent(renderer, el) {
        this.renderer = renderer;
        this.el = el;
        this.range = [1, 2, 3, 4, 5];
        this.ratingClicked = new core_1.EventEmitter();
    }
    StarRatingComponent.prototype.ngOnInit = function () { };
    StarRatingComponent.prototype.changeCursor = function () {
        if (!this.readonly) {
            this.renderer.setElementStyle(this.el.nativeElement, "cursor", "pointer");
        }
        else {
            this.renderer.setElementStyle(this.el.nativeElement, "cursor", "default");
        }
    };
    StarRatingComponent.prototype.removeCursor = function () {
        if (!this.readonly) {
            this.renderer.setElementStyle(this.el.nativeElement, "cursor", "default");
        }
    };
    StarRatingComponent.prototype.changeRating = function (rating) {
        if (!this.readonly) {
            this.rating = rating;
            this.ratingClicked.emit({
                rating: this.rating,
                submitionId: this.submitionId,
                contestId: this.contestId
            });
        }
    };
    __decorate([
        core_1.ViewChild('stars'), 
        __metadata('design:type', Object)
    ], StarRatingComponent.prototype, "stars", void 0);
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
        core_1.Input(), 
        __metadata('design:type', Boolean)
    ], StarRatingComponent.prototype, "readonly", void 0);
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
        __metadata('design:paramtypes', [core_1.Renderer, core_1.ElementRef])
    ], StarRatingComponent);
    return StarRatingComponent;
}());
exports.StarRatingComponent = StarRatingComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvY29udGVzdHMvc3Rhci1yYXRpbmcuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBZ0csZUFBZSxDQUFDLENBQUE7QUFRaEg7SUFRRSw2QkFBb0IsUUFBa0IsRUFBVSxFQUFjO1FBQTFDLGFBQVEsR0FBUixRQUFRLENBQVU7UUFBVSxPQUFFLEdBQUYsRUFBRSxDQUFZO1FBTjlELFVBQUssR0FBa0IsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFLN0Isa0JBQWEsR0FBc0IsSUFBSSxtQkFBWSxFQUFPLENBQUM7SUFDSCxDQUFDO0lBRW5FLHNDQUFRLEdBQVIsY0FBYSxDQUFDO0lBRWQsMENBQVksR0FBWjtRQUNFLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7WUFDbkIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLEVBQUUsUUFBUSxFQUFFLFNBQVMsQ0FBQyxDQUFDO1FBQzVFLENBQUM7UUFBQyxJQUFJLENBQUMsQ0FBQztZQUNOLElBQUksQ0FBQyxRQUFRLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsYUFBYSxFQUFFLFFBQVEsRUFBRSxTQUFTLENBQUMsQ0FBQztRQUM1RSxDQUFDO0lBQ0gsQ0FBQztJQUNELDBDQUFZLEdBQVo7UUFDRSxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO1lBQ25CLElBQUksQ0FBQyxRQUFRLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsYUFBYSxFQUFFLFFBQVEsRUFBRSxTQUFTLENBQUMsQ0FBQztRQUM1RSxDQUFDO0lBQ0gsQ0FBQztJQUVELDBDQUFZLEdBQVosVUFBYSxNQUFjO1FBQ3pCLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7WUFDckIsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7WUFDckIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUM7Z0JBQ3RCLE1BQU0sRUFBRSxJQUFJLENBQUMsTUFBTTtnQkFDbkIsV0FBVyxFQUFFLElBQUksQ0FBQyxXQUFXO2dCQUM3QixTQUFTLEVBQUUsSUFBSSxDQUFDLFNBQVM7YUFDMUIsQ0FBQyxDQUFDO1FBQ0gsQ0FBQztJQUNILENBQUM7SUFqQ0Q7UUFBQyxnQkFBUyxDQUFDLE9BQU8sQ0FBQzs7c0RBQUE7SUFFbkI7UUFBQyxZQUFLLEVBQUU7O3VEQUFBO0lBQ1I7UUFBQyxZQUFLLEVBQUU7OzREQUFBO0lBQ1I7UUFBQyxZQUFLLEVBQUU7OzBEQUFBO0lBQ1I7UUFBQyxZQUFLLEVBQUU7O3lEQUFBO0lBQ1I7UUFBQyxhQUFNLEVBQUU7OzhEQUFBO0lBYlg7UUFBQyxnQkFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFFBQVEsRUFBRSxhQUFhO1lBQ3ZCLFdBQVcsRUFBRSw0QkFBNEI7WUFDekMsU0FBUyxFQUFFLENBQUMsMkJBQTJCLENBQUM7U0FDekMsQ0FBQzs7MkJBQUE7SUFxQ0YsMEJBQUM7QUFBRCxDQXBDQSxBQW9DQyxJQUFBO0FBcENZLDJCQUFtQixzQkFvQy9CLENBQUEiLCJmaWxlIjoiY29tcG9uZW50cy9jb250ZXN0cy9zdGFyLXJhdGluZy5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyLCBSZW5kZXJlciwgRWxlbWVudFJlZiwgVmlld0NoaWxkIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBtb2R1bGVJZDogbW9kdWxlLmlkLFxyXG4gIHNlbGVjdG9yOiAnc3Rhci1yYXRpbmcnLFxyXG4gIHRlbXBsYXRlVXJsOiAnc3Rhci1yYXRpbmcuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWydzdGFyLXJhdGluZy5jb21wb25lbnQuY3NzJ11cclxufSlcclxuZXhwb3J0IGNsYXNzIFN0YXJSYXRpbmdDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gIEBWaWV3Q2hpbGQoJ3N0YXJzJykgc3RhcnM7XHJcbiAgcmFuZ2U6IEFycmF5PG51bWJlcj4gPSBbMSwgMiwgMywgNCwgNV07XHJcbiAgQElucHV0KCkgcmF0aW5nOiBudW1iZXI7XHJcbiAgQElucHV0KCkgc3VibWl0aW9uSWQ6IG51bWJlcjtcclxuICBASW5wdXQoKSBjb250ZXN0SWQ6IHN0cmluZztcclxuICBASW5wdXQoKSByZWFkb25seTogYm9vbGVhbjtcclxuICBAT3V0cHV0KCkgcmF0aW5nQ2xpY2tlZDogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlciwgcHJpdmF0ZSBlbDogRWxlbWVudFJlZikgeyB9XHJcblxyXG4gIG5nT25Jbml0KCkgeyB9XHJcblxyXG4gIGNoYW5nZUN1cnNvcigpIHtcclxuICAgIGlmICghdGhpcy5yZWFkb25seSkge1xyXG4gICAgICB0aGlzLnJlbmRlcmVyLnNldEVsZW1lbnRTdHlsZSh0aGlzLmVsLm5hdGl2ZUVsZW1lbnQsIFwiY3Vyc29yXCIsIFwicG9pbnRlclwiKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMucmVuZGVyZXIuc2V0RWxlbWVudFN0eWxlKHRoaXMuZWwubmF0aXZlRWxlbWVudCwgXCJjdXJzb3JcIiwgXCJkZWZhdWx0XCIpO1xyXG4gICAgfVxyXG4gIH1cclxuICByZW1vdmVDdXJzb3IoKSB7XHJcbiAgICBpZiAoIXRoaXMucmVhZG9ubHkpIHtcclxuICAgICAgdGhpcy5yZW5kZXJlci5zZXRFbGVtZW50U3R5bGUodGhpcy5lbC5uYXRpdmVFbGVtZW50LCBcImN1cnNvclwiLCBcImRlZmF1bHRcIik7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBjaGFuZ2VSYXRpbmcocmF0aW5nOiBudW1iZXIpIHtcclxuICAgIGlmICghdGhpcy5yZWFkb25seSkge1xyXG4gICAgdGhpcy5yYXRpbmcgPSByYXRpbmc7XHJcbiAgICB0aGlzLnJhdGluZ0NsaWNrZWQuZW1pdCh7XHJcbiAgICAgIHJhdGluZzogdGhpcy5yYXRpbmcsXHJcbiAgICAgIHN1Ym1pdGlvbklkOiB0aGlzLnN1Ym1pdGlvbklkLFxyXG4gICAgICBjb250ZXN0SWQ6IHRoaXMuY29udGVzdElkXHJcbiAgICB9KTtcclxuICAgIH1cclxuICB9XHJcblxyXG59Il19
