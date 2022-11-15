import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PATH } from '../app-routing.module';
import { FavoriteListComponent } from './components/favorite-list/favorite-list.component';

const routes: Routes = [
  {
    path: PATH.HOME,
    component: FavoriteListComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FavoritesRoutingModule {}
