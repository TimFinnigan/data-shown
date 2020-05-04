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

  getAverageViews: any = function () {
    let videos = this.videoData;
    let total = 0;
    for (let i = 0; i < videos.length; i++) {
      let views = parseInt(videos[i].statistics.viewCount);
      total += views;
    }
    total /= 50;
    total = Math.round(total);
    return total.toLocaleString();
  };

  getAverageLikes: any = function () {
    let videos = this.videoData;
    let averages = {
      likes: 0,
      dislikes: 0
    }
    let likeTotal = 0;
    let dislikeTotal = 0;
    for (let i = 0; i < videos.length; i++) {
      let likes = parseInt(videos[i].statistics.likeCount);
      let dislikes = parseInt(videos[i].statistics.dislikeCount);
      likeTotal += likes;
      dislikeTotal += dislikes;
    }
    likeTotal /= 50;
    dislikeTotal /= 50;
    averages.likes = Math.round(likeTotal);
    averages.dislikes = Math.round(dislikeTotal);
    return averages;
  };

  averageMinutes: any = this.getAverageMinutes();
  averageViews: any = this.getAverageViews();
  averageLikes: any = this.getAverageLikes();

  constructor() {
  }

  ngOnInit() {
    console.group(this.videoData);
    new Chart(document.getElementById("cases-by-country"), loadYoutubeChart(youtubeData, youtubeCategories));
  }

}
