import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CessaoCreditoComponent } from './cessao-credito.component';

describe('CessaoCreditoComponent', () => {
  let component: CessaoCreditoComponent;
  let fixture: ComponentFixture<CessaoCreditoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CessaoCreditoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CessaoCreditoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
