import { Component } from '@angular/core';
import { Session1Component } from '../session-1/session-1.component';
import { Session2Component } from '../session-2/session-2.component';
import { Session3Component } from '../session-3/session-3.component';
import { Session4Component } from '../session-4/session-4.component';

@Component({
  selector: 'app-main-component',
  standalone: true,
  imports: [Session1Component, Session2Component, Session3Component, Session4Component],
  templateUrl: './maincomponent.component.html',
  styleUrl: './maincomponent.component.css'
})
export class MainComponentComponent {

}