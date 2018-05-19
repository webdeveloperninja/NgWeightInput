import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

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

  constructor(private readonly _formBuilder: FormBuilder) {
    this.weightSelectionForm = this._formBuilder.group({
      selectedItem: ['']
    });
  }

  ngOnInit() {
    this.weightSelectionForm.valueChanges.subscribe(selected => {
      this.selectedItemChange.emit(selected.selectedItem);
    });
  }
}
