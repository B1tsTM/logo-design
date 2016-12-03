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
var angular2_notifications_1 = require('angular2-notifications');
var index_1 = require('./components/index');
var user_navigation_component_1 = require('./components/navbar/user-navigation.component');
var star_rating_component_1 = require('./components/contests/star-rating.component');
var submition_details_component_1 = require('./components/contests/submition-details.component');
var comments_section_component_1 = require('./components/contests/comments-section.component');
var contests_service_1 = require('./services/contests.service');
var auth_service_1 = require('./services/auth.service');
var designers_service_1 = require('./services/designers.service');
var api_service_1 = require('./services/api.service');
var can_activate_on_login_service_1 = require('./guards/can-activate-on-login.service');
var can_activate_admin_page_service_1 = require('./guards/can-activate-admin-page.service');
var categories_module_1 = require('./components/categories/categories.module');
var publish_contest_module_1 = require('./components/publish-contest/publish-contest.module');
var index_2 = require('./errors/index');
var ng2_pagination_1 = require('ng2-pagination');
var local_date_from_now_pipe_1 = require('./pipes/local-date-from-now-pipe');
var local_date_standart_pipe_1 = require('./pipes/local-date-standart-pipe');
var WINDOW_PROVIDER = {
    provide: Window,
    useValue: window
};
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [platform_browser_1.BrowserModule, forms_1.FormsModule, forms_1.ReactiveFormsModule,
                app_routing_1.routing, material_1.MaterialModule.forRoot(),
                ng2_bootstrap_1.AlertModule, primeng_1.InputTextModule, ng2_bootstrap_1.DatepickerModule, http_1.HttpModule,
                primeng_1.TabViewModule, categories_module_1.CategoriesModule, publish_contest_module_1.PublishContestModule, ng2_bs3_modal_1.Ng2Bs3ModalModule,
                angular2_notifications_1.SimpleNotificationsModule, primeng_1.AutoCompleteModule, ng2_pagination_1.Ng2PaginationModule],
            declarations: [app_component_1.AppComponent, user_navigation_component_1.UserNavigationComponent, index_1.NavbarComponent, index_1.HeaderComponent,
                index_1.FooterComponent, index_1.CategoriesComponent, index_1.DesignersComponent,
                index_1.HowItWorksComponent, index_1.PageNotFoundComponent, index_1.DateTimeComponent,
                index_1.BSAlertComponent, index_1.ContestsComponent, index_1.LoginComponent, index_1.RegisterComponent,
                index_2.ErrorComponent, index_1.WinnersGalleryComponent, index_1.PublishContestComponent,
                index_1.ProfilePageComponent, index_1.MyContestsComponent, index_1.ContestDetailsComponent,
                local_date_from_now_pipe_1.LocalDateFromNowPipe, local_date_standart_pipe_1.LocalDateStandartPipe, star_rating_component_1.StarRatingComponent,
                submition_details_component_1.SubmitionDetailsComponent, comments_section_component_1.CommentsSectionComponent, index_1.MailListComponent,
                index_1.MailCreateComponent, index_1.MailCreateForUserComponent, index_1.ReadMessageComponent,
                index_1.SentMailComponent, index_1.FadingSpinnerComponent, index_1.FadingCircleComponent,
                index_1.TestSpinnerComponent, index_1.TestLoaderComponent, index_1.WinnerDetailsComponent,
                index_1.SubmitionCommentsSectionComponent, index_1.AdminDashboardComponent, index_1.AdminManageContestsComponent,
                index_1.AdminContestDetailsComponent, index_1.DesignerDetailsComponent, index_1.MicroGalleryComponent],
            bootstrap: [app_component_1.AppComponent],
            providers: [{ provide: core_1.LOCALE_ID, useValue: "lt-LT" }, app_routing_1.appRoutingProviders, contests_service_1.ContestsService, auth_service_1.AuthService, index_2.ErrorService,
                designers_service_1.DesignersService, api_service_1.ApiService, can_activate_on_login_service_1.CanActivateOnLoginService, can_activate_admin_page_service_1.CanActivateAdminPageService, WINDOW_PROVIDER]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;

