import { Component } from '@angular/core';

@Component({
  selector: 'app-quality',
  standalone: false,
  templateUrl: './quality.component.html',
  styleUrl: './quality.component.css'
})
export class QualityComponent {
  openedDropdown: string | null = null;

  toggleDropdown(id: string): void {
    this.openedDropdown = this.openedDropdown === id ? null : id;
  }

  isOpen(id: string): boolean {
    return this.openedDropdown === id;
  }

}
