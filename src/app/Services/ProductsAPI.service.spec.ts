/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ProductsAPIService } from './ProductsAPI.service';

describe('Service: ProductsAPI', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProductsAPIService]
    });
  });

  it('should ...', inject([ProductsAPIService], (service: ProductsAPIService) => {
    expect(service).toBeTruthy();
  }));
});
