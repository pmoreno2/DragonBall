import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Episode } from './episode.model'; // Asegúrate de importar la interfaz

@Injectable({
  providedIn: 'root'
})
export class CalendarDataService {
  private events: { date: Date, title: string }[] = [];

  constructor(private http: HttpClient) {}

  addEvent(date: Date, title: string): void {
    this.events.push({ date, title });
  }

  getEvents(): { date: Date, title: string }[] {
    return this.events;
  }

  loadEpisodes(): Observable<{ date: Date, title: string }[]> {
    return this.http.get<Episode[]>('assets/dragon-ball-episodes.json').pipe(
      map(data => {
        return data.map(episode => ({
          date: new Date(episode.releaseDate),
          title: `${episode.title} (Episodio ${episode.episode}, ${episode.saga})`
        }));
      })
    );
  }
}