import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { CommonModule } from '@angular/common';
import { CalendarDataService } from '../../services/calendar-data.service';
import { HighlightDatesDirective } from '../../directives/highlight-dates.directive'; // Importar la directiva personalizada

@Component({
  selector: 'app-calendario-page',
  encapsulation: ViewEncapsulation.None,
  imports: [
    MatDatepickerModule,
    MatNativeDateModule,
    MatFormFieldModule,
    MatInputModule,
    CommonModule,
    HighlightDatesDirective // Importar la directiva personalizada
  ],
  templateUrl: './calendario-page.component.html',
  styleUrls: ['./calendario-page.component.scss']
})
export class CalendarioPageComponent implements OnInit {
  selectedDate: Date | null = null;
  events: { date: Date, title: string }[] = [];
  highlightDates: Date[] = [];

  constructor(private calendarDataService: CalendarDataService) {}

  ngOnInit(): void {
    this.calendarDataService.loadEpisodes().subscribe((episodes: { date: Date, title: string }[]) => {
      this.events = episodes;
      this.highlightDates = episodes.map(event => event.date);
    });
  }

  onDateSelected(date: Date): void {
    this.selectedDate = date;
    const title = prompt('Enter event title:');
    if (title) {
      this.calendarDataService.addEvent(date, title);
      this.events = this.calendarDataService.getEvents();
      this.highlightDates = this.events.map(event => event.date);
    }
  }
}