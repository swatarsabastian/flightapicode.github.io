import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Discount } from 'src/app/models/discount';
import { ScheduleService } from 'src/app/services/schedule.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-discount',
  templateUrl: './discount.component.html',
  styleUrls: ['./discount.component.css']
})
export class DiscountComponent implements OnInit {
  options?: FormGroup | any;
  discounts?: Discount | any;
  date?: Date | any;
  dateTo?: Date | any;
  constructor(private scheduleService: ScheduleService, public datepipe: DatePipe) {

    this.discounts = new Discount();

  }

  ngOnInit(): void {
    this.options = new FormGroup({
      discountCode: new FormControl(''),
      discountAmt: new FormControl(''),
      validFrom: new FormControl(''),
      validTo: new FormControl('')

    })
  }
  onSubmitDiscount(options: any) {
    debugger;
    this.discounts = this.options.value;
    this.date = options.validFrom;
    this.dateTo = options.validTo;
    this.discounts.validFrom = new Date(this.date);
    this.discounts.validTo = new Date(this.dateTo);
    this.discounts.createdDate = new Date();
    this.discounts.modifiedDate = new Date();
    this.discounts.amount=options.discountAmt;
    this.scheduleService.addDiscount(this.discounts).subscribe({
      next: (res) => {
        console.log(res);
        if (res = true) {
          Swal.fire(
            'Discount !',
            'Added successfully!',
            'success'
          )
        }

      },
      error: (e) => {
        console.error(e); Swal.fire(
          'Error!',
          'You clicked the button!',
          'error'
        )
      },

    })

    this.scheduleService.getAllDiscount().subscribe({
      next: (res) => { console.log(res); this.discounts = res },
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
