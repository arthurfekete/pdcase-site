import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileCarreirasHeaderComponent } from './mobile-carreiras-header.component';

describe('MobileCarreirasHeaderComponent', () => {
  let component: MobileCarreirasHeaderComponent;
  let fixture: ComponentFixture<MobileCarreirasHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MobileCarreirasHeaderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MobileCarreirasHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
