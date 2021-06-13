import { Factura } from "./factura";

export class Cliente {
  numero: number;
  razonSocial: string;
  cuit: number;
  facturas: Factura[] = [];

  constructor(numero: number, razonSocial: string, cuit: number) {
    this.numero = numero;
    this.razonSocial = razonSocial;
    this.cuit = cuit;
  }
  
  /*4- Codifique en la clase Cliente una función llamada totalFacturadoXTipoPago (tipoPago:string) 
  que calcule el total facturado por el cliente según el tipo de pago asignado, si el tipo de pago 
  es nulo retorne el monto total sin filtrar. Tomar en cuenta (*) 
  *Factura->tipoPago (valores validos)= E (Efectivo), TD (Tarjeta Credito), TC (Tarjeta Credito), 
  CC (Cuenta Corriente), TR (Tranferencia) */

  totalFacturadoXTipoPago(tipoPago: string | null) {
    let totalFacturado = 0;
    if (this.facturas != null) {
      this.facturas.forEach((factura) => {
        if (tipoPago === "E") {
          if (tipoPago === factura.tipoPago) {
            totalFacturado += factura.calcularTotalFinal();
          }
        }
        else if (tipoPago === "TD") {
          if (tipoPago === factura.tipoPago) {
            totalFacturado += factura.calcularTotalFinal();
          }
        }
        else if (tipoPago === "TC") {
          if (tipoPago === factura.tipoPago) {
            totalFacturado += factura.calcularTotalFinal();
          }
        }
        else if (tipoPago === "TR") {
          if (tipoPago === factura.tipoPago) {
            totalFacturado += factura.calcularTotalFinal();
          }
        }
        else if (tipoPago === "CC") {
          if (tipoPago === factura.tipoPago) {
            totalFacturado += factura.calcularTotalFinal();
          }
        }
        else {
          totalFacturado += factura.calcularTotalFinal();
        }
      });
    }
    return totalFacturado;
  }
}
