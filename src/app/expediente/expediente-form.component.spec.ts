import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpedienteFormComponent } from './expediente-form.component';

describe('ExpedienteFormComponent', () => {
  let component: ExpedienteFormComponent;
  let fixture: ComponentFixture<ExpedienteFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExpedienteFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpedienteFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
