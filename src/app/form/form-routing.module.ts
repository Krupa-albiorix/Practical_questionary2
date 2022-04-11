import { CategorydetailsComponent } from './home/categorydetails/categorydetails.component';
import { ContentComponent } from './home/content/content.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { CategoryComponent } from './home/category/category.component';

const routes: Routes = [
    {
      path: '',
      component: LoginComponent
    },
    {
      path: 'register',
      component: RegistrationComponent
    },
    {
      path: 'home',
      component: HomeComponent
    },
    {
      path: 'category',
      component: CategoryComponent
    },
    {
      path: 'content',
      component: ContentComponent
    },
    {
      path: 'categorydetails',
      component: CategorydetailsComponent
    }
];
  
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormRoutingModule { }