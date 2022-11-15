import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { PATH } from '../../app-routing.module';
import { IPhoto } from '../../shared/models/photo';
import { FavoritesService } from '../services/favorites.service';

@Component({
  selector: 'app-favorites-page',
  templateUrl: './favorites-page.component.html',
  styleUrls: ['./favorites-page.component.scss'],
})
export class FavoritesPageComponent implements OnInit, OnDestroy {
  tooltip = 'Navigate to Details';
  photos: IPhoto[] = [];

  private unsubscribe$ = new Subject<void>();

  constructor(
    private readonly router: Router,
    private readonly favoritesService: FavoritesService
  ) {}

  ngOnInit(): void {
    this.favoritesService.favoritesList
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe((photos) => (this.photos = photos));
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

  navigateToDetails(photo: IPhoto): void {
    this.router.navigate([`${PATH.PHOTOS}/${photo.id}`]);
  }
}
