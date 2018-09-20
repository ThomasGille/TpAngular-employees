import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { EmployeeService } from '../services/employee.service';
import { Employee } from '../models/employee';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
  error: string;
  @Input() employees: Employee [];

  constructor(
    private router: Router,
    private employeeService: EmployeeService) { }

  ngOnInit() {
  }

  detail(id: number) {
    this.router.navigate(['employee', id]);
  }

  delete(id: number) {
    this.employeeService.deleteEmployee(id).subscribe(
      () => {},
      (error) => { this.error = error.message; },
      () => { this.router.navigate(['home']); }
    );
  }

}
