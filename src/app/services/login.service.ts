import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private baseUrl = 'http://localhost/EmployeesSrv/';

  constructor(private http: HttpClient) { }

  public getUser(login: String): Observable<any> {
    return this.http.post(this.baseUrl + 'getUser', JSON.stringify(login));
  }
}
