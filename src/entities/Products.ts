export class Producto {

    nombre: string;
    descripcion: string;
    codigo: string;
    fotoUrl: string;
    precio: number;
    stock: number;

    constructor(
     nombre: string,
     descripcion: string,
     codigo: string,
     fotoUrl: string,
     precio: number,
     stock: number) {

      this.nombre = nombre;
      this.descripcion = descripcion;
      this.descripcion = descripcion;
      this.codigo = codigo;
      this.fotoUrl = fotoUrl;
      this.precio = precio;
      this.stock = stock;

    }
}