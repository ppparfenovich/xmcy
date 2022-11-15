import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IPhoto } from '../../models/photo';

@Component({
  selector: 'app-photos-list',
  templateUrl: './photos-list.component.html',
  styleUrls: ['./photos-list.component.scss'],
})
export class PhotosListComponent {
  @Input() cardTooltip: string = '';
  @Input() photos: IPhoto[] = [];

  @Output() handleClick = new EventEmitter<IPhoto>();

  identifyById(index: number): number {
    return index;
  }

  handleItemClick(photo: IPhoto): void {
    this.handleClick.emit(photo);
  }
}
