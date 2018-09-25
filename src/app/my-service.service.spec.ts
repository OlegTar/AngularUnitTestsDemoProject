import { TestBed } from '@angular/core/testing';

import { MyService } from './my.service';
import { HttpClientModule } from '@angular/common/http';

describe('MyServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [
      HttpClientModule
    ]
  }));

  it('should be created', () => {
    const service: MyService = TestBed.get(MyService);
    expect(service).toBeTruthy();
  });
});
