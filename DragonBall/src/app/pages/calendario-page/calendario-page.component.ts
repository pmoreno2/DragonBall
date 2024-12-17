import { Component, OnInit } from '@angular/core';

import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatMomentDateModule } from '@angular/material-moment-adapter';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
// Configuración del locale
import { LOCALE_ID } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import localeEs from '@angular/common/locales/es';
// Registrar el locale en español
registerLocaleData(localeEs);

import { CommonModule } from '@angular/common';
import { CalendarDataService } from '../../services/calendar-data.service';


@Component({
  selector: 'app-calendario-page',
  imports: [
    MatDatepickerModule,
    MatNativeDateModule,
    MatFormFieldModule,
    MatInputModule,
    CommonModule
  ],
  templateUrl: './calendario-page.component.html',
  styleUrls: ['./calendario-page.component.scss']
})
export class CalendarioPageComponent implements OnInit {
  selectedDate: Date | null = null;
  events: { date: Date, title: string }[] = [];

  constructor(private calendarDataService: CalendarDataService) {}

  ngOnInit(): void {
    this.events = this.calendarDataService.getEvents();
  }

  onDateSelected(date: Date): void {
    this.selectedDate = date;
    const title = prompt('Enter event title:');
    if (title) {
      this.calendarDataService.addEvent(date, title);
      this.events = this.calendarDataService.getEvents();
    }
  }
}