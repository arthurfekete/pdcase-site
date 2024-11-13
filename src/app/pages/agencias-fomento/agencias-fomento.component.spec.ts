import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgenciasFomentoComponent } from './agencias-fomento.component';

describe('AgenciasFomentoComponent', () => {
  let component: AgenciasFomentoComponent;
  let fixture: ComponentFixture<AgenciasFomentoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AgenciasFomentoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgenciasFomentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
