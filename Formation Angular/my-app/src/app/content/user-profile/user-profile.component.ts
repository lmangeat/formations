import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../core/user.service';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { emailValidator } from '../../shared/validators/email.validator';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  user: any;

  userProfileForm: FormGroup;

  propName: FormControl;
  propUsername: FormControl;
  propEmail: FormControl;

  constructor(private route: ActivatedRoute, private UserService: UserService, private FormBuilder: FormBuilder) { }

  ngOnInit() {
    this.route.params.subscribe((paramsUrl) => {
      this.UserService.getById(paramsUrl.id).then((user) => {
        this.user = user;
        this.userProfileForm.patchValue(this.user)
      });

      this.propName = new FormControl();
      this.propUsername = new FormControl();
      this.propEmail = new FormControl('', [
        emailValidator
      ]);

      this.userProfileForm = this.FormBuilder.group({
        name: this.propName,
        username: this.propUsername,
        email: this.propEmail
      });
    });
  }

  submit() {
    console.log(this.userProfileForm)
    const userToSend = Object.assign(this.user, this.userProfileForm.value);
    this.userProfileForm['submitted'] = true;
    this.UserService
        .modify(userToSend)
        .then((user) => {
          this.user = user;
        })
  }

}
