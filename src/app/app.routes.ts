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
import { ContratosEmPrejuizosComponent } from './pages/contratos-em-prejuizos/contratos-em-prejuizos.component';
import { AnaliseEAtendimentoComponent } from './pages/analise-e-atendimento/analise-e-atendimento.component';
import { CadastroPessoasComponent } from './pages/cadastro-pessoas/cadastro-pessoas.component';
import { GestaoTributariaComponent } from './pages/gestao-tributaria/gestao-tributaria.component';
import { CobrancaDeCreditoComponent } from './pages/cobranca-de-credito/cobranca-de-credito.component';
import { GestaoContabilComponent } from './pages/gestao-contabil/gestao-contabil.component';
import { AvaliacaoDeRiscosComponent } from './pages/avaliacao-de-riscos/avaliacao-de-riscos.component';
import { CentralDeRiscoComponent } from './pages/central-de-risco/central-de-risco.component';
import { SpedComponent } from './pages/sped/sped.component';
import { GerenciadorFinanceiroComponent } from './pages/gerenciador-financeiro/gerenciador-financeiro.component';
import { MobileComponent } from './pages/mobile/mobile.component';
import { MensagensSmsComponent } from './pages/mensagens-sms/mensagens-sms.component';
import { ControleDeAtivoComponent } from './pages/controle-de-ativo/controle-de-ativo.component';
import { RequisicoesJudiciaisComponent } from './pages/requisicoes-judiciais/requisicoes-judiciais.component';
import { Cadoc3040Component } from './pages/cadoc-3040/cadoc-3040.component';
import { Cadoc3050Component } from './pages/cadoc-3050/cadoc-3050.component';
import { CadastroPositivoComponent } from './pages/cadastro-positivo/cadastro-positivo.component';
import { EFinanceiraComponent } from './pages/e-financeira/e-financeira.component';
import { CentralDeRiscoBacenComponent } from './pages/central-de-risco-bacen/central-de-risco-bacen.component';

//Caminhos
export const routes: Routes = [
    { path: '', component: MainComponentComponent, }, 

    //Páginas secúndarias
    { path: 'about', component: AboutComponent, },
    { path: 'services', component: ServicesComponent, },
    { path: 'career', component: CareerComponent, },
    { path: 'contact', component: ContactComponent, },

    //Páginas rodapé
    { path: 'politica-de-privacidade', component: PoliticaDePrivacidadeComponent, },
    { path: 'relatorio-igualdade-salarial', component: RelatorioIgualdadeSalarialComponent,},

    //Páginas serviços
    { path: 'core-bancario', component: CoreBancarioComponent, },
    { path: 'portal-credito', component: PortalCreditoComponent, },
    { path: 'mercado-digital', component: MercadoDigitalComponent, },
    { path: 'controladoria', component: ControladoriaComponent, },
    { path: 'agencias-fomento', component: AgenciasFomentoComponent,},
    { path: 'informes-legais', component: InformesLegaisComponent,},
    { path: 'fabrica-software', component: FabricaSoftwareComponent,},
    { path: 'consultoria', component: ConsultoriaComponent,},
    { path: 'outsourcing', component: OutsourcingComponent,},
    { path: 'integracao', component: IntegracaoComponent},
    { path: 'sustentacao-de-sistemas', component: SustentacaoDeSistemasComponent},
    { path: 'porte-cobol', component: PorteCobolComponent},

    //Páginas core bancário
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
    { path: 'agendamento-debito', component: AgendamentoDebitoComponent, },
    { path: 'pagamento-empresas', component: PagamentoEmpresasComponent, },
    { path: 'cobranca-bancaria', component: CobrancaBancariaComponent, },

    //Portal de crédito
    { path: 'rotativo', component: RotativoComponent, },
    { path: 'estruturado-parcelado', component: EstruturadoParceladoComponent},
    { path: 'micro-credito', component: MicroCreditoComponent, },
    { path: 'consignacao', component: ConsignacaoComponent, },
    { path: 'credito-direto-ao-consumidor', component: CreditoDiretoAoConsumidorComponent},
    { path: 'credito-desenvolvimento', component: CreditoDesenvolvimentoComponent, },
    { path: 'antecipacao-de-recebiveis', component: AntecipacaoDeRecebiveisComponent},
    { path: 'gestao-de-credito', component: GestaoDeCreditoComponent},
    { path: 'rede-de-compras', component: RedeDeComprasComponent, },
    { path: 'fundo-garantidor', component: FundoGarantidorComponent, },
    { path: 'recuperacao-de-credito', component: RecuperacaoDeCreditoComponent, },
    { path: 'cessao-credito', component: CessaoCreditoComponent, },
    { path: 'gestao-fundos', component: GestaoFundosComponent, },
    { path: 'credito-web', component: CreditoWebComponent},
    { path: 'garantias-de-credito', component: GarantiasDeCreditoComponent},
    { path: 'info-carteira', component: InfoCarteiraComponent, },
    { path: 'contratos-em-prejuizos', component: ContratosEmPrejuizosComponent, },

    //Agências de fomento
    { path: 'cadastro-pessoas', component: CadastroPessoasComponent, },
    { path: 'cobranca-de-credito', component: CobrancaDeCreditoComponent, },
    { path: 'analise-e-atendimento', component: AnaliseEAtendimentoComponent, },
    { path: 'gestao-contabil', component: GestaoContabilComponent, },
    { path: 'gestao-tributaria', component: GestaoTributariaComponent, },
    { path: 'avaliacao-de-riscos', component: AvaliacaoDeRiscosComponent, },
    { path: 'central-de-risco', component: CentralDeRiscoComponent, },
    { path: 'sped', component: SpedComponent},

    //Mercado digital
    { path: 'gerenciador-financeiro', component: GerenciadorFinanceiroComponent, },
    { path: 'mobile', component: MobileComponent, },
    { path: 'mensagens-sms', component: MensagensSmsComponent, },
    
    //Controladoria
    { path: 'controladoria', component: ControladoriaComponent, },
    { path: 'controle-de-ativo', component: ControleDeAtivoComponent, },

    //Informes Legais
    { path: 'requisicoes-judiciais', component: RequisicoesJudiciaisComponent, },
    { path: 'cadoc-3040', component: Cadoc3040Component, },
    { path: 'cadoc-3050', component: Cadoc3050Component, },
    { path: 'cadastro-positivo', component: CadastroPositivoComponent, },
    { path: 'e-financeira', component: EFinanceiraComponent, },
    { path: 'central-de-risco-bacen', component: CentralDeRiscoBacenComponent, },
    ];
