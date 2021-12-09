import { TestBed } from '@angular/core/testing';

import { FormatTaskService } from './format-task.service';

describe('FormatTaskService', () => {
  let service: FormatTaskService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FormatTaskService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
