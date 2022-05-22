import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Airline } from '../models/airline';
import { Booking } from '../models/booking';
import { Discount } from '../models/discount';
import { Flight } from '../models/flight';
import { Passenger } from '../models/passenger';
import { Schedule } from '../models/schedule';
@Injectable({
  providedIn: 'root'
})
export class ScheduleService {
  
  

  constructor(private httpClient: HttpClient) { }

  searchSchedule(airlineid: any): Observable<Schedule[]> {

    return this.httpClient.get<Schedule[]>('http://localhost:5002/api/Airline/searchSchedule/' + airlineid);
  }
  addSchedule(schedule: Schedule): Observable<boolean> {
    debugger;
    console.log(schedule);
    return this.httpClient.post<boolean>('http://localhost:5002/api/Airline/addSchedule', schedule);
  }

  getAllFlights(): Observable<Flight[]> {

    return this.httpClient.get<Flight[]>('http://localhost:5002/api/Airline/getflights');
  }
  getAllBookings(id: number): Observable<Booking[]> {
   
    return this.httpClient.get<Booking[]>('http://localhost:5003/api/Flight/getticketpnr/' + id);
  }
  bookFlight(booking: Booking[]): Observable<boolean> {
   
    console.log("booking-" + booking);
    return this.httpClient.post<boolean>('http://localhost:5003/api/Flight/BookTicket', booking);
  }
  addFlight(flight: Flight): Observable<boolean> {
   
    return this.httpClient.post<boolean>('http://localhost:5002/api/Airline/addFlight', flight);
  }
  unBlock(airline: Airline): Observable<boolean> {
    return this.httpClient.post<boolean>('http://localhost:5002/api/Airline/unblock', airline);
  }
  Block(airline: Airline): Observable<boolean> {
    return this.httpClient.post<boolean>('http://localhost:5002/api/Airline/block', airline);
  }

  getAllPassengers(pnrId: any) :Observable<Passenger[]>{
     return this.httpClient.get<Passenger[]>('http://localhost:5003/api/Flight/getallpassenger/' + pnrId);
  }

  cancelBookings(pnrId: number):Observable<boolean> {
   
    return this.httpClient.post<boolean>('http://localhost:5003/api/Flight/cancelticket/' + pnrId ,'');
  }

  addDiscount(discounts:Discount ) :Observable<boolean>{
    return this.httpClient.post<boolean>('http://localhost:5003/api/Flight/addDiscount', discounts);
  }

  getAllDiscount():Observable<Discount> {
    return this.httpClient.get<Discount>('http://localhost:5003/api/Flight/getalldiscount');
  }
  applyDiscount(discountCode: any, amount: number):Observable<number> {
    let queryParams = new HttpParams();
    queryParams = queryParams.append("discountcode",discountCode);
    queryParams = queryParams.append("amount",amount);
    return this.httpClient.get<number>('http://localhost:5003/api/Flight/applyDiscount',{params:queryParams});
  }
 
}
