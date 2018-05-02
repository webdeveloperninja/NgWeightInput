import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormArray } from '@angular/forms';

@Component({
  selector: 'app-ng-weight-selection',
  templateUrl: './ng-weight-selection.component.html',
  styleUrls: ['./ng-weight-selection.component.scss']
})
export class NgWeightSelectionComponent implements OnInit {
  @Input() formGroup: FormGroup;

  constructor() { }

  ngOnInit() {
  }

  get items(): FormArray {
    return this.formGroup.get('items') as FormArray;
  }

}
