import { TestBed } from '@angular/core/testing';

import { MinimalLoggerService } from './minimal-logger.service';

describe('MinimalLoggerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MinimalLoggerService = TestBed.get(MinimalLoggerService);
    expect(service).toBeTruthy();
  });
});
