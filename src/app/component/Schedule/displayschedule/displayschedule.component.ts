import { Component, Input, OnInit } from '@angular/core';
import { Schedule } from 'src/app/models/schedule';

@Component({
  selector: 'app-displayschedule',
  templateUrl: './displayschedule.component.html',
  styleUrls: ['./displayschedule.component.css']
})
export class DisplayscheduleComponent implements OnInit {
  @Input() schedules:any; 
  
  constructor() { }

  ngOnInit(): void {
    
    
  }

}
