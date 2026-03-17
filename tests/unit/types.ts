// types.ts

type User = {
  id: number;
  name: string;
  email: string;
};

type Product = {
  id: number;
  name: string;
  price: number;
};

type ProductCard = {
  id: number;
  name: string;
  price: number;
  image: string;
  isFavorite: boolean;
};

type CartItem = {
  id: number;
  product: Product;
  quantity: number;
};