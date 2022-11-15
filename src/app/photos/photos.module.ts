import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { MaterialModule } from '../material.module';
import { SharedModule } from '../shared/shared.module';
import { PhotoDetailsComponent } from './components/photo-details/photo-details.component';
import { PhotoItemComponent } from './components/photo-item/photo-item.component';
import { PhotosListComponent } from './components/photos-list/photos-list.component';
import { PhotoRoutingModule } from './photos-routing.module';

@NgModule({
  declarations: [
    PhotosListComponent,
    PhotoDetailsComponent,
    PhotoItemComponent,
  ],
  imports: [CommonModule, SharedModule, MaterialModule, PhotoRoutingModule],
})
export class PhotosModule {}
