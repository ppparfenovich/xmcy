import { IPhoto, IPhotoResponse } from '../models/photo';

export const MOCK_PHOTO_LIST: IPhoto[] = [
  {
    id: 1,
    title: 'Title',
    description: 'Description',
    stock: 5,
    thumbnail: 'url',
  },
  {
    id: 2,
    title: 'Title2',
    description: 'Description2',
    stock: 5,
    thumbnail: 'url2',
  },
  {
    id: 3,
    title: 'Title3',
    description: 'Description3',
    stock: 5,
    thumbnail: 'url3',
  },
];

export const MOCK_PHOTO_DATA: IPhoto = {
  id: 1,
  title: 'Title',
  description: 'Description',
  stock: 5,
  thumbnail: 'url',
};

export const MOCK_PHOTO_RESPONSE: IPhotoResponse = {
  products: MOCK_PHOTO_LIST,
};
