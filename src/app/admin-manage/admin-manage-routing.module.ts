import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminManageComponent } from './admin-manage.component';

const routes: Routes = [{ path: '', component: AdminManageComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminManageRoutingModule { }
