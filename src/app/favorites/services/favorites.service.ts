import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { IPhoto } from '../../photos/models/photo';

@Injectable({
  providedIn: 'root',
})
export class FavoritesService {
  favoritesList = new BehaviorSubject<IPhoto[]>([]);

  favoritesList$ = this.favoritesList.asObservable();

  addPhoto(photo: IPhoto): void {
    this.favoritesList.next([...this.favoritesList.value, photo]);
  }
}
