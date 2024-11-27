import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GerenciadorFinanceiroComponent } from './gerenciador-financeiro.component';

describe('GerenciadorFinanceiroComponent', () => {
  let component: GerenciadorFinanceiroComponent;
  let fixture: ComponentFixture<GerenciadorFinanceiroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GerenciadorFinanceiroComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GerenciadorFinanceiroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
