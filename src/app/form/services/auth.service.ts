import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const AUTH_API = 'http://dummy.restapiexample.com/api/v1/create';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  register(name: string, salary: string, age: number): Observable<any> {
    return this.http.post(AUTH_API, {
      name,
      salary,
      age
    }, httpOptions);
  }
}
