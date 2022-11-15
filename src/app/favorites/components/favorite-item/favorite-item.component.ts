import { Component, Input } from '@angular/core';
import { IPhoto } from '../../../photos/models/photo';

@Component({
  selector: 'app-favorite-item',
  templateUrl: './favorite-item.component.html',
  styleUrls: ['./favorite-item.component.scss'],
})
export class FavoriteItemComponent {
  @Input() photo!: IPhoto;
}
