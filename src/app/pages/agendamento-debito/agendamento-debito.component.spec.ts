import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgendamentoDebitoComponent } from './agendamento-debito.component';

describe('AgendamentoDebitoComponent', () => {
  let component: AgendamentoDebitoComponent;
  let fixture: ComponentFixture<AgendamentoDebitoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AgendamentoDebitoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgendamentoDebitoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
