import {Component, HostListener, Input} from '@angular/core';

@Component({
  selector: 'app-mobile-contact-header',
  standalone: true,
  imports: [],
  templateUrl: './mobile-contact-header.component.html',
  styleUrl: './mobile-contact-header.component.css'
})
export class MobileContactHeaderComponent {
  ativado: boolean = false;
  
    animar(): void {
      this.ativado = !this.ativado; // para abrir e fechar o menu hamburguer
    }
  
    @Input()
    isMainPage: boolean =
        false;  // Recebe a variável isMainPage do componente pai
  
    @HostListener('window:scroll', [])
    onWindowScroll() {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
  
      const header = document.getElementById('header');
      const container = document.getElementById('container');
  
      const iconeMenu = document.querySelector('.icone-menu') as HTMLElement;
  
      if (header) {
        if (scrollTop > 3) {
          header.style.backgroundColor = '#161D26';
  
        } else {
          if (scrollTop > 30) {
            header.style.backgroundColor = '#161D26';
          } else {
            header.style.backgroundColor = 'transparent';
          }
        }
      }
    }
}
