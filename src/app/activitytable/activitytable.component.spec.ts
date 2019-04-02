import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivitytableComponent } from './activitytable.component';

describe('ActivitytableComponent', () => {
  let component: ActivitytableComponent;
  let fixture: ComponentFixture<ActivitytableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActivitytableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActivitytableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
