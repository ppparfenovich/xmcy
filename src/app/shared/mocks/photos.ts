import { IPhoto, IPhotoResponse } from '../models/photo';

export const MOCK_PHOTO_LIST: IPhoto[] = [
  {
    id: 1,
    title: 'Title',
    thumbnail: 'url',
  },
  {
    id: 2,
    title: 'Title2',
    thumbnail: 'url2',
  },
  {
    id: 3,
    title: 'Title3',
    thumbnail: 'url3',
  },
];

export const MOCK_PHOTO_DATA: IPhoto = {
  id: 1,
  title: 'Title',
  thumbnail: 'url',
};

export const MOCK_PHOTO_RESPONSE: IPhotoResponse = {
  products: MOCK_PHOTO_LIST,
};
