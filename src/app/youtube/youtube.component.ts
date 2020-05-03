import { Component, OnInit } from '@angular/core';
import * as Chart from 'chart.js'
import *  as  youtubeData from '../json/youtube.json';
import *  as  youtubeCategories from '../json/categories.json';
declare const loadYoutubeChart: any;

@Component({
  selector: 'app-youtube',
  templateUrl: './youtube.component.html',
  styleUrls: ['./youtube.component.css']
})
export class YoutubeComponent implements OnInit {
  videoData: any = Object.values(youtubeData["default"]);

  constructor() {
    console.log(this.videoData);
  }

  ngOnInit() {
    // Durations format example: "PT2M31S"
    let videos = this.videoData;
    for (let i = 0; i < videos.length; i++) {
      let duration = videos[i].duration;

      console.log(duration);

      duration = duration.split("M");

      console.log(duration);

      let minutes = duration[0].replace(/\D/g, "");
      let seconds = duration[1].replace(/\D/g, "");
      console.log(minutes);
      console.log(seconds);
    }
    console.group(this.videoData);
    new Chart(document.getElementById("cases-by-country"), loadYoutubeChart(youtubeData, youtubeCategories));
  }

}
