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

    return this.httpClient.get<Schedule[]>('https://airline20220428234318.azurewebsites.net/api/Airline/searchSchedule/' + airlineid);
  }
  addSchedule(schedule: Schedule): Observable<boolean> {
    debugger;
    console.log(schedule);
    return this.httpClient.post<boolean>('https://airline20220428234318.azurewebsites.net/api/Airline/addSchedule', schedule);
  }

  getAllFlights(): Observable<Flight[]> {

    return this.httpClient.get<Flight[]>('https://airline20220428234318.azurewebsites.net/api/Airline/getflights');
  }
  getAllBookings(id: number): Observable<Booking[]> {
   
    return this.httpClient.get<Booking[]>('https://flight20220429000029.azurewebsites.net/api/Flight/getticketpnr/' + id);
  }
  bookFlight(booking: Booking[]): Observable<boolean> {
   
    console.log("booking-" + booking);
    return this.httpClient.post<boolean>('https://flight20220429000029.azurewebsites.net/api/Flight/BookTicket', booking);
  }
  addFlight(flight: Flight): Observable<boolean> {
   
    return this.httpClient.post<boolean>('https://airline20220428234318.azurewebsites.net/api/Airline/addFlight', flight);
  }
  unBlock(airline: Airline): Observable<boolean> {
    return this.httpClient.post<boolean>('https://airline20220428234318.azurewebsites.net/api/Airline/unblock', airline);
  }
  Block(airline: Airline): Observable<boolean> {
    return this.httpClient.post<boolean>('https://airline20220428234318.azurewebsites.net/api/Airline/block', airline);
  }

  getAllPassengers(pnrId: any) :Observable<Passenger[]>{
     return this.httpClient.get<Passenger[]>('https://flight20220429000029.azurewebsites.net/api/Flight/getallpassenger/' + pnrId);
  }

  cancelBookings(pnrId: number):Observable<boolean> {
   
    return this.httpClient.post<boolean>('https://flight20220429000029.azurewebsites.net/api/Flight/cancelticket/' + pnrId ,'');
  }

  addDiscount(discounts:Discount ) :Observable<boolean>{
    return this.httpClient.post<boolean>('https://flight20220429000029.azurewebsites.net/api/Flight/addDiscount', discounts);
  }

  getAllDiscount():Observable<Discount> {
    return this.httpClient.get<Discount>('https://flight20220429000029.azurewebsites.net/api/Flight/getalldiscount');
  }
  applyDiscount(discountCode: any, amount: number):Observable<number> {
    let queryParams = new HttpParams();
    queryParams = queryParams.append("discountcode",discountCode);
    queryParams = queryParams.append("amount",amount);
    return this.httpClient.get<number>('https://flight20220429000029.azurewebsites.net/api/Flight/applyDiscount',{params:queryParams});
  }
 
}
