import { TestBed, inject } from '@angular/core/testing';

import { VoteDataService } from './vote-data.service';

describe('VoteDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [VoteDataService]
    });
  });

  it('should be created', inject([VoteDataService], (service: VoteDataService) => {
    expect(service).toBeTruthy();
  }));
});
