import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CareerComponent } from './career.component';
import { TranslateModule } from '@ngx-translate/core'; // ✅

@NgModule({
  declarations: [CareerComponent],
  imports: [
    CommonModule,
    TranslateModule
  ],
  exports: [CareerComponent]
})
export class CareerModule { }
