import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { asapScheduler, of } from 'rxjs';
import { observeOn } from 'rxjs/operators';
import { LoadingService } from '../../core/services/loading/loading.service';
import { FavoritesService } from '../../favorites/services/favorites.service';
import { MOCK_PHOTO_LIST } from '../../shared/mocks/photos';
import { PhotoService } from '../services/photo.service';

import { PhotosPageComponent } from './photos-page.component';

describe('PhotosPageComponent', () => {
  let component: PhotosPageComponent;
  let fixture: ComponentFixture<PhotosPageComponent>;
  let loader: LoadingService;
  let favoritesService: FavoritesService;
  let photoService: PhotoService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PhotosPageComponent],
      imports: [HttpClientTestingModule],
      providers: [
        { provide: loader, useClass: LoadingService },
        { provide: favoritesService, useClass: FavoritesService },
        { provide: photoService, useClass: PhotoService },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PhotosPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
