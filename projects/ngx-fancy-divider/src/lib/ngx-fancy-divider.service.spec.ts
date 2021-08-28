import {TestBed} from '@angular/core/testing';

import {NgxFancyDividerService} from './ngx-fancy-divider.service';

describe('NgxFancyDividerService', () => {
  let service: NgxFancyDividerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxFancyDividerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
