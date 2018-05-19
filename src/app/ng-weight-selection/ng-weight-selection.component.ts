import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormArray, FormBuilder } from '@angular/forms';
import { Item } from '../../models/item';

@Component({
  selector: 'app-ng-weight-selection',
  templateUrl: './ng-weight-selection.component.html',
  styleUrls: ['./ng-weight-selection.component.scss']
})
export class NgWeightSelectionComponent implements OnInit {
  @Input() items: Item[];

  @Output() selectedItemChange = new EventEmitter<Item>();

  weightSelectionForm: FormGroup;

  constructor(private readonly _fb: FormBuilder) {
    this.weightSelectionForm = this._fb.group({
      selectedItem: ['']
    });
  }

  ngOnInit() {
    this.weightSelectionForm.valueChanges.subscribe(selected => {
      this.selectedItemChange.emit(selected.selectedItem);
    });
  }
}
