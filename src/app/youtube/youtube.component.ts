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
  }

  ngOnInit() {
    // Durations format example in JSON: "PT2M31S"
    let videos = this.videoData;
    let totalTimeInMinutes = 0;
    for (let i = 0; i < videos.length; i++) {
      let duration = videos[i].duration;
      duration = duration.split("M");
      let minutes = duration[0].replace(/\D/g, "");
      let seconds = duration[1].replace(/\D/g, "");
      let timeInMinutes = parseInt(minutes);
      if (seconds) {
        timeInMinutes += (parseInt(seconds) / 60);
      }
      totalTimeInMinutes += timeInMinutes;
    }
    let averageMinutes = totalTimeInMinutes / 50;
    console.log(averageMinutes.toFixed(2));
    console.group(this.videoData);
    new Chart(document.getElementById("cases-by-country"), loadYoutubeChart(youtubeData, youtubeCategories));
  }

}
