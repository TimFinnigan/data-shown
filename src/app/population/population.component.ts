import { Component, OnInit } from '@angular/core';
import * as Chart from 'chart.js'
@Component({
  selector: '',
  templateUrl: './population.component.html',
  styleUrls: ['./population.component.css']
})
export class PopulationComponent implements OnInit {

  constructor() { }

  canvas: any;
  ctx: any;
  ngOnInit() {
    new Chart(document.getElementById("cases-by-country"), {
      type: 'horizontalBar',
      data: {
        labels: ["Africa", "Asia", "Europe", "Latin America", "North America"],
        datasets: [
          {
            label: "Population (millions)",
            backgroundColor: ["#3e95cd", "#8e5ea2", "#3cba9f", "#e8c3b9", "#c45850"],
            data: [2478, 5267, 734, 784, 433]
          }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        display: true,
        title: {
          display: false,
          text: 'Population'
        },
        legend: {
          display: false
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
              display: false,
              labelString: 'Countries'
            }
          }]
        }
      }
    });
  }
}
