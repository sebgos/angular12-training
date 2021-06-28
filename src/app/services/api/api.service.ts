import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { User } from '../../models';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private readonly apiBaseUrl = 'https://jsonplaceholder.typicode.com';
  private readonly usersEndpointUrl = `${this.apiBaseUrl}/users`;
  private readonly authEndpoint = `${this.apiBaseUrl}/auth`;

  constructor(private http: HttpClient) {}

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.usersEndpointUrl);
  }

  login(username: string, password: string): Observable<User> {
    return this.http.post<User>(this.authEndpoint, {username, password});
  }
}
