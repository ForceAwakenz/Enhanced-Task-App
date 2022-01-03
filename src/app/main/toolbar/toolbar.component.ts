import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Store } from '@ngrx/store';
import { debounceTime, distinctUntilChanged, Observable } from 'rxjs';
import { updateFilter } from 'src/app/redux/actions-main';
import { GlobalState } from 'src/app/shared/models/GlobalState';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {
  filterInput = new FormControl;

  constructor(private store: Store<GlobalState>) { }

  ngOnInit(): void {
    this.filterInputChange$().subscribe(searchUpdate => {
      this.store.dispatch(updateFilter({filterInput: searchUpdate}));
    });
  }

  private filterInputChange$(): Observable<string> {
    return this.filterInput.valueChanges.pipe(
      debounceTime(500),
      distinctUntilChanged(),
    )
  }

}
