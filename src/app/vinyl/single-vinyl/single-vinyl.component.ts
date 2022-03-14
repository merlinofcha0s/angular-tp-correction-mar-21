import {Component, Input, OnInit} from '@angular/core';
import {Vinyl} from "../vinyl.model";

@Component({
  selector: 'app-single-vinyl',
  templateUrl: './single-vinyl.component.html',
  styleUrls: ['./single-vinyl.component.scss']
})
export class SingleVinylComponent implements OnInit {

  @Input()
  public vinyl: Vinyl = {};

  public isEditing = false;

  constructor() {

  }

  ngOnInit(): void {
  }

  public onModify(): void {
    this.isEditing = !this.isEditing;
  }

  public changeReleaseDate(releaseDateUpdated: Date): void {
    this.vinyl.releaseDate = releaseDateUpdated;
  }
}
