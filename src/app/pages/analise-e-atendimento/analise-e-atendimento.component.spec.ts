import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnaliseEAtendimentoComponent } from './analise-e-atendimento.component';

describe('AnaliseEAtendimentoComponent', () => {
  let component: AnaliseEAtendimentoComponent;
  let fixture: ComponentFixture<AnaliseEAtendimentoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AnaliseEAtendimentoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnaliseEAtendimentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
