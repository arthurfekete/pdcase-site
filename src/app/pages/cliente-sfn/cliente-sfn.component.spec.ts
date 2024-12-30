import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClienteSfnComponent } from './cliente-sfn.component';

describe('ClienteSfnComponent', () => {
  let component: ClienteSfnComponent;
  let fixture: ComponentFixture<ClienteSfnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClienteSfnComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClienteSfnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
