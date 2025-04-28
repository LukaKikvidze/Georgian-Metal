import { Component } from '@angular/core';

@Component({
  selector: 'app-partner',
  standalone: false,
  templateUrl: './partners.component.html',
  styleUrls: ['./partners.component.css']
})
export class PartnerComponent {
  partners = [
    { name: 'GTM Group', logo: 'assets/partners/gtm.png' },
    { name: 'Poladis sakhli', logo: 'assets/partners/poladis.png' },
    { name: 'First Commodities DMCC', logo: 'assets/partners/first-commodities.png' },
    { name: 'Stemcor Group', logo: 'assets/partners/stemcor.png' },
    { name: 'Steelco for Steel Trading', logo: 'assets/partners/steelco.png' },
    { name: 'Bank of Georgia', logo: 'assets/partners/bog.png' },
    { name: 'Delta Steel', logo: 'assets/partners/delta-steel.png' },
    { name: 'Georgian Railway', logo: 'assets/partners/georgian-railway.png' }
  ];
}
