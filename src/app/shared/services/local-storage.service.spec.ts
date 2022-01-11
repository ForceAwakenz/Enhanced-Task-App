import { TestBed } from '@angular/core/testing';
import { STORAGE_SERVICE } from '../models/StorageService';
import { LocalStorageService } from './local-storage.service';

describe('StoreService', () => {
  let service: LocalStorageService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [{ provide: STORAGE_SERVICE, useClass: LocalStorageService }],
    });
    service = TestBed.inject(STORAGE_SERVICE);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('getListFromStorage should be truthy', () => {
    expect(service.getTaskListFromStorage()).toBeTruthy();
  });
});
