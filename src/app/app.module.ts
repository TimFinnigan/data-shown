import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChartsComponent } from './charts/charts.component';
import { WorldPopulationBubbleChartComponent } from './world-population-bubble-chart/world-population-bubble-chart.component';
import { HomeComponent } from './home/home.component';
import { StreamingComponent } from './streaming/streaming.component';
import { Covid19Component } from './covid19/covid19.component';
import { PopulationComponent } from './population/population.component';

@NgModule({
  declarations: [
    AppComponent,
    ChartsComponent,
    WorldPopulationBubbleChartComponent,
    HomeComponent,
    StreamingComponent,
    Covid19Component,
    PopulationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
