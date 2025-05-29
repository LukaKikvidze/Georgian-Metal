import { NgModule } from '@angular/core';
import { QualityComponent } from './quality.component';
import { FormsModule } from "@angular/forms";
import { CommonModule } from '@angular/common'
import { MatIconModule } from '@angular/material/icon';
import {TranslatePipe} from '@ngx-translate/core';

@NgModule({
  declarations: [
    QualityComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    MatIconModule,
    TranslatePipe
  ]
})
export class QualityModule { }
