import { DatePipe } from '@angular/common';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Airline } from 'src/app/models/airline';
import { Flight } from 'src/app/models/flight';
import { Schedule } from 'src/app/models/schedule';
import { AirlineService } from 'src/app/services/airline.service';
import { RouterService } from 'src/app/services/router.service';
import { ScheduleService } from 'src/app/services/schedule.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-addschedule',
  templateUrl: './addschedule.component.html',
  styleUrls: ['./addschedule.component.css']
})
export class AddscheduleComponent implements OnInit {
  airlines?: Airline[];
  flights?: Flight[];
  options: any;
  schedules: Schedule;
  airlineid: any;
  flightid: any;
  from: any;
  to: any;
  coastB: any;
  coastNB: any;
  dateA: any;
  dateD: any;
  arrivalTime?: Date | any;
  departureTime?: Date | any;
  latest_date?: Date | any;
  latest_date1?: Date | any;
  constructor(private airlineService: AirlineService, private routerService: RouterService, private datePipe: DatePipe, private scheduleService: ScheduleService) {

    this.schedules = new Schedule();
  }

  ngOnInit(): void {
    this.options = new FormGroup({
      airlineid: new FormControl(''),
      flightid: new FormControl(''),
      from: new FormControl(''),
      to: new FormControl(''),
      coastB: new FormControl(''),
      coastNB: new FormControl(''),
      dateD: new FormControl(''),
      dateA: new FormControl(''),
    })


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

    this.scheduleService.getAllFlights().subscribe({
      next: (res) => { console.log(res); this.flights = res },
      error: (e) => {
        console.error(e); Swal.fire(
          'Error!',
          'You clicked the button!',
          'error'
        )
      },

    })
  }

  onSubmit(options: any) {

    this.schedules = this.options.value;
    this.schedules.Isroundtrip = 'Y';
    this.schedules.createdDate = new Date();
    this.schedules.modifiedDate = new Date();
    this.schedules.mealPreferences = 'V';
    this.schedules.scheduledDays = "ALL DAYS";
    this.schedules.modifiedBy = 2;
    this.schedules.createdBy = 2;
    this.arrivalTime = options.dateA;
    this.departureTime = options.dateD;

    this.schedules.arrivalTime = new Date(this.arrivalTime);
    this.schedules.departureTime = new Date(this.departureTime);
    this.latest_date = this.datePipe.transform(this.schedules.departureTime, 'yyyy-MM-dd');
    this.latest_date1 = this.datePipe.transform(this.schedules.arrivalTime, 'yyyy-MM-dd');
    this.schedules.departureTime = new Date(this.latest_date);
    this.schedules.arrivalTime = new Date(this.latest_date1);
    console.log("Time" + this.schedules.departureTime);
    this.schedules.startFrom = options.from;
    this.schedules.destination = options.to;
    this.schedules.ticketCostForBusiness = options.coastB;
    this.schedules.ticketCostForNonBusiness = options.coastNB;
    //   console.log(  this.schedules.arrivalTime); this.datePipe.transform(options.dateA, 'yyyy-MM-dd HH:mm:ss');


    console.log(this.options.value);
    //  this.schedules.departureTime= this.datePipe.transform(this.schedules.departureTime, 'yyyy/MM/dd ');
    //  this.schedules.arrivalTime= this.datePipe.transform(this.schedules.arrivalTime, 'yyyy/MM/dd');

    debugger;
    this.scheduleService.addSchedule(this.schedules).subscribe
      ({
        next: (res) => {
          console.log(res);
          if (res = true) {
            Swal.fire(
              'Schedule!',
              'Added successfully!',
              'success'
            )

            this.routerService.gotoViewSchedules();
          }

        },
        error: (e) => {

        },

      })

  }



}

