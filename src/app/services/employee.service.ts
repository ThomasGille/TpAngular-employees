import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private baseUrl = 'http://localhost/EmployeesSrv/';

  constructor(private http: HttpClient) { }

  public getEmployees(): Observable<any> {
    return this.http.get(this.baseUrl + 'getEmployees');
  }

  public getEmployee(id: number): Observable<any> {
    return this.http.get(this.baseUrl + 'getEmployee' + '/' + id);
  }
}
