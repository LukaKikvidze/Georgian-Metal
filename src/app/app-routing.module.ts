import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { GalleryComponent } from './pages/gallery/gallery.component';
import { CareerComponent } from './pages/career/career.component';
import { QualityComponent } from './pages/quality/quality.component';
import { ProductsComponent } from './pages/products/products.component';
import { ProductDetailComponent } from './pages/products/product-detail/product-detail.component';
import {PartnerComponent} from './pages/partners/partners.component';
import {AddProductComponent} from './components/add-product/add-product.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'gallery', component: GalleryComponent },
  { path: 'career', component: CareerComponent },
  { path: 'quality', component: QualityComponent },
  { path: 'products', component: ProductsComponent },
  { path:  'partners', component: PartnerComponent },


  //TESTING
  { path: 'products', component: ProductsComponent },
  { path: 'products/:id', component: ProductDetailComponent },
  { path: '', redirectTo: '/products', pathMatch: 'full' },
  //TESTING2
  { path: 'product-detail/:id', component: ProductDetailComponent },
  { path: 'products', component: ProductsComponent },
  { path: '', redirectTo: '/products', pathMatch: 'full' },

  //ULTRA TESTING
  { path: 'add-product', component: AddProductComponent },
  { path: 'products', component: ProductsComponent },
  { path: '', redirectTo: '/products', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
