import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { IPhoto } from '../../models/photo';
import { PhotoService } from '../../services/photo/photo.service';

@Component({
  selector: 'app-photos-list',
  templateUrl: './photos-list.component.html',
  styleUrls: ['./photos-list.component.scss'],
})
export class PhotosListComponent implements OnInit, OnDestroy {
  page = 1;
  photos: IPhoto[] = [];

  private unsubscribe$ = new Subject<void>();

  constructor(private readonly photoService: PhotoService) {}

  ngOnInit(): void {
    this.photoService
      .getProducts(this.page)
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe((photos) => (this.photos = photos));
  }

  identifyById(index: number): number {
    return index;
  }

  onScroll(): void {
    this.photoService
      .getProducts(++this.page)
      .subscribe((photos) => this.photos.push(...photos));
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}
