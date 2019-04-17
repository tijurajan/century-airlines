import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { from } from 'rxjs';

@Component({
  selector: 'app-flight-create',
  templateUrl: './flight-create.component.html',
  styleUrls: ['./flight-create.component.css']
})
export class FlightCreateComponent implements OnInit {

  departurecities: null;
  flight : {id, name,number, description, capacity, departurecity, arrivalcity, starttime, endtime } = {id: null, name: "", number:"", description: "", capacity: null, departurecity: "", arrivalcity: "", starttime:"", endtime :""};

  constructor(public dataService: DataService) { }

  ngOnInit() {
  }

  createFlight(){
    console.log(this.flight);
    this.dataService.createFlight(this.flight)
    .subscribe(x=> console.log(x));

    this.flight = {id: null, name: "", number:"", description: "", capacity: null, departurecity: "", arrivalcity: "", starttime:"", endtime :""};

  }
}