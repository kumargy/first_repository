import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListEmployeeComponent } from './components/list-employee/list-employee.component';
import { AddEmployeeComponent } from './components/add-employee/add-employee.component';
import { EditEmployeeComponent } from './components/edit-employee/edit-employee.component';
import { EMSComponent } from './components/ems/ems.component';

const routes: Routes = [
  {path:"",component:EMSComponent},
  {path:"ems",component:EMSComponent},
  {path:"list-employee",component:ListEmployeeComponent},
  {path:"add-employee",component:AddEmployeeComponent},
  {path:"edit-employee",component:EditEmployeeComponent}
   ];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

