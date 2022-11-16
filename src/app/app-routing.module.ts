import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PhotosPageComponent } from './photos/photos-page/photos-page.component';

export enum PATH {
  HOME = '',
  PHOTOS = 'photos',
  PHOTOS_ID = 'photos/:id',
  FAVORITES = 'favorites',
  ERROR = 'error',
  ID = ':id',
}

const routes: Routes = [
  {
    path: PATH.HOME,
    component: PhotosPageComponent,
  },
  {
    path: PATH.FAVORITES,
    loadChildren: () =>
      import('./favorites/favorites.module').then((m) => m.FavoritesModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
