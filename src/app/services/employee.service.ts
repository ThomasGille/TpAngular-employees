import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Employee } from '../models/employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private baseUrl = 'http://localhost/EmployeesSrv/';

  constructor(private http: HttpClient) { }

  public getEmployees(): Observable<any> {
    return this.http.get(this.baseUrl + 'getEmployees');
  }

  getEmployeeByJob(job_id: number): any {
    return this.http.get(this.baseUrl + 'getEmployeesByJob/' + job_id);
  }

  public getEmployee(id: number): Observable<any> {
    return this.http.get(this.baseUrl + 'getEmployee' + '/' + id);
  }

  public updateEmployee(emp: Employee): Observable<any> {
    return this.http.put(this.baseUrl + 'updateEmployee', JSON.stringify(emp));
  }

  public addEmployee(emp: Employee): Observable<any> {
    return this.http.post(this.baseUrl + 'addEmployee', JSON.stringify(emp));
  }

  public deleteEmployee(id: number): Observable<any> {
    return this.http.delete(this.baseUrl + 'deleteEmployee' + '/' + id);
  }
}
