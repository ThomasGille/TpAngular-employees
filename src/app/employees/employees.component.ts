import { Component, OnInit } from '@angular/core';
import { Employee } from '../models/employee';
import { EmployeeService } from '../services/employee.service';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {
  public employees: Employee [];
  title: string;
  error: string;

  constructor(private employeeService: EmployeeService) { }

  ngOnInit() {
    this.title = 'Liste des employés';
    this.getEmployees();
  }
  getEmployees(): void {
    this.employeeService.getEmployees().subscribe((data) => {
      this.employees = data;
    }, (error) => {
      this.error = error.message;
    });

  }

}
