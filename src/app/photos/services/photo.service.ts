import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { IPhoto, IPhotoResponse } from '../../shared/models/photo';

const BASE_URL = 'https://dummyjson.com/';

enum PHOTO_REQUEST_PARAMS {
  LIMIT = 'limit',
  SKIP = 'skip',
}

const PHOTO_DATA_SHOWING = 3;

@Injectable({
  providedIn: 'root',
})
export class PhotoService {
  constructor(private readonly http: HttpClient) {}

  getProducts(page: number): Observable<IPhoto[]> {
    const productsLoad = PHOTO_DATA_SHOWING * page;

    const url = BASE_URL + 'products';
    let params: HttpParams;

    page === 1
      ? (params = new HttpParams().set(
          PHOTO_REQUEST_PARAMS.LIMIT,
          PHOTO_DATA_SHOWING
        ))
      : (params = new HttpParams()
          .set(PHOTO_REQUEST_PARAMS.LIMIT, PHOTO_DATA_SHOWING)
          .set(PHOTO_REQUEST_PARAMS.SKIP, productsLoad - PHOTO_DATA_SHOWING));

    return this.http
      .get<IPhotoResponse>(url, { params })
      .pipe(map((result) => result.products));
  }

  getProductById(id: string): Observable<IPhoto> {
    const url = BASE_URL + `products/${id}`;

    return this.http.get<IPhoto>(url).pipe(map((result) => result));
  }
}
