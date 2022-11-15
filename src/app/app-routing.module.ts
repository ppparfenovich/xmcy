import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PhotosListComponent } from './photos/components/photos-list/photos-list.component';

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
    component: PhotosListComponent,
  },
  {
    path: PATH.FAVORITES,
    loadChildren: () =>
      import('./favorites/favorites.module').then((m) => m.FavoritesModule),
  },
  // {
  //   path: PATH.PHOTOS,
  //   redirectTo: PATH.HOME,
  //   pathMatch: 'full',
  // },
  // {
  //   path: PATH.ERROR,
  //   component: ErrorPageComponent,
  // },
  // { path: '**', redirectTo: PATH.ERROR },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
