import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { passwordValidator } from '../shared/validators/password.validator';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  propEmail: FormControl;
  propPassword: FormControl;

  constructor(private builder:FormBuilder) { }

  ngOnInit() {
    this.propEmail = new FormControl('', [
      Validators.required
    ]);
    this.propPassword = new FormControl('', [
      Validators.required,
      passwordValidator
    ]);

    this.loginForm = this.builder.group({
      email: this.propEmail,
      password: this.propPassword
    })
  }

  submit() {
    console.log(this.loginForm);
  }

}
