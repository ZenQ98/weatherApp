import { Injectable } from '@angular/core';
import { Weather } from '../interface/weather';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  private BASE_URL = 'https://api.openweathermap.org/data/2.5/weather?q='

  private API_KEY = '94aad21b6391b8ae6224801640fc1c2d'


  constructor(private http: HttpClient) { }

  getWeather(city: string): Observable<Weather> {
    return this.http.get<Weather>(`${this.BASE_URL}${city}&appid=${this.API_KEY}`)
  };

}

