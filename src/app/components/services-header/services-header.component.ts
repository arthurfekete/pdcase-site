import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-services-header',
  standalone: true,
  imports: [],
  templateUrl: './services-header.component.html',
  styleUrl: './services-header.component.css'
})
export class ServicesHeaderComponent {
  @HostListener('window:scroll', [])
  onWindowScroll() {
    const scrollTop = window.scrollY || document.documentElement.scrollTop;

    const logo = document.getElementById('logo') as HTMLImageElement; // Garantir que é um elemento <img>
    const header = document.getElementById('header');
    const links = document.getElementsByClassName('links') as HTMLCollectionOf<HTMLElement>;
    
    if (header) {
      if(scrollTop > 30) {
        for (let i = 0; i < links.length; i++) {
          links[i].style.marginTop = '-10px'; 
        }
        header.style.backgroundColor = '#161D26';
        header.style.height = '96px';
        logo.src = '/logo-deitada.svg';
        logo.style.width = '154px';
        logo.style.height = '48px';
      } else {
        for (let i = 0; i < links.length; i++) {
          links[i].style.marginTop = '-30px'; 
        }
        header.style.backgroundColor = 'transparent';
        logo.src = 'logo.svg';
        logo.style.width = '72px';
        logo.style.height = '72px';
      }
    }
  }
}
