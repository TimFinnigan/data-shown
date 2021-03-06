import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ChartsComponent } from './charts/charts.component';
import { WorldPopulationBubbleChartComponent } from './world-population-bubble-chart/world-population-bubble-chart.component';
import { StreamingComponent } from './streaming/streaming.component';
import { Covid19Component } from './covid19/covid19.component';
import { PopulationComponent } from './population/population.component';
import { YoutubeComponent } from './youtube/youtube.component';


const routes: Routes = [
  { path: '', redirectTo: 'charts', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  {
    path: 'charts', component: ChartsComponent, children: [
      { path: '', redirectTo: 'population', pathMatch: 'full' },
      { path: 'streaming', component: StreamingComponent },
      { path: 'covid19', component: Covid19Component },
      { path: 'population', component: PopulationComponent },
      { path: 'youtube', component: YoutubeComponent },
    ]
  },
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
