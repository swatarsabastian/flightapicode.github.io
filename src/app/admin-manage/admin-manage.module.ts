import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminManageRoutingModule } from './admin-manage-routing.module';
import { AdminManageComponent } from './admin-manage.component';


@NgModule({
  declarations: [
    AdminManageComponent
  ],
  imports: [
    CommonModule,
    AdminManageRoutingModule
  ]
})
export class AdminManageModule { }
