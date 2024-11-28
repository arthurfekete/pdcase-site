import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DepositoJudicialComponent } from './deposito-judicial.component';

describe('DepositoJudicialComponent', () => {
  let component: DepositoJudicialComponent;
  let fixture: ComponentFixture<DepositoJudicialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DepositoJudicialComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DepositoJudicialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
