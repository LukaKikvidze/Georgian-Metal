import { Component } from '@angular/core';

@Component({
  selector: 'app-video',
  standalone: false,
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.css']
})
export class VideoComponent {
  hoveredIndex: number = -1;

  videos = [
    { source: 'assets/gallery-video/C1627.MP4' },
    { source: 'assets/videos/sample2.mp4' },
    { source: 'assets/videos/sample3.mp4' }
  ];
  openFullscreen(video: HTMLVideoElement): void {
    if (video.requestFullscreen) {
      video.requestFullscreen();
    } else if ((video as any).webkitRequestFullscreen) {
      (video as any).webkitRequestFullscreen();
    } else if ((video as any).msRequestFullscreen) {
      (video as any).msRequestFullscreen();
    }
  }

}
