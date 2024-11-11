import { Component } from '@angular/core';
import { CoreBancarioComponent } from '../../pages/core-bancario/core-bancario.component';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CoreBancarioComponent],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {

}