
import { Product } from '../products.interface';

export default class ProductsDTO {
    _id: string;
    FyH:Date;
    id:string;
    timestamp: Date;
    nombre: string;
    descripcion: string;
    codigo: string;
    fotoUrl: string;
    precio: number;
    stock: number;

  constructor(data: Product) {
    this.nombre = data.nombre;
    this.timestamp = data.timestamp;
    this.descripcion = data.descripcion;
    this.codigo = data.codigo;
    this.fotoUrl = data.fotoUrl;
    this.precio = data.precio;
    this.stock = data.stock;
    this._id = data._id || '';
    this.id = data._id || '';
    this.FyH= new Date();
  }
}