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
var ng2_bootstrap_1 = require('ng2-bootstrap/ng2-bootstrap');
var index_1 = require('./components/index');
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [platform_browser_1.BrowserModule, forms_1.FormsModule, app_routing_1.routing, ng2_bootstrap_1.AlertModule, ng2_bootstrap_1.DatepickerModule],
            declarations: [app_component_1.AppComponent, index_1.NavbarComponent, index_1.HeaderComponent,
                index_1.FooterComponent, index_1.CategoriesComponent, index_1.DesignersComponent,
                index_1.HowItWorksComponent, index_1.PageNotFoundComponent, index_1.DateTimeComponent,
                index_1.BSAlertComponent, index_1.ContestsComponent],
            bootstrap: [app_component_1.AppComponent],
            providers: [app_routing_1.appRoutingProviders]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUE4QixlQUFlLENBQUMsQ0FBQTtBQUM5QyxpQ0FBOEIsMkJBQTJCLENBQUMsQ0FBQTtBQUMxRCw0QkFDcUMsZUFBZSxDQUFDLENBQUE7QUFDckQsc0JBQTRCLGdCQUFnQixDQUFDLENBQUE7QUFFN0MsOEJBQThCLGlCQUFpQixDQUFDLENBQUE7QUFFaEQsOEJBQThDLDZCQUE2QixDQUFDLENBQUE7QUFFNUUsc0JBRzJCLG9CQUFvQixDQUFDLENBQUE7QUFhaEQ7SUFBQTtJQUF5QixDQUFDO0lBVDFCO1FBQUMsZUFBUSxDQUFDO1lBQ1IsT0FBTyxFQUFFLENBQUUsZ0NBQWEsRUFBRSxtQkFBVyxFQUFFLHFCQUFPLEVBQUUsMkJBQVcsRUFBRSxnQ0FBZ0IsQ0FBRTtZQUMvRSxZQUFZLEVBQUUsQ0FBRSw0QkFBWSxFQUFFLHVCQUFlLEVBQUUsdUJBQWU7Z0JBQzlDLHVCQUFlLEVBQUUsMkJBQW1CLEVBQUUsMEJBQWtCO2dCQUN4RCwyQkFBbUIsRUFBRSw2QkFBcUIsRUFBRSx5QkFBaUI7Z0JBQzdELHdCQUFnQixFQUFFLHlCQUFpQixDQUFFO1lBQ3JELFNBQVMsRUFBRSxDQUFFLDRCQUFZLENBQUU7WUFDM0IsU0FBUyxFQUFFLENBQUUsaUNBQW1CLENBQUU7U0FDbkMsQ0FBQzs7aUJBQUE7SUFDdUIsZ0JBQUM7QUFBRCxDQUF6QixBQUEwQixJQUFBO0FBQWIsaUJBQVMsWUFBSSxDQUFBIiwiZmlsZSI6ImFwcC5tb2R1bGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9ICAgICAgZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEJyb3dzZXJNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyJztcclxuaW1wb3J0IHsgcm91dGluZyxcclxuICAgICAgICAgYXBwUm91dGluZ1Byb3ZpZGVycyB9ICBmcm9tICcuL2FwcC5yb3V0aW5nJztcclxuaW1wb3J0IHsgRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcblxyXG5pbXBvcnQgeyBBcHBDb21wb25lbnQgfSAgZnJvbSAnLi9hcHAuY29tcG9uZW50JztcclxuXHJcbmltcG9ydCB7IEFsZXJ0TW9kdWxlLCBEYXRlcGlja2VyTW9kdWxlIH0gZnJvbSAnbmcyLWJvb3RzdHJhcC9uZzItYm9vdHN0cmFwJztcclxuXHJcbmltcG9ydCB7IE5hdmJhckNvbXBvbmVudCwgSGVhZGVyQ29tcG9uZW50LCBGb290ZXJDb21wb25lbnQsIFxyXG4gIENhdGVnb3JpZXNDb21wb25lbnQsIERlc2lnbmVyc0NvbXBvbmVudCwgSG93SXRXb3Jrc0NvbXBvbmVudCwgXHJcbiAgUGFnZU5vdEZvdW5kQ29tcG9uZW50LCBCU0FsZXJ0Q29tcG9uZW50LCBEYXRlVGltZUNvbXBvbmVudCxcclxuICBDb250ZXN0c0NvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9pbmRleCc7XHJcblxyXG5cclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgaW1wb3J0czogWyBCcm93c2VyTW9kdWxlLCBGb3Jtc01vZHVsZSwgcm91dGluZywgQWxlcnRNb2R1bGUsIERhdGVwaWNrZXJNb2R1bGUgXSxcclxuICBkZWNsYXJhdGlvbnM6IFsgQXBwQ29tcG9uZW50LCBOYXZiYXJDb21wb25lbnQsIEhlYWRlckNvbXBvbmVudCwgXHJcbiAgICAgICAgICAgICAgICAgIEZvb3RlckNvbXBvbmVudCwgQ2F0ZWdvcmllc0NvbXBvbmVudCwgRGVzaWduZXJzQ29tcG9uZW50LCBcclxuICAgICAgICAgICAgICAgICAgSG93SXRXb3Jrc0NvbXBvbmVudCwgUGFnZU5vdEZvdW5kQ29tcG9uZW50LCBEYXRlVGltZUNvbXBvbmVudCxcclxuICAgICAgICAgICAgICAgICAgQlNBbGVydENvbXBvbmVudCwgQ29udGVzdHNDb21wb25lbnQgXSxcclxuICBib290c3RyYXA6IFsgQXBwQ29tcG9uZW50IF0sXHJcbiAgcHJvdmlkZXJzOiBbIGFwcFJvdXRpbmdQcm92aWRlcnMgXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgQXBwTW9kdWxlIHsgfVxyXG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
