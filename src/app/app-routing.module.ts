import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AddAirlineComponent } from './component/Airline/add-airline/add-airline.component';
import { AirlinesComponent } from './component/Airline/airlines/airlines.component';
import { DisplayAirlineComponent } from './component/Airline/display-airline/display-airline.component';
import { BookingsComponent } from './component/bookings/bookings.component';
import { DiscountComponent } from './component/discount/discount.component';
import { AddflightComponent } from './component/flight/addflight/addflight.component';
import { FlightComponent } from './component/flight/flight/flight.component';
import { ViewflightComponent } from './component/flight/viewflight/viewflight.component';
import { HeaderComponent } from './component/header/header.component';
import { LoginComponent } from './component/login/login.component';
import { LogoutComponent } from './component/logout/logout.component';
import { RegisterComponent } from './component/register/register.component';
import { AddscheduleComponent } from './component/Schedule/addschedule/addschedule.component';
import { DisplayscheduleComponent } from './component/Schedule/displayschedule/displayschedule.component';
import { AuthGuard } from './guard/auth.guard';
import { NavbarComponent } from './navbar/navbar.component';

const routes: Routes = [
  
  {path:'login',component:LoginComponent},
 {path:'',redirectTo:'/login',pathMatch:'full'},
 //{path:'',component:LoginComponent},
  {path:'register',component:RegisterComponent},
   {path:'logout',component:LogoutComponent},
  {path:'add-airlines',component:AddAirlineComponent},//
  {path:'display-airlines',component:DisplayAirlineComponent},
  // {path:'nav',component:NavbarComponent},
  {path:'header',component:HeaderComponent,canActivate: [AuthGuard]},
  {path:'airlines',component:AirlinesComponent,canActivate: [AuthGuard]},
  {path:'booking',component:BookingsComponent,canActivate: [AuthGuard]},
   {path:'displayairlines',component:DisplayAirlineComponent,canActivate: [AuthGuard]},
   {path:'add-schedule',component:AddscheduleComponent,canActivate: [AuthGuard]},
   {path:'app-displayschedule',component:DisplayscheduleComponent,canActivate: [AuthGuard]},
   {path:'displayflight',component:ViewflightComponent,canActivate: [AuthGuard]},
   {path:'addflight',component:AddflightComponent,canActivate: [AuthGuard]},
   {path:'flight',component:FlightComponent,canActivate: [AuthGuard]},
   {path:'adddiscount',component:DiscountComponent,canActivate: [AuthGuard]},
   
  
  { path: 'user-manage', loadChildren: () => import('./user-manage/user-manage.module').then(m => m.UserManageModule) },
  
  { path: 'admin-manage', loadChildren: () => import('./admin-manage/admin-manage.module').then(m => m.AdminManageModule) }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
