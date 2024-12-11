import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicesHeaderComponent } from './services-header.component';

describe('ServicesHeaderComponent', () => {
  let component: ServicesHeaderComponent;
  let fixture: ComponentFixture<ServicesHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ServicesHeaderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServicesHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
