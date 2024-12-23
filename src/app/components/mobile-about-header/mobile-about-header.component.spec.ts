import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileAboutHeaderComponent } from './mobile-about-header.component';

describe('MobileAboutHeaderComponent', () => {
  let component: MobileAboutHeaderComponent;
  let fixture: ComponentFixture<MobileAboutHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MobileAboutHeaderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MobileAboutHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
