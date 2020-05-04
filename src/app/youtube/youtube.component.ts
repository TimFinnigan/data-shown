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

  getAverageMinutes: any = function () {
    // Durations format example in JSON: "PT2M31S"
    let videos = this.videoData;
    let total = 0;
    for (let i = 0; i < videos.length; i++) {
      let duration = videos[i].duration;
      duration = duration.split("M");
      let minutes = duration[0].replace(/\D/g, "");
      let seconds = duration[1].replace(/\D/g, "");
      let timeInMinutes = parseInt(minutes);
      if (seconds) {
        timeInMinutes += (parseInt(seconds) / 60);
      }
      total += timeInMinutes;
    }
    total /= 50;
    return total.toFixed(2);
  };

  averageMinutes: any = this.getAverageMinutes();

  constructor() {
  }

  ngOnInit() {
    console.group(this.videoData);
    new Chart(document.getElementById("cases-by-country"), loadYoutubeChart(youtubeData, youtubeCategories));
  }

}
