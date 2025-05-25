import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QualityComponent } from './quality.component';
import {FormsModule} from "@angular/forms";



@NgModule({
  declarations: [
    QualityComponent
  ],
    imports: [
        CommonModule,
        FormsModule
    ]
})
export class QualityModule { }
