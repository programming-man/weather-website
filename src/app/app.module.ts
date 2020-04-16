import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TodayWeatherComponent } from './today-weather/today-weather.component';

import {MatToolbarModule} from '@angular/material/toolbar';
import { CurrentWeatherComponent } from './current-weather/current-weather.component'; 
import { FutureWeatherComponent } from './future-weather/future-weather.component'; 

import {MatGridListModule} from '@angular/material/grid-list';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { HttpClientModule } from '@angular/common/http'



@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    TodayWeatherComponent,
    CurrentWeatherComponent,
    FutureWeatherComponent
  ],
  
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatGridListModule,
    FormsModule,
    ReactiveFormsModule,
    MatIconModule,
    MatInputModule,
    MatFormFieldModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
