import { Product } from "../../models/products/products.interface";
export interface IRead<T> {
    find(item: Product): Promise<Product[]>;
    findOne(id: string): Promise<Product>;
  }