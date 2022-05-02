import { fn } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { Airline } from 'src/app/models/airline';
import { Schedule } from 'src/app/models/schedule';
import { AirlineService } from 'src/app/services/airline.service';
import { RouterService } from 'src/app/services/router.service';
import { ScheduleService } from 'src/app/services/schedule.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-display-airline',
  templateUrl: './display-airline.component.html',
  styleUrls: ['./display-airline.component.css']
})
export class DisplayAirlineComponent implements OnInit {
  airlines?: Airline[];
  airlineid?: number;
  schedules?: Schedule[];
  airlinefrnt?: Airline | any;
  isBlock=true;
  constructor(private airlineService: AirlineService, private routerService: RouterService, private scheduleService: ScheduleService) {

    this.airlinefrnt = new Airline();
  }

  ngOnInit(): void {

    this.airlineService.getAllAirlines().subscribe({
      next: (res) => { console.log(res); this.airlines = res 
      
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

  onSubmitViewSchedule(id: any) {
    this.airlineid = id;
    this.scheduleService.searchSchedule(this.airlineid).subscribe({
      next: (res) => {
        console.log(res); this.schedules = res
      },
      error: (e) => {
        console.error(e); Swal.fire(
          'Error!',
          'You clicked the button!',
          'error'
        )
      },

    })

    // this.scheduleService.unBlock(this.airlineid).subscribe({
    //   next: (res) => { console.log(res); this.airlin = res },
    //   error: (e) => {
    //     console.error(e); Swal.fire(
    //       'Error!',
    //       'You clicked the button!',
    //       'error'
    //     )
    //   },

    // })
  }

  onSubmitU(id: any) {
    debugger;
    this.airlinefrnt = id;
    //this.isShowDivIf = true;
    console.log("cardsubmuit" + this.airlinefrnt);
    this.scheduleService.unBlock(this.airlinefrnt).subscribe({
      next: (res) => {
        console.log(res);
        if (res = true) {
          Swal.fire(
            'Airline!',
            'Unblocked successfully!',
            'success'
          )
          this.isBlock=true;
          this.routerService.gotoDisplayAirline();
        }

      },


    })


  }
  onSubmitB(id: any) {
    debugger;
    this.airlinefrnt = id;
    //this.isShowDivIf = true;
    console.log("cardsubmuit" + this.airlinefrnt);
    this.scheduleService.unBlock(this.airlinefrnt).subscribe({
      next: (res) => {
        console.log(res);
        if (res = true) {
          Swal.fire(
            'Airline!',
            'Blocked successfully!',
            'success'
          )
          this.isBlock=false;
          this.routerService.gotoDisplayAirline();
        }

      },


    })


  }
}
