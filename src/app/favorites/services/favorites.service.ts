import { Injectable } from '@angular/core';
import {
  LocalStorageService,
  LOCAL_STORAGE,
} from '../../core/services/local-storage/local-storage.service';
import { IPhoto } from '../../shared/models/photo';

@Injectable({
  providedIn: 'root',
})
export class FavoritesService {
  favoritesList: IPhoto[] = [];

  constructor(private readonly localStorage: LocalStorageService) {}

  addPhoto(photo: IPhoto): void {
    this.favoritesList = [...this.favoritesList, photo];

    this.localStorage.setItems(LOCAL_STORAGE.FAVORITES, this.favoritesList);
  }

  removePhoto(id: number): void {
    const photos = this.favoritesList.filter((photo) => photo.id !== id);

    this.localStorage.setItems(LOCAL_STORAGE.FAVORITES, photos);
  }

  getFavoritesPhotos(): IPhoto[] {
    this.favoritesList = this.localStorage.getItems(LOCAL_STORAGE.FAVORITES);
    return this.favoritesList;
  }
}
