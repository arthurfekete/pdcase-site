import { Component } from '@angular/core';
import { ScrollService } from '../../scroll.service';
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})

export class HeaderComponent {
  constructor(private scrollService: ScrollService) {}

  scrollTo(sessionId: string): void {
    this.scrollService.scrollTo(sessionId);
  }
}
