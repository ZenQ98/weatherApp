import { Component, OnInit } from '@angular/core';
import { Weather } from './interface/weather';
import { WeatherService } from './service/weather.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  city = 'Barcelona'

  temperature: Number = 0
  weatherState = ''

  weatherRes: Weather | undefined

  constructor(private weatherService: WeatherService) { }

  async ngOnInit(): Promise<void> {
    this.getData()
  }

  getData(): any {
    console.log(this.city)
    this.weatherService.getWeather(this.city).subscribe((data: Weather) => {
      this.weatherRes = data;
      this.temperature = Number((this.weatherRes.main.temp - 273).toFixed(2));
      this.weatherState = String(this.weatherRes.weather[0].main)
      console.log(this.weatherRes.weather[0].description)
    })
  }
}
