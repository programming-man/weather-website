import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'
import { Model } from '../app/model'
import { ModelFuture } from '../app/modelFuture'

@Injectable({
  providedIn: 'root'
})
export class SearchWeatherService {

  constructor(private apiUrl: HttpClient) { }

  private baseUrl = 'http://api.weatherbit.io/v2.0/current?'
  private dailyUrl = 'https://www.weatherbit.io/api/weather-history-daily'

  private key = 'country=BR&lang=pt&key=67d0293a42424f7e8d45ff2af10cdf52'

  getWeather(cityOrZip, searchValue): Observable<Model[]>{
    //retornando agora
    return this.apiUrl.get<Model[]>(this.baseUrl+`${cityOrZip}${searchValue}&${this.key}`)
  }

  // getDaily(initial, final): Observable<ModelFuture[]>{
  //   return this.dailyUrl.get<ModelFuture[]>(this.dailyUrl+`${initial}${final}&${this.key}`)
  // }
}

