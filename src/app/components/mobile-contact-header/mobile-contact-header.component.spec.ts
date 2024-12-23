import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileContactHeaderComponent } from './mobile-contact-header.component';

describe('MobileContactHeaderComponent', () => {
  let component: MobileContactHeaderComponent;
  let fixture: ComponentFixture<MobileContactHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MobileContactHeaderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MobileContactHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
