import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortalCreditoComponent } from './portal-credito.component';

describe('PortalCreditoComponent', () => {
  let component: PortalCreditoComponent;
  let fixture: ComponentFixture<PortalCreditoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PortalCreditoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PortalCreditoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
