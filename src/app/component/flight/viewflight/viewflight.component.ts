import { Component, OnInit } from '@angular/core';
import { Flight } from 'src/app/models/flight';
import { ScheduleService } from 'src/app/services/schedule.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-viewflight',
  templateUrl: './viewflight.component.html',
  styleUrls: ['./viewflight.component.css']
})
export class ViewflightComponent implements OnInit {
  flights?: Flight[];
  airlineName?: string;
  constructor(private scheduleService: ScheduleService) { }

  ngOnInit(): void {


    this.scheduleService.getAllFlights().subscribe({
      next: (res) => {
        console.log(res); this.flights = res
        // if (this.flights[0].airlineId == 5) {
        //   this.airlineName = "SpiceJet";

        // }
      },
      error: (e) => {
        console.error(e); Swal.fire(
          'Error!',
          'You clicked the button!',
          'error'
        )
      },

    })
  }

}
