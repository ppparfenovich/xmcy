import { Component, DoCheck, OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { IPhoto } from '../../../photos/models/photo';
import { FavoritesService } from '../../services/favorites.service';

@Component({
  selector: 'app-favorite-list',
  templateUrl: './favorite-list.component.html',
  styleUrls: ['./favorite-list.component.scss'],
})
export class FavoriteListComponent implements DoCheck, OnDestroy {
  photos: IPhoto[] = [];

  private unsubscribe$ = new Subject<void>();

  constructor(private readonly favoritesService: FavoritesService) {}

  ngDoCheck(): void {
    this.favoritesService.favoritesList$
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe((photos) => (this.photos = photos));
  }

  identifyById(index: number): number {
    return index;
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}
