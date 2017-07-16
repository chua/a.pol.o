import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DchosAlcoholComponent } from './dchos-alcohol.component';

describe('DchosAlcoholComponent', () => {
  let component: DchosAlcoholComponent;
  let fixture: ComponentFixture<DchosAlcoholComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DchosAlcoholComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DchosAlcoholComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
