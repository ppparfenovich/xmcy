import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute, Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { FavoritesService } from '../../../favorites/services/favorites.service';
import { PhotoService } from '../../../photos/services/photo.service';

import { PhotoDetailsComponent } from './photo-details.component';

describe('PhotoDetailsComponent', () => {
  let component: PhotoDetailsComponent;
  let fixture: ComponentFixture<PhotoDetailsComponent>;
  let route: ActivatedRoute;
  let router: Router;

  let favoritesService: FavoritesService;
  let photoService: PhotoService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PhotoDetailsComponent],
      imports: [HttpClientTestingModule, RouterTestingModule.withRoutes([])],
      providers: [
        { provide: favoritesService, useClass: FavoritesService },
        { provide: photoService, useClass: PhotoService },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PhotoDetailsComponent);
    component = fixture.componentInstance;
    router = TestBed.inject(Router);
    route = TestBed.inject(ActivatedRoute);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
