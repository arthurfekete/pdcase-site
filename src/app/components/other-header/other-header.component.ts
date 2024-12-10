import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-other-header',
  standalone: true,
  imports: [],
  templateUrl: './other-header.component.html',
  styleUrl: './other-header.component.css'
})
export class OtherHeaderComponent {
  @HostListener('window:scroll', [])
  onWindowScroll() {
    const scrollTop = window.scrollY || document.documentElement.scrollTop;

    const logo = document.getElementById('logo') as HTMLImageElement; // Garantir que é um elemento <img>
    const header = document.getElementById('header');
    
    if (header) {
      if(scrollTop > 30) {
        header.style.backgroundColor = '#161D26';
        header.style.height = '96px';
        logo.src = '/logo-deitada.svg';
      } else {
        header.style.backgroundColor = 'transparent';
        logo.src = 'logo.svg';
      }
    }
  }
}
