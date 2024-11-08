import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet, Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

//Componentes
import { HeaderComponent } from "./components/header/header.component";
import { FooterComponent } from './components/footer/footer.component';
import { Session1Component } from './components/session-1/session-1.component';
import { Session2Component } from './components/session-2/session-2.component';
import { Session3Component } from './components/session-3/session-3.component';
import { Session4Component } from './components/session-4/session-4.component';
import { AboutComponent } from './pages/about/about.component';
import { OtherHeaderComponent } from "./pages/other-header/other-header.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, Session1Component, FooterComponent, Session2Component, Session3Component, Session4Component, AboutComponent, OtherHeaderComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  isHomePage: boolean = false;

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(() => {
      this.isHomePage = this.router.url === '/'; // Verifique se está na página principal
    });
  }
}
