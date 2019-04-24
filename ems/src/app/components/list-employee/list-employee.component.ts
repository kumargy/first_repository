import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/models/employee';
import { EmployeeService } from 'src/app/services/employee.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-employee',
  templateUrl: './list-employee.component.html',
  styleUrls: ['./list-employee.component.css']
})
export class ListEmployeeComponent implements OnInit {
employees:Employee[];
  constructor(private employeeService:EmployeeService,private router:Router) { }

  ngOnInit() {
   //if (localStorage.getItem("username") != null) {
    console.log("test");
       this.employeeService.getEmployees().subscribe(data => { this.employees = data; });
      // console.log(this.employees);
   
  }
  createEmployee(): void {
    this.router.navigate(["add-employee"]);
  }

}
