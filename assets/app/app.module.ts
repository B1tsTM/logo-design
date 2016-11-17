import { NgModule, LOCALE_ID, ValueProvider }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { routing,
         appRoutingProviders }  from './app.routing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent }  from './app.component';
import { TabViewModule, InputTextModule, AutoCompleteModule } from 'primeng/primeng';
import { MaterialModule } from '@angular/material';

import { AlertModule, DatepickerModule } from 'ng2-bootstrap/ng2-bootstrap';
import { Ng2Bs3ModalModule } from 'ng2-bs3-modal/ng2-bs3-modal';
import { SimpleNotificationsModule } from 'angular2-notifications';

import { NavbarComponent, HeaderComponent, FooterComponent, 
  CategoriesComponent, DesignersComponent, HowItWorksComponent, 
  PageNotFoundComponent, BSAlertComponent, DateTimeComponent,
  ContestsComponent, RegisterComponent, LoginComponent, WinnersGalleryComponent,
  PublishContestComponent, ProfilePageComponent, MyContestsComponent,
  ContestDetailsComponent, MailListComponent, MailCreateComponent, MailCreateForUserComponent,
  ReadMessageComponent, SentMailComponent, FadingSpinnerComponent, FadingCircleComponent,
  TestSpinnerComponent, TestLoaderComponent, WinnerDetailsComponent } from './components/index';
import { UserNavigationComponent } from './components/navbar/user-navigation.component';
import { StarRatingComponent } from './components/contests/star-rating.component';
import { SubmitionDetailsComponent } from './components/contests/submition-details.component';
import { CommentsSectionComponent } from './components/contests/comments-section.component';

import { ContestsService } from './services/contests.service';
import { AuthService } from './services/auth.service';
import { DesignersService } from './services/designers.service';
import { ApiService } from './services/api.service';
import { CanActivateOnLoginService } from './guards/can-activate-on-login.service';

import { CategoriesModule } from './components/categories/categories.module';
import { PublishContestModule } from './components/publish-contest/publish-contest.module';

import { ErrorComponent, ErrorService } from './errors/index';

import { LocalDateFromNowPipe } from './pipes/local-date-from-now-pipe';
import { LocalDateStandartPipe } from './pipes/local-date-standart-pipe';

const WINDOW_PROVIDER: ValueProvider = {
    provide: Window,
    useValue: window
};


@NgModule({
  imports: [ BrowserModule, FormsModule, ReactiveFormsModule, 
             routing, MaterialModule.forRoot(), 
             AlertModule, InputTextModule, DatepickerModule, HttpModule, 
             TabViewModule, CategoriesModule, PublishContestModule, Ng2Bs3ModalModule,
             SimpleNotificationsModule, AutoCompleteModule ],
  declarations: [ AppComponent, UserNavigationComponent, NavbarComponent, HeaderComponent, 
                  FooterComponent, CategoriesComponent, DesignersComponent, 
                  HowItWorksComponent, PageNotFoundComponent, DateTimeComponent,
                  BSAlertComponent, ContestsComponent, LoginComponent, RegisterComponent,
                  ErrorComponent, WinnersGalleryComponent, PublishContestComponent,
                  ProfilePageComponent, MyContestsComponent, ContestDetailsComponent,
                  LocalDateFromNowPipe, LocalDateStandartPipe, StarRatingComponent,
                  SubmitionDetailsComponent, CommentsSectionComponent, MailListComponent,
                  MailCreateComponent, MailCreateForUserComponent, ReadMessageComponent,
                  SentMailComponent, FadingSpinnerComponent, FadingCircleComponent,
                  TestSpinnerComponent, TestLoaderComponent, WinnerDetailsComponent],
  bootstrap: [ AppComponent ],
  providers: [ {provide: LOCALE_ID, useValue: "lt-LT"}, appRoutingProviders, ContestsService, AuthService, ErrorService, 
               DesignersService, ApiService, CanActivateOnLoginService, WINDOW_PROVIDER ]
})
export class AppModule { }
