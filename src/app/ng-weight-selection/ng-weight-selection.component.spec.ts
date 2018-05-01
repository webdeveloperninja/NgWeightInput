import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgWeightSelectionComponent } from './ng-weight-selection.component';

describe('NgWeightSelectionComponent', () => {
  let component: NgWeightSelectionComponent;
  let fixture: ComponentFixture<NgWeightSelectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgWeightSelectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgWeightSelectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
