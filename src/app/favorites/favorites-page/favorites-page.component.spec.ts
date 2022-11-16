import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { FavoritesService } from '../services/favorites.service';

import { FavoritesPageComponent } from './favorites-page.component';

const routerSpy = jasmine.createSpyObj('Router', ['navigateByUrl']);

describe('FavoritesPageComponent', () => {
  let component: FavoritesPageComponent;
  let fixture: ComponentFixture<FavoritesPageComponent>;
  let favoritesService: FavoritesService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FavoritesPageComponent],
      providers: [
        { provide: Router, useValue: routerSpy },
        { provide: favoritesService, useClass: FavoritesService },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FavoritesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
