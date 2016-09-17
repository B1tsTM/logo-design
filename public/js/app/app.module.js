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
var platform_browser_1 = require('@angular/platform-browser');
var app_routing_1 = require('./app.routing');
var forms_1 = require('@angular/forms');
var app_component_1 = require('./app.component');
var navbar_component_1 = require('./components/navbar/navbar.component');
var header_component_1 = require('./components/header/header.component');
var footer_component_1 = require('./components/footer/footer.component');
var categories_component_1 = require('./components/categories/categories.component');
var designers_component_1 = require('./components/designers/designers.component');
var howitworks_component_1 = require('./components/howitworks/howitworks.component');
var notfound_component_1 = require('./components/notfound/notfound.component');
var ng2_bootstrap_1 = require('ng2-bootstrap/ng2-bootstrap');
var datetime_component_1 = require('./components/bs-components/bs-datetime/datetime.component');
var alert_component_1 = require('./components/bs-components/bs-alert/alert.component');
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [platform_browser_1.BrowserModule, forms_1.FormsModule, app_routing_1.routing, ng2_bootstrap_1.AlertModule, ng2_bootstrap_1.DatepickerModule],
            declarations: [app_component_1.AppComponent, navbar_component_1.NavbarComponent, header_component_1.HeaderComponent,
                footer_component_1.FooterComponent, categories_component_1.CategoriesComponent, designers_component_1.DesignersComponent,
                howitworks_component_1.HowItWorksComponent, notfound_component_1.PageNotFoundComponent, datetime_component_1.DateTimeComponent,
                alert_component_1.BSAlertComponent],
            bootstrap: [app_component_1.AppComponent],
            providers: [app_routing_1.appRoutingProviders]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUE4QixlQUFlLENBQUMsQ0FBQTtBQUM5QyxpQ0FBOEIsMkJBQTJCLENBQUMsQ0FBQTtBQUMxRCw0QkFDcUMsZUFBZSxDQUFDLENBQUE7QUFDckQsc0JBQTRCLGdCQUFnQixDQUFDLENBQUE7QUFFN0MsOEJBQThCLGlCQUFpQixDQUFDLENBQUE7QUFDaEQsaUNBQWdDLHNDQUFzQyxDQUFDLENBQUE7QUFDdkUsaUNBQWdDLHNDQUFzQyxDQUFDLENBQUE7QUFDdkUsaUNBQWdDLHNDQUFzQyxDQUFDLENBQUE7QUFFdkUscUNBQW9DLDhDQUE4QyxDQUFDLENBQUE7QUFDbkYsb0NBQW1DLDRDQUE0QyxDQUFDLENBQUE7QUFDaEYscUNBQW9DLDhDQUE4QyxDQUFDLENBQUE7QUFDbkYsbUNBQXNDLDBDQUEwQyxDQUFDLENBQUE7QUFFakYsOEJBQThDLDZCQUE2QixDQUFDLENBQUE7QUFDNUUsbUNBQWtDLDJEQUEyRCxDQUFDLENBQUE7QUFDOUYsZ0NBQWlDLHFEQUFxRCxDQUFDLENBQUE7QUFhdkY7SUFBQTtJQUF5QixDQUFDO0lBVDFCO1FBQUMsZUFBUSxDQUFDO1lBQ1IsT0FBTyxFQUFFLENBQUUsZ0NBQWEsRUFBRSxtQkFBVyxFQUFFLHFCQUFPLEVBQUUsMkJBQVcsRUFBRSxnQ0FBZ0IsQ0FBRTtZQUMvRSxZQUFZLEVBQUUsQ0FBRSw0QkFBWSxFQUFFLGtDQUFlLEVBQUUsa0NBQWU7Z0JBQzlDLGtDQUFlLEVBQUUsMENBQW1CLEVBQUUsd0NBQWtCO2dCQUN4RCwwQ0FBbUIsRUFBRSwwQ0FBcUIsRUFBRSxzQ0FBaUI7Z0JBQzdELGtDQUFnQixDQUFFO1lBQ2xDLFNBQVMsRUFBRSxDQUFFLDRCQUFZLENBQUU7WUFDM0IsU0FBUyxFQUFFLENBQUUsaUNBQW1CLENBQUU7U0FDbkMsQ0FBQzs7aUJBQUE7SUFDdUIsZ0JBQUM7QUFBRCxDQUF6QixBQUEwQixJQUFBO0FBQWIsaUJBQVMsWUFBSSxDQUFBIiwiZmlsZSI6ImFwcC5tb2R1bGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9ICAgICAgZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEJyb3dzZXJNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyJztcclxuaW1wb3J0IHsgcm91dGluZyxcclxuICAgICAgICAgYXBwUm91dGluZ1Byb3ZpZGVycyB9ICBmcm9tICcuL2FwcC5yb3V0aW5nJztcclxuaW1wb3J0IHsgRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcblxyXG5pbXBvcnQgeyBBcHBDb21wb25lbnQgfSAgZnJvbSAnLi9hcHAuY29tcG9uZW50JztcclxuaW1wb3J0IHsgTmF2YmFyQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL25hdmJhci9uYXZiYXIuY29tcG9uZW50JztcclxuaW1wb3J0IHsgSGVhZGVyQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL2hlYWRlci9oZWFkZXIuY29tcG9uZW50JztcclxuaW1wb3J0IHsgRm9vdGVyQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50JztcclxuXHJcbmltcG9ydCB7IENhdGVnb3JpZXNDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvY2F0ZWdvcmllcy9jYXRlZ29yaWVzLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IERlc2lnbmVyc0NvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9kZXNpZ25lcnMvZGVzaWduZXJzLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IEhvd0l0V29ya3NDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvaG93aXR3b3Jrcy9ob3dpdHdvcmtzLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFBhZ2VOb3RGb3VuZENvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9ub3Rmb3VuZC9ub3Rmb3VuZC5jb21wb25lbnQnO1xyXG5cclxuaW1wb3J0IHsgQWxlcnRNb2R1bGUsIERhdGVwaWNrZXJNb2R1bGUgfSBmcm9tICduZzItYm9vdHN0cmFwL25nMi1ib290c3RyYXAnO1xyXG5pbXBvcnQgeyBEYXRlVGltZUNvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9icy1jb21wb25lbnRzL2JzLWRhdGV0aW1lL2RhdGV0aW1lLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IEJTQWxlcnRDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvYnMtY29tcG9uZW50cy9icy1hbGVydC9hbGVydC5jb21wb25lbnQnO1xyXG5cclxuXHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gIGltcG9ydHM6IFsgQnJvd3Nlck1vZHVsZSwgRm9ybXNNb2R1bGUsIHJvdXRpbmcsIEFsZXJ0TW9kdWxlLCBEYXRlcGlja2VyTW9kdWxlIF0sXHJcbiAgZGVjbGFyYXRpb25zOiBbIEFwcENvbXBvbmVudCwgTmF2YmFyQ29tcG9uZW50LCBIZWFkZXJDb21wb25lbnQsIFxyXG4gICAgICAgICAgICAgICAgICBGb290ZXJDb21wb25lbnQsIENhdGVnb3JpZXNDb21wb25lbnQsIERlc2lnbmVyc0NvbXBvbmVudCwgXHJcbiAgICAgICAgICAgICAgICAgIEhvd0l0V29ya3NDb21wb25lbnQsIFBhZ2VOb3RGb3VuZENvbXBvbmVudCwgRGF0ZVRpbWVDb21wb25lbnQsXHJcbiAgICAgICAgICAgICAgICAgIEJTQWxlcnRDb21wb25lbnQgXSxcclxuICBib290c3RyYXA6IFsgQXBwQ29tcG9uZW50IF0sXHJcbiAgcHJvdmlkZXJzOiBbIGFwcFJvdXRpbmdQcm92aWRlcnMgXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgQXBwTW9kdWxlIHsgfVxyXG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
