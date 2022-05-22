import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Schedule } from '../models/schedule';
import { User } from '../models/user';
import { UserLoginInfo } from '../models/user-login-info';

@Injectable({
  providedIn: 'root'
})
export class UserService {
   

  constructor(private httpClient:HttpClient) { }
  LoginUser(loginInfo: UserLoginInfo):Observable<string>
   {
     console.log(`User Login Detail in service layer ${loginInfo}`);
  return this.httpClient.post<string>('http://localhost:5000/api/User/login',loginInfo);
  }

  registerUser(user:User):Observable<boolean> {
    return this.httpClient.post<boolean>('http://localhost:5000/api/User/registerUser',user);
  }

  getUser(name: any):Observable<User> {
 
   console.log(name);
   // const opts = { params: new HttpParams({fromString: "abc"}) };
    return this.httpClient.get<User>('http://localhost:5000/api/User/GetUserByName/'+name);
  }


  searchFlight(date: any, fromcity: any, tocity: any, way: any):Observable<Schedule[]> {
   
    let queryParams = new HttpParams();
    queryParams = queryParams.append("fromdate",date);
    queryParams = queryParams.append("source",fromcity);
    queryParams = queryParams.append("destination",tocity);
    queryParams = queryParams.append("RoundTrip",'true');
    return this.httpClient.get<Schedule[]>('http://localhost:5002/api/Airline/searchSchedule',{params:queryParams});
  }
  //https://airline20220428234318.azurewebsites.net/api/Airline/searchSchedule
 
}
//${term}