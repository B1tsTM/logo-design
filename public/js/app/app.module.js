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
var user_navigation_component_1 = require('./components/navbar/user-navigation.component');
var contests_service_1 = require('./services/contests.service');
var auth_service_1 = require('./services/auth.service');
var designers_service_1 = require('./services/designers.service');
var api_service_1 = require('./services/api.service');
var can_activate_on_login_service_1 = require('./guards/can-activate-on-login.service');
var categories_module_1 = require('./components/categories/categories.module');
var publish_contest_module_1 = require('./components/publish-contest/publish-contest.module');
var index_2 = require('./errors/index');
var local_date_from_now_pipe_1 = require('./pipes/local-date-from-now-pipe');
var local_date_standart_pipe_1 = require('./pipes/local-date-standart-pipe');
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [platform_browser_1.BrowserModule, forms_1.FormsModule, forms_1.ReactiveFormsModule,
                app_routing_1.routing, material_1.MaterialModule.forRoot(),
                ng2_bootstrap_1.AlertModule, primeng_1.InputTextModule, ng2_bootstrap_1.DatepickerModule, http_1.HttpModule,
                primeng_1.TabViewModule, categories_module_1.CategoriesModule, publish_contest_module_1.PublishContestModule, ng2_bs3_modal_1.Ng2Bs3ModalModule],
            declarations: [app_component_1.AppComponent, user_navigation_component_1.UserNavigationComponent, index_1.NavbarComponent, index_1.HeaderComponent,
                index_1.FooterComponent, index_1.CategoriesComponent, index_1.DesignersComponent,
                index_1.HowItWorksComponent, index_1.PageNotFoundComponent, index_1.DateTimeComponent,
                index_1.BSAlertComponent, index_1.ContestsComponent, index_1.LoginComponent, index_1.RegisterComponent,
                index_2.ErrorComponent, index_1.WinnersGalleryComponent, index_1.PublishContestComponent,
                index_1.ProfilePageComponent, index_1.MyContestsComponent, index_1.ContestDetailsComponent,
                local_date_from_now_pipe_1.LocalDateFromNowPipe, local_date_standart_pipe_1.LocalDateStandartPipe],
            bootstrap: [app_component_1.AppComponent],
            providers: [{ provide: core_1.LOCALE_ID, useValue: "lt-LT" }, app_routing_1.appRoutingProviders, contests_service_1.ContestsService, auth_service_1.AuthService, index_2.ErrorService,
                designers_service_1.DesignersService, api_service_1.ApiService, can_activate_on_login_service_1.CanActivateOnLoginService]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUF5QyxlQUFlLENBQUMsQ0FBQTtBQUN6RCxpQ0FBOEIsMkJBQTJCLENBQUMsQ0FBQTtBQUMxRCw0QkFDcUMsZUFBZSxDQUFDLENBQUE7QUFDckQsc0JBQWlELGdCQUFnQixDQUFDLENBQUE7QUFDbEUscUJBQTJCLGVBQWUsQ0FBQyxDQUFBO0FBQzNDLDhCQUE4QixpQkFBaUIsQ0FBQyxDQUFBO0FBQ2hELHdCQUErQyxpQkFBaUIsQ0FBQyxDQUFBO0FBQ2pFLHlCQUErQixtQkFBbUIsQ0FBQyxDQUFBO0FBRW5ELDhCQUE4Qyw2QkFBNkIsQ0FBQyxDQUFBO0FBQzVFLDhCQUFrQyw2QkFBNkIsQ0FBQyxDQUFBO0FBRWhFLHNCQUtpQyxvQkFBb0IsQ0FBQyxDQUFBO0FBQ3RELDBDQUF3QywrQ0FBK0MsQ0FBQyxDQUFBO0FBRXhGLGlDQUFnQyw2QkFBNkIsQ0FBQyxDQUFBO0FBQzlELDZCQUE0Qix5QkFBeUIsQ0FBQyxDQUFBO0FBQ3RELGtDQUFpQyw4QkFBOEIsQ0FBQyxDQUFBO0FBQ2hFLDRCQUEyQix3QkFBd0IsQ0FBQyxDQUFBO0FBQ3BELDhDQUEwQyx3Q0FBd0MsQ0FBQyxDQUFBO0FBRW5GLGtDQUFpQywyQ0FBMkMsQ0FBQyxDQUFBO0FBQzdFLHVDQUFxQyxxREFBcUQsQ0FBQyxDQUFBO0FBRTNGLHNCQUE2QyxnQkFBZ0IsQ0FBQyxDQUFBO0FBRTlELHlDQUFxQyxrQ0FBa0MsQ0FBQyxDQUFBO0FBQ3hFLHlDQUFzQyxrQ0FBa0MsQ0FBQyxDQUFBO0FBb0J6RTtJQUFBO0lBQXlCLENBQUM7SUFoQjFCO1FBQUMsZUFBUSxDQUFDO1lBQ1IsT0FBTyxFQUFFLENBQUUsZ0NBQWEsRUFBRSxtQkFBVyxFQUFFLDJCQUFtQjtnQkFDL0MscUJBQU8sRUFBRSx5QkFBYyxDQUFDLE9BQU8sRUFBRTtnQkFDakMsMkJBQVcsRUFBRSx5QkFBZSxFQUFFLGdDQUFnQixFQUFFLGlCQUFVO2dCQUMxRCx1QkFBYSxFQUFFLG9DQUFnQixFQUFFLDZDQUFvQixFQUFFLGlDQUFpQixDQUFFO1lBQ3JGLFlBQVksRUFBRSxDQUFFLDRCQUFZLEVBQUUsbURBQXVCLEVBQUUsdUJBQWUsRUFBRSx1QkFBZTtnQkFDdkUsdUJBQWUsRUFBRSwyQkFBbUIsRUFBRSwwQkFBa0I7Z0JBQ3hELDJCQUFtQixFQUFFLDZCQUFxQixFQUFFLHlCQUFpQjtnQkFDN0Qsd0JBQWdCLEVBQUUseUJBQWlCLEVBQUUsc0JBQWMsRUFBRSx5QkFBaUI7Z0JBQ3RFLHNCQUFjLEVBQUUsK0JBQXVCLEVBQUUsK0JBQXVCO2dCQUNoRSw0QkFBb0IsRUFBRSwyQkFBbUIsRUFBRSwrQkFBdUI7Z0JBQ2xFLCtDQUFvQixFQUFFLGdEQUFxQixDQUFFO1lBQzdELFNBQVMsRUFBRSxDQUFFLDRCQUFZLENBQUU7WUFDM0IsU0FBUyxFQUFFLENBQUUsRUFBQyxPQUFPLEVBQUUsZ0JBQVMsRUFBRSxRQUFRLEVBQUUsT0FBTyxFQUFDLEVBQUUsaUNBQW1CLEVBQUUsa0NBQWUsRUFBRSwwQkFBVyxFQUFFLG9CQUFZO2dCQUN4RyxvQ0FBZ0IsRUFBRSx3QkFBVSxFQUFFLHlEQUF5QixDQUFFO1NBQ3ZFLENBQUM7O2lCQUFBO0lBQ3VCLGdCQUFDO0FBQUQsQ0FBekIsQUFBMEIsSUFBQTtBQUFiLGlCQUFTLFlBQUksQ0FBQSIsImZpbGUiOiJhcHAubW9kdWxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUsIExPQ0FMRV9JRCB9ICAgICAgZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEJyb3dzZXJNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyJztcclxuaW1wb3J0IHsgcm91dGluZyxcclxuICAgICAgICAgYXBwUm91dGluZ1Byb3ZpZGVycyB9ICBmcm9tICcuL2FwcC5yb3V0aW5nJztcclxuaW1wb3J0IHsgRm9ybXNNb2R1bGUsIFJlYWN0aXZlRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcbmltcG9ydCB7IEh0dHBNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9odHRwJztcclxuaW1wb3J0IHsgQXBwQ29tcG9uZW50IH0gIGZyb20gJy4vYXBwLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFRhYlZpZXdNb2R1bGUsIElucHV0VGV4dE1vZHVsZSB9IGZyb20gJ3ByaW1lbmcvcHJpbWVuZyc7XHJcbmltcG9ydCB7IE1hdGVyaWFsTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwnO1xyXG5cclxuaW1wb3J0IHsgQWxlcnRNb2R1bGUsIERhdGVwaWNrZXJNb2R1bGUgfSBmcm9tICduZzItYm9vdHN0cmFwL25nMi1ib290c3RyYXAnO1xyXG5pbXBvcnQgeyBOZzJCczNNb2RhbE1vZHVsZSB9IGZyb20gJ25nMi1iczMtbW9kYWwvbmcyLWJzMy1tb2RhbCc7XHJcblxyXG5pbXBvcnQgeyBOYXZiYXJDb21wb25lbnQsIEhlYWRlckNvbXBvbmVudCwgRm9vdGVyQ29tcG9uZW50LCBcclxuICBDYXRlZ29yaWVzQ29tcG9uZW50LCBEZXNpZ25lcnNDb21wb25lbnQsIEhvd0l0V29ya3NDb21wb25lbnQsIFxyXG4gIFBhZ2VOb3RGb3VuZENvbXBvbmVudCwgQlNBbGVydENvbXBvbmVudCwgRGF0ZVRpbWVDb21wb25lbnQsXHJcbiAgQ29udGVzdHNDb21wb25lbnQsIFJlZ2lzdGVyQ29tcG9uZW50LCBMb2dpbkNvbXBvbmVudCwgV2lubmVyc0dhbGxlcnlDb21wb25lbnQsXHJcbiAgUHVibGlzaENvbnRlc3RDb21wb25lbnQsIFByb2ZpbGVQYWdlQ29tcG9uZW50LCBNeUNvbnRlc3RzQ29tcG9uZW50LFxyXG4gIENvbnRlc3REZXRhaWxzQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL2luZGV4JztcclxuaW1wb3J0IHsgVXNlck5hdmlnYXRpb25Db21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvbmF2YmFyL3VzZXItbmF2aWdhdGlvbi5jb21wb25lbnQnO1xyXG5cclxuaW1wb3J0IHsgQ29udGVzdHNTZXJ2aWNlIH0gZnJvbSAnLi9zZXJ2aWNlcy9jb250ZXN0cy5zZXJ2aWNlJztcclxuaW1wb3J0IHsgQXV0aFNlcnZpY2UgfSBmcm9tICcuL3NlcnZpY2VzL2F1dGguc2VydmljZSc7XHJcbmltcG9ydCB7IERlc2lnbmVyc1NlcnZpY2UgfSBmcm9tICcuL3NlcnZpY2VzL2Rlc2lnbmVycy5zZXJ2aWNlJztcclxuaW1wb3J0IHsgQXBpU2VydmljZSB9IGZyb20gJy4vc2VydmljZXMvYXBpLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBDYW5BY3RpdmF0ZU9uTG9naW5TZXJ2aWNlIH0gZnJvbSAnLi9ndWFyZHMvY2FuLWFjdGl2YXRlLW9uLWxvZ2luLnNlcnZpY2UnO1xyXG5cclxuaW1wb3J0IHsgQ2F0ZWdvcmllc01vZHVsZSB9IGZyb20gJy4vY29tcG9uZW50cy9jYXRlZ29yaWVzL2NhdGVnb3JpZXMubW9kdWxlJztcclxuaW1wb3J0IHsgUHVibGlzaENvbnRlc3RNb2R1bGUgfSBmcm9tICcuL2NvbXBvbmVudHMvcHVibGlzaC1jb250ZXN0L3B1Ymxpc2gtY29udGVzdC5tb2R1bGUnO1xyXG5cclxuaW1wb3J0IHsgRXJyb3JDb21wb25lbnQsIEVycm9yU2VydmljZSB9IGZyb20gJy4vZXJyb3JzL2luZGV4JztcclxuXHJcbmltcG9ydCB7IExvY2FsRGF0ZUZyb21Ob3dQaXBlIH0gZnJvbSAnLi9waXBlcy9sb2NhbC1kYXRlLWZyb20tbm93LXBpcGUnO1xyXG5pbXBvcnQgeyBMb2NhbERhdGVTdGFuZGFydFBpcGUgfSBmcm9tICcuL3BpcGVzL2xvY2FsLWRhdGUtc3RhbmRhcnQtcGlwZSc7XHJcblxyXG5cclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgaW1wb3J0czogWyBCcm93c2VyTW9kdWxlLCBGb3Jtc01vZHVsZSwgUmVhY3RpdmVGb3Jtc01vZHVsZSwgXHJcbiAgICAgICAgICAgICByb3V0aW5nLCBNYXRlcmlhbE1vZHVsZS5mb3JSb290KCksIFxyXG4gICAgICAgICAgICAgQWxlcnRNb2R1bGUsIElucHV0VGV4dE1vZHVsZSwgRGF0ZXBpY2tlck1vZHVsZSwgSHR0cE1vZHVsZSwgXHJcbiAgICAgICAgICAgICBUYWJWaWV3TW9kdWxlLCBDYXRlZ29yaWVzTW9kdWxlLCBQdWJsaXNoQ29udGVzdE1vZHVsZSwgTmcyQnMzTW9kYWxNb2R1bGUgXSxcclxuICBkZWNsYXJhdGlvbnM6IFsgQXBwQ29tcG9uZW50LCBVc2VyTmF2aWdhdGlvbkNvbXBvbmVudCwgTmF2YmFyQ29tcG9uZW50LCBIZWFkZXJDb21wb25lbnQsIFxyXG4gICAgICAgICAgICAgICAgICBGb290ZXJDb21wb25lbnQsIENhdGVnb3JpZXNDb21wb25lbnQsIERlc2lnbmVyc0NvbXBvbmVudCwgXHJcbiAgICAgICAgICAgICAgICAgIEhvd0l0V29ya3NDb21wb25lbnQsIFBhZ2VOb3RGb3VuZENvbXBvbmVudCwgRGF0ZVRpbWVDb21wb25lbnQsXHJcbiAgICAgICAgICAgICAgICAgIEJTQWxlcnRDb21wb25lbnQsIENvbnRlc3RzQ29tcG9uZW50LCBMb2dpbkNvbXBvbmVudCwgUmVnaXN0ZXJDb21wb25lbnQsXHJcbiAgICAgICAgICAgICAgICAgIEVycm9yQ29tcG9uZW50LCBXaW5uZXJzR2FsbGVyeUNvbXBvbmVudCwgUHVibGlzaENvbnRlc3RDb21wb25lbnQsXHJcbiAgICAgICAgICAgICAgICAgIFByb2ZpbGVQYWdlQ29tcG9uZW50LCBNeUNvbnRlc3RzQ29tcG9uZW50LCBDb250ZXN0RGV0YWlsc0NvbXBvbmVudCxcclxuICAgICAgICAgICAgICAgICAgTG9jYWxEYXRlRnJvbU5vd1BpcGUsIExvY2FsRGF0ZVN0YW5kYXJ0UGlwZSBdLFxyXG4gIGJvb3RzdHJhcDogWyBBcHBDb21wb25lbnQgXSxcclxuICBwcm92aWRlcnM6IFsge3Byb3ZpZGU6IExPQ0FMRV9JRCwgdXNlVmFsdWU6IFwibHQtTFRcIn0sIGFwcFJvdXRpbmdQcm92aWRlcnMsIENvbnRlc3RzU2VydmljZSwgQXV0aFNlcnZpY2UsIEVycm9yU2VydmljZSwgXHJcbiAgICAgICAgICAgICAgIERlc2lnbmVyc1NlcnZpY2UsIEFwaVNlcnZpY2UsIENhbkFjdGl2YXRlT25Mb2dpblNlcnZpY2UgXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgQXBwTW9kdWxlIHsgfVxyXG4iXX0=
