import {Component, Input, OnInit} from '@angular/core';
import {Vinyl} from "../vinyl.model";
import {Router} from "@angular/router";

@Component({
  selector: 'app-single-vinyl',
  templateUrl: './single-vinyl.component.html',
  styleUrls: ['./single-vinyl.component.scss']
})
export class SingleVinylComponent implements OnInit {

  @Input()
  public vinyl: Vinyl = {};

  public isEditing = false;

  constructor(private router: Router) {

  }

  ngOnInit(): void {
  }

  public onModify(): void {
    this.router.navigate(['vinyls', 'edit', this.vinyl.id]);
  }

  public changeReleaseDate(releaseDateUpdated: Date): void {
    this.vinyl.releaseDate = releaseDateUpdated;
  }
}
