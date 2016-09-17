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
var BSAlertComponent = (function () {
    function BSAlertComponent() {
        //
        this.alerts = [
            {
                type: 'danger',
                msg: 'Oh snap! Change a few things up and try submitting again.'
            },
            {
                type: 'success',
                msg: 'Well done! You successfully read this important alert message.',
                closable: true
            }
        ];
    }
    BSAlertComponent.prototype.closeAlert = function (i) {
        this.alerts.splice(i, 1);
    };
    BSAlertComponent.prototype.addAlert = function () {
        this.alerts.push({ msg: 'Another alert!', type: 'warning', closable: true });
    }; //
    BSAlertComponent.prototype.ngOnInit = function () { };
    BSAlertComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'bs-alert',
            templateUrl: 'alert.component.html'
        }), 
        __metadata('design:paramtypes', [])
    ], BSAlertComponent);
    return BSAlertComponent;
}());
exports.BSAlertComponent = BSAlertComponent;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvYnMtY29tcG9uZW50cy9icy1hbGVydC9hbGVydC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUFrQyxlQUFlLENBQUMsQ0FBQTtBQU9sRDtJQUNFO1FBRUEsRUFBRTtRQUNTLFdBQU0sR0FBaUI7WUFDaEM7Z0JBQ0UsSUFBSSxFQUFFLFFBQVE7Z0JBQ2QsR0FBRyxFQUFFLDJEQUEyRDthQUNqRTtZQUNEO2dCQUNFLElBQUksRUFBRSxTQUFTO2dCQUNmLEdBQUcsRUFBRSxnRUFBZ0U7Z0JBQ3JFLFFBQVEsRUFBRSxJQUFJO2FBQ2Y7U0FDRixDQUFDO0lBYmMsQ0FBQztJQWVWLHFDQUFVLEdBQWpCLFVBQWtCLENBQVE7UUFDeEIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQzNCLENBQUM7SUFFTSxtQ0FBUSxHQUFmO1FBQ0UsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsRUFBQyxHQUFHLEVBQUUsZ0JBQWdCLEVBQUUsSUFBSSxFQUFFLFNBQVMsRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFDLENBQUMsQ0FBQztJQUM3RSxDQUFDLEVBQUEsRUFBRTtJQUVILG1DQUFRLEdBQVIsY0FBYSxDQUFDO0lBN0JoQjtRQUFDLGdCQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsUUFBUSxFQUFFLFVBQVU7WUFDcEIsV0FBVyxFQUFFLHNCQUFzQjtTQUNwQyxDQUFDOzt3QkFBQTtJQTBCRix1QkFBQztBQUFELENBekJBLEFBeUJDLElBQUE7QUF6Qlksd0JBQWdCLG1CQXlCNUIsQ0FBQSIsImZpbGUiOiJjb21wb25lbnRzL2JzLWNvbXBvbmVudHMvYnMtYWxlcnQvYWxlcnQuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIG1vZHVsZUlkOiBtb2R1bGUuaWQsXHJcbiAgc2VsZWN0b3I6ICdicy1hbGVydCcsXHJcbiAgdGVtcGxhdGVVcmw6ICdhbGVydC5jb21wb25lbnQuaHRtbCdcclxufSlcclxuZXhwb3J0IGNsYXNzIEJTQWxlcnRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gIGNvbnN0cnVjdG9yKCkgeyB9XHJcblxyXG4gIC8vXHJcbiAgICAgIHB1YmxpYyBhbGVydHM6QXJyYXk8T2JqZWN0PiA9IFtcclxuICAgIHtcclxuICAgICAgdHlwZTogJ2RhbmdlcicsXHJcbiAgICAgIG1zZzogJ09oIHNuYXAhIENoYW5nZSBhIGZldyB0aGluZ3MgdXAgYW5kIHRyeSBzdWJtaXR0aW5nIGFnYWluLidcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIHR5cGU6ICdzdWNjZXNzJyxcclxuICAgICAgbXNnOiAnV2VsbCBkb25lISBZb3Ugc3VjY2Vzc2Z1bGx5IHJlYWQgdGhpcyBpbXBvcnRhbnQgYWxlcnQgbWVzc2FnZS4nLFxyXG4gICAgICBjbG9zYWJsZTogdHJ1ZVxyXG4gICAgfVxyXG4gIF07XHJcbiBcclxuICBwdWJsaWMgY2xvc2VBbGVydChpOm51bWJlcik6dm9pZCB7XHJcbiAgICB0aGlzLmFsZXJ0cy5zcGxpY2UoaSwgMSk7XHJcbiAgfVxyXG4gXHJcbiAgcHVibGljIGFkZEFsZXJ0KCk6dm9pZCB7XHJcbiAgICB0aGlzLmFsZXJ0cy5wdXNoKHttc2c6ICdBbm90aGVyIGFsZXJ0IScsIHR5cGU6ICd3YXJuaW5nJywgY2xvc2FibGU6IHRydWV9KTtcclxuICB9Ly9cclxuXHJcbiAgbmdPbkluaXQoKSB7IH1cclxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
