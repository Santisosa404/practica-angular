export class Articulo {
  id: number;
  nombre: string;
  talla: string; //Para que las camisetas sean M o S
  cantidad: number;
  precioOriginal: number;
  precioRebajado: number;
  constructor(id,nombre,talla,cantidad,precioOrginal,precioRebajado) {
    this.id=id;
    this.nombre=nombre;
    this.talla=talla;
    this.cantidad=cantidad;
    this.precioOriginal=precioOrginal;
    this.precioRebajado=precioRebajado;
  }





}
