import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChartsComponent } from './charts/charts.component';
import { WorldPopulationBubbleChartComponent } from './world-population-bubble-chart/world-population-bubble-chart.component';

@NgModule({
  declarations: [
    AppComponent,
    ChartsComponent,
    WorldPopulationBubbleChartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
