import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TodayWeatherComponent } from './today-weather/today-weather.component';

import {MatToolbarModule} from '@angular/material/toolbar';
import { FutureWeatherComponent } from './future-weather/future-weather.component'; 

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    TodayWeatherComponent,
    FutureWeatherComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
