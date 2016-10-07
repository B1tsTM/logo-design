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
var DesignersComponent = (function () {
    function DesignersComponent(contestsService) {
        this.contestsService = contestsService;
    }
    DesignersComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.contestsService.getDesigners()
            .subscribe(function (designers) {
            _this.designers = designers;
            _this.contestsService.designers = designers;
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
        __metadata('design:paramtypes', [contests_service_1.ContestsService])
    ], DesignersComponent);
    return DesignersComponent;
}());
exports.DesignersComponent = DesignersComponent;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvZGVzaWduZXJzL2Rlc2lnbmVycy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUFrQyxlQUFlLENBQUMsQ0FBQTtBQUNsRCxpQ0FBZ0MsaUNBQWlDLENBQUMsQ0FBQTtBQVFsRTtJQUVFLDRCQUFvQixlQUFnQztRQUFoQyxvQkFBZSxHQUFmLGVBQWUsQ0FBaUI7SUFBSSxDQUFDO0lBRXpELHFDQUFRLEdBQVI7UUFBQSxpQkFRQztRQVBDLElBQUksQ0FBQyxlQUFlLENBQUMsWUFBWSxFQUFFO2FBQ2xDLFNBQVMsQ0FBQyxVQUFBLFNBQVM7WUFDbEIsS0FBSSxDQUFDLFNBQVMsR0FBRyxTQUFTLENBQUM7WUFDM0IsS0FBSSxDQUFDLGVBQWUsQ0FBQyxTQUFTLEdBQUcsU0FBUyxDQUFDO1lBQzNDLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQzlCLENBQUMsQ0FBQyxDQUFDO0lBRUwsQ0FBQztJQWxCSDtRQUFDLGdCQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsUUFBUSxFQUFFLFdBQVc7WUFDckIsV0FBVyxFQUFFLDBCQUEwQjtZQUN2QyxTQUFTLEVBQUUsQ0FBQyx5QkFBeUIsQ0FBQztTQUN2QyxDQUFDOzswQkFBQTtJQWNGLHlCQUFDO0FBQUQsQ0FiQSxBQWFDLElBQUE7QUFiWSwwQkFBa0IscUJBYTlCLENBQUEiLCJmaWxlIjoiY29tcG9uZW50cy9kZXNpZ25lcnMvZGVzaWduZXJzLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IENvbnRlc3RzU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL2NvbnRlc3RzLnNlcnZpY2UnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcclxuICBzZWxlY3RvcjogJ2Rlc2lnbmVycycsXHJcbiAgdGVtcGxhdGVVcmw6ICdkZXNpZ25lcnMuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWydkZXNpZ25lcnMuY29tcG9uZW50LmNzcyddXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBEZXNpZ25lcnNDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gIGRlc2lnbmVyczogYW55O1xyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgY29udGVzdHNTZXJ2aWNlOiBDb250ZXN0c1NlcnZpY2UpIHsgfVxyXG5cclxuICBuZ09uSW5pdCgpIHsgXHJcbiAgICB0aGlzLmNvbnRlc3RzU2VydmljZS5nZXREZXNpZ25lcnMoKVxyXG4gICAgLnN1YnNjcmliZShkZXNpZ25lcnMgPT4ge1xyXG4gICAgICB0aGlzLmRlc2lnbmVycyA9IGRlc2lnbmVycztcclxuICAgICAgdGhpcy5jb250ZXN0c1NlcnZpY2UuZGVzaWduZXJzID0gZGVzaWduZXJzO1xyXG4gICAgICBjb25zb2xlLmxvZyh0aGlzLmRlc2lnbmVycyk7XHJcbiAgICB9KTtcclxuXHJcbiAgfVxyXG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
