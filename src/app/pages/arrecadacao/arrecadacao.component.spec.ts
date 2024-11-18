import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArrecadacaoComponent } from './arrecadacao.component';

describe('ArrecadacaoComponent', () => {
  let component: ArrecadacaoComponent;
  let fixture: ComponentFixture<ArrecadacaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ArrecadacaoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArrecadacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
