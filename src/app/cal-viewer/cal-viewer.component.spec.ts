import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CalViewerComponent } from './cal-viewer.component';

describe('CalViewerComponent', () => {
  let component: CalViewerComponent;
  let fixture: ComponentFixture<CalViewerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalViewerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalViewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
