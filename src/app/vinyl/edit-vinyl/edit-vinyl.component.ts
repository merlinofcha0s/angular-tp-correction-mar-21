import {Component, OnInit} from '@angular/core';
import {Vinyl} from "../vinyl.model";
import {VinylService} from "../vinyl.service";
import {ActivatedRoute, Router} from "@angular/router";
import {filter, map} from "rxjs";

@Component({
  selector: 'app-edit-vinyl',
  templateUrl: './edit-vinyl.component.html',
  styleUrls: ['./edit-vinyl.component.scss']
})
export class EditVinylComponent implements OnInit {

  vinyl: Vinyl = {};

  edit = false;

  // Etape 1 : On recupere l'id via l'URL
  // Etape 2 : On passe l'id au service de vinyl pour recuperer le vinyl correspondant
  // Etape 3 : on assigne le vinyl qui provient du service au vinyl present dans le composant

  constructor(private vinylService: VinylService,
              private router: Router,
              private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.activatedRoute.params.pipe(
      filter(params => params['id'] !== undefined),
      map(params => params['id'])
    ).subscribe(id => {
      this.edit = true;
      this.vinyl = this.vinylService.getOneById(id);
    });
  }

  saveVinyl(): void {
    if (this.edit) {
      this.vinylService.update(this.vinyl);
    } else {
      this.vinylService.save(this.vinyl);
    }

    this.router.navigate(['vinyls']);
  }
}
