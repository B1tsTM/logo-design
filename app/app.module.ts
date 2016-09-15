import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';


@NgModule({
  imports: [ BrowserModule ],
  declarations: [ AppComponent, NavbarComponent, HeaderComponent, FooterComponent ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
