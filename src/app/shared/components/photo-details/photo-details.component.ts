import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PATH } from '../../../app-routing.module';
import { FavoritesService } from '../../../favorites/services/favorites.service';
import { PhotoService } from '../../../photos/services/photo.service';
import { IPhoto } from '../../models/photo';

@Component({
  selector: 'app-photo-details',
  templateUrl: './photo-details.component.html',
  styleUrls: ['./photo-details.component.scss'],
})
export class PhotoDetailsComponent implements OnInit {
  photoData: IPhoto | null = null;

  constructor(
    private readonly route: ActivatedRoute,
    private readonly router: Router,
    private readonly photoService: PhotoService,
    private readonly favoritesService: FavoritesService
  ) {}

  ngOnInit(): void {
    const photoId = this.route.snapshot.params['id'];
    this.photoService
      .getProductById(photoId)
      .subscribe((photoData) => (this.photoData = photoData));
  }

  removeFromFavorites(id: number): void {
    this.favoritesService.removePhoto(id);
    this.router.navigateByUrl(`${PATH.HOME}`);
  }
}
