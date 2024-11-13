//Imports
import { Routes } from '@angular/router';
import { MainComponentComponent } from './components/maincomponent/maincomponent.component';
import { AboutComponent } from './pages/about/about.component';
import { ServicesComponent } from './pages/services/services.component';
import { CareerComponent } from './pages/career/career.component';
import { ContactComponent } from './pages/contact/contact.component';
import { CoreBancarioComponent } from './pages/core-bancario/core-bancario.component';
import { PoliticaDePrivacidadeComponent } from './pages/politica-de-privacidade/politica-de-privacidade.component';
import { PortalCreditoComponent } from './pages/portal-credito/portal-credito.component';
import { RelatorioIgualdadeSalarialComponent } from './pages/relatorio-igualdade-salarial/relatorio-igualdade-salarial.component';

//Caminhos
export const routes: Routes = [
    { path: '', component: MainComponentComponent }, 
    { path: 'about', component: AboutComponent, },
    { path: 'services', component: ServicesComponent, },
    { path: 'career', component: CareerComponent, },
    { path: 'contact', component: ContactComponent, },
    { path: 'core-bancario', component: CoreBancarioComponent, },
    {path: 'politica-de-privacidade', component: PoliticaDePrivacidadeComponent},
    { path: 'portal-credito', component: PortalCreditoComponent, },
    {path: 'relatorio-igualdade-salarial', component: RelatorioIgualdadeSalarialComponent},
];
