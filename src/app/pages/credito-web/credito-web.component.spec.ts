import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreditoWebComponent } from './credito-web.component';

describe('CreditoWebComponent', () => {
  let component: CreditoWebComponent;
  let fixture: ComponentFixture<CreditoWebComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreditoWebComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreditoWebComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
