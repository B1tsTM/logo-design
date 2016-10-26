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
                index_1.ProfilePageComponent, index_1.MyContestsComponent, index_1.ContestDetailsComponent],
            bootstrap: [app_component_1.AppComponent],
            providers: [app_routing_1.appRoutingProviders, contests_service_1.ContestsService, auth_service_1.AuthService, index_2.ErrorService,
                designers_service_1.DesignersService, api_service_1.ApiService, can_activate_on_login_service_1.CanActivateOnLoginService]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUE4QixlQUFlLENBQUMsQ0FBQTtBQUM5QyxpQ0FBOEIsMkJBQTJCLENBQUMsQ0FBQTtBQUMxRCw0QkFDcUMsZUFBZSxDQUFDLENBQUE7QUFDckQsc0JBQWlELGdCQUFnQixDQUFDLENBQUE7QUFDbEUscUJBQTJCLGVBQWUsQ0FBQyxDQUFBO0FBQzNDLDhCQUE4QixpQkFBaUIsQ0FBQyxDQUFBO0FBQ2hELHdCQUErQyxpQkFBaUIsQ0FBQyxDQUFBO0FBQ2pFLHlCQUErQixtQkFBbUIsQ0FBQyxDQUFBO0FBRW5ELDhCQUE4Qyw2QkFBNkIsQ0FBQyxDQUFBO0FBQzVFLDhCQUFrQyw2QkFBNkIsQ0FBQyxDQUFBO0FBRWhFLHNCQUtpQyxvQkFBb0IsQ0FBQyxDQUFBO0FBQ3RELDBDQUF3QywrQ0FBK0MsQ0FBQyxDQUFBO0FBRXhGLGlDQUFnQyw2QkFBNkIsQ0FBQyxDQUFBO0FBQzlELDZCQUE0Qix5QkFBeUIsQ0FBQyxDQUFBO0FBQ3RELGtDQUFpQyw4QkFBOEIsQ0FBQyxDQUFBO0FBQ2hFLDRCQUEyQix3QkFBd0IsQ0FBQyxDQUFBO0FBQ3BELDhDQUEwQyx3Q0FBd0MsQ0FBQyxDQUFBO0FBRW5GLGtDQUFpQywyQ0FBMkMsQ0FBQyxDQUFBO0FBQzdFLHVDQUFxQyxxREFBcUQsQ0FBQyxDQUFBO0FBRTNGLHNCQUE2QyxnQkFBZ0IsQ0FBQyxDQUFBO0FBbUI5RDtJQUFBO0lBQXlCLENBQUM7SUFmMUI7UUFBQyxlQUFRLENBQUM7WUFDUixPQUFPLEVBQUUsQ0FBRSxnQ0FBYSxFQUFFLG1CQUFXLEVBQUUsMkJBQW1CO2dCQUMvQyxxQkFBTyxFQUFFLHlCQUFjLENBQUMsT0FBTyxFQUFFO2dCQUNqQywyQkFBVyxFQUFFLHlCQUFlLEVBQUUsZ0NBQWdCLEVBQUUsaUJBQVU7Z0JBQzFELHVCQUFhLEVBQUUsb0NBQWdCLEVBQUUsNkNBQW9CLEVBQUUsaUNBQWlCLENBQUU7WUFDckYsWUFBWSxFQUFFLENBQUUsNEJBQVksRUFBRSxtREFBdUIsRUFBRSx1QkFBZSxFQUFFLHVCQUFlO2dCQUN2RSx1QkFBZSxFQUFFLDJCQUFtQixFQUFFLDBCQUFrQjtnQkFDeEQsMkJBQW1CLEVBQUUsNkJBQXFCLEVBQUUseUJBQWlCO2dCQUM3RCx3QkFBZ0IsRUFBRSx5QkFBaUIsRUFBRSxzQkFBYyxFQUFFLHlCQUFpQjtnQkFDdEUsc0JBQWMsRUFBRSwrQkFBdUIsRUFBRSwrQkFBdUI7Z0JBQ2hFLDRCQUFvQixFQUFFLDJCQUFtQixFQUFFLCtCQUF1QixDQUFFO1lBQ3BGLFNBQVMsRUFBRSxDQUFFLDRCQUFZLENBQUU7WUFDM0IsU0FBUyxFQUFFLENBQUUsaUNBQW1CLEVBQUUsa0NBQWUsRUFBRSwwQkFBVyxFQUFFLG9CQUFZO2dCQUMvRCxvQ0FBZ0IsRUFBRSx3QkFBVSxFQUFFLHlEQUF5QixDQUFFO1NBQ3ZFLENBQUM7O2lCQUFBO0lBQ3VCLGdCQUFDO0FBQUQsQ0FBekIsQUFBMEIsSUFBQTtBQUFiLGlCQUFTLFlBQUksQ0FBQSIsImZpbGUiOiJhcHAubW9kdWxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSAgICAgIGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBCcm93c2VyTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlcic7XHJcbmltcG9ydCB7IHJvdXRpbmcsXHJcbiAgICAgICAgIGFwcFJvdXRpbmdQcm92aWRlcnMgfSAgZnJvbSAnLi9hcHAucm91dGluZyc7XHJcbmltcG9ydCB7IEZvcm1zTW9kdWxlLCBSZWFjdGl2ZUZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5pbXBvcnQgeyBIdHRwTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvaHR0cCc7XHJcbmltcG9ydCB7IEFwcENvbXBvbmVudCB9ICBmcm9tICcuL2FwcC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBUYWJWaWV3TW9kdWxlLCBJbnB1dFRleHRNb2R1bGUgfSBmcm9tICdwcmltZW5nL3ByaW1lbmcnO1xyXG5pbXBvcnQgeyBNYXRlcmlhbE1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsJztcclxuXHJcbmltcG9ydCB7IEFsZXJ0TW9kdWxlLCBEYXRlcGlja2VyTW9kdWxlIH0gZnJvbSAnbmcyLWJvb3RzdHJhcC9uZzItYm9vdHN0cmFwJztcclxuaW1wb3J0IHsgTmcyQnMzTW9kYWxNb2R1bGUgfSBmcm9tICduZzItYnMzLW1vZGFsL25nMi1iczMtbW9kYWwnO1xyXG5cclxuaW1wb3J0IHsgTmF2YmFyQ29tcG9uZW50LCBIZWFkZXJDb21wb25lbnQsIEZvb3RlckNvbXBvbmVudCwgXHJcbiAgQ2F0ZWdvcmllc0NvbXBvbmVudCwgRGVzaWduZXJzQ29tcG9uZW50LCBIb3dJdFdvcmtzQ29tcG9uZW50LCBcclxuICBQYWdlTm90Rm91bmRDb21wb25lbnQsIEJTQWxlcnRDb21wb25lbnQsIERhdGVUaW1lQ29tcG9uZW50LFxyXG4gIENvbnRlc3RzQ29tcG9uZW50LCBSZWdpc3RlckNvbXBvbmVudCwgTG9naW5Db21wb25lbnQsIFdpbm5lcnNHYWxsZXJ5Q29tcG9uZW50LFxyXG4gIFB1Ymxpc2hDb250ZXN0Q29tcG9uZW50LCBQcm9maWxlUGFnZUNvbXBvbmVudCwgTXlDb250ZXN0c0NvbXBvbmVudCxcclxuICBDb250ZXN0RGV0YWlsc0NvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9pbmRleCc7XHJcbmltcG9ydCB7IFVzZXJOYXZpZ2F0aW9uQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL25hdmJhci91c2VyLW5hdmlnYXRpb24uY29tcG9uZW50JztcclxuXHJcbmltcG9ydCB7IENvbnRlc3RzU2VydmljZSB9IGZyb20gJy4vc2VydmljZXMvY29udGVzdHMuc2VydmljZSc7XHJcbmltcG9ydCB7IEF1dGhTZXJ2aWNlIH0gZnJvbSAnLi9zZXJ2aWNlcy9hdXRoLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBEZXNpZ25lcnNTZXJ2aWNlIH0gZnJvbSAnLi9zZXJ2aWNlcy9kZXNpZ25lcnMuc2VydmljZSc7XHJcbmltcG9ydCB7IEFwaVNlcnZpY2UgfSBmcm9tICcuL3NlcnZpY2VzL2FwaS5zZXJ2aWNlJztcclxuaW1wb3J0IHsgQ2FuQWN0aXZhdGVPbkxvZ2luU2VydmljZSB9IGZyb20gJy4vZ3VhcmRzL2Nhbi1hY3RpdmF0ZS1vbi1sb2dpbi5zZXJ2aWNlJztcclxuXHJcbmltcG9ydCB7IENhdGVnb3JpZXNNb2R1bGUgfSBmcm9tICcuL2NvbXBvbmVudHMvY2F0ZWdvcmllcy9jYXRlZ29yaWVzLm1vZHVsZSc7XHJcbmltcG9ydCB7IFB1Ymxpc2hDb250ZXN0TW9kdWxlIH0gZnJvbSAnLi9jb21wb25lbnRzL3B1Ymxpc2gtY29udGVzdC9wdWJsaXNoLWNvbnRlc3QubW9kdWxlJztcclxuXHJcbmltcG9ydCB7IEVycm9yQ29tcG9uZW50LCBFcnJvclNlcnZpY2UgfSBmcm9tICcuL2Vycm9ycy9pbmRleCc7XHJcblxyXG5cclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgaW1wb3J0czogWyBCcm93c2VyTW9kdWxlLCBGb3Jtc01vZHVsZSwgUmVhY3RpdmVGb3Jtc01vZHVsZSwgXHJcbiAgICAgICAgICAgICByb3V0aW5nLCBNYXRlcmlhbE1vZHVsZS5mb3JSb290KCksIFxyXG4gICAgICAgICAgICAgQWxlcnRNb2R1bGUsIElucHV0VGV4dE1vZHVsZSwgRGF0ZXBpY2tlck1vZHVsZSwgSHR0cE1vZHVsZSwgXHJcbiAgICAgICAgICAgICBUYWJWaWV3TW9kdWxlLCBDYXRlZ29yaWVzTW9kdWxlLCBQdWJsaXNoQ29udGVzdE1vZHVsZSwgTmcyQnMzTW9kYWxNb2R1bGUgXSxcclxuICBkZWNsYXJhdGlvbnM6IFsgQXBwQ29tcG9uZW50LCBVc2VyTmF2aWdhdGlvbkNvbXBvbmVudCwgTmF2YmFyQ29tcG9uZW50LCBIZWFkZXJDb21wb25lbnQsIFxyXG4gICAgICAgICAgICAgICAgICBGb290ZXJDb21wb25lbnQsIENhdGVnb3JpZXNDb21wb25lbnQsIERlc2lnbmVyc0NvbXBvbmVudCwgXHJcbiAgICAgICAgICAgICAgICAgIEhvd0l0V29ya3NDb21wb25lbnQsIFBhZ2VOb3RGb3VuZENvbXBvbmVudCwgRGF0ZVRpbWVDb21wb25lbnQsXHJcbiAgICAgICAgICAgICAgICAgIEJTQWxlcnRDb21wb25lbnQsIENvbnRlc3RzQ29tcG9uZW50LCBMb2dpbkNvbXBvbmVudCwgUmVnaXN0ZXJDb21wb25lbnQsXHJcbiAgICAgICAgICAgICAgICAgIEVycm9yQ29tcG9uZW50LCBXaW5uZXJzR2FsbGVyeUNvbXBvbmVudCwgUHVibGlzaENvbnRlc3RDb21wb25lbnQsXHJcbiAgICAgICAgICAgICAgICAgIFByb2ZpbGVQYWdlQ29tcG9uZW50LCBNeUNvbnRlc3RzQ29tcG9uZW50LCBDb250ZXN0RGV0YWlsc0NvbXBvbmVudCBdLFxyXG4gIGJvb3RzdHJhcDogWyBBcHBDb21wb25lbnQgXSxcclxuICBwcm92aWRlcnM6IFsgYXBwUm91dGluZ1Byb3ZpZGVycywgQ29udGVzdHNTZXJ2aWNlLCBBdXRoU2VydmljZSwgRXJyb3JTZXJ2aWNlLCBcclxuICAgICAgICAgICAgICAgRGVzaWduZXJzU2VydmljZSwgQXBpU2VydmljZSwgQ2FuQWN0aXZhdGVPbkxvZ2luU2VydmljZSBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBBcHBNb2R1bGUgeyB9XHJcbiJdfQ==
