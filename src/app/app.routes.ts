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
import { MercadoDigitalComponent } from './pages/mercado-digital/mercado-digital.component';
import { ControladoriaComponent } from './pages/controladoria/controladoria.component';
import { RelatorioIgualdadeSalarialComponent } from './pages/relatorio-igualdade-salarial/relatorio-igualdade-salarial.component';
import { AgenciasFomentoComponent } from './pages/agencias-fomento/agencias-fomento.component';
import { InformesLegaisComponent } from './pages/informes-legais/informes-legais.component';
import { FabricaSoftwareComponent } from './pages/fabrica-software/fabrica-software.component';
import { ConsultoriaComponent } from './pages/consultoria/consultoria.component';
import { OutsourcingComponent } from './pages/outsourcing/outsourcing.component';
import { IntegracaoComponent } from './pages/integracao/integracao.component';
import { SustentacaoDeSistemasComponent } from './pages/sustentacao-de-sistemas/sustentacao-de-sistemas.component';
import { PorteCobolComponent } from './pages/porte-cobol/porte-cobol.component';
import { MpsBrComponent } from './pages/mps-br/mps-br.component';

//Caminhos
export const routes: Routes = [
    { path: '', component: MainComponentComponent, }, 
    { path: 'about', component: AboutComponent, },
    { path: 'services', component: ServicesComponent, },
    { path: 'career', component: CareerComponent, },
    { path: 'contact', component: ContactComponent, },
    { path: 'core-bancario', component: CoreBancarioComponent, },
    { path: 'politica-de-privacidade', component: PoliticaDePrivacidadeComponent, },
    { path: 'portal-credito', component: PortalCreditoComponent, },
    { path: 'mercado-digital', component: MercadoDigitalComponent, },
    { path: 'controladoria', component: ControladoriaComponent, },
    { path: 'relatorio-igualdade-salarial', component: RelatorioIgualdadeSalarialComponent,},
    { path: 'agencias-fomento', component: AgenciasFomentoComponent,},
    { path: 'informes-legais', component: InformesLegaisComponent,},
    { path: 'fabrica-software', component: FabricaSoftwareComponent,},
    { path: 'consultoria', component: ConsultoriaComponent,},
    { path: 'outsourcing', component: OutsourcingComponent,},
    { path: 'integracao', component: IntegracaoComponent},
    { path: 'sustentacao-de-sistemas', component: SustentacaoDeSistemasComponent},
    { path: 'porte-cobol', component: PorteCobolComponent},
    { path: 'mps-br', component: MpsBrComponent},
];
