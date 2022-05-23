import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RouterService {
   

  constructor(private route:Router) { }

gotoLogin(){
  this.route.navigate(['login']);
}
gotoRegister(){
  this.route.navigate(['register']);
}
gotoDisplayAirline(){

  this.route.navigate(['display-airlines']);
}
gotoaddAirline(){
  this.route.navigate(['add-airlines']);
}
gotoAirlines(){
  this.route.navigate(['airlines']);
}
  gotoHeader(){
    this.route.navigate(['header']);
  }
    gotoNav(){
      this.route.navigate(['nav']);
    }
getUserToken(){
  return localStorage.getItem("USERTOKEN");
}
setUserToken(userToken: string) {
   localStorage.setItem("USERTOKEN",userToken);
} 
setUserRole(role: string|any) {
  localStorage.setItem("Role",role);
}
setUserRoleSession(isLoggedIn: boolean|any) {
  localStorage.setItem("isLoggedIn",isLoggedIn);
}
gettUserRoleSession() {
  sessionStorage.getItem("isLoggedIn")
}
getUserRole() {
  return localStorage.getItem("Role");
}
gotoBooking() {
  this.route.navigate(['booking']);
}
gotoViewSchedules() {
  this.route.navigate(['app-displayschedule']);
}
clearLocalStorage() {
  localStorage.clear();
  
}

reloadCurrentRoute() {
  let currentUrl = this.route.url;
  this.route.navigateByUrl('/', {skipLocationChange: true}).then(() => {
      this.route.navigate([currentUrl]);
      console.log(currentUrl);
  });
}
}