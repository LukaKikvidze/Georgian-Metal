import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-gallery',
  standalone: false,
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent {
  activeTab: 'photo' | 'video' = 'photo';

  selectTab(tab: 'photo' | 'video') {
    this.activeTab = tab;
  }
  images: string[] = [];
  currentImageIndex: number = 0;
  showLightbox: boolean = false;

  constructor() {
    // 33 ფოტოს დინამიურად ჩატვირთვა
    for (let i = 1; i <= 33; i++) {
      this.images.push(`assets/gallery-images/${i}.jpeg`);
    }
  }

  // ლაითბოქსის გახსნა
  openLightbox(index: number): void {
    this.currentImageIndex = index;
    this.showLightbox = true;
    document.body.style.overflow = 'hidden'; // სქროლირების გათიშვა
  }

  // ლაითბოქსის დახურვა
  closeLightbox(): void {
    this.showLightbox = false;
    document.body.style.overflow = 'auto'; // სქროლირების ჩართვა
  }

  // შემდეგი ფოტო
  nextImage(): void {
    this.currentImageIndex = (this.currentImageIndex + 1) % this.images.length;
  }

  // წინა ფოტო
  prevImage(): void {
    this.currentImageIndex = (this.currentImageIndex - 1 + this.images.length) % this.images.length;
  }

  // კლავიატურის მართვა (არასავალდებულო)
  @HostListener('window:keydown', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {
    if (this.showLightbox) {
      if (event.key === 'ArrowRight') this.nextImage();
      if (event.key === 'ArrowLeft') this.prevImage();
      if (event.key === 'Escape') this.closeLightbox();
    }
  }
}
