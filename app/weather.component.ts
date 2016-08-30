import { Component }        from 'angular2/core';
import { JSONP_PROVIDERS }  from 'angular2/http';
import { Observable }       from 'rxjs/Observable';
import { Subject }          from 'rxjs/Subject';
import { WeatherService } from './weather.service';

import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'my-weather',
  template: `
    <h1>Weather for Your Quest</h1>
    <p><i>Fetches after each keystroke</i></p>
    <input #city (keyup)="searchWeather(city.value)"/>
    <h3>{{ items.query?.results?.channel?.item?.condition?.temp }} Degrees</h3>
  `,
  providers: [JSONP_PROVIDERS, WeatherService]
})

export class WeatherComponent {
  private searchTermStream = new Subject<string>();

  constructor (private weatherService: WeatherService) {}

  searchWeather (city: string)
  {this.searchTermStream.next(city); }

  items = this.searchTermStream
    .debounceTime(1000)
    .distinctUntilChanged()
    .switchMap((city: string) => this.weatherService.search(city))
    .subscribe(data => {console.log(data); this.items =  data});;
}
