import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VideoService } from '../../services/video.service';
import { SafeUrlPipe } from '../../pipes/safe-url.pipe';

interface Video {
  title: string;
  description: string;
  category: string;
  link: string;
}

@Component({
  selector: 'app-video-list',
  standalone: true,
  imports: [CommonModule, SafeUrlPipe],
  templateUrl: './video-list.component.html',
  styleUrls: ['./video-list.component.scss']
})
export class VideoListComponent implements OnInit {
  videos: Video[] = [];
  categories: string[] = [];

  constructor(private videoService: VideoService) {}

  ngOnInit(): void {
    this.videoService.getVideos().subscribe((data: Video[]) => {
      this.videos = data;
      this.categories = [...new Set(data.map(video => video.category))];
    });
  }

  getVideosByCategory(category: string): Video[] {
    return this.videos.filter(video => video.category === category);
  }
}