export interface IPhoto {
  id: number;
  title: string;
  thumbnail: string;
}

export interface IPhotoResponse {
  products: IPhoto[];
}
