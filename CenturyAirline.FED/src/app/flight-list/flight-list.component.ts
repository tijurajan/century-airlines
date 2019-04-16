import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { HttpClient } from '@angular/common/http';
import {Flight} from './flight'



@Component({
  selector: 'app-flight-list',
  templateUrl: './flight-list.component.html',
  styleUrls: ['./flight-list.component.css']
})
export class FlightListComponent implements OnInit {

  flights: Flight[];
  selectedFlight;
  booking: {flight,lastname, firstname, passengercount} = {flight:this.selectedFlight,lastname:"",firstname:"",passengercount:0};
  

  constructor(private dataservice: DataService) { }

  ngOnInit(): void  {
    this.dataservice.getFlight()
    .subscribe(
     (data : any[]) =>{ this.flights = data;
      console.log(data)
    
  });   
  }

  createBooking(selectedFlight){
    console.log(this.booking);
    this.booking.flight = selectedFlight;
    this.dataservice.createBooking(this.booking)
    .subscribe(x=> console.log(x));
    this.booking = {flight:this.selectedFlight,lastname:"",firstname:"",passengercount:0};
  }

  public selectFlight(flight){
    this.selectedFlight = flight;
  }
  
}
