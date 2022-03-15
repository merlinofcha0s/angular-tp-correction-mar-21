import {Routes} from "@angular/router";
import {HomeComponent} from "./home/home.component";
import {ListUserComponent} from "./user/list-user/list-user.component";
import {ListVinylComponent} from "./vinyl/list-vinyl/list-vinyl.component";
import {LogGuard} from "./shared/guards/log.guard";
import {EditVinylComponent} from "./vinyl/edit-vinyl/edit-vinyl.component";
import {EditUserComponent} from "./user/edit-user/edit-user.component";

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
    path: 'users/add',
    component: EditUserComponent
  },
  {
    path: 'users/edit/:id',
    component: EditUserComponent
  },
  {
    path: 'vinyls',
    component: ListVinylComponent
  },
  {
    path: 'vinyls/add',
    component: EditVinylComponent
  },
  {
    path: 'vinyls/edit/:id',
    component: EditVinylComponent
  },
]
