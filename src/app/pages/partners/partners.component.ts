import { Component } from '@angular/core';

@Component({
  selector: 'app-partner',
  standalone: false,
  templateUrl: './partners.component.html',
  styleUrls: ['./partners.component.css']
})
export class PartnerComponent {
    partners = [
      { name: 'GTM Group', logo: 'assets/partners/gtmgroup.png', website: 'https://gtmgroup.ge' },
      { name: 'Poladis sakhli', logo: 'assets/partners/steelhouse.png', website: 'https://steelhouse.ge' },
      { name: 'First Commodities DMCC', logo: 'assets/partners/DMCC.jpg', website: 'https://firstcommoditiesdmcc.com' },
      { name: 'Stemcor Group', logo: 'assets/partners/stemcor.png', website: 'https://stemcor.com' },
      { name: 'Steelco for Steel Trading', logo: 'assets/partners/stemcorft.png', website: 'http://www.steelcotrading.com/' },
      { name: 'Bank of Georgia', logo: 'assets/partners/BOG.jpg', website: 'https://bankofgeorgia.ge' },
      { name: 'Delta Steel', logo: 'assets/partners/deltasteel.jpg', website: 'https://deltasteel.ge' },
      { name: 'Georgian Railway', logo: 'assets/partners/GR.png', website: 'https://railway.ge' }
    ];
}
