import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

  registrationForm!: any;
  user!: any;
  // FORM_CONSTANT = 'user';

  constructor(private formBuilder: FormBuilder, private route1: Router,) { }

  ngOnInit(): void {
    this.createRegistrationForm();
  }

  createRegistrationForm() {
    this.registrationForm = this.formBuilder.group({
      name: ['', Validators.required],
      date: ['', Validators.required],
      english: false,
      hindi: false,
      gujarati: false,
      gender: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
    });
  }

  // onSubmit() {
  //   console.log(this.registrationForm)
  //   if (this.registrationForm.valid) {
  //     if (localStorage.getItem(this.FORM_CONSTANT)) {
  //       localStorage.removeItem(this.FORM_CONSTANT);
  //     }
  //     localStorage.setItem(this.FORM_CONSTANT, JSON.stringify(this.registrationForm.value));
  //     this.route1.navigate(['/']);
  //   }
  // }

  onSubmit() {
    if (this.registrationForm.valid) {
      var id = new Date().getTime().toString();
      console.log(this.registrationForm.value);
      this.addUser(this.registrationForm.value);
    }
  }

  addUser(user: any) {
    let users = [];
    if (localStorage.getItem('Users')) {
      users = JSON.parse(localStorage.getItem('Users')!);
      users = [user, ...users];
    }
    else {
      users = [user];
    }
    localStorage.setItem('Users', JSON.stringify(users));
    this.route1.navigate(['/']);
  }

}
