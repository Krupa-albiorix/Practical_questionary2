import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  
  loginForm!: any;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
  }

  createLoginForm() {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8), Validators.pattern("^([a-zA-Z0-9@*#]{8,15})$")]],
    });
  }

}
