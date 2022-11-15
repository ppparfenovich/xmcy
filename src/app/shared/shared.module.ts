import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { InfiniteScrollComponent } from './components/infinite-scroll/infinite-scroll.component';

@NgModule({
  declarations: [InfiniteScrollComponent],
  imports: [CommonModule],
  exports: [InfiniteScrollComponent],
})
export class SharedModule {}
