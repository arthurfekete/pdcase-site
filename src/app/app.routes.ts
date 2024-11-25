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
import { ArrecadacaoComponent } from './pages/arrecadacao/arrecadacao.component';
import { CompensacaoEletronicaComponent } from './pages/compensacao-eletronica/compensacao-eletronica.component';
import { BeneficiarioInssComponent } from './pages/beneficiario-inss/beneficiario-inss.component';
import { DebitoDiretoComponent } from './pages/debito-direto/debito-direto.component';
import { CestaDeTarifasComponent } from './pages/cesta-de-tarifas/cesta-de-tarifas.component';
import { AgendamentoDebitoComponent } from './pages/agendamento-debito/agendamento-debito.component';
import { PagamentoEmpresasComponent } from './pages/pagamento-empresas/pagamento-empresas.component';
import { CobrancaBancariaComponent } from './pages/cobranca-bancaria/cobranca-bancaria.component';
import { InterFebrabanComponent } from './pages/inter-febraban/inter-febraban.component';
import { EstruturadoParceladoComponent } from './pages/estruturado-parcelado/estruturado-parcelado.component';
import { CreditoDiretoAoConsumidorComponent } from './pages/credito-direto-ao-consumidor/credito-direto-ao-consumidor.component';
import { AntecipacaoDeRecebiveisComponent } from './pages/antecipacao-de-recebiveis/antecipacao-de-recebiveis.component';
import { RotativoComponent } from './pages/rotativo/rotativo.component';
import { CreditoDesenvolvimentoComponent } from './pages/credito-desenvolvimento/credito-desenvolvimento.component';
import { ConsignacaoComponent } from './pages/consignacao/consignacao.component';
import { MicroCreditoComponent } from './pages/micro-credito/micro-credito.component';
import { GestaoDeCreditoComponent } from './pages/gestao-de-credito/gestao-de-credito.component';
import { CreditoWebComponent } from './pages/credito-web/credito-web.component';
import { GarantiasDeCreditoComponent } from './pages/garantias-de-credito/garantias-de-credito.component';
import { FundoGarantidorComponent } from './pages/fundo-garantidor/fundo-garantidor.component';
import { CessaoCreditoComponent } from './pages/cessao-credito/cessao-credito.component';
import { GestaoFundosComponent } from './pages/gestao-fundos/gestao-fundos.component';
import { InfoCarteiraComponent } from './pages/info-carteira/info-carteira.component';
import { RedeDeComprasComponent } from './pages/rede-de-compras/rede-de-compras.component';
import { RecuperacaoDeCreditoComponent } from './pages/recuperacao-de-credito/recuperacao-de-credito.component';

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
    { path: 'arrecadacao', component: ArrecadacaoComponent},
    { path: 'compensacao-eletronica', component: CompensacaoEletronicaComponent},
    { path: 'inter-febraban', component: InterFebrabanComponent},
    { path: 'beneficiario-inss', component: BeneficiarioInssComponent},
    { path: 'debito-direto', component: DebitoDiretoComponent},
    { path: 'cesta-de-tarifas', component: CestaDeTarifasComponent},
    { path: 'agendamento-debito', component: AgendamentoDebitoComponent},
    { path: 'pagamento-empresas', component: PagamentoEmpresasComponent},
    { path: 'cobranca-bancaria', component: CobrancaBancariaComponent},
    { path: 'estruturado-parcelado', component: EstruturadoParceladoComponent},
    { path: 'credito-direto-ao-consumidor', component: CreditoDiretoAoConsumidorComponent},
    { path: 'antecipacao-de-recebiveis', component: AntecipacaoDeRecebiveisComponent},
    { path: 'agendamento-debito', component: AgendamentoDebitoComponent, },
    { path: 'pagamento-empresas', component: PagamentoEmpresasComponent, },
    { path: 'cobranca-bancaria', component: CobrancaBancariaComponent, },
    { path: 'rotativo', component: RotativoComponent, },
    { path: 'micro-credito', component: MicroCreditoComponent, },
    { path: 'consignacao', component: ConsignacaoComponent, },
    { path: 'credito-desenvolvimento', component: CreditoDesenvolvimentoComponent, },
    { path: 'gestao-de-credito', component: GestaoDeCreditoComponent},
    { path: 'credito-web', component: CreditoWebComponent},
    { path: 'garantias-de-credito', component: GarantiasDeCreditoComponent},
    { path: 'fundo-garantidor', component: FundoGarantidorComponent, },
    { path: 'cessao-credito', component: CessaoCreditoComponent, },
    { path: 'gestao-fundos', component: GestaoFundosComponent, },
    { path: 'info-carteira', component: InfoCarteiraComponent, },
    { path: 'rede-de-compras', component: RedeDeComprasComponent, },
    { path: 'recuperacao-de-credito', component: RecuperacaoDeCreditoComponent, },
    ];
