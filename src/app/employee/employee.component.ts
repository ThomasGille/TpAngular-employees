import { Component, OnInit } from '@angular/core';
import { Employee } from '../models/employee';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { EmployeeService } from '../services/employee.service';
import { CommonService } from '../services/common.service';
import { Job } from '../models/job';
import { Departement } from '../models/departement';

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
  jobs: Job [];
  departements: Departement [];

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private employeeService: EmployeeService,
    private commonService: CommonService ) { }

  ngOnInit() {
    this.employee = new Employee();
    this.emp_id = +this.activatedRoute.snapshot.paramMap.get('employee_id');
    this.title = 'Modifier un employé';
    this.getEmployee(this.emp_id);
    this.getDepartements();
    this.getJobs();
  }
  getJobs(): any {
    this.commonService.getJobs().subscribe(
      (data) => { this.jobs = data; },
      (error) => { this.error = error.message; }
    );
  }

  getDepartements(): any {
    this.commonService.getDepartements().subscribe(
      (data) => { this.departements = data; },
      (error) => { this.error = error.message; }
    );
  }

  getEmployee(emp_id: number): any {
    this.employeeService.getEmployee(emp_id).subscribe(
      (data) => { this.employee = data; },
      (error) => { this.error = error.message; }
    );
  }

  public validateEmployee(id: number) {
    // TODO
  }

  public cancel(id: number) {
    // TODO
  }

}
