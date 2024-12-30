import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvaliacaoDeRiscosComponent } from './avaliacao-de-riscos.component';

describe('AvaliacaoDeRiscosComponent', () => {
  let component: AvaliacaoDeRiscosComponent;
  let fixture: ComponentFixture<AvaliacaoDeRiscosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AvaliacaoDeRiscosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AvaliacaoDeRiscosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
