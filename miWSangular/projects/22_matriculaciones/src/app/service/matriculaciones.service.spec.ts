import { TestBed } from '@angular/core/testing';

import { MatriculacionesService } from './matriculaciones.service';

describe('MatriculacionesService', () => {
  let service: MatriculacionesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MatriculacionesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
