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
var designers_service_1 = require('./services/designers.service');
var categories_module_1 = require('./components/categories/categories.module');
var publish_contest_module_1 = require('./components/publish-contest/publish-contest.module');
var index_2 = require('./errors/index');
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [platform_browser_1.BrowserModule, forms_1.FormsModule, forms_1.ReactiveFormsModule,
                app_routing_1.routing, material_1.MaterialModule.forRoot(),
                ng2_bootstrap_1.AlertModule, primeng_1.InputTextModule, ng2_bootstrap_1.DatepickerModule, http_1.HttpModule,
                primeng_1.TabViewModule, categories_module_1.CategoriesModule, publish_contest_module_1.PublishContestModule, ng2_bs3_modal_1.Ng2Bs3ModalModule],
            declarations: [app_component_1.AppComponent, index_1.NavbarComponent, index_1.HeaderComponent,
                index_1.FooterComponent, index_1.CategoriesComponent, index_1.DesignersComponent,
                index_1.HowItWorksComponent, index_1.PageNotFoundComponent, index_1.DateTimeComponent,
                index_1.BSAlertComponent, index_1.ContestsComponent, index_1.LoginComponent, index_1.RegisterComponent,
                index_2.ErrorComponent, index_1.WinnersGalleryComponent, index_1.PublishContestComponent,
                index_1.ProfilePageComponent],
            bootstrap: [app_component_1.AppComponent],
            providers: [app_routing_1.appRoutingProviders, contests_service_1.ContestsService, auth_service_1.AuthService, index_2.ErrorService, designers_service_1.DesignersService]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUE4QixlQUFlLENBQUMsQ0FBQTtBQUM5QyxpQ0FBOEIsMkJBQTJCLENBQUMsQ0FBQTtBQUMxRCw0QkFDcUMsZUFBZSxDQUFDLENBQUE7QUFDckQsc0JBQWlELGdCQUFnQixDQUFDLENBQUE7QUFDbEUscUJBQTJCLGVBQWUsQ0FBQyxDQUFBO0FBQzNDLDhCQUE4QixpQkFBaUIsQ0FBQyxDQUFBO0FBQ2hELHdCQUErQyxpQkFBaUIsQ0FBQyxDQUFBO0FBQ2pFLHlCQUErQixtQkFBbUIsQ0FBQyxDQUFBO0FBRW5ELDhCQUE4Qyw2QkFBNkIsQ0FBQyxDQUFBO0FBQzVFLDhCQUFrQyw2QkFBNkIsQ0FBQyxDQUFBO0FBRWhFLHNCQUl1RCxvQkFBb0IsQ0FBQyxDQUFBO0FBRTVFLGlDQUFnQyw2QkFBNkIsQ0FBQyxDQUFBO0FBQzlELDZCQUE0Qix5QkFBeUIsQ0FBQyxDQUFBO0FBQ3RELGtDQUFpQyw4QkFBOEIsQ0FBQyxDQUFBO0FBRWhFLGtDQUFpQywyQ0FBMkMsQ0FBQyxDQUFBO0FBQzdFLHVDQUFxQyxxREFBcUQsQ0FBQyxDQUFBO0FBRTNGLHNCQUE2QyxnQkFBZ0IsQ0FBQyxDQUFBO0FBa0I5RDtJQUFBO0lBQXlCLENBQUM7SUFkMUI7UUFBQyxlQUFRLENBQUM7WUFDUixPQUFPLEVBQUUsQ0FBRSxnQ0FBYSxFQUFFLG1CQUFXLEVBQUUsMkJBQW1CO2dCQUMvQyxxQkFBTyxFQUFFLHlCQUFjLENBQUMsT0FBTyxFQUFFO2dCQUNqQywyQkFBVyxFQUFFLHlCQUFlLEVBQUUsZ0NBQWdCLEVBQUUsaUJBQVU7Z0JBQzFELHVCQUFhLEVBQUUsb0NBQWdCLEVBQUUsNkNBQW9CLEVBQUUsaUNBQWlCLENBQUU7WUFDckYsWUFBWSxFQUFFLENBQUUsNEJBQVksRUFBRSx1QkFBZSxFQUFFLHVCQUFlO2dCQUM5Qyx1QkFBZSxFQUFFLDJCQUFtQixFQUFFLDBCQUFrQjtnQkFDeEQsMkJBQW1CLEVBQUUsNkJBQXFCLEVBQUUseUJBQWlCO2dCQUM3RCx3QkFBZ0IsRUFBRSx5QkFBaUIsRUFBRSxzQkFBYyxFQUFFLHlCQUFpQjtnQkFDdEUsc0JBQWMsRUFBRSwrQkFBdUIsRUFBRSwrQkFBdUI7Z0JBQ2hFLDRCQUFvQixDQUFFO1lBQ3RDLFNBQVMsRUFBRSxDQUFFLDRCQUFZLENBQUU7WUFDM0IsU0FBUyxFQUFFLENBQUUsaUNBQW1CLEVBQUUsa0NBQWUsRUFBRSwwQkFBVyxFQUFFLG9CQUFZLEVBQUUsb0NBQWdCLENBQUU7U0FDakcsQ0FBQzs7aUJBQUE7SUFDdUIsZ0JBQUM7QUFBRCxDQUF6QixBQUEwQixJQUFBO0FBQWIsaUJBQVMsWUFBSSxDQUFBIiwiZmlsZSI6ImFwcC5tb2R1bGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9ICAgICAgZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEJyb3dzZXJNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyJztcclxuaW1wb3J0IHsgcm91dGluZyxcclxuICAgICAgICAgYXBwUm91dGluZ1Byb3ZpZGVycyB9ICBmcm9tICcuL2FwcC5yb3V0aW5nJztcclxuaW1wb3J0IHsgRm9ybXNNb2R1bGUsIFJlYWN0aXZlRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcbmltcG9ydCB7IEh0dHBNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9odHRwJztcclxuaW1wb3J0IHsgQXBwQ29tcG9uZW50IH0gIGZyb20gJy4vYXBwLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFRhYlZpZXdNb2R1bGUsIElucHV0VGV4dE1vZHVsZSB9IGZyb20gJ3ByaW1lbmcvcHJpbWVuZyc7XHJcbmltcG9ydCB7IE1hdGVyaWFsTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwnO1xyXG5cclxuaW1wb3J0IHsgQWxlcnRNb2R1bGUsIERhdGVwaWNrZXJNb2R1bGUgfSBmcm9tICduZzItYm9vdHN0cmFwL25nMi1ib290c3RyYXAnO1xyXG5pbXBvcnQgeyBOZzJCczNNb2RhbE1vZHVsZSB9IGZyb20gJ25nMi1iczMtbW9kYWwvbmcyLWJzMy1tb2RhbCc7XHJcblxyXG5pbXBvcnQgeyBOYXZiYXJDb21wb25lbnQsIEhlYWRlckNvbXBvbmVudCwgRm9vdGVyQ29tcG9uZW50LCBcclxuICBDYXRlZ29yaWVzQ29tcG9uZW50LCBEZXNpZ25lcnNDb21wb25lbnQsIEhvd0l0V29ya3NDb21wb25lbnQsIFxyXG4gIFBhZ2VOb3RGb3VuZENvbXBvbmVudCwgQlNBbGVydENvbXBvbmVudCwgRGF0ZVRpbWVDb21wb25lbnQsXHJcbiAgQ29udGVzdHNDb21wb25lbnQsIFJlZ2lzdGVyQ29tcG9uZW50LCBMb2dpbkNvbXBvbmVudCwgV2lubmVyc0dhbGxlcnlDb21wb25lbnQsXHJcbiAgUHVibGlzaENvbnRlc3RDb21wb25lbnQsIFByb2ZpbGVQYWdlQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL2luZGV4JztcclxuXHJcbmltcG9ydCB7IENvbnRlc3RzU2VydmljZSB9IGZyb20gJy4vc2VydmljZXMvY29udGVzdHMuc2VydmljZSc7XHJcbmltcG9ydCB7IEF1dGhTZXJ2aWNlIH0gZnJvbSAnLi9zZXJ2aWNlcy9hdXRoLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBEZXNpZ25lcnNTZXJ2aWNlIH0gZnJvbSAnLi9zZXJ2aWNlcy9kZXNpZ25lcnMuc2VydmljZSc7XHJcblxyXG5pbXBvcnQgeyBDYXRlZ29yaWVzTW9kdWxlIH0gZnJvbSAnLi9jb21wb25lbnRzL2NhdGVnb3JpZXMvY2F0ZWdvcmllcy5tb2R1bGUnO1xyXG5pbXBvcnQgeyBQdWJsaXNoQ29udGVzdE1vZHVsZSB9IGZyb20gJy4vY29tcG9uZW50cy9wdWJsaXNoLWNvbnRlc3QvcHVibGlzaC1jb250ZXN0Lm1vZHVsZSc7XHJcblxyXG5pbXBvcnQgeyBFcnJvckNvbXBvbmVudCwgRXJyb3JTZXJ2aWNlIH0gZnJvbSAnLi9lcnJvcnMvaW5kZXgnO1xyXG5cclxuXHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gIGltcG9ydHM6IFsgQnJvd3Nlck1vZHVsZSwgRm9ybXNNb2R1bGUsIFJlYWN0aXZlRm9ybXNNb2R1bGUsIFxyXG4gICAgICAgICAgICAgcm91dGluZywgTWF0ZXJpYWxNb2R1bGUuZm9yUm9vdCgpLCBcclxuICAgICAgICAgICAgIEFsZXJ0TW9kdWxlLCBJbnB1dFRleHRNb2R1bGUsIERhdGVwaWNrZXJNb2R1bGUsIEh0dHBNb2R1bGUsIFxyXG4gICAgICAgICAgICAgVGFiVmlld01vZHVsZSwgQ2F0ZWdvcmllc01vZHVsZSwgUHVibGlzaENvbnRlc3RNb2R1bGUsIE5nMkJzM01vZGFsTW9kdWxlIF0sXHJcbiAgZGVjbGFyYXRpb25zOiBbIEFwcENvbXBvbmVudCwgTmF2YmFyQ29tcG9uZW50LCBIZWFkZXJDb21wb25lbnQsIFxyXG4gICAgICAgICAgICAgICAgICBGb290ZXJDb21wb25lbnQsIENhdGVnb3JpZXNDb21wb25lbnQsIERlc2lnbmVyc0NvbXBvbmVudCwgXHJcbiAgICAgICAgICAgICAgICAgIEhvd0l0V29ya3NDb21wb25lbnQsIFBhZ2VOb3RGb3VuZENvbXBvbmVudCwgRGF0ZVRpbWVDb21wb25lbnQsXHJcbiAgICAgICAgICAgICAgICAgIEJTQWxlcnRDb21wb25lbnQsIENvbnRlc3RzQ29tcG9uZW50LCBMb2dpbkNvbXBvbmVudCwgUmVnaXN0ZXJDb21wb25lbnQsXHJcbiAgICAgICAgICAgICAgICAgIEVycm9yQ29tcG9uZW50LCBXaW5uZXJzR2FsbGVyeUNvbXBvbmVudCwgUHVibGlzaENvbnRlc3RDb21wb25lbnQsXHJcbiAgICAgICAgICAgICAgICAgIFByb2ZpbGVQYWdlQ29tcG9uZW50IF0sXHJcbiAgYm9vdHN0cmFwOiBbIEFwcENvbXBvbmVudCBdLFxyXG4gIHByb3ZpZGVyczogWyBhcHBSb3V0aW5nUHJvdmlkZXJzLCBDb250ZXN0c1NlcnZpY2UsIEF1dGhTZXJ2aWNlLCBFcnJvclNlcnZpY2UsIERlc2lnbmVyc1NlcnZpY2UgXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgQXBwTW9kdWxlIHsgfVxyXG4iXX0=
