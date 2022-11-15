import { Injectable, Injector } from '@angular/core';
import { Location } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { ApiEndpoint, Config } from '../../../../environments/config.interface';
import { CONFIG_TOKEN } from '../../injection-tokens/config.token';

/** Base class for services working with APIs */
@Injectable()
export abstract class ApiService {
  protected readonly config: Config;
  protected readonly http: HttpClient;

  protected constructor(protected readonly injector: Injector) {
    this.config = injector.get(CONFIG_TOKEN);
    this.http = injector.get(HttpClient);
  }

  /** Combines API endpoint and path into a single URL */
  protected getUrl(api: ApiEndpoint, path: string): string {
    return Location.joinWithSlash(this.config.apiEndpoints[api], path);
  }
}
