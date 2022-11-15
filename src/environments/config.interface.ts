export type ApiEndpoint = 'photoData';

export interface Config {
  production: boolean;
  apiEndpoints: Record<ApiEndpoint, string>;
}
