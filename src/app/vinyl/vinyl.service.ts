import {Injectable} from '@angular/core';
import {Vinyl} from "./vinyl.model";

@Injectable({
  providedIn: 'root'
})
export class VinylService {

  vinyls: Array<Vinyl> = [
    {
      id: 0,
      title: 'Bad',
      artist: 'Michael Jackson',
      imageUrl: 'https://img-4.linternaute.com/PI-AYLwdrSAlAsBVE53jZasrWYM=/350x/smart/4184ae2fdda74cb5b2e150bc98efebe8/ccmcms-linternaute/19006.jpg',
      releaseDate: new Date('1987-10-1'),
    },
    {
      id: 1,
      title: 'Uprising',
      artist: 'Bob marley and the Wailers',
      imageUrl: 'https://img.cdandlp.com/2017/06/imgL/118865816.jpg',
      releaseDate: new Date('1980-07-10'),
    },
    {
      id: 2,
      title: 'Hendrix in the west',
      artist: 'Jimi Hendrix',
      imageUrl: 'https://upload.wikimedia.org/wikipedia/en/9/9f/Hendrix_in_the_west.jpg',
      releaseDate: new Date('1972-02-1'),
    },
    {
      id: 3,
      title: 'Porgy and Bess',
      artist: 'Louis Armstrong et Ella Fitzgerald',
      imageUrl: 'https://media1.jpc.de/image/w600/front/0/8436542011464.jpg',
      releaseDate: new Date('1958-10-30'),
    }
  ];

  constructor() {
  }

  public getAll(): Array<Vinyl> {
    return this.vinyls;
  }

  public save(vinyl: Vinyl): Vinyl {
    vinyl.id = this.vinyls.length;
    this.vinyls.push(vinyl);
    return vinyl;
  }

  public update(vinyl: Vinyl): Vinyl {
    const vinylsFiltered = this.vinyls.filter(vinyl => vinyl.id == vinyl.id);
    vinylsFiltered[0] = vinyl;
    return vinyl;
  }

  getOneById(id: number): Vinyl {
    const vinylsFiltered = this.vinyls.filter(vinyl => vinyl.id == id);
    return vinylsFiltered[0];
  }
}
