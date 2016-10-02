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
var material_1 = require('@angular/material');
var ng2_bootstrap_1 = require('ng2-bootstrap/ng2-bootstrap');
var ng2_bs3_modal_1 = require('ng2-bs3-modal/ng2-bs3-modal');
var index_1 = require('./components/index');
var contests_service_1 = require('./services/contests.service');
var auth_service_1 = require('./services/auth.service');
var categories_module_1 = require('./components/categories/categories.module');
var index_2 = require('./errors/index');
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [platform_browser_1.BrowserModule, forms_1.FormsModule, forms_1.ReactiveFormsModule,
                app_routing_1.routing, material_1.MaterialModule.forRoot(),
                ng2_bootstrap_1.AlertModule, primeng_1.InputTextModule, ng2_bootstrap_1.DatepickerModule, http_1.HttpModule,
                primeng_1.TabViewModule, categories_module_1.CategoriesModule, ng2_bs3_modal_1.Ng2Bs3ModalModule],
            declarations: [app_component_1.AppComponent, index_1.NavbarComponent, index_1.HeaderComponent,
                index_1.FooterComponent, index_1.CategoriesComponent, index_1.DesignersComponent,
                index_1.HowItWorksComponent, index_1.PageNotFoundComponent, index_1.DateTimeComponent,
                index_1.BSAlertComponent, index_1.ContestsComponent, index_1.LoginComponent, index_1.RegisterComponent,
                index_2.ErrorComponent],
            bootstrap: [app_component_1.AppComponent],
            providers: [app_routing_1.appRoutingProviders, contests_service_1.ContestsService, auth_service_1.AuthService, index_2.ErrorService]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUE4QixlQUFlLENBQUMsQ0FBQTtBQUM5QyxpQ0FBOEIsMkJBQTJCLENBQUMsQ0FBQTtBQUMxRCw0QkFDcUMsZUFBZSxDQUFDLENBQUE7QUFDckQsc0JBQWlELGdCQUFnQixDQUFDLENBQUE7QUFDbEUscUJBQTJCLGVBQWUsQ0FBQyxDQUFBO0FBQzNDLDhCQUE4QixpQkFBaUIsQ0FBQyxDQUFBO0FBQ2hELHdCQUErQyxpQkFBaUIsQ0FBQyxDQUFBO0FBQ2pFLHlCQUErQixtQkFBbUIsQ0FBQyxDQUFBO0FBRW5ELDhCQUE4Qyw2QkFBNkIsQ0FBQyxDQUFBO0FBQzVFLDhCQUFrQyw2QkFBNkIsQ0FBQyxDQUFBO0FBRWhFLHNCQUc4RCxvQkFBb0IsQ0FBQyxDQUFBO0FBRW5GLGlDQUFnQyw2QkFBNkIsQ0FBQyxDQUFBO0FBQzlELDZCQUE0Qix5QkFBeUIsQ0FBQyxDQUFBO0FBRXRELGtDQUFpQywyQ0FBMkMsQ0FBQyxDQUFBO0FBRTdFLHNCQUE2QyxnQkFBZ0IsQ0FBQyxDQUFBO0FBaUI5RDtJQUFBO0lBQXlCLENBQUM7SUFiMUI7UUFBQyxlQUFRLENBQUM7WUFDUixPQUFPLEVBQUUsQ0FBRSxnQ0FBYSxFQUFFLG1CQUFXLEVBQUUsMkJBQW1CO2dCQUMvQyxxQkFBTyxFQUFFLHlCQUFjLENBQUMsT0FBTyxFQUFFO2dCQUNqQywyQkFBVyxFQUFFLHlCQUFlLEVBQUUsZ0NBQWdCLEVBQUUsaUJBQVU7Z0JBQzFELHVCQUFhLEVBQUUsb0NBQWdCLEVBQUUsaUNBQWlCLENBQUU7WUFDL0QsWUFBWSxFQUFFLENBQUUsNEJBQVksRUFBRSx1QkFBZSxFQUFFLHVCQUFlO2dCQUM5Qyx1QkFBZSxFQUFFLDJCQUFtQixFQUFFLDBCQUFrQjtnQkFDeEQsMkJBQW1CLEVBQUUsNkJBQXFCLEVBQUUseUJBQWlCO2dCQUM3RCx3QkFBZ0IsRUFBRSx5QkFBaUIsRUFBRSxzQkFBYyxFQUFFLHlCQUFpQjtnQkFDdEUsc0JBQWMsQ0FBRTtZQUNoQyxTQUFTLEVBQUUsQ0FBRSw0QkFBWSxDQUFFO1lBQzNCLFNBQVMsRUFBRSxDQUFFLGlDQUFtQixFQUFFLGtDQUFlLEVBQUUsMEJBQVcsRUFBRSxvQkFBWSxDQUFFO1NBQy9FLENBQUM7O2lCQUFBO0lBQ3VCLGdCQUFDO0FBQUQsQ0FBekIsQUFBMEIsSUFBQTtBQUFiLGlCQUFTLFlBQUksQ0FBQSIsImZpbGUiOiJhcHAubW9kdWxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSAgICAgIGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBCcm93c2VyTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlcic7XHJcbmltcG9ydCB7IHJvdXRpbmcsXHJcbiAgICAgICAgIGFwcFJvdXRpbmdQcm92aWRlcnMgfSAgZnJvbSAnLi9hcHAucm91dGluZyc7XHJcbmltcG9ydCB7IEZvcm1zTW9kdWxlLCBSZWFjdGl2ZUZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5pbXBvcnQgeyBIdHRwTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvaHR0cCc7XHJcbmltcG9ydCB7IEFwcENvbXBvbmVudCB9ICBmcm9tICcuL2FwcC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBUYWJWaWV3TW9kdWxlLCBJbnB1dFRleHRNb2R1bGUgfSBmcm9tICdwcmltZW5nL3ByaW1lbmcnO1xyXG5pbXBvcnQgeyBNYXRlcmlhbE1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsJztcclxuXHJcbmltcG9ydCB7IEFsZXJ0TW9kdWxlLCBEYXRlcGlja2VyTW9kdWxlIH0gZnJvbSAnbmcyLWJvb3RzdHJhcC9uZzItYm9vdHN0cmFwJztcclxuaW1wb3J0IHsgTmcyQnMzTW9kYWxNb2R1bGUgfSBmcm9tICduZzItYnMzLW1vZGFsL25nMi1iczMtbW9kYWwnO1xyXG5cclxuaW1wb3J0IHsgTmF2YmFyQ29tcG9uZW50LCBIZWFkZXJDb21wb25lbnQsIEZvb3RlckNvbXBvbmVudCwgXHJcbiAgQ2F0ZWdvcmllc0NvbXBvbmVudCwgRGVzaWduZXJzQ29tcG9uZW50LCBIb3dJdFdvcmtzQ29tcG9uZW50LCBcclxuICBQYWdlTm90Rm91bmRDb21wb25lbnQsIEJTQWxlcnRDb21wb25lbnQsIERhdGVUaW1lQ29tcG9uZW50LFxyXG4gIENvbnRlc3RzQ29tcG9uZW50LCBSZWdpc3RlckNvbXBvbmVudCwgTG9naW5Db21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvaW5kZXgnO1xyXG5cclxuaW1wb3J0IHsgQ29udGVzdHNTZXJ2aWNlIH0gZnJvbSAnLi9zZXJ2aWNlcy9jb250ZXN0cy5zZXJ2aWNlJztcclxuaW1wb3J0IHsgQXV0aFNlcnZpY2UgfSBmcm9tICcuL3NlcnZpY2VzL2F1dGguc2VydmljZSc7XHJcblxyXG5pbXBvcnQgeyBDYXRlZ29yaWVzTW9kdWxlIH0gZnJvbSAnLi9jb21wb25lbnRzL2NhdGVnb3JpZXMvY2F0ZWdvcmllcy5tb2R1bGUnO1xyXG5cclxuaW1wb3J0IHsgRXJyb3JDb21wb25lbnQsIEVycm9yU2VydmljZSB9IGZyb20gJy4vZXJyb3JzL2luZGV4JztcclxuXHJcblxyXG5cclxuQE5nTW9kdWxlKHtcclxuICBpbXBvcnRzOiBbIEJyb3dzZXJNb2R1bGUsIEZvcm1zTW9kdWxlLCBSZWFjdGl2ZUZvcm1zTW9kdWxlLCBcclxuICAgICAgICAgICAgIHJvdXRpbmcsIE1hdGVyaWFsTW9kdWxlLmZvclJvb3QoKSwgXHJcbiAgICAgICAgICAgICBBbGVydE1vZHVsZSwgSW5wdXRUZXh0TW9kdWxlLCBEYXRlcGlja2VyTW9kdWxlLCBIdHRwTW9kdWxlLCBcclxuICAgICAgICAgICAgIFRhYlZpZXdNb2R1bGUsIENhdGVnb3JpZXNNb2R1bGUsIE5nMkJzM01vZGFsTW9kdWxlIF0sXHJcbiAgZGVjbGFyYXRpb25zOiBbIEFwcENvbXBvbmVudCwgTmF2YmFyQ29tcG9uZW50LCBIZWFkZXJDb21wb25lbnQsIFxyXG4gICAgICAgICAgICAgICAgICBGb290ZXJDb21wb25lbnQsIENhdGVnb3JpZXNDb21wb25lbnQsIERlc2lnbmVyc0NvbXBvbmVudCwgXHJcbiAgICAgICAgICAgICAgICAgIEhvd0l0V29ya3NDb21wb25lbnQsIFBhZ2VOb3RGb3VuZENvbXBvbmVudCwgRGF0ZVRpbWVDb21wb25lbnQsXHJcbiAgICAgICAgICAgICAgICAgIEJTQWxlcnRDb21wb25lbnQsIENvbnRlc3RzQ29tcG9uZW50LCBMb2dpbkNvbXBvbmVudCwgUmVnaXN0ZXJDb21wb25lbnQsXHJcbiAgICAgICAgICAgICAgICAgIEVycm9yQ29tcG9uZW50IF0sXHJcbiAgYm9vdHN0cmFwOiBbIEFwcENvbXBvbmVudCBdLFxyXG4gIHByb3ZpZGVyczogWyBhcHBSb3V0aW5nUHJvdmlkZXJzLCBDb250ZXN0c1NlcnZpY2UsIEF1dGhTZXJ2aWNlLCBFcnJvclNlcnZpY2UgXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgQXBwTW9kdWxlIHsgfVxyXG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
