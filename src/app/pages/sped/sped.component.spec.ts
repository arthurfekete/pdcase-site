import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpedComponent } from './sped.component';

describe('SpedComponent', () => {
  let component: SpedComponent;
  let fixture: ComponentFixture<SpedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SpedComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SpedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
