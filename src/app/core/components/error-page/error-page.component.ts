import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PATH } from '../../../app-routing.module';

@Component({
  selector: 'app-error-page',
  templateUrl: './error-page.component.html',
  styleUrls: ['./error-page.component.scss'],
})
export class ErrorPageComponent {
  constructor(private readonly router: Router) {}

  goHome(): void {
    this.router.navigateByUrl(`${PATH.HOME}`);
  }
}
