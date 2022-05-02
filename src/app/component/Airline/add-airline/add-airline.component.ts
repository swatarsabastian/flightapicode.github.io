import { Component, OnInit } from '@angular/core';
import { Airline } from 'src/app/models/airline';
import { AirlineService } from 'src/app/services/airline.service';
import { RouterService } from 'src/app/services/router.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-airline',
  templateUrl: './add-airline.component.html',
  styleUrls: ['./add-airline.component.css']
})
export class AddAirlineComponent implements OnInit {

  // airlines:Airline[];
  // airline:Airline;
  airline:Airline;
  
  constructor(private airlineService:AirlineService,private routerService:RouterService) { 
    this.airline =new Airline();
   // this.airlines=[];
  }

  ngOnInit(): void {
  
    //  this.airline.AirlineID=7;
    //this.airline.airlineName = 'Indigooa';
   // this.airline.address = 'adress indigo';
   // this.airline.contactNumber = "323453454";
   // this.airline.isBlocked = false;
    this.airline.createdDate = new Date();
   // this.airline.createdBy = 3;
    this.airline.modifiedDate = new Date();
    //this.airline.modifiedBy = 2;
   // this.airline.push(this.airline);
   
  }
  addAirline() 
  {
    console.log(this.airline);
    this.airlineService.addAirline(this.airline).subscribe((res) =>{
    console.log('The Add Airline Result:${res}');
    if(res=true)
    {
      Swal.fire(
        'Airline!',
        'Added successfully!',
        'success'
      )
      this.routerService.gotoDisplayAirline();
    }
    else
    {
      this.routerService.gotoLogin();
    }

   
  })

  }

}

