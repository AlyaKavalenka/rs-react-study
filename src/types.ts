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
  date: Date;
  order: string;
}
