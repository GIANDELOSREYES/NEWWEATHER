import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  private APIkey = 'ff0a86e7d906a69c52115ad8ec9a6a64';
  private APIUrl = 'https://api.weatherstack.com/current';

  constructor(private http: HttpClient) { }
  getWeather(city: string): Observable<any> {
    const url = `${this.APIUrl}?access_key=${this.APIkey}&query=${city}`;
    return this.http.get<any>(url);
  }


}
