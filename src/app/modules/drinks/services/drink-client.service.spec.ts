import { TestBed } from '@angular/core/testing';

import { DrinkClientService } from './drink-client.service';

describe('DrinkClientService', () => {
  let service: DrinkClientService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DrinkClientService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
