import {CommonModule} from '@angular/common';
import {Component, HostListener, Input} from '@angular/core';

import {AppComponent} from '../../app.component';

@Component({
  selector: 'app-mobile-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './mobile-header.component.html',
  styleUrl: './mobile-header.component.css'
})
export class MobileHeaderComponent {
  @Input()
  isMainPage: boolean =
      false;  // Recebe a variável isMainPage do componente pai

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const scrollTop = window.scrollY || document.documentElement.scrollTop;

    const header = document.getElementById('header');
    const mobileNav = document.getElementById('mobile-nav');
    const navElement = document.querySelector('.nav') as HTMLDivElement | null;

    const iconeMenu = document.querySelector('.icone-menu') as HTMLElement;
    if (header) {
      if (scrollTop > 3) {
        header.style.backgroundColor = '#161D26';
        header.style.height = '60px';
        mobileNav!.style.height = '65px';
        mobileNav!.style.marginTop = '0px';
        if (this.isMainPage) {
          mobileNav!.style.marginTop = '5px';
          iconeMenu.style.marginTop = '-18px';
        }
      } else {
        if (scrollTop > 30) {
          header.style.backgroundColor = '#161D26';
          header.style.height = '60px';
          mobileNav!.style.height = '65px';
          mobileNav!.style.marginTop = '5px';
        } else {
          header.style.backgroundColor = 'transparent';
          mobileNav!.style.padding = '20px';
          mobileNav!.style.margin = 'auto';
          mobileNav!.style.height = '65px';
        }
      }
    }
  }
}
