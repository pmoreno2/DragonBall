import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Episode } from './episode.model'; // Asegúrate de importar la interfaz

@Injectable({
  providedIn: 'root'
})
export class CalendarDataService {
  private events: { date: Date, series: string, title: string }[] = [];

  constructor(private http: HttpClient) {}

  addEvent(date: Date, series: string, title: string): void {
    this.events.push({ date, series, title });
  }

  getEvents(): { date: Date, series: string, title: string }[] {
    return this.events;
  }

  loadEpisodes(): Observable<{ date: Date, series: string, title: string }[]> {
    return this.http.get<Episode[]>('assets/dragon-ball-episodes.json').pipe(
      map(data => {
        const episodes = data.map(episode => ({
          date: new Date(episode.releaseDate),
          series: `${episode.series}`,
          title: `${episode.title} (Episodio ${episode.episode}, ${episode.saga})`
        }));
        this.events = [...this.events, ...episodes]; // Mantener los eventos existentes y agregar los nuevos
        return this.events;
      })
    );
  }
}