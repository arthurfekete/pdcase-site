import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreditoDesenvolvimentoComponent } from './credito-desenvolvimento.component';

describe('CreditoDesenvolvimentoComponent', () => {
  let component: CreditoDesenvolvimentoComponent;
  let fixture: ComponentFixture<CreditoDesenvolvimentoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreditoDesenvolvimentoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreditoDesenvolvimentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
