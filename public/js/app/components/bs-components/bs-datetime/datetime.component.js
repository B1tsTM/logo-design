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
var moment = require('moment');
var DateTimeComponent = (function () {
    function DateTimeComponent() {
        this.dt = new Date();
        this.minDate = void 0;
        this.formats = ['DD-MM-YYYY', 'YYYY/MM/DD', 'DD.MM.YYYY', 'shortDate'];
        this.format = this.formats[0];
        this.dateOptions = {
            formatYear: 'YY',
            startingDay: 1
        };
        this.opened = false;
        (this.tomorrow = new Date()).setDate(this.tomorrow.getDate() + 1);
        (this.afterTomorrow = new Date()).setDate(this.tomorrow.getDate() + 2);
        (this.minDate = new Date()).setDate(this.minDate.getDate() - 1000);
        this.events = [
            { date: this.tomorrow, status: 'full' },
            { date: this.afterTomorrow, status: 'partially' }
        ];
    }
    DateTimeComponent.prototype.getDate = function () {
        return this.dt && this.dt.getTime() || new Date().getTime();
    };
    DateTimeComponent.prototype.today = function () {
        this.dt = new Date();
    };
    DateTimeComponent.prototype.d20090824 = function () {
        this.dt = moment('2009-08-24', 'YYYY-MM-DD').toDate();
    };
    // todo: implement custom class cases
    DateTimeComponent.prototype.getDayClass = function (date, mode) {
        if (mode === 'day') {
            var dayToCheck = new Date(date).setHours(0, 0, 0, 0);
            for (var i = 0; i < this.events.length; i++) {
                var currentDay = new Date(this.events[i].date).setHours(0, 0, 0, 0);
                if (dayToCheck === currentDay) {
                    return this.events[i].status;
                }
            }
        }
        return '';
    };
    DateTimeComponent.prototype.disabled = function (date, mode) {
        return (mode === 'day' && (date.getDay() === 0 || date.getDay() === 6));
    };
    DateTimeComponent.prototype.open = function () {
        this.opened = !this.opened;
    };
    DateTimeComponent.prototype.clear = function () {
        this.dt = void 0;
    };
    DateTimeComponent.prototype.toggleMin = function () {
        this.dt = new Date(this.minDate.valueOf());
    };
    DateTimeComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'datetime',
            templateUrl: 'datetime.component.html'
        }), 
        __metadata('design:paramtypes', [])
    ], DateTimeComponent);
    return DateTimeComponent;
}());
exports.DateTimeComponent = DateTimeComponent;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvYnMtY29tcG9uZW50cy9icy1kYXRldGltZS9kYXRldGltZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUNJLHFCQUEwQixlQUFlLENBQUMsQ0FBQTtBQUMxQyxJQUFZLE1BQU0sV0FBTSxRQUFRLENBQUMsQ0FBQTtBQU9qQztJQWNFO1FBYk8sT0FBRSxHQUFRLElBQUksSUFBSSxFQUFFLENBQUM7UUFDckIsWUFBTyxHQUFRLEtBQUssQ0FBQyxDQUFDO1FBSXRCLFlBQU8sR0FBaUIsQ0FBQyxZQUFZLEVBQUUsWUFBWSxFQUFFLFlBQVksRUFBRSxXQUFXLENBQUMsQ0FBQztRQUNoRixXQUFNLEdBQVUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNoQyxnQkFBVyxHQUFPO1lBQ3ZCLFVBQVUsRUFBRSxJQUFJO1lBQ2hCLFdBQVcsRUFBRSxDQUFDO1NBQ2YsQ0FBQztRQUNNLFdBQU0sR0FBVyxLQUFLLENBQUM7UUFHN0IsQ0FBQyxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksSUFBSSxFQUFFLENBQUMsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQztRQUNsRSxDQUFDLElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxJQUFJLEVBQUUsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQ3ZFLENBQUMsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLElBQUksRUFBRSxDQUFDLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxFQUFFLEdBQUcsSUFBSSxDQUFDLENBQUM7UUFDbkUsSUFBSSxDQUFDLE1BQU0sR0FBRztZQUNaLEVBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxRQUFRLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBQztZQUNyQyxFQUFDLElBQUksRUFBRSxJQUFJLENBQUMsYUFBYSxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUM7U0FDaEQsQ0FBQztJQUNKLENBQUM7SUFFTSxtQ0FBTyxHQUFkO1FBQ0UsTUFBTSxDQUFDLElBQUksQ0FBQyxFQUFFLElBQUksSUFBSSxDQUFDLEVBQUUsQ0FBQyxPQUFPLEVBQUUsSUFBSSxJQUFJLElBQUksRUFBRSxDQUFDLE9BQU8sRUFBRSxDQUFDO0lBQzlELENBQUM7SUFFTSxpQ0FBSyxHQUFaO1FBQ0UsSUFBSSxDQUFDLEVBQUUsR0FBRyxJQUFJLElBQUksRUFBRSxDQUFDO0lBQ3ZCLENBQUM7SUFFTSxxQ0FBUyxHQUFoQjtRQUNFLElBQUksQ0FBQyxFQUFFLEdBQUcsTUFBTSxDQUFDLFlBQVksRUFBRSxZQUFZLENBQUMsQ0FBQyxNQUFNLEVBQUUsQ0FBQztJQUN4RCxDQUFDO0lBRUQscUNBQXFDO0lBQzlCLHVDQUFXLEdBQWxCLFVBQW1CLElBQVEsRUFBRSxJQUFXO1FBQ3RDLEVBQUUsQ0FBQyxDQUFDLElBQUksS0FBSyxLQUFLLENBQUMsQ0FBQyxDQUFDO1lBQ25CLElBQUksVUFBVSxHQUFHLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztZQUVyRCxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUM7Z0JBQzVDLElBQUksVUFBVSxHQUFHLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO2dCQUVwRSxFQUFFLENBQUMsQ0FBQyxVQUFVLEtBQUssVUFBVSxDQUFDLENBQUMsQ0FBQztvQkFDOUIsTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDO2dCQUMvQixDQUFDO1lBQ0gsQ0FBQztRQUNILENBQUM7UUFFRCxNQUFNLENBQUMsRUFBRSxDQUFDO0lBQ1osQ0FBQztJQUVNLG9DQUFRLEdBQWYsVUFBZ0IsSUFBUyxFQUFFLElBQVc7UUFDcEMsTUFBTSxDQUFDLENBQUUsSUFBSSxLQUFLLEtBQUssSUFBSSxDQUFFLElBQUksQ0FBQyxNQUFNLEVBQUUsS0FBSyxDQUFDLElBQUksSUFBSSxDQUFDLE1BQU0sRUFBRSxLQUFLLENBQUMsQ0FBRSxDQUFFLENBQUM7SUFDOUUsQ0FBQztJQUVNLGdDQUFJLEdBQVg7UUFDRSxJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQztJQUM3QixDQUFDO0lBRU0saUNBQUssR0FBWjtRQUNFLElBQUksQ0FBQyxFQUFFLEdBQUcsS0FBSyxDQUFDLENBQUM7SUFDbkIsQ0FBQztJQUVNLHFDQUFTLEdBQWhCO1FBQ0UsSUFBSSxDQUFDLEVBQUUsR0FBRyxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUM7SUFDN0MsQ0FBQztJQXhFSDtRQUFDLGdCQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsUUFBUSxFQUFFLFVBQVU7WUFDcEIsV0FBVyxFQUFFLHlCQUF5QjtTQUN2QyxDQUFDOzt5QkFBQTtJQXFFRix3QkFBQztBQUFELENBcEVBLEFBb0VDLElBQUE7QUFwRVkseUJBQWlCLG9CQW9FN0IsQ0FBQSIsImZpbGUiOiJjb21wb25lbnRzL2JzLWNvbXBvbmVudHMvYnMtZGF0ZXRpbWUvZGF0ZXRpbWUuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbiAgICBpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuICAgIGltcG9ydCAqIGFzIG1vbWVudCBmcm9tICdtb21lbnQnO1xyXG4gICAgIFxyXG4gICAgQENvbXBvbmVudCh7XHJcbiAgICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXHJcbiAgICAgIHNlbGVjdG9yOiAnZGF0ZXRpbWUnLFxyXG4gICAgICB0ZW1wbGF0ZVVybDogJ2RhdGV0aW1lLmNvbXBvbmVudC5odG1sJ1xyXG4gICAgfSlcclxuICAgIGV4cG9ydCBjbGFzcyBEYXRlVGltZUNvbXBvbmVudCB7XHJcbiAgICAgIHB1YmxpYyBkdDpEYXRlID0gbmV3IERhdGUoKTtcclxuICAgICAgcHVibGljIG1pbkRhdGU6RGF0ZSA9IHZvaWQgMDtcclxuICAgICAgcHVibGljIGV2ZW50czpBcnJheTxhbnk+O1xyXG4gICAgICBwdWJsaWMgdG9tb3Jyb3c6RGF0ZTtcclxuICAgICAgcHVibGljIGFmdGVyVG9tb3Jyb3c6RGF0ZTtcclxuICAgICAgcHVibGljIGZvcm1hdHM6QXJyYXk8c3RyaW5nPiA9IFsnREQtTU0tWVlZWScsICdZWVlZL01NL0REJywgJ0RELk1NLllZWVknLCAnc2hvcnREYXRlJ107XHJcbiAgICAgIHB1YmxpYyBmb3JtYXQ6c3RyaW5nID0gdGhpcy5mb3JtYXRzWzBdO1xyXG4gICAgICBwdWJsaWMgZGF0ZU9wdGlvbnM6YW55ID0ge1xyXG4gICAgICAgIGZvcm1hdFllYXI6ICdZWScsXHJcbiAgICAgICAgc3RhcnRpbmdEYXk6IDFcclxuICAgICAgfTtcclxuICAgICAgcHJpdmF0ZSBvcGVuZWQ6Ym9vbGVhbiA9IGZhbHNlO1xyXG4gICAgIFxyXG4gICAgICBwdWJsaWMgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgKHRoaXMudG9tb3Jyb3cgPSBuZXcgRGF0ZSgpKS5zZXREYXRlKHRoaXMudG9tb3Jyb3cuZ2V0RGF0ZSgpICsgMSk7XHJcbiAgICAgICAgKHRoaXMuYWZ0ZXJUb21vcnJvdyA9IG5ldyBEYXRlKCkpLnNldERhdGUodGhpcy50b21vcnJvdy5nZXREYXRlKCkgKyAyKTtcclxuICAgICAgICAodGhpcy5taW5EYXRlID0gbmV3IERhdGUoKSkuc2V0RGF0ZSh0aGlzLm1pbkRhdGUuZ2V0RGF0ZSgpIC0gMTAwMCk7XHJcbiAgICAgICAgdGhpcy5ldmVudHMgPSBbXHJcbiAgICAgICAgICB7ZGF0ZTogdGhpcy50b21vcnJvdywgc3RhdHVzOiAnZnVsbCd9LFxyXG4gICAgICAgICAge2RhdGU6IHRoaXMuYWZ0ZXJUb21vcnJvdywgc3RhdHVzOiAncGFydGlhbGx5J31cclxuICAgICAgICBdO1xyXG4gICAgICB9XHJcbiAgICAgXHJcbiAgICAgIHB1YmxpYyBnZXREYXRlKCk6bnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5kdCAmJiB0aGlzLmR0LmdldFRpbWUoKSB8fCBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcclxuICAgICAgfVxyXG4gICAgIFxyXG4gICAgICBwdWJsaWMgdG9kYXkoKTp2b2lkIHtcclxuICAgICAgICB0aGlzLmR0ID0gbmV3IERhdGUoKTtcclxuICAgICAgfVxyXG4gICAgIFxyXG4gICAgICBwdWJsaWMgZDIwMDkwODI0KCk6dm9pZCB7XHJcbiAgICAgICAgdGhpcy5kdCA9IG1vbWVudCgnMjAwOS0wOC0yNCcsICdZWVlZLU1NLUREJykudG9EYXRlKCk7XHJcbiAgICAgIH1cclxuICAgICBcclxuICAgICAgLy8gdG9kbzogaW1wbGVtZW50IGN1c3RvbSBjbGFzcyBjYXNlc1xyXG4gICAgICBwdWJsaWMgZ2V0RGF5Q2xhc3MoZGF0ZTphbnksIG1vZGU6c3RyaW5nKTpzdHJpbmcge1xyXG4gICAgICAgIGlmIChtb2RlID09PSAnZGF5Jykge1xyXG4gICAgICAgICAgbGV0IGRheVRvQ2hlY2sgPSBuZXcgRGF0ZShkYXRlKS5zZXRIb3VycygwLCAwLCAwLCAwKTtcclxuICAgICBcclxuICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5ldmVudHMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgbGV0IGN1cnJlbnREYXkgPSBuZXcgRGF0ZSh0aGlzLmV2ZW50c1tpXS5kYXRlKS5zZXRIb3VycygwLCAwLCAwLCAwKTtcclxuICAgICBcclxuICAgICAgICAgICAgaWYgKGRheVRvQ2hlY2sgPT09IGN1cnJlbnREYXkpIHtcclxuICAgICAgICAgICAgICByZXR1cm4gdGhpcy5ldmVudHNbaV0uc3RhdHVzO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgIFxyXG4gICAgICAgIHJldHVybiAnJztcclxuICAgICAgfVxyXG4gICAgIFxyXG4gICAgICBwdWJsaWMgZGlzYWJsZWQoZGF0ZTpEYXRlLCBtb2RlOnN0cmluZyk6Ym9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuICggbW9kZSA9PT0gJ2RheScgJiYgKCBkYXRlLmdldERheSgpID09PSAwIHx8IGRhdGUuZ2V0RGF5KCkgPT09IDYgKSApO1xyXG4gICAgICB9XHJcbiAgICAgXHJcbiAgICAgIHB1YmxpYyBvcGVuKCk6dm9pZCB7XHJcbiAgICAgICAgdGhpcy5vcGVuZWQgPSAhdGhpcy5vcGVuZWQ7XHJcbiAgICAgIH1cclxuICAgICBcclxuICAgICAgcHVibGljIGNsZWFyKCk6dm9pZCB7XHJcbiAgICAgICAgdGhpcy5kdCA9IHZvaWQgMDtcclxuICAgICAgfVxyXG4gICAgIFxyXG4gICAgICBwdWJsaWMgdG9nZ2xlTWluKCk6dm9pZCB7XHJcbiAgICAgICAgdGhpcy5kdCA9IG5ldyBEYXRlKHRoaXMubWluRGF0ZS52YWx1ZU9mKCkpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
