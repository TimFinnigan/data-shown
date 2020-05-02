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
    new Chart(document.getElementById("cases-by-country"), loadYoutubeChart(youtubeData, youtubeCategories));
  }

}
