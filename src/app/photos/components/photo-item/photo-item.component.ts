import { Component, Input } from '@angular/core';
import { FavoritesService } from '../../../favorites/services/favorites.service';
import { IPhoto } from '../../models/photo';

@Component({
  selector: 'app-photo-item',
  templateUrl: './photo-item.component.html',
  styleUrls: ['./photo-item.component.scss'],
})
export class PhotoItemComponent {
  @Input() photo!: IPhoto;

  constructor(private readonly favoritesService: FavoritesService) {}

  addToFavorites(photo: IPhoto): void {
    this.favoritesService.addPhoto(photo);
  }
}
