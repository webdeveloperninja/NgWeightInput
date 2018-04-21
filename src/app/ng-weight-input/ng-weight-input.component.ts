import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-ng-weight-input',
  templateUrl: './ng-weight-input.component.html',
  styleUrls: ['./ng-weight-input.component.scss']
})
export class NgWeightInputComponent implements OnInit {
  weightCostInput: FormGroup;

  constructor(private  formBuilder: FormBuilder) {
    this.createForm();
  }

  private createForm(): void {
    this.weightCostInput = this.formBuilder.group({
      weight: [''],
      cost: [''],
      name: ['']
    });
  }

  ngOnInit() {
    this.weightCostInput.valueChanges.subscribe(weightCost => {
      console.log('weight cost', weightCost);
    });
  }
}
