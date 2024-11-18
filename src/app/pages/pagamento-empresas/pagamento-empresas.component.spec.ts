import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagamentoEmpresasComponent } from './pagamento-empresas.component';

describe('PagamentoEmpresasComponent', () => {
  let component: PagamentoEmpresasComponent;
  let fixture: ComponentFixture<PagamentoEmpresasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PagamentoEmpresasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PagamentoEmpresasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
