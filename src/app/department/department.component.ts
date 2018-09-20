import { Component, OnInit, Input } from '@angular/core';
import { CommonService } from '../services/common.service';
import { Departement } from '../models/departement';

@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.css']
})
export class DepartmentComponent implements OnInit {
  @Input() department_id: number;
  departements: Departement [];
  error: any;

  constructor(private commonService: CommonService) { }

  ngOnInit() {
    this.getDepartements();
  }

  getDepartements(): any {
    this.commonService.getDepartements().subscribe(
      (data) => { this.departements = data; },
      (error) => { this.error = error.message; }
    );
  }

}
