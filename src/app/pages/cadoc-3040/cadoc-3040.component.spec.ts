import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cadoc3040Component } from './cadoc-3040.component';

describe('Cadoc3040Component', () => {
  let component: Cadoc3040Component;
  let fixture: ComponentFixture<Cadoc3040Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Cadoc3040Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Cadoc3040Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
