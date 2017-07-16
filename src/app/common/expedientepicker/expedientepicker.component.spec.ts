import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpedientepickerComponent } from './expedientepicker.component';

describe('ExpedientepickerComponent', () => {
  let component: ExpedientepickerComponent;
  let fixture: ComponentFixture<ExpedientepickerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExpedientepickerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpedientepickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
