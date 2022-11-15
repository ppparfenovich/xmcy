import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PATH } from '../app-routing.module';
import { PhotoDetailsComponent } from '../shared/components/photo-details/photo-details.component';

const routes: Routes = [
  {
    path: PATH.PHOTOS,
    redirectTo: PATH.HOME,
    pathMatch: 'full',
  },
  {
    path: PATH.PHOTOS_ID,
    component: PhotoDetailsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PhotoRoutingModule {}
