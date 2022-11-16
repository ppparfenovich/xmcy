import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PATH } from '../../app-routing.module';
import { IPhoto } from '../../shared/models/photo';
import { FavoritesService } from '../services/favorites.service';

@Component({
  selector: 'app-favorites-page',
  templateUrl: './favorites-page.component.html',
  styleUrls: ['./favorites-page.component.scss'],
})
export class FavoritesPageComponent implements OnInit {
  tooltip = 'Navigate to Details';
  photos: IPhoto[] = [];

  constructor(
    private readonly router: Router,
    private readonly favoritesService: FavoritesService
  ) {}

  ngOnInit(): void {
    this.photos = this.favoritesService.getFavoritesPhotos();
  }

  navigateToDetails(photo: IPhoto): void {
    this.router.navigateByUrl(`${PATH.PHOTOS}/${photo.id}`);
  }
}
