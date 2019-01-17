import { TestBed } from '@angular/core/testing';

import { InitialStateService } from './initial-state.service';

describe('InitialStateService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: InitialStateService = TestBed.get(InitialStateService);
    expect(service).toBeTruthy();
  });
});
