import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime, filter, Observable } from 'rxjs';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {
  filterInput = new FormControl;
  constructor() { }

  ngOnInit(): void {
    this.onFilterInputChange()
      .subscribe();
  }

  onFilterInputChange(): Observable<string> {
    return this.filterInput.valueChanges.pipe(
      filter(userInput => userInput.length > 2),
      debounceTime(500)
    )
  }

  onFilterTextChange(event: any) {
    console.log(event);
  }

}
