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
var http_1 = require('@angular/http');
var app_component_1 = require('./app.component');
var primeng_1 = require('primeng/primeng');
var ng2_bootstrap_1 = require('ng2-bootstrap/ng2-bootstrap');
var index_1 = require('./components/index');
var contests_service_1 = require('./services/contests.service');
var categories_module_1 = require('./components/categories/categories.module');
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [platform_browser_1.BrowserModule, forms_1.FormsModule, app_routing_1.routing,
                ng2_bootstrap_1.AlertModule, ng2_bootstrap_1.DatepickerModule, http_1.HttpModule,
                primeng_1.TabViewModule, categories_module_1.CategoriesModule],
            declarations: [app_component_1.AppComponent, index_1.NavbarComponent, index_1.HeaderComponent,
                index_1.FooterComponent, index_1.CategoriesComponent, index_1.DesignersComponent,
                index_1.HowItWorksComponent, index_1.PageNotFoundComponent, index_1.DateTimeComponent,
                index_1.BSAlertComponent, index_1.ContestsComponent, index_1.LoginComponent, index_1.RegisterComponent],
            bootstrap: [app_component_1.AppComponent],
            providers: [app_routing_1.appRoutingProviders, contests_service_1.ContestsService]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUE4QixlQUFlLENBQUMsQ0FBQTtBQUM5QyxpQ0FBOEIsMkJBQTJCLENBQUMsQ0FBQTtBQUMxRCw0QkFDcUMsZUFBZSxDQUFDLENBQUE7QUFDckQsc0JBQTRCLGdCQUFnQixDQUFDLENBQUE7QUFDN0MscUJBQTJCLGVBQWUsQ0FBQyxDQUFBO0FBQzNDLDhCQUE4QixpQkFBaUIsQ0FBQyxDQUFBO0FBQ2hELHdCQUE4QixpQkFBaUIsQ0FBQyxDQUFBO0FBRWhELDhCQUE4Qyw2QkFBNkIsQ0FBQyxDQUFBO0FBRTVFLHNCQUc4RCxvQkFBb0IsQ0FBQyxDQUFBO0FBRW5GLGlDQUFnQyw2QkFBNkIsQ0FBQyxDQUFBO0FBRTlELGtDQUFpQywyQ0FBMkMsQ0FBQyxDQUFBO0FBZTdFO0lBQUE7SUFBeUIsQ0FBQztJQVgxQjtRQUFDLGVBQVEsQ0FBQztZQUNSLE9BQU8sRUFBRSxDQUFFLGdDQUFhLEVBQUUsbUJBQVcsRUFBRSxxQkFBTztnQkFDbkMsMkJBQVcsRUFBRSxnQ0FBZ0IsRUFBRSxpQkFBVTtnQkFDekMsdUJBQWEsRUFBRSxvQ0FBZ0IsQ0FBRTtZQUM1QyxZQUFZLEVBQUUsQ0FBRSw0QkFBWSxFQUFFLHVCQUFlLEVBQUUsdUJBQWU7Z0JBQzlDLHVCQUFlLEVBQUUsMkJBQW1CLEVBQUUsMEJBQWtCO2dCQUN4RCwyQkFBbUIsRUFBRSw2QkFBcUIsRUFBRSx5QkFBaUI7Z0JBQzdELHdCQUFnQixFQUFFLHlCQUFpQixFQUFFLHNCQUFjLEVBQUUseUJBQWlCLENBQUU7WUFDeEYsU0FBUyxFQUFFLENBQUUsNEJBQVksQ0FBRTtZQUMzQixTQUFTLEVBQUUsQ0FBRSxpQ0FBbUIsRUFBRSxrQ0FBZSxDQUFFO1NBQ3BELENBQUM7O2lCQUFBO0lBQ3VCLGdCQUFDO0FBQUQsQ0FBekIsQUFBMEIsSUFBQTtBQUFiLGlCQUFTLFlBQUksQ0FBQSIsImZpbGUiOiJhcHAubW9kdWxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSAgICAgIGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBCcm93c2VyTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlcic7XHJcbmltcG9ydCB7IHJvdXRpbmcsXHJcbiAgICAgICAgIGFwcFJvdXRpbmdQcm92aWRlcnMgfSAgZnJvbSAnLi9hcHAucm91dGluZyc7XHJcbmltcG9ydCB7IEZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5pbXBvcnQgeyBIdHRwTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvaHR0cCc7XHJcbmltcG9ydCB7IEFwcENvbXBvbmVudCB9ICBmcm9tICcuL2FwcC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBUYWJWaWV3TW9kdWxlIH0gZnJvbSAncHJpbWVuZy9wcmltZW5nJztcclxuXHJcbmltcG9ydCB7IEFsZXJ0TW9kdWxlLCBEYXRlcGlja2VyTW9kdWxlIH0gZnJvbSAnbmcyLWJvb3RzdHJhcC9uZzItYm9vdHN0cmFwJztcclxuXHJcbmltcG9ydCB7IE5hdmJhckNvbXBvbmVudCwgSGVhZGVyQ29tcG9uZW50LCBGb290ZXJDb21wb25lbnQsIFxyXG4gIENhdGVnb3JpZXNDb21wb25lbnQsIERlc2lnbmVyc0NvbXBvbmVudCwgSG93SXRXb3Jrc0NvbXBvbmVudCwgXHJcbiAgUGFnZU5vdEZvdW5kQ29tcG9uZW50LCBCU0FsZXJ0Q29tcG9uZW50LCBEYXRlVGltZUNvbXBvbmVudCxcclxuICBDb250ZXN0c0NvbXBvbmVudCwgUmVnaXN0ZXJDb21wb25lbnQsIExvZ2luQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL2luZGV4JztcclxuXHJcbmltcG9ydCB7IENvbnRlc3RzU2VydmljZSB9IGZyb20gJy4vc2VydmljZXMvY29udGVzdHMuc2VydmljZSc7XHJcblxyXG5pbXBvcnQgeyBDYXRlZ29yaWVzTW9kdWxlIH0gZnJvbSAnLi9jb21wb25lbnRzL2NhdGVnb3JpZXMvY2F0ZWdvcmllcy5tb2R1bGUnO1xyXG5cclxuXHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gIGltcG9ydHM6IFsgQnJvd3Nlck1vZHVsZSwgRm9ybXNNb2R1bGUsIHJvdXRpbmcsIFxyXG4gICAgICAgICAgICAgQWxlcnRNb2R1bGUsIERhdGVwaWNrZXJNb2R1bGUsIEh0dHBNb2R1bGUsIFxyXG4gICAgICAgICAgICAgVGFiVmlld01vZHVsZSwgQ2F0ZWdvcmllc01vZHVsZSBdLFxyXG4gIGRlY2xhcmF0aW9uczogWyBBcHBDb21wb25lbnQsIE5hdmJhckNvbXBvbmVudCwgSGVhZGVyQ29tcG9uZW50LCBcclxuICAgICAgICAgICAgICAgICAgRm9vdGVyQ29tcG9uZW50LCBDYXRlZ29yaWVzQ29tcG9uZW50LCBEZXNpZ25lcnNDb21wb25lbnQsIFxyXG4gICAgICAgICAgICAgICAgICBIb3dJdFdvcmtzQ29tcG9uZW50LCBQYWdlTm90Rm91bmRDb21wb25lbnQsIERhdGVUaW1lQ29tcG9uZW50LFxyXG4gICAgICAgICAgICAgICAgICBCU0FsZXJ0Q29tcG9uZW50LCBDb250ZXN0c0NvbXBvbmVudCwgTG9naW5Db21wb25lbnQsIFJlZ2lzdGVyQ29tcG9uZW50IF0sXHJcbiAgYm9vdHN0cmFwOiBbIEFwcENvbXBvbmVudCBdLFxyXG4gIHByb3ZpZGVyczogWyBhcHBSb3V0aW5nUHJvdmlkZXJzLCBDb250ZXN0c1NlcnZpY2UgXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgQXBwTW9kdWxlIHsgfVxyXG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
