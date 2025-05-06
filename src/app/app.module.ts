import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

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
import {PartnerModule} from './pages/partners/partners.module';
import {HomeModule} from './pages/home/home.module';
import { AddProductComponent } from './components/add-product/add-product.component';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    AddProductComponent,
  ],

  imports: [
    HttpClientModule,
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
    ProductsModule,
    PartnerModule,
    HomeModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
