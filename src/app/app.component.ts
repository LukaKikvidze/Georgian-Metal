import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  standalone: false,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private translate: TranslateService) {}

  ngOnInit(): void {
    const lang = localStorage.getItem('lang') || 'ka'; // საწყისი ენა
    this.translate.use(lang); // ენას აირჩევს
    this.translate.setDefaultLang(lang); // ავტომატურად დაფიქსირდება
  }
}
