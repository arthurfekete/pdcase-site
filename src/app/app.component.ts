import { Component } from '@angular/core';
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
  imports: [RouterOutlet, HeaderComponent, Session1Component,FooterComponent, Session2Component, Session3Component, Session4Component, AboutComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'pdcase-site';
  
}
