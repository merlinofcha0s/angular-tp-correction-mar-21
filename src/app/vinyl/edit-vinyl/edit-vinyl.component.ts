import {Component, OnInit} from '@angular/core';
import {Vinyl} from "../vinyl.model";
import {VinylService} from "../vinyl.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-edit-vinyl',
  templateUrl: './edit-vinyl.component.html',
  styleUrls: ['./edit-vinyl.component.scss']
})
export class EditVinylComponent implements OnInit {

  vinyl: Vinyl = {};

  constructor(private vinylService: VinylService, private router: Router) {
  }

  ngOnInit(): void {
  }


  saveVinyl(): void {
    this.vinylService.save(this.vinyl);
    this.router.navigate(['vinyls']);
  }
}
