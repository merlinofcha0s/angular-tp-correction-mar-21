import {Component, OnInit} from '@angular/core';
import {Vinyl} from "../vinyl.model";
import {VinylService} from "../vinyl.service";

@Component({
  selector: 'app-list-vinyl',
  templateUrl: './list-vinyl.component.html',
  styleUrls: ['./list-vinyl.component.scss']
})
export class ListVinylComponent implements OnInit {

  vinyls: Array<Vinyl> = [];

  constructor(private vinylService: VinylService) {
  }

  ngOnInit(): void {
    this.vinyls = this.vinylService.getAll();
  }

}
