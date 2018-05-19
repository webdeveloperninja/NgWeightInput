import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { filter, takeUntil } from 'rxjs/Operators';
import { Subject } from 'rxjs/Subject';

import { Item } from '../../models/item';
import * as masks from '../text-masks';
import { markFormGroupTouched } from '../forms';

enum WeightCostFormKeys {
  weight = 'weight',
  cost = 'cost',
  name = 'name'
}

@Component({
  selector: 'app-ng-weight-input',
  templateUrl: './ng-weight-input.component.html',
  styleUrls: ['./ng-weight-input.component.scss']
})
export class NgWeightInputComponent implements OnInit {
  isDestroyed$ = new Subject();
  dollarMask = masks.dollarMask;
  unit = 'gram';

  itemsForm: FormGroup;

  @Output() itemsChange = new EventEmitter<Item[]>();

  constructor(private _formBuilder: FormBuilder) {
    this.createItemsForm();
  }

  private createItemsForm(): void {
    this.itemsForm = this._formBuilder.group({
      items: this._formBuilder.array([this.createItem()])
    });
  }

  private createItem(): FormGroup {
    return this._formBuilder.group({
      [WeightCostFormKeys.weight]: ['', Validators.required],
      [WeightCostFormKeys.cost]: ['', Validators.required],
      [WeightCostFormKeys.name]: ['', Validators.required],
      unit: [this.unit, Validators.required]
    });
  }

  ngOnInit() {
    this.itemsForm.valueChanges.pipe(takeUntil(this.isDestroyed$), filter(orderForm => orderForm.items)).subscribe(selected => {
      this.itemsChange.next(selected.items);
    });
  }

  get items(): FormArray {
    return this.itemsForm.get('items') as FormArray;
  }

  get weightPlaceholder(): string {
    return `Weight ${this.unit} (s)`;
  }

  getItemControl(index: number, controlName: WeightCostFormKeys): FormControl {
    const currentWeightCostControl = this.items.controls[index] as FormGroup;

    return currentWeightCostControl.controls[controlName] as FormControl;
  }

  addItem(index: number): void {
    if (this.isItemValid(index)) {
      this.items.push(this.createItem());
    } else {
      this.setItemAsTouched(index);
    }
  }

  removeItem(index: number): void {
    this.items.removeAt(index);
  }

  isItemValid(index: number): boolean {
    return this.items.controls[index].valid;
  }

  setItemAsTouched(index: number): void {
    return markFormGroupTouched(this.items.controls[index] as FormGroup);
  }

  private hasWeightRequiredError(index: number): boolean {
    const weightControl = this.getItemControl(index, WeightCostFormKeys.weight);

    return weightControl.touched && weightControl.errors && weightControl.errors.required;
  }

  private hasCostRequiredError(index: number): boolean {
    const costControl = this.getItemControl(index, WeightCostFormKeys.cost);

    return costControl.touched && costControl.errors && costControl.errors.required;
  }

  private hasNameRequiredError(index: number): boolean {
    const nameControl = this.getItemControl(index, WeightCostFormKeys.name);

    return nameControl.touched && nameControl.errors && nameControl.errors.required;
  }
}
