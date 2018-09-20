import { Component, OnInit } from '@angular/core';
import { Employee } from '../models/employee';
import { EmployeeService } from '../services/employee.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {
  public employees: Employee [];
  title: string;
  error: string;
  job_id: number;

  constructor(
    private employeeService: EmployeeService,
    private router: Router,
    private activatedRoute: ActivatedRoute
    ) { }

  ngOnInit() {
    this.job_id = +this.activatedRoute.snapshot.paramMap.get('job_id');
    if (this.job_id > 0) {
      this.getEmployeesByJob();
    } else {
      this.getEmployees();
    }
  }
  getEmployeesByJob(): any {
    this.title = 'Liste des employés d\'un job';
    this.employeeService.getEmployeeByJob(this.job_id).subscribe(
      (data) => { this.employees = data; },
      (error) => { this.error = error.message; }
    );
  }

  getEmployees(): void {
    this.title = 'Liste des employés';
    this.employeeService.getEmployees().subscribe((data) => {
      this.employees = data;
    }, (error) => {
      this.error = error.message;
    });
  }

  detail(id: number) {
    this.router.navigate(['employee', id]);
  }

  delete(id: number) {
    this.employeeService.deleteEmployee(id).subscribe(
      () => {},
      (error) => { this.error = error.message; },
      () => { this.getEmployees(); }
    );
  }

}
