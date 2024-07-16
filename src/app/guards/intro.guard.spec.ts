import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { introGuard } from './intro.guard';

describe('introGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => introGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
