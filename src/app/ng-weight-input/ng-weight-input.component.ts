import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormArray, Validators, FormControl } from '@angular/forms';
import * as masks from '../text-masks';

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
export class NgWeightInputComponent {
  dollarMask = masks.dollarMask;
  unit = 'gram';
  orderForm: FormGroup;
  weightCostInput: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.createOrderForm();
  }

  private createOrderForm(): void {
    this.orderForm = this.formBuilder.group({
      items: this.formBuilder.array([this.createWeightCostForm()])
    });
  }

  private createWeightCostForm(): FormGroup {
    return this.formBuilder.group({
      [WeightCostFormKeys.weight]: ['', Validators.required],
      [WeightCostFormKeys.cost]: ['', Validators.required],
      [WeightCostFormKeys.name]: ['', Validators.required]
    });
  }

  private createItem(): FormGroup {
    return this.formBuilder.group({
      [WeightCostFormKeys.weight]: ['', Validators.required],
      [WeightCostFormKeys.cost]: ['', Validators.required],
      [WeightCostFormKeys.name]: ['', Validators.required]
    });
  }

  get items(): FormArray {
    return this.orderForm.get('items') as FormArray;
  }

  get weightPlaceholder(): string {
    return `Weight ${this.unit}s`;
  }

  hasWeightRequiredError(index: number): boolean {
    const weightControl = this.getItemControl(index, WeightCostFormKeys.weight);

    return weightControl.touched && weightControl.errors.required;
  }

  hasCostRequiredError(index: number): boolean {
    const costControl = this.getItemControl(index, WeightCostFormKeys.cost);

    return costControl.touched && costControl.errors.required;
  }

  hasNameRequiredError(index: number): boolean {
    const nameControl = this.getItemControl(index, WeightCostFormKeys.name);

    return nameControl.touched && nameControl.errors.required;
  }

  getItemControl(index: number, controlName: WeightCostFormKeys): FormControl {
    const currentWeightCostControl = this.items.controls[index] as FormGroup;
    return currentWeightCostControl.controls[controlName] as FormControl;
  }

  addSkew(index: number): void {
    if (this.isItemValid(index)) {
      this.items.push(this.createItem());
    } else {
      this.setItemAsDirty(index);
      this.setItemAsTouched(index);
    }
  }

  removeSkew(index: number): void {
    this.items.removeAt(index);
  }

  isItemValid(index: number): boolean {
    return this.items.controls[index].valid;
  }

  setItemAsDirty(index: number): void {
    return this.items.controls[index].markAsDirty();
  }

  setItemAsTouched(index: number): void {
    return this.markFormGroupTouched(this.items.controls[index] as FormGroup);
  }

  private markFormGroupTouched(formGroup: FormGroup) {
    (<any>Object).values(formGroup.controls).forEach(control => {
      control.markAsTouched();

      if (control.controls) {
        control.controls.forEach(c => this.markFormGroupTouched(c));
      }
    });
  }
}
