import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgWeightSelectionComponent } from './ng-weight-selection.component';
import { ReactiveFormsModule, FormGroup, FormControl } from '@angular/forms';

describe('NgWeightSelectionComponent', () => {
  let component: NgWeightSelectionComponent;
  let fixture: ComponentFixture<NgWeightSelectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ReactiveFormsModule],
      declarations: [NgWeightSelectionComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgWeightSelectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('selected item', () => {
    let selectedItemEmit;

    const selectedItem = {
      weight: 3434,
      cost: 3443,
      name: 'name'
    };

    beforeEach(() => {
      selectedItemEmit = spyOn(component.selectedItemChange, 'emit');
      component.ngOnInit();
    });

    it('should not emit when selected item form control doesn not change', () => {
      expect(selectedItemEmit).not.toHaveBeenCalled();
    });

    it('should emit selected item when selected item form control changes', () => {
      component.weightSelectionForm.controls.selectedItem.setValue(selectedItem);

      expect(selectedItemEmit).toHaveBeenCalledWith(selectedItem);
    });
  });
});
