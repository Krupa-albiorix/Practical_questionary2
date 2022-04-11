import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {
  categoryForm!: any;

  constructor(private formBuilder: FormBuilder, private router: Router) { }

  ngOnInit(): void {
    this.createcategoryForm();
  }

  createcategoryForm() {
    this.categoryForm = this.formBuilder.group({
      title: ['', Validators.required]
    });
  }

  onsubmit() {
    this.router.navigate(["home"]);
  }

}
