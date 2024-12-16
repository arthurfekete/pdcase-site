import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-mobile-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './mobile-header.component.html',
  styleUrl: './mobile-header.component.css'
})
export class MobileHeaderComponent {
  menuOpen = false;

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }
}
