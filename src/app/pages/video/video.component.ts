import { Component } from '@angular/core';

@Component({
  selector: 'app-video',
  standalone: false,
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.css']
})
export class VideoComponent {
  videos = [
    'assets/videos/video1.mp4',
    'assets/videos/video2.mp4'
    // ვიდეოების URL-ები
  ];
}
