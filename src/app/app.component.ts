// Imports
import {CommonModule} from '@angular/common';
import {Component, HostListener, OnInit} from '@angular/core';
import {RouterOutlet} from '@angular/router';

import {FooterComponent} from './components/footer/footer.component';
// Componentes
import {HeaderComponent} from './components/header/header.component';
import {Session1Component} from './components/session-1/session-1.component';
import {Session2Component} from './components/session-2/session-2.component';
import {Session3Component} from './components/session-3/session-3.component';
import {Session4Component} from './components/session-4/session-4.component';
import {AboutComponent} from './pages/about/about.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet, HeaderComponent, Session1Component, FooterComponent,
    Session2Component, Session3Component, Session4Component, AboutComponent,
    CommonModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  @HostListener('window:scroll', [])
  onWindowScroll() {
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    const viewportHeight = window.innerHeight;  // Altura visível da tela

    const nav = document.getElementById('nav');
    const logo = document.getElementsByClassName('logo') as HTMLCollectionOf<HTMLElement>;
    const logoWhite = document.getElementById('logo-white') as HTMLImageElement;
    const logoBlack = document.getElementById('logo-black') as HTMLImageElement;

    const sessao1 = document.getElementById('sessao1');
    const sessao2 = document.getElementById('sessao2');
    const sessao3 = document.getElementById('sessao3');
    const sessao4 = document.getElementById('sessao4');

    const barra = document.getElementById('barra');

    const quadrado1 = document.getElementById('quadrado1');
    const quadrado2 = document.getElementById('quadrado2');
    const quadrado3 = document.getElementById('quadrado3');
    const quadrado4 = document.getElementById('quadrado4');

    if (nav) {
      for (let i = 0; i < logo.length; i++) {
        logo[i].style.transition = 'opacity 0s ease, transform 0.2s ease'; 
      }
      const links = nav.querySelectorAll('a');
      if (scrollTop > viewportHeight) {
        nav.style.display = 'flex';
        nav.style.justifyContent = 'space-between';
        nav.style.padding = '2em 5em';
        links.forEach(link => {
          (link as HTMLElement).style.color =
              'black';  // Define a cor dos links (ex.: vermelho)
        });
        logoWhite?.classList.remove('active');
        logoWhite?.classList.add('logo-exit1');
        logoBlack?.classList.remove('logo-exit');
        logoBlack?.classList.add('active');
        if (sessao2 && scrollTop >= sessao2.offsetTop) {
          barra!.style.filter = 'none';
          quadrado1!.style.boxShadow = 'none';
          quadrado2!.style.boxShadow = '0 0 0 1px #000 inset';
          quadrado3!.style.boxShadow = 'none';
          quadrado4!.style.boxShadow = 'none';
        }
        if (sessao3 && scrollTop >= sessao3.offsetTop) {
          barra!.style.filter = 'none';
          quadrado1!.style.boxShadow = 'none';
          quadrado2!.style.boxShadow = 'none';
          quadrado3!.style.boxShadow = '0 0 0 1px #000 inset';
          quadrado4!.style.boxShadow = 'none';
        }
        if (sessao4 && scrollTop >= sessao4.offsetTop) {
          links.forEach(link => {
            (link as HTMLElement).style.color = 'var(--cor-fonte)';
          });
          logoBlack?.classList.remove('active');
          logoBlack?.classList.add('logo-exit');
          logoWhite?.classList.remove('logo-exit');
          logoWhite?.classList.add('active');
          barra!.style.filter = 'invert(1)';
          quadrado1!.style.boxShadow = 'none';
          quadrado2!.style.boxShadow = 'none';
          quadrado3!.style.boxShadow = 'none';
          quadrado4!.style.boxShadow = '0 0 0 1px #000 inset';
        }
      } else {
        if (sessao1 && scrollTop >= sessao1.offsetTop) {
          nav.style.display = 'flex';
          nav.style.justifyContent = 'space-between';
          nav.style.padding = '2em 5em';
          links.forEach(link => {
            (link as HTMLElement).style.color = 'var(--cor-fonte)';
          });
          logoBlack?.classList.remove('active');
          logoBlack?.classList.add('logo-exit');
          logoWhite?.classList.remove('logo-exit');
          logoWhite?.classList.add('active');
          barra!.style.filter = 'invert(1)';
          quadrado1!.style.boxShadow = '0 0 0 1px #000 inset';
          quadrado2!.style.boxShadow = 'none';
          quadrado3!.style.boxShadow = 'none';
          quadrado4!.style.boxShadow = 'none';
        }
      }
    }
  }

  ngOnInit() {
    this.updateLogoBasedOnScroll();
  }

  private updateLogoBasedOnScroll() {
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    const viewportHeight = window.innerHeight;
    const logo = document.getElementsByClassName('logo') as HTMLCollectionOf<HTMLElement>;

    const nav = document.getElementById('nav');
    const logoWhite = document.getElementById('logo-white') as HTMLImageElement;
    const logoBlack = document.getElementById('logo-black') as HTMLImageElement;

    if (nav) {
      for (let i = 0; i < logo.length; i++) {
        logo[i].style.transition = 'none'; // Remove a transição inicialmente
      }
      if (scrollTop > viewportHeight) {
        logo[0].style.transition = 'none';
        logo[0].style.transform = 'none'
        logoWhite?.classList.remove('active');
        logoBlack?.classList.add('active');
      } else {
        logoBlack?.classList.remove('active');
        logoWhite?.classList.add('active');
      }
    }
  }
}