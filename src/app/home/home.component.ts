import { Component } from '@angular/core';
import { WeatherService } from '../services/weather.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FormsModule, CommonModule],
  providers: [WeatherService],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  city: string = '';
  weatherData: any;
  errorMessage: string = '';

  constructor(private weatherService: WeatherService) {}

  getWeather() {
    if (!this.city) {
      this.errorMessage = 'Please enter a city name';
      return;
    }
    
    this.weatherService.getWeather(this.city).subscribe({
      next: (data) => {
        this.weatherData = data;
        this.errorMessage = '';
      },
      error: (error) => {
        this.errorMessage = 'Error fetching weather data';
        this.weatherData = null;
      }
    });
  }
}
