/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { CategoryAPIService } from './CategoryAPI.service';

describe('Service: CategoryAPI', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CategoryAPIService]
    });
  });

  it('should ...', inject([CategoryAPIService], (service: CategoryAPIService) => {
    expect(service).toBeTruthy();
  }));
});
