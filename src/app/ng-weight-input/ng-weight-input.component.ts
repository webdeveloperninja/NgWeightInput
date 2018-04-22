import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormArray } from '@angular/forms';

@Component({
  selector: 'app-ng-weight-input',
  templateUrl: './ng-weight-input.component.html',
  styleUrls: ['./ng-weight-input.component.scss']
})
export class NgWeightInputComponent {
  orderForm: FormGroup;
  weightCostInput: FormGroup;
  items: FormArray;

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
      weight: [''],
      cost: [''],
      name: ['']
    });
  }

  private createItem(): FormGroup {
    return this.formBuilder.group({
      weight: '',
      cost: '',
      name: ''
    });
  }

  addSkew() {
    this.items = this.orderForm.get('items') as FormArray;
    this.items.push(this.createItem());
  }
}
