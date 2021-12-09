import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime, distinctUntilChanged, filter, first, Observable, skip, switchMap, tap } from 'rxjs';
import { FilterInputService } from '@app/shared/services/filter-input.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {
  filterInput = new FormControl;

  constructor(private filterInputService: FilterInputService) { }

  ngOnInit(): void {
    this.filterInputChange$().pipe(searchUpdate$ => this.filterInputService.searchPhraze$ = searchUpdate$);
  }

  private filterInputChange$(): Observable<string> {
    return this.filterInput.valueChanges.pipe(
      debounceTime(500),
      distinctUntilChanged(),
    )
  }


}
