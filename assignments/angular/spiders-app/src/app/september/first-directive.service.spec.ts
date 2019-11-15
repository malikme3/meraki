import { TestBed } from '@angular/core/testing';

import { FirstDirectiveService } from './first-directive.service';

describe('FirstDirectiveService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FirstDirectiveService = TestBed.get(FirstDirectiveService);
    expect(service).toBeTruthy();
  });
});
