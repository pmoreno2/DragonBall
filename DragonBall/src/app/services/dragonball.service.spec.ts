import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { DragonballService } from './dragonball.service';
import { RouterTestingModule } from '@angular/router/testing';

describe('DragonballService', () => {
  let service: DragonballService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [DragonballService]
    });
    service = TestBed.inject(DragonballService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});