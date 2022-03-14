import {Routes} from "@angular/router";
import {HomeComponent} from "./home/home.component";
import {ListUserComponent} from "./user/list-user/list-user.component";
import {ListVinylComponent} from "./vinyl/list-vinyl/list-vinyl.component";
import {LogGuard} from "./shared/guards/log.guard";
import {EditVinylComponent} from "./vinyl/edit-vinyl/edit-vinyl.component";

export const ROUTES: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'users',
    component: ListUserComponent,
    canActivate: [LogGuard]
  },
  {
    path: 'vinyls',
    component: ListVinylComponent
  },
  {
    path: 'vinyls/add',
    component: EditVinylComponent
  },
]
