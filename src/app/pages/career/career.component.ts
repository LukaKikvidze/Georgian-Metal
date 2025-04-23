import { Component } from '@angular/core';

@Component({
  selector: 'app-career',
  standalone: false,
  templateUrl: './career.component.html',
  styleUrls: ['./career.component.css']
})
export class CareerComponent {
  private openDropdowns: Set<string> = new Set();

  toggleDropdown(dropdownId: string) {
    if (this.openDropdowns.has(dropdownId)) {
      this.openDropdowns.delete(dropdownId);
    } else {
      this.openDropdowns.add(dropdownId);
    }
  }

  isDropdownOpen(dropdownId: string): boolean {
    return this.openDropdowns.has(dropdownId);
  }
}
