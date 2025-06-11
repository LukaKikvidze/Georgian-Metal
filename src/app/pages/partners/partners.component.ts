import { Component, QueryList, ViewChildren, ElementRef, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-partner',
  standalone: false,
  templateUrl: './partners.component.html',
  styleUrls: ['./partners.component.css']
})
export class PartnerComponent implements AfterViewInit {
  partners = [
    { id: 1, name: 'ევროსტილი', img: 'assets/images/eurosteal.jpg', website: 'https://eurosteel.ge/ka' },
    { id: 2, name: 'ციტადელი', img: 'assets/images/aa.png', website: 'https://citadeli.com/ka' },
    { id: 3, name: 'ლეგია 2007', img: 'assets/images/legia.jpg', website: '#' },
    { id: 4, name: 'ჯი არ სი', img: 'assets/images/grc.png', website: 'https://grc.ge' },
    { id: 5, name: 'BK Construction', img: 'assets/images/constr.png', website: 'https://bkconstruction.ge' }
  ];



  @ViewChildren('partnerCard') partnerCards!: QueryList<ElementRef>;

  ngAfterViewInit() {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    this.partnerCards.forEach(card => {
      observer.observe(card.nativeElement);
    });
  }
}
