import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FilterInputService {
  searchPhraze$ = new BehaviorSubject<string>(''); // mb useValue?
}
