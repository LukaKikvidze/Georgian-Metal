import { Component } from '@angular/core';

@Component({
  selector: 'app-photo',
  standalone: false,
  templateUrl: './photo.component.html',
  styleUrls: ['./photo.component.css']
})
export class PhotoComponent {
  images: string[] = [];
  currentImageIndex = 0;
  showLightbox = false;

  constructor() {
    for (let i = 1; i <= 33; i++) {
      this.images.push(`assets/gallery-images/${i}.jpeg`);
    }
  }

  openLightbox(index: number) {
    this.currentImageIndex = index;
    this.showLightbox = true;
    document.body.style.overflow = 'hidden';
  }

  closeLightbox() {
    this.showLightbox = false;
    document.body.style.overflow = 'auto';
  }

  nextImage() {
    this.currentImageIndex = (this.currentImageIndex + 1) % this.images.length;
  }

  prevImage() {
    this.currentImageIndex = (this.currentImageIndex - 1 + this.images.length) % this.images.length;
  }
}
