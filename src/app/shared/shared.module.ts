import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { InfiniteScrollComponent } from './components/infinite-scroll/infinite-scroll.component';

import { MaterialModule } from '../material.module';
import { PhotoDetailsComponent } from './components/photo-details/photo-details.component';
import { PhotoItemComponent } from './components/photo-item/photo-item.component';
import { PhotosListComponent } from './components/photos-list/photos-list.component';

const SharedComponents = [
  InfiniteScrollComponent,
  PhotosListComponent,
  PhotoItemComponent,
  PhotoDetailsComponent,
];

@NgModule({
  declarations: [SharedComponents],
  imports: [CommonModule, MaterialModule],
  exports: [SharedComponents],
})
export class SharedModule {}
