import { Component, Inject, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
 
  HEROES = [
    { id: 11, name: 'Angular' },
    { id: 12, name: 'Node' },
    { id: 13, name: 'Java' },
    { id: 14, name: 'Python' },
    { id: 15, name: 'Android' },
    { id: 16, name: 'Flutter' },
    { id: 17, name: 'Blockchain' },
    { id: 18, name: 'PHP' },
    { id: 19, name: 'React' },
    { id: 20, name: 'Vue' }
  ];

  constructor() {}

  ngOnInit(): void {
    
  }

}