import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OutraPortalCreditoComponent } from './outra-portal-credito.component';

describe('OutraPortalCreditoComponent', () => {
  let component: OutraPortalCreditoComponent;
  let fixture: ComponentFixture<OutraPortalCreditoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OutraPortalCreditoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OutraPortalCreditoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
