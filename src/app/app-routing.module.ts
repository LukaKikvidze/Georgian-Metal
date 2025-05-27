import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { GalleryComponent } from './pages/gallery/gallery.component';
import { PhotoComponent } from './pages/photo/photo.component';
import { VideoComponent } from './pages/video/video.component';
import { CareerComponent } from './pages/career/career.component';
import { QualityComponent } from './pages/quality/quality.component';
import { ProductsComponent } from './pages/products/products.component';
import { ProductDetailComponent } from './pages/products/product-detail/product-detail.component';
import { PartnerComponent } from './pages/partners/partners.component';
import { AddProductComponent } from './components/add-product/add-product.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },

  { path: 'gallery', component: GalleryComponent, children: [
      { path: 'photo', component: PhotoComponent },
      { path: 'video', component: VideoComponent },
      { path: '', redirectTo: 'photo', pathMatch: 'full' }
    ]},

  { path: 'career', component: CareerComponent },
  { path: 'quality', component: QualityComponent },

  { path: 'products', component: ProductsComponent },
  { path: 'products/:id', component: ProductDetailComponent },

  { path: 'partners', component: PartnerComponent },

  { path: 'add-product', component: AddProductComponent },

  { path: '**', redirectTo: '', pathMatch: 'full' }  // არამომდგარი გზის რედირექტი ჰომზე
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
