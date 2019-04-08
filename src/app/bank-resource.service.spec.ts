import { TestBed } from '@angular/core/testing';

import { BankResourceService } from './bank-resource.service';
import { HttpClientModule } from '@angular/common/http';

describe('BankResourceService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientModule]
  }));


  it('should be created', () => {
    const service: BankResourceService = TestBed.get(BankResourceService);
    expect(service).toBeTruthy();
  });
});
