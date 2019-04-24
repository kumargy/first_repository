import { Component } from '@angular/core';
import { EmployeeService } from './services/employee.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'EmpManagementSys-Gyanendra';
  todayDate;
  constructor(private employeeService:EmployeeService){

  }
  ngOnInit(){
    this.todayDate=this.employeeService.getTodaysDate();
  }
}
