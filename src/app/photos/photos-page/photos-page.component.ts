import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { FavoritesService } from '../../favorites/services/favorites.service';
import { IPhoto } from '../../shared/models/photo';
import { PhotoService } from '../services/photo.service';

@Component({
  selector: 'app-photos-page',
  templateUrl: './photos-page.component.html',
  styleUrls: ['./photos-page.component.scss'],
})
export class PhotosPageComponent implements OnInit, OnDestroy {
  tooltip = 'Add to favorites';
  page = 1;
  photos: IPhoto[] = [];
  isLoading = false;

  private unsubscribe$ = new Subject<void>();

  constructor(
    private readonly favoritesService: FavoritesService,
    private readonly photoService: PhotoService
  ) {}

  ngOnInit(): void {
    this.loadMorePhotos(this.page);
  }

  identifyById(index: number): number {
    return index;
  }

  onScroll(): void {
    this.loadMorePhotos(++this.page);
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

  loadMorePhotos(page: number): void {
    this.isLoading = true;
    this.photoService
      .getProducts(page)
      .subscribe((photos) => this.photos.push(...photos));
    this.isLoading = false;
  }

  addToFavorites(photo: IPhoto): void {
    this.favoritesService.addPhoto(photo);
  }
}
