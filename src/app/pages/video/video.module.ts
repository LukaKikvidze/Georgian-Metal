import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VideoComponent } from './video.component';

@NgModule({
  declarations: [VideoComponent],
  imports: [CommonModule],
  exports: [VideoComponent]
})
export class VideoModule {}
