import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FilterInputService {
  private _searchPhraze$!: Observable<string>;
  constructor() { }

  get searchPhraze$() {
    return this._searchPhraze$;
  }

  set searchPhraze$(newSearchPhraze: Observable<string>) {
    this._searchPhraze$ = newSearchPhraze;
  }

}
