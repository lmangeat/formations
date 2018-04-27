import { FormControl } from "@angular/forms";

export function passwordValidator(passwordFormControl: FormControl) {
  return passwordFormControl
          .value
          .match(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/) ?
                    null :
                    { invalidPassword : true };
}
