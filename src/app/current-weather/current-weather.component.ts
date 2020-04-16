import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { SearchWeatherService } from '../search-weather.service';
import { Model } from '../model';

@Component({
  selector: 'app-current-weather',
  templateUrl: './current-weather.component.html',
  styleUrls: ['./current-weather.component.scss']
})
export class CurrentWeatherComponent implements OnInit {

  infoApi:any;

  formWeather: any;
  city: any;

  model:Model[]
  weatherData
  constructor(private weatherApi:SearchWeatherService ) { }

  ngOnInit() {
    let cidade = 'city='
    this.formWeather = new FormGroup({
      city: new FormControl("", Validators.compose([
        Validators.required
      ]))
    })
    this.weatherApi.getWeather(cidade, "São Paulo").subscribe((resposta)=>{
      this.infoApi = resposta;
      let resp = this.infoApi.data[0];
      this.weatherData = new Model(resp.temp,resp.city_name, resp.datetime, resp.weather.description)    
    })
  }

  getCity(dataName) {
    this.city = dataName.city;
    let cidade = 'city='
    this.weatherApi.getWeather(cidade, this.city).subscribe((resposta)=>{
      this.infoApi = resposta;
      let resp = this.infoApi.data[0];
      this.weatherData = new Model(resp.temp,resp.city_name, resp.datetime, resp.weather.description)
      console.log(this.weatherData)
    })
  }

}
