import { TestBed, inject } from '@angular/core/testing';

import { DialogformService } from './dialogform.service';

describe('DialogformService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DialogformService]
    });
  });

  it('should be created', inject([DialogformService], (service: DialogformService) => {
    expect(service).toBeTruthy();
  }));
});
