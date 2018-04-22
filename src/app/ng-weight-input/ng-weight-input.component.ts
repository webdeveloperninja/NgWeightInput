import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormArray, Validators } from '@angular/forms';
import * as masks from '../text-masks';

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

  constructor(private  formBuilder: FormBuilder) {
    this.createOrderForm();
  }

  private createOrderForm(): void {
    this.orderForm = this.formBuilder.group({
      items: this.formBuilder.array([ this.createWeightCostForm() ])
    });
  }

  private createWeightCostForm(): FormGroup {
    return this.formBuilder.group({
      weight: ['', Validators.required],
      cost: ['', Validators.required],
      name: ['', Validators.required]
    });
  }

  private createItem(): FormGroup {
    return this.formBuilder.group({
      weight: ['', Validators.required],
      cost: ['', Validators.required],
      name: ['', Validators.required]
    });
  }

  get items(): FormArray {
    return this.orderForm.get('items') as FormArray;
  }

  get weightPlaceholder(): string {
    return `Weight ${ this.unit }s`;
  }

  addSkew(index: number): void {
    if (this.isItemValid(index)) {
      this.items.push(this.createItem());
    } else {
      this.setItemAsDirty(index);
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
}
