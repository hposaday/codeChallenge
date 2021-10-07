import { Observable } from 'rxjs';

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { User } from './user.model';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private serverUrl: string = 'http://localhost:3333/';
  constructor(private http: HttpClient) {}

  getAllUsers(): Observable<any> {
    return this.http.get(`${this.serverUrl}users`);
  }

  getUserById(id: number): Observable<any> {
    return this.http.get(`${this.serverUrl}users/${id}`);
  }

  createUser(newUser: User): Observable<any> {
    return this.http.post<User>(`${this.serverUrl}users`, newUser);
  }

  editUser(editedUser: User): Observable<any> {
    return this.http.put<User>(
      `${this.serverUrl}users/${editedUser.id}`,
      editedUser
    );
  }

  deleteUser(id: number): Observable<any> {
    return this.http.delete<User>(`${this.serverUrl}users/${id}`);
  }
}
