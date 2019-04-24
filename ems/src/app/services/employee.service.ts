import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Employee } from '../models/employee';


@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http:HttpClient) { }
  baseUrl="http://localhost:8081/api/employees";

  getEmployees(){
        return this.http.get<Employee[]>(this.baseUrl+"/empList");
    
  }
  createEmployee(employee:Employee){
    return this.http.post(this.baseUrl+"/saveEmp",employee,{responseType:'text'});
  }
  deleteEmployee(id:number){
    return this.http.delete(this.baseUrl+"/deleteEmp/"+id);
  }
  getEmpById(id:number){
  return this.http.get<Employee>(this.baseUrl+"/getEmp/"+id);
  
  }
  getTodaysDate(){
    return new Date();
   }

   }
