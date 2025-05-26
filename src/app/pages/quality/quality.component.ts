import { Component,  } from '@angular/core';
import { AfterViewInit } from '@angular/core';

interface QualityItem {
  icon: string;
  title: string;
  description: string;
}

@Component({
  selector: 'app-quality',
  standalone: false,
  templateUrl: './quality.component.html',
  styleUrls: ['./quality.component.css']
})
export class QualityComponent implements AfterViewInit {
  ngAfterViewInit(): void {
    const faqItems = [
      { titleId: 't1', contentId: 'c1', arrowId: 'arrow1' },
      { titleId: 't2', contentId: 'c2', arrowId: 'arrow2' },
      { titleId: 't3', contentId: 'c3', arrowId: 'arrow3' }
    ];

    let openId: string | null = null;

    faqItems.forEach(item => {
      const title = document.getElementById(item.titleId);
      const content = document.getElementById(item.contentId);
      const arrow = document.getElementById(item.arrowId);

      if (title && content && arrow) {
        title.addEventListener('click', () => {
          if (openId && openId !== item.contentId) {
            const openContent = document.getElementById(openId);
            const openArrow = document.getElementById('arrow' + openId.charAt(1));
            openContent?.classList.remove('active');
            openArrow?.classList.remove('open');
          }

          const isOpen = content.classList.contains('active');
          content.classList.toggle('active');
          arrow.classList.toggle('open');

          openId = isOpen ? null : item.contentId;
        });
      }
    });
  }
}
