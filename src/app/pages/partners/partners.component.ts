import { Component, QueryList, ViewChildren, ElementRef, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-partner',
  standalone: false,
  templateUrl: './partners.component.html',
  styleUrls: ['./partners.component.css']
})
export class PartnerComponent implements AfterViewInit {
  partners = [
    { name: 'GTM Group', img: 'assets/partners/GTM.jpg' },
    { name: 'Poladis sakhli', img: 'assets/partners/steelhouse.png' },
    { name: 'First Commodities DMCC', img: 'assets/partners/DMCC.jpg' },
    { name: 'Stemcor Group', img: 'assets/partners/stemcor.png' },
    { name: 'Steelco for Steel Trading', img: 'assets/partners/stemcorft.png' },
    { name: 'Bank of Georgia', img: 'assets/partners/BOG.jpg' },
    { name: 'Delta Steel', img: 'assets/partners/deltasteel.jpg' },
    { name: 'Georgian Railway', img: 'assets/partners/GR.png' }
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
