import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PATH } from '../app-routing.module';
import { FavoritesPageComponent } from './favorites-page/favorites-page.component';

const routes: Routes = [
  {
    path: PATH.HOME,
    component: FavoritesPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FavoritesRoutingModule {}
