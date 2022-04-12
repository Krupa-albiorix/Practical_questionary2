import { AuthService } from './../services/auth.service';
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

  constructor(private formBuilder: FormBuilder, private route1: Router, private authService: AuthService) { }

  ngOnInit(): void {
    this.createRegistrationForm();
  }

  createRegistrationForm() {
    this.registrationForm = this.formBuilder.group({
      name: ['', Validators.required],
      salary: ['', Validators.required],
      age : ['', Validators.required]
      // date: ['', Validators.required],
      // english: false,
      // hindi: false,
      // gujarati: false,
      // gender: ['', Validators.required],
      // email: ['', [Validators.required, Validators.email]],
      // password: ['', [Validators.required, Validators.minLength(8)]],
    });
  }

  isSuccessful = false;
  isSignUpFailed = false;

  onSubmit(): void {
    const { name, salary, age } = this.registrationForm;

    this.authService.register(name, salary, age).subscribe({
      next: (data: any) => {
        console.log(data);
        this.isSuccessful = true;
        this.isSignUpFailed = false;
        this.route1.navigate(['/']);
      },
      error: (err: any) => {
        this.isSignUpFailed = true;
      }

    });
  }

}
