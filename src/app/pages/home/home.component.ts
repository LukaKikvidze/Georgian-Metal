import { Component, ElementRef, Renderer2, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  constructor(
    private el: ElementRef,
    private renderer: Renderer2,
    private router: Router
  ) {}

  ngOnInit(): void {
    // Scroll to partners if URL is /partners
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe((event: NavigationEnd) => {
      if (event.urlAfterRedirects === '/partners') {
        // small timeout to ensure view is rendered
        setTimeout(() => {
          const partnersSection = this.el.nativeElement.querySelector('app-partners');
          if (partnersSection) {
            partnersSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }
        }, 200);
      }
    });
  }

  ngAfterViewInit(): void {
    // Slide-in animation observer
    const images = this.el.nativeElement.querySelectorAll('.slide-in');
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          this.renderer.addClass(entry.target, 'visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });
    images.forEach((img: Element) => observer.observe(img));
  }
}
