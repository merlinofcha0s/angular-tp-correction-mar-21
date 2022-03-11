import { Injectable } from '@angular/core';
import {User} from "./user.model";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  baseUrl = 'https://jsonplaceholder.typicode.com';

  constructor(private http: HttpClient) { }

  public getAll(): Observable<Array<User>> {
    return this.http.get<Array<User>>(`${this.baseUrl}/users`);
  }
}
