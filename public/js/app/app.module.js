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
var star_rating_component_1 = require('./components/contests/star-rating.component');
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
                local_date_from_now_pipe_1.LocalDateFromNowPipe, local_date_standart_pipe_1.LocalDateStandartPipe, star_rating_component_1.StarRatingComponent],
            bootstrap: [app_component_1.AppComponent],
            providers: [{ provide: core_1.LOCALE_ID, useValue: "lt-LT" }, app_routing_1.appRoutingProviders, contests_service_1.ContestsService, auth_service_1.AuthService, index_2.ErrorService,
                designers_service_1.DesignersService, api_service_1.ApiService, can_activate_on_login_service_1.CanActivateOnLoginService]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUF5QyxlQUFlLENBQUMsQ0FBQTtBQUN6RCxpQ0FBOEIsMkJBQTJCLENBQUMsQ0FBQTtBQUMxRCw0QkFDcUMsZUFBZSxDQUFDLENBQUE7QUFDckQsc0JBQWlELGdCQUFnQixDQUFDLENBQUE7QUFDbEUscUJBQTJCLGVBQWUsQ0FBQyxDQUFBO0FBQzNDLDhCQUE4QixpQkFBaUIsQ0FBQyxDQUFBO0FBQ2hELHdCQUErQyxpQkFBaUIsQ0FBQyxDQUFBO0FBQ2pFLHlCQUErQixtQkFBbUIsQ0FBQyxDQUFBO0FBRW5ELDhCQUE4Qyw2QkFBNkIsQ0FBQyxDQUFBO0FBQzVFLDhCQUFrQyw2QkFBNkIsQ0FBQyxDQUFBO0FBRWhFLHNCQUtpQyxvQkFBb0IsQ0FBQyxDQUFBO0FBQ3RELDBDQUF3QywrQ0FBK0MsQ0FBQyxDQUFBO0FBQ3hGLHNDQUFvQyw2Q0FBNkMsQ0FBQyxDQUFBO0FBRWxGLGlDQUFnQyw2QkFBNkIsQ0FBQyxDQUFBO0FBQzlELDZCQUE0Qix5QkFBeUIsQ0FBQyxDQUFBO0FBQ3RELGtDQUFpQyw4QkFBOEIsQ0FBQyxDQUFBO0FBQ2hFLDRCQUEyQix3QkFBd0IsQ0FBQyxDQUFBO0FBQ3BELDhDQUEwQyx3Q0FBd0MsQ0FBQyxDQUFBO0FBRW5GLGtDQUFpQywyQ0FBMkMsQ0FBQyxDQUFBO0FBQzdFLHVDQUFxQyxxREFBcUQsQ0FBQyxDQUFBO0FBRTNGLHNCQUE2QyxnQkFBZ0IsQ0FBQyxDQUFBO0FBRTlELHlDQUFxQyxrQ0FBa0MsQ0FBQyxDQUFBO0FBQ3hFLHlDQUFzQyxrQ0FBa0MsQ0FBQyxDQUFBO0FBb0J6RTtJQUFBO0lBQXlCLENBQUM7SUFoQjFCO1FBQUMsZUFBUSxDQUFDO1lBQ1IsT0FBTyxFQUFFLENBQUUsZ0NBQWEsRUFBRSxtQkFBVyxFQUFFLDJCQUFtQjtnQkFDL0MscUJBQU8sRUFBRSx5QkFBYyxDQUFDLE9BQU8sRUFBRTtnQkFDakMsMkJBQVcsRUFBRSx5QkFBZSxFQUFFLGdDQUFnQixFQUFFLGlCQUFVO2dCQUMxRCx1QkFBYSxFQUFFLG9DQUFnQixFQUFFLDZDQUFvQixFQUFFLGlDQUFpQixDQUFFO1lBQ3JGLFlBQVksRUFBRSxDQUFFLDRCQUFZLEVBQUUsbURBQXVCLEVBQUUsdUJBQWUsRUFBRSx1QkFBZTtnQkFDdkUsdUJBQWUsRUFBRSwyQkFBbUIsRUFBRSwwQkFBa0I7Z0JBQ3hELDJCQUFtQixFQUFFLDZCQUFxQixFQUFFLHlCQUFpQjtnQkFDN0Qsd0JBQWdCLEVBQUUseUJBQWlCLEVBQUUsc0JBQWMsRUFBRSx5QkFBaUI7Z0JBQ3RFLHNCQUFjLEVBQUUsK0JBQXVCLEVBQUUsK0JBQXVCO2dCQUNoRSw0QkFBb0IsRUFBRSwyQkFBbUIsRUFBRSwrQkFBdUI7Z0JBQ2xFLCtDQUFvQixFQUFFLGdEQUFxQixFQUFFLDJDQUFtQixDQUFFO1lBQ2xGLFNBQVMsRUFBRSxDQUFFLDRCQUFZLENBQUU7WUFDM0IsU0FBUyxFQUFFLENBQUUsRUFBQyxPQUFPLEVBQUUsZ0JBQVMsRUFBRSxRQUFRLEVBQUUsT0FBTyxFQUFDLEVBQUUsaUNBQW1CLEVBQUUsa0NBQWUsRUFBRSwwQkFBVyxFQUFFLG9CQUFZO2dCQUN4RyxvQ0FBZ0IsRUFBRSx3QkFBVSxFQUFFLHlEQUF5QixDQUFFO1NBQ3ZFLENBQUM7O2lCQUFBO0lBQ3VCLGdCQUFDO0FBQUQsQ0FBekIsQUFBMEIsSUFBQTtBQUFiLGlCQUFTLFlBQUksQ0FBQSIsImZpbGUiOiJhcHAubW9kdWxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUsIExPQ0FMRV9JRCB9ICAgICAgZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEJyb3dzZXJNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyJztcclxuaW1wb3J0IHsgcm91dGluZyxcclxuICAgICAgICAgYXBwUm91dGluZ1Byb3ZpZGVycyB9ICBmcm9tICcuL2FwcC5yb3V0aW5nJztcclxuaW1wb3J0IHsgRm9ybXNNb2R1bGUsIFJlYWN0aXZlRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcbmltcG9ydCB7IEh0dHBNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9odHRwJztcclxuaW1wb3J0IHsgQXBwQ29tcG9uZW50IH0gIGZyb20gJy4vYXBwLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFRhYlZpZXdNb2R1bGUsIElucHV0VGV4dE1vZHVsZSB9IGZyb20gJ3ByaW1lbmcvcHJpbWVuZyc7XHJcbmltcG9ydCB7IE1hdGVyaWFsTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwnO1xyXG5cclxuaW1wb3J0IHsgQWxlcnRNb2R1bGUsIERhdGVwaWNrZXJNb2R1bGUgfSBmcm9tICduZzItYm9vdHN0cmFwL25nMi1ib290c3RyYXAnO1xyXG5pbXBvcnQgeyBOZzJCczNNb2RhbE1vZHVsZSB9IGZyb20gJ25nMi1iczMtbW9kYWwvbmcyLWJzMy1tb2RhbCc7XHJcblxyXG5pbXBvcnQgeyBOYXZiYXJDb21wb25lbnQsIEhlYWRlckNvbXBvbmVudCwgRm9vdGVyQ29tcG9uZW50LCBcclxuICBDYXRlZ29yaWVzQ29tcG9uZW50LCBEZXNpZ25lcnNDb21wb25lbnQsIEhvd0l0V29ya3NDb21wb25lbnQsIFxyXG4gIFBhZ2VOb3RGb3VuZENvbXBvbmVudCwgQlNBbGVydENvbXBvbmVudCwgRGF0ZVRpbWVDb21wb25lbnQsXHJcbiAgQ29udGVzdHNDb21wb25lbnQsIFJlZ2lzdGVyQ29tcG9uZW50LCBMb2dpbkNvbXBvbmVudCwgV2lubmVyc0dhbGxlcnlDb21wb25lbnQsXHJcbiAgUHVibGlzaENvbnRlc3RDb21wb25lbnQsIFByb2ZpbGVQYWdlQ29tcG9uZW50LCBNeUNvbnRlc3RzQ29tcG9uZW50LFxyXG4gIENvbnRlc3REZXRhaWxzQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL2luZGV4JztcclxuaW1wb3J0IHsgVXNlck5hdmlnYXRpb25Db21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvbmF2YmFyL3VzZXItbmF2aWdhdGlvbi5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBTdGFyUmF0aW5nQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL2NvbnRlc3RzL3N0YXItcmF0aW5nLmNvbXBvbmVudCc7XHJcblxyXG5pbXBvcnQgeyBDb250ZXN0c1NlcnZpY2UgfSBmcm9tICcuL3NlcnZpY2VzL2NvbnRlc3RzLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBBdXRoU2VydmljZSB9IGZyb20gJy4vc2VydmljZXMvYXV0aC5zZXJ2aWNlJztcclxuaW1wb3J0IHsgRGVzaWduZXJzU2VydmljZSB9IGZyb20gJy4vc2VydmljZXMvZGVzaWduZXJzLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBBcGlTZXJ2aWNlIH0gZnJvbSAnLi9zZXJ2aWNlcy9hcGkuc2VydmljZSc7XHJcbmltcG9ydCB7IENhbkFjdGl2YXRlT25Mb2dpblNlcnZpY2UgfSBmcm9tICcuL2d1YXJkcy9jYW4tYWN0aXZhdGUtb24tbG9naW4uc2VydmljZSc7XHJcblxyXG5pbXBvcnQgeyBDYXRlZ29yaWVzTW9kdWxlIH0gZnJvbSAnLi9jb21wb25lbnRzL2NhdGVnb3JpZXMvY2F0ZWdvcmllcy5tb2R1bGUnO1xyXG5pbXBvcnQgeyBQdWJsaXNoQ29udGVzdE1vZHVsZSB9IGZyb20gJy4vY29tcG9uZW50cy9wdWJsaXNoLWNvbnRlc3QvcHVibGlzaC1jb250ZXN0Lm1vZHVsZSc7XHJcblxyXG5pbXBvcnQgeyBFcnJvckNvbXBvbmVudCwgRXJyb3JTZXJ2aWNlIH0gZnJvbSAnLi9lcnJvcnMvaW5kZXgnO1xyXG5cclxuaW1wb3J0IHsgTG9jYWxEYXRlRnJvbU5vd1BpcGUgfSBmcm9tICcuL3BpcGVzL2xvY2FsLWRhdGUtZnJvbS1ub3ctcGlwZSc7XHJcbmltcG9ydCB7IExvY2FsRGF0ZVN0YW5kYXJ0UGlwZSB9IGZyb20gJy4vcGlwZXMvbG9jYWwtZGF0ZS1zdGFuZGFydC1waXBlJztcclxuXHJcblxyXG5cclxuQE5nTW9kdWxlKHtcclxuICBpbXBvcnRzOiBbIEJyb3dzZXJNb2R1bGUsIEZvcm1zTW9kdWxlLCBSZWFjdGl2ZUZvcm1zTW9kdWxlLCBcclxuICAgICAgICAgICAgIHJvdXRpbmcsIE1hdGVyaWFsTW9kdWxlLmZvclJvb3QoKSwgXHJcbiAgICAgICAgICAgICBBbGVydE1vZHVsZSwgSW5wdXRUZXh0TW9kdWxlLCBEYXRlcGlja2VyTW9kdWxlLCBIdHRwTW9kdWxlLCBcclxuICAgICAgICAgICAgIFRhYlZpZXdNb2R1bGUsIENhdGVnb3JpZXNNb2R1bGUsIFB1Ymxpc2hDb250ZXN0TW9kdWxlLCBOZzJCczNNb2RhbE1vZHVsZSBdLFxyXG4gIGRlY2xhcmF0aW9uczogWyBBcHBDb21wb25lbnQsIFVzZXJOYXZpZ2F0aW9uQ29tcG9uZW50LCBOYXZiYXJDb21wb25lbnQsIEhlYWRlckNvbXBvbmVudCwgXHJcbiAgICAgICAgICAgICAgICAgIEZvb3RlckNvbXBvbmVudCwgQ2F0ZWdvcmllc0NvbXBvbmVudCwgRGVzaWduZXJzQ29tcG9uZW50LCBcclxuICAgICAgICAgICAgICAgICAgSG93SXRXb3Jrc0NvbXBvbmVudCwgUGFnZU5vdEZvdW5kQ29tcG9uZW50LCBEYXRlVGltZUNvbXBvbmVudCxcclxuICAgICAgICAgICAgICAgICAgQlNBbGVydENvbXBvbmVudCwgQ29udGVzdHNDb21wb25lbnQsIExvZ2luQ29tcG9uZW50LCBSZWdpc3RlckNvbXBvbmVudCxcclxuICAgICAgICAgICAgICAgICAgRXJyb3JDb21wb25lbnQsIFdpbm5lcnNHYWxsZXJ5Q29tcG9uZW50LCBQdWJsaXNoQ29udGVzdENvbXBvbmVudCxcclxuICAgICAgICAgICAgICAgICAgUHJvZmlsZVBhZ2VDb21wb25lbnQsIE15Q29udGVzdHNDb21wb25lbnQsIENvbnRlc3REZXRhaWxzQ29tcG9uZW50LFxyXG4gICAgICAgICAgICAgICAgICBMb2NhbERhdGVGcm9tTm93UGlwZSwgTG9jYWxEYXRlU3RhbmRhcnRQaXBlLCBTdGFyUmF0aW5nQ29tcG9uZW50IF0sXHJcbiAgYm9vdHN0cmFwOiBbIEFwcENvbXBvbmVudCBdLFxyXG4gIHByb3ZpZGVyczogWyB7cHJvdmlkZTogTE9DQUxFX0lELCB1c2VWYWx1ZTogXCJsdC1MVFwifSwgYXBwUm91dGluZ1Byb3ZpZGVycywgQ29udGVzdHNTZXJ2aWNlLCBBdXRoU2VydmljZSwgRXJyb3JTZXJ2aWNlLCBcclxuICAgICAgICAgICAgICAgRGVzaWduZXJzU2VydmljZSwgQXBpU2VydmljZSwgQ2FuQWN0aXZhdGVPbkxvZ2luU2VydmljZSBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBBcHBNb2R1bGUgeyB9XHJcbiJdfQ==
