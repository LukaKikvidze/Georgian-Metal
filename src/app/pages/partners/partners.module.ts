import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PartnerComponent } from './partners.component';
import {TranslatePipe} from "@ngx-translate/core";

@NgModule({
  declarations: [PartnerComponent],
    imports: [CommonModule, TranslatePipe],
  exports: [PartnerComponent]
})
export class PartnerModule { }
