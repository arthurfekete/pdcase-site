//Imports
import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

//Componentes
import { HeaderComponent } from "./components/header/header.component";
import { FooterComponent } from './components/footer/footer.component';
import { Session1Component } from './components/session-1/session-1.component';
import { Session2Component } from './components/session-2/session-2.component';
import { Session3Component } from './components/session-3/session-3.component';
import { Session4Component } from './components/session-4/session-4.component';
import { AboutComponent } from './pages/about/about.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, Session1Component, FooterComponent, Session2Component, Session3Component, Session4Component, AboutComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  @HostListener('window:scroll', [])
  onWindowScroll() {
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    const viewportHeight = window.innerHeight; // Altura visível da tela
    
    const nav = document.getElementById('nav');
    const logo = document.getElementById('logo') as HTMLImageElement;

    const session4 = document.getElementById('session4');

    if (nav) {
      const links = nav.querySelectorAll('a');
      if (scrollTop > viewportHeight) {
        nav.style.display = 'flex';
        nav.style.justifyContent = 'space-between';
        nav.style.padding = '2em 5em';
        links.forEach(link => {
          (link as HTMLElement).style.color = 'black'; // Define a cor dos links (ex.: vermelho)
        });
        if (logo) {
          logo.src = '/pd-preto.svg';
        }
        if(session4 &&  scrollTop >= session4.offsetTop) {
          links.forEach(link => {
            (link as HTMLElement).style.color = 'var(--cor-fonte)'; 
          });
          if (logo) {
          logo.src = '/logo.svg';
          }
        }
      } else {
        nav.style.display = 'flex';
        nav.style.justifyContent = 'space-between';
        nav.style.padding = '2em 5em';
        links.forEach(link => {
          (link as HTMLElement).style.color = 'var(--cor-fonte)'; 
        });
        if (logo) {
          logo.src = '/logo.svg';
        }
      }
    }
  }
}