import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';


import { HeaderComponent, CategoriesComponent, DesignersComponent,
         HowItWorksComponent, PageNotFoundComponent, ContestsComponent,
         LoginComponent, RegisterComponent, WinnersGalleryComponent, PublishContestComponent,
         ProfilePageComponent } from './components/index';
      
import { CanActivateProfilePageService } from './guards/can-activate-profile-page.service';


const appRoutes: Routes = [
  { path: 'konkursai', component: ContestsComponent },
  { path: 'paskelbti-konkursa', component: PublishContestComponent },
  { path: 'kategorijos', component: CategoriesComponent },
  { path: 'nugaletoju-galerija', component: WinnersGalleryComponent },
  { path: 'dizaineriai', component: DesignersComponent },
  { path: 'kaip-tai-veikia', component: HowItWorksComponent },
  { path: 'prisijungti', component: LoginComponent },
  { path: 'registracija', component: RegisterComponent },
  { path: 'profilis', component: ProfilePageComponent, canActivate: [CanActivateProfilePageService] },
  { path: 'nerasta', component: PageNotFoundComponent },
  { path: '', component: HeaderComponent },
  { path: '**', redirectTo: 'nerasta' }
];

export const appRoutingProviders: any[] = [

];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);