import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {
  filterInput = new FormControl;
  constructor() { }

  ngOnInit(): void {
  }

  

  onFilterTextChange(event: any) {
    console.log(event);
  }

}
