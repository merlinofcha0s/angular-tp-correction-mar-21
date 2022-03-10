import { Component } from '@angular/core';
import {Vinyl} from "./vinyl/single-vinyl/vinyl.model";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'toto';

  public mjVinyl: Vinyl = {
    id: 0,
    artist: 'Mickael Jackson',
    title: 'Bad',
    releaseDate: 1987,
    imageUrl: 'https://img-4.linternaute.com/PI-AYLwdrSAlAsBVE53jZasrWYM=/350x/smart/4184ae2fdda74cb5b2e150bc98efebe8/ccmcms-linternaute/19006.jpg'
  }

}
