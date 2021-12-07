import { TestBed } from '@angular/core/testing';

import { FilterInputService } from './filter-input.service';

describe('FilterInputService', () => {
  let service: FilterInputService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FilterInputService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
