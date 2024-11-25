import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestaoDeCreditoComponent } from './gestao-de-credito.component';

describe('GestaoDeCreditoComponent', () => {
  let component: GestaoDeCreditoComponent;
  let fixture: ComponentFixture<GestaoDeCreditoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GestaoDeCreditoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GestaoDeCreditoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
