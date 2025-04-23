import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderModule } from './components/header/header.module';
import { RouterOutlet } from '@angular/router';
import { FooterModule } from './components/footer/footer.module';
import { ContactModule } from './pages/contact/contact.module';
import { RouterModule } from '@angular/router';
import {CareerModule} from './pages/career/career.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    ContactModule,
    BrowserModule,
    AppRoutingModule,
    HeaderModule,
    RouterOutlet,
    FooterModule,
    RouterModule,
    CareerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
