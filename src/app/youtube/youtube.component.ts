import { Component, OnInit } from '@angular/core';
import * as Chart from 'chart.js'
import *  as  youtubeData from '../json/youtube.json';
declare const loadYoutubeChart: any;

@Component({
  selector: 'app-youtube',
  templateUrl: './youtube.component.html',
  styleUrls: ['./youtube.component.css']
})
export class YoutubeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    new Chart(document.getElementById("cases-by-country"), loadYoutubeChart(youtubeData));
  }

}
