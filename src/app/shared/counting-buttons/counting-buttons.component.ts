import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-counting-buttons',
  templateUrl: './counting-buttons.component.html',
  styleUrls: ['./counting-buttons.component.scss']
})
export class CountingButtonsComponent implements OnInit {

  @Input()
  public releaseDate = 0;

  @Output()
  public releaseDateChanges = new EventEmitter<number>();

  constructor() {
  }

  ngOnInit(): void {
  }

  public incValue(): void {
    this.releaseDate += 1;
    console.log(this.releaseDate)
    this.releaseDateChanges.emit(this.releaseDate);
  }

  public decValue(): void {
    this.releaseDate -= 1;
    this.releaseDateChanges.emit(this.releaseDate);
  }
}
