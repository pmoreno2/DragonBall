import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalendarDataService {
  private events: { date: Date, title: string }[] = [];

  constructor() {}

  addEvent(date: Date, title: string): void {
    this.events.push({ date, title });
  }

  getEvents(): { date: Date, title: string }[] {
    return this.events;
  }
}