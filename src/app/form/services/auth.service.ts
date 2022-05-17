import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const AUTH_API = 'https://reqres.in/api/users/';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  register(name: string, job: string, date: Date, gender: string, email: string, password: string): Observable<any> {
    return this.http.post(AUTH_API, {
      name,
      job,
      date,
      gender,
      email,
      password
    }, httpOptions);
  }
}
