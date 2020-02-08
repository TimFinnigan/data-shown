import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChartsComponent } from './charts/charts.component';
import { WorldPopulationBubbleChartComponent } from './world-population-bubble-chart/world-population-bubble-chart.component';

const routes: Routes = [
  {
    path: 'charts', component: ChartsComponent, children: [
      { path: 'world-population', component: WorldPopulationBubbleChartComponent },
      // { path: 'pie-chart', component: AnotherChildComponent }
    ]
  },
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
