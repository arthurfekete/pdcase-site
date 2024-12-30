import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutorizacaoDeInformacoesComponent } from './autorizacao-de-informacoes.component';

describe('AutorizacaoDeInformacoesComponent', () => {
  let component: AutorizacaoDeInformacoesComponent;
  let fixture: ComponentFixture<AutorizacaoDeInformacoesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AutorizacaoDeInformacoesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AutorizacaoDeInformacoesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
