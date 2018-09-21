import { Component, OnInit } from '@angular/core';
import { Employee } from '../models/employee';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { EmployeeService } from '../services/employee.service';
import { SharedService } from '../services/shared.service';

@Component({
  selector: 'app-list-by-dept',
  templateUrl: './list-by-dept.component.html',
  styleUrls: ['./list-by-dept.component.css']
})
export class ListByDeptComponent implements OnInit {
  title = 'Liste des employés par département';
  public employees: Employee [];
  department_id: number;
  error: any;

  constructor(
    private activatedRoute: ActivatedRoute,
    private sharedService: SharedService,
    private employeeService: EmployeeService) { }

  ngOnInit() {
    const dep_id = +this.activatedRoute.snapshot.paramMap.get('department_id');
    if (dep_id > 0) {
      this.depSelected(dep_id);
    }
  }
  depSelected(dep_id: number): any {
    this.department_id = dep_id;
    this.getEmpByDep();
  }
  getEmpByDep(): any {
    this.sharedService.originalUrl = 'employees/dep/' + this.department_id;
    this.employeeService.getEmployeeByDep(this.department_id).subscribe(
      (data) => { this.employees = data; },
      (error) => { this.error = error.message; }
    );
  }

  reload() {
    this.getEmpByDep();
  }

}
