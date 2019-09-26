import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UndefinedTasksComponent } from './undefined-tasks.component';

describe('UndefinedTasksComponent', () => {
  let component: UndefinedTasksComponent;
  let fixture: ComponentFixture<UndefinedTasksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UndefinedTasksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UndefinedTasksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
