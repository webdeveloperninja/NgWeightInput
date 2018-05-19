import { Component, ViewChild, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { NgWeightInputComponent } from './ng-weight-input/ng-weight-input.component';
import { Observable } from 'rxjs/Observable';
import { Item } from '../models/item';
import { map } from 'rxjs/operators';
import { NgWeightSelectionComponent } from './ng-weight-selection/ng-weight-selection.component';

enum WeightCostFormKeys {
  weight = 'weight',
  cost = 'cost',
  name = 'name'
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [NgWeightInputComponent]
})
export class AppComponent implements OnInit {
  @ViewChild(NgWeightInputComponent) weightInput: NgWeightInputComponent;
  @ViewChild(NgWeightSelectionComponent) selectedItem: NgWeightSelectionComponent;

  items$: Observable<Item[]>;
  selectedItem$: Observable<Item>;

  weightForm: FormGroup;

  disableWeightCost = false;

  constructor(private readonly _formBuilder: FormBuilder, private readonly _ngWeightInput: NgWeightInputComponent) {
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

  ngOnInit() {
    const itemsCollection$ = this.weightInput.selectedItems as Observable<any>;
    this.items$ = itemsCollection$.pipe(map(itemsCollection => itemsCollection.items));

    const selectedItemCollection$ = this.selectedItem.selectedItemChange as Observable<any>;
    this.selectedItem$ = selectedItemCollection$.pipe(map(itemsCollection => itemsCollection.selectedItem));
  }
}
