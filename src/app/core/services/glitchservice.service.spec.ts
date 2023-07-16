import { TestBed } from '@angular/core/testing';

import { GlitchserviceService } from './glitchservice.service';

describe('GlitchserviceService', () => {
  let service: GlitchserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GlitchserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
