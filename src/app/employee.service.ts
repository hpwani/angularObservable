import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Emp } from './emp';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  empUrl = '/api/emp';

  constructor(private http: HttpClient) { }

  getEmployeeDetails(): Observable<Emp[]> {
    return this.http.get<Emp[]>(this.empUrl);
  }
}
