import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { finalize, debounceTime } from 'rxjs/operators';
import { LoadingService } from '../services/loading/loading.service';

@Injectable()
export class NetworkInterceptor implements HttpInterceptor {
  constructor(private loader: LoadingService) {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    this.loader.show();
    return next.handle(request).pipe(
      debounceTime(this.getRandomDelay()),
      finalize(() => {
        this.loader.hide();
      })
    );
  }

  getRandomDelay(): number {
    return Math.floor(Math.random() * 100) + 200;
  }
}
