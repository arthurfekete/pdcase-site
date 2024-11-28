import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DepositoAPrazoComponent } from './deposito-a-prazo.component';

describe('DepositoAPrazoComponent', () => {
  let component: DepositoAPrazoComponent;
  let fixture: ComponentFixture<DepositoAPrazoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DepositoAPrazoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DepositoAPrazoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
