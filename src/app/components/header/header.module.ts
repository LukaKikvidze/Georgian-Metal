import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component';
import {RouterLink} from "@angular/router";
import { TranslateModule } from '@ngx-translate/core'; // ✅ ეს დაამატე

@NgModule({
  declarations: [
    HeaderComponent
  ],
  exports: [
    HeaderComponent
  ],
  imports: [
    CommonModule,
    RouterLink,
    TranslateModule
  ]
})
export class HeaderModule { }
