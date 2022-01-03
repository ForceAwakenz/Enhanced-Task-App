import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Store } from '@ngrx/store';
import { debounceTime, distinctUntilChanged, Observable, Subscription } from 'rxjs';
import { updateFilter } from 'src/app/redux/task-app-general.actions';
import { GlobalState } from 'src/app/shared/models/GlobalState';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit, OnDestroy {
  filterInput = new FormControl;
  filterInputSubscription$ = new Subscription();

  constructor(private store: Store<GlobalState>) { }

  ngOnInit(): void {
    this.filterInputSubscription$ = this.filterInputChange$().subscribe(searchUpdate => {
      this.store.dispatch(updateFilter({filterInput: searchUpdate}));
    });
  }

  ngOnDestroy(): void {
      this.filterInputSubscription$.unsubscribe();
  }

  private filterInputChange$(): Observable<string> {
    return this.filterInput.valueChanges.pipe(
      debounceTime(500),
      distinctUntilChanged(),
    )
  }

}
