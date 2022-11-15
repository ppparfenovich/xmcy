import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { environment } from '../environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ErrorPageComponent } from './core/components/error-page/error-page.component';
import { HeaderComponent } from './core/components/header/header.component';
import { CONFIG_TOKEN } from './core/injection-tokens/config.token';
import { MaterialModule } from './material.module';
import { PhotosModule } from './photos/photos.module';

@NgModule({
  declarations: [AppComponent, HeaderComponent, ErrorPageComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MaterialModule,
    PhotosModule,
  ],
  providers: [
    {
      provide: CONFIG_TOKEN,
      useValue: environment,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
