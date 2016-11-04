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
require('moment/min/locales');
var LocalDateFromNowPipe = (function () {
    function LocalDateFromNowPipe() {
    }
    LocalDateFromNowPipe.prototype.transform = function (date, args) {
        moment.locale('lt-lt');
        var d = new Date(date);
        return moment(d).calendar();
    };
    LocalDateFromNowPipe = __decorate([
        core_1.Pipe({
            name: 'localDateFromNow'
        }), 
        __metadata('design:paramtypes', [])
    ], LocalDateFromNowPipe);
    return LocalDateFromNowPipe;
}());
exports.LocalDateFromNowPipe = LocalDateFromNowPipe;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBpcGVzL2xvY2FsLWRhdGUtZnJvbS1ub3ctcGlwZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQW9DLGVBQWUsQ0FBQyxDQUFBO0FBQ3BELElBQVksTUFBTSxXQUFNLFFBQVEsQ0FBQyxDQUFBO0FBQ2pDLFFBQU8sb0JBQW9CLENBQUMsQ0FBQTtBQUs1QjtJQUFBO0lBT0EsQ0FBQztJQU5FLHdDQUFTLEdBQVQsVUFBVSxJQUFTLEVBQUUsSUFBVTtRQUM3QixNQUFNLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxHQUFHLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFBO1FBQ3RCLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxFQUFFLENBQUE7SUFFN0IsQ0FBQztJQVRKO1FBQUMsV0FBSSxDQUFDO1lBQ0gsSUFBSSxFQUFFLGtCQUFrQjtTQUMxQixDQUFDOzs0QkFBQTtJQVFGLDJCQUFDO0FBQUQsQ0FQQSxBQU9DLElBQUE7QUFQWSw0QkFBb0IsdUJBT2hDLENBQUEiLCJmaWxlIjoicGlwZXMvbG9jYWwtZGF0ZS1mcm9tLW5vdy1waXBlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUGlwZSwgUGlwZVRyYW5zZm9ybSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgKiBhcyBtb21lbnQgZnJvbSAnbW9tZW50JztcclxuaW1wb3J0ICdtb21lbnQvbWluL2xvY2FsZXMnO1xyXG5cclxuQFBpcGUoe1xyXG4gICBuYW1lOiAnbG9jYWxEYXRlRnJvbU5vdydcclxufSlcclxuZXhwb3J0IGNsYXNzIExvY2FsRGF0ZUZyb21Ob3dQaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XHJcbiAgIHRyYW5zZm9ybShkYXRlOiBhbnksIGFyZ3M/OiBhbnkpOiBhbnkge1xyXG4gICAgIG1vbWVudC5sb2NhbGUoJ2x0LWx0Jyk7XHJcbiAgICAgbGV0IGQgPSBuZXcgRGF0ZShkYXRlKVxyXG4gICAgIHJldHVybiBtb21lbnQoZCkuY2FsZW5kYXIoKVxyXG5cclxuICAgfVxyXG59Il19
