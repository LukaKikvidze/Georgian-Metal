import { Component } from '@angular/core';

@Component({
  selector: 'app-career',
  standalone: false,
  templateUrl: './career.component.html',
  styleUrls: ['./career.component.css']
})
export class CareerComponent {
  openedDropdown: string | null = null;

  toggleDropdown(id: string): void {
    this.openedDropdown = this.openedDropdown === id ? null : id;
  }

  isDropdownOpen(id: string): boolean {
    return this.openedDropdown === id;
  }
}
