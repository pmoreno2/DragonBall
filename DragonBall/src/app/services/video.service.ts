import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

interface Video {
  title: string;
  description: string;
  category: string;
  link: string;
}

@Injectable({
  providedIn: 'root'
})
export class VideoService {
  private videosUrl = 'assets/videos.json';

  constructor(private http: HttpClient) {}

  getVideos(): Observable<Video[]> {
    return this.http.get<Video[]>(this.videosUrl);
  }
}