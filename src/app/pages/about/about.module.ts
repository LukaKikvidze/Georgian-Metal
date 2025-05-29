import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './about.component';
import {TranslatePipe} from '@ngx-translate/core';

@NgModule({
  declarations: [AboutComponent],
  imports: [CommonModule, TranslatePipe],
  exports: [AboutComponent]  // <-- Export here
})
export class AboutModule { }
