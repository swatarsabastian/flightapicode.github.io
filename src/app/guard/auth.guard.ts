import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { RouterService } from '../services/router.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private routerService:RouterService ){

  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    let userTokenExist=this.routerService.getUserToken();
     let  userTokenStatus:boolean=getUSerTokenStatus(userTokenExist);

     if(userTokenStatus)
     {
       return true}
     else
     {
      
      this.routerService.gotoLogin();
     
     }
     return userTokenStatus;
    
  }
 
  
}
function getUSerTokenStatus (userTokenExist:string|null):boolean {
    if(userTokenExist!=null)
    {
      return true;
    }
    else
    {
      return false;
    }
}
