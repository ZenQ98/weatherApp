import { Injectable } from '@angular/core';
import { Weather } from '../interface/weather';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  private BASE_URL = 'https://api.openweathermap.org/data/2.5/weather?q='

  private API_KEY = environment.apiKey;


  constructor(private http: HttpClient) { }

  getWeather(city: string): Observable<Weather> {
    return this.http.get<Weather>(`${this.BASE_URL}${city}&appid=${this.API_KEY}`)
  };

}

