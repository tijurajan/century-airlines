import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { HttpClient } from '@angular/common/http';
import {Flight} from './flight';
import { AuthenticationService } from '../_services';
import { User, Role } from '../_models';


@Component({
  selector: 'app-flight-list',
  templateUrl: './flight-list.component.html',
  styleUrls: ['./flight-list.component.css']
})
export class FlightListComponent implements OnInit {
  currentUser: User;
  flights: Flight[];
  selectedFlight;
  booking: {flight,lastname, firstname, passengercount} = {flight:this.selectedFlight,lastname:"",firstname:"",passengercount:0};
  

  constructor(private dataservice: DataService,private authenticationService: AuthenticationService) { 
    this.authenticationService.currentUser.subscribe(x => this.currentUser = x);
  }

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
  get isAdmin() {
    return this.currentUser && this.currentUser.role === Role.Admin;
}
delete(flight){
  console.log("DELETE");
  
  this.dataservice.deleteFlight(flight)
  .subscribe(x=> console.log(x));
  
  
}
  public selectFlight(flight){
    this.selectedFlight = flight;
  }
  
}
