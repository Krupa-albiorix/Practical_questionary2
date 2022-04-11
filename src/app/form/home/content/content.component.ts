import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {
  contentForm!: any;

  constructor(private formBuilder: FormBuilder, private router: Router) { }

  ngOnInit(): void {
    this.createcontentForm();
  }

  createcontentForm() {
    this.contentForm = this.formBuilder.group({
      category: ['', Validators.required],
      content: ['', Validators.required]
    });
  }

  onsubmit() {
    this.router.navigate(["home"]);
  }

}
