import {Component, OnInit} from '@angular/core';
import {filter, map, Observable, of} from "rxjs";
import {User} from "../user.model";
import {UserService} from "../user.service";

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.scss']
})
export class ListUserComponent implements OnInit {

  users: Observable<Array<User> | null> = of(null);

  errorCallUser = false;

  constructor(private userService: UserService) {

  }

  ngOnInit(): void {
    this.users = this.userService.getAll().pipe(
      filter(httpResponse => httpResponse.ok),
      map(httpResponse => httpResponse.body),
      // map(httpResponse => {throw new Error()})
    );
  }

}
