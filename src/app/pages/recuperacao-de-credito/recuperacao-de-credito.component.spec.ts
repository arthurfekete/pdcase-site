import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecuperacaoDeCreditoComponent } from './recuperacao-de-credito.component';

describe('RecuperacaoDeCreditoComponent', () => {
  let component: RecuperacaoDeCreditoComponent;
  let fixture: ComponentFixture<RecuperacaoDeCreditoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RecuperacaoDeCreditoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecuperacaoDeCreditoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
