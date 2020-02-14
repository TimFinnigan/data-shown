import { Component, OnInit } from '@angular/core';
import * as Chart from 'chart.js'
@Component({
  selector: 'app-streaming',
  templateUrl: './streaming.component.html',
  styleUrls: ['./streaming.component.css']
})
export class StreamingComponent implements OnInit {

  constructor() { }

  canvas: any;
  ctx: any;
  ngOnInit() {
    this.canvas = document.getElementById('myChart');
    this.ctx = this.canvas.getContext('2d');
    let myChart = new Chart(this.ctx, {
      type: 'bar',
      data: {
        labels: ["Netflix", "Amazon Prime", "Hulu", "HBO Now", "Showtime"],
        datasets: [{
          label: 'Subscribers',
          data: [150000000, 100000000, 28000000, 8000000, 3000000],
          backgroundColor: [
            'rgba(229, 9, 20, .7)',
            'rgba(255, 153, 0, .7)',
            'rgba(102, 170, 50, .7)',
            'rgba(0, 0, 0, .7)',
            'rgba(192,192,192, .7)'
          ],
          borderWidth: 1
        }]
      },
      options: {
        responsive: false,
        display: true,
        title: {
          display: true,
          text: 'Popular Streaming Subscribers (2019)'
        },
        legend: {
          display: false
        },
        tooltips: {
          callbacks: {
            label: function (tooltipItem, data) {
              return tooltipItem.yLabel / 1000000 + ' Million';
            }
          }
        },
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true,
              callback: function (label, index, labels) {
                return label / 1000000 + ' M';
              }
            },

            scaleLabel: {
              display: true,
              labelString: 'Subscribers in Millions'
            }
          }]
        }
      }
    });
  }
}
