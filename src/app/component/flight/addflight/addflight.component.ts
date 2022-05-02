import { Component, OnInit } from '@angular/core';
import { Airline } from 'src/app/models/airline';
import { Flight } from 'src/app/models/flight';
import { AirlineService } from 'src/app/services/airline.service';
import { ScheduleService } from 'src/app/services/schedule.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-addflight',
  templateUrl: './addflight.component.html',
  styleUrls: ['./addflight.component.css']
})
export class AddflightComponent implements OnInit {
  flight: Flight;
  airlines?:Airline[];
  airlineName?:string;
  airlineo=[];
  selectedObject: any = this.airlineo[0];

  constructor(private scheduleService: ScheduleService,private airlineService:AirlineService) {
    this.flight = new Flight();
    
   // this.airlineName = this.airlines[0]['airlineID'];
  }

  ngOnInit(): void {
    
    this.airlineService.getAllAirlinesAll().subscribe({
      next: (res) => { console.log(res); this.airlines = res },
      error: (e) => {
        console.error(e); Swal.fire(
          'Error!',
          'You clicked the button!',
          'error'
        )
      },

    })
  }
  addFlight() {
    
    this.flight.airlineId=5;
    this.flight.createdDate=new Date();
    this.flight.modifiedDate=new Date();
    console.log(this.flight);
    this.scheduleService.addFlight(this.flight).subscribe((res) => {
      console.log('The Add Flight Result:${res}');
      if (res = true) {
        Swal.fire(
          'Flight!',
          'Added successfully!',
          'success'
        )
        // this.routerService.gotoDisplayAirline();
      }
      // else {
      //   this.routerService.gotoLogin();
      // }
    })

  }
  
  
  consoleLog(airlineid:any) {
    console.log("log"+airlineid);
  }
  
}
