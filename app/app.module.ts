import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { routing,
         appRoutingProviders }  from './app.routing';

import { AppComponent }  from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';

import { CategoriesComponent } from './components/categories/categories.component';
import { DesignersComponent } from './components/designers/designers.component';
import { HowItWorksComponent } from './components/howitworks/howitworks.component';
import { PageNotFoundComponent } from './components/notfound/notfound.component';



@NgModule({
  imports: [ BrowserModule, routing ],
  declarations: [ AppComponent, NavbarComponent, HeaderComponent, 
                  FooterComponent, CategoriesComponent, DesignersComponent, 
                  HowItWorksComponent, PageNotFoundComponent ],
  bootstrap: [ AppComponent ],
  providers: [ appRoutingProviders ]
})
export class AppModule { }
