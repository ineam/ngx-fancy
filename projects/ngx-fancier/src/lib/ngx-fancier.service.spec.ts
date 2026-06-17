import {TestBed} from '@angular/core/testing';

import {NgxFancierService} from './ngx-fancier.service';

describe('NgxFancierService', () => {
  let service: NgxFancierService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxFancierService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
