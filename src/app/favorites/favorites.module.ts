import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MaterialModule } from '../material.module';
import { SharedModule } from '../shared/shared.module';
import { FavoritesPageComponent } from './favorites-page/favorites-page.component';
import { FavoritesRoutingModule } from './favorites-routing.module';

@NgModule({
  declarations: [FavoritesPageComponent],
  imports: [CommonModule, MaterialModule, SharedModule, FavoritesRoutingModule],
})
export class FavoritesModule {}
