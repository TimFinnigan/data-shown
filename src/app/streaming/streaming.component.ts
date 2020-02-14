import { Component, OnInit } from '@angular/core';
import * as Chart from 'chart.js'
@Component({
  selector: 'app-streaming',
  templateUrl: './streaming.component.html',
  styleUrls: ['./streaming.component.css']
})
export class StreamingComponent implements OnInit {

  constructor() { }

  title = 'angular8chartjs';
  canvas: any;
  ctx: any;
  ngOnInit() {
    this.canvas = document.getElementById('myChart');
    this.ctx = this.canvas.getContext('2d');
    let myChart = new Chart(this.ctx, {
      type: 'bar',
      data: {
        labels: ["Netflix", "Amazon", "Hulu", "HBO", "Showtime"],
        datasets: [{
          label: 'Subscribers',
          data: [150000000, 100000000, 28000000, 8000000, 3000000],
          // backgroundColor: [
          //   'red',
          //   'blue',
          //   'green',
          //   'black',
          //   'gold'
          // ],
          borderWidth: 1
        }]
      },
      options: {
        responsive: false,
        display: true,
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true
            }
          }]
        }
      }
    });
  }
}
