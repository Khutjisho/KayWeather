import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(public http: HttpClient) {}

  city = ""
  cityAr = []

  myWeather(city){
      return this.http.get('http://api.openweathermap.org/data/2.5/weather?q='+city+'&APPID=a42c3328c6260c60eabc00215221d8fc')
  }

  getLocation(){
    return this.cityAr
  }
}
