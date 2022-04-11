import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatComponentsModule } from '../mat-components.module';
import { FormRoutingModule } from './form-routing.module';
import { FormComponent } from './form.component';
import { RegistrationComponent } from './registration/registration.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { CategoryComponent } from './home/category/category.component';
import { ContentComponent } from './home/content/content.component';
import { CategorydetailsComponent } from './home/categorydetails/categorydetails.component';



@NgModule({
  declarations: [
    FormComponent,
    LoginComponent,
    RegistrationComponent,
    HomeComponent,
    CategoryComponent,
    ContentComponent,
    CategorydetailsComponent
  ],
  imports: [
    CommonModule,
    MatComponentsModule,
    FormRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class FormModule { }
