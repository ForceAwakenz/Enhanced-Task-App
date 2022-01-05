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

  it('should return ITask with property isDone === false', () => {
    expect(service.formatTask({text: ''}).isDone).toBe(false);
  });
});
