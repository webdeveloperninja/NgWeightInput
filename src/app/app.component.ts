import { Component, ViewChild, OnInit } from '@angular/core';
import { NgWeightInputComponent } from './ng-weight-input/ng-weight-input.component';
import { Observable } from 'rxjs/Observable';
import { Item } from '../models/item';
import { NgWeightSelectionComponent } from './ng-weight-selection/ng-weight-selection.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  @ViewChild(NgWeightInputComponent) weightInput: NgWeightInputComponent;
  @ViewChild(NgWeightSelectionComponent) selectedItem: NgWeightSelectionComponent;

  items$: Observable<Item[]>;
  selectedItem$: Observable<Item>;

  ngOnInit() {
    this.items$ = this.weightInput.itemsChange as Observable<Item[]>;
    this.selectedItem$ = this.selectedItem.selectedItemChange as Observable<Item>;
  }
}
