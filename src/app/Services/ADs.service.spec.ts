/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ADsService } from './ADs.service';

describe('Service: ADs', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ADsService]
    });
  });

  it('should ...', inject([ADsService], (service: ADsService) => {
    expect(service).toBeTruthy();
  }));
});
