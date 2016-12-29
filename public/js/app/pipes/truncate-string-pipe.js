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
var TruncateStringPipe = (function () {
    function TruncateStringPipe() {
    }
    TruncateStringPipe.prototype.transform = function (value, args) {
        var limit = args.length > 0 ? parseInt(args[0], 10) : 50;
        var trail = args.length > 1 ? args[1] : '...';
        return value.length > limit ? value.substring(0, limit) + trail : value;
    };
    TruncateStringPipe = __decorate([
        core_1.Pipe({
            name: 'truncate'
        }), 
        __metadata('design:paramtypes', [])
    ], TruncateStringPipe);
    return TruncateStringPipe;
}());
exports.TruncateStringPipe = TruncateStringPipe;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBpcGVzL3RydW5jYXRlLXN0cmluZy1waXBlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBbUIsZUFFbkIsQ0FBQyxDQUZpQztBQUtsQztJQUFBO0lBT0EsQ0FBQztJQU5DLHNDQUFTLEdBQVQsVUFBVSxLQUFhLEVBQUUsSUFBYztRQUNyQyxJQUFJLEtBQUssR0FBRyxJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsR0FBRyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxHQUFHLEVBQUUsQ0FBQztRQUN6RCxJQUFJLEtBQUssR0FBRyxJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDLEdBQUcsS0FBSyxDQUFDO1FBRTlDLE1BQU0sQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLEtBQUssR0FBRyxLQUFLLENBQUMsU0FBUyxDQUFDLENBQUMsRUFBRSxLQUFLLENBQUMsR0FBRyxLQUFLLEdBQUcsS0FBSyxDQUFDO0lBQzFFLENBQUM7SUFUSDtRQUFDLFdBQUksQ0FBQztZQUNKLElBQUksRUFBRSxVQUFVO1NBQ2pCLENBQUM7OzBCQUFBO0lBUUYseUJBQUM7QUFBRCxDQVBBLEFBT0MsSUFBQTtBQVBZLDBCQUFrQixxQkFPOUIsQ0FBQSIsImZpbGUiOiJwaXBlcy90cnVuY2F0ZS1zdHJpbmctcGlwZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7UGlwZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSdcclxuXHJcbkBQaXBlKHtcclxuICBuYW1lOiAndHJ1bmNhdGUnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBUcnVuY2F0ZVN0cmluZ1BpcGUge1xyXG4gIHRyYW5zZm9ybSh2YWx1ZTogc3RyaW5nLCBhcmdzOiBzdHJpbmdbXSkgOiBzdHJpbmcge1xyXG4gICAgbGV0IGxpbWl0ID0gYXJncy5sZW5ndGggPiAwID8gcGFyc2VJbnQoYXJnc1swXSwgMTApIDogNTA7XHJcbiAgICBsZXQgdHJhaWwgPSBhcmdzLmxlbmd0aCA+IDEgPyBhcmdzWzFdIDogJy4uLic7XHJcblxyXG4gICAgcmV0dXJuIHZhbHVlLmxlbmd0aCA+IGxpbWl0ID8gdmFsdWUuc3Vic3RyaW5nKDAsIGxpbWl0KSArIHRyYWlsIDogdmFsdWU7XHJcbiAgfVxyXG59Il19
