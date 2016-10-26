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
import { Ng2Bs3ModalModule } from 'ng2-bs3-modal/ng2-bs3-modal';

import { NavbarComponent, HeaderComponent, FooterComponent, 
  CategoriesComponent, DesignersComponent, HowItWorksComponent, 
  PageNotFoundComponent, BSAlertComponent, DateTimeComponent,
  ContestsComponent, RegisterComponent, LoginComponent, WinnersGalleryComponent,
  PublishContestComponent, ProfilePageComponent, MyContestsComponent,
  ContestDetailsComponent } from './components/index';
import { UserNavigationComponent } from './components/navbar/user-navigation.component';

import { ContestsService } from './services/contests.service';
import { AuthService } from './services/auth.service';
import { DesignersService } from './services/designers.service';
import { ApiService } from './services/api.service';
import { CanActivateOnLoginService } from './guards/can-activate-on-login.service';

import { CategoriesModule } from './components/categories/categories.module';
import { PublishContestModule } from './components/publish-contest/publish-contest.module';

import { ErrorComponent, ErrorService } from './errors/index';



@NgModule({
  imports: [ BrowserModule, FormsModule, ReactiveFormsModule, 
             routing, MaterialModule.forRoot(), 
             AlertModule, InputTextModule, DatepickerModule, HttpModule, 
             TabViewModule, CategoriesModule, PublishContestModule, Ng2Bs3ModalModule ],
  declarations: [ AppComponent, UserNavigationComponent, NavbarComponent, HeaderComponent, 
                  FooterComponent, CategoriesComponent, DesignersComponent, 
                  HowItWorksComponent, PageNotFoundComponent, DateTimeComponent,
                  BSAlertComponent, ContestsComponent, LoginComponent, RegisterComponent,
                  ErrorComponent, WinnersGalleryComponent, PublishContestComponent,
                  ProfilePageComponent, MyContestsComponent, ContestDetailsComponent ],
  bootstrap: [ AppComponent ],
  providers: [ appRoutingProviders, ContestsService, AuthService, ErrorService, 
               DesignersService, ApiService, CanActivateOnLoginService ]
})
export class AppModule { }
