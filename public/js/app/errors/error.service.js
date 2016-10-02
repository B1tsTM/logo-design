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
var error_1 = require('./error');
var ErrorService = (function () {
    function ErrorService() {
        this.errorOccurred = new core_1.EventEmitter();
    }
    ErrorService.prototype.handleError = function (error) {
        var errorData = new error_1.Error(error.title, error.error.message);
        this.errorOccurred.emit(errorData);
    };
    ErrorService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], ErrorService);
    return ErrorService;
}());
exports.ErrorService = ErrorService;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVycm9ycy9lcnJvci5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBeUMsZUFBZSxDQUFDLENBQUE7QUFDekQsc0JBQXNCLFNBQVMsQ0FBQyxDQUFBO0FBR2hDO0lBUUU7UUFQQSxrQkFBYSxHQUFHLElBQUksbUJBQVksRUFBUyxDQUFDO0lBTzFCLENBQUM7SUFMakIsa0NBQVcsR0FBWCxVQUFZLEtBQVU7UUFDcEIsSUFBTSxTQUFTLEdBQUcsSUFBSSxhQUFLLENBQUMsS0FBSyxDQUFDLEtBQUssRUFBRSxLQUFLLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQzlELElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQ3JDLENBQUM7SUFQSDtRQUFDLGlCQUFVLEVBQUU7O29CQUFBO0lBVWIsbUJBQUM7QUFBRCxDQVRBLEFBU0MsSUFBQTtBQVRZLG9CQUFZLGVBU3hCLENBQUEiLCJmaWxlIjoiZXJyb3JzL2Vycm9yLnNlcnZpY2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlLCBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgRXJyb3IgfSBmcm9tICcuL2Vycm9yJztcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIEVycm9yU2VydmljZSB7XHJcbiAgZXJyb3JPY2N1cnJlZCA9IG5ldyBFdmVudEVtaXR0ZXI8RXJyb3I+KCk7XHJcblxyXG4gIGhhbmRsZUVycm9yKGVycm9yOiBhbnkpIHtcclxuICAgIGNvbnN0IGVycm9yRGF0YSA9IG5ldyBFcnJvcihlcnJvci50aXRsZSwgZXJyb3IuZXJyb3IubWVzc2FnZSk7XHJcbiAgICB0aGlzLmVycm9yT2NjdXJyZWQuZW1pdChlcnJvckRhdGEpO1xyXG4gIH1cclxuXHJcbiAgY29uc3RydWN0b3IoKSB7IH1cclxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
