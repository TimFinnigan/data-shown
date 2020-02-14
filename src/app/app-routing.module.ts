import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ChartsComponent } from './charts/charts.component';
import { WorldPopulationBubbleChartComponent } from './world-population-bubble-chart/world-population-bubble-chart.component';
import { StreamingComponent } from './streaming/streaming.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'charts', component: ChartsComponent, children: [
      { path: 'streaming', component: StreamingComponent },
      // { path: 'pie-chart', component: AnotherChildComponent }
    ]
  },
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
