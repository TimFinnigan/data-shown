import { Component, OnInit } from '@angular/core';
import * as Chart from 'chart.js'
@Component({
  selector: '',
  templateUrl: './population.component.html',
  styleUrls: ['./population.component.css']
})
export class PopulationComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    let continentPopData = [1340598000, 4641055000, 747636000, 368870000, 42678000, 653962000];

    for (let i = 0; i < continentPopData.length; i++) {
      let billions = Math.abs(continentPopData[i] / 1.0e+9);
      continentPopData[i] = Number(billions.toFixed(2));
    }

    new Chart(document.getElementById("cases-by-country"), {
      type: 'horizontalBar',
      data: {
        labels: ["Africa", "Asia", "Europe", "North America", "Oceania", "Latin America"],
        datasets: [
          {
            label: "Population (billions)",
            backgroundColor: ["#264653", "#2A9D8F", "#E9C46A", "#e6beae", "#E76F51", "#eae2b7"],
            data: continentPopData
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
          xAxes: [{
            ticks: {
              beginAtZero: true,
              // maxTicksLimit: 20
            },
            scaleLabel: {
              display: true,
              labelString: 'Billions',
            }
          }]
        }
      }
    });
  }
}
