import { Component, OnInit } from '@angular/core';
import { RouterService } from 'src/app/services/router.service';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';
import { Schedule } from 'src/app/models/schedule';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { DatePipe } from '@angular/common';
import { ScheduleService } from 'src/app/services/schedule.service';
import Swal from 'sweetalert2';
import { Booking } from 'src/app/models/booking';
import { Passenger } from 'src/app/models/passenger';
import { Discount } from 'src/app/models/discount';
//import { DatePipe } from '@angular/common';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  userRole: string | any;
  options: FormGroup;
  optionsp: FormGroup | any;
  optionsD: FormGroup | any;
  hideRequiredControl = new FormControl(false);
  floatLabelControl = new FormControl('auto');
  disCode: any;
  way: any;
  fromcity: any;
  tocity: any;
  class: any;
  date: any;
  schedules?: Schedule[];
  schedule: Schedule | any;
  bookings?: Booking | any;
  //passengers?:Passenger[];
  //passengersA:Array<Booking>=[];
  passenger: Passenger | any;
  passengers: Array<Passenger>[];
  discount: Discount | any;

  schedulefrnt?: Schedule;
  classObj: any;
  isShowDivIf = false;
  emailFormControl: any;
  amount?: number | any;
  receivedAmt?: number | any;
  // pass: Passenger = {};
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  //dataSource ="";
  //,public datepipe: DatePipe
  constructor(fb: FormBuilder, private routerService: RouterService, private userService: UserService, private datePipe: DatePipe, private scheduleService: ScheduleService) {
    this.bookings = new Booking();

    this.passenger = new Passenger();
    this.passengers = [];

    this.options = fb.group({
      hideRequired: this.hideRequiredControl,
      floatLabel: this.floatLabelControl,
    });
  }


  ngOnInit(): void {

    this.userRole = this.routerService.getUserRole();
    this.options = new FormGroup({
      way: new FormControl(''),
      fromcity: new FormControl(''),
      tocity: new FormControl(''),
      class: new FormControl(''),
      dateF: new FormControl('')
    })
    this.optionsp = new FormGroup({
      name: new FormControl(''),
      gender: new FormControl(''),
      emailId: new FormControl(''),
      seatNo: new FormControl(''),
      seatType: new FormControl(''),
      mealPreference: new FormControl(''),
      discountIdP: new FormControl('')

    })
    this.optionsD = new FormGroup({
      discountId: new FormControl('')


    })
  }


  onSubmit(options: any) {
    this.way = options.way;    //  this.loginInfo.name=this.loginForm.email;
    this.fromcity = options.fromcity;
    this.tocity = options.tocity;
    this.class = options.class;
    //this.date= new Date();
    debugger;
    this.date = new Date(options.dateF);
    //this.date= options.dateF;
    this.date = this.datePipe.transform(this.date, 'yyyy-MM-dd');

    console.log(this.date);

    this.userService.searchFlight(this.date, this.fromcity, this.tocity, this.way).subscribe
      ({
        next: (res) => {
          console.log(res);
          this.schedules = res;
          console.error(this.schedules);

          // this.routerService.setUserToken(userRequiredToken["token"]);
          if (this.class == "Economy")
            this.classObj = true;
          else
            this.classObj = false;

        },
        error: (e) => {

        },

      })



  }

  onSubmitC(id: any) {

    this.schedulefrnt = id;
    this.isShowDivIf = true;
    console.log("cardsubmuit" + this.schedulefrnt?.airlineId);

  }

  onSubmitPassenger(optionsp: any) {
    debugger;
    console.log("submitt" + this.schedulefrnt?.airlineId);
    console.log("submitt11" + this.optionsp.value);
    //console.log(this.schedules[0].flightid);
    this.bookings.airlineId = this.schedulefrnt?.airlineId;
    this.bookings.flightid = this.schedulefrnt?.flightId;
    this.bookings.paymentMode = 'C';
    this.bookings.tripeType = 'R';
    this.bookings.instrumnetsUsed = 'A20';
    this.bookings.createdDate = new Date();
    this.bookings.modifiedDate = new Date();

    this.passenger = this.optionsp.value;
    this.passenger.createdDate = new Date();
    this.passenger.modifiedDate = new Date();
    this.passenger.discountId = this.optionsp.discountIdP;

    if (this.class == "Economy")
    this.amount = this.schedulefrnt?.ticketCostForNonBusiness;
  else
    this.amount = this.schedulefrnt?.ticketCostForNonBusiness;
    this.passenger.price=this.amount;
    this.passenger.totalPrice=this.receivedAmt;


    this.passengers.push(this.passenger);
    this.bookings.passengers = this.passengers;
    console.log("passengerobject:" + this.passengers);
    console.log("bookingsobject:" + this.bookings);

    this.scheduleService.bookFlight(this.bookings).subscribe
      ({
        next: (res) => {
          console.log(res);
          if (res = true) {
            Swal.fire(
              'Booking!',
              'Done successfully!',
              'success'
            )

            // this.routerService.gotoViewSchedules();
          }

        },
        error: (e) => {

        },

      })

  }
  onSubmitDiscountCode(optionsD: any) {
    this.disCode = optionsD.discountId;
    debugger
    if (this.class == "Economy")
      this.amount = this.schedulefrnt?.ticketCostForNonBusiness;
    else
      this.amount = this.schedulefrnt?.ticketCostForNonBusiness;
    this.scheduleService.applyDiscount(this.disCode, this.amount).subscribe
      ({
        next: (res) => {
          console.log(res);
          this.receivedAmt = res;
          console.error("discou" + res);




        },
        error: (e) => {

        },

      })

  }


}