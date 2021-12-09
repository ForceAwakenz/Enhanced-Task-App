import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FilterInputService {
  searchPhraze$ = new BehaviorSubject<string>('');
  constructor() { }

  // get searchPhraze$(): BehaviorSubject<string> {
  //   return this._searchPhraze$;
  // }

  // set searchPhraze$(newSearchPhraze: BehaviorSubject<string>) {
  //   this._searchPhraze$ = newSearchPhraze;
  // }

}
