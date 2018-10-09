import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectdboxComponent } from './projectdbox.component';

describe('ProjectdboxComponent', () => {
  let component: ProjectdboxComponent;
  let fixture: ComponentFixture<ProjectdboxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectdboxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectdboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
