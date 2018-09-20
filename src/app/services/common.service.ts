import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  private baseUrl = 'http://localhost/EmployeesSrv/';
  constructor(private http: HttpClient) { }

  getJobs(): Observable<any> {
    return this.http.get(this.baseUrl + 'getJobs');
  }

  getDepartements(): Observable<any> {
    return this.http.get(this.baseUrl + 'getDepartments');
  }
}
