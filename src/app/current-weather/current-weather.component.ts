import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { SearchWeatherService } from '../search-weather.service'

@Component({
  selector: 'app-current-weather',
  templateUrl: './current-weather.component.html',
  styleUrls: ['./current-weather.component.scss']
})
export class CurrentWeatherComponent implements OnInit {

  formWeather: any;
  city: any;
  
  cityWeather = {
    description: "Chuvoso",
    degrees: "30",
    date: "15/04/2020"
  };

  constructor(private weatherApi:SearchWeatherService ) { }

  ngOnInit() {
    this.formWeather = new FormGroup({
      city: new FormControl("", Validators.compose([
        Validators.required
      ]))
    })
  }

  getCity(dataName) {
    this.city = dataName.city;
    let cidade = 'city='
    this.weatherApi.getWeather(cidade, this.city)
  }

}
