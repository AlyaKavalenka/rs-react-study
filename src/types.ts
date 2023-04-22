export default interface ICard {
  id: number;
  name: string;
  description: string;
  price: number;
  popularity: number;
  stock: number;
  animeName: string;
  category: string;
  images: string[] | undefined[];
  date: string;
  order: string;
}

export interface IFormInputs {
  id: number;
  name: string;
  description: string;
  price: number;
  date: string;
  category: string;
  order: string;
  images: string[] | undefined[];
  check: boolean;
}
