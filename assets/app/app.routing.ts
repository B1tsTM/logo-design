import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';


import { HeaderComponent, CategoriesComponent, DesignersComponent,
         HowItWorksComponent, PageNotFoundComponent, ContestsComponent,
         LoginComponent, RegisterComponent, WinnersGalleryComponent, PublishContestComponent,
         ProfilePageComponent, MyContestsComponent, ContestDetailsComponent, MailListComponent,
         MailCreateComponent, MailCreateForUserComponent, ReadMessageComponent, SentMailComponent,
         SubmitionDetailsComponent, WinnerDetailsComponent, AdminDashboardComponent, AdminManageContestsComponent,
         AdminContestDetailsComponent, DesignerDetailsComponent, ConfirmUserComponent} from './components/index';
      
import { CanActivateOnLoginService } from './guards/can-activate-on-login.service';
import { CanActivateAdminPageService } from './guards/can-activate-admin-page.service';


const appRoutes: Routes = [
  { path: 'konkursai', children: [
    {path: '', component: ContestsComponent},
    {path: ':id', children: [
      {path: '', component: ContestDetailsComponent},
      {path: ':subId', children: [
        {path: '', component: SubmitionDetailsComponent},
        {path: 'nugaletojas', component: WinnerDetailsComponent}
      ]}
    ]}
  ] },
  { path: 'admin', canActivate: [CanActivateAdminPageService], children: [
    { path: '', component: AdminDashboardComponent },
    { path: 'konkursai', children: [
      { path: '', component: AdminManageContestsComponent },
      { path: ':id', component: AdminContestDetailsComponent }
    ]}
  ] },
  { path: 'mano-konkursai', children: [
    {path: '', component: MyContestsComponent}
  ] },
  //{ path: 'paskelbti-konkursa', component: PublishContestComponent },
  { path: 'paskelbti-konkursa', loadChildren: 'js/app/components/publish-contest/publish-contest.module#PublishContestModule' },
  { path: 'kategorijos', component: CategoriesComponent },
  { path: 'nugaletoju-galerija', component: WinnersGalleryComponent },
  { path: 'dizaineriai', children: [
    {path: '', component: DesignersComponent},
    {path: ':id', component: DesignerDetailsComponent}
  ] },
  { path: 'kaip-tai-veikia', component: HowItWorksComponent },
  { path: 'prisijungti', component: LoginComponent },
  { path: 'registracija', component: RegisterComponent },
  { path: 'patvirtinti/:id', component: ConfirmUserComponent },
  //{ path: 'profilis', component: ProfilePageComponent, canActivate: [CanActivateOnLoginService] },
  { path: 'profilis', children: [
    {path: '', component: ProfilePageComponent, canActivate: [CanActivateOnLoginService] },
    {path: 'pastas', children: [
      {path: '', component: MailListComponent, canActivateChild: [CanActivateOnLoginService]},
      {path: 'issiusta', component: SentMailComponent, canActivateChild: [CanActivateOnLoginService]},
      {path: 'zinutes', children: [
        {path: '', component: MailListComponent, canActivateChild: [CanActivateOnLoginService]},
        {path: ':messageId', component: ReadMessageComponent, canActivateChild: [CanActivateOnLoginService]}
        ]},
      {path: 'rasyti-laiska', children: [
        {path: '', component: MailCreateComponent, canActivateChild: [CanActivateOnLoginService]},
        {path: ':nickname', component: MailCreateForUserComponent, canActivateChild: [CanActivateOnLoginService]}
        ]}
      ]}
    ]},
  { path: 'nerasta', component: PageNotFoundComponent },
  { path: '', component: HeaderComponent },
  { path: '**', redirectTo: 'nerasta' }
];

export const appRoutingProviders: any[] = [

];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);