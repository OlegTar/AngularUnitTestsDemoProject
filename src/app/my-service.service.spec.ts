import { TestBed } from '@angular/core/testing';

import { MyServiceService } from './my-service.service';
import { HttpClientModule } from '@angular/common/http';

describe('MyServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [
      HttpClientModule
    ]
  }));

  it('should be created', () => {
    const service: MyServiceService = TestBed.get(MyServiceService);
    expect(service).toBeTruthy();
  });
});
