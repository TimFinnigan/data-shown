import { Component, OnInit } from '@angular/core';
import * as Chart from 'chart.js'
declare const getPopData: any;
declare const getPopDataPie: any;
declare const getTop10: any;
@Component({
  selector: '',
  templateUrl: './population.component.html',
  styleUrls: ['./population.component.css']
})
export class PopulationComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    new Chart(document.getElementById("cases-by-country"), getPopData());
    // new Chart(document.getElementById("cases-by-country-pie"), getPopDataPie());
    new Chart(document.getElementById("top-ten-world"), getTop10("all"));
    // new Chart(document.getElementById("top-ten-asia"), getTop10("asia"));
  }
}
