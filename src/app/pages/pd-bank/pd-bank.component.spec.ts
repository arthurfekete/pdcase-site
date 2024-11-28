import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PdBankComponent } from './pd-bank.component';

describe('PdBankComponent', () => {
  let component: PdBankComponent;
  let fixture: ComponentFixture<PdBankComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PdBankComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PdBankComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
