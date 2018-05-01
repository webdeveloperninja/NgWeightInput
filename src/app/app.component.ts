import { Component } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { NgWeightInputComponent } from './ng-weight-input/ng-weight-input.component';

enum WeightCostFormKeys {
  weight = 'weight',
  cost = 'cost',
  name = 'name'
}


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [ NgWeightInputComponent ]
})
export class AppComponent {
  weightForm: FormGroup;

  disableWeightCost = false;

  constructor(
    private readonly _formBuilder: FormBuilder,
    private readonly _ngWeightInput: NgWeightInputComponent
  ) {
    this.createWeightForm();
  }

  createWeightForm(): void {
    this.weightForm = this._formBuilder.group({
      itemsForm: this._formBuilder.group({
        items: this._formBuilder.array([this._ngWeightInput.createItem()])
      })
    });
  }

  get itemsForm(): FormGroup {
    return this.weightForm.get('itemsForm') as FormGroup;
  }

}
