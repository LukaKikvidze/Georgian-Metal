import { Component } from '@angular/core';
import { HostListener } from '@angular/core';

@Component({
  selector: 'app-photo',
  standalone: false,
  templateUrl: './photo.component.html',
  styleUrls: ['./photo.component.css']
})
export class PhotoComponent {
  images: string[] = [
    'assets/gallery-images/1.jpeg',
    'assets/gallery-images/2.jpeg',
    'assets/gallery-images/3.jpeg',
    'assets/gallery-images/4.jpeg',
    'assets/gallery-images/5.jpeg',
    'assets/gallery-images/6.jpeg',
    'assets/gallery-images/7.jpeg',
    'assets/gallery-images/8.jpeg',
    'assets/gallery-images/9.jpeg',
    'assets/gallery-images/10.jpeg',
    'assets/gallery-images/11.jpeg',
    'assets/gallery-images/12.jpeg',
    'assets/gallery-images/13.jpeg',
    'assets/gallery-images/14.jpeg',
    'assets/gallery-images/15.jpeg',
    'assets/gallery-images/16.jpeg',
    'assets/gallery-images/17.jpeg',
    'assets/gallery-images/18.jpeg',
    'assets/gallery-images/19.jpeg',
    'assets/gallery-images/20.jpeg',
    'assets/gallery-images/21.jpeg',
    'assets/gallery-images/22.jpeg',
    'assets/gallery-images/23.jpeg',
    'assets/gallery-images/24.jpeg',
    'assets/gallery-images/25.jpeg',
    'assets/gallery-images/26.jpeg',
    'assets/gallery-images/27.jpeg',
    'assets/gallery-images/28.jpeg',
    'assets/gallery-images/29.jpeg',
    'assets/gallery-images/30.jpeg',
    'assets/gallery-images/31.jpeg',
    'assets/gallery-images/32.jpeg',
    'assets/gallery-images/33.jpeg'
  ];


  selectedImage: string | null = null;
  currentIndex = 0;

  openImage(image: string): void {
    this.selectedImage = image;
    this.currentIndex = this.images.indexOf(image);
    document.body.style.overflow = 'hidden';
  }

  closeImage(): void {
    this.selectedImage = null;
    document.body.style.overflow = 'auto';
  }

  nextImage(event: Event): void {
    event.stopPropagation();
    this.currentIndex = (this.currentIndex + 1) % this.images.length;
    this.selectedImage = this.images[this.currentIndex];
  }

  prevImage(event: Event): void {
    event.stopPropagation();
    this.currentIndex = (this.currentIndex - 1 + this.images.length) % this.images.length;
    this.selectedImage = this.images[this.currentIndex];
  }

  // კლავიატურის მართვა
  @HostListener('window:keydown', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {
    if (this.selectedImage) {
      if (event.key === 'Escape') {
        this.closeImage();
      } else if (event.key === 'ArrowRight') {
        this.nextImage(event);
      } else if (event.key === 'ArrowLeft') {
        this.prevImage(event);
      }
    }
  }
}
