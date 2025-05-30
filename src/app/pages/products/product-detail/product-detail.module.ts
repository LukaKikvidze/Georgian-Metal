import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductDetailComponent } from './product-detail.component';
import { RouterModule } from '@angular/router';
import {TranslatePipe} from "@ngx-translate/core";

@NgModule({
  declarations: [ProductDetailComponent],
    imports: [
        CommonModule,
        RouterModule,
        TranslatePipe
    ],
  exports: [ProductDetailComponent]
})
export class ProductDetailModule { }
