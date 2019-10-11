import { Component } from '@angular/core';
import { WeatherService } from '../Service/weather.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(public weather: WeatherService) {}

  city: string =""
  wData

  namez
  picz
  tempz
  min
  max

getLocay()
{
this.weather.myWeather(this.city).subscribe((data) =>
{
  
  this.wData = data
  console.log(this.wData);
  
  this.namez = this.wData.weather[0].description
  console.log(this.namez);
  

  this.tempz = Math.round(this.wData.main.tempz - 273.15);
  this.min = Math.round(this.wData.main.tempz_min - 273.15);
  this.max = Math.round(this.wData.main.tempz_max - 273.15)
})
}
}


