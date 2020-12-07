import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }

  getBrewries(){
    return this.http.get('https://api.openbrewerydb.org/breweries');
  }
}
