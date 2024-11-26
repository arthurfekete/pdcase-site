import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestaoContabilComponent } from './gestao-contabil.component';

describe('GestaoContabilComponent', () => {
  let component: GestaoContabilComponent;
  let fixture: ComponentFixture<GestaoContabilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GestaoContabilComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GestaoContabilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
