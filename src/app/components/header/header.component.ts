import { Component, HostListener } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  standalone: false,
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  isScrolled = false;
  isMenuOpen = false;

  constructor(private translate: TranslateService) {
    const lang = localStorage.getItem('lang') || 'ka';
    this.translate.use(lang);
    this.translate.setDefaultLang(lang);  // საჭირო პარამეტრები ყველა კომპონენტისთვის
  }

  // ენების გადმორთვა
  switchLanguage(lang: string): void {
    this.translate.use(lang); // შეცვლის ენას
    localStorage.setItem('lang', lang);

    // პარამეტრები მთელს აპლიკაციაზე გავრცელდება
    this.translate.setDefaultLang(lang);
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isScrolled = window.scrollY > 10;
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  closeMenu() {
    this.isMenuOpen = false;
  }
}
