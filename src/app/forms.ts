import { FormGroup } from '@angular/forms';

export const markFormGroupTouched = (formGroup: FormGroup) => {
  (<any>Object).values(formGroup.controls).forEach(control => {
    control.markAsTouched();

    if (control.controls) {
      control.controls.forEach(c => this.markFormGroupTouched(c));
    }
  });
};
