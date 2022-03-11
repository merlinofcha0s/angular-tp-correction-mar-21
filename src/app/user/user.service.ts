import { Injectable } from '@angular/core';
import {User} from "./user.model";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  users: Array<User> = [
    {
      id: 'opdsdsdaadsodpso',
      phone: '+33621329098',
      email: 'john@doe',
      name: 'John Doe',
      website: 'http://mywebsite.com',
    },
    {
      id: 'ddsdsad2ewqeqdas',
      phone: '+33621399098',
      email: 'jane@doe',
      name: 'Jane Doe',
      website: 'http://mywebsite.com',
    },
  ];

  constructor() { }

  public getAll(): Array<User> {
    return this.users;
  }
}
