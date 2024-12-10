import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OtherHeaderComponent } from './other-header.component';

describe('OtherHeaderComponent', () => {
  let component: OtherHeaderComponent;
  let fixture: ComponentFixture<OtherHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OtherHeaderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OtherHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
