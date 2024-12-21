import { Component, OnInit, ViewEncapsulation, ViewChild } from '@angular/core';
import { MatCalendar } from '@angular/material/datepicker';
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
  @ViewChild(MatCalendar) calendar!: MatCalendar<Date>; // Referencia al componente MatCalendar
  selectedDate: Date | null = null;
  events: { date: Date, series: string, title: string }[] = [];
  highlightDates: Date[] = [];

  constructor(private calendarDataService: CalendarDataService) {}

  ngOnInit(): void {
    this.calendarDataService.loadEpisodes().subscribe((episodes: { date: Date, series: string, title: string }[]) => {
      this.events = episodes;
      this.highlightDates = episodes.map(event => new Date(event.date));
      // Forzar actualización del calendario
      if (this.calendar) {
        this.calendar.updateTodaysDate();
      }
    });
  }

  onDateSelected(date: Date): void {
    this.selectedDate = date;
    const series = prompt('Introduzca el titulo del evento:');
    const title = prompt('Introduzca la descripcion del evento:');
    if (title && series) {
      this.calendarDataService.addEvent(date, series, title);
      this.events = this.calendarDataService.getEvents();
      this.highlightDates = this.events.map(event => event.date);
      
      // Forzar actualización del calendario
      if (this.calendar) {
        this.calendar.updateTodaysDate();
      }
    }
  }
}