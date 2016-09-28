import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { routing,
         appRoutingProviders }  from './app.routing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent }  from './app.component';
import { TabViewModule, InputTextModule } from 'primeng/primeng';
import { MaterialModule } from '@angular/material';

import { AlertModule, DatepickerModule } from 'ng2-bootstrap/ng2-bootstrap';

import { NavbarComponent, HeaderComponent, FooterComponent, 
  CategoriesComponent, DesignersComponent, HowItWorksComponent, 
  PageNotFoundComponent, BSAlertComponent, DateTimeComponent,
  ContestsComponent, RegisterComponent, LoginComponent } from './components/index';

import { ContestsService } from './services/contests.service';

import { CategoriesModule } from './components/categories/categories.module';



@NgModule({
  imports: [ BrowserModule, FormsModule, ReactiveFormsModule, 
             routing, MaterialModule.forRoot(), 
             AlertModule, InputTextModule, DatepickerModule, HttpModule, 
             TabViewModule, CategoriesModule ],
  declarations: [ AppComponent, NavbarComponent, HeaderComponent, 
                  FooterComponent, CategoriesComponent, DesignersComponent, 
                  HowItWorksComponent, PageNotFoundComponent, DateTimeComponent,
                  BSAlertComponent, ContestsComponent, LoginComponent, RegisterComponent ],
  bootstrap: [ AppComponent ],
  providers: [ appRoutingProviders, ContestsService ]
})
export class AppModule { }
