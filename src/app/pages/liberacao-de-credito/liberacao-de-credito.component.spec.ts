import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LiberacaoDeCreditoComponent } from './liberacao-de-credito.component';

describe('LiberacaoDeCreditoComponent', () => {
  let component: LiberacaoDeCreditoComponent;
  let fixture: ComponentFixture<LiberacaoDeCreditoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LiberacaoDeCreditoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LiberacaoDeCreditoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
