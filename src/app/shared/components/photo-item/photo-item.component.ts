import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IPhoto } from '../../models/photo';

@Component({
  selector: 'app-photo-item',
  templateUrl: './photo-item.component.html',
  styleUrls: ['./photo-item.component.scss'],
})
export class PhotoItemComponent {
  @Input() cardTooltip = '';
  @Input() photo!: IPhoto;

  @Output() handlePhotoClick = new EventEmitter<IPhoto>();

  handleClick(photo: IPhoto): void {
    this.handlePhotoClick.emit(photo);
  }
}
