import { Directive, Input, OnInit } from '@angular/core';
import { MatCalendar } from '@angular/material/datepicker';
import { DateAdapter } from '@angular/material/core';

@Directive({
  selector: '[highlightDates]'
})
export class HighlightDatesDirective implements OnInit {
  @Input() highlightDates: Date[] = [];

  constructor(private calendar: MatCalendar<Date>, private dateAdapter: DateAdapter<Date>) {}

  ngOnInit(): void {
    this.calendar.dateClass = (date: Date) => {
      const highlight = this.highlightDates.some(d => this.dateAdapter.sameDate(d, date));
      return highlight ? 'highlight-date' : '';
    };
  }
}