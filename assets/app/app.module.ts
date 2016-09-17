import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { routing,
         appRoutingProviders }  from './app.routing';
import { FormsModule } from '@angular/forms';

import { AppComponent }  from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';

import { CategoriesComponent } from './components/categories/categories.component';
import { DesignersComponent } from './components/designers/designers.component';
import { HowItWorksComponent } from './components/howitworks/howitworks.component';
import { PageNotFoundComponent } from './components/notfound/notfound.component';

import { AlertModule, DatepickerModule } from 'ng2-bootstrap/ng2-bootstrap';
import { DateTimeComponent } from './components/bs-components/bs-datetime/datetime.component';
import { BSAlertComponent } from './components/bs-components/bs-alert/alert.component';



@NgModule({
  imports: [ BrowserModule, FormsModule, routing, AlertModule, DatepickerModule ],
  declarations: [ AppComponent, NavbarComponent, HeaderComponent, 
                  FooterComponent, CategoriesComponent, DesignersComponent, 
                  HowItWorksComponent, PageNotFoundComponent, DateTimeComponent,
                  BSAlertComponent ],
  bootstrap: [ AppComponent ],
  providers: [ appRoutingProviders ]
})
export class AppModule { }
