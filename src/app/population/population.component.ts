import { Component, OnInit } from '@angular/core';
import * as Chart from 'chart.js'
declare const getPopData: any;
@Component({
  selector: '',
  templateUrl: './population.component.html',
  styleUrls: ['./population.component.css']
})
export class PopulationComponent implements OnInit {

  constructor() { }

  ngOnInit() {
   
    let obj = getPopData();
    new Chart(document.getElementById("cases-by-country"), obj);
  }
}
