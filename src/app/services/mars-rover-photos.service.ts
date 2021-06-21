import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class MarsRoverPhotosService {
  constructor(private http: HttpClient) {}

  getPhotosFromDate(date: string) {
    const options = {
      params: new HttpParams().set('earth_date', date),
    };
    return this.http.get(
      'https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?api_key=DEMO_KEY&camera=FHAZ',
      options
    );
  }
}
