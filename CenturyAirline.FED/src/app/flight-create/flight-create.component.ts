import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-flight-create',
  templateUrl: './flight-create.component.html',
  styleUrls: ['./flight-create.component.css']
})
export class FlightCreateComponent implements OnInit {

  flight : {id, name, description, email} = {id: null, name: "", description: "", email: ""};

  constructor(public dataService: DataService) { }

  ngOnInit() {
  }

  createFlight(){
    console.log(this.flight);
    this.dataService.createFlight(this.flight);
    this.flight = {id: null, name: "", description: "", email: ""};

  }
}