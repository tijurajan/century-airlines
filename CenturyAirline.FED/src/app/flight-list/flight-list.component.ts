import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-flight-list',
  templateUrl: './flight-list.component.html',
  styleUrls: ['./flight-list.component.css']
})
export class FlightListComponent implements OnInit {

  flights;
  selectedFlight;

  constructor(public dataService: DataService) { }

  ngOnInit() {
    this.flights = this.dataService.getFlights();    
  }
  public selectFlight(flight){
    this.selectedFlight = flight;
  }
}
