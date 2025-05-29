import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HttpClient } from '@angular/common/http';

import { LightboxModule } from 'ngx-lightbox';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderModule } from './components/header/header.module';
import { RouterOutlet, RouterModule } from '@angular/router';
import { FooterModule } from './components/footer/footer.module';
import { ContactModule } from './pages/contact/contact.module';
import { CareerModule} from './pages/career/career.module';
import { GalleryModule } from './pages/gallery/gallery.module';
import { ProductDetailModule } from './pages/products/product-detail/product-detail.module';
import { ProductsModule } from './pages/products/products.module';
import { PartnerModule } from './pages/partners/partners.module';
import { HomeModule } from './pages/home/home.module';
import { AddProductComponent } from './components/add-product/add-product.component';
import { FormsModule } from '@angular/forms';
import { QualityModule } from './pages/quality/quality.module';

import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';


// ენის თარგმანის ლოდერის factory ფუნქცია
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
    declarations: [
        AppComponent,
        AddProductComponent,
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        FormsModule,
        LightboxModule,
        RouterModule,
        AppRoutingModule,
        HeaderModule,
        FooterModule,
        ContactModule,
        CareerModule,
        GalleryModule,
        ProductDetailModule,
        ProductsModule,
        PartnerModule,
        HomeModule,
        RouterOutlet,
      QualityModule,
        // ენის თარგმანის მოდული
        TranslateModule.forRoot({
          defaultLanguage: 'ka', // ქართულ ენაზე
          loader: {
            provide: TranslateLoader,
            useFactory: HttpLoaderFactory,
            deps: [HttpClient]
          }
        }),
    ],
    providers: [],
  exports: [],
    bootstrap: [AppComponent]
})
export class AppModule {}
