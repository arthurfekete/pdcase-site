import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cadoc3050Component } from './cadoc-3050.component';

describe('Cadoc3050Component', () => {
  let component: Cadoc3050Component;
  let fixture: ComponentFixture<Cadoc3050Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Cadoc3050Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Cadoc3050Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
