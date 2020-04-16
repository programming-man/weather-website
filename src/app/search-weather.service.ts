import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { HttpHeaders } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class SearchWeatherService {

  constructor(private apiUrl: HttpClient) { }

  private baseUrl = 'http://api.weatherbit.io/v2.0/current?'
  
  private key = 'country=BR&lang=pt&key=67d0293a42424f7e8d45ff2af10cdf52'


  getWeather(cityOrZip, searchValue){
    const headers = new HttpHeaders()
      .set('content-type', 'application/json')
      .set('Access-Control-Allow-Origin', '*');

    this.baseUrl+cityOrZip+searchValue+this.key
    console.log('Entrou na GetWeather');
    return this.apiUrl.get(this.baseUrl+cityOrZip+searchValue+this.key)
  }

}

