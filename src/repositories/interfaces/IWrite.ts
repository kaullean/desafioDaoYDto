import { Product,newProduct } from "../../models/products/products.interface";

export interface IWrite<T> {
    create(item: newProduct): Promise<boolean>;
    update(id: string, item: T): Promise<boolean>;
    delete(id: string): Promise<boolean>;
  }