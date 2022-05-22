import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Airline } from '../models/airline';

@Injectable({
  providedIn: 'root'
})
export class AirlineService {
  

  constructor(private httpClient:HttpClient) { }

  addAirline(airline:Airline):Observable<boolean>
   {
     console.log(airline);
      return this.httpClient.post<boolean>('http://localhost:5002/api/Airline/addAirline',airline);
     
   }
  getAllAirlines():Observable<Airline[]>
   {
    return this.httpClient.get<Airline[]>('http://localhost:5002/api/Airline/getallAirlines');
   }

   getAllAirlinesAll():Observable<Airline[]>
   {
    return this.httpClient.get<Airline[]>('http://localhost:5002/api/Airline/getallAirlinesAll');
   }
}