//# sourceMappingURL=data:application/json;charset=utf8;base64,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QUFFLDRCQUFZLENBQUU7WUFDM0IsU0FBUyxFQUFFLENBQUUsRUFBQyxPQUFPLEVBQUUsZ0JBQVMsRUFBRSxRQUFRLEVBQUUsT0FBTyxFQUFDLEVBQUUsaUNBQW1CLEVBQUUsa0NBQWUsRUFBRSwwQkFBVyxFQUFFLG9CQUFZO2dCQUN4RyxvQ0FBZ0IsRUFBRSx3QkFBVSxFQUFFLHlEQUF5QixFQUFFLDZEQUEyQixFQUFFLGVBQWUsQ0FBRTtTQUNySCxDQUFDOztpQkFBQTtJQUN1QixnQkFBQztBQUFELENBQXpCLEFBQTBCLElBQUE7QUFBYixpQkFBUyxZQUFJLENBQUEiLCJmaWxlIjoiYXBwLm1vZHVsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlLCBMT0NBTEVfSUQsIFZhbHVlUHJvdmlkZXIgfSAgICAgIGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBCcm93c2VyTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlcic7XHJcbmltcG9ydCB7IHJvdXRpbmcsXHJcbiAgICAgICAgIGFwcFJvdXRpbmdQcm92aWRlcnMgfSAgZnJvbSAnLi9hcHAucm91dGluZyc7XHJcbmltcG9ydCB7IEZvcm1zTW9kdWxlLCBSZWFjdGl2ZUZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5pbXBvcnQgeyBIdHRwTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvaHR0cCc7XHJcbmltcG9ydCB7IEFwcENvbXBvbmVudCB9ICBmcm9tICcuL2FwcC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBUYWJWaWV3TW9kdWxlLCBJbnB1dFRleHRNb2R1bGUsIEF1dG9Db21wbGV0ZU1vZHVsZSB9IGZyb20gJ3ByaW1lbmcvcHJpbWVuZyc7XHJcbmltcG9ydCB7IE1hdGVyaWFsTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwnO1xyXG5cclxuaW1wb3J0IHsgQWxlcnRNb2R1bGUsIERhdGVwaWNrZXJNb2R1bGUgfSBmcm9tICduZzItYm9vdHN0cmFwL25nMi1ib290c3RyYXAnO1xyXG5pbXBvcnQgeyBOZzJCczNNb2RhbE1vZHVsZSB9IGZyb20gJ25nMi1iczMtbW9kYWwvbmcyLWJzMy1tb2RhbCc7XHJcbmltcG9ydCB7IFNpbXBsZU5vdGlmaWNhdGlvbnNNb2R1bGUgfSBmcm9tICdhbmd1bGFyMi1ub3RpZmljYXRpb25zJztcclxuXHJcbmltcG9ydCB7IE5hdmJhckNvbXBvbmVudCwgSGVhZGVyQ29tcG9uZW50LCBGb290ZXJDb21wb25lbnQsIFxyXG4gIENhdGVnb3JpZXNDb21wb25lbnQsIERlc2lnbmVyc0NvbXBvbmVudCwgSG93SXRXb3Jrc0NvbXBvbmVudCwgXHJcbiAgUGFnZU5vdEZvdW5kQ29tcG9uZW50LCBCU0FsZXJ0Q29tcG9uZW50LCBEYXRlVGltZUNvbXBvbmVudCxcclxuICBDb250ZXN0c0NvbXBvbmVudCwgUmVnaXN0ZXJDb21wb25lbnQsIExvZ2luQ29tcG9uZW50LCBXaW5uZXJzR2FsbGVyeUNvbXBvbmVudCxcclxuICBQdWJsaXNoQ29udGVzdENvbXBvbmVudCwgUHJvZmlsZVBhZ2VDb21wb25lbnQsIE15Q29udGVzdHNDb21wb25lbnQsXHJcbiAgQ29udGVzdERldGFpbHNDb21wb25lbnQsIE1haWxMaXN0Q29tcG9uZW50LCBNYWlsQ3JlYXRlQ29tcG9uZW50LCBNYWlsQ3JlYXRlRm9yVXNlckNvbXBvbmVudCxcclxuICBSZWFkTWVzc2FnZUNvbXBvbmVudCwgU2VudE1haWxDb21wb25lbnQsIEZhZGluZ1NwaW5uZXJDb21wb25lbnQsIEZhZGluZ0NpcmNsZUNvbXBvbmVudCxcclxuICBUZXN0U3Bpbm5lckNvbXBvbmVudCwgVGVzdExvYWRlckNvbXBvbmVudCwgV2lubmVyRGV0YWlsc0NvbXBvbmVudCwgU3VibWl0aW9uQ29tbWVudHNTZWN0aW9uQ29tcG9uZW50LFxyXG4gIEFkbWluRGFzaGJvYXJkQ29tcG9uZW50LCBBZG1pbk1hbmFnZUNvbnRlc3RzQ29tcG9uZW50LCBBZG1pbkNvbnRlc3REZXRhaWxzQ29tcG9uZW50LFxyXG4gIERlc2lnbmVyRGV0YWlsc0NvbXBvbmVudCwgTWljcm9HYWxsZXJ5Q29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL2luZGV4JztcclxuaW1wb3J0IHsgVXNlck5hdmlnYXRpb25Db21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvbmF2YmFyL3VzZXItbmF2aWdhdGlvbi5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBTdGFyUmF0aW5nQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL2NvbnRlc3RzL3N0YXItcmF0aW5nLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFN1Ym1pdGlvbkRldGFpbHNDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvY29udGVzdHMvc3VibWl0aW9uLWRldGFpbHMuY29tcG9uZW50JztcclxuaW1wb3J0IHsgQ29tbWVudHNTZWN0aW9uQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL2NvbnRlc3RzL2NvbW1lbnRzLXNlY3Rpb24uY29tcG9uZW50JztcclxuXHJcbmltcG9ydCB7IENvbnRlc3RzU2VydmljZSB9IGZyb20gJy4vc2VydmljZXMvY29udGVzdHMuc2VydmljZSc7XHJcbmltcG9ydCB7IEF1dGhTZXJ2aWNlIH0gZnJvbSAnLi9zZXJ2aWNlcy9hdXRoLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBEZXNpZ25lcnNTZXJ2aWNlIH0gZnJvbSAnLi9zZXJ2aWNlcy9kZXNpZ25lcnMuc2VydmljZSc7XHJcbmltcG9ydCB7IEFwaVNlcnZpY2UgfSBmcm9tICcuL3NlcnZpY2VzL2FwaS5zZXJ2aWNlJztcclxuaW1wb3J0IHsgQ2FuQWN0aXZhdGVPbkxvZ2luU2VydmljZSB9IGZyb20gJy4vZ3VhcmRzL2Nhbi1hY3RpdmF0ZS1vbi1sb2dpbi5zZXJ2aWNlJztcclxuaW1wb3J0IHsgQ2FuQWN0aXZhdGVBZG1pblBhZ2VTZXJ2aWNlIH0gZnJvbSAnLi9ndWFyZHMvY2FuLWFjdGl2YXRlLWFkbWluLXBhZ2Uuc2VydmljZSc7XHJcblxyXG5pbXBvcnQgeyBDYXRlZ29yaWVzTW9kdWxlIH0gZnJvbSAnLi9jb21wb25lbnRzL2NhdGVnb3JpZXMvY2F0ZWdvcmllcy5tb2R1bGUnO1xyXG5pbXBvcnQgeyBQdWJsaXNoQ29udGVzdE1vZHVsZSB9IGZyb20gJy4vY29tcG9uZW50cy9wdWJsaXNoLWNvbnRlc3QvcHVibGlzaC1jb250ZXN0Lm1vZHVsZSc7XHJcblxyXG5pbXBvcnQgeyBFcnJvckNvbXBvbmVudCwgRXJyb3JTZXJ2aWNlIH0gZnJvbSAnLi9lcnJvcnMvaW5kZXgnO1xyXG5cclxuaW1wb3J0IHsgTmcyUGFnaW5hdGlvbk1vZHVsZSB9IGZyb20gJ25nMi1wYWdpbmF0aW9uJztcclxuXHJcbmltcG9ydCB7IExvY2FsRGF0ZUZyb21Ob3dQaXBlIH0gZnJvbSAnLi9waXBlcy9sb2NhbC1kYXRlLWZyb20tbm93LXBpcGUnO1xyXG5pbXBvcnQgeyBMb2NhbERhdGVTdGFuZGFydFBpcGUgfSBmcm9tICcuL3BpcGVzL2xvY2FsLWRhdGUtc3RhbmRhcnQtcGlwZSc7XHJcblxyXG5jb25zdCBXSU5ET1dfUFJPVklERVI6IFZhbHVlUHJvdmlkZXIgPSB7XHJcbiAgICBwcm92aWRlOiBXaW5kb3csXHJcbiAgICB1c2VWYWx1ZTogd2luZG93XHJcbn07XHJcblxyXG5cclxuQE5nTW9kdWxlKHtcclxuICBpbXBvcnRzOiBbIEJyb3dzZXJNb2R1bGUsIEZvcm1zTW9kdWxlLCBSZWFjdGl2ZUZvcm1zTW9kdWxlLCBcclxuICAgICAgICAgICAgIHJvdXRpbmcsIE1hdGVyaWFsTW9kdWxlLmZvclJvb3QoKSwgXHJcbiAgICAgICAgICAgICBBbGVydE1vZHVsZSwgSW5wdXRUZXh0TW9kdWxlLCBEYXRlcGlja2VyTW9kdWxlLCBIdHRwTW9kdWxlLCBcclxuICAgICAgICAgICAgIFRhYlZpZXdNb2R1bGUsIENhdGVnb3JpZXNNb2R1bGUsIFB1Ymxpc2hDb250ZXN0TW9kdWxlLCBOZzJCczNNb2RhbE1vZHVsZSxcclxuICAgICAgICAgICAgIFNpbXBsZU5vdGlmaWNhdGlvbnNNb2R1bGUsIEF1dG9Db21wbGV0ZU1vZHVsZSwgTmcyUGFnaW5hdGlvbk1vZHVsZSBdLFxyXG4gIGRlY2xhcmF0aW9uczogWyBBcHBDb21wb25lbnQsIFVzZXJOYXZpZ2F0aW9uQ29tcG9uZW50LCBOYXZiYXJDb21wb25lbnQsIEhlYWRlckNvbXBvbmVudCwgXHJcbiAgICAgICAgICAgICAgICAgIEZvb3RlckNvbXBvbmVudCwgQ2F0ZWdvcmllc0NvbXBvbmVudCwgRGVzaWduZXJzQ29tcG9uZW50LCBcclxuICAgICAgICAgICAgICAgICAgSG93SXRXb3Jrc0NvbXBvbmVudCwgUGFnZU5vdEZvdW5kQ29tcG9uZW50LCBEYXRlVGltZUNvbXBvbmVudCxcclxuICAgICAgICAgICAgICAgICAgQlNBbGVydENvbXBvbmVudCwgQ29udGVzdHNDb21wb25lbnQsIExvZ2luQ29tcG9uZW50LCBSZWdpc3RlckNvbXBvbmVudCxcclxuICAgICAgICAgICAgICAgICAgRXJyb3JDb21wb25lbnQsIFdpbm5lcnNHYWxsZXJ5Q29tcG9uZW50LCBQdWJsaXNoQ29udGVzdENvbXBvbmVudCxcclxuICAgICAgICAgICAgICAgICAgUHJvZmlsZVBhZ2VDb21wb25lbnQsIE15Q29udGVzdHNDb21wb25lbnQsIENvbnRlc3REZXRhaWxzQ29tcG9uZW50LFxyXG4gICAgICAgICAgICAgICAgICBMb2NhbERhdGVGcm9tTm93UGlwZSwgTG9jYWxEYXRlU3RhbmRhcnRQaXBlLCBTdGFyUmF0aW5nQ29tcG9uZW50LFxyXG4gICAgICAgICAgICAgICAgICBTdWJtaXRpb25EZXRhaWxzQ29tcG9uZW50LCBDb21tZW50c1NlY3Rpb25Db21wb25lbnQsIE1haWxMaXN0Q29tcG9uZW50LFxyXG4gICAgICAgICAgICAgICAgICBNYWlsQ3JlYXRlQ29tcG9uZW50LCBNYWlsQ3JlYXRlRm9yVXNlckNvbXBvbmVudCwgUmVhZE1lc3NhZ2VDb21wb25lbnQsXHJcbiAgICAgICAgICAgICAgICAgIFNlbnRNYWlsQ29tcG9uZW50LCBGYWRpbmdTcGlubmVyQ29tcG9uZW50LCBGYWRpbmdDaXJjbGVDb21wb25lbnQsXHJcbiAgICAgICAgICAgICAgICAgIFRlc3RTcGlubmVyQ29tcG9uZW50LCBUZXN0TG9hZGVyQ29tcG9uZW50LCBXaW5uZXJEZXRhaWxzQ29tcG9uZW50LFxyXG4gICAgICAgICAgICAgICAgICBTdWJtaXRpb25Db21tZW50c1NlY3Rpb25Db21wb25lbnQsIEFkbWluRGFzaGJvYXJkQ29tcG9uZW50LCBBZG1pbk1hbmFnZUNvbnRlc3RzQ29tcG9uZW50LFxyXG4gICAgICAgICAgICAgICAgICBBZG1pbkNvbnRlc3REZXRhaWxzQ29tcG9uZW50LCBEZXNpZ25lckRldGFpbHNDb21wb25lbnQsIE1pY3JvR2FsbGVyeUNvbXBvbmVudF0sXHJcbiAgYm9vdHN0cmFwOiBbIEFwcENvbXBvbmVudCBdLFxyXG4gIHByb3ZpZGVyczogWyB7cHJvdmlkZTogTE9DQUxFX0lELCB1c2VWYWx1ZTogXCJsdC1MVFwifSwgYXBwUm91dGluZ1Byb3ZpZGVycywgQ29udGVzdHNTZXJ2aWNlLCBBdXRoU2VydmljZSwgRXJyb3JTZXJ2aWNlLCBcclxuICAgICAgICAgICAgICAgRGVzaWduZXJzU2VydmljZSwgQXBpU2VydmljZSwgQ2FuQWN0aXZhdGVPbkxvZ2luU2VydmljZSwgQ2FuQWN0aXZhdGVBZG1pblBhZ2VTZXJ2aWNlLCBXSU5ET1dfUFJPVklERVIgXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgQXBwTW9kdWxlIHsgfVxyXG4iXX0=
