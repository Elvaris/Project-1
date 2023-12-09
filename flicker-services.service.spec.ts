import { TestBed } from '@angular/core/testing';

import { FlickerServicesService } from './flicker-services.service';

describe('FlickerServicesService', () => {
  let service: FlickerServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FlickerServicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
