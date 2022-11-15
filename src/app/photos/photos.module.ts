import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MaterialModule } from '../material.module';

import { SharedModule } from '../shared/shared.module';
import { PhotosPageComponent } from './photos-page/photos-page.component';
import { PhotoRoutingModule } from './photos-routing.module';

@NgModule({
  declarations: [PhotosPageComponent],
  imports: [CommonModule, SharedModule, MaterialModule, PhotoRoutingModule],
})
export class PhotosModule {}
