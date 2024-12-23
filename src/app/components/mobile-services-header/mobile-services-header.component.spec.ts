import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileServicesHeaderComponent } from './mobile-services-header.component';

describe('MobileServicesHeaderComponent', () => {
  let component: MobileServicesHeaderComponent;
  let fixture: ComponentFixture<MobileServicesHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MobileServicesHeaderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MobileServicesHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
