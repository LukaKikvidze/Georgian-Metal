import { Component } from '@angular/core';
import { Lightbox } from 'ngx-lightbox';

@Component({
  selector: 'app-gallery',
  standalone: false,
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent {
  images: string[] = [];
  album: any[] = [];

  constructor(private lightbox: Lightbox) {
    for (let i = 1; i <= 33; i++) {
      const src = `assets/gallery-images/${i}.jpeg`;
      this.images.push(src);
      this.album.push({
        src: src,
        caption: `ფოტო ${i}`,
        thumb: src
      });
    }
  }

  open(index: number): void {
    this.lightbox.open(this.album, index);
  }

  close(): void {
    this.lightbox.close();
  }
}
