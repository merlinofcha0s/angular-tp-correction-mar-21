import {Injectable} from '@angular/core';
import {User} from "./user.model";
import {HttpClient, HttpResponse} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  baseUrl = 'https://jsonplaceholder.typicode.com';

  constructor(private http: HttpClient) {
  }

  public getAll(): Observable<HttpResponse<Array<User>>> {
    return this.http.get<Array<User>>(`${this.baseUrl}/users`, {observe: "response"});
  }

  public getById(id: number): Observable<User> {
    return this.http.get<User>(`${this.baseUrl}/users/${id}`);
  }

  public save(user: User): Observable<User> {
    return this.http.post<User>(`${this.baseUrl}/users`, user);
  }
}
