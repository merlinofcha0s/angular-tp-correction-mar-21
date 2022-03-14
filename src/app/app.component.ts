import {Component} from '@angular/core';
import {Vinyl} from "./vinyl/vinyl.model";
import {VinylService} from "./vinyl/vinyl.service";
import {UserService} from "./user/user.service";
import {User} from "./user/user.model";
import {filter, map, Observable, throttle, throwError} from "rxjs";
import {HttpResponse} from "@angular/common/http";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'toto';

  vinylUrl = '/vinyls';

  constructor() {
  }
}
