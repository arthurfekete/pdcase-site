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
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'pdcase-site';

  isMainPage = false;
  isAboutPage = false;
  isServicesPage = false;
  isCarreirasPage = false;
  isContactPage = false;
  isMobilePage = false;

  constructor(private router: Router) {}

  ngOnInit(): void {
    // Detecta mudanças na navegação para alterar os cabeçalhos
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe(() => {
        const currentUrl = this.router.url;

        // Atualiza as variáveis booleanas conforme a página
        this.isMainPage = currentUrl === '/';
        this.isAboutPage = currentUrl === '/about';
        this.isServicesPage = currentUrl === '/services';
        this.isCarreirasPage = currentUrl === '/carreiras';
        this.isContactPage = currentUrl === '/contact';
      });

      this.checkIfMobile();
  }

  @HostListener('window:resize', [])
  onResize(): void {
    this.checkIfMobile();
  }

  private checkIfMobile(): void {
    this.isMobilePage = window.innerWidth < 999;
  }

  
}
