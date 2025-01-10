import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VideoListComponent } from '../../components/video-list/video-list.component';

@Component({
  selector: 'app-videos-page',
  standalone: true,
  imports: [CommonModule, VideoListComponent],
  templateUrl: './videos-page.component.html',
  styleUrls: ['./videos-page.component.scss']
})
export class VideosPageComponent {}