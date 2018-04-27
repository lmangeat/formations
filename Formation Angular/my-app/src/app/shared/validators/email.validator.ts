import { FormControl } from "@angular/forms";
// import { Injectable } from "@angular/core";
// import { UserService } from "../../content/core/user.service";

export function emailValidator(emailFormControl: FormControl) {
  return emailFormControl
          .value
          .match(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/) ? null : { invalidEmail : true };
}

// @Injectable()
// export class EmailValidator {
//   constructor(private UserService: UserService) {}

//   emailValid(emailFormControl: FormControl) {
//     return emailFormControl
//           .value
//           .match(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/) ? null : { invalidEmail : true };
//   }

//   emailNotUsed(emailFormControl: FormControl) {
//     return new Promise((resolve, reject) => {
//       this.UserService.getByEmail(emailFormControl.value)
//           .then((user) => {
//             if (user) {
//               resolve({emailUsed : true});
//             } else {
//               resolve(null);
//             }
//           }, (err) => {
//             reject(err);
//           })
//     });
//   }
// }
