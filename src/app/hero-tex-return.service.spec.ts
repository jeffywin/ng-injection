import { TestBed } from '@angular/core/testing';

import { HeroTexReturnService } from './hero-tex-return.service';

describe('HeroTexReturnService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HeroTexReturnService = TestBed.get(HeroTexReturnService);
    expect(service).toBeTruthy();
  });
});
