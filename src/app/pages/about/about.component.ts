import { Component, HostListener, ElementRef, ViewChild, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: false,
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements AfterViewInit {
  imageInView = false;
  bgInView = false;

  @ViewChild('imageBox') imageBox!: ElementRef;
  @ViewChild('bgBox') bgBox!: ElementRef;

  ngAfterViewInit() {
    this.checkVisibility();
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.checkVisibility();
  }

  private checkVisibility() {
    const windowHeight = window.innerHeight || document.documentElement.clientHeight;

    if (!this.imageInView && this.imageBox) {
      const imageRect = this.imageBox.nativeElement.getBoundingClientRect();
      if (imageRect.top <= windowHeight - 100) {
        this.imageInView = true;
      }
    }

    if (!this.bgInView && this.bgBox) {
      const bgRect = this.bgBox.nativeElement.getBoundingClientRect();
      if (bgRect.top <= windowHeight - 100) {
        this.bgInView = true;
      }
    }
  }
}
