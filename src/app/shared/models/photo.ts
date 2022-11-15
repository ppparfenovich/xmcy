export interface IPhoto {
  id: number;
  title: string;
  description: string;
  stock: number;
  thumbnail: string;
}

export interface IPhotoResponse {
  products: IPhoto[];
}
