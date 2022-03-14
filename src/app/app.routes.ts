import {Routes} from "@angular/router";
import {HomeComponent} from "./home/home.component";
import {ListUserComponent} from "./user/list-user/list-user.component";
import {ListVinylComponent} from "./vinyl/list-vinyl/list-vinyl.component";

export const ROUTES: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'users',
    component: ListUserComponent
  },
  {
    path: 'vinyls',
    component: ListVinylComponent
  }
]
