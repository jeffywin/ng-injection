import { TestBed } from '@angular/core/testing';

import { DataLoggerService } from './data-logger.service';

describe('DataLoggerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DataLoggerService = TestBed.get(DataLoggerService);
    expect(service).toBeTruthy();
  });
});
