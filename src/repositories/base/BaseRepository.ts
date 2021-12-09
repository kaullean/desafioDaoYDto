import { IWrite } from '../interfaces/IWrite';
import { IRead } from '../interfaces/IRead';
import { Product,newProduct } from '../../models/products/products.interface';

import { ProductosFSDAO } from '../../models/products/DAOs/fs';
import path from 'path'

const filePath = path.resolve(__dirname, '../../models/products/DAOs/persistenciaFs.json');

export abstract class BaseRepository<T> implements IWrite<T>, IRead<T> {

  public productos: Product[];
  public instancia: ProductosFSDAO = new ProductosFSDAO(filePath);

  constructor() {
    this.productos = [];
    this.inicializar(this.productos);
  }
  async inicializar(a:Product[]):Promise<Product[]> {
    a = await this.instancia.get()
    return a; 
  }

  async create(item: newProduct): Promise<boolean> {

    const newItem: Product=
        await this.instancia.add(item)

    if(!newItem){
        return false
    }
    this.productos.push(newItem)
    this.instancia.guardar()
     return true;
  }

  async update(id: string, item: T): Promise<boolean> {
    return true;
  }

  async delete(id: string): Promise<boolean> {
    const deletedProduct:Product = await this.instancia.delete(id);
    if(!deletedProduct){
        return false;
    }
    this.instancia.guardar()
    return true;
  }

  async find(): Promise<Product[]> {
    const itemsFound: Product[] = await this.instancia.get();
    return itemsFound;
  }

  async findOne(id: string): Promise<Product> {
    const itemsFound: Product[] = await this.instancia.get(id);

    return itemsFound[0];
  }
}