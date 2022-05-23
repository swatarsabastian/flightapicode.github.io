import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Booking } from 'src/app/models/booking';
import { Passenger } from 'src/app/models/passenger';
import { ScheduleService } from 'src/app/services/schedule.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-bookings',
  templateUrl: './bookings.component.html',
  styleUrls: ['./bookings.component.css']
})
export class BookingsComponent implements OnInit {
  bookings?: Booking[];
  pnrId?: any;
  passengers?:Passenger[];
  options?: FormGroup | any;
  optionsp?: FormGroup | any;
  constructor(private scheduleService: ScheduleService) { }

  ngOnInit(): void {

    this.options = new FormGroup({
      pnr: new FormControl('')

    })

    this.optionsp = new FormGroup({
      pnrP: new FormControl('')

    })
  }

  onSubmitSearchBooking(options: any) {
    this.pnrId = options.pnr;
    console.log("PNR:" + this.pnrId);
    this.scheduleService.getAllBookings(this.pnrId).subscribe({
      next: (res) => {
        console.log(res); this.bookings = res;
        console.log(this.bookings);

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

  onSubmitPNR(id: any) {
    this.pnrId = id;
    console.log("PNRSearch:" + this.pnrId);
    this.scheduleService.getAllPassengers(this.pnrId).subscribe({
      next: (res) => {
        console.log(res); this.passengers = res;
        console.log(this.passengers);

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

  onSubmitCancelBooking(optionsp: any)
  {
    this.pnrId = optionsp.pnrP;
    console.log("cancelPNR:" + this.pnrId);
    this.scheduleService.cancelBookings(this.pnrId).subscribe({
      next: (res) => {
        console.log(res); 
        if (res = true) {
          Swal.fire(
            'Booking PNR!',
            'Deleted successfully!',
            'success'
          )}

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
