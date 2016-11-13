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
var angular2_notifications_1 = require('angular2-notifications');
var DesignersComponent = (function () {
    function DesignersComponent(designersService, notificationsService) {
        this.designersService = designersService;
        this.notificationsService = notificationsService;
        this.options = {
            position: ["top", "right"]
        };
    }
    DesignersComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.designersService.getDesigners()
            .subscribe(function (designers) {
            _this.designers = designers;
            _this.designersService.designers = designers;
            console.log(_this.designers);
        }, function (error) {
            _this.notificationsService.error('Įvyko klaida', 'Nepavyko gauti dizainerių informacijos', { timeOut: 3000, showProgressBar: false });
        });
    };
    DesignersComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'designers',
            templateUrl: 'designers.component.html',
            styleUrls: ['designers.component.css']
        }), 
        __metadata('design:paramtypes', [designers_service_1.DesignersService, angular2_notifications_1.NotificationsService])
    ], DesignersComponent);
    return DesignersComponent;
}());
exports.DesignersComponent = DesignersComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvZGVzaWduZXJzL2Rlc2lnbmVycy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUFrQyxlQUFlLENBQUMsQ0FBQTtBQUNsRCxrQ0FBaUMsa0NBQWtDLENBQUMsQ0FBQTtBQUNwRSx1Q0FBcUMsd0JBQXdCLENBQUMsQ0FBQTtBQVE5RDtJQUtFLDRCQUFvQixnQkFBa0MsRUFBVSxvQkFBMEM7UUFBdEYscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtRQUFVLHlCQUFvQixHQUFwQixvQkFBb0IsQ0FBc0I7UUFIbkcsWUFBTyxHQUFHO1lBQ2IsUUFBUSxFQUFFLENBQUMsS0FBSyxFQUFDLE9BQU8sQ0FBQztTQUMxQixDQUFDO0lBQzBHLENBQUM7SUFFL0cscUNBQVEsR0FBUjtRQUFBLGlCQVVDO1FBVEMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFlBQVksRUFBRTthQUNuQyxTQUFTLENBQUMsVUFBQSxTQUFTO1lBQ2xCLEtBQUksQ0FBQyxTQUFTLEdBQUcsU0FBUyxDQUFDO1lBQzNCLEtBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxTQUFTLEdBQUcsU0FBUyxDQUFDO1lBQzVDLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQzlCLENBQUMsRUFBRSxVQUFBLEtBQUs7WUFDTixLQUFJLENBQUMsb0JBQW9CLENBQUMsS0FBSyxDQUFDLGNBQWMsRUFBRSx3Q0FBd0MsRUFBRSxFQUFDLE9BQU8sRUFBRSxJQUFJLEVBQUUsZUFBZSxFQUFFLEtBQUssRUFBQyxDQUFDLENBQUE7UUFDcEksQ0FBQyxDQUFDLENBQUM7SUFFTCxDQUFDO0lBdkJIO1FBQUMsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixRQUFRLEVBQUUsV0FBVztZQUNyQixXQUFXLEVBQUUsMEJBQTBCO1lBQ3ZDLFNBQVMsRUFBRSxDQUFDLHlCQUF5QixDQUFDO1NBQ3ZDLENBQUM7OzBCQUFBO0lBbUJGLHlCQUFDO0FBQUQsQ0FsQkEsQUFrQkMsSUFBQTtBQWxCWSwwQkFBa0IscUJBa0I5QixDQUFBIiwiZmlsZSI6ImNvbXBvbmVudHMvZGVzaWduZXJzL2Rlc2lnbmVycy5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBEZXNpZ25lcnNTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvZGVzaWduZXJzLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBOb3RpZmljYXRpb25zU2VydmljZSB9IGZyb20gJ2FuZ3VsYXIyLW5vdGlmaWNhdGlvbnMnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcclxuICBzZWxlY3RvcjogJ2Rlc2lnbmVycycsXHJcbiAgdGVtcGxhdGVVcmw6ICdkZXNpZ25lcnMuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWydkZXNpZ25lcnMuY29tcG9uZW50LmNzcyddXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBEZXNpZ25lcnNDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gIGRlc2lnbmVyczogYW55O1xyXG4gIHB1YmxpYyBvcHRpb25zID0ge1xyXG4gICAgICBwb3NpdGlvbjogW1widG9wXCIsXCJyaWdodFwiXVxyXG4gICAgfTtcclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGRlc2lnbmVyc1NlcnZpY2U6IERlc2lnbmVyc1NlcnZpY2UsIHByaXZhdGUgbm90aWZpY2F0aW9uc1NlcnZpY2U6IE5vdGlmaWNhdGlvbnNTZXJ2aWNlKSB7IH1cclxuXHJcbiAgbmdPbkluaXQoKSB7IFxyXG4gICAgdGhpcy5kZXNpZ25lcnNTZXJ2aWNlLmdldERlc2lnbmVycygpXHJcbiAgICAuc3Vic2NyaWJlKGRlc2lnbmVycyA9PiB7XHJcbiAgICAgIHRoaXMuZGVzaWduZXJzID0gZGVzaWduZXJzO1xyXG4gICAgICB0aGlzLmRlc2lnbmVyc1NlcnZpY2UuZGVzaWduZXJzID0gZGVzaWduZXJzO1xyXG4gICAgICBjb25zb2xlLmxvZyh0aGlzLmRlc2lnbmVycyk7XHJcbiAgICB9LCBlcnJvciA9PiB7XHJcbiAgICAgIHRoaXMubm90aWZpY2F0aW9uc1NlcnZpY2UuZXJyb3IoJ8SudnlrbyBrbGFpZGEnLCAnTmVwYXZ5a28gZ2F1dGkgZGl6YWluZXJpxbMgaW5mb3JtYWNpam9zJywge3RpbWVPdXQ6IDMwMDAsIHNob3dQcm9ncmVzc0JhcjogZmFsc2V9KVxyXG4gICAgfSk7XHJcblxyXG4gIH1cclxufSJdfQ==
