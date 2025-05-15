import { Component } from '@angular/core';

@Component({
  selector: 'app-career',
  standalone: false,
  templateUrl: './career.component.html',
  styleUrls: ['./career.component.css']
})
export class CareerComponent {
  private openDropdowns: Set<string> = new Set();  // Store open dropdowns

  // Toggle dropdown state
  toggleDropdown(dropdownId: string): void {
    if (this.openDropdowns.has(dropdownId)) {
      this.openDropdowns.delete(dropdownId);  // Close dropdown
    } else {
      this.openDropdowns.add(dropdownId);  // Open dropdown
    }
  }

  // Check if a dropdown is open
  isDropdownOpen(dropdownId: string): boolean {
    return this.openDropdowns.has(dropdownId);
  }
}
