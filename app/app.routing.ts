import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

import { HeaderComponent } from './components/header/header.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { DesignersComponent } from './components/designers/designers.component';
import { HowItWorksComponent } from './components/howitworks/howitworks.component';
import { PageNotFoundComponent } from './components/notfound/notfound.component';

const appRoutes: Routes = [
  { path: 'kategorijos', component: CategoriesComponent },
  { path: 'dizaineriai', component: DesignersComponent },
  { path: 'kaip-tai-veikia', component: HowItWorksComponent },
  { path: '', component: HeaderComponent },
  { path: '**', component: PageNotFoundComponent }
];

export const appRoutingProviders: any[] = [

];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);