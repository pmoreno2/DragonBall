import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CalendarioPageComponent } from './calendario-page.component';
import { CalendarDataService } from '../../services/calendar-data.service';

describe('CalendarioPageComponent', () => {
  let component: CalendarioPageComponent;
  let fixture: ComponentFixture<CalendarioPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, CalendarioPageComponent],
      providers: [CalendarDataService]
    }).compileComponents();

    fixture = TestBed.createComponent(CalendarioPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});