import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DchosDetDsvComponent } from './dchos-det-dsv.component';

describe('DchosDetDsvComponent', () => {
  let component: DchosDetDsvComponent;
  let fixture: ComponentFixture<DchosDetDsvComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DchosDetDsvComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DchosDetDsvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
