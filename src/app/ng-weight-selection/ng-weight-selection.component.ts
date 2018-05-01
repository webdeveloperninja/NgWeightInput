import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

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

}
