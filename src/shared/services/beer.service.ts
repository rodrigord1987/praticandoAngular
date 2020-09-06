import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BeerService {
  readonly apiUrl = 'https://api.punkapi.com/v2/beers/random';
  constructor(private httpService: HttpClient) { }

  getRandomBeer(): Observable<any> {
    return this.httpService.get(this.apiUrl);
  }
}
