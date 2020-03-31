import { Component, OnInit } from '@angular/core';
import * as Chart from 'chart.js'
@Component({
  selector: 'app-streaming',
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
    let myChart = new Chart(this.ctx, {
      type: 'bar',
      data: {
        labels: ["1/22/20", "1/23/20", "1/24/20", "1/25/20", "1/26/20", "1/27/20", "1/28/20", "1/29/20", "1/30/20", "1/31/20", "2/1/20", "2/2/20", "2/3/20", "2/4/20", "2/5/20", "2/6/20", "2/7/20", "2/8/20", "2/9/20", "2/10/20", "2/11/20", "2/12/20", "2/13/20", "2/14/20", "2/15/20", "2/16/20", "2/17/20", "2/18/20", "2/19/20", "2/20/20", "2/21/20", "2/22/20", "2/23/20", "2/24/20", "2/25/20", "2/26/20", "2/27/20", "2/28/20", "2/29/20", "3/1/20", "3/2/20", "3/3/20", "3/4/20", "3/5/20", "3/6/20", "3/7/20", "3/8/20", "3/9/20", "3/10/20", "3/11/20", "3/12/20", "3/13/20", "3/14/20", "3/15/20", "3/16/20", "3/17/20", "3/18/20", "3/19/20", "3/20/20", "3/21/20", "3/22/20", "3/23/20", "3/24/20", "3/25/20", "3/26/20", "3/27/20", "3/28/20", "3/29/20", "3/30/20"],
        datasets: [{
          label: 'United States',
          data: [1, 1, 2, 2, 5, 5, 5, 5, 5, 7, 8, 8, 11, 11, 11, 11, 11, 11, 11, 11, 12, 12, 13, 13, 13, 13, 13, 13, 13, 13, 15, 15, 15, 51, 51, 57, 58, 60, 68, 74, 98, 118, 149, 217, 262, 402, 518, 583, 959, 1281, 1663, 2179, 2727, 3499, 4632, 6421, 7783, 13677, 19100, 25489, 33276, 43847, 53740, 65778, 83836, 101657, 121478, 140886, 161807],
          backgroundColor: "steelblue",
          borderWidth: 1
        }]
      },
      options: {
        responsive: false,
        display: true,
        title: {
          display: false,
          text: 'Confirmed Covid-19 cases '
        },
        legend: {
          display: true
        },
        tooltips: {
          callbacks: {
            // label: function (tooltipItem, data) {
            //   return tooltipItem.yLabel / 1000000 + ' Million';
            // }
          }
        },
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true,
              // callback: function (label, index, labels) {
              //   return label / 1000000 + ' M';
              // }
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
