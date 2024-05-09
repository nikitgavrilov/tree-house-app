export interface IProduct {
  id: number;
  title: string;
  price: number;
  image: string;
  collection: string;
  category: string;
  size: string;
  material: string;
  reviews: {
    total: number;
    messages: string[];
  };
}
