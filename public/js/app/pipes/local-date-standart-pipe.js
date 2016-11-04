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
var LocalDateStandartPipe = (function () {
    function LocalDateStandartPipe() {
    }
    LocalDateStandartPipe.prototype.transform = function (date, args) {
        moment.locale('lt-lt');
        var d = new Date(date);
        return moment(d).format('YYYY MMMM Do');
    };
    LocalDateStandartPipe = __decorate([
        core_1.Pipe({
            name: 'localDateStandart'
        }), 
        __metadata('design:paramtypes', [])
    ], LocalDateStandartPipe);
    return LocalDateStandartPipe;
}());
exports.LocalDateStandartPipe = LocalDateStandartPipe;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBpcGVzL2xvY2FsLWRhdGUtc3RhbmRhcnQtcGlwZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQW9DLGVBQWUsQ0FBQyxDQUFBO0FBQ3BELElBQVksTUFBTSxXQUFNLFFBQVEsQ0FBQyxDQUFBO0FBQ2pDLFFBQU8sb0JBQW9CLENBQUMsQ0FBQTtBQUs1QjtJQUFBO0lBT0EsQ0FBQztJQU5FLHlDQUFTLEdBQVQsVUFBVSxJQUFTLEVBQUUsSUFBVTtRQUM3QixNQUFNLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxHQUFHLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFBO1FBQ3RCLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLGNBQWMsQ0FBQyxDQUFBO0lBRXpDLENBQUM7SUFUSjtRQUFDLFdBQUksQ0FBQztZQUNILElBQUksRUFBRSxtQkFBbUI7U0FDM0IsQ0FBQzs7NkJBQUE7SUFRRiw0QkFBQztBQUFELENBUEEsQUFPQyxJQUFBO0FBUFksNkJBQXFCLHdCQU9qQyxDQUFBIiwiZmlsZSI6InBpcGVzL2xvY2FsLWRhdGUtc3RhbmRhcnQtcGlwZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFBpcGUsIFBpcGVUcmFuc2Zvcm0gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0ICogYXMgbW9tZW50IGZyb20gJ21vbWVudCc7XHJcbmltcG9ydCAnbW9tZW50L21pbi9sb2NhbGVzJztcclxuXHJcbkBQaXBlKHtcclxuICAgbmFtZTogJ2xvY2FsRGF0ZVN0YW5kYXJ0J1xyXG59KVxyXG5leHBvcnQgY2xhc3MgTG9jYWxEYXRlU3RhbmRhcnRQaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XHJcbiAgIHRyYW5zZm9ybShkYXRlOiBhbnksIGFyZ3M/OiBhbnkpOiBhbnkge1xyXG4gICAgIG1vbWVudC5sb2NhbGUoJ2x0LWx0Jyk7XHJcbiAgICAgbGV0IGQgPSBuZXcgRGF0ZShkYXRlKVxyXG4gICAgIHJldHVybiBtb21lbnQoZCkuZm9ybWF0KCdZWVlZIE1NTU0gRG8nKVxyXG5cclxuICAgfVxyXG59Il19
