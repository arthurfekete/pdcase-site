import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
import { HostListener } from '@angular/core';

import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { OtherHeaderComponent } from './components/other-header/other-header.component';
import { MobileHeaderComponent } from './components/mobile-header/mobile-header.component';
import { MobileAboutHeaderComponent } from './components/mobile-about-header/mobile-about-header.component';
import { MobileServicesHeaderComponent } from './components/mobile-services-header/mobile-services-header.component';
import { MobileCarreirasHeaderComponent } from './components/mobile-carreiras-header/mobile-carreiras-header.component';
import { MobileContactHeaderComponent } from './components/mobile-contact-header/mobile-contact-header.component';
import { AboutHeaderComponent } from './components/about-header/about-header.component';
import { ServicesHeaderComponent } from './components/services-header/services-header.component';
import { CarreirasHeaderComponent } from './components/carreiras-header/carreiras-header.component';
import { ContactHeaderComponent } from './components/contact-header/contact-header.component';
import { Session1Component } from './components/session-1/session-1.component';
import { Session2Component } from './components/session-2/session-2.component';
import { Session3Component } from './components/session-3/session-3.component';
import { Session4Component } from './components/session-4/session-4.component';
import { AboutComponent } from './pages/about/about.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    HeaderComponent,
    OtherHeaderComponent,
    Session1Component,
    FooterComponent,
    Session2Component,
    Session3Component,
    Session4Component,
    AboutComponent,
    CommonModule,
    AboutHeaderComponent,
    ServicesHeaderComponent,
    CarreirasHeaderComponent,
    ContactHeaderComponent,
    MobileHeaderComponent,
    MobileAboutHeaderComponent,
    MobileServicesHeaderComponent,
    MobileCarreirasHeaderComponent,
    MobileContactHeaderComponent,
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  // Título do site
  title = 'pdcase-site';

  // Variáveis booleanas para indicar qual página está ativa
  isMainPage = false;     // Indica se está na página principal
  isAboutPage = false;    // Indica se está na página "Sobre"
  isServicesPage = false; // Indica se está na página "Serviços"
  isCarreirasPage = false; // Indica se está na página "Carreiras"
  isContactPage = false;  // Indica se está na página "Contato"
  isMobilePage = false;   // Indica se o site está sendo visualizado em uma tela mobile

  // Injeção de dependência do serviço Router para monitorar navegação
  constructor(private router: Router) {}

  /**
   * Método chamado automaticamente ao inicializar o componente.
   * Configura a detecção de mudança na navegação e verifica se é tela mobile.
   */
  ngOnInit(): void {
    // Escuta os eventos de navegação do Router
    this.router.events
      .pipe(
        // Filtra apenas os eventos de finalização de navegação
        filter((event) => event instanceof NavigationEnd)
      )
      .subscribe(() => {
        // Obtém a URL atual
        const currentUrl = this.router.url;

        // Define as variáveis booleanas com base na URL atual
        this.isMainPage = currentUrl === '/'; // Página principal
        this.isAboutPage = currentUrl === '/about'; // Página "Sobre"
        this.isServicesPage = currentUrl === '/services'; // Página "Serviços"
        this.isCarreirasPage = currentUrl === '/carreiras'; // Página "Carreiras"
        this.isContactPage = currentUrl === '/contact'; // Página "Contato"
      });

    // Verifica se a tela atual é mobile
    this.checkIfMobile();
  }

  /**
   * Evento que monitora o redimensionamento da janela do navegador.
   * Chama a função para verificar se é uma tela mobile.
   */
  @HostListener('window:resize', [])
  onResize(): void {
    this.checkIfMobile();
  }

  /**
   * Função privada que atualiza a variável `isMobilePage`
   * com base na largura atual da janela.
   */
  private checkIfMobile(): void {
    // Define que é mobile se a largura da janela for menor que 999px
    this.isMobilePage = window.innerWidth < 999;
  }
}