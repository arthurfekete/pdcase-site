import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MicroCreditoComponent } from './micro-credito.component';

describe('MicroCreditoComponent', () => {
  let component: MicroCreditoComponent;
  let fixture: ComponentFixture<MicroCreditoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MicroCreditoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MicroCreditoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
