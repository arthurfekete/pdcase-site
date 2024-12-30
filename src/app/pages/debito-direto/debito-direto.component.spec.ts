import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DebitoDiretoComponent } from './debito-direto.component';

describe('DebitoDiretoComponent', () => {
  let component: DebitoDiretoComponent;
  let fixture: ComponentFixture<DebitoDiretoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DebitoDiretoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DebitoDiretoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
