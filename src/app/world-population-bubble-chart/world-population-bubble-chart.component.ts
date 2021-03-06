import { Component, OnInit } from '@angular/core';
import * as Chart from 'chart.js'
@Component({
  selector: 'app-world-population-bubble-chart',
  templateUrl: './world-population-bubble-chart.component.html',
  styleUrls: ['./world-population-bubble-chart.component.css']
})
export class WorldPopulationBubbleChartComponent implements OnInit {
  title = 'angular8chartjs';
  canvas: any;
  ctx: any;
  ngOnInit() {
    this.canvas = document.getElementById('myChart');
    this.ctx = this.canvas.getContext('2d');
    let myChart = new Chart(this.ctx, {
      type: 'pie',
      data: {
        labels: ["New", "In Progress", "On Hold"],
        datasets: [{
          label: '# of Votes',
          data: [1, 2, 3],
          backgroundColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)'
          ],
          borderWidth: 1
        }]
      },
      options: {
        responsive: false,
        display: true
      }
    });
  }
}