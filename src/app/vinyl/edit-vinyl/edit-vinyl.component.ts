import {Component, OnInit} from '@angular/core';
import {Vinyl} from "../vinyl.model";

@Component({
  selector: 'app-edit-vinyl',
  templateUrl: './edit-vinyl.component.html',
  styleUrls: ['./edit-vinyl.component.scss']
})
export class EditVinylComponent implements OnInit {

  vinyl: Vinyl = {};

  constructor() {
  }

  ngOnInit(): void {
  }


  saveVinyl(): void {

  }
}
