import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MaterialModule } from '../material.module';
import { FavoriteListComponent } from './components/favorite-list/favorite-list.component';
import { FavoritesRoutingModule } from './favorites-routing.module';
import { FavoriteItemComponent } from './components/favorite-item/favorite-item.component';

@NgModule({
  declarations: [FavoriteListComponent, FavoriteItemComponent],
  imports: [CommonModule, MaterialModule, FavoritesRoutingModule],
})
export class FavoritesModule {}
