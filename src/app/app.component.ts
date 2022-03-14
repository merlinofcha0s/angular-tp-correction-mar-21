import {Component} from '@angular/core';
import {Vinyl} from "./vinyl/single-vinyl/vinyl.model";
import {VinylService} from "./vinyl/vinyl.service";
import {UserService} from "./user/user.service";
import {User} from "./user/user.model";
import {filter, map, throttle, throwError} from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'toto';

  vinyls: Array<Vinyl> = [];
  users: Array<User> | null = [];

  errorCallUser = false;

  constructor(private vinylService: VinylService, private userService: UserService) {
    this.vinyls = this.vinylService.getAll();
    this.userService.getAll().pipe(
      filter(httpResponse => httpResponse.ok),
      map(httpResponse => httpResponse.body),
      // map(httpResponse => {throw new Error()})
    ).subscribe({
      next: users => {
        this.users = users;
      },
      error: (error) => {
        console.error("Probleme lors de l'appel http " + error);
        this.errorCallUser = true;
      },
      complete: () => console.log('terminate')
    });
  }
}
