import { Component, OnInit } from '@angular/core';
import * as Chart from 'chart.js'
@Component({
  selector: '',
  templateUrl: './covid19.component.html',
  styleUrls: ['./covid19.component.css']
})
export class Covid19Component implements OnInit {

  constructor() { }

  canvas: any;
  ctx: any;
  ngOnInit() {
    this.canvas = document.getElementById('cases-by-country');
    this.ctx = this.canvas.getContext('2d');
    let confirmedCasesChart = new Chart(this.ctx, {
      type: 'line',
      data: {
        labels: ["1/22/20", "1/23/20", "1/24/20", "1/25/20", "1/26/20", "1/27/20", "1/28/20", "1/29/20", "1/30/20", "1/31/20", "2/1/20", "2/2/20", "2/3/20", "2/4/20", "2/5/20", "2/6/20", "2/7/20", "2/8/20", "2/9/20", "2/10/20", "2/11/20", "2/12/20", "2/13/20", "2/14/20", "2/15/20", "2/16/20", "2/17/20", "2/18/20", "2/19/20", "2/20/20", "2/21/20", "2/22/20", "2/23/20", "2/24/20", "2/25/20", "2/26/20", "2/27/20", "2/28/20", "2/29/20", "3/1/20", "3/2/20", "3/3/20", "3/4/20", "3/5/20", "3/6/20", "3/7/20", "3/8/20", "3/9/20", "3/10/20", "3/11/20", "3/12/20", "3/13/20", "3/14/20", "3/15/20", "3/16/20", "3/17/20", "3/18/20", "3/19/20", "3/20/20", "3/21/20", "3/22/20", "3/23/20", "3/24/20", "3/25/20", "3/26/20", "3/27/20", "3/28/20", "3/29/20", "3/30/20"],
        datasets: [
          {
            label: 'United States',
            data: [1, 1, 2, 2, 5, 5, 5, 5, 5, 7, 8, 8, 11, 11, 11, 11, 11, 11, 11, 11, 12, 12, 13, 13, 13, 13, 13, 13, 13, 13, 15, 15, 15, 51, 51, 57, 58, 60, 68, 74, 98, 118, 149, 217, 262, 402, 518, 583, 959, 1281, 1663, 2179, 2727, 3499, 4632, 6421, 7783, 13677, 19100, 25489, 33276, 43847, 53740, 65778, 83836, 101657, 121478, 140886, 161807],
            backgroundColor: "steelblue",
            borderColor: "steelblue",
            borderWidth: 1,
            fill: false
          },
          {
            label: 'Italy',
            data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 2, 2, 2, 2, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 20, 62, 155, 229, 322, 453, 655, 888, 1128, 1694, 2036, 2502, 3089, 3858, 4636, 5883, 7375, 9172, 10149, 12462, 12462, 17660, 21157, 24747, 27980, 31506, 35713, 41035, 47021, 53578, 59138, 63927, 69176, 74386, 80589, 86498, 92472, 97689, 101739],
            backgroundColor: "red",
            borderColor: "red",
            borderWidth: 1,
            fill: false
          },
          {
            label: 'Spain',
            data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 6, 13, 15, 32, 45, 84, 120, 165, 222, 259, 400, 500, 673, 1073, 1695, 2277, 2277, 5232, 6391, 7798, 9942, 11748, 13910, 17963, 20410, 25374, 28768, 35136, 39885, 49515, 57786, 65719, 73235, 80110, 87956],
            backgroundColor: "green",
            borderColor: "green",
            borderWidth: 1,
            fill: false
          },
          {
            label: 'China',
            data: [1083, 3367, 3684.4197, 548, 643, 920, 1406, 2075, 2877, 5509, 6087, 8141, 9802, 11891, 16630, 19716, 23707, 27440, 30587, 34110, 36814, 39829, 42354, 44386, 44759, 59895, 66358, 68413, 70513, 72434, 74211, 74619, 75077, 75550, 77001, 77022, 77241, 77754, 78166, 78600, 78928, 79356, 79932, 80136, 80261, 80386, 80537, 80690, 80770, 80823, 80860, 80887, 80921, 80932, 80945, 80977, 81003, 81033, 81058, 81102, 81156, 81250, 81305, 81435, 81498, 81591, 81661, 81782, 81897, 81999, 82122, 82198],
            backgroundColor: "darkred",
            borderColor: "darkred",
            borderWidth: 1,
            fill: false
          },
          {
            label: 'Germany',
            data:[0,0,0,0,0,1,4,4,4,5,8,10,12,12,12,12,13,13,14,14,16,16,16,16,16,16,16,16,16,16,16,16,16,16,17,27,46,48,79,130,159,196,262,482,670,799,1040,1176,1457,1908,2078,3675,4585,5795,7272,9257,12327,15320,19848,22213,24873,29056,32986,37323,43938,50871,57695,62095,66885],
            backgroundColor: "darkorange",
            borderColor: "darkorange",
            borderWidth: 1,
            fill: false
          }

        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        display: true,
        title: {
          display: false,
          text: 'Confirmed Covid-19 cases'
        },
        legend: {
          display: true
        },
        tooltips: {
          mode: 'index'
        },

        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true,
            },
            scaleLabel: {
              display: true,
              labelString: 'Confirmed Cases'
            }
          }]
        }
      }
    });

    this.canvas = document.getElementById('deaths-by-country');
    this.ctx = this.canvas.getContext('2d');
    let deathsChart = new Chart(this.ctx, {
      type: 'line',
      data: {
        labels: ["1/22/20", "1/23/20", "1/24/20", "1/25/20", "1/26/20", "1/27/20", "1/28/20", "1/29/20", "1/30/20", "1/31/20", "2/1/20", "2/2/20", "2/3/20", "2/4/20", "2/5/20", "2/6/20", "2/7/20", "2/8/20", "2/9/20", "2/10/20", "2/11/20", "2/12/20", "2/13/20", "2/14/20", "2/15/20", "2/16/20", "2/17/20", "2/18/20", "2/19/20", "2/20/20", "2/21/20", "2/22/20", "2/23/20", "2/24/20", "2/25/20", "2/26/20", "2/27/20", "2/28/20", "2/29/20", "3/1/20", "3/2/20", "3/3/20", "3/4/20", "3/5/20", "3/6/20", "3/7/20", "3/8/20", "3/9/20", "3/10/20", "3/11/20", "3/12/20", "3/13/20", "3/14/20", "3/15/20", "3/16/20", "3/17/20", "3/18/20", "3/19/20", "3/20/20", "3/21/20", "3/22/20", "3/23/20", "3/24/20", "3/25/20", "3/26/20", "3/27/20", "3/28/20", "3/29/20", "3/30/20"],
        datasets: [
          {
            label: 'United States',
            data: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,6,7,11,12,14,17,21,22,28,36,40,47,54,63,85,108,118,200,244,307,417,557,706,942,1209,1581,2026,2467,2978],
            backgroundColor: "steelblue",
            borderColor: "steelblue",
            borderWidth: 1,
            fill: false
          },
          {
            label: 'Italy',
            data: [],
            backgroundColor: "red",
            borderColor: "red",
            borderWidth: 1,
            fill: false
          },
          {
            label: 'Spain',
            data: [],
            backgroundColor: "green",
            borderColor: "green",
            borderWidth: 1,
            fill: false
          },
          {
            label: 'China',
            data: [],
            backgroundColor: "darkred",
            borderColor: "darkred",
            borderWidth: 1,
            fill: false
          },
          {
            label: 'Germany',
            data: [],
            backgroundColor: "darkorange",
            borderColor: "darkorange",
            borderWidth: 1,
            fill: false
          }

        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        display: true,
        title: {
          display: false,
          text: 'Confirmed Covid-19 cases'
        },
        legend: {
          display: true
        },
        tooltips: {
          mode: 'index'
        },

        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true,
            },
            scaleLabel: {
              display: true,
              labelString: 'Confirmed Cases'
            }
          }]
        }
      }
    });
  }
}
