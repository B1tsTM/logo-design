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
var designers_service_1 = require('../../services/designers.service');
var DesignersComponent = (function () {
    function DesignersComponent(designersService) {
        this.designersService = designersService;
    }
    DesignersComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.designersService.getDesigners()
            .subscribe(function (designers) {
            _this.designers = designers;
            _this.designersService.designers = designers;
            console.log(_this.designers);
        });
    };
    DesignersComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'designers',
            templateUrl: 'designers.component.html',
            styleUrls: ['designers.component.css']
        }), 
        __metadata('design:paramtypes', [designers_service_1.DesignersService])
    ], DesignersComponent);
    return DesignersComponent;
}());
exports.DesignersComponent = DesignersComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvZGVzaWduZXJzL2Rlc2lnbmVycy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUFrQyxlQUFlLENBQUMsQ0FBQTtBQUNsRCxrQ0FBaUMsa0NBQWtDLENBQUMsQ0FBQTtBQVFwRTtJQUVFLDRCQUFvQixnQkFBa0M7UUFBbEMscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtJQUFJLENBQUM7SUFFM0QscUNBQVEsR0FBUjtRQUFBLGlCQVFDO1FBUEMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFlBQVksRUFBRTthQUNuQyxTQUFTLENBQUMsVUFBQSxTQUFTO1lBQ2xCLEtBQUksQ0FBQyxTQUFTLEdBQUcsU0FBUyxDQUFDO1lBQzNCLEtBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxTQUFTLEdBQUcsU0FBUyxDQUFDO1lBQzVDLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQzlCLENBQUMsQ0FBQyxDQUFDO0lBRUwsQ0FBQztJQWxCSDtRQUFDLGdCQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsUUFBUSxFQUFFLFdBQVc7WUFDckIsV0FBVyxFQUFFLDBCQUEwQjtZQUN2QyxTQUFTLEVBQUUsQ0FBQyx5QkFBeUIsQ0FBQztTQUN2QyxDQUFDOzswQkFBQTtJQWNGLHlCQUFDO0FBQUQsQ0FiQSxBQWFDLElBQUE7QUFiWSwwQkFBa0IscUJBYTlCLENBQUEiLCJmaWxlIjoiY29tcG9uZW50cy9kZXNpZ25lcnMvZGVzaWduZXJzLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IERlc2lnbmVyc1NlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9kZXNpZ25lcnMuc2VydmljZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBtb2R1bGVJZDogbW9kdWxlLmlkLFxyXG4gIHNlbGVjdG9yOiAnZGVzaWduZXJzJyxcclxuICB0ZW1wbGF0ZVVybDogJ2Rlc2lnbmVycy5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJ2Rlc2lnbmVycy5jb21wb25lbnQuY3NzJ11cclxufSlcclxuZXhwb3J0IGNsYXNzIERlc2lnbmVyc0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgZGVzaWduZXJzOiBhbnk7XHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBkZXNpZ25lcnNTZXJ2aWNlOiBEZXNpZ25lcnNTZXJ2aWNlKSB7IH1cclxuXHJcbiAgbmdPbkluaXQoKSB7IFxyXG4gICAgdGhpcy5kZXNpZ25lcnNTZXJ2aWNlLmdldERlc2lnbmVycygpXHJcbiAgICAuc3Vic2NyaWJlKGRlc2lnbmVycyA9PiB7XHJcbiAgICAgIHRoaXMuZGVzaWduZXJzID0gZGVzaWduZXJzO1xyXG4gICAgICB0aGlzLmRlc2lnbmVyc1NlcnZpY2UuZGVzaWduZXJzID0gZGVzaWduZXJzO1xyXG4gICAgICBjb25zb2xlLmxvZyh0aGlzLmRlc2lnbmVycyk7XHJcbiAgICB9KTtcclxuXHJcbiAgfVxyXG59Il19
