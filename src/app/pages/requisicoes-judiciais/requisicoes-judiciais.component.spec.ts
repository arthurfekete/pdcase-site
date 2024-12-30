import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequisicoesJudiciaisComponent } from './requisicoes-judiciais.component';

describe('RequisicoesJudiciaisComponent', () => {
  let component: RequisicoesJudiciaisComponent;
  let fixture: ComponentFixture<RequisicoesJudiciaisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RequisicoesJudiciaisComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RequisicoesJudiciaisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
