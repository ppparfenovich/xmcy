import { Injectable } from '@angular/core';

export enum LOCAL_STORAGE {
  FAVORITES = 'favoritesPhoto',
}

@Injectable({
  providedIn: 'root',
})
export class LocalStorageService {
  getItems<T>(field: string): T {
    return JSON.parse(localStorage.getItem(field) || '[]');
  }

  setItems<T>(field: string, items: T): void {
    localStorage.setItem(field, JSON.stringify(items));
  }
}
