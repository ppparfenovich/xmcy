import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PATH } from '../../../app-routing.module';
import { IPhoto } from '../../models/photo';
import { PhotoService } from '../../services/photo/photo.service';

@Component({
  selector: 'app-photo-details',
  templateUrl: './photo-details.component.html',
  styleUrls: ['./photo-details.component.scss'],
})
export class PhotoDetailsComponent implements OnInit {
  photoData!: IPhoto;

  constructor(
    private readonly route: ActivatedRoute,
    private readonly router: Router,
    private readonly photoService: PhotoService
  ) {}

  ngOnInit(): void {
    const photoId = this.route.snapshot.params['id'];
    this.photoService
      .getProductById(photoId)
      .subscribe((photoData) => (this.photoData = photoData));
  }

  goHome(): void {
    this.router.navigateByUrl(`${PATH.HOME}`);
  }
}
