import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatComponentsModule } from '../mat-components.module';
import { FormRoutingModule } from './form-routing.module';
import { FormComponent } from './form.component';
import { RegistrationComponent } from './registration/registration.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    FormComponent,
    LoginComponent,
    RegistrationComponent
  ],
  imports: [
    CommonModule,
    MatComponentsModule,
    FormRoutingModule,
    ReactiveFormsModule
  ]
})
export class FormModule { }
