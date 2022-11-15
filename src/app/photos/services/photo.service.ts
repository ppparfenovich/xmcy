import { HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { debounceTime, map } from 'rxjs/operators';
import { ApiService } from '../../core/services/api/api.service';
import { IPhoto, IPhotoResponse } from '../../shared/models/photo';

enum PHOTO_REQUEST_PARAMS {
  LIMIT = 'limit',
  SKIP = 'skip',
}

const PHOTO_DATA_SHOWING = 6;

@Injectable({
  providedIn: 'root',
})
export class PhotoService extends ApiService {
  getProducts(page: number): Observable<IPhoto[]> {
    const productsLoad = PHOTO_DATA_SHOWING * page;
    const url = this.getUrl('photoData', 'products');
    let params: HttpParams;

    page === 1
      ? (params = new HttpParams().set(
          PHOTO_REQUEST_PARAMS.LIMIT,
          PHOTO_DATA_SHOWING
        ))
      : (params = new HttpParams()
          .set(PHOTO_REQUEST_PARAMS.LIMIT, PHOTO_DATA_SHOWING)
          .set(PHOTO_REQUEST_PARAMS.SKIP, productsLoad - PHOTO_DATA_SHOWING));

    return this.http.get<IPhotoResponse>(url, { params }).pipe(
      debounceTime(this.getRandomDelay()),
      map((result) => result.products)
    );
  }

  getProductById(id: string): Observable<IPhoto> {
    const url = this.getUrl('photoData', `products/${id}`);

    return this.http.get<IPhoto>(url).pipe(
      debounceTime(this.getRandomDelay()),
      map((result) => result)
    );
  }

  getRandomDelay(): number {
    return Math.floor(Math.random() * 100) + 200;
  }
}
