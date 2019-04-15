import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FlightListComponent } from './flight-list/flight-list.component';
import { FlightCreateComponent } from './flight-create/flight-create.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path:  "", pathMatch:  "full",redirectTo:  "home"},
  {path: "home", component: HomeComponent},
  {path: "flight-create", component: FlightCreateComponent},
  {path: "flight-list", component: FlightListComponent}  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }