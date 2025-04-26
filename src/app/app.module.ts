import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { LightboxModule } from 'ngx-lightbox';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderModule } from './components/header/header.module';
import { RouterOutlet } from '@angular/router';
import { FooterModule } from './components/footer/footer.module';
import { ContactModule } from './pages/contact/contact.module';
import { RouterModule } from '@angular/router';
import {CareerModule} from './pages/career/career.module';
import {GalleryModule} from './pages/gallery/gallery.module';
import {ProductDetailModule} from './pages/products/product-detail/product-detail.module';
import {ProductsModule} from './pages/products/products.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    LightboxModule,
    ContactModule,
    BrowserModule,
    AppRoutingModule,
    HeaderModule,
    RouterOutlet,
    FooterModule,
    RouterModule,
    CareerModule,
    GalleryModule,
    ProductDetailModule,
    ProductsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
