import { TestBed } from '@angular/core/testing';

import { TypecommandeService } from './typecommande.service';

describe('TypecommandeService', () => {
  let service: TypecommandeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TypecommandeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
