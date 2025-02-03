import { ValidatorFn, ValidationErrors, AbstractControl, FormGroup } from '@angular/forms';

export function mustMatchValidator(passwordControlName: string, matchingControlName: string): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const formGroup = control as FormGroup;
    const passwordControl = formGroup.get(passwordControlName);
    const matchingControl = formGroup.get(matchingControlName);

    if (!passwordControl || !matchingControl) {
      return null;
    }

    if (passwordControl.value !== matchingControl.value) {
      matchingControl.setErrors({ mustmatch: true });
      return { mustmatch: true };
    } else {
      matchingControl.setErrors(null);
    }

    return null;
  };
}
