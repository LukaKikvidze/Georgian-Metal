import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GalleryComponent } from './gallery.component';
import { PhotoModule } from '../photo/photo.module';
import { VideoModule } from '../video/video.module';

@NgModule({
  declarations: [GalleryComponent],
  imports: [
    CommonModule,
    PhotoModule,
    VideoModule
  ],
  exports: [GalleryComponent]
})
export class GalleryModule {}
