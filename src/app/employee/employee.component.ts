import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Location } from '@angular/common';


import { EmployeeService } from '../services/employee.service';
import { CommonService } from '../services/common.service';

import { Employee } from '../models/employee';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  employee: Employee;
  emp_id: number;
  title: string;
  error: string;

  constructor(
    private router: Router,
    private location: Location,
    private activatedRoute: ActivatedRoute,
    private employeeService: EmployeeService,
    private commonService: CommonService ) { }

  ngOnInit() {
    this.employee = new Employee();
    this.emp_id = +this.activatedRoute.snapshot.paramMap.get('employee_id');
    if (this.emp_id > 0) {
      this.title = 'Modifier un employé';
      this.getEmployee(this.emp_id);
    } else {
      this.title = 'Ajouter un employé';
    }
  }

  getEmployee(emp_id: number): any {
    this.employeeService.getEmployee(emp_id).subscribe(
      (data) => { this.employee = data; },
      (error) => { this.error = error.message; }
    );
  }

  public validateEmployee(id: number) {
    if (id > 0) {
      if (isNaN(this.employee.job_id)) {
        this.error = 'VOus devez selectionnez une job !';
      } else {
        if (isNaN(this.employee.department_id)) {
          this.error = 'VOus devez selectionnez un département !';
        } else {
          this.employeeService.updateEmployee(this.employee).subscribe(
            () => { this.router.navigate(['/employees']); },
            (error) => { this.error = error.message; },
          );
        }
      }
    } else {
      this.employeeService.addEmployee(this.employee).subscribe(
        () => {},
        (error) => { this.error = error.message; },
        () => { this.router.navigate(['/employees']); }
      );
    }
  }

  public cancel(id: number) {
    if (id > 0) {
      this.location.back();
    } else {
      this.router.navigate(['home']);
    }
  }

  jobSelected(job_id: string) {
    this.employee.job_id = Number.parseInt(job_id);
  }

}
