import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PartnerComponent } from './partners.component';
import {TranslatePipe} from "@ngx-translate/core";
import {RouterLink} from "@angular/router";

@NgModule({
  declarations: [PartnerComponent],
    imports: [CommonModule, TranslatePipe, RouterLink],
  exports: [PartnerComponent]
})
export class PartnerModule { }
