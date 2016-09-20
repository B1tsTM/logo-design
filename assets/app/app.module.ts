import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { routing,
         appRoutingProviders }  from './app.routing';
import { FormsModule } from '@angular/forms';

import { AppComponent }  from './app.component';

import { AlertModule, DatepickerModule } from 'ng2-bootstrap/ng2-bootstrap';

import { NavbarComponent, HeaderComponent, FooterComponent, 
  CategoriesComponent, DesignersComponent, HowItWorksComponent, 
  PageNotFoundComponent, BSAlertComponent, DateTimeComponent,
  ContestsComponent } from './components/index';

import { ContestsService } from './services/contests.service';



@NgModule({
  imports: [ BrowserModule, FormsModule, routing, AlertModule, DatepickerModule ],
  declarations: [ AppComponent, NavbarComponent, HeaderComponent, 
                  FooterComponent, CategoriesComponent, DesignersComponent, 
                  HowItWorksComponent, PageNotFoundComponent, DateTimeComponent,
                  BSAlertComponent, ContestsComponent ],
  bootstrap: [ AppComponent ],
  providers: [ appRoutingProviders, ContestsService ]
})
export class AppModule { }
