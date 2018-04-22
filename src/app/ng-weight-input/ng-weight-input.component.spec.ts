import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgWeightInputComponent } from './ng-weight-input.component';
import { ReactiveFormsModule } from '@angular/forms';

fdescribe('NgWeightInputComponent', () => {
  let component: NgWeightInputComponent;
  let fixture: ComponentFixture<NgWeightInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgWeightInputComponent ],
      imports: [ ReactiveFormsModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgWeightInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('order form', () => {
    it('items should return form array of items', () => {
      const initialNumberOfSkews = component.items.length;

      expect(initialNumberOfSkews).toBe(1);

      component.addSkew();

      const numberOfSkewsAfterAddingNewSkew = component.items.length;

      expect(numberOfSkewsAfterAddingNewSkew).toBe(2);
    });
  });
});
