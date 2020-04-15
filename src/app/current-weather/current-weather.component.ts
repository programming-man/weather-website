import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

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
  };

  constructor() { }

  ngOnInit() {
    this.formWeather = new FormGroup({
      city: new FormControl("", Validators.compose([
        Validators.required,
        Validators.pattern('[a-zA-Z ]*')
      ]))
    })
  }

  getCity(dataName) {
    this.city = dataName.city;
  }

}
