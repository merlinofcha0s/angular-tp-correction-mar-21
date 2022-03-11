import {Component} from '@angular/core';
import {Vinyl} from "./vinyl/single-vinyl/vinyl.model";
import {VinylService} from "./vinyl/vinyl.service";
import {UserService} from "./user/user.service";
import {User} from "./user/user.model";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'toto';

  vinyls: Array<Vinyl> = [];
  users: Array<User> = [];

  constructor(private vinylService: VinylService, private userService: UserService) {
    this.vinyls = this.vinylService.getAll();
    this.users = this.userService.getAll();
  }
}
