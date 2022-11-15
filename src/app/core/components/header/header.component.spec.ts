import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MaterialModule } from '../../../material.module';
import { HeaderComponent } from './header.component';
import { HarnessLoader } from '@angular/cdk/testing';
import { TestbedHarnessEnvironment } from '@angular/cdk/testing/testbed';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';

// @Component({ selector: 'mat-toolbar', template: '' })
// class MatToolBarComponent {}

// describe('HeaderComponent', () => {
//   let component: HeaderComponent;
//   let fixture: ComponentFixture<HeaderComponent>;
//   let loader: HarnessLoader;

//   beforeEach(async () => {
//     await TestBed.configureTestingModule({
//       declarations: [HeaderComponent],
//       imports: [MatToolbarHarness, MatButtonModule],
//     }).compileComponents();

//   });

//   beforeEach(() => {
//     fixture = TestBed.createComponent(HeaderComponent);
//     component = fixture.componentInstance;
//     loader = TestbedHarnessEnvironment.loader(fixture);
//     fixture.detectChanges();
//   });

// });

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HeaderComponent],
      imports: [MatToolbarModule, MatButtonModule],
      // schemas: [NO_ERRORS_SCHEMA],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
