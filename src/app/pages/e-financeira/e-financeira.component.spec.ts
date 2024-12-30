import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EFinanceiraComponent } from './e-financeira.component';

describe('EFinanceiraComponent', () => {
  let component: EFinanceiraComponent;
  let fixture: ComponentFixture<EFinanceiraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EFinanceiraComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EFinanceiraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
