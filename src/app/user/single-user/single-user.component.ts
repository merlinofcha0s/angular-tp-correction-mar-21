import {Component, Input, OnInit} from '@angular/core';
import {User} from "../user.model";
import {Router} from "@angular/router";

@Component({
  selector: 'app-single-user',
  templateUrl: './single-user.component.html',
  styleUrls: ['./single-user.component.scss']
})
export class SingleUserComponent implements OnInit {

  @Input()
  public user: User = {};

  constructor() { }

  ngOnInit(): void {
  }
}
