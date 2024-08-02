export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  stock: number;
  image: string;
  categoryId: number;
}

export interface CartButtonProps {
  product: ProductPreview;
}

export interface ProductPreview {
  id: number;
  name: string;
  description?: string;
  price: number;
  image: string;
}

export interface ButtonProductsTypes {
  title: string;
  color: string;
}

export interface ProducDetailParams {
  params: {
    id: number;
  };
}

export interface Order {
  id: number;
  date: string;
  status: string;
}

export interface User {
  id?: string;
  name: string;
  email: string;
  address: string;
  phone: string;
  password: string;
  orders?: Order[];
  prevUser?: string;
}

export interface AuthContextType {
  user: User | null;
  setUser: (user: User | null) => void;
}

export interface Credential {
  email: string;
  password: string;
}

export interface ApiResponse {
  products: Product[];
}

export type Errors = Partial<User>;

export type CredentialErrors = Partial<Credential>;

export interface AuthContextProps {
  token: string | null;
  setToken: (token: string | null) => void;
  user: User | null;
  setUser: (user: User | null) => void;
}
