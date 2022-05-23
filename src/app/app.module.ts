import { NgModule , CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './navbar/navbar.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { RegisterComponent } from './component/register/register.component';
import { LoginComponent } from './component/login/login.component';
import { LogoutComponent } from './component/logout/logout.component';
import { HeaderComponent } from './component/header/header.component';
import { AddAirlineComponent } from './component/Airline/add-airline/add-airline.component';
import { DisplayAirlineComponent } from './component/Airline/display-airline/display-airline.component';
import { HttpClientModule } from '@angular/common/http';
import {MatCardModule} from '@angular/material/card';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { AirlinesComponent } from './component/Airline/airlines/airlines.component';
import { BookingsComponent } from './component/bookings/bookings.component';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import {MatRadioModule} from '@angular/material/radio';
import {MatSelectModule} from '@angular/material/select';
import {MatTableModule} from '@angular/material/table';
import { DisplayscheduleComponent } from './component/Schedule/displayschedule/displayschedule.component';
import { AddscheduleComponent } from './component/Schedule/addschedule/addschedule.component';
import { DatePipe } from '@angular/common';
import { ViewflightComponent } from './component/flight/viewflight/viewflight.component';
import { AddflightComponent } from './component/flight/addflight/addflight.component';
import { FlightComponent } from './component/flight/flight/flight.component';
import { DiscountComponent } from './component/discount/discount.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    RegisterComponent,
    LoginComponent,
    LogoutComponent,
    HeaderComponent,
    AddAirlineComponent,
    DisplayAirlineComponent,
        AirlinesComponent,
        BookingsComponent,
        DisplayscheduleComponent,
        AddscheduleComponent,
        ViewflightComponent,
        AddflightComponent,
        FlightComponent,
        DiscountComponent,
        
        
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatCardModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatRadioModule,
    MatSelectModule,
    MatTableModule
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
  ],
  
})
export class AppModule { }
