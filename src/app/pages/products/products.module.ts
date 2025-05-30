import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from './products.component';
import { RouterModule } from '@angular/router';
import {TranslatePipe} from '@ngx-translate/core';

@NgModule({
  declarations: [ProductsComponent],
  imports: [
    CommonModule,
    RouterModule,
    TranslatePipe
  ],
  exports: [ProductsComponent]
})
export class ProductsModule { }
