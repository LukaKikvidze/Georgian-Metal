import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GalleryComponent } from './gallery.component';
import { PhotoModule } from '../photo/photo.module';
import { VideoModule } from '../video/video.module';
import {TranslatePipe} from '@ngx-translate/core';

@NgModule({
  declarations: [GalleryComponent],
  imports: [
    CommonModule,
    PhotoModule,
    VideoModule,
    TranslatePipe
  ],
  exports: [GalleryComponent]
})
export class GalleryModule {}
