import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Flight} from './flight-list/flight';
import {Booking} from './flight-list/booking';
import { HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Authorization': 'my-auth-token'
  })
};
@Injectable({
  providedIn: 'root'
})
export class DataService {

  flights = [
    {id: 1, name: "Singapore Airlines",number: "SL317" ,description: "Welcome to Singapore", capacity: 238},
    
  ];

  constructor(private http: HttpClient) { }
public getFlight(): Observable<Flight[]>{
  return this.http.get<Flight[]>('/umbraco/api/flightsdata/getflights');
}

  //public getFlights():Array<{id, name,number, description, capacity}>{
  //  return this.flights;
  //}
  public createFlight (flight: Flight): Observable<Flight> {
    return this.http.post<Flight>('/umbraco/api/flightsdata/createflight', flight, httpOptions)
      .pipe(
       
      );
  }

  public createBooking (booking: Booking): Observable<Booking> {
       return this.http.post<Booking>('/umbraco/api/flightsdata/CreateBooking', booking, httpOptions)
      .pipe(
       
      );
  }

  public deleteFlight (flight: Flight): Observable<Flight> {
    return this.http.post<Flight>('/umbraco/api/flightsdata/DeleteFlight', flight.id, httpOptions)
   .pipe(
    
   );
}




}
