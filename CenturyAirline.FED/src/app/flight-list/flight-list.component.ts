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

  constructor(private dataservice: DataService) { }

  ngOnInit(): void  {
    this.dataservice.getFlight()
    .subscribe(
     (data : any[]) =>{ this.flights = data;
      console.log(data)
    
  });   
  }
  public selectFlight(flight){
    this.selectedFlight = flight;
  }
}
