import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FilterInputService {
  private searchPhraze!: string;
  constructor() { }

  getSearchPhraze(): string {
    return this.searchPhraze;
  }

  setSearchPhraze(newSearchPhraze: string): void {
    this.searchPhraze = newSearchPhraze;
  }

}
