import {Injectable} from '@angular/core';

@Injectable({providedIn: 'root'})
export class ScrollService {
  scrollTo(sessionId: string): void {
    const element = document.getElementById(sessionId);
    if (element) {
      element.scrollIntoView({behavior: 'smooth'});
    }
  }
}
