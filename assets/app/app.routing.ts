import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

import { HeaderComponent, CategoriesComponent, DesignersComponent,
         HowItWorksComponent, PageNotFoundComponent, ContestsComponent,
        LoginComponent, RegisterComponent } from './components/index';

const appRoutes: Routes = [
  { path: 'konkursai', component: ContestsComponent },
  { path: 'kategorijos', component: CategoriesComponent },
  { path: 'dizaineriai', component: DesignersComponent },
  { path: 'kaip-tai-veikia', component: HowItWorksComponent },
  { path: 'prisijungti', component: LoginComponent },
  { path: 'registracija', component: RegisterComponent },
  { path: 'nerasta', component: PageNotFoundComponent },
  { path: '', component: HeaderComponent },
  { path: '**', redirectTo: 'nerasta' }
];

export const appRoutingProviders: any[] = [

];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);