import { Cliente } from "./cliente";
import { DetalleFactura } from "./detalleFactura";

export class Factura {
  letra: string;
  numero: number;
  recargo: number;
  tipoPago: string;
  totalItems: number;
  totalFinal: number;
  fecha: Date;
  cliente: Cliente;
  detallesFacturas: DetalleFactura[] = [];

  constructor(letra: string, numero: number, recargo: number, tipoPago: string, totalItems: number, totalFinal: number, fecha: Date, cliente: Cliente){
     this.letra = letra;
     this.numero = numero;
     this.recargo = recargo;
     this.tipoPago = tipoPago;
     this.totalItems = totalItems;
     this.totalFinal = totalFinal;
     this.fecha = fecha;
     this.cliente = cliente; 
  }

  /* 2- Codifique en la clase ComprobanteVenta una función llamada calcularTotalItems () 
  que calcule el monto resultante de la suma de los subtotales de los artículos asociados 
  al comprobante y asigne el resultado al campo totalItems, reutilice el método calcularSubTotal() 
  del punto anterior. */

  calcularTotalItems() {
      if (this.detallesFacturas != null) {
          this.detallesFacturas.forEach(detalle => {
              this.totalItems += detalle.calcularSubTotal();
          })
      }
      return this.totalItems;
  }

  /*3- Codifique en la clase ComprobanteVenta una función llamada calcularTotalFinal () 
  que será equivalente al monto total de ítems + el recargo asignado a la factura. */
  
  calcularTotalFinal(){
      return this.totalFinal =  this.totalItems + this.recargo;
  }
}
